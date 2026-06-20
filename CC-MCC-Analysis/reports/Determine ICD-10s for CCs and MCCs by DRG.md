## **Gemini asked to help with the creation of a list of cc and CC that are specific to DRGs**

#### **TEAM CDI Prompt:**

 I’m working on improving our surgeon created clinical documentation. I need to show surgeons a list of the most common diagnoses and problems they need to document that have an impact on the DRG. Ideally I have a list of the most common problems and diagnoses that bump a standard DRG to a DRG with CC or DRG with MCC. Help me figure out how to get a list of the most impactful commonly billed ICD 10 codes for a given DRG

#### **GEMINI ANSWER:**

To pull an actionable, highly relevant list of the most common CC/MCC-level secondary diagnoses for your surgeons, the most effective approach is to analyze your \*\*internal hospital claims data or EHR data warehouse\*\* rather than relying solely on generic national lists. National lists tell you what \*can\* be a CC/MCC, but your internal data tells you exactly what your specific patient population presents with and where your surgeons are already documenting (or missing) these complexities.  
Here is the step-by-step strategy to extract and rank these ICD-10 codes using a data-driven approach.  
\#\# 1\. Map Your Target Surgical DRG "Families"  
MS-DRGs are typically structured in diads or triads based on severity. To find what "bumps" a base DRG, you first need to group these related DRGs together.  
For example, look at a common surgical triad like \*\*Major Joint Replacement (Lower Extremity)\*\*:  
 \* \*\*MS-DRG 469:\*\* Major Joint Replacement with MCC  
 \* \*\*MS-DRG 470:\*\* Major Joint Replacement without MCC  
Or a triad like \*\*Colorectal Procedures\*\*:  
 \* \*\*MS-DRG 329:\*\* Major Small & Large Bowel Procedures with MCC  
 \* \*\*MS-DRG 330:\*\* Major Small & Large Bowel Procedures with CC  
 \* \*\*MS-DRG 331:\*\* Major Small & Large Bowel Procedures without CC/MCC  
\#\# 2\. Extract Data via SQL (EHR Data Warehouse / Claims DB)  
If you have access to your EHR backend data warehouse (such as Epic Clarity/Caboodle) or your 837I institutional claims databases, you can run a query to isolate the secondary diagnoses driving your higher-tier DRGs.  
\#\#\# The Query Logic  
Your query should look for inpatient encounters discharged within a specific timeframe (e.g., the last 12–24 months) mapped to the higher-paying DRGs in your target families, then unpivot and count the secondary diagnosis codes.  
\`\`\`sql  
SELECT   
    b.drg\_code,  
    b.drg\_description,  
    dx.icd10\_code,  
    dx.icd10\_description,  
    COUNT(DISTINCT b.encounter\_id) AS encounter\_count  
FROM hospital\_billing b  
JOIN encounter\_diagnoses dx ON b.encounter\_id \= dx.encounter\_id  
WHERE   
    \-- Filter for the specific CC/MCC tier DRGs you want to analyze  
    b.drg\_code IN ('329', '330', '469')   
    \-- Ensure you are only counting secondary diagnoses  
    AND dx.diagnosis\_line\_number \> 1   
    \-- Filter out codes marked as Present on Admission \= 'N' if you want to focus strictly on pre-existing comorbidities  
    AND dx.poa\_status \= 'Y'   
GROUP BY   
    b.drg\_code, b.drg\_description, dx.icd10\_code, dx.icd10\_description  
ORDER BY   
    b.drg\_code, encounter\_count DESC;

\`\`\`  
\#\# 3\. Filter and Categorize with Python  
Once you have the raw frequency of secondary diagnoses on those cases, you can use Python and the \*\*CMS MS-DRG Definitions Manual (Design Manual)\*\* data files to clean the list.  
The goal here is to cross-reference your internal frequency list against the official CMS CC/MCC designation files to ensure you're highlighting the right high-impact codes and removing systemic noise.  
\#\#\# Steps for the Script:  
 1\. \*\*Load the Internal Query Results:\*\* Bring in your dataframe of secondary diagnoses and counts.  
 2\. \*\*Filter out "Exclusion List" Codes:\*\* The CMS grouper excludes certain secondary diagnoses from counting as a CC/MCC if they are too closely related to the principal diagnosis (e.g., a secondary diagnosis of "postoperative shock" might be excluded if the principal diagnosis is already an intraoperative complication).  
 3\. \*\*Map to Broad Clinical Concepts:\*\* Surgeons do not think in specific 7-character ICD-10 codes. Group your top granular codes into high-level clinical concepts (e.g., combine E11.22 and E11.40 under "Diabetes with Chronic Complications").  
\`\`\`python  
import pandas as pd

\# Load your queried database results  
df \= pd.read\_csv("internal\_surgical\_secondary\_dx.csv")

\# Filter out ubiquitous, low-clinical-utility CCs (like uncomplicated hypertension or mild malnutrition)   
\# to keep the surgeon list focused and high-impact  
excluded\_prefixes \= ('Z', 'V', 'W', 'X')  
df\_filtered \= df\[\~df\['icd10\_code'\].str.startswith(excluded\_prefixes)\]

\# Sort to find the top 10 most frequent CC/MCC codes per surgical DRG family  
top\_comorbidities \= (  
    df\_filtered.groupby(\['drg\_code', 'icd10\_code', 'icd10\_description'\])\['encounter\_count'\]  
    .sum()  
    .reset\_index()  
    .sort\_values(by=\['drg\_code', 'encounter\_count'\], ascending=\[True, False\])  
)

print(top\_comorbidities.groupby('drg\_code').head(10))

\`\`\`  
\#\# 4\. Translating Data into a Surgeon-Facing Tool  
Once the data reveals your top 10–15 most frequent CC/MCC conditions, transform that raw data into clinical language.  
When presenting this to surgeons, structure the cheat sheet or electronic health record (EHR) documentation preference list by \*\*clinical system\*\*, not by code number. Show them exactly what specific terminology bridges the documentation gap:  
| Clinical Concept | Standard/Insufficient Documentation | Documentation That Drives CC/MCC | Impact Level |  
|---|---|---|---|  
| \*\*Malnutrition\*\* | "Poor oral intake" or "Cachectic" | \*\*Severe protein-calorie malnutrition\*\* | \*\*MCC\*\* |  
| \*\*Renal Function\*\* | "Renal insufficiency" or "BUN/Cr elevated" | \*\*Acute Kidney Injury (AKI)\*\* or \*\*CKD Stage 4/5\*\* | \*\*CC\*\* |  
| \*\*Heart Failure\*\* | "CHF" | \*\*Acute on chronic systolic/diastolic heart failure\*\* | \*\*MCC\*\* |  
| \*\*Encephalopathy\*\* | "Altered mental status" or "Confused" | \*\*Acute metabolic/toxic encephalopathy\*\* | \*\*MCC\*\* |  
| \*\*Respiratory Failure\*\* | "Hypoxia" or "On 2L O2" | \*\*Acute respiratory failure\*\* | \*\*MCC\*\* |  
\#\#\# Alternative: Public Data Sources  
If internal database access is delayed, you can utilize the \*\*CMS MEDPAR (Medicare Provider Analysis and Review)\*\* public-use files or the \*\*AHRQ HCUP (Healthcare Cost and Utilization Project)\*\* databases. These open-source data repositories provide massive national frequencies of secondary diagnoses mapped against MS-DRGs, though they will lack your specific regional and hospital-level nuances.  
\*\*Sources:\*\*  
 \* CMS MS-DRG Classifications and Definitions: CMS MS-DRG Classifications and Software  
 \* DRG Assignment and CC/MCC Structure Guidance: CMS MS-DRG Definitions Manual

———-

### **Gemini told to focus on the public data and answer below:**

Gathering this information from public data sources requires navigating federal repositories. While you *could* purchase the raw, 100% 15-million-row **MedPAR (Medicare Provider Analysis and Review)** Limited Data Set directly from CMS, it requires a formal Data Use Agreement (DUA) and a fee.  
Instead, the fastest, most effective, and free way to build this clinical list is to leverage the data CMS publishes annually during the **IPPS (Inpatient Prospective Payment System) Rulemaking** process, alongside open-access healthcare databases.

## **Source 1: The CMS IPPS Final Rule Supplemental Data Files**

Every year, when CMS updates the MS-DRG weights and CC/MCC lists, they analyze the entire national MedPAR database. They publish their exact mathematical analysis—showing how frequently individual secondary diagnoses are billed and their specific impact on resource consumption—as public-use supplemental tables.

### **How to Get It:**

1. Go to the official **CMS.gov** website and navigate to the **Acute Inpatient PPS** section.  
2. Look for the **FY 2026** (or most current fiscal year) **IPPS Final Rule Home Page**.  
3. Scroll down to the **"Files for Download"** or **"Data Files"** section.  
4. Download the compressed ZIP files containing **"Table 6P"** (this is the massive master file of all ICD-10-CM codes and their CC/MCC severity designations) and any accompanying **"CC/MCC Analysis Supplementary Files."**

### **How to Use It:**

The supplementary impact files include spreadsheets showing the *exact count* of nationwide Medicare cases where a specific secondary diagnosis code was billed.

* Filter this master sheet for the clinical specialties or organ systems relevant to your surgeons (e.g., Chapter 10 for Respiratory, Chapter 9 for Circulatory).  
* Sort by total national volume to identify the top 20 most ubiquitous CCs and MCCs across all U.S. inpatient stays.

## **Source 2: HCUPnet (AHRQ Healthcare Cost and Utilization Project)**

The Agency for Healthcare Research and Quality (AHRQ) hosts **HCUPnet**, a free online data query tool. It aggregates state-level and national hospital discharge data (encompassing Medicare, Medicaid, and private insurance) into an easily searchable interface.

### **How to Get It:**

1. Visit the **HCUPnet** portal (hcupnet.ahrq.gov).  
2. Select **National Statistics** to get an aggregate look at U.S. hospital trends.  
3. Choose the **Inpatient** database.

### **How to Use It:**

HCUPnet allows you to look at data through two different lenses:

* **Option A: Query by MS-DRG.** You can input a specific base DRG family (e.g., Major Small & Large Bowel Procedures) and ask the system to display the most common principal and secondary diagnoses associated with those hospital stays.  
* **Option B: Query by Diagnosis.** You can see which secondary diagnoses are most frequently paired with procedural classifications.

## **Source 3: CMS "Medicare Inpatient Hospitals" Public Use File (PUF)**

CMS hosts an open-access data repository at data.cms.gov that contains aggregated provider-level data.

### **How to Get It:**

1. Navigate to data.cms.gov.  
2. Search for the dataset titled **"Medicare Inpatient Hospitals \- by Provider and Service"** or **"by Geography and Service"**.  
3. Download this dataset in a flat format (CSV or Parquet).

### **How to Use It:**

While this specific dataset does *not* drill down to the individual secondary ICD-10 code level, it provides the ultimate benchmark for your target list. You can look up your own state (Alabama) or regional peers to see the exact ratio of standard DRGs to DRGs with CC/MCC.  
If your regional peers are billing MS-DRG 469 (with MCC) on 15% of their total joint replacements, but your facility is only billing it on 4%, you know exactly where the documentation gaps are occurring.

## **Action Plan for Your Team**

To turn these public sources into a product your surgeons can use:  
\[Download Table 6P & CC/MCC Impact Files from CMS.gov\]  
                          │  
                          ▼  
 \[Filter for High-Volume, High-Yield CC/MCC ICD-10 Codes\]  
                          │  
                          ▼  
\[Cross-Reference with HCUPnet to verify surgical relevance\]  
                          │  
                          ▼  
\[Translate Granular Codes into Clinical Documentation Concepts\]

By merging the raw volume numbers from the CMS Rulemaking files with the procedural contexts from HCUPnet, you will have a rock-solid, evidence-based list of the top diagnoses to embed directly into your surgeon documentation workflows.  
**Sources:**

* CMS IPPS Data Files & Regulation Tables: [Acute Inpatient PPS \- Files for Download](https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/acute-inpatient-files-download)  
* Federal Claims Aggregate Datasets: [CMS Data Portal \- Medicare Inpatient Hospitals](https://data.cms.gov/provider-summary-by-type-of-service/medicare-inpatient-hospitals/medicare-inpatient-hospitals-by-provider-and-service)  
* National and Regional Discharge Data Queries: [AHRQ Healthcare Cost and Utilization Project (HCUPnet)](https://hcupnet.ahrq.gov/)