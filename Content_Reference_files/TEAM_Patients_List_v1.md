# Patient Scenarios

This document contains several patient encounters modeled after the TEAM-CDI-Design specifications, ordered by different difficulty tiers and surgical procedures from the CMS TEAM model.

---

## Encounter 1: The LEJR Trap (Difficulty: ⭐ Apprentice)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Older Male]                 │ PATIENT NAME: Robert M.
│                                         │ Age: 74 / Caucasian / Male
│                                         │ Admitting DX: Right knee osteoarthritis
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"I'm here for my new knee."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Patient is a 74-year-old male admitted for an elective Right Total Knee Arthroplasty (LEJR). The procedure went well. Now on post-op day 1, the nursing staff reports that the patient's urine output has dropped significantly over the past 8 hours. He is still making some urine but much less than expected based on his fluid intake.

PAST MEDICAL HISTORY:
──────────────────────
Type 2 Diabetes Mellitus, Hypertension, Osteoarthritis.

VITALS / LABS:
──────────────
Current Creatinine: 2.4 mg/dL
Pre-op Creatinine: 0.9 mg/dL
BUN: 42 mg/dL

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Right knee osteoarthritis
□ Option 2: Elevated creatinine
□ Option 3: Renal insufficiency
□ Option 4: Acute kidney injury
□ Option 5: Type 2 Diabetes Mellitus
□ Option 6: Hypertension


[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Acute kidney injury" (MCC)
- If you selected "Elevated creatinine" or "Renal insufficiency", these are lab findings or vague symptoms that do not code to an MCC.
- LEJR is a 2-tier DRG. An acute kidney injury diagnosis (N17.9) is an MCC that will shift the reimbursement tier correctly for this patient's severity!
```

---

## Encounter 2: Major Bowel Acidemia (Difficulty: ⭐⭐⭐⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Middle-Aged Female]         │ PATIENT NAME: Sarah L.
│                                         │ Age: 58 / Hispanic / Female
│                                         │ Admitting DX: Perforated Diverticulitis
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"My stomach hurts worse than it ever has."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Patient is a 58-year-old female admitted for an emergent partial colectomy (Major Bowel Procedure) due to perforated diverticulitis. Post-op, she is recovering in the ICU. She is tachypneic but oxygenating well on room air.

PAST MEDICAL HISTORY:
──────────────────────
Diverticulosis, Appendectomy in childhood.

VITALS / LABS:
──────────────
Lactate: 4.2 mmol/L
pH: 7.28
Bicarbonate: 14 mEq/L
WBC: 18,000 /mcL

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Diverticulitis with perforation
□ Option 2: Low bicarbonate
□ Option 3: Lactic acidosis
□ Option 4: Elevated lactic acid
□ Option 5: Leukocytosis
□ Option 6: Secondary peritonitis


[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Lactic acidosis" (CC)
- Acidemia has an over 60% ICD code omission rate in studies!
- Providers order labs and treat the condition but rarely name it. "Low bicarb" or "elevated lactic acid" are lab values, not diagnoses. Documenting lactic acidosis secures the CC.
```

---

## Encounter 3: SHFFT Post-Hemorrhagic Anemia (Difficulty: ⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Elderly Female]             │ PATIENT NAME: Eleanor W.
│                                         │ Age: 82 / Caucasian / Female
│                                         │ Admitting DX: Left Femoral Neck Fracture
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"I fell in the bathroom and my hip hurts so much."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Eleanor admitted for Surgical Hip and Femur Fracture Treatment (SHFFT). On post-op day 2, she is complaining of dizziness when sitting up in her bed. Her heart rate ranges in the 110s. The team ordered a stat CBC and subsequently transfused 2 units of pRBCs.

PAST MEDICAL HISTORY:
──────────────────────
Osteoporosis, Atrial Fibrillation (on Eliquis).

VITALS / LABS:
──────────────
Post-op Hgb: 7.6 g/dL
Admission Hgb: 11.2 g/dL
BP: 100/60 mmHg, HR: 112 bpm

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Left femoral neck fracture
□ Option 2: Anemia
□ Option 3: Acute posthemorrhagic anemia
□ Option 4: Blood loss
□ Option 5: Osteoporosis
□ Option 6: Atrial fibrillation


[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Acute posthemorrhagic anemia" (CC)
- Generic "anemia" codes to D64.9, which is not a CC!
- Acute posthemorrhagic anemia (D62) requires documentation of the acute blood loss as the cause and provides a CC rating, shifting the SHFFT 3-tier DRG reimbursement.
```

---

## Encounter 4: Spinal Fusion & Encephalopathy (Difficulty: ⭐⭐⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Middle-Aged Male]           │ PATIENT NAME: James C.
│                                         │ Age: 61 / Black / Male
│                                         │ Admitting DX: Lumbar Spinal Stenosis
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"My back pain is ten out of ten down my legs."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Patient admitted for elective multilevel lumbar spinal fusion. Post-op day 2, the night nurse notes the patient is "confused and pulling at his IV." His family expresses concern, stating he is normally sharply oriented and never confused at baseline. His CAM screen is positive.

PAST MEDICAL HISTORY:
──────────────────────
Hypertension, Hyperlipidemia.

VITALS / LABS:
──────────────
Sodium: 128 mEq/L (Down from 139 admission)
O2 Sat: 95% on Room Air
Neuro: Disoriented to time and place.

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Lumbar spinal stenosis
□ Option 2: Altered mental status / Confusion
□ Option 3: Delirium
□ Option 4: Metabolic encephalopathy
□ Option 5: Hyponatremia
□ Option 6: Low sodium


[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Metabolic encephalopathy" (MCC) and "Hyponatremia" (CC)
- "Confusion" and "Altered mental status" are symptoms, not diagnoses. "Delirium" captures only a CC.
- You need to document "Metabolic encephalopathy" secondary to "Hyponatremia" to correctly recognize the MCC along with the underlying cause.
```

---

## Encounter 5: CABG & The Specificity Rule (Difficulty: ⭐⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Senior Male]                │ PATIENT NAME: Michael T.
│                                         │ Age: 68 / Asian / Male
│                                         │ Admitting DX: Multivessel CAD
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"I had terrible chest pressure while shoveling snow."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Patient admitted for CABG x 3. On post-op day 2, the telemetry monitor alarms for an irregular, rapid heartbeat. EKG confirms a new arrhythmia. The patient is started on an amiodarone drip.

PAST MEDICAL HISTORY:
──────────────────────
Coronary Artery Disease, Hyperlipidemia. No prior history of arrhythmias.

VITALS / LABS:
──────────────
HR: 135 bpm, irregularly irregular
BP: 105/70 mmHg
EKG: New onset Atrial Fibrillation

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Coronary Artery Disease
□ Option 2: Atrial Fibrillation
□ Option 3: Cardiac Arrhythmia
□ Option 4: Paroxysmal Atrial Fibrillation
□ Option 5: Post-operative tachycardia


[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Paroxysmal Atrial Fibrillation" (CC)
- Unspecified Atrial Fibrillation is NOT a CC. Specifying this as Paroxysmal, Persistent, or Longstanding Persistent Atrial Fibrillation captures the CC.
- Even though CABG is a 2-tier DRG and this won't move the payment tier on its own, it significantly affects the Severity of Illness/Risk of Mortality (SOI/ROM).
```

---

## Encounter 6: The Sepsis Trap (Difficulty: ⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Adult Male]                 │ PATIENT NAME: Thomas G.
│                                         │ Age: 65 / Black / Male
│                                         │ Admitting DX: Ischemic Bowel
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"My belly hurts and I feel freezing."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Admitted for emergency bowel resection (Major Bowel Procedure) for ischemic bowel. Post-op, the patient spikes a fever of 102.1°F and his heart rate goes up to 120 bpm. The team suspects peritonitis from a micro-perforation and starts broad-spectrum antibiotics.

PAST MEDICAL HISTORY:
──────────────────────
Hypertension, Hyperlipidemia.

VITALS / LABS:
──────────────
Temp: 102.1°F, HR: 120 bpm, RR: 22
WBC: 21,000 /mcL

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Ischemic bowel
□ Option 2: Severe infection
□ Option 3: SIRS
□ Option 4: Bacteremia
□ Option 5: Sepsis
□ Option 6: Elevated WBC

[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Sepsis" (MCC)
- Documenting "SIRS", "severe infection", or "bacteremia" does NOT code to Sepsis.
- The provider must document the explicit word Sepsis to capture the MCC. A generic inflammatory state or elevated WBC count leaves major reimbursement on the table for this complex bowel case.
```

---

## Encounter 7: The OHS Trap (Difficulty: ⭐⭐⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Heavy-set Male]             │ PATIENT NAME: David R.
│                                         │ Age: 54 / Caucasian / Male
│                                         │ Admitting DX: Left Hip Osteoarthritis
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"I am here for my hip replacement."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Admitted for Left Total Hip Arthroplasty (LEJR). The patient has significant obesity and snores heavily in the recovery room. He is placed on his home BiPAP machine.

PAST MEDICAL HISTORY:
──────────────────────
"Sleep Apnea" per patient statement. Hypertension.

VITALS / LABS:
──────────────
BMI: 42.5
ABG: PaCO2 52 mmHg (Hypercapnia)
O2 Sat: 93% on BiPAP

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Left hip osteoarthritis
□ Option 2: Obstructive Sleep Apnea
□ Option 3: Obesity Hypoventilation Syndrome
□ Option 4: Morbid Obesity
□ Option 5: Elevated CO2
□ Option 6: Hypertension

[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Obesity Hypoventilation Syndrome" (MCC)
- Usually, Obstructive Sleep Apnea (OSA) is just a CC. But given the hypercapnia (PaCO2 > 45) and severe obesity, this is Obesity Hypoventilation Syndrome (OHS), which is an MCC!
- This completely shifts the LEJR DRG tier from without MCC to with MCC.
```

---

## Encounter 8: The Hemiplegia Trap (Difficulty: ⭐⭐⭐⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Elderly Male]               │ PATIENT NAME: William C.
│                                         │ Age: 78 / Caucasian / Male
│                                         │ Admitting DX: Intertrochanteric Femur Fx
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"I tripped over my dog and broke my hip."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Admitted for Surgical Hip and Femur Fracture Treatment (SHFFT). PT/OT evaluate the patient and note he still has difficulty gripping a walker with his left hand, and that he drags his left leg slightly when trying to mobilize, which he says has been present for a few years.

PAST MEDICAL HISTORY:
──────────────────────
CVA 3 years ago, Hypertension.

VITALS / LABS:
──────────────
Neuro exam: Left grip strength 3/5. Left lower extremity mild circumduction gait.

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Intertrochanteric femur fracture
□ Option 2: History of stroke (CVA)
□ Option 3: Hypertension
□ Option 4: Hemiplegia/Hemiparesis from prior stroke
□ Option 5: Left-sided weakness
□ Option 6: Fall assessment

[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Hemiplegia/Hemiparesis from prior stroke" (MCC)
- If you documented "History of stroke", it codes to Z86.73, which is not a CC!
- The residual deficits observed by PT mean the prior stroke effects are still an active condition. This upgrades the SHFFT encounter drastically. Re-framing a chronic residual as an active condition is wizard-level CDI.
```

---

## Encounter 9: Acute-on-Chronic Respiratory Failure (Difficulty: ⭐⭐⭐⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Senior Male]                │ PATIENT NAME: Arthur P.
│                                         │ Age: 71 / Black / Male
│                                         │ Admitting DX: Advanced Multivessel CAD
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"I get out of breath just walking to the kitchen."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Admitted for CABG procedure. The patient has a long history of severe COPD and is dependent on home oxygen. On post-op day 1, he is unable to be weaned from the ventilator due to severe respiratory decompensation.

PAST MEDICAL HISTORY:
──────────────────────
Severe COPD (Baseline PaCO2 48), CAD.

VITALS / LABS:
──────────────
Current ABG: PaCO2 65 mmHg, pH 7.21
Ventilator supported.

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Coronary Artery Disease
□ Option 2: COPD exacerbation
□ Option 3: Acute respiratory failure
□ Option 4: Chronic respiratory failure
□ Option 5: Acute-on-chronic respiratory failure
□ Option 6: Hypoxia

[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Acute-on-chronic respiratory failure" (MCC)
- While "Acute respiratory failure" is an MCC, capturing the "acute-on-chronic" nuance demonstrates optimal CDI documentation.
- Documenting "hypoxia" or just "COPD exacerbation" (CC) misses the chronic baseline completely, leaving critical value on the table for this complex CABG patient.
```

---

## Encounter 10: Pressure Ulcer Staging & POA (Difficulty: ⭐⭐⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Elderly Female]             │ PATIENT NAME: Margaret S.
│                                         │ Age: 88 / Caucasian / Female
│                                         │ Admitting DX: Hip Fracture
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"I fell at the nursing home and was brought here."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Admitted for SHFFT. The patient is largely bedbound at her nursing facility. Upon admission, the wound care nurse documents a large, deep ulcer on her sacrum extending down to the subcutaneous fat.

PAST MEDICAL HISTORY:
──────────────────────
Dementia, Osteoporosis.

VITALS / LABS:
──────────────
Skin Exam: Sacral ulcer, Stage 3. Documented by wound care on Admission Day 1.

CLINICAL QUESTION:
───────────────────
Which of these would you add to your documentation?
Select all that apply.

□ Option 1: Skin breakdown
□ Option 2: Stage 3 sacral pressure ulcer
□ Option 3: Stage 3 sacral pressure ulcer (Present on Admission)
□ Option 4: Unstageable pressure ulcer
□ Option 5: Sacral wound
□ Option 6: Bed sores

[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Stage 3 sacral pressure ulcer (Present on Admission)" (MCC)
- If you forget to specifically denote that the Stage 3/4 ulcer was Present On Admission (POA), this condition looks like a Hospital-Acquired Condition (HAC) that your facility caused!
- POA omissions for MCCs lead to severe quality metric and reimbursement penalties. Nursing staging must be explicitly acknowledged in the provider's note.
```

---

## Encounter 11: Malnutrition Overcoding (Difficulty: ⭐⭐⭐⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Middle-Aged Male]           │ PATIENT NAME: John B.
│                                         │ Age: 60 / Hispanic / Male
│                                         │ Admitting DX: Rectal Cancer
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"I haven't felt like eating much lately."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Admitted for Major Bowel Procedure to remove a rectal mass. The patient states his appetite has been poor, but his weight has been stable. The dietitian notes he does not meet ASPEN criteria for severe malnutrition, but has mild/moderate risk. The surgeon notes "nutritional status poor" and "low albumin."

PAST MEDICAL HISTORY:
──────────────────────
Rectal Cancer.

VITALS / LABS:
──────────────
Albumin: 2.7 g/dL
BMI: 22.1
Weight: Stable over 6 months

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Rectal Cancer
□ Option 2: Poor appetite
□ Option 3: Low albumin
□ Option 4: Moderate malnutrition
□ Option 5: Severe protein-calorie malnutrition
□ Option 6: Cachexia

[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You failed! (Overcoding Denial Risk)
- If you selected "Severe protein-calorie malnutrition" (E43), you have overcoded! Severe malnutrition without the proper ASPEN criteria (like rapid weight loss or muscle wasting) is a massive denial magnet triggering OIG audits.
- "Moderate malnutrition" is the correct CC here based on the clinical picture, and will be defensibly approved by insurance.
```

---

## Encounter 12: Major Depressive Disorder (Difficulty: ⭐⭐⭐⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Adult Female]               │ PATIENT NAME: Lisa M.
│                                         │ Age: 45 / Caucasian / Female
│                                         │ Admitting DX: Spondylolisthesis
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"I can't take this back pain anymore. It's ruining my life."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Admitted for Lumbar Spinal Fusion. The patient is suffering from severe chronic pain. She was seen by psychiatry last month and started on medication due to overwhelming sadness and lack of motivation related to her living situation and chronic pain.

PAST MEDICAL HISTORY:
──────────────────────
Chronic lower back pain.

VITALS / LABS:
──────────────
Medications list: Sertraline 100mg daily.
Psychiatric eval confirms MDD dx.

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Spondylolisthesis
□ Option 2: Chronic back pain
□ Option 3: Patient appears depressed
□ Option 4: Psych history
□ Option 5: Major depressive disorder
□ Option 6: Elevated anxiety

[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Major depressive disorder" (CC)
- Surgeons notoriously under-document psychiatric comorbidities. "Patient appears depressed" or relying on a general "psych history" will not result in any coded diagnoses.
- Documenting the specific psychiatric diagnosis (MDD) yields a CC that appropriately increases the patient's severity of illness score!
```

---

## Encounter 13: LEJR 2-Tier Malnutrition (Difficulty: ⭐⭐⭐⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Older Female]               │ PATIENT NAME: Betty K.
│                                         │ Age: 76 / Caucasian / Female
│                                         │ Admitting DX: Hip Osteoarthritis
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"My hip hurts and I have lost my appetite."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Admitted for elective Right Total Hip Arthroplasty (LEJR). The dietitian evaluates the patient and notes she has lost 10% of her body weight over the past 3 months. She has severe temporal wasting and diminished grip strength. The dietitian documents "Severe protein-calorie malnutrition based on ASPEN criteria."

PAST MEDICAL HISTORY:
──────────────────────
Osteoarthritis, Hypertension.

VITALS / LABS:
──────────────
Albumin: 1.9 g/dL
Weight: 98 lbs (down from 110 lbs)

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Right hip osteoarthritis
□ Option 2: Low albumin
□ Option 3: Weight loss
□ Option 4: Unspecified protein-calorie malnutrition
□ Option 5: Severe protein-calorie malnutrition
□ Option 6: Hypertension

[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Severe protein-calorie malnutrition" (MCC)
- If you document "Unspecified malnutrition", it only captures a CC. Because LEJR is a 2-tier DRG, a CC alone does NOT change the DRG!
- Only the specific "Severe" variant (MCC) moves the reimbursement tier for 2-tier surgical DRGs, potentially increasing reimbursement by over $6,000. This requires acknowledging the dietitian's ASPEN criteria in your note.
```

---

## Encounter 14: CABG 2-Tier Heart Failure (Difficulty: ⭐)

```text
┌─────────────────────────────────────────┐
│ [Pixel Art: Older Male]                 │ PATIENT NAME: Charles H.
│                                         │ Age: 69 / Black / Male
│                                         │ Admitting DX: Triple Vessel CAD
│                                         │ Attending: YOU
└─────────────────────────────────────────┘

CHIEF COMPLAINT:
─────────────────
"I feel like an elephant is sitting on my chest."

HISTORY OF PRESENT ILLNESS:
────────────────────────────
Admitted for CABG x 3. On post-op day 3, the patient develops pink frothy sputum, bilateral crackles on lung exam, and worsening dyspnea. His BNP skyrockets to 1200. He is started on IV Lasix with significant diuresis. An echo confirms an ejection fraction of 25%.

PAST MEDICAL HISTORY:
──────────────────────
Coronary Artery Disease.

VITALS / LABS:
──────────────
BNP: 1200 pg/mL
Echo: EF 25% (Systolic Dysfunction)

CLINICAL QUESTION:
───────────────────
Based on this presentation, which diagnoses would you document for this admission?
Select all that apply.

□ Option 1: Coronary Artery Disease
□ Option 2: Congestive heart failure (CHF)
□ Option 3: Volume overload
□ Option 4: Acute systolic heart failure
□ Option 5: Pulmonary edema
□ Option 6: High BNP

[ 📜 SUBMIT DOCUMENTATION ]

⚔️ DOCUMENTATION RESULTS ⚔️

✨ THE TRAP:
- You missed: "Acute systolic heart failure" (MCC)
- CABG is a 2-tier DRG! If you select "Congestive heart failure," it defaults to a CC and does NOT change the DRG!
- "Acute systolic heart failure" is an MCC, and is the ONLY way to move CABG to the higher reimbursement tier, increasing payment by roughly $14,000 to $18,000! Accuracy pays.
```
