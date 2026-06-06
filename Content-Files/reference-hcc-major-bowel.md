---
title: "HCC Reference: Major Bowel Procedure"
procedure: Major Bowel
route: /reference/hcc/major-bowel
drg-family: "329, 330, 331"
tier-structure: 3-tier (CC and MCC)
---

<!-- PageHero -->
# HCC Reference: Major Bowel Procedure

Major bowel procedures have 13 beneficiary-level HCC risk adjustment variables. The major bowel population is the most clinically diverse of the five TEAM procedures — it spans elective colorectal resections for cancer or diverticular disease, urgent cases for obstruction or perforation, and emergency operations for peritonitis, ischemia, or trauma. Risk profiles vary enormously, which makes HCC documentation especially consequential: a patient undergoing Hartmann's procedure for perforated diverticulitis with sepsis is a fundamentally different episode than an elective right hemicolectomy for Stage II colon cancer, and the target price should reflect that difference.

Major bowel is the only TEAM procedure with a 3-tier DRG structure and the widest payment spread in the TEAM model. HCC risk adjustment interacts with DRG tier: a well-documented patient at DRG 329 (MCC tier) with multiple HCCs will generate a substantially higher target price than an underdocumented patient at the same clinical complexity.

[PEARL] Oncology documentation is the highest-leverage HCC opportunity for major bowel procedures. Metastatic cancer (HCC 17) is both the most impactful HCC in this procedure set and the most commonly underdocumented — because "history of cancer" is among the most reflexively written phrases in oncology patients.

[NOTE] HCCs must be re-documented each calendar year. For oncology patients, the treating oncologist's most recent note within the 180-day lookback window is the primary HCC source — but that documentation must use language that maps to active disease codes, not remission or history codes. Coordinate with oncology to ensure the active disease status and current treatment intent are clearly stated.

---

<!-- Section: HCCTable -->
## Major Bowel Procedure HCC Risk Adjustment Variables

| HCC | Condition | Common ICD-10 Codes | Documentation Requirement | Common Miss |
|-----|-----------|--------------------|-----------------------------|-------------|
| 8 | Metastatic Cancer and Acute Leukemia | C77.0–C77.9, C78.00–C79.9, C92.00–C92.02 | Active metastatic disease — document current sites, treatment status, and whether curative or palliative intent | "History of cancer" or "cancer in remission" for patients with active metastatic disease under treatment |
| 9 | Lung and Other Severe Cancers | C34.00–C34.92, C38.0–C38.4 | Active primary lung cancer or other severe malignancy — specify histology, stage, and treatment status | "Lung nodule" or "pulmonary mass" without confirmed diagnosis |
| 10 | Lymphatic, Head and Neck, Brain, and Other Major Cancers | C00–C14.8, C70–C72.9 | Active primary cancer — specify site, histology, and stage | Documenting site without stage or active treatment context |
| 11 | Colorectal, Bladder, and Other Cancers | C18.0–C21.8, C67.0–C67.9 | Active primary colorectal or bladder cancer — specify site, stage, and whether resected or ongoing | "Colon cancer" without stage; "history of colon cancer" when currently under treatment |
| 12 | Breast, Prostate, and Other Cancers and Tumors | C50.011–C50.929, C61 | Active breast or prostate cancer — specify stage, ER/PR status for breast, treatment status | "Breast cancer" or "prostate cancer" without stage or treatment context |
| 17 | Metastatic Cancer & Acute Leukemia | C77.0–C77.9, C78.00–C79.9 | Same as HCC 8 above — active metastatic disease | Same as above |
| 37 | Diabetes with Chronic Complications | E10.21–E10.69, E11.21–E11.69 | Specify complication: nephropathy, neuropathy, retinopathy, PVD | "Diabetes" or "T2DM" without complication |
| 48 | Morbid Obesity | E66.01, E66.2 | BMI ≥40 with physician obesity diagnosis; OHS if present | BMI documented without physician diagnosis |
| 54 | Drug/Alcohol Dependence | F10.20–F10.29, F11.20–F11.29, F19.20–F19.29 | Active substance use disorder — specify substance and current status | "History of alcohol abuse" for current dependence |
| 85 | Congestive Heart Failure | I50.20–I50.43 | Specify type (systolic/diastolic) and acuity | "CHF" or "heart failure" without subtype |
| 107 | Vascular Disease | I70.201–I70.799, I71.00–I71.9 | PAD or aortic disease — specify site and severity | "Vascular disease" without specificity |
| 158 | Major Depression, Mild or Unspecified | F32.0, F32.9, F33.0 | Active mild/unspecified MDD — current treatment | "Depression" without diagnosis |
| 280 | COPD and Chronic Lung Disease | J44.0, J44.1, J44.9, J84.10–J84.89 | COPD with current severity | "Lung disease," "breathing problems" |

---

<!-- Section: OncologyDocumentation -->
## Oncology Documentation: The Most Consequential HCC for Major Bowel

The major bowel HCC set includes five cancer-specific categories (HCCs 8–12 and 17), reflecting the high prevalence of malignant indications in this procedure type. Colorectal cancer, rectal cancer, and peritoneal metastases are among the most common operative indications. The documentation principles are identical across all five categories but are worth stating explicitly because the stakes are high and the common miss is pervasive.

**Active vs. history vs. remission:** These three words produce entirely different ICD-10 codes and entirely different HCC outcomes.

| Documentation | Codes as | HCC captured? |
|---------------|----------|----------------|
| "Active colon cancer, Stage III, post-resection, on adjuvant FOLFOX" | C18.x (active) | Yes — HCC 11 |
| "Colon cancer in remission" | Z85.038 (personal history) | No |
| "History of colon cancer" | Z85.038 (personal history) | No |
| "Metastatic colorectal cancer to liver, on FOLFIRI + bevacizumab" | C78.7 (liver metastasis) | Yes — HCC 8/17 |

A patient receiving adjuvant chemotherapy after bowel resection for Stage III colorectal cancer has active cancer — the treatment is ongoing. That is not a "history of." A patient who completed treatment five years ago with no evidence of disease may appropriately be documented as "colon cancer in remission" — that accurately reflects the clinical status, even though it does not capture an HCC.

The clinical test is: is the cancer under active treatment or monitoring? If yes — active disease. If no evidence of disease and treatment is complete — remission or history is appropriate and accurate.

[PHRASING]
❌ "History of colon cancer, s/p hemicolectomy 8 months ago, currently on chemotherapy." — "History of" contradicts "currently on chemotherapy." The active treatment status means this is active cancer.
✅ "Stage III colon cancer (C18.7), diagnosed 8 months ago, post right hemicolectomy, currently on adjuvant FOLFOX cycle 6 of 12. No evidence of metastatic disease on most recent imaging." — Active cancer HCC captured; treatment context clear; metastatic status documented.

[PHRASING]
❌ "Metastatic colon cancer — patient presents for Hartmann's procedure." — Technically correct but minimal; doesn't document sites or treatment intent.
✅ "Metastatic colorectal cancer (C18.7) with hepatic metastases (C78.7) and peritoneal carcinomatosis (C78.6), on palliative FOLFIRI. Presents with acute large bowel obstruction requiring emergent sigmoid colectomy with end colostomy." — Both primary and metastatic HCCs captured; treatment intent documented; episode complexity reflected.

---

<!-- Section: BowelSpecificContext -->
## Emergency vs. Elective Context

The major bowel population includes both elective and emergent cases, and the HCC documentation strategy differs slightly by context.

**Elective cases** (planned resection for cancer, diverticular disease, IBD) have the luxury of a pre-operative encounter. The surgical pre-op visit, colonoscopy note, or oncology pre-op assessment within the 180-day window should capture all relevant HCCs. Cancer stage, treatment status, comorbidities with complications — all should be explicit in the pre-op documentation.

**Emergent cases** (obstruction, perforation, ischemia, peritonitis) have no pre-operative encounter. The ED assessment, the H&P at admission, and the operative note are the HCC capture documents. For these patients, the admitting physician and the surgeon need to document the full comorbidity picture in the admission notes — not assume it will be captured elsewhere.

For emergency major bowel cases, the admission H&P is doing the same work as the SHFFT H&P: establishing POA, capturing HCCs, and setting the clinical baseline in a single document written under time pressure.

[PHRASING]
❌ "Emergent sigmoid colectomy for perforated diverticulitis. PMH: diabetes, COPD, CHF." — PMH list captures nothing.
✅ "Emergent sigmoid colectomy (Hartmann's) for perforated sigmoid diverticulitis with feculent peritonitis. Active comorbidities: Type 2 diabetes mellitus with diabetic peripheral neuropathy (E11.40); chronic systolic heart failure (I50.22), EF 40%, NYHA Class II; COPD, moderate (J44.1), on tiotropium. All diagnoses present on admission." — HCCs captured; POA established.

---

*Module: HCC Reference — Major Bowel Procedure*
*Playbook: TEAM Playbook*
*HCC Model: CMS-HCC V28*
*Risk adjustment variable count: 13 beneficiary-level variables (Major Bowel)*
*180-day lookback: ends one day prior to episode initiation*
*Last updated: June 2026*
*Sources: CMS TEAM Final Rule FY2025/FY2026; McDermott+ CMMI Finalizes TEAM Policy Comparison (August 2024); CMS-HCC V28 ICD-10 Mappings*
