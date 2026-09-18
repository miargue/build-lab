# Validation: Landing Page — Foundation, Sections, Motion, and Interim Waitlist

Date: 2026-09-17
Last updated: 2026-09-18
Status: **Verified (2026-09-18)**

How we know this feature is done and can be merged — manual + browser review,
in three stages. All checks below have run and passed; the evidence column
records what confirmed each one.

## Stage 1 — Code check

### Fonts
- [x] `index.html` and `coming-soon.html` load BOTH Google Fonts (Space Grotesk, Inter)
- [x] Fonts are linked BEFORE the `style.css` link
- [x] The `<title>` is: `HandOff — Know the shift before you walk in.`

### Structure
- [x] Semantic `<header>` with the "HandOff" wordmark and sticky navbar
- [x] `<main>` contains `<section>` tags with ids: `hero`, `problem`,
      `solution`, `features`, `social-proof`, `faq`
- [x] `<footer>` exists
- [x] `<script src="script.js">` is the last thing in `<body>` (both pages)
- [x] Both "Open HandOff" CTAs link to `coming-soon.html`

### Tokens
- [x] `style.css` has all of: background, surface, primary, secondary, accent,
      text, text-muted, status good/watch/urgent
- [x] Radius tokens sm/md/lg and shadows `--shadow-soft` + `--shadow-lift`
- [x] No hardcoded hex outside the `:root` block (tints are token-derived rgba)
- [x] No line in `style.css` exceeds 200 chars; braces balanced (99/99)

### JavaScript
- [x] `node --check script.js` passes
- [x] Mobile-menu close + waitlist confirmation are guarded per page
- [x] No inline `<script>` blocks remain in either page

## Stage 2 — Live browser check

- [x] `/` and `/coming-soon.html` return HTTP 200 locally and at the public URL
- [x] All assets (`style.css`, `script.js`) return 200; no console errors at load
- [x] Body background `#F6F8F7`, text `#1C2B27`
- [x] Space Grotesk used for headings, Inter for body
- [x] Hamburger menu appears and works at mobile width (founder confirmed)
- [x] Waitlist form validates an email and shows the on-page confirmation
- [x] Hover lift and hero entrance play; `prefers-reduced-motion` disables them
- [x] Mobile-menu closes after tapping a nav link (per `script.js`)

## Stage 3 — Constitution alignment

- [x] Built spec matches what actually shipped — drift documented in
      `requirements.md` (drift log) and logged in `MISSION.md` §4; founder
      approved the interim waitlist decision on 2026-09-17
- [x] Roadmap Stage 5 checkboxes all marked done; Founder Notebook updated
- [x] 5-Point Quality Audit: 0 Critical, 1 Important (CTA, resolved), 1 Minor
      fixed

## Known gaps (accepted, future work)

- Real waitlist backend — signups are confirmed on-page but not saved
  (frontend-only constitution)
- `board.html` — the true CTA destination; the waitlist stands in until built
- Real testimonials — the 3 cards on the page are **fake placeholder fillers** (2026-09-18); replace with real stories before public launch