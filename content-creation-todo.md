# TEAM Playbook — Content Creation To-Do List

## Session Continuity Guide

> Paste this file plus the relevant source documents into any new Claude session to continue building.
> Check off items as they are completed. Update status notes inline.

---

## How to Start a New Session

1. Paste this file into the new conversation
2. Paste `TEAM Playbook — Project Plan & Claude Working Brief.md` (the master brief)
3. Add any specific source documents relevant to the session's work
4. Tell Claude which section of this list you want to work on

---

## Content Format Convention

All content is written as **Option A — Component-ready prose markdown** with these conventions:

- Frontmatter block at top (title, procedure, route, drg-family, tier-structure)
- Section headers map directly to JSX component names (noted in HTML comments above each section)
- Callout vocabulary is **semantic, not presentational** — seven types, fixed vocabulary:

| Tag             | Use When                                                                          |
| --------------- | --------------------------------------------------------------------------------- |
| `[PEARL]`       | The single most important structural fact about this section — render prominently |
| `[NOTE]`        | Neutral informational callout — coding rules, caveats, payment context            |
| `[PHRASING]`    | Before/after documentation example — ❌ wrong phrase, ✅ correct phrase           |
| `[MISS]`        | Documentation error in a before/after note — red treatment                        |
| `[WARN]`        | Vague or incomplete documentation in a before/after note — amber treatment        |
| `[OK]`          | Correct documentation in a before/after note — green treatment                    |
| `[DENIAL-RISK]` | Audit / clinical validation risk — high-scrutiny codes requiring extra criteria   |

- Before/after note highlights use inline markers: `[HIGHLIGHT-MISS]`, `[HIGHLIGHT-WARN]`, `[HIGHLIGHT-OK]`
- File naming: `[procedure]-procedure-module.md`, `cdi-fundamentals.md`, `team-overview.md`, etc.

---

## Completed ✅

- [x] **LEJR Procedure Module** — `lejr-procedure-module.md`
  - 2-tier DRG structure, MCC-only payment impact
  - 6 MCCs, CC table, HCC table, before/after note (AKI), discharge checklist, query prompts

- [x] **SHFFT Procedure Module** — `shfft-procedure-module.md`
  - 3-tier DRG structure, both CC and MCC have payment value
  - 6 MCCs, CC table, HCC table, before/after note (dementia + encephalopathy + malnutrition + anemia), discharge checklist, query prompts

- [x] **Spinal Fusion Procedure Module** — `spinal-fusion-procedure-module.md`
  - Variable tier structure — DRG family navigator required
  - 7 MCCs, CC table with tier applicability matrix, HCC table, before/after note (AKI + OHS + encephalopathy + malnutrition), discharge checklist, query prompts

- [x] **CABG Procedure Module** — `cabg-procedure-module.md`
  - 2-tier DRG structure, 6 DRG families (concomitant procedure determines family)
  - 8 MCCs including cardiac-specific (dilated cardiomyopathy, pulmonary HTN, perioperative MI)
  - Standalone atrial fibrillation teaching section
  - CC table, HCC table, before/after note (4 simultaneous gaps), discharge checklist, query prompts

- [x] **Major Bowel Procedure Module** — `major-bowel-procedure-module.md`
  - 3-tier DRG structure, widest payment spread in TEAM model
  - 7 MCCs including oncology-specific (metastatic disease, intestinal perforation)
  - Standalone oncology documentation teaching section
  - 3-version before/after note (DRG 331 → 330 → 329)
  - CC table, HCC table, discharge checklist, query prompts

---

## In Progress 🔄

_Nothing currently in progress._

---

## To Do — Core Content

### Site-Level Pages

- [ ] **Landing Page Copy** — `landing-page.md`
  - 30-second hook: what is TEAM and why it affects every physician in a participating hospital
  - Role selector framing: Surgeon / Medicine Physician / APP — one paragraph per role explaining what's in it for them
  - Navigation summary: what each module contains, written as benefit statements not topic labels
  - No jargon in the first screen — assume zero prior knowledge of TEAM or DRGs

- [ ] **TEAM Overview Module** — `team-overview.md`
  - What is the TEAM model? (mandatory bundled payment, not optional)
  - Which hospitals are affected and which procedures are included
  - How the target price works — risk adjustment, episode window, performance measurement
  - Why documentation affects both the baseline price AND the quality benchmark
  - The five procedures in plain language with DRG family summaries
  - How TEAM differs from prior models (BPCI, CJR) — for physicians who remember those
  - Source: use `Links_to_TEAM_Resources_List.md` and `How_documentation_affects_TEAM_performance.md`

- [ ] **CDI Fundamentals Module** — `cdi-fundamentals.md`
  - What is CDI?
  - How clinical documentation affect quality reporting and reimbursment
  - What are CCs and MCCs? — plain language, not coding-speak
  - What are HCCs? — risk adjustment context, TEAM-specific framing
  - How DRG tiers work — 2-tier vs. 3-tier with payment examples
  - The specificity principle — why "heart failure" ≠ "acute systolic heart failure"
  - The diagnosis principle — why lab values and symptoms are not diagnoses
  - POA rules — present on admission logic, HAC penalties
  - The three documents that matter: H&P, progress notes, discharge summary
  - Source: use `TEAM_DRG_CC_MCC_Reference.md`, `TEAM_Missed_CC_MCC_Difficulty_Levels.md`

### Reference Pages

- [ ] **General CC/MCC Reference** — `reference-cc-mcc.md`
  - Universal high-value MCCs across all five procedures (sepsis, AKI, metabolic encephalopathy, acute heart failure, severe malnutrition, DIC)
  - Universal high-value CCs across all five procedures
  - Quick-reference: which procedures are 2-tier vs. 3-tier and what that means for CC value
  - POA rules and HAC list overview
  - Annual update reminder and verification guidance
  - Source: use `TEAM_DRG_CC_MCC_Reference.md`

- [ ] **General HCC Reference** — `reference-hcc.md`
  - What HCCs are and how they differ from CCs/MCCs
  - HCC documentation in the TEAM context — target price risk adjustment
  - HCC table by procedure (from `HCC-by-Procedure-Single-Sheet - Sheet1.csv`)
  - Annual documentation requirement — HCCs must be confirmed each year
  - Common HCC documentation failures (staging, "history of" trap, provider-only rule)

- [ ] **Per-Procedure Quick Reference Cards** — one per procedure
  - `reference-lejr.md`
  - `reference-shfft.md`
  - `reference-spinal-fusion.md`
  - `reference-cabg.md`
  - `reference-bowel.md`
  - Each card: top 5 MCCs ranked by impact, top 10 CCs, exact phrasing examples, one-page discharge checklist
  - Structure from `procedure_card_structure.md`
  - These are the dense, scannable companion to the full procedure modules — physicians print or bookmark these

### APR-DRG / Quality Module

- [ ] **APR-DRG SOI/ROM Reference** — `reference-apr-drg.md`
  - What APR-DRG is and how it differs from MS-DRG
  - SOI and ROM subclass definitions (1–4 scale)
  - Why SOI/ROM matters beyond MS-DRG payment (quality metrics, star ratings, commercial contracts, TEAM benchmarking)
  - Crosswalk: MS-DRG CC/MCC tier → approximate APR-DRG SOI subclass
  - SOI/ROM drivers by procedure
  - Source: use `TEAM_APR_DRG_Reference.md`

---

## To Do — Interactive Content

- [ ] **"Spot the Miss" Vignette Set** — `interactive-vignettes.md`
  - 12–14 patient vignettes mapped to difficulty tiers (⭐ through ⭐⭐⭐⭐)
  - Each vignette: patient card, clinical question, answer options, trap explanation, DRG impact
  - Source content exists in `TEAM_Patients_List_v1.md` — needs refinement and expansion
  - One vignette per procedure at each difficulty tier minimum
  - Format: structured data object per vignette (maps to React component props)
  - Note: existing vignettes in source file are good drafts — review and add 2–3 new ones per procedure

- [ ] **HCC/CC/MCC Flashcard Content** — `interactive-flashcards.md`
  - 40–60 flashcard entries
  - Each card: clinical condition name (front), CC/MCC/HCC designation + why + common miss (back)
  - Organized by procedure but shuffleable
  - Format: structured data array (maps directly to React flashcard component)

- [ ] **CDI Specificity Explorer — Additional Case Sets**
  - Existing: Heart failure case (5 diagnoses) — already built as `cdi-specificity-explorer.html`
  - To build: LEJR case set (AKI + OHS + malnutrition)
  - To build: CABG case set (acute systolic HF + periop MI + dilated cardiomyopathy)
  - To build: Major Bowel case set (sepsis + perforation + malnutrition)
  - Format: JavaScript diagnosis array following existing data model in the HTML file

---

## To Do — Supporting Content

- [ ] **"2-Minute Drill" Audio Scripts** — one per procedure module + one for CDI fundamentals
  - `audio-lejr.md`, `audio-shfft.md`, `audio-spinal-fusion.md`, `audio-cabg.md`, `audio-bowel.md`, `audio-cdi-basics.md`
  - Format: punchy, almost sports-radio style — written for browser TTS or ElevenLabs
  - 250–350 words per script (approximately 2 minutes at natural speech pace)
  - Structure: hook → single biggest teaching point → two clinical examples → one-sentence call to action
  - Do not attempt to summarize the full module — pick the highest-yield single teaching point per script

- [ ] **Case Walkthrough HTML Pages** — additional cases beyond existing LEJR AKI example
  - Existing: `cdi_case_walkthrough.html` (LEJR — postop AKI)
  - To build: `cdi_shfft_encephalopathy.html` — metabolic encephalopathy after hip fracture
  - To build: `cdi_cabg_hf.html` — acute systolic heart failure after CABG
  - To build: `cdi_bowel_sepsis.html` — septic shock from perforated diverticulitis
  - To build: `cdi_spinal_ohs.html` — OHS vs. OSA in a spine patient
  - Format: follows `CDI_Walkthrough_PRD.md` design system exactly
  - CSS: copy verbatim from existing `cdi_case_walkthrough.html` — do not modify variable names

---

## To Do — Content Review Pass

These tasks happen after all first-draft content is written:

- [ ] **Callout tag audit** — verify all five procedure modules use the seven-tag vocabulary consistently, no legacy `[CALLOUT-TYPE]` variants remain
- [ ] **Phrasing consistency check** — confirm ❌/✅ format is used uniformly in all `[PHRASING]` blocks
- [ ] **Payment figure review** — all approximate payments should use `~$` notation and reference FY2025 IPPS; flag any that need FY2026 update when that rule is finalized
- [ ] **ICD-10 code spot check** — verify CC/MCC designations against CMS MS-DRG V43.0 for the five most-referenced codes per module
- [ ] **Cross-module consistency** — conditions that appear in multiple modules (AKI, malnutrition, metabolic encephalopathy, sepsis) should have consistent documentation guidance across all five

---

## Notes and Decisions Log

| Date      | Decision                                                                                       | Rationale                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| June 2026 | Option A callout vocabulary (semantic tags, not presentational)                                | Keeps content layer separate from presentation layer; seven fixed tags are enough for all content types |
| June 2026 | Component-ready markdown (Option 1) as output format                                           | Maps directly to JSX; section headers = component titles; frontmatter carries route and metadata        |
| June 2026 | Before/after notes use realistic clinical language                                             | Physicians recognize their own note-writing patterns; textbook-perfect bad examples don't land          |
| June 2026 | Major Bowel before/after uses 3-version structure                                              | 3-tier DRG needs to show the intermediate CC-only state, not just base → MCC                            |
| June 2026 | Atrial fibrillation (CABG) and oncology pattern (Major Bowel) get standalone teaching sections | Content is nuanced enough that it gets lost in CC table rows; standalone blocks allow proper framing    |

---

_Project: TEAM Playbook_
_Last updated: June 2026_
_Builder: Solo developer, React stack_
_Content created with Claude (Anthropic)_
