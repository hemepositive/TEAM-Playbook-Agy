# Common Secondary Diagnoses (CCs & MCCs) by DRG for the CMS TEAM Model

This document serves as a comprehensive clinical and technical guide for Clinical Documentation Improvement (CDI) teams and surgeons. It details the most common, high-impact secondary diagnoses (Complications or Comorbidities [CCs] and Major Complications or Comorbidities [MCCs]) across the five surgical episode categories under the CMS **Transforming Episode-Based Payment (TEAM)** model.

---

## 1. Context of CMS IPPS Files & Billing Counts

During your analysis, you likely noted that the downloaded **Tables 6A–6J.2** and **Table 6P** files do not contain case counts or billing frequencies. 

### Why Case Counts are Not in Your Downloaded Files
* **Tables 6A–6K** are **severity classification lists**. They define which ICD-10-CM codes are CCs or MCCs (e.g., Table 6I lists MCCs, Table 6J lists CCs, Table 6K lists exclusions), but they do not track billing volumes.
* **Table 6P** documents **MS-DRG Grouper logic modifications** from the previous fiscal year.
* **FY 2026 Severity Designation Updates:** For FY 2026, CMS did not propose or finalize any changes to the severity designation (CC/MCC status) of existing diagnosis codes. Because no severity updates were made, CMS did not publish a dedicated **"CC/MCC Analysis Frequency" supplementary file** for FY 2026.

### How to Retrieve Objective National Case Counts (FY 2025 & Prior)
To obtain exact national counts of how often specific secondary diagnoses were billed under Medicare, you can extract data from prior years' rulemaking cycles (such as **FY 2025** or **FY 2024**) when CMS conducted comprehensive reviews.

> [!TIP]
> **Key Prior Year Resources:**
> * **FY 2025 Final Rule CC/MCC Analysis Supplementary Files:** Published on the CMS website under the FY 2025 IPPS Final Rule page. It contains the Excel spreadsheet `FY_25_FR_CC_MCC_Frequency.xlsx` which details the exact national count of cases where every secondary diagnosis code was billed.
> * **AHRQ HCUPnet:** A free, interactive portal (hcupnet.ahrq.gov) aggregating nationwide discharge data where you can query specific MS-DRGs and display their most frequent secondary diagnoses.
> * **CMS Medicare Inpatient Hospitals Public Use File (PUF):** Aggregate data by provider and MS-DRG available on data.cms.gov.

---

## 2. TEAM Model — Five Surgical Episode Categories Reference

The CMS TEAM model operates under a **2-tier** or **3-tier** severity structure depending on the procedure family:

| # | Procedure Family | MS-DRG Range | Severity Tier Structure | Impact of CC vs. MCC |
|---|---|---|---|---|
| **1** | **Lower Extremity Joint Replacement (LEJR)** | 469, 470, 521, 522 | **2-Tier** (MCC / None) | A CC alone does **not** change the DRG. Only an MCC shifts payment. |
| **2** | **Surgical Hip & Femur Fracture Treatment (SHFFT)** | 480, 481, 482 | **3-Tier** (MCC / CC / None) | Both CC and MCC shift payment levels. |
| **3** | **Spinal Fusion** | 402, 426–430, 447–451, 471–473 | **Varies by Type** (2-Tier & 3-Tier) | Restructured in FY2025; fusion levels and region dictate base DRG before CC/MCC. |
| **4** | **Coronary Artery Bypass Graft (CABG)** | 231–236 | **2-Tier** (MCC / None) | A CC alone does **not** change the DRG. Only an MCC shifts payment. |
| **5** | **Major Bowel Procedure** | 329, 330, 331 | **3-Tier** (MCC / CC / None) | Both CC and MCC shift payment levels. |

---

## 3. Top CCs and MCCs by Procedure Category

Below are the most common secondary diagnoses for each category, aligned with the latest clinical definitions.

### 🦴 1. Lower Extremity Joint Replacement (LEJR)

> [!WARNING]
> **2-Tier Alert:** LEJR is a 2-tier DRG. Documenting a CC (e.g., CKD stage 3 or uncomplicated diabetes) will **not** increase reimbursement or change the DRG from 470 to 469. Providers must document **MCC-level** conditions to shift the payment tier.

#### Common High-Impact MCCs (Shift case from 470/522 to 469/521)
| ICD-10 Code | Description | Clinical Context & Documentation Pearl |
|---|---|---|
| **A41.9** | Sepsis, unspecified organism | Query if patient presents with systemic inflammatory response due to suspected infection. Avoid documenting "urosepsis" or "bacteremia." |
| **J96.01** | Acute respiratory failure with hypoxia | Post-op hypoxia requiring high-flow oxygen, BiPAP, or intubation. Must document "failure," not just "hypoxia." |
| **N17.9** | Acute kidney failure, unspecified | Acute Kidney Injury (AKI) with creatinine elevation $\ge 3\times$ baseline or sudden drop in urine output. |
| **E43** | Unspecified severe protein-calorie malnutrition | Document when patient has severe muscle wasting, albumin < 2.0, or severe weight loss. "Malnutrition" alone is only a CC. |
| **G93.41** | Metabolic encephalopathy | Common post-operative delirium/altered mental status due to systemic factors (anesthesia, electrolytes). |
| **I50.23** | Acute on chronic systolic heart failure | Worsening chronic heart failure with clinical volume overload post-op. |

#### Common CCs (Improve SOI/ROM, but DO NOT shift DRG)
* **D62** (Acute posthemorrhagic anemia) — Common post-op drop in hemoglobin requiring transfusion.
* **I48.91** (Unspecified atrial fibrillation) — Document history of afib or new-onset post-op.
* **N18.30** (Chronic kidney disease, stage 3 unspecified) — Capture baseline kidney dysfunction.

---

### 🦿 2. Surgical Hip & Femur Fracture Treatment (SHFFT)

> [!NOTE]
> **3-Tier Opportunity:** Both CC and MCC drive payment shifts. Because SHFFT patients are typically elderly and admitted emergently due to a fall, pre-existing cognitive, nutritional, and systemic conditions are highly prevalent but frequently undocumented.

#### Common High-Impact MCCs (Shift case to DRG 480)
| ICD-10 Code | Description | Clinical Context & Documentation Pearl |
|---|---|---|
| **G93.41** | Metabolic encephalopathy | Elderly patients with post-fracture/post-op delirium. Query if documented as "altered mental status" or "delirium." |
| **E43** | Unspecified severe protein-calorie malnutrition | Very common in frail elderly. Document exact severity to capture MCC. |
| **J96.01** | Acute respiratory failure with hypoxia | Worsening pulmonary status post-operatively. |
| **G30.9** | Alzheimer's disease, unspecified | When severe dementia/Alzheimer's is active and contributed to the fall/admission. |
| **F02.80** | Dementia in other diseases without behavioral disturbance | Secondary dementia causing clinical complexity. |
| **N17.9** | Acute kidney failure, unspecified | Dehydration/contrast/blood loss causing post-fracture AKI. |

#### Common CCs (Shift case from 482 to 481)
| ICD-10 Code | Description | Clinical Context & Documentation Pearl |
|---|---|---|
| **D62** | Acute posthemorrhagic anemia | Significant blood loss from fracture hematoma and surgery. |
| **E46** | Unspecified protein-calorie malnutrition | Dietitian-documented moderate malnutrition. |
| **E87.1** | Hypo-osmolality and hyponatremia | Extremely common electrolyte imbalance in elderly fall patients. |
| **M81.0** | Age-related osteoporosis without current pathological fracture | Document baseline bone density status. |

---

### 🧠 3. Spinal Fusion

> [!NOTE]
> Spinal fusion families are complex. The number of levels fused and approach (ant/post vs. cervical vs. lumbar) determines the base DRG. Capturing CCs and MCCs then refines the case within those families.

#### Common High-Impact MCCs
| ICD-10 Code | Description | Clinical Context & Documentation Pearl |
|---|---|---|
| **M46.20** | Osteomyelitis of vertebra, site unspecified | Active vertebral infection necessitating fusion. |
| **J96.01** | Acute respiratory failure with hypoxia | Post-operative respiratory distress, common in anterior cervical fusions. |
| **E43** | Unspecified severe protein-calorie malnutrition | Frail pain patients on chronic opioids often have undocumented severe malnutrition. |
| **G93.41** | Metabolic encephalopathy | Worsening mental status post-op due to medication/anesthesia. |
| **G35** | Multiple sclerosis | Pre-existing MS complicating recovery and care. |

#### Common CCs
| ICD-10 Code | Description | Clinical Context & Documentation Pearl |
|---|---|---|
| **D62** | Acute posthemorrhagic anemia | Major blood loss during multi-level fusions. |
| **F11.20** | Opioid dependence, uncomplicated | Document history of chronic opioid therapy for back pain. |
| **N18.30** | Chronic kidney disease, stage 3 unspecified | Baseline renal insufficiency. |
| **E87.1** | Hyponatremia | Common post-op electrolyte abnormality. |

---

### ❤️ 4. Coronary Artery Bypass Graft (CABG)

> [!WARNING]
> **2-Tier Alert:** CABG is 2-tier. Only MCCs shift the payment. CABG patients are highly complex, and capturing specific cardiac MCCs is vital.

#### Common High-Impact MCCs (Shift case to DRGs 231, 233, or 235)
| ICD-10 Code | Description | Clinical Context & Documentation Pearl |
|---|---|---|
| **I21.4** | Non-ST elevation (NSTEMI) myocardial infarction | Document if the patient had an active MI leading to the bypass. |
| **J96.01** | Acute respiratory failure with hypoxia | Post-pump pulmonary complications requiring prolonged mechanical ventilation or high-flow oxygen. |
| **N17.0** | Acute kidney failure with tubular necrosis | Contrast-induced or pump-induced AKI progressing to ATN. |
| **I27.20** | Pulmonary hypertension, unspecified | Severe pre-operative pulmonary hypertension. |
| **I50.21** | Acute systolic heart failure | Cardiogenic shock or worsening acute heart failure post-bypass. |
| **D65** | Disseminated intravascular coagulation | Post-bypass coagulopathy/bleeding disorder. |

#### Common CCs (DO NOT shift DRG, but improve SOI/ROM)
* **I48.11** (Longstanding persistent atrial fibrillation) — New-onset or chronic afib post-CABG.
* **E11.65** (Type 2 diabetes with hyperglycemia) — Crucial to document for post-op infection prevention protocols.
* **CKD Stage 3/4** (N18.3 / N18.4) — Baseline renal disease.

---

### 🧫 5. Major Bowel Procedure

> [!NOTE]
> **3-Tier Opportunity:** Bowel procedures have a wide payment distribution across all three tiers. Patients often present with systemic illness (perforation, sepsis, cancer) which carries high comorbidity capture opportunities.

#### Common High-Impact MCCs (Shift case to DRG 329)
| ICD-10 Code | Description | Clinical Context & Documentation Pearl |
|---|---|---|
| **A41.9** | Sepsis, unspecified organism | Abdominal sepsis due to bowel perforation or anastomotic leak. |
| **R65.21** | Severe sepsis with septic shock | Sepsis requiring vasopressors. |
| **K63.1** | Perforation of intestine (non-traumatic) | Acute bowel perforation requiring emergent resection. |
| **C18.9** | Malignant neoplasm of colon, unspecified | Colon cancer when billed as a secondary diagnosis complicating the procedure. |
| **E43** | Unspecified severe protein-calorie malnutrition | Severe weight loss/muscle wasting due to bowel obstruction or chronic IBD. |
| **J96.01** | Acute respiratory failure with hypoxia | Post-operative pulmonary failure/ARDS. |

#### Common CCs (Shift case from 331 to 330)
| ICD-10 Code | Description | Clinical Context & Documentation Pearl |
|---|---|---|
| **Z93.3** | Colostomy status | Document when an ostomy is created or exists. |
| **Z93.2** | Ileostomy status | Creation of temporary/permanent loop ileostomy. |
| **D62** | Acute posthemorrhagic anemia | Worsening anemia due to GI bleeding or intra-op loss. |
| **E46** | Unspecified protein-calorie malnutrition | Moderate nutritional impairment. |

---

## 4. Methodology to Query Prior Year Billing Data

Since FY 2026 did not have updates, you can use the **FY 2025** CMS CC/MCC frequency data to obtain objective case counts.

### Option A: Manual Query via AHRQ HCUPnet
1. Visit **[hcupnet.ahrq.gov](https://hcupnet.ahrq.gov/)**.
2. Select **National Statistics on Inpatient Stays**.
3. Choose **Analyze MS-DRGs**.
4. Input your target DRG (e.g., `470` for Major Joint Replacement without MCC).
5. Under the data options, select **Most Common Secondary Diagnoses** to display the top 20 codes billed nationwide, complete with case percentages and volumes.

### Option B: Automated Python Script to Parse CMS FY 2025 Frequency Data
You can run this Python script on your system to download the FY 2025 IPPS Final Rule Selected Data Files, extract the CC/MCC frequency spreadsheet, and find the exact nationwide Medicare case count for any ICD-10 code.

```python
import os
import urllib.request
import zipfile
import pandas as pd

# URLs for FY 2025 IPPS Final Rule Selected Data Files (which contain CC/MCC analysis)
url = "https://www.cms.gov/files/zip/fy-2025-ipps-final-rule-selected-data-files.zip"
zip_name = "fy-2025-ipps-final-rule-selected-data-files.zip"
extract_dir = "cms_fy2025_data"

# 1. Download Zip File
if not os.path.exists(zip_name):
    print(f"Downloading {url}...")
    urllib.request.urlretrieve(url, zip_name)
    print("Download completed.")

# 2. Extract Zip File
if not os.path.exists(extract_dir):
    print("Extracting files...")
    with zipfile.ZipFile(zip_name, 'r') as zip_ref:
        zip_ref.extractall(extract_dir)
    print("Extraction completed.")

# 3. Locate and load the CC/MCC Frequency Spreadsheet
# Typically named something like: FY_25_FR_CC_MCC_Frequency.xlsx or similar
# Let's search inside the directory for the excel files
excel_files = []
for root, dirs, files in os.walk(extract_dir):
    for file in files:
        if file.endswith(".xlsx") and "cc" in file.lower() and "frequency" in file.lower():
            excel_files.append(os.path.join(root, file))

if not excel_files:
    # Try finding any spreadsheet in the folders
    for root, dirs, files in os.walk(extract_dir):
        for file in files:
            if file.endswith(".xlsx"):
                excel_files.append(os.path.join(root, file))

print(f"Found Excel files for analysis: {excel_files}")

if excel_files:
    target_excel = excel_files[0]
    print(f"Loading {target_excel}...")
    
    # Read the sheet list
    xls = pd.ExcelFile(target_excel)
    print(f"Sheets: {xls.sheet_names}")
    
    # Let's read the main sheet and look for the ICD-10 codes of interest
    df = pd.read_excel(target_excel, sheet_name=xls.sheet_names[0])
    
    # Clean the column names and search for codes (e.g., N17.9, J96.01, E43)
    print("First 5 rows of data:")
    print(df.head())
else:
    print("No matching Excel files containing frequency data found in the zip.")
```
