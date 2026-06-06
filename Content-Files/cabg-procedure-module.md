---
title: Coronary Artery Bypass Graft (CABG)
procedure: cabg
drg-family: [231, 232, 233, 234, 235, 236]
tier-structure: 2-tier
team-procedures: [LEJR, SHFFT, Spinal Fusion, CABG, Major Bowel]
route: /procedures/cabg
last-updated: 2026-06
source: CMS FY2025/FY2026 IPPS Final Rule, MS-DRG V43.0
---

<!-- ============================================================
  SECTION: PageHero
  Component hint: <PageHero>
  ============================================================ -->

# Coronary Artery Bypass Graft (CABG)

**Category:** TEAM Surgical Episode · MS-DRG 231–236

CABG carries the highest absolute reimbursement and the highest average Severity of Illness of all five TEAM procedures. Patients presenting for bypass surgery are among the most medically complex in the hospital — and the documentation of that complexity is where most of the financial exposure lives. Post-pump physiology alone generates a predictable wave of MCCs that are present in nearly every case and documented accurately in far fewer.

---

<!-- ============================================================
  SECTION: TwoTierCallout
  Component hint: <AlertBanner variant="critical">
  ============================================================ -->

> [PEARL]
> **CABG is a 2-tier DRG across all six families. Only an MCC changes the payment.**
>
> Like LEJR, there is no middle tier. A CC — regardless of how precisely it is documented — does not move a CABG case to a higher-paying DRG. Only an MCC does that. The payment delta between the base tier and the MCC tier ranges from approximately **$12,000 to $17,500** depending on which DRG family applies.
>
> CCs still matter for APR-DRG Severity of Illness and Risk of Mortality, which affect CMS star ratings, commercial payer contracts, and the TEAM risk-adjusted quality benchmark. But for payment, the question on every CABG case is the same: is there an MCC present and is it documented?

---

<!-- ============================================================
  SECTION: DRGOverview
  Component hint: <DRGTierTable>
  ============================================================ -->

## DRG Families and Tiers at a Glance

CABG DRG assignment is determined by whether a concomitant cardiac catheterization or PTCA was performed — not by the number of vessels bypassed.

| MS-DRG | Description | Severity | Approx. Payment |
|--------|-------------|----------|-----------------|
| **231** | Coronary bypass with PTCA | **With MCC** | ~$60,000+ |
| **232** | Coronary bypass with PTCA | **Without MCC** | ~$43,000 |
| **233** | Coronary bypass with cardiac catheterization | **With MCC** | ~$55,500 |
| **234** | Coronary bypass with cardiac catheterization | **Without MCC** | ~$38,000 |
| **235** | Coronary bypass without cardiac catheterization | **With MCC** | ~$41,000 |
| **236** | Coronary bypass without cardiac catheterization | **Without MCC** | ~$29,000 |

> [NOTE]
> Payment figures are national average approximations using CMS FY2025 IPPS base rates. Actual reimbursement varies by hospital wage index, DSH status, and teaching adjustment. The vessel count — 2-vessel, 3-vessel, 4-vessel — does not affect DRG assignment. Only the presence of concomitant catheterization or PTCA determines the DRG family.

> [NOTE]
> **The concomitant procedure determines the family, not the complexity.** A 4-vessel CABG without cath lands in DRG 235/236. A single-vessel CABG with cath lands in DRG 233/234. Surgeons sometimes assume more vessels means higher payment — it does not. Comorbidity documentation determines the tier within whatever family the procedure places the case.

---

<!-- ============================================================
  SECTION: TopMCCs
  Component hint: <MCCCardList>
  ============================================================ -->

## Top MCCs to Document — CABG

The following MCCs are either unique to the CABG population, disproportionately common after cardiopulmonary bypass, or systematically underdocumented in cardiac surgical practices. Each one, when named, moves the case to the with-MCC tier.

---

### 1. Acute Systolic Heart Failure

**ICD-10:** I50.21 — Acute systolic heart failure (MCC) · I50.23 — Acute-on-chronic systolic heart failure (MCC)

Perioperative cardiac dysfunction is common after bypass — the heart is arrested, subjected to ischemia-reperfusion injury, and asked to resume normal function in a fluid-shifted, physiologically stressed environment. When the clinical picture shows reduced function — elevated BNP, pulmonary edema, diuresis required, echo showing reduced EF — this is an MCC when named correctly.

**Clinical trigger:** BNP elevation above 500. Bilateral crackles. Pulmonary edema on chest X-ray. IV diuresis initiated. Echocardiogram showing reduced ejection fraction or new wall motion abnormality postoperatively.

**What physicians write instead:** "CHF" / "heart failure" / "volume overload" / "pump failure" / "low cardiac output"

**Why it's missed:** "CHF" (I50.9) is a CC. "Pump failure" is not a codeable diagnosis. Specifying *systolic vs. diastolic* and *acute vs. chronic* is required to reach MCC status. Both elements must appear in the attending's documentation — the echocardiogram report alone is not sufficient.

> [PHRASING]
> ❌ "CHF exacerbation, on IV Lasix, will transition to oral"  
> ✅ "Acute systolic heart failure — EF 30% on postoperative echo, BNP 2,400, required IV furosemide with 3L net negative, now transitioning to oral diuretics"

---

### 2. Acute Kidney Injury

**ICD-10:** N17.9 (MCC) · N17.0 with tubular necrosis (MCC)

Post-CABG AKI is one of the most common complications of cardiopulmonary bypass — the pump itself, contrast from pre-surgical catheterization, perioperative hemodynamic instability, and vasoconstrictor use all contribute. It is also one of the most consistently underdocumented MCCs in cardiac surgery.

**Clinical trigger:** Creatinine rise ≥ 0.3 mg/dL above preoperative baseline, or ≥ 1.5× baseline within 7 days. Decreased urine output. IV fluid resuscitation. Nephrology consulted. Renal replacement therapy initiated.

**What physicians write instead:** "Creatinine bumped postoperatively" / "renal insufficiency" / "contrast nephropathy" / "pump-related renal dysfunction"

**Why it's missed:** Cardiac surgeons track creatinine vigilantly but rarely translate the trend into a named diagnosis. "Contrast nephropathy" and "pump-related renal dysfunction" are mechanistic descriptions — not codeable diagnoses. The physician must write "acute kidney injury" to capture N17.9. When tubular necrosis is documented, N17.0 adds further specificity.

> [PHRASING]
> ❌ "Creatinine up to 2.4 postoperatively, likely contrast and pump-related, improving"  
> ✅ "Acute kidney injury — creatinine rose from baseline 1.0 to peak 2.4 in setting of cardiopulmonary bypass and prior contrast exposure, improving with IV hydration and diuresis"

---

### 3. Perioperative Myocardial Infarction

**ICD-10:** I21.9 — Acute myocardial infarction, unspecified (MCC) · I21.4 — Non-ST elevation MI (NSTEMI) (MCC)

A perioperative MI following CABG is a serious complication and an unambiguous MCC — but it requires explicit physician documentation. Troponin elevation in the immediate post-bypass period is common and expected; the clinical threshold for documenting perioperative MI requires physician judgment and explicit naming.

**Clinical trigger:** New ST changes on postoperative EKG. Troponin elevation disproportionate to expected post-bypass level. New wall motion abnormality on postoperative echo. Cardiology consulted for suspected perioperative ischemia. Return to OR for graft failure.

**What physicians write instead:** "Troponin elevated postoperatively, expected post-bypass" / "EKG changes, monitoring" / "demand ischemia"

**Why it's missed:** Post-bypass troponin elevation has a broad expected range, and physicians are appropriately cautious about diagnosing MI when elevation may reflect procedural injury rather than true ischemia. But when the clinical picture crosses the threshold — new EKG changes, new wall motion abnormality, disproportionate troponin elevation, or clinical concern documented by cardiology — the physician's explicit naming of the diagnosis is what captures the MCC. "Demand ischemia" does not code as MI.

> [PHRASING]
> ❌ "Troponin elevated postoperatively, expected post-bypass changes, monitoring"  
> ✅ "Perioperative non-ST elevation myocardial infarction — troponin peak 18.4 with new lateral ST changes on POD 1 EKG, new inferior wall motion abnormality on echo, cardiology co-managing"

---

### 4. Acute Respiratory Failure

**ICD-10:** J96.01 — Acute hypoxic respiratory failure (MCC) · J96.00 — Acute respiratory failure, unspecified (MCC)

Respiratory complications after CABG are common — pulmonary edema from cardiac dysfunction, atelectasis from single-lung ventilation, pleural effusions from the operative field, and prolonged ventilator weaning all contribute. When the patient requires active respiratory support beyond routine postoperative mechanical ventilation, acute respiratory failure should be named.

**Clinical trigger:** O₂ saturation below 90% on room air beyond the expected immediate postoperative period. Ventilator weaning failure. Reintubation. Supplemental oxygen required at a level beyond the patient's preoperative baseline. Non-invasive ventilation initiated. Pulmonology consulted.

**What physicians write instead:** "Hypoxia" / "difficulty weaning from vent" / "prolonged mechanical ventilation" / "respiratory distress"

**Why it's missed:** Cardiac surgeons treat prolonged ventilation as a clinical management issue without assigning a diagnosis. "Difficulty weaning" describes a clinical status — not a condition. When the oxygen requirement reflects genuine physiologic failure to maintain adequate ventilation or oxygenation independently, acute respiratory failure is the appropriate diagnosis.

> [PHRASING]
> ❌ "Patient having difficulty weaning from the ventilator, respiratory therapy involved"  
> ✅ "Acute hypoxic respiratory failure — unable to wean from mechanical ventilation on POD 1, O₂ saturation 84% on 50% FiO₂ without vent support, likely multifactorial from pulmonary edema and pleural effusions"

---

### 5. Metabolic Encephalopathy

**ICD-10:** G93.41 (MCC)

Post-pump cognitive dysfunction and delirium are well-recognized complications of cardiopulmonary bypass. When confusion arises in the context of a metabolic abnormality — hyponatremia, hyperglycemia, uremia, hypoxia, or medication effect from the post-operative pharmacologic load — metabolic encephalopathy is the correct diagnosis, and it is an MCC.

**Clinical trigger:** New-onset confusion, agitation, or disorientation not at baseline. CAM-positive assessment. Concurrent metabolic abnormality on labs. Confusion persisting beyond the immediate postoperative period in the ICU.

**What physicians write instead:** "Post-pump delirium" / "ICU psychosis" / "confusion" / "altered mental status" / "delirium"

**Why it's missed:** "Post-pump delirium" and "ICU psychosis" are colloquial terms that generate no codeable diagnosis. "Delirium" (F05) is a CC, not an MCC. When there is a documentable metabolic cause — and in the post-CABG patient there almost always is — metabolic encephalopathy with a named cause is the appropriate and more specific diagnosis.

> [PHRASING]
> ❌ "Post-pump delirium, improving — patient confused in ICU on POD 1"  
> ✅ "Metabolic encephalopathy secondary to hyponatremia (Na 129) and uremia — patient agitated and disoriented on POD 2, not at baseline per family, CAM-positive, improving with metabolic correction"

---

### 6. Dilated Cardiomyopathy

**ICD-10:** I42.0 (MCC)

When a CABG patient has underlying dilated cardiomyopathy — reduced EF, enlarged ventricular dimensions, global hypokinesis not explained by coronary disease alone — documenting this as an active diagnosis carries MCC weight that "heart failure" or "CAD" alone does not. It is frequently present in the record as an incidental finding on the preoperative echo and never transferred to the physician's Assessment.

**Clinical trigger:** Preoperative echocardiogram showing dilated ventricle with reduced EF and global dysfunction. Cardiology note referencing cardiomyopathy. Patient on guideline-directed medical therapy for cardiomyopathy preoperatively (ACE inhibitor, beta-blocker, aldosterone antagonist).

**What physicians write instead:** "Heart failure" / "reduced EF" / "cardiomyopathy" without specifying type / nothing

**Why it's missed:** The echocardiogram report uses the correct terminology. The surgeon's note does not. "Cardiomyopathy" without a type specifier (I42.9) is not an MCC. "Dilated cardiomyopathy" (I42.0) specifically is an MCC. The distinction is one word.

> [PHRASING]
> ❌ "History of cardiomyopathy, EF 25% on preop echo"  
> ✅ "Dilated cardiomyopathy — EF 25% on preoperative echo with global hypokinesis, on maximally tolerated GDMT preoperatively"

---

### 7. Pulmonary Hypertension

**ICD-10:** I27.20 — Pulmonary hypertension, unspecified (MCC)

Pulmonary hypertension is an MCC when documented as a secondary diagnosis in CABG patients. It is present on the preoperative right heart catheterization data in a meaningful proportion of patients with advanced coronary disease and reduced ventricular function, and it is routinely left undocumented in the surgeon's Assessment.

**Clinical trigger:** Right heart catheterization showing mean pulmonary artery pressure > 25 mmHg. Pulmonary hypertension referenced in cardiology or anesthesia notes. Patient on pulmonary vasodilator therapy preoperatively.

**What physicians write instead:** "Elevated pulmonary pressures" / "pulmonary HTN noted on cath" / nothing

**Why it's missed:** Elevated pulmonary pressures appear in the catheterization report, are acknowledged by cardiology and anesthesia, and are then absent from the surgeon's discharge summary entirely. The diagnosis must appear in the attending's documentation — not only in consultant notes — to be coded.

> [PHRASING]
> ❌ "Pulmonary pressures mildly elevated on preop cath per cardiology"  
> ✅ "Pulmonary hypertension — mean PAP 38 mmHg on preoperative right heart catheterization, managed perioperatively by cardiology"

---

### 8. Severe Protein-Calorie Malnutrition / Cardiac Cachexia

**ICD-10:** E43 (MCC) · E41 nutritional marasmus (MCC)

Cardiac cachexia — the syndrome of weight loss, muscle wasting, and nutritional depletion seen in advanced heart failure and severe CAD — is an underrecognized MCC in the CABG population. Patients presenting for bypass with advanced disease often have significant nutritional compromise that goes unaddressed because the clinical focus is entirely on revascularization.

**Clinical trigger:** Albumin < 2.0. Documented weight loss. Muscle wasting on physical exam. Dietitian consult. TPN or nutritional supplementation initiated. BMI below 18.5. History of cardiac cachexia referenced in cardiology notes.

**What physicians write instead:** "Cachectic appearing" / "low albumin" / "poor nutrition" / nothing

**Why it's missed:** Identical barrier as the other procedures — the dietitian does the assessment and the surgeon doesn't transfer it into their note. In the CABG population specifically, the frailty and nutritional depletion are often attributed to the underlying cardiac disease and treated as background rather than as a separately documentable condition.

> [PHRASING]
> ❌ "Patient appears cachectic, albumin 1.7 preoperatively"  
> ✅ "Severe protein-calorie malnutrition — albumin 1.7, 18-lb weight loss over prior 4 months per cardiology records, temporal wasting on exam, meeting ASPEN criteria per nutrition assessment"

---

<!-- ============================================================
  SECTION: BeforeAfterNote
  Component hint: <NoteComparison>
  ============================================================ -->

## Before & After: The Post-CABG Note That Left $13,000 on the Table

**The patient:** 68-year-old male admitted for CABG ×3 without cardiac catheterization (DRG 235/236 family). History of triple-vessel CAD, hypertension, hyperlipidemia, and type 2 diabetes. Preoperative echo shows EF 30% with global hypokinesis. Preoperative albumin is 1.8. POD 1: creatinine rises from 1.1 to 2.6. POD 2: patient is found confused and disoriented; sodium is 127. BNP on POD 3 is 2,100; patient requires IV Lasix with 2.5L net negative.

---

### As Written — DRG 236 (~$29,000)

```
DISCHARGE DIAGNOSES:
1. Status post CABG ×3
2. Coronary artery disease, triple vessel
3. Hypertension
4. Hyperlipidemia
5. Type 2 diabetes mellitus
6. [HIGHLIGHT-MISS] Creatinine elevated postoperatively, improving [/HIGHLIGHT-MISS]
7. [HIGHLIGHT-MISS] Cardiomyopathy [/HIGHLIGHT-MISS]

HOSPITAL COURSE:
Patient underwent uncomplicated CABG ×3. Transferred to
cardiac surgery ICU in stable condition.

POD 1: [HIGHLIGHT-MISS] Creatinine up to 2.6, likely pump-related,
improving with hydration. [/HIGHLIGHT-MISS]

POD 2: [HIGHLIGHT-MISS] Patient confused overnight, post-pump delirium,
improving. [/HIGHLIGHT-MISS] Sodium 127 noted.

POD 3: [HIGHLIGHT-MISS] BNP elevated, on IV Lasix, good response. [/HIGHLIGHT-MISS]
Patient diuresed 2.5L net negative.

Patient cleared for step-down and discharge to home with
cardiology follow-up.
```

> [MISS]
> "Creatinine elevated postoperatively, improving" is a lab trend — not a diagnosis. N17.9 cannot be assigned. No MCC. DRG stays at 236.

> [MISS]
> "Cardiomyopathy" without a type specifier codes to I42.9 — unspecified cardiomyopathy — which is not an MCC. "Dilated cardiomyopathy" (I42.0) is an MCC. One word of specificity separates a CC from an MCC here.

> [MISS]
> "Post-pump delirium" is a colloquial label with no codeable diagnosis. "Delirium" (F05) would be a CC. But with a concurrent sodium of 127 and confusion not at baseline, this is metabolic encephalopathy — an MCC — and the metabolic cause is documented right there in the note.

> [MISS]
> "BNP elevated, on IV Lasix, good response" documents a treatment response without naming a diagnosis. BNP elevation plus IV diuresis plus documented low EF is acute systolic heart failure — but only if the physician writes those words.

---

### Revised — DRG 235 (~$41,000) · ▲ ~$12,000–$13,000

```
DISCHARGE DIAGNOSES:
1. Status post CABG ×3
2. Coronary artery disease, triple vessel
3. [HIGHLIGHT-OK] Acute kidney injury, resolving [/HIGHLIGHT-OK]
4. [HIGHLIGHT-OK] Dilated cardiomyopathy [/HIGHLIGHT-OK]
5. [HIGHLIGHT-OK] Acute systolic heart failure [/HIGHLIGHT-OK]
6. [HIGHLIGHT-OK] Metabolic encephalopathy secondary to hyponatremia [/HIGHLIGHT-OK]
7. [HIGHLIGHT-OK] Hyponatremia (Na 127) [/HIGHLIGHT-OK]
8. [HIGHLIGHT-OK] Severe protein-calorie malnutrition [/HIGHLIGHT-OK]
9. Hypertension
10. Hyperlipidemia
11. Type 2 diabetes mellitus, with hyperglycemia

HOSPITAL COURSE:
Patient underwent uncomplicated CABG ×3. Transferred to
cardiac surgery ICU in stable condition.

POD 1: Patient developed [HIGHLIGHT-OK] acute kidney injury [/HIGHLIGHT-OK] — creatinine
rose from baseline 1.1 to peak 2.6 in setting of cardiopulmonary
bypass. Treated with IV hydration; improving to 1.5 by discharge.

POD 2: Patient noted to be confused and disoriented, not at
baseline per family. [HIGHLIGHT-OK] Metabolic encephalopathy secondary to
hyponatremia (Na 127) [/HIGHLIGHT-OK] — CAM-positive, resolving with
careful sodium correction.

POD 3: [HIGHLIGHT-OK] Acute systolic heart failure [/HIGHLIGHT-OK] — BNP 2,100,
bilateral crackles, consistent with perioperative pump dysfunction.
EF 30% on preoperative echo. IV furosemide with 2.5L net negative
response. Transitioning to oral diuretics at discharge.

[HIGHLIGHT-OK] Dilated cardiomyopathy [/HIGHLIGHT-OK] — EF 25-30% on preoperative
echocardiogram with global hypokinesis, on guideline-directed
medical therapy preoperatively.

[HIGHLIGHT-OK] Severe protein-calorie malnutrition [/HIGHLIGHT-OK] — albumin 1.8
preoperatively, temporal wasting on exam, meeting ASPEN criteria
per nutrition assessment.
```

> [OK]
> Acute kidney injury named with baseline, peak, mechanism, and clinical response. Codes to N17.9 — MCC. DRG moves to 235.

> [OK]
> Dilated cardiomyopathy named explicitly with supporting echo data. Codes to I42.0 — MCC. Redundant MCC, but drives APR-DRG SOI to subclass 4.

> [OK]
> Acute systolic heart failure named with BNP, clinical findings, EF reference, and treatment response. Codes to I50.21 — MCC.

> [OK]
> Metabolic encephalopathy named with causative condition (hyponatremia) and deviation from baseline established. Codes to G93.41 — MCC.

> [OK]
> Severe protein-calorie malnutrition named with albumin value, physical exam findings, and ASPEN criteria reference. Codes to E43 — MCC.

> [NOTE]
> This case had four simultaneous documentation gaps, each correctible without altering any clinical facts. The DRG payment shift alone was approximately $12,000–$13,000. The APR-DRG SOI moved from subclass 1 to subclass 4 — which has downstream effects on TEAM quality benchmarking, commercial payer contracts, and CMS star ratings.

---

<!-- ============================================================
  SECTION: AfibTeachingPoint
  Component hint: <CalloutBox variant="teaching"> — standalone
  teaching section for the most common CABG documentation trap.
  Deserves its own visual treatment separate from the MCC list.
  ============================================================ -->

## The Atrial Fibrillation Teaching Point

New-onset atrial fibrillation after CABG is the most common postoperative arrhythmia in cardiac surgery — it occurs in 20–40% of cases. It is also one of the most reliably underdocumented diagnoses in this population.

> [PEARL]
> **Post-operative atrial fibrillation in a 2-tier DRG is a CC, not an MCC. It will not change the DRG payment. Document it anyway — and document it correctly.**

Here is why this matters:

**Unspecified atrial fibrillation (I48.91) is not a CC.** Documenting "atrial fibrillation" without a type specifier yields a code that carries no CC or MCC weight at all. This is the single most common documentation failure in CABG patients.

**Paroxysmal atrial fibrillation (I48.0) is a CC.** If the arrhythmia terminated spontaneously or was cardioverted and did not recur, paroxysmal is the appropriate type.

**Persistent atrial fibrillation (I48.11, I48.19) is a CC.** If the arrhythmia persisted beyond 7 days or was present at discharge, persistent is the appropriate type.

The CC does not move this 2-tier DRG. But it does:

- Improve APR-DRG SOI, which affects commercial payer contracts
- Accurately reflect the patient's arrhythmia burden for quality reporting
- Contribute to TEAM risk adjustment

> [PHRASING]
> ❌ "Atrial fibrillation postoperatively, rate controlled with amiodarone"  
> ✅ "New-onset paroxysmal atrial fibrillation — developed POD 2, rate controlled with IV amiodarone, spontaneously converted to sinus rhythm POD 4, on anticoagulation per cardiology"

---

<!-- ============================================================
  SECTION: CCList
  Component hint: <CCReferenceTable>
  ============================================================ -->

## Common CCs — Document for SOI/ROM and Risk Adjustment

In CABG, CCs do not change the DRG payment tier. They affect APR-DRG SOI and ROM, commercial payer contracts, TEAM risk-adjusted benchmarks, and CMS quality metrics. Document them with the same specificity standards as MCCs.

| Condition | ICD-10 | What to Specify |
|-----------|--------|-----------------|
| Paroxysmal atrial fibrillation | I48.0 | New-onset post-op afib that terminated — specify type |
| Persistent atrial fibrillation | I48.11 | Afib present > 7 days or at discharge — specify type |
| Type 2 diabetes with hyperglycemia | E11.65 | Tight glycemic control post-CABG is a quality measure |
| Type 2 diabetes with hypoglycemia | E11.649 | Specify episode and consciousness level |
| Chronic kidney disease, stage 3 | N18.3 | Stage required — N18.9 is not a CC |
| Chronic kidney disease, stage 4 | N18.4 | Stage 4 is CC; stage 5 is MCC |
| Acute posthemorrhagic anemia | D62 | Document when transfusion given for blood loss |
| Hyponatremia | E87.1 | Name it — "electrolyte abnormality" is not a diagnosis |
| COPD with acute exacerbation | J44.1 | "Exacerbation" required — J44.9 is not a CC |
| Unspecified protein-calorie malnutrition | E46 | CC tier; document "severe" + ASPEN criteria for E43 (MCC) |
| Peripheral vascular disease | I73.9 | Document if clinically active |
| Atherosclerotic heart disease | I25.10 | Specificity of coronary disease documentation |
| Delirium | F05 | CC — metabolic encephalopathy (G93.41) is the MCC upgrade |

> [NOTE]
> **CKD escalation opportunity:** CKD stage 5 (N18.5) and ESRD (N18.6) are MCCs. In the CABG population with significant coronary disease and often longstanding diabetes or hypertension, advanced CKD is common. If the eGFR is consistently below 15, confirm the stage is explicitly documented by the provider — not just reflected in the lab value.

---

<!-- ============================================================
  SECTION: HCCList
  Component hint: <HCCCardList>
  ============================================================ -->

## Key HCCs for CABG Patients

CABG patients carry the highest average HCC burden of all five TEAM procedures. Documenting active chronic conditions accurately raises the risk-adjusted TEAM target price — without it, the hospital's financial baseline for the episode is set too low before the case even begins.

| HCC | Condition | Documentation Tip |
|-----|-----------|-------------------|
| HCC 37 | Diabetes with chronic complications | Name the complication — neuropathy, nephropathy, retinopathy |
| HCC 48 | Morbid obesity | Provider must document "morbid obesity" — BMI code alone insufficient |
| HCC 125/126/127 | Dementia | Less common here but document when present and affecting management |
| HCC 155 | Major depression, moderate or severe | Active psychiatric diagnosis — document if antidepressants on MAR |
| HCC 199 | Parkinson's and basal ganglia disorders | Active condition — not history |
| HCC 213 | Cardio-respiratory failure and shock | Acute heart failure with shock features — document hemodynamic status |
| HCC 224 | Acute-on-chronic heart failure | Specify type and acuity — I50.23 |
| HCC 226 | Heart failure, except end-stage | Specify systolic vs. diastolic, chronic status |
| HCC 228 | Acute myocardial infarction | Perioperative MI — must be documented explicitly by provider |
| HCC 238 | Specified heart arrhythmias | Afib must be typed — unspecified afib has no HCC credit |
| HCC 249 | Ischemic or unspecified stroke | Active cerebrovascular disease — specify if currently relevant |
| HCC 253 | Hemiplegia/hemiparesis | Active residual deficits — not "history of stroke" |
| HCC 263 | Atherosclerosis with ulceration/gangrene | Peripheral arterial disease with end-organ involvement |
| HCC 280 | COPD and other chronic lung disorders | Specify — "history of COPD" without active management is lower value |
| HCC 298 | Severe diabetic eye disease | Document when ophthalmology has established this diagnosis |
| HCC 326/327 | CKD stage 5 / stage 4 | Stage must be explicitly documented by the provider |

> [NOTE]
> **The "history of MI" problem:** Patients presenting for CABG frequently have prior myocardial infarctions documented in cardiology notes and on prior imaging. "History of MI" maps to Z87.39 — not an HCC. Old MI (I25.2) is an HCC. If prior infarction is present on imaging or in the clinical record, document it as old myocardial infarction rather than as historical only.

---

<!-- ============================================================
  SECTION: DischargeChecklist
  Component hint: <DischargeChecklist>
  ============================================================ -->

## Before You Sign the Discharge Summary

CABG patients generate a predictable set of post-pump complications. This checklist addresses the most common and most frequently missed documentation gaps.

**1. Creatinine**  
Did it rise ≥ 0.3 mg/dL above the preoperative baseline at any point? **Name it as acute kidney injury.** Include baseline, peak, mechanism (bypass, contrast, hemodynamic), and clinical response. "Pump-related" is a mechanism, not a diagnosis.

**2. Heart failure**  
Was there BNP elevation, pulmonary edema, or a requirement for IV diuresis beyond the routine perioperative period? **Specify systolic vs. diastolic and acute vs. chronic.** "CHF" is a CC. "Acute systolic heart failure" is an MCC. The echocardiogram data is already in the chart — use it.

**3. Cardiomyopathy**  
Did the preoperative echo show dilated ventricle with global hypokinesis — not just focal wall motion abnormality from CAD? **Document dilated cardiomyopathy.** "Cardiomyopathy" unspecified (I42.9) is not an MCC. "Dilated cardiomyopathy" (I42.0) is.

**4. Pulmonary hypertension**  
Was mean PAP elevated on right heart catheterization or estimated to be elevated on echo? Is it referenced in cardiology or anesthesia notes? **Name it as pulmonary hypertension in your Assessment.** Consultant documentation alone does not drive coding — the attending must document it.

**5. Mental status**  
Was there any new-onset confusion, agitation, or disorientation not at baseline? Was there a concurrent metabolic abnormality? **Document metabolic encephalopathy with the causative condition.** "Post-pump delirium" and "ICU psychosis" are not codeable. "Delirium" is a CC. Metabolic encephalopathy with a named metabolic cause is an MCC.

**6. Respiratory status**  
Did the patient have difficulty weaning from the ventilator beyond expected postoperative course? Require supplemental oxygen beyond baseline after extubation? **Name it as acute respiratory failure** when the clinical threshold is met — not "difficulty weaning" or "hypoxia."

**7. Atrial fibrillation**  
Did the patient develop postoperative atrial fibrillation? **Specify the type — paroxysmal or persistent.** "Atrial fibrillation" unspecified (I48.91) has no CC or MCC credit. Typed afib is a CC. It will not change this 2-tier DRG payment, but it matters for SOI, quality metrics, and anticoagulation decision documentation.

**8. Nutrition**  
Was preoperative albumin below 2.0? Did the dietitian document malnutrition? Is the patient cachectic on exam? **Name the diagnosis and specify severity.** "Malnutrition" alone is E46 (CC). "Severe protein-calorie malnutrition" meeting ASPEN criteria is E43 (MCC).

---

<!-- ============================================================
  SECTION: QueryTemplates
  Component hint: <QueryTemplateList>
  ============================================================ -->

## CDI Query Prompts — CABG

> [NOTE]
> These prompts surface conditions that are clinically present but underdocumented. They are written in physician-facing language. Documentation should reflect genuine clinical judgment — these are not intended to generate diagnoses that are not clinically supported.

**AKI query:**  
*"Creatinine rose from [baseline] to [peak] in the postoperative period — likely in the setting of cardiopulmonary bypass and prior contrast exposure. Does this represent acute kidney injury?"*

**Acute heart failure query:**  
*"BNP was [value] on POD [X] and the patient required IV furosemide with [volume] net negative. The preoperative echo shows EF [value]. Can you specify whether this heart failure is systolic or diastolic, and whether the presentation was acute, chronic, or acute-on-chronic?"*

**Dilated cardiomyopathy query:**  
*"The preoperative echocardiogram shows a dilated left ventricle with EF [value] and global hypokinesis. Does this represent dilated cardiomyopathy in addition to the ischemic coronary disease?"*

**Perioperative MI query:**  
*"Troponin peaked at [value] with [new EKG changes / new wall motion abnormality on echo] on POD [X]. Cardiology was consulted. Does this represent a perioperative myocardial infarction?"*

**Encephalopathy query:**  
*"The patient had new-onset confusion on POD [X] with concurrent [sodium value / metabolic abnormality]. Family confirms this exceeded baseline. Does this represent metabolic encephalopathy secondary to [causative condition]?"*

**Pulmonary hypertension query:**  
*"Right heart catheterization documented a mean PAP of [value]. This is referenced in the cardiology note. Can you document pulmonary hypertension as an active secondary diagnosis in the discharge summary?"*

**Atrial fibrillation query:**  
*"The patient developed atrial fibrillation on POD [X] requiring [rate control / cardioversion / anticoagulation]. Can you specify the type — paroxysmal if it terminated before discharge, or persistent if it was present at discharge?"*

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
