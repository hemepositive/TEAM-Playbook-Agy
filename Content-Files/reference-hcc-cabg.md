---
title: "HCC Reference: Coronary Artery Bypass Graft (CABG)"
procedure: CABG
route: /reference/hcc/cabg
drg-family: "231, 232, 233, 234, 235, 236"
tier-structure: 2-tier (MCC only)
---

<!-- PageHero -->
# HCC Reference: Coronary Artery Bypass Graft

CABG has 12 beneficiary-level HCC risk adjustment variables — the fewest of the five TEAM procedures. This reflects the relatively homogeneous risk profile of the cardiac surgical population: these patients are already identified as high-cost, high-complexity, and the primary drivers of CABG episode cost are the procedure itself and readmissions, not post-acute variation. Post-acute care represents only ~14% of total CABG episode cost — the lowest of the five procedures.

That said, CABG HCC documentation still matters. The cardiac comorbidities that predict expensive CABG episodes — heart failure, arrhythmias, pulmonary disease, diabetes with complications, renal disease — are the same conditions that are frequently documented imprecisely. A CABG patient with systolic heart failure documented as "CHF" instead of "chronic systolic heart failure" captures a lower-weight HCC than the clinical picture warrants.

[PEARL] For CABG patients, the most impactful HCC documentation opportunity is the pre-operative cardiology evaluation. The cardiologist's pre-op note typically lists all cardiac diagnoses in detail — but those diagnoses must also appear in the hospital record with current specificity to count toward risk adjustment.

[NOTE] HCCs must be re-documented each calendar year. CABG patients often have recent cardiology follow-up within the 180-day lookback window. The cardiologist's most recent outpatient note is a primary HCC source — but the diagnoses listed there must use language that maps to specific ICD-10 codes. "Systolic dysfunction" is not the same as "chronic systolic heart failure" in the coding system.

---

<!-- Section: HCCTable -->
## CABG HCC Risk Adjustment Variables

| HCC | Condition | Common ICD-10 Codes | Documentation Requirement | Common Miss |
|-----|-----------|--------------------|-----------------------------|-------------|
| 17 | Metastatic Cancer & Acute Leukemia | C77.0–C77.9, C78.00–C79.9, C92.00–C92.02 | Active metastatic disease with current sites | "History of cancer" when under active treatment |
| 37 | Diabetes with Chronic Complications | E10.21–E10.69, E11.21–E11.69 | Specify complication: nephropathy, neuropathy, retinopathy, PVD | "Diabetes" or "T2DM" without specifying complication |
| 85 | Congestive Heart Failure | I50.20–I50.43 | Specify type (systolic/diastolic) and acuity (acute/chronic/acute-on-chronic) | "CHF" (I50.9 = unspecified, lowest weight); "heart failure" without subtype |
| 86 | Acute Myocardial Infarction | I21.01–I21.4, I21.9 | Acute MI — STEMI vs. NSTEMI; specify territory if known | "Troponin elevation" or "demand ischemia" instead of formal MI diagnosis |
| 87 | Unstable Angina and Other Acute Ischemic Heart Disease | I20.0, I24.0–I24.9 | Unstable angina with current clinical picture; document ACS presentation | "Chest pain" or "angina" without specifying unstable vs. stable |
| 88 | Angina Pectoris/Old Myocardial Infarction | I20.8, I20.9, I25.2 | Stable angina or old MI — specify if old MI is relevant to current episode | "History of heart attack" without documenting as current active diagnosis |
| 96 | Specified Heart Arrhythmias | I48.0–I48.92, I47.1, I49.01 | AF (specify type), PSVT, VT — current status and management | "A-fib" without type; "irregular rhythm" |
| 107 | Vascular Disease | I70.201–I70.799, I71.00–I71.9 | Peripheral arterial disease, aortic aneurysm — specify site and severity | "Vascular disease" or "PVD" without site and severity |
| 108 | Vascular Disease with Complications | I70.231–I70.749 | PAD with ulceration, gangrene, or rest pain — specify complication | PAD documented without current complication status |
| 158 | Major Depression, Mild or Unspecified | F32.0, F32.9, F33.0 | Active mild or unspecified MDD — document current treatment | "Depression" without formal diagnosis; highly prevalent in cardiac patients |
| 280 | COPD and Chronic Lung Disease | J44.0, J44.1, J44.9, J84.10–J84.89 | COPD with current severity and exacerbation status | "Pulmonary disease," "SOB at baseline," COPD without severity |
| 326 | CKD Stage 5 | N18.5 | Stage 5 CKD — eGFR <15 | "CKD" without staging |
| 327 | CKD Stage 4 | N18.4 | Stage 4 CKD — eGFR 15–29 | "CKD" without staging; "chronic renal insufficiency" |

---

<!-- Section: CABGSpecific -->
## CABG-Specific Documentation Priorities

**Heart failure** (HCC 85) is the single most important HCC for CABG documentation. Most CABG patients have some degree of left ventricular dysfunction — whether from ischemic cardiomyopathy, prior MI, or both. "CHF" maps to I50.9 (unspecified) which captures HCC 226 for LEJR/SHFFT but the cardiac-specific HCC 85 for CABG. Specify the type: "chronic systolic heart failure with reduced ejection fraction (EF 35%), managed with GDMT including carvedilol, lisinopril, and eplerenone" is the appropriate level of specificity. Include the EF if documented — it supports clinical validation even though EF is not itself a codeable element.

**Acute MI** (HCC 86) and **unstable angina** (HCC 87) — CABG is frequently performed for acute coronary syndrome or recent MI. The indication for surgery should be explicitly documented: "CABG performed for three-vessel CAD following NSTEMI with cardiogenic shock." Documenting the ACS presentation as the operative indication captures HCC 86 or 87 and is clinically accurate.

**Vascular disease** (HCCs 107, 108) — many CABG patients have concomitant peripheral arterial disease. PAD is highly prevalent in patients with three-vessel coronary disease. If the patient has documented PAD, specify site (lower extremity, aortoiliac, renal), severity, and whether complications (claudication, rest pain, ulceration) are present.

**Arrhythmias** (HCC 96) — post-CABG atrial fibrillation is the most common arrhythmia complication, but pre-existing AF should also be documented specifically pre-operatively. New post-operative AF is a readmission driver and an MCC/CC — document it in the hospitalization when it occurs, with type specification.

**Depression** (HCC 158) — cardiac patients have high rates of comorbid depression. It is frequently underdocumented in cardiac surgery pre-op assessments. A patient on an antidepressant should have the underlying diagnosis named.

---

<!-- Section: CardiacSpecificity -->
## The Heart Failure Specificity Ladder for CABG

Heart failure documentation in the CABG population follows the same specificity ladder as in other procedures, but the stakes are amplified because nearly every CABG patient has some degree of ventricular dysfunction.

| Documentation | ICD-10 | HCC Weight Direction |
|---------------|--------|---------------------|
| "CHF" or "heart failure" | I50.9 | Lowest — unspecified |
| "Chronic systolic heart failure" | I50.22 | HCC 85 captured |
| "Acute on chronic systolic heart failure" | I50.23 | HCC 85 — higher acuity signal |
| "HFrEF, EF 30%, on GDMT" | I50.22 + clinical context | HCC 85 + strong audit defense |
| "Ischemic cardiomyopathy with systolic HF" | I25.5 + I50.22 | Etiology + HCC both captured |

[PHRASING]
❌ "CAD, CHF, DM — proceed with CABG." — Diagnoses listed without specificity; no HCC weight captured for HF or DM.
✅ "Three-vessel CAD with recent NSTEMI (I21.4). Ischemic cardiomyopathy (I25.5) with chronic systolic heart failure (I50.22), EF 30%, NYHA Class III, on carvedilol, lisinopril, and furosemide. Type 2 diabetes mellitus with CKD (E11.65), eGFR 28 (CKD Stage 4, N18.4). COPD, moderate (J44.1), on tiotropium. Proceeding with CABG." — All relevant HCCs captured; clinical picture complete.

---

*Module: HCC Reference — CABG*
*Playbook: TEAM Playbook*
*HCC Model: CMS-HCC V28*
*Risk adjustment variable count: 12 beneficiary-level variables (CABG)*
*180-day lookback: ends one day prior to episode initiation*
*Last updated: June 2026*
*Sources: CMS TEAM Final Rule FY2025/FY2026; McDermott+ CMMI Finalizes TEAM Policy Comparison (August 2024); CMS-HCC V28 ICD-10 Mappings*
