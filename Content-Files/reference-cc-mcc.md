---
title: "CC/MCC Reference: Documentation Specificity Guide"
procedure: null
route: /reference/cc-mcc
drg-family: null
tier-structure: null
---

<!-- PageHero -->
# CC and MCC Reference: Documentation Specificity Guide

This reference lists the Complications and Comorbidities (CCs) and Major Complications and Comorbidities (MCCs) most relevant to TEAM procedures. For each condition, it shows the vague documentation that fails to capture the designation, the specific documentation that does, and the clinical indicators that must be present to support the diagnosis.

[PEARL] This is a specificity guide, not a diagnosis prompt. Every entry assumes the condition is clinically present. The question this reference answers is: given that the condition exists, have you documented it with enough precision for a coder to assign the correct ICD-10-CM code?

[NOTE] CC and MCC designations are assigned by CMS under the MS-DRG system and updated annually with each IPPS Final Rule. This reference reflects FY2025/FY2026 designations (MS-DRG V43.0). Verify high-stakes codes against the current CMS CC/MCC Comprehensive List before relying on them for billing decisions.

---

<!-- Section: HowToUseThisReference -->
## How to Use This Reference

Each entry includes:

- **Classification** — MCC, CC, or tiered (condition maps to different levels based on specificity)
- **The miss** — vague or incomplete documentation that fails to capture the designation
- **The target** — specific documentation language that codes correctly
- **Clinical support required** — what must be present in the chart to justify the diagnosis
- **Audit risk** — conditions flagged by RAC, MAC, or OIG auditors as high-scrutiny

The two-tier vs. three-tier distinction matters here. In **two-tier DRG families** (e.g., LEJR, SHFFT), CCs carry no payment weight — only MCCs move the case. In **three-tier families** (e.g., Major Bowel, Spinal Fusion), both CCs and MCCs have value. See individual procedure modules for tier structure.

---

<!-- Section: HighestPriorityMCCs -->
## Highest-Priority MCCs

These are the most clinically common, most frequently missed, and most audit-scrutinized MCC conditions across inpatient medicine. They appear across all five TEAM procedures.

---

### Sepsis / Severe Sepsis / Septic Shock

**Classification:** MCC

<!-- ConditionBlock -->
[MISS]
❌ "Infection." — No sepsis code assigned.
❌ "Sepsis workup ordered." — Unconfirmed; cannot be coded.
❌ "SIRS." — Not synonymous with sepsis in ICD-10-CM.
❌ "Urosepsis." — Not a codeable term; requires query.

[OK]
✅ "Sepsis due to [source — e.g., gram-negative bacteremia, pneumonia, UTI]."
✅ "Severe sepsis with acute kidney injury [or other named organ dysfunction]."
✅ "Septic shock — vasopressors required to maintain MAP ≥65 mmHg, lactate >2 mmol/L."

**Clinical support required:**

Sepsis requires documented evidence of both infection and systemic response. Per Sepsis-3, this means suspected or confirmed infection plus acute organ dysfunction (SOFA score increase ≥2 from baseline). For ICD-10-CM coding purposes, CMS continues to apply a SIRS-based framework alongside Sepsis-3, so documentation must be clear about the physician's diagnosis — not just the clinical criteria.

For **severe sepsis**: the specific organ dysfunction(s) must be named and linked to the sepsis. Documenting "sepsis with multi-organ dysfunction" without naming the organs is insufficient — coders cannot code R65.2x without named organ dysfunction codes.

For **septic shock**: vasopressor requirement and persistent hypotension despite adequate fluid resuscitation must be reflected in the record.

[DENIAL-RISK] Sepsis is among the most frequently audited diagnoses. RAC auditors look for: explicit physician documentation of sepsis (SIRS findings alone are not enough), source linkage (what infection caused it), named organ dysfunction for severe sepsis, and treatment consistency (blood cultures, IV antibiotics, fluid resuscitation, and monitoring should be documented in notes consistent with a sepsis diagnosis).

---

### Acute Respiratory Failure

**Classification:** MCC

<!-- ConditionBlock -->
[MISS]
❌ "Hypoxia." — Symptom code only; not an MCC.
❌ "Respiratory distress." — Not a codeable diagnosis for respiratory failure.
❌ "Requires supplemental O2." — Describes a finding, not a diagnosis.
❌ "SOB, improving." — No respiratory failure diagnosis captured.

[OK]
✅ "Acute hypoxic respiratory failure, requiring [high-flow O2 / non-invasive ventilation / intubation]."
✅ "Acute hypercapnic respiratory failure due to COPD exacerbation."
✅ "Acute-on-chronic respiratory failure with hypoxia."

**Clinical support required:**

Respiratory failure is not equivalent to hypoxia. The physician must document the diagnosis explicitly. Clinical indicators that support the diagnosis include: SpO2 consistently below 90% on room air (or pO2 < 60 mmHg on ABG), escalating oxygen requirements, documented increased work of breathing, and clinical intervention beyond routine supplemental oxygen (high-flow nasal cannula, BiPAP, CPAP, or mechanical ventilation). Mechanical ventilation is not required to code respiratory failure — patients managed on high-flow O2 or non-invasive ventilation can qualify.

Specify the type: hypoxic (J96.01), hypercapnic (J96.02), or both (J96.03). Each codes to the same MCC tier, but specificity reduces audit exposure.

[DENIAL-RISK] Respiratory failure claims are audited when SpO2 levels in the chart are inconsistent with the documented diagnosis, when there is no escalation of respiratory support, or when "respiratory distress" and "respiratory failure" are used interchangeably in the same note.

---

### Metabolic or Toxic Encephalopathy

**Classification:** MCC (G93.41 — metabolic encephalopathy; G92.9 — toxic encephalopathy)

<!-- ConditionBlock -->
[MISS]
❌ "Confusion." — Symptom; not a diagnosis.
❌ "Altered mental status." — Symptom; not a diagnosis.
❌ "AMS, likely multifactorial." — Coders cannot code "multifactorial" as encephalopathy.
❌ "Delirium." — CC, not MCC; F05 codes to a different tier.
❌ "Encephalopathy, unspecified." — Confirm type; "unspecified" carries MCC status but creates audit exposure.

[OK]
✅ "Metabolic encephalopathy secondary to [uremia / hyponatremia / hepatic dysfunction / sepsis]."
✅ "Toxic encephalopathy due to [medication / substance]."
✅ "Encephalopathy due to sepsis." — ICD-10-CM Index directs this to metabolic encephalopathy (G93.41).

**Clinical support required:**

The diagnosis requires an identified metabolic or toxic etiology — the "why" behind the altered mental status. Supporting indicators include: acute cognitive or behavioral change from baseline, labs or clinical findings consistent with the named etiology (e.g., sodium <125, BUN >50, ammonia elevation, drug level), and clinical response to treatment of the underlying cause. Encephalopathy due to sepsis codes as metabolic per the ICD-10-CM Index.

[NOTE] Delirium (F05) is a CC, not an MCC. If the clinical picture supports encephalopathy with a metabolic or toxic etiology, that is the more specific — and more accurate — diagnosis. Do not document delirium when metabolic encephalopathy is clinically supported; document both only when both are independently present.

[DENIAL-RISK] Encephalopathy is heavily scrutinized by auditors because it is frequently documented without clear etiology or without clinical indicators supporting the severity of altered mental status. Query response and physician attestation should clearly link the AMS to a specific metabolic or toxic cause.

---

### Acute Kidney Injury (with ATN)

**Classification:** MCC (N17.0 — AKI with tubular necrosis; all N17.x codes = MCC)

<!-- ConditionBlock -->
[MISS]
❌ "Creatinine elevated." — Lab finding; not a diagnosis.
❌ "Creatinine 2.8, slightly above baseline." — Lab finding; not a diagnosis.
❌ "Prerenal azotemia." — Not a valid ICD-10-CM term; query needed.
❌ "AKI" without etiology — MCC, but add etiology (ATN, prerenal, obstructive) for complete documentation.

[OK]
✅ "Acute kidney injury, stage 2 by KDIGO criteria, likely prerenal in etiology."
✅ "Acute kidney injury with acute tubular necrosis, contrast-induced."
✅ "AKI on CKD stage 3 — both diagnoses require separate codes: N17.x + N18.3."

**Clinical support required:**

KDIGO criteria define AKI as any of: creatinine increase ≥1.5× baseline within 7 days, creatinine increase ≥0.3 mg/dL within 48 hours, or urine output <0.5 mL/kg/h for ≥6 hours. The physician does not need to cite KDIGO in the note — they need to document the diagnosis of AKI with clinical context. Stages:

| Stage | Creatinine | Urine Output |
|-------|------------|--------------|
| 1 | 1.5–1.9× baseline or ↑≥0.3 mg/dL | <0.5 mL/kg/h for 6–12 hr |
| 2 | 2.0–2.9× baseline | <0.5 mL/kg/h for ≥12 hr |
| 3 | ≥3.0× baseline or ≥4.0 mg/dL or RRT | <0.3 mL/kg/h for ≥24 hr or anuria |

**All AKI stages code as MCC under N17.x.** The stage is important for clinical management and audit defense, but does not change the CC/MCC tier. ATN (N17.0) adds specificity and reflects higher severity; document when clinical picture supports tubular injury (contrast, aminoglycosides, ischemia, rhabdomyolysis).

[NOTE] When AKI occurs in a patient with underlying CKD, both must be coded: N17.x (AKI) and the appropriate N18.x (CKD stage). Coding only one results in lost severity capture. This is one of the most common dual-coding omissions in CDI.

[DENIAL-RISK] AKI is a high-audit target. Denials cite: creatinine values not meeting KDIGO Stage 1 threshold, treatment inconsistent with the documented severity (e.g., no IV fluids, no nephrology consult, no held nephrotoxins), and documentation of AKI in the discharge summary only, without supporting notes throughout the stay.

---

### Severe Malnutrition

**Classification:** MCC (E43 — severe protein-calorie malnutrition)

<!-- ConditionBlock -->
[MISS]
❌ "Poor oral intake." — No diagnosis.
❌ "Nutritional deficiency." — Unspecified; may not code correctly.
❌ "Low albumin." — Lab finding; not a diagnosis (albumin is not a required criterion under current ASPEN/GLIM criteria).
❌ "Dietitian recommends nutritional support." — Dietitian can support the diagnosis but cannot establish it; physician must document.
❌ "Cachectic." — Codes as cachexia (R64), a CC — not the same as severe malnutrition.

[OK]
✅ "Severe protein-calorie malnutrition per ASPEN criteria — energy intake <50% of estimated needs for >5 days, significant muscle wasting on exam."
✅ "Moderate malnutrition in the context of chronic illness." — CC (E44.0); less specific but still captured.
✅ "Malnutrition, severe, consistent with clinical indicators — initiated TPN/enteral nutrition."

**Clinical support required:**

ASPEN criteria (most commonly used in U.S. acute care) require the condition to be present in the context of one of three scenarios — acute illness/injury, chronic illness, or social circumstances — with at least two of: energy intake deficit, weight loss, muscle wasting, fat wasting, fluid accumulation, and reduced grip strength. Severity thresholds differ by context.

GLIM criteria (global standard, increasingly adopted) require at least one phenotypic criterion (weight loss, low BMI, reduced muscle mass) and one etiologic criterion (reduced intake or assimilation, or inflammation/disease burden).

The physician diagnosis must reflect the established criteria AND be paired with a documented treatment plan. Treatment must match the severity stated — a patient documented as severely malnourished should have aggressive nutritional intervention (TPN, enteral nutrition, or equivalent), not just a dietary consult.

| Severity | ICD-10 Code | CC/MCC |
|----------|-------------|--------|
| Severe | E43 | **MCC** |
| Moderate | E44.0 | CC |
| Mild / Unspecified | E44.1 / E46 | CC |

[DENIAL-RISK] Malnutrition — especially severe malnutrition — is an OIG and RAC priority. A 2020 OIG report identified approximately $1 billion in potentially improper payments tied to malnutrition coding. Auditors look for: specific ASPEN/GLIM criteria referenced or supported in documentation, treatment intensity matching the stated severity, and consistency between dietitian assessment and physician diagnosis. Discrepancies between a dietitian's documented "moderate malnutrition" and a physician's "severe malnutrition" are a common audit trigger.

---

### Acute Systolic or Diastolic Heart Failure

**Classification:** MCC (acute / acute-on-chronic); CC (chronic or unspecified)

<!-- ConditionBlock -->
[MISS]
❌ "CHF." — Unspecified heart failure (I50.9) — **not a CC or MCC.**
❌ "Heart failure." — Unspecified — **not a CC or MCC.**
❌ "Volume overloaded." — Clinical finding; not a diagnosis.
❌ "HF exacerbation." — "Exacerbation" alone does not code to acute; specify acuity.

[OK]
✅ "Acute on chronic systolic heart failure, NYHA Class III, managed with IV diuresis." — **MCC**
✅ "Acute diastolic heart failure." — **MCC**
✅ "Chronic systolic heart failure, stable." — CC (lower tier; still valuable in three-tier DRG families)

**Clinical support required:**

The acuity descriptor (acute vs. chronic) and the subtype (systolic vs. diastolic) are both required for precise coding. Supporting indicators for acute HF: acute dyspnea, orthopnea, or PND; pulmonary edema on imaging; elevated BNP/NT-proBNP with acute change from baseline; clinical response to IV diuresis; oxygen requirement. "CHF" without modifier codes as I50.9 and carries no CC/MCC status. This single vague word choice represents one of the most common — and most preventable — documentation gaps across all five TEAM procedures.

| Documentation | Code | CC/MCC |
|---------------|------|--------|
| CHF / Heart failure (unspecified) | I50.9 | **None** |
| Chronic systolic HF | I50.22 | CC |
| Chronic diastolic HF | I50.32 | CC |
| Acute systolic HF | I50.21 | **MCC** |
| Acute diastolic HF | I50.31 | **MCC** |
| Acute on chronic systolic HF | I50.23 | **MCC** |
| Acute on chronic diastolic HF | I50.33 | **MCC** |

---

### Cardiac Arrest / Cardiogenic Shock / Septic Shock

**Classification:** MCC **if discharged alive** (these are MCCs only when the patient survives to discharge)

<!-- ConditionBlock -->
[NOTE] The "MCC if discharged alive" category is often misunderstood. These diagnoses carry MCC weight when the patient is discharged alive because their presence dramatically increases resource consumption and clinical complexity. If the patient expires during the admission, the diagnosis is still coded — but the MCC contribution to DRG may not apply in the same way due to how the grouper handles mortality. Always document these conditions explicitly when present; do not omit because outcome is uncertain.

[OK]
✅ "Cardiac arrest, return of spontaneous circulation (ROSC) achieved after [X] minutes."
✅ "Cardiogenic shock — requiring vasopressor support, cardiac index reduced."
✅ "Septic shock — vasopressors required, lactate >2 mmol/L despite resuscitation."

---

<!-- Section: HighPriorityCCs -->
## High-Priority CCs

These conditions are commonly present in TEAM procedure patients and frequently underdocumented or coded to unspecified levels that lose CC status.

---

### Acute Kidney Injury (without ATN)

**Classification:** CC → MCC with ATN (see above)

All N17.x codes carry **MCC** status, including AKI without ATN (N17.9). AKI is listed here because it straddles the CC/MCC boundary depending on how clinicians conceptualize it — even "plain" AKI without tubular necrosis is an MCC, not merely a CC. The common miss is not documenting AKI at all (see MCC section above).

---

### Chronic Systolic or Diastolic Heart Failure

**Classification:** CC

[PHRASING]
❌ "CHF" or "heart failure" — **not a CC or MCC** (I50.9, unspecified)
✅ "Chronic systolic heart failure, stable on guideline-directed medical therapy" — **CC**

When HF is not acutely decompensated, the chronic subtype is still a CC and still has documentation value in three-tier DRG families. Specify systolic vs. diastolic.

---

### Obesity Hypoventilation Syndrome (OHS)

**Classification:** CC

<!-- ConditionBlock -->
[MISS]
❌ "Morbid obesity." — Codes to BMI ≥40 (Z68.4x) — a CC for BMI alone, but not OHS.
❌ "OSA." — Different condition; obstructive sleep apnea (G47.33) is not a CC/MCC.
❌ "CPAP at home for sleep apnea." — No OHS diagnosis captured.

[OK]
✅ "Obesity hypoventilation syndrome, on CPAP/BiPAP at home."
✅ "Pickwickian syndrome." — Alternate term; same code (E66.2).

**Clinical support required:**

OHS requires obesity (BMI ≥30) plus awake daytime hypercapnia (pCO2 >45 mmHg) not explained by another cause. Patients are typically on home CPAP or BiPAP. The key distinction from OSA: OHS involves hypercapnia at baseline; OSA does not. If a patient is on home CPAP and has documented obesity with morning headaches, fatigue, or erythrocytosis, OHS is a reasonable diagnostic consideration — but physician documentation of the diagnosis is required.

---

### COPD with Acute Exacerbation

**Classification:** CC

[PHRASING]
❌ "COPD." — Codes as J44.1 (without specification) — may not carry CC weight without exacerbation.
✅ "COPD with acute exacerbation." — J44.1 — **CC**

---

### Dementia with Behavioral Disturbance

**Classification:** CC

[PHRASING]
❌ "Dementia." — Unspecified dementia (F03.90) — CC only when behavioral disturbance is present.
✅ "Alzheimer's dementia with behavioral disturbance [agitation / aggression / wandering]." — **CC**

[NOTE] Documenting dementia type (Alzheimer's, vascular, Lewy body) and behavioral status increases specificity, supports quality metric accuracy, and is clinically relevant to care planning — especially for SHFFT patients with hip fracture, where dementia is nearly universal.

---

### Pressure Ulcer (Staged)

**Classification:** Stage III or IV = **MCC**; Stage II = CC; Stage I = no CC/MCC

<!-- ConditionBlock -->
[NOTE] Pressure ulcer staging must be documented by a physician (or advanced practice provider), not nursing. Nursing may document the stage in wound care notes, but the physician must confirm the stage for it to be coded as an MCC or CC. If the physician documents "pressure ulcer" without staging, the coder will code unstageable or unspecified — losing MCC/CC status entirely.

[PHRASING]
❌ "Sacral decubitus ulcer." — No stage documented; codes as unspecified (L89.150) — **no CC/MCC.**
✅ "Stage III sacral pressure injury, present on admission." — **MCC**
✅ "Stage II right heel pressure injury." — **CC**

POA status is critical for pressure ulcers. A stage III or IV present on admission codes as MCC (POA = Y). The same injury acquired during hospitalization is on the HAC list — it will not move the DRG tier. Document the stage and POA status explicitly at admission if a pressure injury is present.

---

### Malnutrition (Moderate or Unspecified)

**Classification:** CC

When the clinical picture does not meet criteria for severe malnutrition, moderate or unspecified malnutrition is still a CC. Do not leave the chart with only a dietary consult and no physician diagnosis. See the MCC entry above for clinical criteria.

---

### Atrial Fibrillation (Type Specified)

**Classification:** CC (most types); unspecified AF is still a CC, but type should be specified

[PHRASING]
❌ "A-fib." — Codes to I48.91 (unspecified) — CC, but less specific.
✅ "Persistent atrial fibrillation with rapid ventricular response." — I48.19 — **CC, with specificity for audit defense.**
✅ "Paroxysmal atrial fibrillation, now in sinus rhythm." — I48.0 — **CC**

[NOTE] AF is particularly important for CABG patients, where new-onset postoperative AF is common, clinically significant, and often underdocumented. See the CABG procedure module for the standalone atrial fibrillation teaching section.

---

### DVT / VTE (Acute)

**Classification:** CC

[PHRASING]
❌ "DVT prophylaxis given." — No diagnosis; just treatment.
✅ "Acute deep vein thrombosis, right lower extremity, treated with anticoagulation." — **CC**

---

### Drug or Alcohol Withdrawal

**Classification:** CC

[PHRASING]
❌ "History of alcohol use, monitoring for withdrawal." — No diagnosis coded.
✅ "Alcohol withdrawal syndrome, uncomplicated." — **CC**
✅ "Opioid withdrawal." — **CC**

---

### CKD Stage IV or V

**Classification:** CC

[PHRASING]
❌ "CKD" or "chronic kidney disease" without staging — may code to unspecified (N18.9) — **no CC/MCC.**
✅ "Chronic kidney disease, stage IV (eGFR 25 mL/min/1.73m²)." — **CC**
✅ "End-stage renal disease, on hemodialysis." — **MCC**

---

### Anemia due to Acute or Post-Op Blood Loss

**Classification:** CC

[PHRASING]
❌ "Postop anemia." — Codes to unspecified anemia — **no CC/MCC.**
✅ "Acute blood loss anemia, postoperative, hemoglobin 7.2." — D62 — **CC**

[NOTE] This is a high-yield documentation target for surgical procedure patients. When a patient requires transfusion postoperatively, documenting the clinical diagnosis of acute blood loss anemia (rather than just ordering the transfusion) captures the CC and accurately reflects the clinical complexity.

---

<!-- Section: SpecialCategories -->
## Special Documentation Categories

---

### BMI as a Secondary Diagnosis

Adult BMI <19 (underweight) or ≥40 (morbid obesity) carries **CC** status as a secondary diagnosis — but only when the physician has documented the associated diagnosis (malnutrition, morbid obesity). The BMI code (Z68.xx) is not enough alone; it requires a physician-documented obesity or malnutrition diagnosis to be clinically meaningful and properly coded.

---

### "MCC if Discharged Alive" — Full List

These diagnoses carry MCC status only when the patient survives to discharge. They should always be documented when present — the coding outcome will depend on discharge status, which is determined at the end of the encounter.

- Cardiac arrest
- Cardiogenic shock
- Respiratory arrest
- Ventricular fibrillation
- Septic shock
- Other shock without trauma

---

### Diagnoses That Require Linkage Language

Some diagnoses are only codeable as CC/MCC when they are explicitly linked to another condition. The linkage must appear in physician documentation — coders cannot assume it.

| Diagnosis | Required Link | Without Link |
|-----------|--------------|-------------|
| Severe sepsis | + named organ dysfunction | Codes as sepsis only (still MCC, but severe sepsis weight lost) |
| Metabolic encephalopathy | + etiology (uremia, hepatic, septic, etc.) | May code as unspecified encephalopathy — audit risk |
| AKI on CKD | + CKD stage | Only one condition coded |
| Respiratory failure | + etiology (COPD, pneumonia, heart failure) | Codes correctly but etiology link supports audit defense |
| Malnutrition | + contributing illness context | May code correctly but is harder to defend without etiology |

---

<!-- Section: POAAndHAC -->
## POA and HAC: What Affects Whether Your MCC/CC Counts

Even a correctly documented MCC or CC can be stripped from payment if it sits on the Hospital-Acquired Condition (HAC) list and was not present on admission.

**HAC conditions relevant to TEAM procedures:**

- Pressure ulcers Stage III and IV — acquired during hospitalization
- Surgical site infection following specific procedures
- Deep vein thrombosis / PE post certain orthopedic procedures
- Catheter-associated urinary tract infection (CAUTI)
- Central line-associated bloodstream infection (CLABSI)
- Falls and trauma during hospitalization

**The rule:** If the diagnosis is on the HAC list and POA = N, the grouper will not use it to upgrade the DRG tier. If another valid CC or MCC (POA = Y) is present and sufficient to support the tier, the tier is preserved.

**The documentation implication:** For conditions that were present on admission, document them in the H&P and early progress notes with explicit mention, not just in the discharge summary. An admission note that records "stage II pressure injury to right heel, present prior to admission, wound care initiated" establishes POA status clearly.

---

<!-- Section: AnnualUpdateReminder -->
## Annual Update Reminder

[NOTE] CMS publishes an updated CC/MCC Comprehensive List with each IPPS Final Rule, effective October 1 each year. Codes can move between CC and MCC status, lose designation entirely, or be added as new codes with each update. High-priority examples from recent updates include changes to sepsis code specificity requirements and revisions to HF code assignments. Any reference list — including this one — should be cross-checked against the current CMS MS-DRG Classifications document before use in formal training or compliance work. The current version is MS-DRG V43.0 (FY2026, effective October 1, 2025).

---

<!-- Section: QuickLookup -->
## Quick-Lookup Summary

| Condition | Classification | Common Miss | ICD-10 Codes |
|-----------|---------------|-------------|--------------|
| Sepsis | MCC | "Infection," "SIRS" | A40–A41 + R65.20/R65.21 |
| Septic shock | MCC (if alive) | "Hypotension on pressors" | A40–A41 + R65.21 |
| Acute respiratory failure (hypoxic) | MCC | "Hypoxia," "respiratory distress" | J96.01 |
| Acute respiratory failure (hypercapnic) | MCC | "SOB," "increased work of breathing" | J96.02 |
| Metabolic/toxic encephalopathy | MCC | "AMS," "confusion," "delirium" | G93.41 / G92.9 |
| AKI (any stage, with or without ATN) | MCC | "Elevated creatinine," "prerenal azotemia" | N17.0–N17.9 |
| Severe malnutrition | MCC | "Poor appetite," "low albumin," dietitian note only | E43 |
| Acute systolic HF | MCC | "CHF," "heart failure" | I50.21 / I50.23 |
| Acute diastolic HF | MCC | "CHF," "heart failure" | I50.31 / I50.33 |
| Cardiac arrest | MCC (if alive) | Not documented post-ROSC | I46.9 |
| Cardiogenic shock | MCC (if alive) | "Hypotensive, on pressors" | R57.0 |
| Acute PE | MCC | "Clot in lungs," "suspected PE" | I26.xx |
| CVA / Cerebral infarct | MCC | "Stroke-like symptoms," "TIA" | I63.xx |
| Pressure ulcer Stage III/IV | MCC | Unstaged, or nursing-only staging | L89.xx3 / L89.xx4 |
| ESRD | MCC | "CKD" without stage | N18.6 |
| Severe pancreatitis | MCC | "Pancreatitis," "pancreatic inflammation" | K85.xx |
| Acute MI | MCC | "Demand ischemia," "troponin bump" | I21.xx |
| Chronic systolic HF | CC | "CHF," "heart failure" | I50.22 |
| Chronic diastolic HF | CC | "CHF," "heart failure" | I50.32 |
| COPD with exacerbation | CC | "COPD," "bronchospasm" | J44.1 |
| OHS | CC | "Morbid obesity," "OSA" | E66.2 |
| Moderate malnutrition | CC | No physician nutrition diagnosis | E44.0 |
| Acute blood loss anemia | CC | "Postop anemia," transfusion ordered without diagnosis | D62 |
| Atrial fibrillation (specified) | CC | "A-fib" only | I48.0 / I48.11 / I48.19 |
| DVT (acute) | CC | "DVT prophylaxis" | I82.4xx |
| CKD Stage IV | CC | "CKD" unspecified | N18.4 |
| Dementia with behavioral disturbance | CC | "Dementia," "confusion" | F02.811 / F03.911 |
| Alcohol/drug withdrawal | CC | "History of EtOH use," monitoring only | F10.239 / F11.23 |
| Pressure ulcer Stage II | CC | Unstaged | L89.xx2 |

---

_Module: General CC/MCC Reference — Documentation Specificity Guide_
_Playbook: TEAM Playbook_
_DRG Version: MS-DRG V43.0 (FY2026, effective October 1, 2025)_
_Last updated: June 2026_
_Format: Option A — Component-ready prose markdown_
_Sources: CMS ICD-10-CM FY2026 Official Guidelines; ACDIS CDI Practice Briefs; AHIMA Coding Clinic; KDIGO 2012 AKI Guideline; ASPEN Malnutrition Criteria; OIG Malnutrition Report (2020)_
