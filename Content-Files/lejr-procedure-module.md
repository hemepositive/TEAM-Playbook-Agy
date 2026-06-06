---
title: Lower Extremity Joint Replacement (LEJR)
procedure: lejr
drg-family: [469, 470, 521, 522]
tier-structure: 2-tier
team-procedures: [LEJR, SHFFT, Spinal Fusion, CABG, Major Bowel]
route: /procedures/lejr
last-updated: 2026-06
source: CMS FY2025/FY2026 IPPS Final Rule, MS-DRG V43.0
---

<!-- ============================================================
  SECTION: PageHero
  Component hint: <PageHero> — procedure title, category tag, 
  one-line description, DRG family pills
  ============================================================ -->

# Lower Extremity Joint Replacement (LEJR)

**Category:** TEAM Surgical Episode · MS-DRG 469 / 470

Total and partial hip and knee replacements are the highest-volume TEAM procedures. Under the TEAM model, your documentation on every LEJR case directly sets the target price the hospital is measured against — and determines whether the base payment reflects what the patient actually cost to care for.

---

<!-- ============================================================
  SECTION: TwoTierCallout
  Component hint: <AlertBanner variant="critical"> — the single 
  most important structural fact about this DRG family. 
  Render prominently at top of page, not buried in body text.
  ============================================================ -->

> [CALLOUT-CRITICAL]
> **LEJR is a 2-tier DRG. A CC alone does not change the payment.**
>
> Unlike hip fracture or spinal fusion cases, LEJR has no middle tier. Every secondary diagnosis is either an MCC — which moves the case from DRG 470 to DRG 469 — or it has zero effect on reimbursement. Documenting a CC with precision still matters for SOI/ROM and commercial payer contracts, but it will not change what Medicare pays for this encounter.
>
> **The practical implication:** Every CDI query on an LEJR case should be evaluated for MCC potential first. If the condition is a CC only, document it for quality — not for payment.

---

<!-- ============================================================
  SECTION: DRGOverview
  Component hint: <DRGTierTable> — two-column payment comparison
  with RW and approximate payment. Pull from FY2025 final rule.
  ============================================================ -->

## DRG Tiers at a Glance

| MS-DRG | Description | Severity | Approx. Payment |
|--------|-------------|----------|-----------------|
| **469** | Major hip/knee joint replacement or reattachment of lower extremity | **With MCC** | ~$23,500 |
| **470** | Major hip/knee joint replacement or reattachment of lower extremity | **Without MCC** | ~$14,500 |
| **521** | Hip replacement with principal diagnosis of hip fracture | **With MCC** | ~$22,000 |
| **522** | Hip replacement with principal diagnosis of hip fracture | **Without MCC** | ~$14,500 |

> [CALLOUT-INFO]
> Payment figures are national average approximations using CMS FY2025 IPPS base rates. Actual reimbursement varies by hospital wage index, DSH status, and teaching adjustment. The delta between DRG 470 and DRG 469 is approximately **$9,000 per case** at a mid-size community hospital.

---

<!-- ============================================================
  SECTION: TopMCCs
  Component hint: <MCCCardList> — ranked list of MCC conditions.
  Each card: condition name, ICD-10, clinical trigger, why-missed.
  Order: highest miss rate + highest yield first.
  ============================================================ -->

## Top MCCs to Document — LEJR

These are the conditions most commonly present in LEJR patients and most frequently underdocumented. Each one, when properly named, moves the case from DRG 470 to DRG 469.

---

### 1. Acute Kidney Injury (AKI)

**ICD-10:** N17.9 (MCC) · N17.0 with tubular necrosis (MCC)

Postoperative AKI is extremely common after joint replacement — perioperative fluid shifts, NSAID use, and contrast exposure all contribute. It is also the single most frequently missed MCC in this population.

**Clinical trigger:** Creatinine rise ≥ 0.3 mg/dL above preoperative baseline, or ≥ 1.5× baseline within 7 days. Decreased urine output. Nephrology consult placed.

**What physicians write instead:** "Elevated creatinine, improving" / "renal insufficiency" / "creatinine trending up"

**Why it's missed:** Labs document the number. Physicians document the trend. Neither is a diagnosis. The coder needs the physician to write "acute kidney injury" — those three words are the entire unlock.

> [CALLOUT-PHRASING]
> ❌ "Creatinine was elevated postoperatively, now improving"  
> ✅ "Acute kidney injury, likely prerenal, resolving with IV hydration"

---

### 2. Acute Systolic Heart Failure

**ICD-10:** I50.21 — Acute systolic heart failure (MCC) · I50.23 — Acute-on-chronic systolic heart failure (MCC)

Older joint replacement patients often carry a baseline of cardiac dysfunction. An acute decompensation perioperatively — elevated BNP, pulmonary edema, diuresis ordered — is a genuine MCC when properly named.

**Clinical trigger:** BNP > 500, bilateral crackles, pulmonary edema on chest X-ray, IV diuresis initiated, echocardiogram showing reduced ejection fraction.

**What physicians write instead:** "CHF" / "heart failure" / "volume overload" / "fluid overloaded"

**Why it's missed:** "CHF" and "heart failure" code to I50.9 — unspecified heart failure — which is a CC, not an MCC. The specificity of *systolic vs. diastolic* and *acute vs. chronic* is what makes the difference. Both pieces are required.

> [CALLOUT-PHRASING]
> ❌ "Congestive heart failure, managed with Lasix"  
> ✅ "Acute systolic heart failure exacerbation, EF 35%, treated with IV furosemide"

---

### 3. Metabolic Encephalopathy

**ICD-10:** G93.41 (MCC)

Post-operative altered mental status is common in elderly joint replacement patients and is almost universally underdocumented. When the confusion has a metabolic cause — hyponatremia, hyperglycemia, uremia, medication effect — the correct diagnosis is metabolic encephalopathy, not delirium.

**Clinical trigger:** CAM-positive assessment. Confusion or disorientation new from baseline. Concurrent metabolic abnormality (low sodium, elevated glucose, rising creatinine, medication effect).

**What physicians write instead:** "Confusion" / "altered mental status" / "sundowning" / "delirium"

**Why it's missed:** There is a direct reimbursement consequence to word choice here. "Delirium" (F05) is a CC. "Metabolic encephalopathy" (G93.41) is an MCC. The clinical distinction is the presence of a documentable metabolic cause — which in most post-surgical confusion cases is exactly what is happening.

> [CALLOUT-PHRASING]
> ❌ "Patient is delirious postoperatively"  
> ✅ "Metabolic encephalopathy secondary to hyponatremia (Na 128) — patient disoriented, CAM-positive, not at baseline per family"

---

### 4. Severe Protein-Calorie Malnutrition

**ICD-10:** E43 (MCC) · E41 nutritional marasmus (MCC)

Malnutrition is common in elderly LEJR patients and is among the most clinically important — and most under-captured — MCCs in this population. The severity level is what determines CC vs. MCC.

**Clinical trigger:** Albumin < 2.0, BMI < 18.5, >10% body weight loss in the preceding months, muscle wasting on exam, TPN or tube feeds ordered, dietitian consult documenting ASPEN criteria for severe malnutrition.

**What physicians write instead:** "Poor appetite" / "weight loss" / "cachectic" / "low albumin" / nothing at all

**Why it's missed:** Two failure modes. First, physicians see low albumin as a lab value, not a diagnosis. Second, severity is underspecified — "malnutrition" alone codes to E46 (unspecified, CC only), while E43 requires the word "severe" and clinical support. The dietitian often does the work; the physician needs to co-sign it in their own note.

> [CALLOUT-PHRASING]
> ❌ "Albumin low, nutrition consult placed"  
> ✅ "Severe protein-calorie malnutrition — patient meets ASPEN criteria per nutrition assessment: albumin 1.8, 12-lb weight loss over 2 months, temporal muscle wasting on exam"

> [CALLOUT-WARNING]
> **Denial risk:** E43 (severe malnutrition) is one of the most audited codes in Medicare inpatient billing. Document the clinical criteria explicitly — albumin value, weight loss percentage, physical exam findings. A label without supporting documentation is a denial waiting to happen.

---

### 5. Obesity Hypoventilation Syndrome (OHS)

**ICD-10:** E66.2 (MCC)

OHS is the most counterintuitive MCC on this list and the one most physicians don't know to look for. Obstructive sleep apnea (OSA) is a CC. Obesity hypoventilation syndrome — which requires daytime hypercapnia — is an MCC. Many patients labeled as OSA actually meet criteria for OHS.

**Clinical trigger:** BMI > 30 + BiPAP use (especially daytime) + ABG showing PaCO₂ > 45 mmHg (hypercapnia). Often identified when the patient is placed back on home BiPAP in the PACU or recovery.

**What physicians write instead:** "Sleep apnea" / "obstructive sleep apnea" / "OSA, on CPAP"

**Why it's missed:** Most physicians document what the patient told them — "I have sleep apnea." The distinction between OSA and OHS requires checking for daytime hypercapnia. If the patient uses BiPAP (not CPAP) and has a history of daytime sleepiness or hypercapnia on any prior ABG, OHS is the more accurate and more defensible diagnosis.

> [CALLOUT-PHRASING]
> ❌ "Obstructive sleep apnea, patient on home CPAP"  
> ✅ "Obesity hypoventilation syndrome — BMI 44, BiPAP-dependent, prior ABG with PaCO₂ 52"

---

### 6. Sepsis

**ICD-10:** A41.9 (MCC) · A41.01 sepsis due to MRSA (MCC) · R65.20 severe sepsis (MCC) · R65.21 with septic shock (MCC)

Post-LEJR sepsis — usually from surgical site infection, UTI, or pneumonia — is an unambiguous MCC when properly named. The barrier is word choice, not clinical complexity.

**Clinical trigger:** Fever or hypothermia + elevated WBC + suspected or confirmed source. Broad-spectrum antibiotics initiated. Blood cultures drawn.

**What physicians write instead:** "Infection" / "SIRS" / "bacteremia" / "septicemia"

**Why it's missed:** "SIRS" does not code to sepsis. "Bacteremia" does not code to sepsis. "Infection" does not code to sepsis. The physician must write the word "sepsis." If the clinical picture meets the threshold, write it explicitly and name the suspected source.

> [CALLOUT-PHRASING]
> ❌ "Patient with SIRS, antibiotics started, blood cultures pending"  
> ✅ "Sepsis, suspected source urinary tract, antibiotics initiated per ID recommendations"

---

<!-- ============================================================
  SECTION: BeforeAfterNote
  Component hint: <NoteComparison> — side-by-side or stacked 
  note display with inline highlights. Use the existing case 
  walkthrough HTML component pattern. Red highlights = missed,
  green highlights = captured.
  ============================================================ -->

## Before & After: The Discharge Note That Cost $9,000

**The patient:** 74-year-old male admitted for elective right total knee arthroplasty. History of hypertension, type 2 diabetes, and CKD stage 3 (baseline creatinine 1.4). Procedure uncomplicated. On POD 2, creatinine rises to 2.3. Nephrology consulted. IV fluids given. Creatinine improves to 1.8 at discharge.

---

### As Written — DRG 470 (~$14,500)

```
DISCHARGE DIAGNOSES:
1. Status post right total knee arthroplasty
2. Hypertension
3. Type 2 diabetes mellitus
4. [HIGHLIGHT-MISS] Elevated creatinine, improving [/HIGHLIGHT-MISS]
5. Chronic kidney disease

HOSPITAL COURSE:
Patient underwent uncomplicated right TKA. Postoperatively he
did well. [HIGHLIGHT-WARN] Creatinine was noted to be elevated on POD 2, [/HIGHLIGHT-WARN]
nephrology was consulted, and patient was managed with IV fluids.
Creatinine trended toward baseline prior to discharge.
```

> [CALLOUT-MISS]
> "Elevated creatinine, improving" is not a billable diagnosis — it describes a lab value. The coder cannot assign N17.9 from this language. There is no MCC. DRG stays at 470.

> [CALLOUT-WARN]
> "Creatinine was noted to be elevated" describes an observation, not a condition. A nephrology consult and IV fluids are strong clinical signals — but the attending's documented diagnosis governs DRG assignment, not the consultant's note or the nursing flowsheet.

---

### Revised — DRG 469 (~$23,500) · ▲ ~$9,000

```
DISCHARGE DIAGNOSES:
1. Status post right total knee arthroplasty
2. [HIGHLIGHT-OK] Acute kidney injury (AKI), resolving [/HIGHLIGHT-OK]
3. Hypertension
4. Type 2 diabetes mellitus, with hyperglycemia
5. Chronic kidney disease, stage 3

HOSPITAL COURSE:
Patient underwent uncomplicated right TKA. On POD 2 the
patient developed [HIGHLIGHT-OK] acute kidney injury [/HIGHLIGHT-OK] in the setting of
decreased oral intake and perioperative fluid shifts. Baseline
creatinine 1.4, peak 2.3. Nephrology consulted; treated with IV
fluid resuscitation with good response. Creatinine improved to
1.8 at discharge.

[HIGHLIGHT-OK] The AKI is felt to represent a prerenal process superimposed
on CKD stage 3, now resolving. [/HIGHLIGHT-OK]
```

> [CALLOUT-OK]
> "Acute kidney injury" appears in both the diagnosis list and the hospital course with clinical context — baseline, peak, treatment, and resolution. This is codeable as N17.9 (MCC). DRG moves to 469.

> [CALLOUT-OK]
> The final sentence establishes clinical causality and supports POA = Yes. This protects against HAC scrutiny and supports medical necessity review if audited.

> [CALLOUT-INFO]
> "Type 2 diabetes mellitus, with hyperglycemia" (E11.65) is a CC. It won't change this DRG — LEJR is 2-tier — but it improves APR-DRG SOI, which affects commercial payer contracts and CMS quality metrics including the TEAM risk-adjusted target price.

---

<!-- ============================================================
  SECTION: CCList
  Component hint: <CCReferenceTable> — collapsible table of CCs.
  Frame these explicitly as SOI/ROM value, not payment value.
  Include ICD-10 and a one-line clinical note.
  ============================================================ -->

## Common CCs — Document for SOI/ROM, Not Payment

In LEJR, CCs do not move the DRG. They do affect:

- **APR-DRG Severity of Illness (SOI)** — used in commercial payer contracts and quality benchmarking
- **APR-DRG Risk of Mortality (ROM)** — used in CMS star ratings and observed-to-expected mortality calculations
- **TEAM risk-adjusted target price** — higher SOI raises the benchmark you're compared against, which is in your favor

Document these with specificity. The same precision principles apply — vague language yields no credit.

| Condition | ICD-10 | What to Specify |
|-----------|--------|-----------------|
| Type 2 diabetes with hyperglycemia | E11.65 | Specify type (1 vs. 2) and complication |
| Type 2 diabetes with hypoglycemia | E11.649 | Specify episode and consciousness level |
| Chronic kidney disease, stage 3 | N18.3 | Always stage it — N18.9 (unspecified) is not a CC |
| Chronic kidney disease, stage 4 | N18.4 | Stage 4 is CC; stage 5 is MCC |
| Longstanding persistent atrial fibrillation | I48.11 | Specify type — unspecified Afib (I48.91) is NOT a CC |
| Other persistent atrial fibrillation | I48.19 | Persistent ≥ 7 days but < 12 months |
| COPD with acute exacerbation | J44.1 | Must document "exacerbation" — J44.9 is not a CC |
| Peripheral vascular disease | I73.9 | Document if clinically active |
| Acute posthemorrhagic anemia | D62 | Document when Hgb drops > 2 g/dL and transfusion given |
| Hyponatremia | E87.1 | Name it — "low sodium" is a lab value, not a diagnosis |

> [CALLOUT-INFO]
> **CKD escalation opportunity:** CKD stage 5 (N18.5) and ESRD (N18.6) are MCCs, not CCs. If your patient's eGFR is consistently below 15, ask whether the stage has been explicitly documented. The stage cannot be inferred from the lab by the coder — the physician must name it.

---

<!-- ============================================================
  SECTION: HCCList
  Component hint: <HCCCardList> — procedure-specific HCC list 
  pulled from HCC-by-Procedure CSV. Frame around TEAM risk 
  adjustment, not Medicare Advantage.
  ============================================================ -->

## Key HCCs for LEJR Patients

HCCs (Hierarchical Condition Categories) drive risk adjustment in the TEAM model. Documenting active chronic conditions annually — in the H&P, progress notes, and discharge summary — raises the expected cost benchmark the hospital is measured against. An underdocumented HCC lowers your target price before the episode begins.

These HCCs appear most frequently in LEJR patient populations and have the highest impact on TEAM risk adjustment:

| HCC | Condition | Documentation Tip |
|-----|-----------|-------------------|
| HCC 37 | Diabetes with chronic complications | Must specify the complication — neuropathy, nephropathy, retinopathy |
| HCC 48 | Morbid obesity | Provider must document "morbid obesity" — BMI code alone is insufficient |
| HCC 326 | Chronic kidney disease, stage 5 | Stage must be explicitly documented |
| HCC 327 | Chronic kidney disease, stage 4 | Stage must be explicitly documented |
| HCC 226 | Heart failure, except end-stage and acute | Specify systolic vs. diastolic, chronic vs. acute |
| HCC 238 | Specified heart arrhythmias | Afib must be typed (paroxysmal, persistent, longstanding persistent) |
| HCC 253 | Hemiplegia/hemiparesis | Active residual deficits from prior stroke — not "history of stroke" |
| HCC 267 | Deep vein thrombosis and pulmonary embolism | Document when present; DVT prophylaxis ≠ DVT diagnosis |
| HCC 383 | Chronic ulcer of skin | Stage and site required |

> [CALLOUT-WARNING]
> **The "history of" trap:** Writing "history of stroke" maps to Z86.73 — not an HCC and not a CC. If the patient has residual weakness, altered gait, or any functional deficit from a prior stroke, that is an *active condition*, not history. Document "hemiparesis from prior CVA" — it is an MCC and an HCC.

---

<!-- ============================================================
  SECTION: DischargeChecklist
  Component hint: <DischargeChecklist> — numbered interactive 
  checklist. Each item: clinical trigger (what to look for) + 
  bold action (what to write). Max 6 items.
  ============================================================ -->

## Before You Sign the Discharge Summary

Run through this before closing the LEJR discharge note. Each item takes under 30 seconds to check.

**1. Creatinine**  
Did it rise ≥ 0.3 mg/dL above the preoperative baseline? **Name it as acute kidney injury in the discharge diagnoses.** Resolution before discharge does not eliminate the diagnosis — it was present during the stay.

**2. Mental status**  
Was there any confusion, disorientation, or delirium during the admission? Was there a concurrent metabolic abnormality (low sodium, high glucose, elevated creatinine)? **Document metabolic encephalopathy with the causative metabolic condition.** "Delirium" alone is a CC; metabolic encephalopathy is an MCC.

**3. Heart failure**  
Was there any BNP elevation, pulmonary edema, or diuresis during the stay? **Specify systolic vs. diastolic AND acute vs. chronic.** "CHF" is a CC. "Acute systolic heart failure" is an MCC.

**4. Respiratory status**  
Does the patient use BiPAP (not just CPAP)? Is there a history of daytime sleepiness or prior ABG with elevated CO₂? **Consider obesity hypoventilation syndrome rather than OSA alone.** OSA is a CC; OHS is an MCC.

**5. Nutrition**  
Was a nutrition consult placed? Did the dietitian document malnutrition? **Acknowledge the dietitian's assessment in your note and specify severity.** "Malnutrition" alone is E46 (CC). "Severe protein-calorie malnutrition" with clinical support is E43 (MCC).

**6. Diabetes**  
Is the diabetes typed (1 vs. 2)? Is there a documented complication (neuropathy, nephropathy, retinopathy, hyperglycemia)? **Document the specific complication.** Unspecified diabetes with no complication has no CC/MCC credit.

---

<!-- ============================================================
  SECTION: QueryTemplates
  Component hint: <QueryTemplateList> — collapsible list of 
  CDI query prompts. Write as physician-facing language. 
  These are conversation starters, not compliance forms.
  ============================================================ -->

## CDI Query Prompts — LEJR

These are the questions a CDI specialist or hospitalist colleague might raise on a LEJR case. They are written in plain clinical language — not administrative language.

> [CALLOUT-INFO]
> **How to use these:** These prompts are starting points for documentation clarification. CMS requires that physician documentation represent genuine clinical judgment — these queries are designed to surface conditions that are clinically present but underdocumented, not to generate diagnoses that aren't there.

**AKI query:**
*"The creatinine rose from [baseline] to [peak] postoperatively and returned toward baseline with IV fluids — does this represent acute kidney injury in your clinical judgment?"*

**Encephalopathy query:**
*"The patient had new-onset confusion on POD [X] in the setting of [sodium 128 / glucose 320 / rising creatinine]. The CAM screen was positive and family confirmed this was not the patient's baseline. Does this represent metabolic encephalopathy secondary to [metabolic cause]?"*

**Heart failure query:**
*"BNP was [value] and the patient required [IV Lasix dose] with [X liters] net negative. Can you specify whether this heart failure is systolic or diastolic, and whether the presentation was acute, chronic, or acute-on-chronic?"*

**Malnutrition query:**
*"Nutrition has documented [albumin value, weight loss, physical findings] meeting ASPEN criteria for [severity] malnutrition. Can you document the diagnosis and severity of malnutrition in your note?"*

**OHS query:**
*"The patient has morbid obesity (BMI [X]) and uses BiPAP at home. A prior ABG shows PaCO₂ of [value]. Does this represent obesity hypoventilation syndrome rather than OSA alone?"*

---

<!-- ============================================================
  SECTION: PageFooter
  Component hint: <ModuleFooter> — source citation, disclaimer, 
  last-updated date.
  ============================================================ -->

---

*Source: CMS FY2025/FY2026 IPPS Final Rule · MS-DRG V43.0 · ICD-10-CM FY2025*  
*DRG payment figures are national average approximations and vary by hospital wage index and geographic adjustment.*  
*CC/MCC designations change annually with each CMS IPPS Final Rule. Verify against the active MS-DRG Definitions Manual for the applicable fiscal year.*  
*Last updated: June 2026*
