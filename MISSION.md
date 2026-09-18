# Founder Notebook

Welcome to your Founder Notebook. This is the single source of truth for your startup project. As founder and lead decision-maker, use this file to define your concept, guide OpenCode, and track every important decision.

---

## 1. Vision & Problem Discovery

*The foundation: Knowledge → Problem → Solution → Value → Product*

- **Domain / Industry:** Shift-based operations, starting with warehouse logistics (a 24/7 workplace)
- **Target Audience (Who is this for?):** Shift leads and managers who run a shift and hand it off to the next person — specifically in a warehouse like Amazon, where missed handover details can delay customer shipments
- **The Core Problem (What pain point are you solving?):** When one shift ends, the next shift wastes time figuring out what happened, what's left, and what needs attention. Information is scattered across sticky notes, Slack messages, or verbal handoffs — and in a warehouse, a missed detail can directly delay a customer's shipment
- **Proposed Solution:** A single-page handover board that the shift lead updates *throughout* the shift whenever something important happens. The next lead sees only the current, always-up-to-date state at a glance — status, notes, outstanding tasks, and key info. No history, no clutter, no digging. The single most essential function is *reading*: see the current shift state at a glance; logging a note in seconds is secondary, because the writer serves the reader. The landing page has one button — "Open HandOff" — so a visitor clicks straight into the working board and tries it immediately (until the board itself exists, "Open HandOff" leads to a frontend-only waitlist page — see Decision Log, 2026-09-17)
- **Value Proposition (Why choose this over existing alternatives?):** "Shift teams lose time and miss critical details when one shift hands off to the next. This is a single page that always shows the current state of the shift at a glance — free from chat noise, impossible to miss, and ready in seconds — so the next lead knows exactly what is happening the moment they walk in."

---

## 2. Brand Identity & Design System

*Define the visual and emotional tone before generating code or copy.*

- **Company / Product Name:** HandOff
- **Tagline:** Know the shift before you walk in.
- **Brand Personality / Tone of Voice (e.g., Playful, Minimalist, Bold, Professional):** Minimalist, approachable, crisp
- **Color Palette (Mint Calm):**
  - Primary: `#0F766E`
  - Secondary: `#14B8A6`
  - Accent: `#F59E0B`
  - Background: `#F6F8F7`
  - Surface / Card: `#FFFFFF`
  - Text (Primary / Muted): `#1C2B27` / `#5F6F6A`
  - Status (Good / Watch / Urgent): `#22C55E` / `#F59E0B` / `#EF4444`
- **Typography:**
  - Heading Font: Space Grotesk (Google Fonts)
  - Body Font: Inter (Google Fonts)
- **Button Styles:**
  - Primary: teal `#0F766E` fill, white text, medium weight, soft shadow — darkens on hover, presses down on click
  - Secondary: white surface, thin border, teal text — border darkens on hover
  - Focus ring: soft teal glow for keyboard users (accessibility)
- **Border Radius Rules:**
  - Small: `4px` — inputs, chips, small labels
  - Medium: `8px` — buttons, cards
  - Large: `12px` — panels, modals, the board 

---

## 3. Website Structure & Page Architecture

*Outline the narrative flow and layout of the public-facing website.*

- **Primary Goal / Conversion Action:** "Open HandOff" — the one button a visitor clicks to try the working board immediately (matches Section 1's chosen CTA; interim target is the waitlist page, `coming-soon.html`, until the board is built)
- **Page Sections:**
  1. **Hero Section:** Headline: "Know the shift before you walk in." (revised 2026-09-18 after peer testing; was "One glance. The whole shift.") — Subheadline: HandOff gives shift leads the whole operation in one glance — status, notes, tasks, and what needs attention — No sticky notes. No digging through Slack. No missed details that delay shipments — Primary CTA: [Open HandOff] — Hero visual: a mockup of the live board
  2. **Social Proof / Credibility:** Headline: "Built for teams that can't afford to miss a beat." — made for 24/7 warehouse operations, where the next shift starts the exact moment yours ends — *placeholder for real testimonials/user stories*
  3. **Feature Highlights / Value Drivers:** Headline: "Everything the next shift needs. Nothing it doesn't." — status at a glance (green = steady, amber = watch, red = handle it) — notes in seconds, captured when it matters — no history, no clutter, just the current state
  4. **How It Works / Product Demo:** Problem: "A missed handover can delay real shipments." — Solution: "HandOff keeps the current state front and center." — outgoing lead updates the board throughout the shift — incoming lead reads the truth at a glance, no scrolling, no digging
  5. **Pricing / Tiers (Optional):** Not needed for now — prototype stays free
  6. **FAQ / Objection Handling:** Handles the big objection — "How is this better than Slack or a shared doc?" — answer: one page, current state always on top, free from chat noise
  7. **Footer / Secondary CTAs:** Quiet reassurance line: "Free for your first shift." — small secondary link back up to the Hero CTA 

---

## 4. Decision Log

*Follow the cycle: Think → Ask → Evaluate → Decide → Build*

| Date | Topic / Area | Options Considered | Final Decision & Rationale | Status |
| :--- | :--- | :--- | :--- | :--- |
| *2026-09-17* | *Core startup direction* | *Shift handover board vs. generic task tracker* | *Shift handover board — specific, pressing problem in 24/7 workplaces; passes all five benchmarks (User, Problem, Value, Feasibility, Clarity)* | *Done* |
| *2026-09-17* | *History feature* | *Keep full handover history vs. drop it for now* | *Dropped for now — next shift checks the latest state, not the past; keeps v1 simple and focused* | *Done* |
| *2026-09-17* | *When the board is filled in* | *End-of-shift form vs. updated throughout the shift* | *Updated throughout the shift — a living note taken moment-by-moment, so handover is already done before the shift ends* | *Done* |
| *2026-09-17* | *Core value vs. existing tools* | *Google Doc / Slack thread vs. purpose-built single board* | *Single board wins — the current state is always in one place, front and center, free from chat and thread noise* | *Done* |
| *2026-09-17* | *Single most essential function* | *Reading the state vs. writing notes* | *Reading wins — "see the current state at a glance" is the one essential function; notes are secondary and serve the reader* | *Done* |
| *2026-09-17* | *Primary CTA* | *Open the Board vs. Join the Waitlist vs. Book a Demo* | *"Open the Board" — the visitor clicks straight into the working prototype; matches low-friction trial and demo-based value* | *Done* |
| *2026-09-17* | *Color palette* | *Quiet Blue vs. Warm Paper vs. Mint Calm* | *Mint Calm — teal/amber balance mirrors the status language; distinctive but calm* | *Done* |
| *2026-09-17* | *Product name* | *HandOff vs. Lowdown vs. Backstop* | *HandOff — describes the job in one word, works as noun and verb* | *Done* |
| *2026-09-17* | *Tagline* | *Four tagline options considered* | *"Know the shift before you walk in." — pulled straight from the 20-second pitch* | *Done* |
| *2026-09-17* | *Landing page structure* | *Fit copy into Section 3's 7-slot template vs. add a separate Page Architecture section* | *Fit into the existing Section 3 layout — Hero, Social Proof, Features, How It Works, Pricing, FAQ, Footer — all supporting the single "Open HandOff" CTA* | *Done* |
| *2026-09-17* | *CTA revised after naming* | *Open the Board vs. Try HandOff vs. Open HandOff* | *"Open HandOff" — brand-forward, reads like opening a ready app, neutral on role, fits minimalist crisp tone* | *Done* |
| *2026-09-17* | *Motion budget* | *Multiple entrances, scroll reveals, hover flourishes vs. none* | *1 hero entrance (fade + rise, 0.6s) + hover/press microinteractions only — within TECH.md budget (1 hero + 1 scroll + 1 micro); respects prefers-reduced-motion* | *Done* |
| *2026-09-17* | *Navigation behavior* | *Instant anchor jump vs. smooth scroll; mobile menu stays open vs. closes* | *`scroll-behavior: smooth` + tiny vanilla JS closes the mobile menu after a nav tap* | *Done* |
| *2026-09-17* | *"One CTA" interpretation* | *Literally one button vs. one action in standard placements* | *"Open HandOff" is a single action placed in the navbar + hero (standard pattern, no competing actions). Founder ratified on 2026-09-17: keep both* | *Ratified* |

| *2026-09-17* | *CTA target for launch* | *Dead `#hero` link vs. building `board.html` vs. interim waitlist* | *`board.html` is not built yet. "Open HandOff" now points to `coming-soon.html`, a branded waitlist page. No backend exists (frontend-only), so signups confirm on the page instead of saving.* | *Done* |
| *2026-09-18* | *Feature: Landing Page (Stage 5) — status* | *In-progress vs. complete* | *Complete: all sections, motion, navigation JS, and the interim waitlist page built, served, and audited (5-Point Audit: 0 Critical). Spec synced — SPECS/2026-09-17-base-shell/ now reflects what actually shipped.* | *Done* |

| *2026-09-18* | *Hero copy revision* | *Evocative ("One glance. The whole shift.") vs. explicit (who + problem)* | *Peer testing showed the hero wasn't stating who we help or what problem we solve. New copy leads with the 20-second pitch ("Know the shift before you walk in.") and names the audience (shift leads) + the pain (sticky notes / Slack digging / missed details that delay shipments). No style, navbar, or CTA changes.* | *Done* |
| *2026-09-18* | *Scroll-triggered reveal* | *No scroll effect vs. one subtle reveal* | *Added the one allowed scroll effect (TECH.md budget): content sections fade + rise into view via IntersectionObserver and re-trigger when scrolled back up. Gated on a `.js` flag so no-JS and `prefers-reduced-motion` users always see the content. Budget now used: 1 hero + 1 scroll + 1 micro.* | *Done* |

---

## 5. Notes & Prompts for OpenCode

*Use this section to draft prompt briefs, review feedback, and keep track of pending tasks.*

- [x] **Feature: Landing Page + interim waitlist (Roadmap Stage 5) — COMPLETE (2026-09-18).** Synced spec in `SPECS/2026-09-17-base-shell/` (requirements.md, plan.md, validation.md). 5-Point Quality Audit: 0 Critical.
- [x] Define core problem statement and audience
- [x] Select color palette and typography
- [x] Draft website copy for hero section
- [x] Build responsive hero and navigation components
- [x] Implement feature showcase sections
- [x] Add interactive elements and conversion forms — interim frontend-only waitlist on `coming-soon.html` (signups confirm on-page; a real backend endpoint is planned for later)
- [x] Final visual polish and responsive testing
