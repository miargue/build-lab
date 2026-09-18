# Feature: Landing Page — Foundation, Sections, Motion, and Interim Waitlist

Date: 2026-09-17
Last updated: 2026-09-18
Status: **Completed — built, served, and audited (2026-09-18)**

## What this feature is

Originally scoped as the *base shell* (Roadmap Stage 5, Step 1). In practice the
work proceeded in focused layers until the whole landing page was done: the
shell, all six sections, the hero mockup, the motion budget, smooth scrolling,
navigation JS, and the interim waitlist page. This spec now records what was
actually built, so it stays in sync with the repo.

## Drift log (original spec → what actually shipped)

The original 2026-09-17 spec listed the following as **OUT of scope**; each one
was actually built. Every drift was a deliberate founder decision, logged in
`MISSION.md` §4.

| Originally "OUT" | What actually happened |
|---|---|
| Landing page copy (headlines/text) | Full copy written for every section (MISSION.md §3) |
| Hero mockup (the visual board sketch) | CSS board mockup (`.board-card`) built and styled |
| Animations / scroll effects / microinteractions — "`script.js` stays empty" | Motion budget applied (hero `fade-rise` entrance + hover microinteractions) and `scroll-behavior: smooth`; `script.js` now holds real JS |
| Board page (`board.html`) — the CTA target (future) | Still not built. Instead the CTA points at a **new page that no spec had mentioned**: `coming-soon.html`, an interim waitlist page |

Also: the spec promised "HTML and CSS only" — `script.js` now ships two small,
guarded interactions (mobile-menu close; waitlist confirmation).

## Why it matters

Every later component (navbar, hero, sections) reuses the same tokens, so the
site stays consistent. The shell and its design system are the foundation every
future feature (the board, a real waitlist backend) builds on.

## Scope (what is IN — as actually built)

- **Pages:** `index.html` (landing page) and `coming-soon.html` (interim
  waitlist page). Google Fonts (Space Grotesk 500/700, Inter 400/500/600) linked
  before `style.css` on both pages.
- **`index.html`:** `<title>HandOff — Know the shift before you walk in.</title>`;
  semantic `<header>` with sticky navbar (logo, links, single "Open HandOff"
  CTA, mobile hamburger toggle); six `<section>`s with ids — `#hero`,
  `#problem`, `#solution`, `#features`, `#social-proof`, `#faq`; a quiet
  `<footer>`.
- **`style.css`:** full Mint Calm token set in `:root` — brand + status colors,
  fonts, spacing scale, radius `sm`/`md`/`lg`, `--shadow-soft`, `--shadow-lift`.
  No hardcoded hex outside `:root` (only token-derived rgba tints).
- **Section content + copy:** hero, problem, solution, features, social proof
  (placeholder card), FAQ, footer — all from MISSION.md §3, using tokens only.
- **Motion:** `@keyframes fade-rise` hero entrance (0.6s, staggered),
  feature-card hover lift (`translateY(-4px)` + `--shadow-lift`), a
  `prefers-reduced-motion` guard, `scroll-behavior: smooth`, and
  `scroll-margin-top` on anchored sections for the sticky header. Within the
  TECH.md motion budget.
- **`script.js`:** closes the mobile hamburger menu after a nav tap; confirms a
  valid email on the waitlist form (frontend-only).
- **`coming-soon.html`:** branded waitlist page — headline, email form
  (`Join the waitlist`), on-page confirmation, validation, and a quiet
  `.back-link` (no competing CTA button). Both "Open HandOff" CTAs point here.
- **Accessibility:** WCAG AA contrast on all key text/button pairs, `:focus-visible`
  rings, semantic markup.

## Scope (what is OUT — future features)

- **Board page (`board.html`)** — the *real* "Open HandOff" destination (the
  working handover board). Future spec; the waitlist stands in until then.
- **Real waitlist backend** — actually collecting/saving signups. Constitution
  keeps this frontend-only for now (`MISSION.md` §4: no backend, no databases).
- **Real testimonials** — the social-proof cards on the page are fake placeholder
  fillers (3 cards added 2026-09-18); replace with real user stories before
  public launch.

## Design decisions (from the Founder Notebook)

| Source | Decision |
|---|---|
| MISSION.md §1 | Core function is *reading* the current state at a glance |
| MISSION.md §2 | Brand personality: minimalist, approachable, crisp |
| MISSION.md §2 | Palette "Mint Calm"; fonts Space Grotesk + Inter |
| MISSION.md §3 | 7 landing slots; single CTA "Open HandOff" |
| MISSION.md §4 | Motion budget; navigation behavior; CTA target = waitlist interim (2026-09-17) |

## Engineering rules from the constitution that apply

- **Design tokens first** — every component uses variables, never hardcoded hex.
- **No frameworks** — plain HTML, CSS, JS only. No npm, no backend.
- **Keep it simple** — the most obvious solution a beginner can read.
- **One thing at a time** — build in focused layers and review between them.