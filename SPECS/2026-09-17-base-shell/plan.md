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

## Task Group 6 — Navigation interactions

- [x] `script.js` closes the mobile hamburger menu after a nav tap

## Task Group 7 — Interim waitlist page

- [x] `coming-soon.html` created (shared tokens/fonts/header/footer)
- [x] Frontend-only email form with `Join the waitlist` button
- [x] On-page confirmation + email validation (in `script.js`, guarded)
- [x] Quiet `.back-link` instead of a second primary button (no competing CTA)
- [x] Both "Open HandOff" CTAs repointed to `coming-soon.html`

## Checks that ran before marking complete

- `curl` HTTP 200 for `/`, `/coming-soon.html`, `/style.css`, `/script.js`
  (local + public URL)
- `node --check script.js` passes; the page's inline script (when it existed)
  also passed — later moved into `script.js`
- `style.css` braces balanced; line 1 reformatted to readable rules with a
  whitespace-only-content proof; no line longer than 200 chars
- Token audit: no hardcoded hex outside `:root`
- WCAG AA contrast verified on all key pairs (muted 4.96:1, body 13.82:1,
  button 5.47:1, status pill 4.70:1)
- 5-Point Quality Audit: 0 Critical, 1 Important (CTA) — resolved by founder
  decision, 1 Minor fixed