---
title: "HCC Reference: General Guide and Cross-Procedure Overview"
procedure: null
route: /reference/hcc
drg-family: null
tier-structure: null
---

<!-- PageHero -->
# HCC Reference: What HCCs Are and Why They Matter in TEAM

HCCs are not a billing concept. They are a risk measurement system — CMS's method for predicting how expensive a patient's care will be, based on their documented chronic disease burden. Under TEAM, that prediction becomes the target price benchmark. If your patient's HCCs are accurate and documented, the target price reflects their actual clinical complexity. If they are underdocumented, the target price is set too low, and the hospital is held to a benchmark built for a healthier patient than the one you actually operated on.

This page explains how HCCs work, how they differ from CCs and MCCs, and what the 180-day lookback window means in practice. Procedure-specific HCC tables are in the five individual procedure reference pages.

[PEARL] HCCs affect the target price — what your hospital is expected to spend. CCs and MCCs affect the DRG tier — what your hospital is paid for the hospitalization. They are different systems, operating in parallel. A single chronic condition can be both an HCC (affecting target price via risk adjustment) and a CC or MCC (affecting the anchor hospitalization DRG). Both capture points matter.

---

<!-- Section: WhatAreHCCs -->
## What Are HCCs?

Hierarchical Condition Categories (HCCs) are a CMS risk-adjustment model implemented in 2004 and updated periodically. The model groups thousands of ICD-10-CM diagnosis codes into clinically related categories — currently approximately 86–115 categories depending on model version — each carrying a risk weight. These weights reflect the expected annual healthcare cost associated with each condition.

CMS uses HCC scores to risk-adjust payments in Medicare Advantage plans, Accountable Care Organizations, and bundled payment programs including TEAM. The underlying logic is straightforward: a patient with congestive heart failure, diabetes with nephropathy, and COPD is expected to cost more to care for than a patient with none of those conditions. The HCC model quantifies that difference and adjusts what CMS expects to spend on that patient's episode accordingly.

**How the score is built:** Each documented HCC contributes a risk weight. Those weights are added together (along with demographic factors like age and sex) to produce a Risk Adjustment Factor (RAF) score. A RAF of 1.0 represents average expected cost. A patient with a RAF of 2.5 is expected to cost 2.5× the average. Under TEAM, the RAF score feeds directly into the risk adjustment multiplier that sets the hospital-specific target price.

**What "hierarchical" means:** Some conditions have multiple severity tiers. For example, diabetes without complications, diabetes with chronic complications, and diabetes with acute severe complications are three different HCC categories at ascending risk weights. Only the highest-weight applicable HCC is counted when conditions are in the same hierarchical group — you do not get credit for both "diabetes without complication" and "diabetes with neuropathy" if both are documented. Document the most specific, clinically supported diagnosis.

---

<!-- Section: HCCvsCCMCC -->
## HCCs vs. CCs and MCCs: Two Parallel Systems

Physicians who understand DRG documentation sometimes conflate HCCs with CCs and MCCs. They are related but distinct, and both matter under TEAM.

| | CCs and MCCs | HCCs |
|--|-------------|------|
| **System** | MS-DRG (inpatient payment) | CMS-HCC risk adjustment model |
| **What they affect** | DRG tier → anchor hospitalization payment | Target price → episode benchmark |
| **Timing** | Current hospitalization only | 180-day lookback before episode |
| **Documentation source** | Discharge summary and hospital record | Any encounter within lookback window |
| **Annual requirement** | No — each hospitalization is independent | Yes — must be documented each year |
| **"History of" trap** | Varies by condition | Always a miss — history = resolved |
| **Coders assign** | Based on hospital record | Based on any claim in the lookback |

A single condition can be both. Chronic systolic heart failure (I50.22) is an HCC — it raises the risk-adjusted target price when documented in the 180-day window. It is also a CC — it raises the DRG tier during the hospitalization. Document it specifically and you capture both. Document it as "CHF" and you partially capture neither.

---

<!-- Section: The180DayWindow -->
## The 180-Day Lookback Window

Under TEAM, CMS looks back 180 days ending one day before the episode initiation date. Any ICD-10-CM diagnosis code submitted on a Medicare claim during that window — from any provider, any setting — contributes to the patient's HCC score for that episode.

This means the HCC window is broader than the hospitalization:

- Outpatient office visits in the six months before surgery
- Pre-admission testing encounters
- Cardiology, endocrinology, pulmonology, or other specialist visits
- Any prior inpatient stay within the window
- Emergency department visits

**What this means for surgical teams:** You do not need to document every HCC during the surgical hospitalization — though doing so is good practice. The primary HCC capture opportunity is the pre-operative encounter. For elective procedures, that means the surgical pre-op visit, the anesthesia pre-assessment, and any specialist evaluation in the months before the case. For urgent or emergent cases (SHFFT, emergent major bowel), the admission H&P is the primary and often only opportunity.

**What this means for the broader care team:** Primary care physicians, cardiologists, endocrinologists, and other specialists whose patients are in the TEAM window are inadvertently contributing to (or failing to contribute to) TEAM risk adjustment through their routine documentation. A cardiologist who documents "systolic dysfunction" instead of "chronic systolic heart failure" in a pre-op visit six weeks before CABG is setting a lower target price for that episode — not through any billing decision, but through a documentation habit.

[NOTE] The 180-day window is measured from the episode initiation date — the date of admission for inpatient procedures, or the date of the outpatient procedure. It does not start at scheduling and does not reset with pre-op testing. A patient scheduled six months in advance has a window that began approximately at the time of scheduling; a patient scheduled urgently may have a window dominated by recent acute illness documentation.

---

<!-- Section: AnnualRequirement -->
## The Annual Re-Documentation Requirement

HCCs must be documented — with a current assessment and management plan — within the current calendar year to count toward that year's risk adjustment. A diagnosis in the problem list from 18 months ago does not count. A diagnosis documented at a visit last week does count.

This is the most operationally important HCC rule for primary care and outpatient specialists. It creates an annual obligation to explicitly document active chronic conditions, not merely maintain them on a problem list.

**The clinical standard:** Documentation that satisfies the HCC annual requirement includes: an explicit diagnosis name (using language that maps to a specific ICD-10-CM code), a statement that the condition is active, and evidence of current management (medication, monitoring, referral, or plan). A single sentence in a progress note — "Chronic systolic heart failure, stable on current GDMT including carvedilol and lisinopril, continue current regimen" — satisfies the requirement.

**The "history of" trap:** Documenting a chronic active condition as "history of [condition]" signals to coders that the condition is resolved. A patient with active diabetes who takes metformin daily does not have a "history of diabetes" — they have diabetes. "History of" language should be reserved for conditions that are genuinely resolved or in true remission. For all active, managed chronic conditions, document them as present, active, and managed.

[PHRASING]
❌ "History of CHF — stable." — No HCC captured; codes as personal history.
❌ "CHF" — Captures a lower-weight HCC than "chronic systolic HF."
✅ "Chronic systolic heart failure, NYHA Class II, stable on guideline-directed medical therapy. Continue lisinopril 10mg, carvedilol 12.5mg, furosemide 40mg." — HCC captured at correct weight with annual documentation satisfied.

---

<!-- Section: ProcedureHCCCounts -->
## HCC Variable Counts by Procedure

CMS finalizes a specific set of HCC risk adjustment variables for each TEAM procedure. The count reflects how many HCC categories CMS determined are meaningfully predictive of episode cost for that procedure type.

| Procedure | HCC Variable Count | Highest-Priority HCC Categories |
|-----------|-------------------|----------------------------------|
| LEJR | 16 | Heart failure, diabetes with complications, COPD, atrial fibrillation, dementia |
| SHFFT | 16 | Dementia, heart failure, COPD, hemiplegia/hemiparesis, CKD |
| Spinal Fusion | 13 | Myelopathy/spinal cord disorders, depression, diabetes with complications, obesity, substance use |
| CABG | 12 | Heart failure, acute MI/angina, vascular disease, arrhythmias, COPD |
| Major Bowel | 13 | Metastatic cancer, active malignancy by site, diabetes, heart failure, COPD |

Individual procedure pages contain the full HCC table with ICD-10 codes, documentation requirements, and common misses for each variable.

---

<!-- Section: DocumentationPrinciples -->
## Universal HCC Documentation Principles

These apply across all five procedures and all HCC categories:

**Specificity is everything.** Most unspecified ICD-10-CM codes do not map to HCC categories — or map to lower-weight categories than the specific code would. "Diabetes mellitus" (E11.9) maps to a lower-weight HCC than "diabetes with diabetic neuropathy" (E11.40). "Heart failure" (I50.9) maps lower than "chronic systolic heart failure" (I50.22). The hierarchy rewards documentation precision.

**Active, not historical.** Every HCC condition must be documented as currently active. "History of," "resolved," "in remission," and "s/p" all signal resolved disease to coders. Reserve those phrases for conditions that are genuinely inactive.

**Name the condition, don't describe the labs.** "Creatinine 2.4" is not CKD Stage 3. "Hemoglobin A1c 9.1%" is not diabetes with complications. The physician must name the diagnosis — the lab value supports it, but the diagnosis is what gets coded.

**Link the complication to the underlying condition.** "Diabetic neuropathy" and "diabetes mellitus" each code separately — but the combination, linked by the physician, produces the higher-weight HCC. "Type 2 DM with diabetic peripheral neuropathy" (E11.40) captures HCC 37; "Type 2 DM" (E11.9) without the complication captures only HCC 19.

**Document the management plan.** A diagnosis without a management plan raises clinical documentation concerns. Every HCC condition should have at least one sentence: what you are doing about it, what the patient is taking, what the plan is. This is good medicine and it is what makes the documentation auditable.

---

<!-- Section: NavigationLinks -->
## Procedure-Specific HCC References

Full HCC tables — with ICD-10 codes, documentation requirements, and common misses specific to each procedure population — are in the individual procedure pages:

- **LEJR** → [LEJR](/docs/reference/hcc-lejr) — 16 HCC variables; heart failure, diabetes, COPD, arrhythmias, dementia
- **SHFFT** → [SHFFT](/docs/reference/hcc-shfft) — 16 HCC variables; dementia, heart failure, hemiplegia, CKD
- **Spinal Fusion** → [Spinal Fusion](/docs/reference/hcc-spinal-fusion) — 13 HCC variables; myelopathy, depression, obesity
- **CABG** → [CABG](/docs/reference/hcc-cabg) — 12 HCC variables; HF, MI/angina, vascular disease
- **Major Bowel** → [Major Bowel](/docs/reference/hcc-major-bowel) — 13 HCC variables; malignancy categories, HF, DM

---

*Module: HCC Reference — General Guide*
*Playbook: TEAM Playbook*
*HCC Model: CMS-HCC V28*
*Last updated: June 2026*
*Format: Option A — Component-ready prose markdown*
*Sources: CMS TEAM Final Rule FY2025/FY2026; CMS-HCC V28 Technical Specifications; McDermott+ CMMI Finalizes TEAM Policy Comparison (August 2024); AAHKS TEAM Leadership Overview (September 2025); AAFP HCC Coding Guide*
