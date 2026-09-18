# Plan: Landing Page — Foundation, Sections, Motion, and Interim Waitlist

Date: 2026-09-17
Last updated: 2026-09-18
Status: **Completed**

Each task group builds on the previous one. Check (`[x]`) marks show the work
that was actually done, in order.

## Task Group 1 — Foundation tokens in `style.css`

- [x] Fonts: `--font-heading: "Space Grotesk"`, `--font-body: "Inter"`
- [x] Colors: background, surface, primary, secondary, accent, text, text-muted
- [x] Status tokens: good, watch, urgent
- [x] Radius scale: `--radius-sm` 4px / `--radius-md` 8px / `--radius-lg` 12px
- [x] `--shadow-soft` (and later `--shadow-lift`)
- [x] Spacing scale and base reset kept

## Task Group 2 — Skeleton in `index.html`

- [x] `<title>` = "HandOff — Know the shift before you walk in."
- [x] Google Fonts linked before `style.css`
- [x] Semantic `<header>` with "HandOff" wordmark, sticky navbar
- [x] Six `<section>` containers: `#hero`, `#problem`, `#solution`, `#features`,
      `#social-proof`, `#faq`
- [x] Quiet `<footer>`
- [x] `<script src="script.js">` kept at the end of `<body>`

## Task Group 3 — Serve and verify

- [x] Python HTTP server on `0.0.0.0:3000` serving `build-lab/`
- [x] `curl` checks pass locally and at the public Codio URL (HTTP 200)
- [x] Public URL reported to the user for a browser check

## Task Group 4 — Content sections + copy

- [x] Hero: headline, subheadline, "Open HandOff" CTA, CSS board mockup
- [x] Problem / Solution / Feature Highlights / Social Proof / FAQ with the
      MISSION.md §3 copy
- [x] Footer with reassurance line and back-to-top link

## Task Group 5 — Motion budget

- [x] `@keyframes fade-rise` hero entrance (0.6s, staggered 0.15s)
- [x] Feature-card hover lift (`translateY(-4px)` + `--shadow-lift`)
- [x] `prefers-reduced-motion` guard
- [x] `scroll-behavior: smooth` + `scroll-margin-top` for the sticky header
- [x] Scroll-triggered section reveal (`IntersectionObserver`, `.js`-gated,
      `.is-visible`, re-triggers on scroll back up)

## Task Group 6 — Navigation interactions

- [x] `script.js` closes the mobile hamburger menu after a nav tap

## Task Group 7 — Interim waitlist page

- [x] `coming-soon.html` created (shared tokens/fonts/header/footer)
- [x] Frontend-only email form with `Join the waitlist` button
- [x] On-page confirmation + email validation (in `script.js`, guarded)
- [x] Quiet `.back-link` instead of a second primary button (no competing CTA)
- [x] Both "Open HandOff" CTAs repointed to `coming-soon.html`

## Task Group 8 — Post-launch follow-ups (2026-09-18)

- [x] Scroll-reveal reliability: threshold 0.15 → 0.1, drift 12px → 16px, asset
      links bumped to `?v=` (cache-busting) so stale files can't hide the effect
- [x] Social-proof: 3 placeholder testimonial cards (fake; swap for real
      stories before public launch)
- [x] Problem section: illustrative amber bar chart (pure CSS, page-labelled
      "illustrative"); Solution section: old-way vs. HandOff benefit table —
      same three tasks and figures across both
- [x] Problem layout: chart positioned on the left, supporting text on the
      right (founder preference), table keeps text-left / table-right
- [x] Docs re-verified so `requirements.md`, `plan.md`, `validation.md`,
      `ROADMAP.md`, and `MISSION.md` all match what actually shipped

## Checks that ran before marking complete

- `curl` HTTP 200 for `/`, `/coming-soon.html`, `/style.css`, `/script.js`
  (local + public URL)
- `node --check script.js` passes; the page's inline script (when it existed)
  also passed — later moved into `script.js`
- `style.css` braces balanced (132/132); no line longer than 200 chars
- Token audit: no hardcoded hex outside `:root`
- WCAG AA contrast verified on all key pairs (muted 4.96:1, body 13.82:1,
  button 5.47:1, status pill 4.70:1)
- 5-Point Quality Audit: 0 Critical, 1 Important (CTA) — resolved by founder
  decision, 1 Minor fixed
- Scroll-reveal logic proven with a node stub (real `script.js`): `is-visible`
  added on scroll-in, removed on scroll-away, re-added on scroll-back