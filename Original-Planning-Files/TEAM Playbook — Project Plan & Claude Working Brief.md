# TEAM Playbook — Project Plan & Claude Working Brief

> Paste this file into any new Claude conversation along with relevant source documents to continue building this project.

-----

## Project Overview

**Project Name:** TEAM Playbook (working title — can be changed)
**Purpose:** A public-facing web app to educate surgeons, medicine physicians, and advanced practice providers (NPs/PAs) on CMS TEAM payment model participation, clinical documentation improvement (CDI), and HCC/CC/MCC capture.
**URL:** Open public URL, no password required
**Timeline:** MVP to slightly polished version within 2 weeks
**Builder:** Solo developer, strong React background

-----

## The Problem Being Solved

Hospitals participating in the CMS TEAM model need providers to improve clinical documentation in three key document types:

- **History & Physical (H&P)**
- **Progress Notes**
- **Discharge Summary**

These three documents are where coders capture:

- **HCCs** (Hierarchical Condition Categories) — used for risk adjustment in TEAM
- **CCs** (Complicating Conditions) — affect DRG assignment and payment
- **MCCs** (Major Complicating Conditions) — affect DRG assignment and payment at a higher level

> **Important:** The operative note is NOT the primary vehicle for HCC/CC/MCC capture. All provider types — surgeons, medicine physicians, and APPs — share responsibility for documentation in the H&P, progress notes, and discharge summary.

-----

## Target Audience

Three provider types, all with equal access to all content. A **role selector on the landing page** sets perspective/framing but does not restrict content.

|Role                                           |Primary Documentation Touchpoint      |
|-----------------------------------------------|--------------------------------------|
|Surgeons                                       |H&P, operative note, discharge summary|
|Medicine Physicians (hospitalists, consultants)|Progress notes, H&P, discharge summary|
|Advanced Practice Providers (NPs/PAs)          |Daily progress notes, H&P components  |

-----

## The Five TEAM Procedures

The CMS TEAM model currently mandates participation for these five surgical categories:

1. Lower Extremity Joint Replacement (LEJR)
1. Surgical Hip Fracture Management
1. Spinal Fusion
1. Coronary Artery Bypass Graft (CABG)
1. Major Bowel Procedure

-----

## Site Architecture

```
TEAM Playbook
├── Landing Page
│   ├── What is TEAM? (30-second hook)
│   ├── Role selector: Surgeon / Medicine Physician / APP
│   └── Navigation to all modules
│
├── TEAM Overview Module (all audiences)
│   ├── What is the TEAM model?
│   ├── Why it matters for your hospital
│   ├── The 5 covered procedures
│   └── How documentation affects payment
│
├── CDI Fundamentals Module (all audiences)
│   ├── What are CCs and MCCs?
│   ├── What are HCCs?
│   ├── How to document in the H&P
│   ├── How to document in progress notes
│   └── How to document in the discharge summary
│
├── Surgery-Specific TEAM Module (surgeons & APPs primary, all accessible)
│   ├── Lower Extremity Joint Replacement
│   ├── Surgical Hip Fracture
│   ├── Spinal Fusion
│   ├── CABG
│   └── Major Bowel Procedure
│   (Each page: procedure overview, top HCCs, CC/MCC targets, documentation tips)
│
├── Reference Tables (searchable/filterable HTML — NOT PDFs)
│   ├── HCC tables by procedure (5 tables)
│   └── CC/MCC lists
│
└── Interactive Layer
    ├── "Spot the Miss" — identify documentation gaps in sample notes
    └── HCC/CC/MCC Flashcard Quiz — swipe-style self-assessment
```

## Content Creation Progress Tracking

Use a simple `content_status.md` file where you track which modules have been drafted, reviewed, and dropped into components.

-----

## Content Strategy

### Source Material

The project owner has the following in Google Drive:

- HCC tables for each of the 5 TEAM procedures (curated, procedure-specific)
- CC and MCC condition lists
- Articles in PDF format on CDI and TEAM topics
- Draft prose notes in Google Doc format

### How Content Gets Created

**Source material is reference scaffold only — not directly usable.**
All provider-facing content is co-created with Claude using the source docs as input.

**Pipeline:**

```
Source docs (PDFs, Google Docs, tables)
        ↓
Share with Claude in conversation
        ↓
Claude drafts polished, provider-friendly content
        ↓
Owner reviews and refines
        ↓
Drop into React components
```

### Content Principles

- **Time-poor audience** — every piece of content should be consumable in 2–5 minutes
- **Specificity over generality** — “acute blood loss anemia” not “anemia”
- **Show the stakes** — tie documentation gaps to real payment impact where possible
- **Before/after examples** — show underdocumented vs. well-documented notes
- **Physician voice** — written for clinicians, not coders or administrators

### Content Formats Per Module

- **Static briefs** — 2–5 minute reads, prose + key callout boxes
- **Reference tables** — searchable, filterable HTML tables (HCC, CC/MCC)
- **Before/after note examples** — real-looking clinical note snippets
- **Podcast scripts** — short “2-minute drill” audio segments generated from content, delivered via browser TTS or ElevenLabs (no manual recording)
- **Interactive elements** — see below
- 

## Content for each TEAM Procedure

For each procedure you need to produce:

The module content — coach narrative, before/after example, vignette questions
The reference card content — curated ranked lists, exact phrasing, checklist

These are two different writing modes. The module is conversational coaching. The reference card is dense, scannable, clinical.

### TEAM Reference Card Content Structure

TEAM Quick Reference — [Procedure Name]
├── Top 5 MCCs to document (highest payment impact first)
├── Top 10 CCs to document
├── Key HCCs for this patient population
├── Exact phrasing examples
│   "Instead of... write..."
└── One documentation checklist
    □ Anemia — specify type and acuity
    □ Diabetes — specify type and complications
    □ etc.

-----




## Interactive Features (MVP Scope)

### 1. “Spot the Miss”

- Show a realistic-looking progress note or discharge summary
- Provider clicks on documentation gaps
- Instant feedback with explanation and revenue impact in dollars
- Built in React — approximately 1 day of dev work

### 2. HCC/CC/MCC Flashcard Quiz

- Swipe or click through clinical conditions
- Self-assess: “Is this an HCC? A CC? An MCC?”
- Immediate feedback with explanation
- Built in React — approximately 1 day of dev work

### Future Enhancements (Post-MVP)

- Clinical vignette drag-and-drop
- Progress/completion tracking
- Per-module completion certificates
- More complex game mechanics

-----

## Podcast / Audio Strategy

- No manual recording
- Generate short scripts (2–3 minutes per topic) co-written with Claude
- Render via browser Web Speech API (free, no setup) for MVP
- Optionally upgrade to ElevenLabs for more natural voice
- Format: “2-Minute Drill” — punchy, almost sports-radio style
- One audio brief per major module section

-----

## Technical Stack

|Layer     |Choice                                       |
|----------|---------------------------------------------|
|Framework |React                                        |
|Styling   |TBD (Tailwind recommended for speed)         |
|Routing   |React Router                                 |
|State     |useState / useReducer (no backend)           |
|Data      |Static JSON files for tables and quiz content|
|Audio     |Web Speech API (MVP) / ElevenLabs (upgrade)  |
|Deployment|Vercel or Netlify (free static deploy)       |
|Storage   |None — fully static, no backend              |

-----

## Two-Week Sprint Plan

### Week 1 — Structure & Content

|Days|Focus                                                                                      |
|----|-------------------------------------------------------------------------------------------|
|1–2 |Scaffold React app, routing, design system, component library                              |
|3–5 |Content co-creation sessions with Claude — TEAM overview, CDI fundamentals, procedure pages|
|6–7 |Build reference table components, feed in HCC/CC/MCC data                                  |

### Week 2 — Polish & Interactivity

|Days |Focus                                                             |
|-----|------------------------------------------------------------------|
|8–10 |Procedure-specific pages, before/after note examples              |
|11–12|Build “Spot the Miss” and flashcard quiz components               |
|13–14|Mobile polish, audio/podcast integration, deploy to Vercel/Netlify|

-----

## Design Direction

- **Brand feel:** More like a medical education startup than a hospital compliance portal
- **Name:** TEAM Playbook (working title)
- **Tone:** Confident, clinical, slightly editorial — not bureaucratic
- **Mobile first:** Physicians consume content on phones between cases
- **Shareable links:** Each module/page should have a clean URL so physicians can share with colleagues
- **No PDFs:** All content rendered as HTML/JS — never download to read

-----

## Instructions for Claude in Future Sessions

When continuing this project, Claude should:

1. **Treat source documents as scaffolding** — extract key facts and concepts, then rewrite entirely in provider-friendly language
1. **Always write for a time-poor clinician** — lead with the most important point, keep sections short
1. **Use clinical specificity** — condition names should be specific and codeable (e.g., “moderate persistent asthma” not “asthma”)
1. **Flag documentation landmines** — highlight common vague phrases and suggest specific alternatives
1. **Tie content to TEAM payment impact** — always connect documentation behavior to financial outcome where relevant
1. **Generate React-ready content** — prose drafts should be easy to drop into JSX components
1. **Keep interactive content grounded** — vignettes and quiz items should use realistic clinical scenarios, not textbook abstractions

-----

## Open Questions / Decisions Still Needed

- [ ] Final site name (TEAM Playbook confirmed as working title)
- [ ] Color palette and visual identity
- [ ] Whether to include a simple search across all content
- [ ] ElevenLabs vs. Web Speech API for audio
- [ ] Domain name / hosting account
- [ ] Whether to add a “What’s New” or update log as CMS rules evolve

-----

*Last updated: June 2026 | Built with Claude (Anthropic)*