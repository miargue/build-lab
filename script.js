// =============================================
// script.js — Interactions & Animations
// Shared by index.html and coming-soon.html.
// =============================================

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
