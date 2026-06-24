---
title: "DRG Payment Essentials"
procedure: null
route: /reference/drg-payments
drg-family: null
tier-structure: null
---

# DRG Payment Essentials — Physician & APP Reference


*Clinical Documentation Reference | CDI Program*

---

## What Is a DRG?

A **Diagnosis-Related Group (DRG)** is a fixed bundled payment CMS and commercial payers use to reimburse hospitals per episode of care — regardless of how many services are provided.

**Payment \= Hospital Base Rate × DRG Relative Weight (RW)**

Every DRG has a **Relative Weight** reflecting average resource intensity. The higher the RW, the higher the payment. DRG assignment is driven by: principal diagnosis, secondary diagnoses (CCs/MCCs), procedures performed, age, sex, and discharge status.

**MS-DRG** (Medicare Severity DRG) is used by Medicare/CMS and most commercial payers. **AP-DRG / APR-DRG** (All Patient Refined DRG, developed by 3M) is used by Medicaid, pediatric hospitals, and many state programs. APR-DRGs incorporate SOI and ROM directly into payment and are the basis for severity metrics in quality reporting.

---

## CCs and MCCs — How Secondary Diagnoses Raise Reimbursement

MS-DRGs use a **tripartite structure**: the same base condition splits into three DRGs depending on whether the patient's secondary diagnoses include an MCC, CC, or neither. Better documentation of complexity \= higher-weighted DRG \= higher payment.

| Tier | Label | Definition | Common Examples |
| :---- | :---- | :---- | :---- |
| **MCC** | Major Complication or Comorbidity | Highest complexity; significant additional resources | Sepsis, Respiratory failure, AKI stage 3, Malnutrition (severe), Encephalopathy, DIC |
| **CC** | Complication or Comorbidity | Moderate complexity; increases expected resource use | AKI stage 1–2, Hyponatremia, UTI, COPD exacerbation, Anemia (specify type), Pressure injury stage 1–2 |
| **None** | No CC/MCC | Lowest complexity; base payment only | Diagnoses not on CC/MCC list, or not sufficiently specific to qualify |

**Example:** Pneumonia with **sepsis** → DRG 870 (MCC, RW ≈ 1.80). Pneumonia with **CC only** → DRG 871 (RW ≈ 1.03). Pneumonia **without CC/MCC** → DRG 872 (RW ≈ 0.72). The right documentation can nearly **double reimbursement** for the same patient encounter.

---

## SOI & ROM — The APR-DRG Severity Scales

In the **APR-DRG system**, every discharge is scored on two independent 1–4 scales derived from secondary diagnoses, procedures, and patient characteristics. These scores drive payment in APR-DRG payers and quality risk-adjustment everywhere.

| Score | Level | SOI — Severity of Illness *(physiologic decompensation)* | ROM — Risk of Mortality *(probability of dying)* |
| :---- | :---- | :---- | :---- |
| 1 | Minor | Minimal organ dysfunction; routine course expected | Very low probability of death |
| 2 | Moderate | Limited but measurable organ dysfunction | Low-to-moderate probability |
| 3 | Major | Significant organ dysfunction; complex management required | Substantial probability of death without intervention |
| 4 | Extreme | Severe/catastrophic dysfunction; ICU-level care likely | High probability of death; high-risk procedures, multi-organ failure |

**SOI** and **ROM** are **independent** — a patient can have high ROM (e.g., widely metastatic cancer on comfort measures) with moderate SOI. Both are driven by secondary diagnoses. **ROM** is the primary basis for observed-vs-expected mortality quality metrics; accurate documentation protects hospitals from unfair mortality penalties.

---

## Expected Length of Stay

Each DRG carries a **geometric mean LOS** used as the benchmark. Hospitals are compared against this expected LOS for efficiency metrics.

**Case Mix Index (CMI)** — the average RW across all discharges — rises when higher-complexity DRGs are accurately captured, raising expected LOS and making the hospital's actual LOS look more appropriate. **Outlier cases** (stays substantially exceeding the threshold) qualify for supplemental day-rate payments.

**Key takeaway:** documenting complexity accurately raises expected LOS, makes your institution look efficient, and appropriately reimburses for resource-intensive care.

---

## High-Yield Documentation — What Coders Need to See

### Frequently Missed MCCs

- Sepsis (vs. "infection/sepsis picture")  
- Acute respiratory failure  
- Malnutrition — severe or moderate (specify)  
- Hypovolemic/distributive shock  
- Encephalopathy (specify: metabolic, septic, toxic)  
- AKI stage 3 / ESRD requiring emergent dialysis  
- DIC, ARDS, multi-organ failure

### Frequently Missed CCs

- AKI — specify stage 1, 2, or 3  
- Anemia — specify type (iron deficiency, blood-loss, etc.)  
- Hyponatremia (clinically significant)  
- COPD exacerbation / acute-on-chronic respiratory failure  
- Pressure injuries — document stage  
- Malnutrition — moderate  
- UTI with documented causative organism

### Documentation Principles

- **Be specific:** "Sepsis" not "infection/sepsis picture"  
- **Link conditions:** "AKI due to sepsis" — cause matters  
- **Stage everything:** AKI, heart failure, pressure injuries  
- **State acuity:** "acute" vs. "chronic" vs. "acute-on-chronic"  
- **Respond to queries:** CDI queries must be answered yes/no/clinically undetermined  
- **Document all conditions:** even if "also being managed" — if you're treating it, list it

---

**Your documentation is the clinical record AND the billing record.** Specificity, linkage, and acuity determine whether a CC becomes an MCC, whether SOI rises from 2 to 3, and whether expected mortality is risk-adjusted appropriately. CDI specialists are your partners — respond to their queries.  
