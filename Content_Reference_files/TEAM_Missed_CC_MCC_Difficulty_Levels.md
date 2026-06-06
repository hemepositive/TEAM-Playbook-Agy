# Commonly Missed CC & MCC Diagnoses — Surgical CDI
## Difficulty-Tiered Reference for Provider CDI Education and Micro-game Design
### CMS TEAM Procedures: LEJR · SHFFT · Spinal Fusion · CABG · Major Bowel

> **Sources:** ACDIS clinical guidance, PMC peer-reviewed literature, CMS ICD-10-CM/PCS MS-DRG definitions  
> **Game Design Note:** Each diagnosis entry includes a difficulty rating, clinical trigger clues,  
> a "what providers write instead" field (the wrong/vague documentation), and the corrected term.  
> This structure maps directly to vignette design and answer-choice generation.

---

## Research-Backed Miss Rates

A retrospective algorithmic study found that 32.9% of hospital admissions had a disease state with no corresponding ICD code in the EHR. The most notable omission rates were: Delirium/encephalopathy at 80.3% of cases missing an appropriate code, Acidemia at 63.2%, and Hyponatremia at 62.3%. These three diagnoses alone represent the highest-volume CDI opportunity across all surgical service lines and anchor the "Hard" tier of the game.

Hyponatremia was flagged for the highest number of potential DRG upgrades, with 431 cases needing a higher DRG modifier.

---

## Difficulty Framework

| Tier | Label | Description | Player Experience |
|---|---|---|---|
| ⭐ | **Medical Student** | Obvious, well-known CCs/MCCs with clear clinical triggers | Medical students |
| ⭐⭐ | **Resident** | Common but frequently mis-documented; require specificity | Residents |
| ⭐⭐⭐ | **Attending** | Clinically present but rarely named; require a query | Attendings, CDI Specialists |
| ⭐⭐⭐⭐ | **Physician Advisor** | Obscure, counterintuitive, or require linkage documentation | Physician advisors |

---

## TIER 1 — ⭐ MEDICAL STUDENT LEVEL
### "You should know this. Your attending is watching."

These diagnoses are well-known MCCs/CCs that providers understand clinically but either forget to document or document too vaguely.

---

### 1.1 Acute Systolic Heart Failure
- **ICD-10:** I50.21 (MCC) / I50.23 Acute-on-chronic systolic HF (MCC)
- **Procedures:** All five TEAM procedures
- **What providers write instead:** "Heart failure" / "CHF" / "volume overload"
- **Why it's missed:** Generic terms like "CHF" code to I50.9 — unspecified heart failure — which is only a **CC**, not an MCC. Specifying systolic vs. diastolic AND acute vs. chronic is required to reach MCC.
- **Clinical trigger:** BNP > 500, bilateral crackles, pulmonary edema on CXR, diuresis ordered, reduced EF on echo
- **Query trigger phrase:** *"Can you specify whether this is systolic or diastolic heart failure, and whether it is acute, chronic, or acute-on-chronic?"*
- **DRG impact:** Affects all 5 TEAM procedure DRGs; CABG and LEJR are 2-tier so MCC shifts DRG
- **Difficulty note:** Easy to recognize, hard to document with specificity

---

### 1.2 Sepsis
- **ICD-10:** A41.9 (MCC) — specify organism when possible (A41.01 MRSA, A41.51 E. coli, etc.)
- **Procedures:** All five — especially Major Bowel and SHFFT
- **What providers write instead:** "Infection" / "bacteremia" / "SIRS" / "septicemia"
- **Why it's missed:** "SIRS" and "infection" do not code to sepsis. "Bacteremia" is not sepsis. The provider must document "sepsis" explicitly.
- **Clinical trigger:** Fever/hypothermia + elevated WBC + suspected/confirmed source + clinical concern
- **Query trigger phrase:** *"Based on the documented fever, leukocytosis, and suspected source, does this meet your clinical threshold for sepsis?"*
- **DRG impact:** MCC in all TEAM DRGs. Severe sepsis (R65.20) and septic shock (R65.21) add further severity
- **Difficulty note:** Word choice alone is the barrier — clinically obvious, documentationally elusive

---

### 1.3 Acute Kidney Injury (AKI)
- **ICD-10:** N17.9 (MCC) — N17.0 with tubular necrosis (MCC)
- **Procedures:** All five — extremely common post-CABG, post-major bowel
- **What providers write instead:** "Elevated creatinine" / "renal insufficiency" / "poor kidney function" / "azotemia"
- **Why it's missed:** Lab values alone are not diagnoses. "Renal insufficiency" is not AKI. Provider must explicitly diagnose AKI.
- **Clinical trigger:** Creatinine rise ≥ 0.3 mg/dL above baseline, or ≥ 1.5x baseline within 7 days
- **Query trigger phrase:** *"The creatinine has risen from 0.9 to 2.1 — does this represent acute kidney injury?"*
- **DRG impact:** MCC across all TEAM procedures
- **Difficulty note:** ⭐ Apprentice — every med student knows AKI; barrier is just writing the words

---

### 1.4 Acute Posthemorrhagic Anemia
- **ICD-10:** D62 (CC)
- **Procedures:** SHFFT, Spinal Fusion, Major Bowel — any case with significant blood loss
- **What providers write instead:** "Anemia" / "low hemoglobin" / "blood loss" / "needs transfusion"
- **Why it's missed:** Generic "anemia" codes to D64.9 — unspecified anemia — which is **not a CC**. D62 requires documentation of the acute blood loss as the cause.
- **Clinical trigger:** Hgb drop > 2 g/dL from preop baseline, transfusion administered, surgical blood loss documented
- **Query trigger phrase:** *"The hemoglobin dropped from 12.4 to 7.8 postoperatively and 2 units of pRBCs were transfused — is this acute blood loss anemia?"*
- **DRG impact:** CC in 3-tier DRGs (SHFFT, Major Bowel, Spinal Fusion)
- **Difficulty note:** ⭐ Very common miss, very simple fix

---

## TIER 2 — ⭐⭐ RESIDENT LEVEL
### "You know this exists. You just didn't think to write it."

---

### 2.1 Protein-Calorie Malnutrition — Severity Matters
- **ICD-10:** E43 Severe (MCC) / E44.0 Moderate (CC) / E44.1 Mild (CC) / E46 Unspecified (CC)
- **Procedures:** All five — highest prevalence in Major Bowel, SHFFT, CABG (cardiac cachexia)
- **What providers write instead:** "Poor appetite" / "weight loss" / "low albumin" / "cachectic appearing" / nothing at all
- **Why it's missed:** Malnutrition can impact DRG assignment — mild, moderate, or unspecified malnutrition (E44 group) provides a CC as a secondary diagnosis, while severe malnutrition (E43) provides an MCC. The difference between CC and MCC requires documenting the severity level. Low albumin alone is not sufficient — the provider must document the diagnosis.
- **Clinical trigger:** Albumin < 3.0, significant weight loss, dietitian consult, TPN or tube feeds ordered, muscle wasting on exam
- **ASPEN Criteria for Severe (acute setting):** ≥ 2 of: energy intake ≤ 50% of estimated requirement for ≥ 5 days; weight loss > 2% in 1 week or > 5% in 1 month; loss of subcutaneous fat; muscle wasting; fluid accumulation; reduced grip strength
- **Query trigger phrase:** *"Nutrition has documented malnutrition based on albumin 1.8, weight loss of 18 lbs over 3 months, and muscle wasting. Can you specify the severity and diagnosis of malnutrition?"*
- **DRG impact:** E43 = MCC (affects LEJR, CABG 2-tier DRGs); E44 = CC only
- **Difficulty note:** ⭐⭐ Moderate — clinicians see it but don't use the word or specify severity. Severe malnutrition diagnosis codes are scrutinized by payers and are highly targeted for clinical validation denials.

---

### 2.2 Metabolic Encephalopathy vs. Delirium
- **ICD-10:** G93.41 Metabolic encephalopathy (MCC) vs. F05 Delirium (CC only)
- **Procedures:** SHFFT, Spinal Fusion, Major Bowel, CABG — any elderly surgical patient
- **What providers write instead:** "Confusion" / "altered mental status" / "delirium" / "sundowning"
- **Why it's missed:** There is a reimbursement disparity that favors encephalopathy over delirium — delirium is a CC while encephalopathy is an MCC. This disparity may explain why some clinicians prefer the term encephalopathy, but documentation must clinically support the distinction.
- **The rule:** "Altered mental status" and "confusion" are symptoms — NOT diagnoses. "Delirium" is a CC. "Metabolic encephalopathy" with a documented cause is an MCC.
- **Clinical trigger:** CAM-positive assessment, altered GCS, AMS in setting of metabolic disturbance (hyponatremia, uremia, hyperglycemia, sepsis)
- **Query trigger phrase:** *"The patient is CAM-positive with a sodium of 118 and confusion — is this metabolic encephalopathy secondary to hyponatremia?"*
- **DRG impact:** MCC shift in all TEAM procedures — very high value query
- **Difficulty note:** ⭐⭐⭐ Also appears in Hard tier because it requires documenting the causal link

---

### 2.3 Hyponatremia — Documented and Treated
- **ICD-10:** E87.1 (CC)
- **Procedures:** All five — extremely common perioperatively
- **What providers write instead:** "Low sodium" / "electrolyte abnormality" / "fluid/electrolyte issue"
- **Why it's missed:** Hyponatremia had a 62.3% ICD code omission rate in one large academic center study — it was the most commonly flagged diagnosis for potential DRG upgrade. Labs document it; providers rarely write the word.
- **Clinical trigger:** Serum sodium < 135 mEq/L, IV fluids modified, sodium replacement ordered, neurology or nephrology consulted for severe cases
- **Query trigger phrase:** *"The sodium has been 129 for 3 days and IV fluid composition was adjusted — are you treating hyponatremia?"*
- **DRG impact:** CC in 3-tier DRGs. Not enough alone to shift 2-tier DRGs (LEJR, CABG)
- **Difficulty note:** ⭐⭐ Very common miss; every surgery patient has a BMP

---

### 2.4 COPD with Acute Exacerbation
- **ICD-10:** J44.1 (CC)
- **Procedures:** Spinal Fusion, Major Bowel, CABG — any patient with known COPD
- **What providers write instead:** "COPD" / "history of COPD" / "wheezing" / "bronchospasm"
- **Why it's missed:** J44.0 (COPD with acute lower resp infection) and J44.1 (COPD with acute exacerbation) are CCs. J44.9 (COPD, unspecified) is **NOT a CC**. The distinction requires documenting that COPD is actively exacerbating.
- **Clinical trigger:** Increased bronchodilator use, worsening dyspnea beyond baseline, steroids or antibiotics initiated for pulmonary indication
- **Query trigger phrase:** *"The patient has known COPD and required scheduled albuterol/ipratropium and IV steroids — is COPD acutely exacerbating?"*
- **DRG impact:** CC in 3-tier TEAM DRGs
- **Difficulty note:** ⭐⭐ The word "exacerbation" is the key — easy once you know it

---

### 2.5 Atrial Fibrillation — Type Specificity
- **ICD-10:** I48.11 Longstanding persistent Afib (CC) / I48.19 Other persistent Afib (CC) / I48.91 Unspecified Afib (NOT a CC)
- **Procedures:** CABG (new-onset post-op Afib is very common), SHFFT, Major Bowel
- **What providers write instead:** "Atrial fibrillation" / "Afib" / "cardiac arrhythmia"
- **Why it's missed:** I48.91 (unspecified atrial fibrillation) is NOT a CC. Persistent or longstanding persistent forms are CCs. New-onset post-operative atrial fibrillation codes separately and requires specificity.
- **Clinical trigger:** EKG-confirmed Afib, rate control medications, anticoagulation decision, cardiology consult
- **Query trigger phrase:** *"The patient is in Afib on EKG — can you specify if this is paroxysmal, persistent, or longstanding persistent? Is this new onset or pre-existing?"*
- **DRG impact:** CC when properly specified in 3-tier DRGs
- **Difficulty note:** ⭐⭐ The subtype is the only barrier

---

## TIER 3 — ⭐⭐⭐ ATTENDING LEVEL
### "Clinically real. Rarely documented. Worth asking about."

---

### 3.1 Morbid Obesity — The BMI Trap
- **ICD-10:** E66.01 Morbid obesity due to excess calories (CC when BMI > 40 also coded)
- **Procedures:** LEJR, CABG, Spinal Fusion — significant prevalence
- **What providers write instead:** "Obese" / "BMI 44" / nothing — relying on nursing documentation
- **Why it's missed:** The diagnosis of morbid or severe obesity alone is not a CC. The BMI greater than 40 is the CC, but the BMI code cannot be captured by coding unless there is an accompanying diagnosis of morbid obesity documented by the provider. Both the BMI and the diagnosis would need to be documented to capture the CC.
- **Clinical trigger:** BMI documented by nursing or dietitian ≥ 40 in the chart
- **Query trigger phrase:** *"The nursing documentation notes a BMI of 44.2 — can you document the diagnosis of morbid obesity in your note?"*
- **DRG impact:** CC in 3-tier DRGs; NOT a CC for bariatric procedure DRGs (exclusion applies)
- **Difficulty note:** ⭐⭐⭐ Counterintuitive — BMI alone isn't enough; the word "morbid obesity" must appear in a provider note

---

### 3.2 Pressure Ulcer — Stage Matters, POA Matters
- **ICD-10:** L89.xx3 Stage 3 (MCC, POA required) / L89.xx4 Stage 4 (MCC, POA required) / L89.xx2 Stage 2 (CC)
- **Procedures:** SHFFT, Major Bowel — bed-bound or critically ill patients
- **What providers write instead:** "Skin breakdown" / "wound" / "sacral ulcer" — without staging
- **Why it's missed:** When coders report an unspecified or unstageable ulcer, they lose the MCC. Coders also need to report whether the pressure ulcer is present on admission — if not POA, it is not an MCC and may trigger a HAC penalty instead.
- **Clinical trigger:** Wound care nurse documentation of staging, sacral/heel/hip skin breakdown, wound photography in chart
- **Query trigger phrase:** *"Wound care has documented a stage 3 sacral pressure ulcer present on admission — can you document the diagnosis and stage in your note?"*
- **DRG impact:** MCC if Stage 3/4 AND POA = Yes; HAC penalty if POA = No
- **Difficulty note:** ⭐⭐⭐ Requires provider acknowledgment AND POA designation; stage alone from nursing isn't enough

---

### 3.3 Coagulopathy / DIC
- **ICD-10:** D65 DIC (MCC) / D68.9 Coagulation defect, unspecified (CC) / D68.32 Hemorrhagic disorder due to intrinsic circulating anticoagulants (CC)
- **Procedures:** Major Bowel, CABG, SHFFT
- **What providers write instead:** "Elevated INR" / "on anticoagulation" / "bleeding" / "thrombocytopenia"
- **Why it's missed:** Lab abnormalities alone are not diagnoses. "On anticoagulation" is a medication, not a coagulopathy. Provider must name the diagnosis.
- **Clinical trigger:** INR > 2 without therapeutic anticoagulation explanation, thrombocytopenia + elevated PT/aPTT + low fibrinogen, FFP or platelets administered, hematology consulted
- **Query trigger phrase:** *"The INR is 3.2 without therapeutic anticoagulation and the platelet count has dropped to 68 — is there a coagulopathy or DIC?"*
- **DRG impact:** DIC = MCC; coagulopathy = CC
- **Difficulty note:** ⭐⭐⭐ Providers know the labs; rarely name the diagnosis

---

### 3.4 Obesity Hypoventilation Syndrome (OHS)
- **ICD-10:** E66.2 (MCC)
- **Procedures:** LEJR, CABG, Spinal Fusion — obese patients with sleep issues
- **What providers write instead:** "Sleep apnea" / "obese" / "CPAP-dependent" / "hypercapnic"
- **Why it's missed:** OSA (G47.33) is only a **CC**. OHS (E66.2) is an **MCC** — a fundamentally different reimbursement tier. Requires documented daytime hypercapnia or OHS diagnosis.
- **Clinical trigger:** BMI > 30 + daytime somnolence + hypercapnia on ABG (PaCO2 > 45) + CPAP/BiPAP requirement, especially daytime use
- **Query trigger phrase:** *"The patient has morbid obesity, uses BiPAP, and the ABG shows PaCO2 of 52 — does this represent obesity hypoventilation syndrome rather than OSA alone?"*
- **DRG impact:** MCC in LEJR and CABG (2-tier — moves the DRG); also MCC in other procedures
- **Difficulty note:** ⭐⭐⭐ Often confused with OSA; requires understanding the hypercapnia distinction

---

### 3.5 Chronic Kidney Disease Stage — Getting the Stage Right
- **ICD-10:** N18.3 (CC) / N18.4 (CC) / N18.5 (MCC) / N18.6 End-stage renal disease (MCC)
- **Procedures:** All five
- **What providers write instead:** "CKD" / "chronic renal insufficiency" / "kidney disease" / "renal impairment"
- **Why it's missed:** N18.9 (CKD, unspecified) is NOT a CC. Stage 3 and 4 are CCs. Stage 5 and ESRD are MCCs. The stage must be documented by the provider — it cannot be inferred from the eGFR alone.
- **Clinical trigger:** eGFR documented in labs — Stage 3: 30–59, Stage 4: 15–29, Stage 5: < 15
- **Query trigger phrase:** *"The eGFR has been consistently 28 over the past year — what stage of CKD would you assign?"*
- **DRG impact:** Stage 5/ESRD = MCC in 2-tier DRGs (LEJR, CABG)
- **Difficulty note:** ⭐⭐⭐ Providers know CKD exists; stage documentation is the gap

---

## TIER 4 — ⭐⭐⭐⭐ PHYSICIAN ADVISOR LEVEL
### "You've been practicing 20 years and still miss this."

---

### 4.1 Hemiplegia / Hemiparesis — The Stroke Sequela Trap
- **ICD-10:** G81.90 Hemiplegia, unspecified (MCC) / G81.10 Spastic hemiplegia (MCC)
- **Procedures:** SHFFT, LEJR — common in elderly stroke survivors presenting for hip fracture
- **What providers write instead:** "History of stroke" / "CVA" / "prior stroke" / "left-sided weakness"
- **Why it's missed:** "History of stroke" with no residual deficits = Z86.73 (NOT a CC). But if the patient has **residual hemiplegia or hemiparesis from a prior stroke**, that is an active condition, not just history — and it is an MCC. The distinction is whether deficits persist.
- **Clinical trigger:** Unilateral weakness on exam, asymmetric grip strength, PT/OT documenting hemiparesis, prior stroke noted in H&P with ongoing functional limitation
- **Query trigger phrase:** *"The patient has a history of CVA with left-sided weakness documented on exam by PT — is there residual hemiplegia or hemiparesis from the prior stroke?"*
- **DRG impact:** MCC in LEJR and SHFFT (2-tier) — major reimbursement shift
- **Difficulty note:** ⭐⭐⭐⭐ The "history of" framing actively destroys the MCC. Requires re-framing a chronic residual as an active condition.

---

### 4.2 Acidemia — The Most Missed Diagnosis in the Dataset
- **ICD-10:** E87.2 Acidosis (CC) — metabolic acidosis, lactic acidosis
- **Procedures:** Major Bowel (bowel ischemia/perforation), CABG (low-flow states), SHFFT
- **What providers write instead:** "Low bicarb" / "metabolic derangement" / "lactic acid elevated"
- **Why it's missed:** Acidemia had a 63.2% ICD code omission rate in the algorithmic study — among the highest of any diagnosis — and 2,055 cases where ICD codes were present but the clinical criteria weren't fully met, showing frequent both undercoding AND overcoding concerns.
- **Clinical trigger:** pH < 7.35 + bicarb < 22, or lactate > 2.0 with clinical concern, or ABG showing metabolic acidosis
- **Query trigger phrase:** *"The ABG shows pH 7.28 with bicarb 14 and the lactate is 4.2 — is there metabolic acidosis or lactic acidosis?"*
- **DRG impact:** CC across TEAM procedures; may enable MCC-level coding in combination with other diagnoses
- **Difficulty note:** ⭐⭐⭐⭐ Providers order the labs, treat the condition, and never name it

---

### 4.3 Malnutrition — The Severity Linkage Problem
*(Advanced version of Tier 2 entry — game can use this as the "Hard Mode" variant)*
- **ICD-10:** E43 (MCC) requires ASPEN or GLIM criteria to be documented
- **Why it's a Wizard-level problem:** A 2020 OIG audit found that hospitals overbilled Medicare by $1 billion due to incorrectly assigning severe malnutrition diagnosis codes on inpatient claims — of 200 claims reviewed, 164 had improper coding where severe malnutrition was documented but should have been classified as a lesser severity or not at all. This makes E43 a **denial magnet** — providers must document the clinical criteria, not just the label.
- **The game twist:** Player must choose BOTH the correct code AND recognize that clinical validation is required — selecting E43 without supporting criteria in the vignette is actually an **overcoding error**.
- **Difficulty note:** ⭐⭐⭐⭐ The hardest level — the correct answer depends on whether the clinical criteria are present in the vignette

---

### 4.4 Acute-on-Chronic Respiratory Failure
- **ICD-10:** J96.20 Acute and chronic respiratory failure, unspecified (MCC)
- **Procedures:** COPD patients undergoing Spinal Fusion, Major Bowel, CABG
- **What providers write instead:** "Respiratory failure" / "hypoxia" / "COPD exacerbation requiring intubation"
- **Why it's missed:** There is a specific code for acute-on-chronic respiratory failure that captures a patient with underlying chronic respiratory failure who then has an acute decompensation. This is distinct from pure acute respiratory failure (J96.0x) and is frequently missed in COPD patients who have baseline hypercapnia or hypoxemia.
- **Clinical trigger:** Known COPD or chronic hypercapnia baseline, now with acute decompensation, ventilator dependency, ABG worsening from documented chronic baseline
- **Query trigger phrase:** *"The patient has COPD with baseline PaCO2 of 48 and now requires mechanical ventilation for acute decompensation — is this acute-on-chronic respiratory failure?"*
- **DRG impact:** MCC; same tier as acute respiratory failure but captures the chronic-baseline nuance
- **Difficulty note:** ⭐⭐⭐⭐ Even CDI specialists sometimes miss the acute-on-chronic distinction

---

### 4.5 Depressive Disorder / Anxiety — The Mental Health Blind Spot
- **ICD-10:** F32.9 Major depressive disorder (CC) / F33.9 Recurrent MDD (CC) / F41.1 Generalized anxiety disorder (CC)
- **Procedures:** Major Bowel (ostomy patients), SHFFT (elderly), Spinal Fusion (chronic pain patients)
- **What providers write instead:** "Patient appears depressed" / "anxious" / "psych history" / nothing
- **Why it's missed:** Surgeons rarely document psychiatric comorbidities even when they are clinically active. These are legitimate CCs that affect SOI/ROM and resource utilization.
- **Clinical trigger:** Psych consult in chart, antidepressant or anxiolytic ordered, social work involvement, patient-reported history
- **Query trigger phrase:** *"The patient is on sertraline 100mg daily and was seen by psychiatry — is major depressive disorder an active diagnosis during this admission?"*
- **DRG impact:** CC in 3-tier TEAM DRGs
- **Difficulty note:** ⭐⭐⭐⭐ Surgeons actively avoid psychiatric diagnoses; this requires cultural change as much as knowledge

---

## Game Design Summary Table

| Diagnosis | CC/MCC | Difficulty | Procedures | The Trap |
|---|---|---|---|---|
| Acute systolic heart failure | MCC | ⭐ | All 5 | "CHF" = CC only |
| Sepsis | MCC | ⭐ | All 5 | "Infection" ≠ sepsis |
| Acute kidney injury | MCC | ⭐ | All 5 | Labs ≠ diagnosis |
| Acute posthemorrhagic anemia | CC | ⭐ | SHFFT, Spinal, Bowel | "Anemia" ≠ D62 |
| Severe malnutrition (E43) | MCC | ⭐⭐ | All 5 | Severity word required |
| Metabolic encephalopathy | MCC | ⭐⭐/⭐⭐⭐ | SHFFT, CABG, Bowel | "Delirium" = CC only |
| Hyponatremia | CC | ⭐⭐ | All 5 | Never named despite labs |
| COPD with exacerbation | CC | ⭐⭐ | Spinal, Bowel, CABG | J44.9 ≠ CC |
| Atrial fibrillation (typed) | CC | ⭐⭐ | CABG, SHFFT | Unspecified Afib ≠ CC |
| Morbid obesity + BMI | CC | ⭐⭐⭐ | LEJR, CABG, Spinal | BMI alone ≠ CC |
| Pressure ulcer Stage 3/4 | MCC | ⭐⭐⭐ | SHFFT, Bowel | POA required; staging required |
| Coagulopathy / DIC | MCC/CC | ⭐⭐⭐ | Bowel, CABG | Labs ≠ diagnosis |
| Obesity hypoventilation | MCC | ⭐⭐⭐ | LEJR, CABG | OSA ≠ OHS |
| CKD stage specificity | MCC (Stage 5) | ⭐⭐⭐ | All 5 | eGFR ≠ provider staging |
| Hemiplegia from prior stroke | MCC | ⭐⭐⭐⭐ | LEJR, SHFFT | "History of stroke" ≠ hemiplegia |
| Acidemia / lactic acidosis | CC | ⭐⭐⭐⭐ | Bowel, CABG | Labs treated; never named |
| Severe malnutrition (overcoding) | MCC | ⭐⭐⭐⭐ | All 5 | Choosing E43 without criteria = denial |
| Acute-on-chronic resp failure | MCC | ⭐⭐⭐⭐ | Spinal, Bowel, CABG | Misses the "chronic" baseline |
| Major depressive disorder | CC | ⭐⭐⭐⭐ | Bowel, SHFFT, Spinal | Surgeons don't document psych Dx |

---

## Sample Vignette Difficulty Progression
### Same Patient — Four Difficulty Levels

**Patient Base:** 74-year-old male, admitted for elective total knee replacement (DRG 470 base).  
PMH: Type 2 diabetes, hypertension, "heart problems," chronic back pain, prior right-sided stroke 3 years ago with some residual left arm weakness.

---

**⭐ MEDICAL STUDENT VIGNETTE:**  
*Post-op day 1. Patient's urine output has dropped. Creatinine today is 2.4, up from 0.9 preop. He is still making urine. Vitals stable.*  
**Teaching point:** Document "acute kidney injury" → MCC → DRG 469

---

**⭐⭐ RESIDENT VIGNETTE:**  
*Pre-op. Patient is 5'9", 268 lbs. BMI 39.6 documented by nursing. He uses CPAP at night. Albumin is 2.7. Nutrition consult recommended "moderate malnutrition." Surgeon's note: "Patient obese, nutritional status poor."*  
**Teaching point:** Moderate malnutrition (E44.0, CC) + Morbid obesity requires BMI code AND provider diagnosis. "Nutritional status poor" does not code.

---

**⭐⭐⭐ ATTENDING VIGNETTE:**  
*Post-op day 2. Night nurse notes patient "confused and pulling at IV." O2 sat 92% on 2L NC. Sodium is 128. Glucose 288. CAM screen positive. Patient normally oriented at baseline per family.*  
**Teaching point:** "Confused" = symptom. Document metabolic encephalopathy (G93.41, MCC) linked to hyponatremia + hyperglycemia. "Delirium" alone = only a CC.

---

**⭐⭐⭐⭐ PHYSICIAN ADVISOR VIGNETTE:**  
*Preoperative note reads: "74M with h/o CVA 2019, HTN, DM2, chronic back pain. Former smoker. No acute complaints." Physical exam: "Left grip strength 3/5, left lower extremity mild circumduction gait noted."*  
**Teaching point:** "H/o CVA" → Z86.73 (not a CC). Left grip 3/5 + circumduction gait = active residual hemiparesis (G81.90, MCC). The physical exam contains the MCC; the H&P phrasing hides it. DRG 470 → 469 on the strength of exam findings — but only if the provider names it.

---

*This document is designed for use in the Physician Quest CDI education application.  
Difficulty tiers map to game level progression and unlock system.  
Clinical validation requirements must be followed — accurate documentation, not upcoding, is the goal.*
