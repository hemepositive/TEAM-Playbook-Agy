# CMS TEAM Model — APR-DRG Reference with Severity of Illness & Risk of Mortality

> **System:** 3M™ All Patient Refined DRG (APR-DRG) Classification System  
> **Version:** APR-DRG v41  
> **Note:** APR-DRGs use a single base DRG with four subclasses for both Severity of Illness (SOI) and Risk of Mortality (ROM).  
> SOI and ROM are scored independently: **1 = Minor | 2 = Moderate | 3 = Major | 4 = Extreme**  
> APR-DRGs are used primarily for hospital quality benchmarking, case mix reporting, and payer contracting — not CMS fee-for-service payment (which uses MS-DRGs).

---

## APR-DRG vs. MS-DRG: Key Distinctions

| Feature | MS-DRG | APR-DRG |
|---|---|---|
| Developer | CMS | 3M Health Information Systems |
| Payment use | Medicare/Medicaid FFS | Quality, benchmarking, many commercial payers |
| Severity axis | CC / MCC (binary or 3-tier) | SOI subclasses 1–4 (continuous) |
| Mortality axis | None | ROM subclasses 1–4 (independent) |
| Splits per base DRG | 2–3 | Up to 16 (4 SOI × 4 ROM) |

---

## 1. 🦴 Lower Extremity Joint Replacement (LEJR)

**APR-DRG 301 — Hip Joint Replacement**  
**APR-DRG 302 — Knee Joint Replacement**

| APR-DRG | Description | SOI Subclasses | ROM Subclasses | Notes |
|---|---|---|---|---|
| **301** | Hip Joint Replacement | 1 (Minor) – 4 (Extreme) | 1 (Minor) – 4 (Extreme) | Covers total and partial hip arthroplasty; SOI driven by comorbidities (AKI, sepsis, heart failure) |
| **302** | Knee Joint Replacement | 1 (Minor) – 4 (Extreme) | 1 (Minor) – 4 (Extreme) | Total knee arthroplasty; elective cases cluster at SOI 1–2; ROM elevation requires MCC-equivalent conditions |
| **303** | Hip Revision / Except Total Hip | 1 (Minor) – 4 (Extreme) | 1 (Minor) – 4 (Extreme) | Revision procedures; higher baseline SOI than primary replacement |

> **SOI/ROM Drivers (LEJR):** Acute kidney injury, sepsis, respiratory failure, metabolic encephalopathy, acute heart failure, severe malnutrition (E43) push SOI/ROM to subclass 3–4. CKD stage 3–4, atrial fibrillation, and COPD typically yield SOI 2.

---

## 2. 🦷 Surgical Hip & Femur Fracture Treatment (SHFFT)

**APR-DRG 300 — Hip Fracture Repair**

| APR-DRG | Description | SOI Subclasses | ROM Subclasses | Notes |
|---|---|---|---|---|
| **300** | Hip Fracture Repair | 1 (Minor) – 4 (Extreme) | 1 (Minor) – 4 (Extreme) | Emergent/urgent cases; elderly population with high baseline comorbidity burden |

> **SOI/ROM Drivers (SHFFT):** Dementia (G30.9, F02.80), severe malnutrition, AKI, acute respiratory failure, and sepsis are the primary drivers to SOI/ROM subclass 3–4. Posthemorrhagic anemia (D62), hyponatremia (E87.1), and CKD stage 3–4 commonly yield SOI 2–3. This population has the highest average ROM of the five TEAM categories due to age and frailty.

---

## 3. 🧠 Spinal Fusion

**APR-DRG 340 — Spinal Fusion Procedures**  
**APR-DRG 341 — Spinal Procedures Except Fusion**

| APR-DRG | Description | SOI Subclasses | ROM Subclasses | Notes |
|---|---|---|---|---|
| **340** | Spinal Fusion Procedures | 1 (Minor) – 4 (Extreme) | 1 (Minor) – 4 (Extreme) | Covers single-level, multilevel, cervical, and combined approaches; procedure complexity (MS-DRG determinant) does not affect APR-DRG assignment — only comorbidities drive SOI/ROM |
| **341** | Spinal Procedures Except Fusion | 1 (Minor) – 4 (Extreme) | 1 (Minor) – 4 (Extreme) | Laminectomy, discectomy; lower baseline SOI than fusion cases |

> **SOI/ROM Drivers (Spinal Fusion):** Vertebral osteomyelitis (M46.20), disc space infection (M46.30), multiple sclerosis (G35), and sepsis are strong SOI/ROM 3–4 drivers. Opioid dependence (F11.20), chronic pain (G89.29), and CKD are common SOI 2 contributors. Blood loss anemia from multilevel cases (D62) contributes to SOI 2–3.

---

## 4. ❤️ Coronary Artery Bypass Graft (CABG)

**APR-DRG 161 — Coronary Artery Bypass Graft with Cardiac Catheterization**  
**APR-DRG 162 — Coronary Artery Bypass Graft without Cardiac Catheterization**

| APR-DRG | Description | SOI Subclasses | ROM Subclasses | Notes |
|---|---|---|---|---|
| **161** | CABG with Cardiac Catheterization | 1 (Minor) – 4 (Extreme) | 1 (Minor) – 4 (Extreme) | Includes MS-DRGs 231–234; concomitant cath/PTCA |
| **162** | CABG without Cardiac Catheterization | 1 (Minor) – 4 (Extreme) | 1 (Minor) – 4 (Extreme) | Includes MS-DRGs 235–236; isolated CABG |

> **SOI/ROM Drivers (CABG):** Perioperative MI (I21.9, I21.4), cardiac arrest (I46.9), acute systolic heart failure (I50.21), pulmonary hypertension (I27.20), dilated cardiomyopathy (I42.0), post-pump AKI, and acute respiratory failure are primary SOI/ROM 3–4 drivers. New-onset postoperative atrial fibrillation and CKD stage 3–4 commonly generate SOI 2. CABG patients have the highest absolute reimbursement and highest average SOI of all five TEAM categories.

---

## 5. 🫁 Major Bowel Procedure

**APR-DRG 220 — Major Small and Large Bowel Procedures**

| APR-DRG | Description | SOI Subclasses | ROM Subclasses | Notes |
|---|---|---|---|---|
| **220** | Major Small and Large Bowel Procedures | 1 (Minor) – 4 (Extreme) | 1 (Minor) – 4 (Extreme) | Covers colorectal resection, ostomy creation/reversal, bowel repair; MS-DRGs 329–331 map here |

> **SOI/ROM Drivers (Major Bowel):** Bowel perforation with peritonitis (K63.1), secondary malignancy (C78.5), septic shock (R65.21), acute hepatic failure (K72.00), DIC (D65), and severe malnutrition (E43) drive SOI/ROM subclass 3–4. Crohn's disease (K50.90), ulcerative colitis (K51.90), CKD, and unspecified malnutrition (E46) typically yield SOI 2. Major bowel has the widest SOI/ROM spread of the five TEAM procedures.

---

## Consolidated APR-DRG Summary Table

| TEAM Procedure | APR-DRG(s) | APR-DRG Description | SOI Range | ROM Range | Typical Elective/Uncomplicated Subclass |
|---|---|---|---|---|---|
| LEJR (Hip) | 301 | Hip Joint Replacement | 1–4 | 1–4 | SOI 1–2 / ROM 1 |
| LEJR (Knee) | 302 | Knee Joint Replacement | 1–4 | 1–4 | SOI 1–2 / ROM 1 |
| LEJR (Revision) | 303 | Hip Revision | 1–4 | 1–4 | SOI 2 / ROM 1–2 |
| SHFFT | 300 | Hip Fracture Repair | 1–4 | 1–4 | SOI 2–3 / ROM 2 |
| Spinal Fusion | 340 | Spinal Fusion Procedures | 1–4 | 1–4 | SOI 1–2 / ROM 1 |
| Spinal (Non-Fusion) | 341 | Spinal Procedures Except Fusion | 1–4 | 1–4 | SOI 1 / ROM 1 |
| CABG (with Cath) | 161 | CABG with Cardiac Cath | 1–4 | 1–4 | SOI 2–3 / ROM 2 |
| CABG (without Cath) | 162 | CABG without Cardiac Cath | 1–4 | 1–4 | SOI 2–3 / ROM 2 |
| Major Bowel | 220 | Major Small/Large Bowel Procedures | 1–4 | 1–4 | SOI 2 / ROM 1–2 |

---

## SOI & ROM Subclass Definitions

| Subclass | SOI Label | ROM Label | Clinical Interpretation |
|---|---|---|---|
| **1** | Minor | Minor | No significant effect on length of stay or resources; minimal mortality risk |
| **2** | Moderate | Moderate | Moderate effect on LOS and resource use; low but non-trivial mortality risk |
| **3** | Major | Major | Significant effect on LOS, resource use, and clinical complexity; elevated mortality risk |
| **4** | Extreme | Extreme | Major effect; life-threatening conditions present; highest mortality risk stratum |

---

## Crosswalk: MS-DRG Severity Tier → APR-DRG SOI Subclass (Approximate)

| MS-DRG Tier | APR-DRG SOI Equivalent | Example Conditions |
|---|---|---|
| Without CC/MCC | SOI 1 (Minor) | Uncomplicated elective case, no significant comorbidities |
| With CC | SOI 2 (Moderate) | CKD stage 3–4, controlled diabetes with hyperglycemia, atrial fibrillation, COPD exacerbation |
| With MCC | SOI 3 (Major) | AKI, acute respiratory failure, acute heart failure, metabolic encephalopathy |
| Multiple MCCs / Organ Failure | SOI 4 (Extreme) | Septic shock, DIC, multi-organ failure, severe malnutrition with acute complication |

> **Important distinction:** A single MCC does not automatically guarantee SOI 3, nor do all CCs equate to SOI 2. The APR-DRG grouper uses a proprietary algorithm that weights interaction effects between diagnoses. Multiple moderate comorbidities can combine to yield SOI 3 even without an MCC-level condition. This is why comprehensive comorbidity documentation matters beyond the CC/MCC binary.

---

## CDI Teaching Point: Why APR-DRG SOI/ROM Matters Beyond MS-DRG Payment

| Use Case | Why SOI/ROM Matters |
|---|---|
| **Quality Reporting (CMS, TJC)** | Observed-to-expected mortality ratios are risk-adjusted using ROM; underdocumented ROM inflates apparent mortality rates |
| **Hospital Star Ratings** | CMS Overall Hospital Quality Star Ratings use risk-adjusted outcomes tied to APR-DRG ROM |
| **Commercial Payer Contracts** | Many Blue Cross, Aetna, and UHC contracts use APR-DRG SOI for case rate and per diem adjustments |
| **Physician Profiling** | Surgeon-level complication and mortality reports are often ROM-adjusted; underdocumented ROM makes surgeons appear to have worse outcomes than peers |
| **TEAM Model Performance** | CMS TEAM model compares episode costs and outcomes against risk-adjusted benchmarks that include APR-DRG SOI/ROM |
| **Length of Stay Benchmarking** | Expected LOS tables are stratified by SOI; SOI 1 cases with extended stays trigger outlier scrutiny unless documentation supports higher SOI |

---

*APR-DRG assignments shown are based on 3M APR-DRG v41 grouper logic and standard clinical mapping.  
Actual grouper output depends on the complete coded record including principal diagnosis, procedure codes, and all secondary diagnoses with POA indicators.  
APR-DRG numbers and descriptions may vary slightly by version. Always verify against the active grouper version used by your facility or payer.*
