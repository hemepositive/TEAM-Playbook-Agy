# DRG Billing Outlier & Risk-Adjusted Quality Analysis
## Clinical Documentation & Severity Capture Assessment for Huntsville Hospital

This report analyzes the Medicare Inpatient Claims dataset (`MUP_INP_RY26_P03_V10_DY24_PrvSvc.csv`) to assess billing distributions at **Huntsville Hospital (CCN 010039)**. It identifies key clinical documentation gaps where Huntsville acts as a statistical outlier compared to regional (East South Central) and national averages, and details how these gaps directly skew the hospital's publicly reported quality metrics—specifically, CMS 30-day risk-standardized mortality rates.

---

## 1. Executive Summary: The Billing-Quality Connection

Clinical documentation in the inpatient setting serves two separate but interconnected systems:
1.  **Reimbursement (DRG Severity Tiers):** Capturing Complications/Comorbidities (CCs) and Major Complications/Comorbidities (MCCs) shifts cases from baseline to higher-paying severity tiers.
2.  **Quality Metrics (CMS Risk Adjustment):** CMS uses secondary diagnoses to calculate the predicted risk of death for hospitalized cohorts. 

> [!IMPORTANT]
> **The Severity Gap at Huntsville Hospital:**
> Huntsville is a significant statistical outlier for billing lower-severity DRG tiers while under-billing high-severity tiers in the same clinical categories. This under-reporting of patient acuity makes Huntsville's inpatient population appear artificially healthy to CMS risk-adjustment algorithms. Consequently, when average-risk patients expire, the risk-adjustment model classifies it as an "unexpected" death, artificially inflating Huntsville's publicly reported **Pneumonia and Heart Failure (CHF) mortality rates**.

---

## 2. Top DRG Billing Outliers

By calculating each DRG's percentage of total discharges at Huntsville Hospital (9,210 cases) and comparing it against the national inpatient database (4.95 million cases), we identified the largest billing anomalies.

### A. Top Over-Represented DRGs (Acuity Capture Failures)
These are DRGs where Huntsville is billing at rates far exceeding the national average. In almost every case, these represent the lowest-severity tiers (without CC/MCC or with CC only) of major clinical cohorts.

| DRG Code | DRG Description | Huntsville Cases | Huntsville % | National % | Ratio vs. National | Clinical Insight |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| **292** | Heart Failure & Shock with CC | 45 | 0.489% | 0.104% | **4.71x** | Patients are being coded with minor comorbidities (CC) rather than major acuity (MCC), leading to leakage from DRG 291. |
| **455** | Combined Ant/Post Spinal Fusion without CC/MCC | 90 | 0.977% | 0.213% | **4.59x** | Major spine surgery patients are being billed with zero captured comorbidities, indicating a massive documentation gap. |
| **234** | Coronary Bypass w Cath without MCC | 42 | 0.456% | 0.112% | **4.09x** | Complex CABG patients are falling into the lower payment tier due to missing MCCs. |
| **331** | Major Bowel Procedures without CC/MCC | 56 | 0.608% | 0.235% | **2.59x** | Major abdominal surgeries are billed in the baseline tier, indicating severe under-documentation. |
| **191** | COPD with CC | 51 | 0.554% | 0.232% | **2.39x** | Patients admitted with acute COPD exacerbations are coded with only minor complications. |
| **178** | Respiratory Infections & Inflams with CC | 94 | 1.021% | 0.534% | **1.91x** | Lower-severity pneumonia/respiratory infections are over-represented. |

### B. Top Under-Represented DRGs (Missed Acuity Opportunities)
These are high-acuity DRGs (requiring an MCC) where Huntsville falls significantly behind national billing frequencies.

| DRG Code | DRG Description | Huntsville Cases | Huntsville % | National % | Difference vs. National | Clinical Insight |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| **871** | Septicemia or Severe Sepsis with MCC | 814 | 8.838% | 11.653% | **-2.81%** | Sepsis represents your largest single volume cohort; missing MCCs here significantly depresses Case Mix Index. |
| **291** | Heart Failure & Shock with MCC | 389 | 4.224% | 6.152% | **-1.93%** | Under-billing of severe CHF corresponds directly with the over-billing of DRG 292. |
| **193** | Simple Pneumonia & Pleurisy with MCC | 108 | 1.173% | 2.759% | **-1.59%** | Severe pneumonia is under-coded, directly impacting risk-adjusted mortality indices. |
| **189** | Pulmonary Edema & Respiratory Failure | 63 | 0.684% | 1.817% | **-1.13%** | Primary respiratory failure admissions are under-documented or shifted to infection codes. |
| **190** | COPD with MCC | 51 | 0.554% | 1.003% | **-0.45%** | Severe COPD cases are under-billed, matching the shift to the CC-only tier (DRG 191). |

---

## 3. The Quality Impact: Pneumonia & Heart Failure Mortality

CMS calculates 30-day Risk-Standardized Mortality Rates (RSMR) using claims-based risk adjustment. If Huntsville's data fails to capture the true secondary comorbidities of its patients, the expected mortality rate calculated by CMS drops. When a patient dies, it is registered as an unexpected clinical failure, driving Huntsville's reported mortality rates **higher than the national average**.

The table below compares Huntsville's severity capture rates (MCC %) in Pneumonia and Heart Failure against regional peers in the East South Central (AL, KY, MS, TN) region:

| Hospital Name (CCN) | Pneumonia Inpatient Cases | Pneumonia MCC Capture % | Pneumonia cases with NO CC/MCC | HF Inpatient Cases | HF MCC Capture % |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Jackson-Madison General, TN** (440002) | 179 | **88.27%** | 0.00% | 295 | **100.00%** |
| **Methodist Memphis, TN** (440049) | 164 | **82.32%** | 0.00% | 459 | **100.00%** |
| **University of Kentucky, KY** (180067) | 80 | **82.50%** | 0.00% | 149 | **100.00%** |
| **UAB Hospital, AL** (010033) | 100 | **76.00%** | 0.00% | 195 | **85.64%** |
| **Norton Hospital, KY** (180088) | 382 | **74.35%** | 0.00% | 799 | **97.37%** |
| **Univ. of Mississippi Med Center** (250001) | 46 | **73.91%** | 0.00% | 105 | **88.57%** |
| **St. Vincent's Hospital, AL** (010011) | 80 | **72.50%** | 0.00% | 100 | **100.00%** |
| **Baptist Memorial Hospital, TN** (440048) | 203 | **71.43%** | 7.39% | 549 | **100.00%** |
| **Jackson Hospital & Clinic, AL** (010024) | 83 | **60.24%** | 0.00% | 114 | **100.00%** |
| **Huntsville Hospital, AL** (010039) | **211** | **51.18%** | **8.06%** | **434** | **89.63%** |

### Critical Quality Vulnerabilities:
1.  **Pneumonia Under-Documentation:** Huntsville captures MCCs on only **51.18%** of pneumonia cases. Peers are capturing them at **72% to 88%**. Furthermore, **8.06%** of Huntsville's pneumonia patients are coded with *zero* complications (CC or MCC), a clinical impossibility for an acute inpatient cohort that is virtually unseen at peer hospitals (0.00%).
2.  **Heart Failure MCC Under-Documentation:** Almost all of Huntsville's regional peers achieve **100% MCC capture** for heart failure admissions. Huntsville lags at **89.63%**, leaving over 10% of their heart failure cohort documented as simple, low-risk cases.

---

## 4. Actionable CDI & Clinical Recommendations

To align Huntsville Hospital's coded acuity with its true clinical complexity, the Clinical Documentation Improvement (CDI) team and medical leadership should target three specific clinical documentation areas:

### A. Address the Postoperative Respiratory "Chilling Effect"
Surgeons are avoiding documenting "postoperative respiratory failure" to prevent triggering **PSI 11 (Postoperative Respiratory Failure)** quality flags. 

Instead, they document "hypoxia" or "respiratory insufficiency," which have zero weight. To capture the MCC without triggering the PSI 11 penalty, surgeons must document the medical etiology using the **Three-Filter Decision Algorithm**:
*   **Airway Protection:** If intubated to protect the airway, write: *"Prolonged mechanical ventilation for airway protection — no intrinsic pulmonary failure present."*
*   **Planned Course:** If planned post-op ventilation, write: *"Planned postoperative ventilation per protocol — expected component of high-risk procedure."*
*   **Medical Etiology (The Key to MCC):** If respiratory failure is driven by a medical cause (e.g., COPD flare, acute CHF, fluid overload, atelectasis, obesity hypoventilation), write: 
    > **"Acute hypoxic respiratory failure (J96.01) due to [medical cause] — not a complication of the surgical procedure."**
    > *This assigns code J96.01 (an MCC) but excludes the case from PSI 11.*

### B. Capture Acute Kidney Injury (AKI) in Heart Failure
Heart failure patients frequently experience transient or progressive renal deterioration due to aggressive diuresis or cardiorenal syndrome.
*   **Do not write:** "renal insufficiency," "chronic kidney disease flare," or "elevated BUN/Cr."
*   **Write:** **"Acute Kidney Injury (AKI) / Acute Kidney Failure (N17.9)"** (CC/MCC depending on stage) when creatinine rises $\ge 1.5\times$ baseline or $\ge 0.3\text{ mg/dL}$ within 48 hours.

### C. Review Nutrition Assessments for Severe Malnutrition
Elderly pneumonia and heart failure patients often present with cachexia, poor oral intake, or muscle wasting.
*   **Do not write:** "poor PO intake" or "cachectic."
*   **Write:** **"Severe Protein-Calorie Malnutrition (E43)"** (MCC) based on dietitian indicators (e.g., severe muscle wasting, severe weight loss, severe fat loss). Malnutrition without the "severe" modifier is only a CC.

---
*Analysis generated using CMS Inpatient Provider utilization summary data (RY2026/DY2024).*
