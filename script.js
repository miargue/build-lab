// =============================================
// script.js — Interactions & Animations
// Shared by index.html and coming-soon.html.
// =============================================

// Tell CSS that JavaScript is available. The reveal effect below only hides
// and fades content when this class is present, so with no JS everything is
// simply visible (no invisible content).
document.documentElement.classList.add('js');

// 1) Close the mobile menu after tapping a navigation link.
//    (Only index.html has a hamburger menu; the guard keeps
//    this harmless on other pages.)
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    if (navToggle) {
      navToggle.checked = false;
    }
  });
});

// 2) Waitlist form on coming-soon.html.
//    Frontend-only for now: the form can't save anywhere (no backend yet),
//    so it just thanks the visitor and hides itself.
//    Hook up a real backend endpoint here later.
const waitlistForm = document.getElementById('waitlist-form');

if (waitlistForm) {
  const waitlistMessage = document.getElementById('waitlist-message');

  waitlistForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Very small check that the email looks like an email.
    const emailInput = document.getElementById('email');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());

    if (!emailOk) {
      emailInput.focus();
      return;
    }

    waitlistForm.hidden = true;
    waitlistMessage.hidden = false;
  });
}

// 3) Scroll-triggered reveal — the one scroll effect in the motion budget.
//    Sections fade + rise in when they scroll into view, and the effect
//    re-triggers when you scroll back up away from them (the class is
//    removed again). Uses IntersectionObserver, as TECH.md says.
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });
} else {
  // Old browsers without IntersectionObserver: never hide the content.
  revealElements.forEach(function (element) {
    element.classList.add('is-visible');
  });
}