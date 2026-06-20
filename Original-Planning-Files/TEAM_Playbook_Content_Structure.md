# TEAM Playbook — Content Structure & Design Philosophy

This document captures decisions made about content design, tone, gamification approach, micro-learning structure, and reference card architecture. Paste alongside the Project Plan when starting content creation sessions with Claude.

---

## Design Philosophy

### The Core Principle

**TEAM Playbook is a confident coach, not a game.**

It respects the clinician's time and intelligence. It does not make them earn the right to see content. It gives them what they need fast, reinforces it with a quick interactive check, and sends them back to their day with something actionable — a printed cheat sheet, a mobile-friendly reference list, a specific phrase they can use in their next note.

### The Coach Voice

Think of the tone as:

A sharp, experienced hospitalist who has seen the revenue cycle data and wants to give you the 5-minute version before your next case.

Not lecturing. Not cheerleading. Just direct, useful, slightly urgent.

**Example of the right tone:**

"For your next hip fracture patient — before you write the discharge summary, ask yourself: did I document the anemia type specifically? Did I mention the diabetes with the correct specificity? Those two alone can shift the DRG. Here's exactly what to write."

### Tone Adjectives

- Professional but not stiff  
- Coaching, not compliance  
- Direct and slightly urgent  
- Clinically specific — never vague  
- Respects that nobody is trying to memorize this material

---

## Gamification Approach

### What This Is (and Isn't)

This is **micro-learning with light engagement mechanics** — not full Duolingo-style gamification. No streaks, no XP requirements, no points or badge systems with real-world rewards.

### What IS Implemented

| Mechanic | Purpose | Implementation |
| :---- | :---- | :---- |
| Bite-sized modules | Fits clinical schedule | Each concept \= 3–5 min max |
| Role memory | Personalized feel | localStorage saves selected role |
| Progress tracking | Visible momentum | "3 of 5 procedures completed" — no pressure |
| Interactive checks | Retention without memorization | 2–3 question vignette after each module |
| Printable references | Real-world utility | Standalone quick reference card per procedure |
| Mobile-friendly tables | Bedside/rounding utility | HCC and CC/MCC lists optimized for phone |

### Local Storage — What Gets Saved

- User's selected role (Surgeon / Medicine Physician / APP)  
- Which modules have been completed  
- No login required for MVP  
- Authorization / CME credit tracking planned for future version

### Future State

- CME credit integration (planned, not MVP)  
- User authentication (planned, not MVP)

---

## Content Unit Structure

Every micro-module — both CDI fundamentals and procedure-specific — follows this five-part structure:

1\. HOOK          (1 paragraph — the stakes, the money, the miss)

2\. CORE CONCEPT  (2–3 min read — the coaching, the explanation)

3\. BEFORE/AFTER  (show don't tell — underdocumented vs. well-documented note)

4\. QUICK CHECK   (2–3 question clinical vignette — interaction, not memorization)

5\. TAKE IT WITH YOU  (link to standalone quick reference card)

### Notes on Each Section

**Hook**

- Lead with consequence, not definition  
- Tie to payment impact or patient care where possible  
- One paragraph maximum  
- Example opener: *"Your last discharge summary probably left $2,400 on the table. Here's what was missing."*

**Core Concept**

- Coach voice throughout  
- Short paragraphs, no walls of text  
- Use specific condition names — "acute blood loss anemia" not "anemia"  
- Tie every concept back to the H\&P, progress note, or discharge summary

**Before/After Example**

- Show a realistic-looking clinical note snippet  
- Underdocumented version first, then corrected version  
- Highlight the specific phrases that changed  
- This is the highest-retention element of the module

**Quick Check**

- 2–3 questions maximum  
- Clinical vignette format — real scenario, not abstract definition quiz  
- Immediate feedback with explanation  
- Goal is concept reinforcement, not memorization or scoring

**Take It With You**

- Direct link to the procedure's standalone Quick Reference Card  
- One sentence CTA: *"Bookmark this page for your next case."*

---

## Quick Reference Cards

### Decision

Reference cards are **standalone pages** with dedicated URLs — not print stylesheets on the module page.

**Why:** More shareable, bookmarkable at bedside, usable as a direct resource without navigating through module content.

### URL Structure

/reference/lejr

/reference/hip-fracture

/reference/spinal-fusion

/reference/cabg

/reference/bowel

/reference/cc-mcc

/reference/hcc

### Reference Card Content Structure (per procedure)

TEAM Quick Reference — \[Procedure Name\]

├── Top 5 MCCs to document     (ranked by payment impact)

├── Top 10 CCs to document     (ranked by clinical relevance)

├── Key HCCs for this patient population

├── Exact phrasing examples

│   "Instead of \[vague phrase\]... write \[specific codeable phrase\]..."

└── Documentation checklist

    □ Anemia — specify type and acuity

    □ Diabetes — specify type and complications

    □ \[condition-specific items\]

### Reference Card Design Requirements

- Fits on **one phone screen with minimal scrolling**  
- Prints cleanly on **one page**  
- No navigation chrome when printing  
- Optimized for mobile first  
- Bookmark-friendly standalone URL

---

## Full Site Route Structure

/                           Landing page \+ role selector

/team                       TEAM Overview module

/cdi                        CDI Fundamentals module

/procedures/lejr            Lower Extremity Joint Replacement module

/procedures/hip-fracture    Surgical Hip Fracture module

/procedures/spinal-fusion   Spinal Fusion module

/procedures/cabg            CABG module

/procedures/bowel           Major Bowel Procedure module

/reference/lejr             Quick Reference Card — LEJR

/reference/hip-fracture     Quick Reference Card — Hip Fracture

/reference/spinal-fusion    Quick Reference Card — Spinal Fusion

/reference/cabg             Quick Reference Card — CABG

/reference/bowel            Quick Reference Card — Major Bowel

/reference/cc-mcc           Quick Reference Card — General CC/MCC

/reference/hcc              Quick Reference Card — General HCC

---

## Content Creation Modes

There are two distinct writing modes for this project. Do not mix them.

| Mode | Used For | Style |
| :---- | :---- | :---- |
| **Module content** | The 5-part learning unit | Conversational coaching, narrative, before/after examples |
| **Reference card content** | Standalone quick reference | Dense, scannable, clinical, ranked lists, exact phrasing |

### Module Content — Writing Guidelines

- Coach voice, second person ("your patient," "before you write")  
- Short paragraphs — 3 sentences max per paragraph  
- Every condition name must be specific and codeable  
- Always anchor to one of the three document types: H\&P, progress note, or discharge summary  
- Tie documentation gaps to payment impact where data supports it

### Reference Card Content — Writing Guidelines

- No prose — lists, tables, and checklists only  
- Rank items by payment impact or clinical frequency  
- Use exact phrasing clinicians can copy into notes  
- "Instead of X, write Y" format for phrasing examples  
- Checklist items should be binary — either documented correctly or not

---

## The Three Document Types (Critical Context)

All HCC, CC, and MCC capture happens in these three documents:

| Document | Who Writes It | Why It Matters |
| :---- | :---- | :---- |
| **History & Physical (H\&P)** | All provider types | Sets the baseline — comorbidities, PMH, active problems |
| **Progress Notes** | All provider types | Daily capture of active and chronic conditions being managed |
| **Discharge Summary** | All provider types | Highest-stakes document — final opportunity to capture everything |

**The operative note is NOT the primary vehicle for HCC/CC/MCC capture.** Coders use the H\&P, progress notes, and discharge summary.

---

## Source Material Notes

- HCC tables exist for each of the 5 TEAM procedures — these are curated and procedure-specific  
- CC and MCC condition lists exist as source material  
- All source material is **scaffold only** — not directly usable as provider-facing content  
- Content is co-created with Claude using source docs as input, then refined by project owner  
- Whether HCC tables are ranked by payment impact or are flat lists TBD — affects reference card editorial work

---

*Last updated: June 2026 | TEAM Playbook Project*  
