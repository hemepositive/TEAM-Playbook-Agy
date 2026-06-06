---
title: Surgical Hip & Femur Fracture Treatment (SHFFT)
procedure: shfft
drg-family: [480, 481, 482]
tier-structure: 3-tier
team-procedures: [LEJR, SHFFT, Spinal Fusion, CABG, Major Bowel]
route: /procedures/shfft
last-updated: 2026-06
source: CMS FY2025/FY2026 IPPS Final Rule, MS-DRG V43.0
---

<!-- ============================================================
  SECTION: PageHero
  Component hint: <PageHero> — procedure title, category tag,
  one-line description, DRG family pills
  ============================================================ -->

# Surgical Hip & Femur Fracture Treatment (SHFFT)

**Category:** TEAM Surgical Episode · MS-DRG 480 / 481 / 482

Hip fracture surgery is the most acuity-loaded of the five TEAM procedures. Patients arrive urgently, without preoperative optimization, carrying the full burden of their chronic conditions into the OR. The documentation window is narrow and the stakes are high — SHFFT has the highest average Risk of Mortality of all five TEAM procedures, and accurate comorbidity capture is the only way to ensure the hospital's quality metrics reflect the patients it's actually treating.

---

<!-- ============================================================
  SECTION: ThreeTierCallout
  Component hint: <AlertBanner variant="critical">
  ============================================================ -->

> [PEARL]
> **SHFFT is a 3-tier DRG. Both a CC and an MCC change the payment — and the gap between tiers is substantial.**
>
> Unlike LEJR, where only an MCC moves the needle, every documented CC in a SHFFT case has direct financial value. A single well-documented CC moves the case from DRG 482 to DRG 481. A single MCC moves it to DRG 480 — the highest tier. The difference between the bottom and top tier is approximately **$12,000 per case**.
>
> Because these patients arrive without a planned admission, there is no pre-admission CDI review opportunity. The H&P written on day one — or the progress note written on day two — is often the only documentation window. If comorbidities are missed there, they are missed entirely.

---

<!-- ============================================================
  SECTION: DRGOverview
  Component hint: <DRGTierTable>
  ============================================================ -->

## DRG Tiers at a Glance

| MS-DRG | Description | Severity | Approx. Payment |
|--------|-------------|----------|-----------------|
| **480** | Hip and femur procedures except major joint | **With MCC** | ~$25,000 |
| **481** | Hip and femur procedures except major joint | **With CC** | ~$18,000 |
| **482** | Hip and femur procedures except major joint | **Without CC/MCC** | ~$13,000 |

> [NOTE]
> Payment figures are national average approximations using CMS FY2025 IPPS base rates. Actual reimbursement varies by hospital wage index, DSH status, and teaching adjustment. The delta from DRG 482 to DRG 481 is approximately **$5,000**. The delta from DRG 482 to DRG 480 is approximately **$12,000**.

---

<!-- ============================================================
  SECTION: TopMCCs
  Component hint: <MCCCardList>
  ============================================================ -->

## Top MCCs to Document — SHFFT

These are the conditions most commonly present in hip fracture patients and most frequently underdocumented. Each one moves the case from DRG 481 or 482 to DRG 480 — the highest-paying tier.

---

### 1. Metabolic Encephalopathy

**ICD-10:** G93.41 (MCC)

Post-operative delirium and confusion in elderly hip fracture patients is so common it is sometimes treated as expected and therefore not documented. That's the problem. When confusion has a metabolic cause — hyponatremia, uremia, hyperglycemia, medication effect, sepsis — the correct diagnosis is metabolic encephalopathy, not delirium, and not "altered mental status."

**Clinical trigger:** New-onset confusion or disorientation not at baseline per family or nursing home records. CAM-positive assessment. Concurrent metabolic abnormality present on labs.

**What physicians write instead:** "Confusion" / "altered mental status" / "delirium" / "sundowning" / "ICU psychosis"

**Why it's missed:** Two layered problems. First, altered mental status is documented as a symptom rather than diagnosed as a condition. Second, even when physicians use the word "delirium," they are leaving an MCC on the table — delirium (F05) is a CC, not an MCC. Metabolic encephalopathy requires naming the metabolic cause, but in most elderly hip fracture patients that cause is sitting right there in the labs.

> [PHRASING]
> ❌ "Patient confused and disoriented overnight, likely sundowning"  
> ✅ "Metabolic encephalopathy secondary to hyponatremia (Na 124) — patient disoriented to time and place, CAM-positive, not at baseline per nursing home staff"

---

### 2. Dementia — Active, Not History

**ICD-10:** G30.9 Alzheimer's disease, unspecified (MCC) · F02.80 Dementia in other diseases, without behavioral disturbance (MCC)

Dementia is extraordinarily prevalent in the hip fracture population and extraordinarily underdocumented. It affects surgical planning, anesthesia choice, postoperative management, and discharge disposition — yet it often appears nowhere in the physician's note, or appears only as "history of dementia."

**Clinical trigger:** Nursing home resident. Family or caregiver present at bedside. Prior cognitive impairment documented in outside records. Patient unable to provide reliable history. Geriatrics or psychiatry consulted. Documented baseline cognitive impairment on prior visits.

**What physicians write instead:** "History of dementia" / "cognitive impairment" / "memory problems" / nothing at all

**Why it's missed:** Surgeons don't typically manage dementia — they manage the fracture. The condition gets noted in the social history and then never appears in the assessment. But dementia is not historical in a patient who is actively demented. It is a current condition affecting every aspect of the admission, and it should be documented as such.

> [PHRASING]
> ❌ "PMH: dementia (managed by PCP)"  
> ✅ "Alzheimer's dementia, moderate stage — patient unable to follow commands consistently, requires caregiver for all ADLs, baseline cognitive function confirmed with nursing home"

> [NOTE]
> When dementia is documented as the underlying cause of the fall that led to the fracture, it carries additional clinical significance. Document the causal relationship explicitly if it is clinically supported.

---

### 3. Acute Respiratory Failure

**ICD-10:** J96.00 Acute respiratory failure, unspecified (MCC) · J96.01 Acute respiratory failure with hypoxia (MCC)

Elderly hip fracture patients are at high baseline risk for respiratory complications — aspiration, pneumonia, fluid overload, and atelectasis following anesthesia and prolonged immobility. When supplemental oxygen is required beyond baseline, or when the clinical picture requires active respiratory management, acute respiratory failure should be named.

**Clinical trigger:** O₂ saturation below 90% on room air. Supplemental oxygen required beyond the patient's home baseline. Respiratory rate persistently elevated. Pulmonology consulted. Non-invasive ventilation initiated.

**What physicians write instead:** "Hypoxia" / "low O₂ sat" / "needs supplemental O₂" / "respiratory distress"

**Why it's missed:** Hypoxia is a finding. Respiratory distress is a symptom. Acute respiratory failure is a diagnosis. The clinical threshold is met when the patient requires active intervention to maintain oxygenation — supplemental O₂ beyond baseline, BiPAP, or intubation. If that's happening, the diagnosis should be documented.

> [PHRASING]
> ❌ "Patient hypoxic postoperatively, placed on 4L NC"  
> ✅ "Acute hypoxic respiratory failure — O₂ saturation 84% on room air postoperatively, requiring 4L nasal cannula for maintenance above 92%"

---

### 4. Severe Protein-Calorie Malnutrition

**ICD-10:** E43 (MCC) · E41 nutritional marasmus (MCC)

Malnutrition is the most clinically consequential and most systematically underdocumented comorbidity in the hip fracture population. It affects wound healing, infection risk, bone density, and length of stay — and it is present in a substantial proportion of elderly patients presenting with hip fractures. The difference between documenting it and not documenting it is the difference between a CC and an MCC, and frequently between getting a CDI query response and getting nothing at all.

**Clinical trigger:** Albumin < 2.0. BMI < 18.5. Documented weight loss of >10% in preceding months. Muscle wasting visible on exam. TPN or tube feeds initiated. Dietitian consult documenting ASPEN criteria for severe malnutrition.

**What physicians write instead:** "Cachectic" / "malnourished appearing" / "poor nutritional status" / "low albumin" / nothing

**Why it's missed:** The dietitian often does the assessment. The physician often never documents a diagnosis. The fix is straightforward — acknowledge the dietitian's documented findings in your own note, name the condition, and specify the severity. Severe (E43) is an MCC. Unspecified (E46) is a CC. The word "severe" is the entire unlock for the higher tier.

> [PHRASING]
> ❌ "Nutrition consult placed for poor appetite and low albumin"  
> ✅ "Severe protein-calorie malnutrition — albumin 1.7, weight loss of approximately 15 lbs over prior 3 months per nursing home records, temporal wasting on exam, meeting ASPEN criteria per nutrition assessment"

> [DENIAL-RISK]
> E43 (severe malnutrition) is a high-audit code. Document the supporting clinical criteria — albumin value, weight loss with timeframe, physical exam findings — not just the label. A diagnosis without documented criteria is a denial target.

---

### 5. Sepsis

**ICD-10:** A41.9 (MCC) · R65.20 severe sepsis without septic shock (MCC) · R65.21 severe sepsis with septic shock (MCC)

Hip fracture patients are at elevated risk for postoperative infection — surgical site infections, urinary tract infections from indwelling catheters, and aspiration pneumonia are all common. When the clinical picture meets the threshold for sepsis, the word must appear in the physician's note.

**Clinical trigger:** Fever or hypothermia + elevated WBC + suspected or confirmed infectious source. Broad-spectrum antibiotics initiated. Blood cultures drawn. Concern for systemic infection documented by any provider.

**What physicians write instead:** "Infection" / "SIRS" / "bacteremia" / "UTI" (without noting systemic involvement)

**Why it's missed:** A UTI is not sepsis. SIRS is not sepsis. Bacteremia is not sepsis. The physician must write the word "sepsis" — and when the source is identified, name it. If organ dysfunction is present, document severe sepsis (R65.20). If vasopressors are required, document septic shock (R65.21).

> [PHRASING]
> ❌ "Febrile with elevated WBC, likely urinary source, antibiotics started"  
> ✅ "Sepsis, urinary source — fever 101.8, WBC 18,000, UA consistent with UTI, blood cultures drawn, IV antibiotics initiated"

---

### 6. Acute Kidney Injury

**ICD-10:** N17.9 (MCC) · N17.0 with tubular necrosis (MCC)

AKI is common in hip fracture patients — dehydration at presentation, blood loss from the fracture, contrast administration if imaging was required, and postoperative hemodynamic shifts all contribute. The documentation barrier is identical to LEJR: labs are noted, the condition is treated, and the diagnosis is never explicitly named.

**Clinical trigger:** Creatinine rise ≥ 0.3 mg/dL above baseline or ≥ 1.5× baseline within 7 days. Decreased urine output. IV fluid resuscitation given. Nephrology consulted.

**What physicians write instead:** "Elevated creatinine" / "renal insufficiency" / "creatinine up from baseline"

**Why it's missed:** Same as LEJR — labs are not diagnoses. Three words solve it: "acute kidney injury."

> [PHRASING]
> ❌ "Creatinine elevated on admission, improved with hydration"  
> ✅ "Acute kidney injury on admission, likely prerenal in setting of dehydration from prolonged time on floor — creatinine 2.1, baseline 1.0, improved to 1.3 with IV fluids"

---

<!-- ============================================================
  SECTION: BeforeAfterNote
  Component hint: <NoteComparison>
  ============================================================ -->

## Before & After: The H&P That Set the Wrong Tier

**The patient:** 82-year-old female, nursing home resident, admitted urgently for left intertrochanteric hip fracture after a fall. History of Alzheimer's dementia, hypertension, and osteoporosis. On arrival she is confused, has been on the floor for several hours, and is mildly dehydrated. Albumin on admission is 1.9. Sodium is 127. She undergoes ORIF the following morning.

---

### As Written — DRG 482 (~$13,000)

```
HISTORY & PHYSICAL — ADMISSION NOTE

CC: Left hip fracture after fall

HPI: 82-year-old female nursing home resident who fell and was
found on the floor. She was unable to get up. EMS brought to ED.

PMH:
- [HIGHLIGHT-MISS] Dementia [/HIGHLIGHT-MISS]
- Hypertension
- Osteoporosis

PHYSICAL EXAM:
General: [HIGHLIGHT-MISS] Elderly female, appears thin and frail [/HIGHLIGHT-MISS]
Neuro: [HIGHLIGHT-MISS] Confused, not following commands [/HIGHLIGHT-MISS]

LABS:
Na 127, Albumin 1.9, Hgb 9.8

ASSESSMENT & PLAN:
1. Left intertrochanteric hip fracture — surgical repair planned
2. [HIGHLIGHT-MISS] Hyponatremia — monitor [/HIGHLIGHT-MISS]
3. Hypertension — continue home meds
4. [HIGHLIGHT-MISS] Anemia — monitor [/HIGHLIGHT-MISS]
```

> [MISS]
> "Dementia" appears in the PMH and never again. It is listed as a historical condition rather than an active one affecting this admission. Unless it is carried into the Assessment & Plan as an active diagnosis, it will not be coded.

> [MISS]
> "Appears thin and frail" is a physical exam observation, not a diagnosis. Albumin 1.9 is a lab value. Neither codes to malnutrition. The diagnosis must be explicitly named.

> [MISS]
> "Confused, not following commands" is a symptom. It does not code as metabolic encephalopathy. With a concurrent sodium of 127, the metabolic cause is documented right there in the labs — it just needs the physician to connect them.

> [WARN]
> "Hyponatremia — monitor" names the condition but implies passive observation. Documenting it explicitly with the sodium value and any planned treatment strengthens the CC.

> [WARN]
> "Anemia — monitor" does not capture the specific type. A hemoglobin of 9.8 in the context of a hip fracture and blood loss is acute posthemorrhagic anemia (D62, CC) — but only if the physician names it and links it to the blood loss.

---

### Revised — DRG 480 (~$25,000) · ▲ ~$12,000

```
HISTORY & PHYSICAL — ADMISSION NOTE

CC: Left hip fracture after fall

HPI: 82-year-old female nursing home resident presenting urgently
with left intertrochanteric hip fracture after an unwitnessed fall.
Found on floor by staff, estimated down several hours. History
obtained from nursing home staff and daughter.

PMH:
- [HIGHLIGHT-OK] Alzheimer's dementia, moderate stage [/HIGHLIGHT-OK]
- Hypertension
- Osteoporosis

PHYSICAL EXAM:
General: [HIGHLIGHT-OK] Cachectic female with temporal wasting and reduced
muscle bulk consistent with malnutrition [/HIGHLIGHT-OK]
Neuro: [HIGHLIGHT-OK] Disoriented to time and place, unable to follow
two-step commands — nursing home staff confirms this exceeds
her baseline cognitive function [/HIGHLIGHT-OK]

LABS:
Na 127, Albumin 1.9, Hgb 9.8

ASSESSMENT & PLAN:
1. Left intertrochanteric hip fracture — ORIF planned
2. [HIGHLIGHT-OK] Alzheimer's dementia, moderate stage — active condition
   affecting capacity assessment, anesthesia planning, and
   postoperative management [/HIGHLIGHT-OK]
3. [HIGHLIGHT-OK] Metabolic encephalopathy secondary to hyponatremia (Na 127)
   — confusion exceeds dementia baseline per nursing home staff,
   CAM screen positive [/HIGHLIGHT-OK]
4. [HIGHLIGHT-OK] Severe protein-calorie malnutrition — albumin 1.9,
   temporal wasting on exam, weight loss per nursing home records,
   meeting ASPEN criteria per nutrition assessment [/HIGHLIGHT-OK]
5. [HIGHLIGHT-OK] Acute posthemorrhagic anemia — Hgb 9.8, blood loss from
   fracture, transfusion threshold monitoring [/HIGHLIGHT-OK]
6. Hyponatremia (Na 127) — cautious sodium correction, nephrology aware
7. Hypertension — continue home medications
```

> [OK]
> Alzheimer's dementia is now in the Assessment & Plan as an active condition with clinical relevance to the admission. It will be coded as G30.9 — an MCC.

> [OK]
> Metabolic encephalopathy is named and causally linked to the hyponatremia. The deviation from baseline is explicitly established. This codes to G93.41 — an MCC.

> [OK]
> Severe protein-calorie malnutrition is named with supporting criteria — albumin value, physical exam findings, and ASPEN criteria reference. This codes to E43 — an MCC.

> [OK]
> Acute posthemorrhagic anemia is named and causally linked to the fracture and blood loss. This codes to D62 — a CC. With MCCs already present, this contributes to APR-DRG SOI.

> [NOTE]
> This case moved from DRG 482 to DRG 480 on the strength of documentation changes only. The clinical picture was identical. The difference was naming active conditions rather than listing historical ones.

---

<!-- ============================================================
  SECTION: CCList
  Component hint: <CCReferenceTable>
  ============================================================ -->

## Common CCs — Every Tier Matters Here

Unlike LEJR, CCs in SHFFT directly change payment — from DRG 482 to DRG 481 (~$5,000 difference). Document these with specificity. If no MCC is present, a single well-documented CC moves the case to the middle tier.

| Condition | ICD-10 | What to Specify |
|-----------|--------|-----------------|
| Acute posthemorrhagic anemia | D62 | Link to blood loss — "anemia" alone (D64.9) is not a CC |
| Type 2 diabetes with hyperglycemia | E11.65 | Specify type and complication |
| Unspecified protein-calorie malnutrition | E46 | CC tier; document "severe" + criteria for E43 (MCC) |
| Hyponatremia | E87.1 | Name it — "low sodium" is a lab value |
| Chronic kidney disease, stage 3 | N18.3 | Stage must be documented — N18.9 is not a CC |
| Chronic kidney disease, stage 4 | N18.4 | Stage 4 is CC; stage 5 is MCC |
| Longstanding persistent atrial fibrillation | I48.11 | Type required — unspecified Afib (I48.91) is not a CC |
| New-onset atrial fibrillation | I48.0 | Common post-hip fracture; document onset timing |
| COPD with acute exacerbation | J44.1 | "Exacerbation" is the required word — J44.9 is not a CC |
| Peripheral vascular disease | I73.9 | Document if clinically active during admission |
| Osteoporosis (age-related) | M81.0 | Background context; not a CC but relevant for quality |
| Delirium | F05 | CC only — metabolic encephalopathy (G93.41) is an MCC |

> [NOTE]
> **The CC-to-MCC escalation path:** Several conditions on this list have an MCC-level counterpart. Unspecified malnutrition (E46, CC) → severe malnutrition (E43, MCC). Delirium (F05, CC) → metabolic encephalopathy (G93.41, MCC). CKD stage 4 (N18.4, CC) → CKD stage 5 (N18.5, MCC). When the clinical picture supports the higher tier, document it.

---

<!-- ============================================================
  SECTION: HCCList
  Component hint: <HCCCardList>
  ============================================================ -->

## Key HCCs for SHFFT Patients

HCC documentation in SHFFT has an outsized impact on TEAM risk adjustment because this population carries such a high baseline comorbidity burden. Underdocumented HCCs produce a target price that doesn't reflect the actual patient — leaving the hospital financially exposed before the first incision.

| HCC | Condition | Documentation Tip |
|-----|-----------|-------------------|
| HCC 36 | Diabetes with severe acute complications | Document DKA, hyperosmolar state, or severe hypoglycemia explicitly |
| HCC 37 | Diabetes with chronic complications | Name the complication — neuropathy, nephropathy, retinopathy |
| HCC 48 | Morbid obesity | Provider note must say "morbid obesity" — BMI code alone insufficient |
| HCC 125 | Dementia, severe | Severity staging required — specify mild, moderate, or severe |
| HCC 126 | Dementia, moderate | Differentiate from mild cognitive impairment |
| HCC 127 | Dementia, mild or unspecified | Even mild dementia is an HCC — document it |
| HCC 180 | Quadriplegia | Active neurological condition — not history |
| HCC 181 | Paraplegia | Active neurological condition — not history |
| HCC 199 | Parkinson's and other basal ganglia disorders | Document active disease — gait disturbance, fall risk link |
| HCC 226 | Heart failure, except end-stage and acute | Specify systolic vs. diastolic, chronic status |
| HCC 267 | Deep vein thrombosis and pulmonary embolism | Document when present; prophylaxis ≠ diagnosis |
| HCC 383 | Chronic ulcer of skin | Stage and anatomic site required |

> [NOTE]
> **Dementia staging matters:** HCC 125 (severe), 126 (moderate), and 127 (mild/unspecified) are separate HCCs with different risk weights. The severity tier should match the documented clinical picture. "Dementia" alone maps to HCC 127. If the patient requires full assistance with ADLs and cannot follow commands, "moderate" or "severe" is more accurate and captures the appropriate HCC.

---

<!-- ============================================================
  SECTION: DischargeChecklist
  Component hint: <DischargeChecklist>
  ============================================================ -->

## Before You Sign the Discharge Summary

SHFFT patients are complex. This checklist targets the most commonly missed documentation gaps in this population. Each item should take under 60 seconds to review.

**1. Dementia**  
Is this patient a nursing home resident or does family confirm pre-existing cognitive impairment? **Document dementia as an active diagnosis with a severity level.** "History of dementia" in the PMH alone will not be coded. It must appear in your Assessment as a condition affecting the current admission.

**2. Mental status changes**  
Was there any new-onset confusion during the admission — beyond the patient's documented baseline? Was there a concurrent metabolic abnormality? **Document metabolic encephalopathy with the causative condition.** "Delirium" is a CC; metabolic encephalopathy with a named cause is an MCC.

**3. Nutrition**  
Review the dietitian's note. Was malnutrition documented? **Acknowledge the dietitian's findings and name the severity.** "Malnutrition" or "unspecified malnutrition" is a CC. "Severe protein-calorie malnutrition" meeting ASPEN criteria is an MCC. The word "severe" and supporting criteria are required for the higher tier.

**4. Anemia**  
Did hemoglobin drop from the admission value? Was a transfusion given? **Name it as acute posthemorrhagic anemia and link it to the blood loss.** "Anemia" (D64.9) is not a CC. "Acute posthemorrhagic anemia" (D62) is a CC.

**5. Sodium**  
Was sodium below 135 at any point? Was IV fluid composition adjusted? Was nephrology or neurology involved? **Write the word hyponatremia in your note.** "Low sodium" and "electrolyte abnormality" are not diagnoses.

**6. Kidney function**  
Did creatinine rise above the admission baseline? **Name it as acute kidney injury.** If the patient has known CKD, document the stage — stage 5 is an MCC.

**7. Falls and functional status**  
Was the fall related to a neurological condition — Parkinson's, prior stroke with residual deficits, dementia? **Document the causally relevant underlying condition explicitly.** "Prior stroke" in the PMH is not the same as "residual hemiparesis from prior CVA" — the latter is an MCC; the former is not.

---

<!-- ============================================================
  SECTION: QueryTemplates
  Component hint: <QueryTemplateList>
  ============================================================ -->

## CDI Query Prompts — SHFFT

> [NOTE]
> These prompts are written as physician-facing language — what a CDI specialist or a colleague might ask to surface conditions that are clinically present but underdocumented. They are not intended to generate diagnoses that are not clinically supported.

**Dementia query:**  
*"The patient is a nursing home resident and family confirms she has had significant memory and functional decline over the past two years. Her nursing home records reference dementia. Can you document dementia as an active diagnosis and specify the severity — mild, moderate, or severe?"*

**Encephalopathy query:**  
*"The patient had new-onset confusion during the admission that family and nursing home staff confirm exceeds her cognitive baseline. Concurrent sodium was [value]. Does this represent metabolic encephalopathy secondary to hyponatremia, or another metabolic cause?"*

**Malnutrition query:**  
*"The nutrition team has documented malnutrition based on albumin [value], weight loss of [amount] per nursing home records, and [physical exam finding]. Can you document the diagnosis of malnutrition in your note and specify whether this meets criteria for severe protein-calorie malnutrition?"*

**AKI query:**  
*"Creatinine on admission was [value], up from a prior baseline of [value]. This improved with IV hydration. Does this represent acute kidney injury in the setting of dehydration from time on the floor?"*

**Anemia query:**  
*"Hemoglobin has dropped from [admission value] to [current value] in the postoperative period and [number] units of pRBCs were transfused. Does this represent acute posthemorrhagic anemia secondary to surgical blood loss?"*

---

<!-- ============================================================
  SECTION: PageFooter
  Component hint: <ModuleFooter>
  ============================================================ -->

---

*Source: CMS FY2025/FY2026 IPPS Final Rule · MS-DRG V43.0 · ICD-10-CM FY2025*  
*DRG payment figures are national average approximations and vary by hospital wage index and geographic adjustment.*  
*CC/MCC designations change annually with each CMS IPPS Final Rule. Verify against the active MS-DRG Definitions Manual for the applicable fiscal year.*  
*Last updated: June 2026*
