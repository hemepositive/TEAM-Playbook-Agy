---
title: "TEAM Quick Reference — Coronary Artery Bypass Graft (CABG)"
procedure: CABG
route: /reference/cabg
drg-family: "231 / 232 / 233 / 234 / 235 / 236"
tier-structure: 2-tier (MCC only) — across all 6 DRG families
last-updated: 2026-06
---

<!-- QuickReferenceHero -->
# TEAM Quick Reference — Coronary Artery Bypass Graft

**DRGs:** 231–236 (6 families; which family depends on concomitant procedure performed)
**Tier structure:** 2-tier across all CABG families — **only MCCs move payment**. CCs have SOI/ROM and quality metric value only.
**~Payment delta MCC → base:** ~$12,000–$17,500 per case (highest payment delta of all 5 TEAM procedures)
**DRG family navigator:** 231/232 = CABG with cardiac catheterization · 233/234 = CABG with major cardiovascular procedure · 235/236 = CABG without other procedures

---

<!-- Section: TopMCCs -->
## Top 5 MCCs — Highest Payment Impact

| # | MCC | Why It's Missed | ICD-10 |
|---|-----|-----------------|--------|
| 1 | **Acute Systolic or Diastolic Heart Failure** | "CHF" documented instead — not an MCC; unspecified heart failure has no CC/MCC value | I50.21, I50.23, I50.31, I50.33 |
| 2 | **Acute Kidney Injury** | Post-pump AKI described as "creatinine elevation" or "contrast nephropathy" — lab findings, not diagnosis | N17.0–N17.9 |
| 3 | **Metabolic or Toxic Encephalopathy** | Post-pump confusion documented as "ICU delirium" or "altered mental status" — delirium is CC, encephalopathy is MCC | G93.41, G92.9 |
| 4 | **Acute Respiratory Failure** | "Prolonged intubation" or "ventilator weaning difficulty" without naming respiratory failure | J96.01, J96.02 |
| 5 | **Dilated Cardiomyopathy** | Underlying cardiomyopathy not documented separately from HF — both should be coded | I42.0 |

**Also consider:** Pulmonary hypertension (I27.0–I27.29), perioperative MI (I97.190–I97.191), sepsis (A41.x + R65.20/R65.21), severe malnutrition (E43)

---

<!-- Section: TopCCs -->
## Top 10 CCs — SOI/ROM and Quality Value

> CCs do not move the CABG DRG payment tier. Document for SOI scoring, risk-adjusted quality metrics, and audit defense.

| # | CC | Common Miss | ICD-10 |
|---|-----|-------------|--------|
| 1 | New-onset postop atrial fibrillation | "A-fib" without specifying type; "irregular rhythm"; undocumented entirely | I48.0 (paroxysmal), I48.19 (persistent) |
| 2 | Chronic systolic or diastolic HF (stable) | "CHF" unspecified — no CC/MCC at all | I50.22, I50.32 |
| 3 | Pleural effusion | Present on many post-CABG patients; rarely named as a diagnosis | J90 |
| 4 | Acute blood loss anemia | "Postop anemia" without type; transfusion ordered without diagnosis | D62 |
| 5 | Moderate malnutrition | No physician diagnosis despite nutrition support initiated | E44.0 |
| 6 | Demand ischemia (without MI) | "Troponin bump" or "demand ischemia" documented vaguely — this is a codeable diagnosis | I24.8 |
| 7 | COPD with acute exacerbation | "COPD" without exacerbation; "pulmonary disease" | J44.1 |
| 8 | Diabetes with complications | "Diabetes" or "DM" without specifying complication type | E11.40–E11.69 |
| 9 | Cardiomyopathy (non-ischemic, stable) | Underlying cardiomyopathy undocumented when HF is present | I42.0–I42.9 |
| 10 | Morbid obesity (BMI ≥40) | "Obese" or "BMI 42" written without diagnosis — Z68 code alone is not a CC | E66.01 |

---

<!-- Section: KeyHCCs -->
## Key HCCs — Target Price Risk Adjustment

CABG has 12 HCC risk adjustment variables — the fewest of the five procedures. The cardiac surgical population is already identified as high-complexity; the HCC window captures pre-existing comorbidities that predict episode cost.

| HCC | Condition | Documentation Trigger |
|-----|-----------|----------------------|
| 85 | Congestive heart failure (any type) | Specify systolic vs. diastolic; include EF if available; avoid "CHF" alone |
| 86 | Acute MI | Specify STEMI vs. NSTEMI; territory if known; this is often the operative indication |
| 87 | Unstable angina / acute ischemic HD | Document ACS presentation that led to surgery |
| 96 | Specified arrhythmias | AF type; pre-existing VT — specify at pre-op encounter |
| 107/108 | Vascular disease | PAD with site and severity; aortic disease |
| 37 | Diabetes with chronic complications | Name the complication — nephropathy interacts with AKI risk |
| 280 | COPD | Severity and exacerbation status |
| 327 | CKD Stage 4 | Stage the CKD — matters significantly for AKI prediction and management |
| 48 | Morbid obesity | BMI ≥40 or BMI 35-39.9 with weight-exacerbated comorbidities + provider diagnosis |

**Pre-op cardiology note is the primary HCC source.** "Systolic dysfunction" does not code to the same HCC as "chronic systolic heart failure." Cardiologists should use diagnosis language, not functional descriptions.

---

<!-- Section: PhrasingExamples -->
## Exact Phrasing Examples

**Heart failure (most important CABG documentation target)**
Instead of: *"CHF — EF 30%, continue home meds."*
Write: *"Ischemic cardiomyopathy (I25.5) with chronic systolic heart failure (I50.22), EF 30%, NYHA Class III. Managed with carvedilol, lisinopril, furosemide, and spironolactone."*

**Post-op atrial fibrillation**
Instead of: *"Post-op a-fib, rate controlled."*
Write: *"New-onset paroxysmal atrial fibrillation (I48.0) on POD2, converted to sinus rhythm with amiodarone. Will continue amiodarone 200mg daily for 4 weeks post-discharge."*
> If AF is still present at discharge: "Persistent atrial fibrillation (I48.19) — present at discharge, rate controlled on metoprolol and anticoagulated with apixaban."

**AKI after bypass**
Instead of: *"Creatinine rose to 2.1 post-pump, improving. Likely contrast and hypoperfusion."*
Write: *"Acute kidney injury, stage 2 (N17.9), post-cardiopulmonary bypass, likely ischemic etiology with contribution from contrast exposure. Creatinine peaked at 2.1 from baseline 1.0. IV hydration and nephrotoxin avoidance initiated, nephrology consulted, creatinine trending down."*

**Perioperative MI**
Instead of: *"Troponin elevated postop — expected after bypass."*
Write: *"Perioperative myocardial infarction (I97.190) — troponin I peak 42 ng/mL, new ST changes in inferior leads on POD1, confirmed on repeat ECG. Cardiology co-managing."*

**Morbid Obesity**
Instead of: *"Obese, BMI 41.3."*
Write: *"Morbid obesity (BMI 41.3) — patient's severe obesity requires specialized postoperative mobilization, bariatric bed, and respiratory care monitoring to prevent sternal dehiscence."*

**Encephalopathy**
Instead of: *"ICU delirium — reorientation protocol."*
Write: *"Metabolic encephalopathy (G93.41) secondary to hypoxia and metabolic derangement post-bypass. CAM positive POD1-2. Treating underlying cause; delirium precautions in place."*

**Dilated cardiomyopathy**
Instead of: *"Cardiomegaly on CXR, known poor EF."*
Write: *"Dilated cardiomyopathy (I42.0) — EF 25% on pre-op TTE, left ventricular dilation. Distinct from ischemic cardiomyopathy; non-ischemic etiology confirmed on prior workup."*

---

<!-- Section: DischargeChecklist -->
## Discharge Documentation Checklist

**Before signing the discharge summary, confirm:**

- [ ] **Heart failure** — specify systolic vs. diastolic, acute vs. chronic, EF if available; avoid "CHF" alone
- [ ] **Cardiomyopathy** — if EF reduced and cardiomyopathy is the underlying diagnosis: document separately from HF (both are codeable)
- [ ] **Postop atrial fibrillation** — if AF occurred: document type (paroxysmal if terminated before discharge; persistent if ongoing); document management and discharge plan
- [ ] **AKI** — if creatinine rose at any point post-bypass: document AKI with stage and etiology; do not leave as "creatinine elevation"
- [ ] **Encephalopathy** — if confusion occurred: distinguish metabolic encephalopathy (MCC) from delirium (CC); document etiology
- [ ] **Perioperative MI** — if troponin significantly elevated with ECG changes: document as perioperative MI, not "expected troponin release"
- [ ] **Pleural effusion** — present in most CABG patients by discharge: document if clinically relevant and managed
- [ ] **Respiratory failure** — if ventilator weaning was prolonged or patient required re-intubation: document acute respiratory failure
- [ ] **Pulmonary hypertension** — if documented on pre-op or intra-op right heart cath: document as active diagnosis
- [ ] **Malnutrition** — if nutrition support initiated or prolonged ICU course: physician documents severity
- [ ] **Diabetes** — specify type and complications; avoid "DM" alone
- [ ] **COPD** — if respiratory involvement during stay: document exacerbation status
- [ ] **Morbid Obesity** — if BMI is ≥40, or BMI is 35–39.9 with severe weight-exacerbated comorbidities: document "morbid obesity" to capture CC and trigger HCC 48 risk adjustment
- [ ] **POA status** — all secondary diagnoses should reflect whether present on admission or developed during stay

*Source: CMS MS-DRG V43.0 · FY2026 ICD-10-CM · Last updated June 2026*
*Payment figures are national averages; vary by hospital wage index. CC/MCC designations update annually with IPPS Final Rule.*
