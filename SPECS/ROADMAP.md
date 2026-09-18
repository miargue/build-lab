# Roadmap

This is the six-stage journey from blank canvas to live startup. Each stage builds on the last — do not skip ahead.

---

## Current State

> **Stage 5 complete.** Landing page built, live, and audited: navbar, Hero, Problem, Solution, Features, Social Proof, FAQ, and Footer; motion budget + smooth scrolling added; 5-Point Quality Audit run (CTA interpretation ratified by founder; "Open HandOff" currently lands on a frontend-only waitlist page, `coming-soon.html`; a subtle scroll-triggered section reveal was added per peer feedback). 2026-09-18 follow-ups also shipped: scroll reveal made reliable + more noticeable (cache-busted `?v=` assets, threshold 0.1, 16px drift), social proof filled with **3 placeholder testimonial cards (fake — replace before launch)**, and Problem / Solution now include an **illustrative amber bar chart** and an **old-way vs. HandOff benefit table**. Next: Stage 6 (test, show, ship).

---

## Stage 1 — Find Something Worth Building
**Goal:** Identify a real problem worth solving.

- [ ] Use OpenCode as an interviewer to explore your interests and frustrations
- [ ] Evaluate your best ideas against the 5-Point Filter (User, Problem, Value, Feasibility, Clarity)
- [ ] Write your Founder Decision into `build-lab/MISSION.md`

---

## Stage 2 — Turn the Problem into a Product
**Goal:** Scope down to the simplest useful version.

- [ ] Pass the 20-Second Simplicity Check
- [ ] Define your Target User, Core Solution, and Primary CTA
- [ ] Update `build-lab/MISSION.md` with the refined scope

---

## Stage 3 — Give the Company a Visual Identity
**Goal:** Lock in your design system before writing any code.

- [ ] Choose 3 personality words that define your brand
- [ ] Define your color palette (Background, Primary, Accent, Text)
- [ ] Choose typography (heading font + body font) and UI rules (border radius, spacing)
- [ ] Save the full design system into `build-lab/MISSION.md`

---

## Stage 4 — Plan the Website
**Goal:** Map the story your landing page will tell.

- [ ] Draft the 8-section page architecture (Navbar → Hero → Problem → Solution → Features → Social Proof → CTA → Footer)
- [ ] Answer the core page questions for each section
- [ ] Save the page outline into `build-lab/MISSION.md`

---

## Stage 5 — Build It with Your AI Team
**Goal:** Construct the landing page in focused, reviewable layers.

- [x] Step 1: Base shell + CSS design tokens in `build-lab/index.html` and `build-lab/style.css`
- [x] Step 2: Navbar and Hero section
- [x] Step 3: Content sections (Problem, Solution, Features, Social Proof, Footer / FAQ)
- [x] Add one professional component and apply the motion budget
- [x] Run the 5-Point Quality Audit and fix Critical + Important issues

---

## Stage 6 — Test, Show, and Ship
**Goal:** Get real feedback and launch publicly.

- [ ] Run the 1-Minute Human Test with a peer
- [ ] Triage feedback and fix the 3 most critical items
- [ ] Commit and push to GitHub
- [ ] Deploy to GitHub Pages, Vercel, or Netlify
- [ ] Submit: Startup Name, Value Prop, GitHub URL, Public URL

---

## Reflection
**Goal:** Capture what you learned as a founder.

- [ ] Answer the 5 Founder Reflection questions in `build-lab/MISSION.md`

---

## Long-Term Vision

Once the landing page is live, natural next steps could include:
- Connecting the frontend-only waitlist form to a real backend
- Building out individual feature pages
- Iterating on copy based on real visitor behavior
- Expanding the design system into a full component library
