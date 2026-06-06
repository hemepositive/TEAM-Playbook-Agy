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

### Procedure Modules

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

### Core Content

- [x] **CDI Fundamentals Module** — `cdi-fundamentals.md`
  - Full CDI education beyond TEAM mechanics; accuracy principle; coder pipeline; CC/MCC/HCC explained; POA; specificity principle; the three documents; query process; common misses; professional integrity

- [x] **TEAM Overview Module** — `team-overview.md`
  - What TEAM is; which hospitals; the five procedures; target price construction; HCC risk adjustment; quality measures; participation tracks; BPCI/CJR comparison; what it means for physicians

- [x] **Post-Acute Care / Surgical Decisions Module** — `team-surgical-decisions-and-cost.md`
  - Restructured as surgeon-centric: five clinical decisions mapped to dollar consequences
  - Discharge disposition · IRF certification · Discharge summary content · Post-discharge follow-up · Pre-op optimization
  - Readmission causes by procedure; prevention framework; cost tables

- [x] **Landing Page** — `landing-page.md`
  - Hero hook; role selector (Surgeon / Medicine Physician / APP); 60-second TEAM explainer; navigation benefit statements; accuracy principle closing

### Reference Pages

- [x] **General CC/MCC Reference** — `reference-cc-mcc.md`
  - Full specificity guide with clinical indicators, common misses, phrasing examples, audit risk flags
  - Quick-lookup summary table (30+ conditions)

- [x] **General HCC Reference** — `reference-hcc-general.md`
  - What HCCs are; HCC vs CC/MCC comparison table; 180-day lookback; annual requirement; universal documentation principles; navigation to procedure pages

- [x] **HCC Reference — LEJR** — `reference-hcc-lejr.md` (16 variables)
- [x] **HCC Reference — SHFFT** — `reference-hcc-shfft.md` (16 variables)
- [x] **HCC Reference — Spinal Fusion** — `reference-hcc-spinal-fusion.md` (13 variables)
- [x] **HCC Reference — CABG** — `reference-hcc-cabg.md` (12 variables)
- [x] **HCC Reference — Major Bowel** — `reference-hcc-major-bowel.md` (13 variables)

- [x] **APR-DRG SOI/ROM Reference** — `reference-apr-drg.md`
  - APR-DRG vs MS-DRG; SOI vs ROM distinction; 4 subclasses; where APR-DRG is used (commercial, Medicaid, Vizient, US News, TEAM quality); MS-DRG → APR-DRG crosswalk; SOI drivers by procedure

### Quick Reference Cards

- [x] **LEJR Quick Reference** — `reference-lejr.md`
- [x] **SHFFT Quick Reference** — `reference-shfft.md`
- [x] **Spinal Fusion Quick Reference** — `reference-spinal-fusion.md`
- [x] **CABG Quick Reference** — `reference-cabg.md`
- [x] **Major Bowel Quick Reference** — `reference-bowel.md`

### Condition Documentation Cards

- [x] **MCC Condition Cards** — `condition-cards.md` — 20 cards
  - Sepsis · AKI · Metabolic/Toxic Encephalopathy · Severe Malnutrition · Acute Heart Failure · Acute Respiratory Failure · Acute PE · Acute MI · Septic Shock · DIC · Pressure Ulcer III/IV · Aspiration Pneumonia

- [x] **CC Condition Cards** — `condition-cards-cc.md` — 20 cards
  - Hyponatremia · Hypernatremia · Metabolic Acidosis/Alkalosis · Pleural Effusion · Ileus · Peritonitis · C. difficile · DVT · Atelectasis · Hypertensive Crisis · Cellulitis · Osteomyelitis · Cardiomyopathy · Coagulopathy · Moderate Malnutrition · Acute Pancreatitis · Hemiplegia/Hemiparesis · Schizophrenia

---

## In Progress 🔄

_Nothing currently in progress._

---

## To Do — Interactive Content

### Micro-Vignette Scenario Set — `interactive-vignettes.json`

**50 clinical micro-vignettes** in the interactive scenario format (see AKI widget prototype).

**Format per vignette:**

```json
{
  "id": "aki-001",
  "scenario": "On post-op day 2, your patient's creatinine has doubled to 2.2 from a baseline of 1.1...",
  "tags": {
    "condition": "Acute Kidney Injury",
    "classification": "MCC",
    "procedures": ["LEJR", "SHFFT", "Spinal Fusion", "CABG", "Major Bowel"]
  },
  "instead": "Creatinine 2.2, elevated from baseline — likely prerenal. IV fluids running.",
  "write": "Acute kidney injury, stage 2 by KDIGO criteria, likely prerenal...",
  "why": "Creatinine doubled = KDIGO Stage 2. You already made the clinical diagnosis..."
}
```

**Tagging system (enables filtering):**

- `condition` — the specific CC or MCC being taught
- `classification` — MCC or CC
- `procedures` — which TEAM procedures this scenario applies to (one vignette can apply to multiple)
- `audience` — `medicine`, `surgery`, or `both`
- `difficulty` — `1` (straightforward) through `4` (complex, multi-condition)

**Presentation modes:**

- **Random shuffle** — general CDI education; medicine providers; non-procedure-specific learning
- **Procedure filter** — "Show me CABG scenarios only" — surgical audience learning procedure-specific documentation
- **Condition filter** — "Show me all sepsis scenarios" — deep dive on one condition

**Vignette distribution target (50 total):**

| Condition                              | Count | Audience             |
| -------------------------------------- | ----- | -------------------- |
| AKI                                    | 4     | Both                 |
| Sepsis / Septic Shock                  | 4     | Both                 |
| Metabolic/Toxic Encephalopathy         | 4     | Both                 |
| Malnutrition (Severe + Moderate)       | 4     | Both                 |
| Heart Failure (all types)              | 4     | Both                 |
| Acute Respiratory Failure              | 3     | Both                 |
| Atrial Fibrillation                    | 3     | Surgery (CABG, LEJR) |
| COPD with Exacerbation                 | 2     | Both                 |
| OHS                                    | 2     | Surgery              |
| Perioperative MI                       | 2     | CABG                 |
| Acute Blood Loss Anemia                | 2     | Surgery              |
| Pressure Ulcers                        | 2     | Surgery              |
| DVT / PE                               | 2     | Surgery              |
| C. difficile                           | 2     | Major Bowel          |
| Pleural Effusion                       | 2     | CABG                 |
| Dementia with Behavioral Disturbance   | 2     | SHFFT                |
| Ileus                                  | 2     | Major Bowel          |
| CKD (Staged)                           | 2     | Both                 |
| Metastatic Cancer (Active vs. History) | 2     | Major Bowel          |
| Myelopathy                             | 1     | Spinal Fusion        |

**Status:** 4 AKI vignettes written as prototype. Remaining 46 to be written.
**Next session:** Start with sepsis (4) and encephalopathy (4) — highest-yield conditions.

---

### PSI Documentation Clarification Module — `interactive-psi.md` / `reference-psi.md`

**Patient Safety Indicator (PSI) documentation** — a separate but related education track covering the specific documentation language that affects PSI capture and hospital safety reporting.

PSIs are AHRQ-defined complications that appear to be preventable. They feed CMS Hospital Compare, Leapfrog, and value-based purchasing programs. Documentation specificity affects whether a condition codes as a PSI or not — and poorly documented complications can make a hospital's safety profile look worse than it is.

**Planned content:**

- What PSIs are and how they differ from CCs/MCCs
- The PSI indicators most relevant to TEAM procedures:
  - PSI 02 — Death in low-mortality DRGs
  - PSI 03 — Pressure ulcer rate (staging and POA critical)
  - PSI 06 — Iatrogenic pneumothorax
  - PSI 07 — Central venous catheter-related blood stream infection
  - PSI 08 — Postoperative hip fracture
  - PSI 09 — Perioperative hemorrhage or hematoma
  - PSI 11 — Postoperative respiratory failure
  - PSI 12 — Perioperative pulmonary embolism or DVT
  - PSI 13 — Postoperative sepsis
  - PSI 14 — Postoperative wound dehiscence
  - PSI 15 — Accidental puncture or laceration
- How POA status affects PSI calculation
- Documentation language that correctly represents the clinical picture without generating false-positive PSI flags
- Micro-vignettes specific to PSI documentation (5–10, same format as general vignettes, tagged `psi: true`)

**Status:** Not started. Requires no source uploads — can be built from AHRQ public PSI documentation.

---

### Phrasing Quick-Look Widget Data — `phrasing-quicklook-data.json`

**React component:** `phrasing-quicklook-aki.jsx` — prototype built and approved.

**Remaining data to write:** Scenario sets (3–5 per condition) for embedding in condition pages and procedure modules.

Priority order matches highest-yield conditions:

- [ ] Sepsis (4 scenarios)
- [ ] Metabolic/Toxic Encephalopathy (4 scenarios)
- [ ] Severe Malnutrition (4 scenarios)
- [ ] Heart Failure (4 scenarios)
- [ ] Acute Respiratory Failure (3 scenarios)
- [ ] Atrial Fibrillation (3 scenarios — CABG-specific)
- [ ] OHS (3 scenarios)
- [ ] Perioperative MI (3 scenarios — CABG-specific)
- [ ] Myelopathy (3 scenarios — Spinal Fusion-specific)
- [ ] Metastatic Cancer / Active vs. History (3 scenarios — Major Bowel-specific)

---

### CDI Specificity Explorer — Additional Case Sets

**Existing:** Heart failure case (5 diagnoses) — already built as `cdi-specificity-explorer.html`

- [ ] LEJR case set (AKI + OHS + malnutrition)
- [ ] CABG case set (acute systolic HF + periop MI + dilated cardiomyopathy)
- [ ] Major Bowel case set (sepsis + perforation + malnutrition)

Format: JavaScript diagnosis array following existing data model in the HTML file.

---

## To Do — Supporting Content

### Case Walkthrough HTML Pages

Existing: `cdi_case_walkthrough.html` (LEJR — postop AKI)

- [ ] `cdi_shfft_encephalopathy.html` — metabolic encephalopathy after hip fracture
- [ ] `cdi_cabg_hf.html` — acute systolic heart failure after CABG
- [ ] `cdi_bowel_sepsis.html` — septic shock from perforated diverticulitis
- [ ] `cdi_spinal_ohs.html` — OHS vs. OSA in a spine patient

Format: follows `CDI_Walkthrough_PRD.md` design system exactly. CSS: copy verbatim from existing `cdi_case_walkthrough.html`.

### Audio Scripts — Future State

**Deferred** — not a current priority. If added later:

- 6 scripts: one per procedure module + CDI fundamentals
- Format: 250–350 words, conversational, written for ElevenLabs or browser TTS
- Structure: hook → single teaching point → two clinical examples → one-sentence CTA
- Note: procedure module tables and phrasing examples do not translate well to audio; scripts must be separately authored, not read-aloud versions of the modules

---

## To Do — Content Review Pass

These tasks happen after all first-draft content is written:

- [ ] **Callout tag audit** — verify all five procedure modules use the seven-tag vocabulary consistently
- [ ] **Phrasing consistency check** — confirm ❌/✅ format is used uniformly in all `[PHRASING]` blocks
- [ ] **Payment figure review** — all approximate payments use `~$` notation and reference FY2025/FY2026 IPPS; flag any needing FY2026 update
- [ ] **ICD-10 code spot check** — verify CC/MCC designations against CMS MS-DRG V43.0 for the five most-referenced codes per module
- [ ] **Cross-module consistency** — AKI, malnutrition, metabolic encephalopathy, sepsis should have consistent guidance across all five procedure modules and condition cards

---

## Notes and Decisions Log

| Date      | Decision                                                                                       | Rationale                                                                                                                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| June 2026 | Option A callout vocabulary (semantic tags, not presentational)                                | Keeps content layer separate from presentation layer; seven fixed tags are enough for all content types                                                                                                 |
| June 2026 | Component-ready markdown (Option 1) as output format                                           | Maps directly to JSX; section headers = component titles; frontmatter carries route and metadata                                                                                                        |
| June 2026 | Before/after notes use realistic clinical language                                             | Physicians recognize their own note-writing patterns; textbook-perfect bad examples don't land                                                                                                          |
| June 2026 | Major Bowel before/after uses 3-version structure                                              | 3-tier DRG needs to show the intermediate CC-only state, not just base → MCC                                                                                                                            |
| June 2026 | Atrial fibrillation (CABG) and oncology pattern (Major Bowel) get standalone teaching sections | Content is nuanced enough that it gets lost in CC table rows; standalone blocks allow proper framing                                                                                                    |
| June 2026 | Audio scripts deferred to future state                                                         | Content is reference/scanning material; audio adds build complexity without matching physician use patterns                                                                                             |
| June 2026 | Flashcard format replaced by Phrasing Quick-Look Widget                                        | Flashcards imply memorization; Quick-Look is a bedside phrasing reference — same content, right framing for attending physicians                                                                        |
| June 2026 | Micro-vignettes expanded to 50, scenario format                                                | Clinical situation → think → reveal is more engaging and memorable than passive reference; tagging enables procedure-specific and condition-specific filtering for both medicine and surgical audiences |
| June 2026 | PSI documentation module added                                                                 | PSIs affect safety reporting, VBP, and hospital rankings — related but distinct from CC/MCC education; same physician audience, same documentation stakes                                               |
| June 2026 | Site scope expanded beyond TEAM to general CDI                                                 | Condition cards and CDI fundamentals serve medicine/hospitalist audience regardless of TEAM participation; TEAM is the focus but not the only use case                                                  |
| June 2026 | Light mode only for site design                                                                | Text-heavy reference material reads better in light mode; eliminates CSS variable toggling complexity                                                                                                   |
| June 2026 | Single unified nav with role selector on landing page                                          | Option A over role-filtered nav — cleaner to build, landing page role selector does the steering work                                                                                                   |

---

_Project: TEAM Playbook_
_Last updated: June 2026_
_Builder: Solo developer, React stack_
_Content created with Claude (Anthropic)_
