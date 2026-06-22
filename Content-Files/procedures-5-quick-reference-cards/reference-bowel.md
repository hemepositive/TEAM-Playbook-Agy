---
title: "TEAM Quick Reference — Major Bowel Procedure"
procedure: Major Bowel
route: /reference/major-bowel
drg-family: "329 / 330 / 331"
tier-structure: 3-tier (CC and MCC both move payment)
last-updated: 2026-06
---

<!-- QuickReferenceHero -->
# TEAM Quick Reference — Major Bowel Procedure

**DRGs:** 329 (with MCC) · 330 (with CC) · 331 (without CC/MCC)
**Tier structure:** 3-tier — **both MCCs and CCs move payment**. This is the widest payment spread of all five TEAM procedures.
**~Payment delta MCC → CC:** ~$8,000–$12,000 · **CC → base:** ~$4,000–$6,000 (national averages; vary by wage index)
**Patient population note:** Includes elective resections (cancer, diverticular disease, IBD) and emergent cases (obstruction, perforation, ischemia). Comorbidity profiles differ significantly — emergency patients have no pre-op encounter for HCC capture.

---

<!-- Section: TopMCCs -->
## Top 5 MCCs — Highest Payment Impact

| # | MCC | Why It's Missed | ICD-10 |
|---|-----|-----------------|--------|
| 1 | **Sepsis / Severe Sepsis / Septic Shock** | "Infection" or "peritonitis" documented without linking to systemic sepsis; source not named | A41.x + R65.20/R65.21 |
| 2 | **Acute Kidney Injury** | Creatinine elevation in septic or hypovolemic patient documented as lab value, not AKI diagnosis | N17.0–N17.9 |
| 3 | **Severe Protein-Calorie Malnutrition** | Dietitian documents it; physician never does — only physician diagnosis is codeable | E43 |
| 4 | **Metastatic Disease** | "History of cancer" written for patients with active metastatic disease under treatment — active disease requires active disease coding | C77.x–C79.x |
| 5 | **Acute Respiratory Failure** | "Prolonged intubation" or "ventilator dependent" without naming respiratory failure | J96.01, J96.02 |

**Also consider:** Metabolic/toxic encephalopathy (G93.41), intestinal perforation when principal dx supports it (K63.1), acute systolic/diastolic HF (I50.21–I50.43), acute pancreatitis (K85.x)

---

<!-- Section: TopCCs -->
## Top 10 CCs — Payment and Quality Value

> In Major Bowel's 3-tier structure, CCs directly increase DRG payment. Document all that apply.

| # | CC | Common Miss | ICD-10 |
|---|-----|-------------|--------|
| 1 | Moderate malnutrition | No physician diagnosis despite dietitian assessment, weight loss, or poor intake | E44.0 |
| 2 | Acute blood loss anemia | "Postop anemia" without type; transfusion ordered without named diagnosis | D62 |
| 3 | Ileus (postoperative) | "Slow GI recovery" or "not tolerating diet" instead of ileus diagnosis | K56.7 |
| 4 | Chronic systolic or diastolic HF (stable) | "CHF" unspecified — no CC/MCC captured | I50.22, I50.32 |
| 5 | COPD with acute exacerbation | "COPD" without exacerbation; "breathing problems" | J44.1 |
| 6 | Diabetes with complications | "Diabetes" alone without specifying complication type | E11.40–E11.69 |
| 7 | Atrial fibrillation (specified type) | "A-fib" without type; undocumented entirely | I48.0, I48.11, I48.19 |
| 8 | Peritonitis (when not principal dx) | Present in perforation cases; may need explicit documentation as secondary dx | K65.0–K65.9 |
| 9 | C. difficile enteritis | Positive C. diff during hospitalization; diagnosis not named | A04.71, A04.72 |
| 10 | Morbid obesity (BMI ≥40) | "Obese" or "BMI 42" written without diagnosis — Z68 code alone is not a CC | E66.01 |

---

<!-- Section: KeyHCCs -->
## Key HCCs — Target Price Risk Adjustment

Major Bowel has 13 HCC risk adjustment variables, with the most oncology-specific HCC categories of any TEAM procedure.

| HCC | Condition | Documentation Trigger |
|-----|-----------|----------------------|
| 8/17 | Metastatic cancer | **Active** metastatic disease — not "history of cancer." Specify current sites and treatment intent |
| 11 | Colorectal / bladder cancer (active) | Stage, current treatment status — "history of colon cancer" ≠ active cancer under treatment |
| 9/10/12 | Other active malignancy | Lung, head/neck, brain, breast, prostate — specify stage and whether under active treatment |
| 85 | Congestive heart failure | Specify systolic vs. diastolic; acute vs. chronic |
| 37 | Diabetes with chronic complications | Name the complication; avoid "DM" alone |
| 48 | Morbid obesity | BMI ≥40 or BMI 35-39.9 with comorbidities + provider diagnosis (E66.01, HCC 48) |
| 280 | COPD | Severity and exacerbation status |
| 54 | Drug/alcohol dependence | Active substance use disorder — not "history of" if currently active |

**Emergency case note:** No pre-op encounter exists for emergent bowel cases. The ED assessment and admission H&P are the only HCC capture documents. Treat them accordingly — name every active comorbidity explicitly.

---

<!-- Section: PhrasingExamples -->
## Exact Phrasing Examples

**Sepsis (highest-yield MCC for major bowel)**
Instead of: *"Patient with peritonitis from perforated diverticulitis — started on broad-spectrum antibiotics."*
Write: *"Sepsis (A41.89) due to perforated sigmoid diverticulitis with feculent peritonitis (K57.20). Meeting Sepsis-3 criteria — SOFA score increased ≥2 from baseline with hypotension and elevated lactate. IV antibiotics, fluid resuscitation, vasopressors initiated."*

**Active cancer vs. history (most critical HCC distinction for major bowel)**
Instead of: *"History of colon cancer, s/p hemicolectomy, currently on chemotherapy."*
Write: *"Stage III colon cancer (C18.7), post right hemicolectomy 8 months ago, currently on adjuvant FOLFOX cycle 6 of 12. Active malignancy under treatment — not in remission."*

Instead of: *"Metastatic colon cancer — palliative intent."*
Write: *"Metastatic colorectal cancer (C18.7) with hepatic metastases (C78.7) and peritoneal carcinomatosis (C78.6). Palliative systemic therapy with FOLFIRI ongoing. No curative intent."*

**Morbid Obesity**
Instead of: *"Obese, BMI 37.5, history of sleep apnea."*
Write: *"Morbid obesity due to comorbidities (BMI 37.5, obstructive sleep apnea) — patient's severe obesity requires bariatric bed, custom mobilization protocol, and active CPAP compliance monitoring postoperatively."*

**Malnutrition**
Instead of: *"Patient with poor nutritional status, dietitian following."*
Write: *"Severe protein-calorie malnutrition (E43) — >10% unintentional weight loss over 2 months in setting of active malignancy, significant muscle and fat wasting, albumin 2.0. ASPEN criteria for severe malnutrition met. TPN initiated."*

**AKI in septic patient**
Instead of: *"Creatinine up in setting of sepsis — IV fluids running."*
Write: *"Acute kidney injury stage 3 (N17.9), in the setting of septic shock — creatinine peaked at 4.1 from baseline 0.9. Continuous renal replacement therapy initiated. Nephrology co-managing."*

**Ileus**
Instead of: *"Slow GI recovery — NPO, NG tube in place."*
Write: *"Postoperative ileus (K56.7) — absent bowel sounds, abdominal distension, NG tube output >800mL/day. NPO, NG tube decompression, ambulation protocol initiated."*

**Ostomy complication (discharge-specific)**
Instead of: *"Ostomy functioning, teaching provided."*
Write: *"High-output ileostomy with dehydration risk — output averaging 1,800mL/day. Electrolyte replacement protocol initiated, ostomy nurse education provided, explicit written instructions for hydration and dietary management given to patient and family. Follow-up with ostomy nurse at 48 hours post-discharge arranged."*

---

<!-- Section: DischargeChecklist -->
## Discharge Documentation Checklist

**Before signing the discharge summary, confirm:**

- [ ] **Sepsis** — if systemic infection with organ dysfunction: document sepsis with source explicitly; do not leave as "peritonitis" or "infection" alone
- [ ] **Cancer status** — if patient has active malignancy under treatment: document as active cancer with stage and treatment, not "history of cancer"
- [ ] **Metastatic disease** — document current metastatic sites and treatment intent (curative vs. palliative)
- [ ] **AKI** — if creatinine rose at any point: document AKI with stage and etiology; especially important in septic/hypovolemic patients
- [ ] **Malnutrition** — if weight loss, wasting, low albumin, or TPN/enteral nutrition initiated: physician documents severity (mild/moderate/severe)
- [ ] **Respiratory failure** — if ventilator weaning prolonged or re-intubation required: document acute respiratory failure explicitly
- [ ] **Ileus** — if NG tube placed, NPO prolonged, or GI decompression required: document postoperative ileus as diagnosis
- [ ] **Ostomy** — if ostomy created: document type and output status; specify complications if present; document discharge education plan
- [ ] **Anemia** — if transfusion given: document acute blood loss anemia (D62)
- [ ] **Hyponatremia / electrolyte disorders** — if Na <135 or other electrolyte abnormality required management: document as diagnosis
- [ ] **Diabetes** — specify type and complications; insulin management during hospitalization implies relevant complexity
- [ ] **C. difficile** — if C. diff positive during stay: document as diagnosis, not just "positive culture"
- [ ] **Heart failure** — if diuresis or volume management required: specify systolic vs. diastolic, acute vs. chronic
- [ ] **COPD** — if respiratory involvement during stay: document exacerbation status
- [ ] **Morbid Obesity** — if BMI is ≥40, or BMI is 35–39.9 with severe weight-exacerbated comorbidities: document "morbid obesity" to capture CC (+0.7127 weight shift on DRG 330) and HCC 48
- [ ] **POA status** — all secondary diagnoses should reflect whether present on admission; critical for perforation, peritonitis cases where POA timing matters

*Source: CMS MS-DRG V43.0 · FY2026 ICD-10-CM · Last updated June 2026*
*Payment figures are national averages; vary by hospital wage index. CC/MCC designations update annually with IPPS Final Rule.*
