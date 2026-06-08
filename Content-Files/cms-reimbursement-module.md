---
title: How CMS Pays Hospitals — The Reimbursement Fundamentals
slug: cms-reimbursement
route: /fundamentals/reimbursement
category: fundamentals
audience: [attending, surgeon, app]
last-updated: 2026-06
source: CMS IPPS Final Rule, MS-DRG V43.0, CMS TEAM Model Overview
---

<!-- ============================================================
  SECTION: PageHero
  Component hint: <PageHero> — module title, category tag,
  one-line description
  ============================================================ -->

# How CMS Pays Hospitals — The Reimbursement Fundamentals

**Category:** Fundamentals · CMS Inpatient Payment

You affect how much your hospital gets paid on every case you document. This module explains the mechanics — plainly, without billing jargon — so that the documentation guidance throughout this app makes sense at a financial level.

---

<!-- ============================================================
  SECTION: LevelBadge
  Component hint: <LevelBadge level="101"> — visual tier indicator
  rendered before the 101 section header
  ============================================================ -->

## 101 — The Core Concept

### One payment. Set in advance. Based on your diagnosis list.

When a Medicare patient is discharged from the hospital, CMS does not reimburse the hospital line-by-line for every service, medication, or day of care. Instead, CMS pays a **single flat amount** determined by the patient's principal diagnosis and the secondary conditions documented during the stay.

That payment amount is set before the bill is submitted. It does not go up because the patient stayed longer, consumed more resources, or required more nursing care. It is fixed at the time of coding — and coding is based entirely on physician documentation.

> [PEARL]
> **The hospital's revenue on your case is determined by what you write, not by what you do.** A technically excellent surgery documented in vague language pays the same as a routine case. A complex, resource-intensive admission with multiple comorbidities pays at the lowest tier if those comorbidities are not named.

---

### What is a DRG?

DRG stands for **Diagnosis-Related Group**. It is the classification system CMS uses to assign each inpatient case to a payment bucket.

Every inpatient Medicare discharge is assigned exactly one MS-DRG. The DRG is determined by:

1. **The principal diagnosis** — the condition primarily responsible for the admission
2. **Secondary diagnoses** — the additional conditions present during the stay
3. **Procedures performed** — particularly major surgical procedures
4. **Patient age and discharge status** in some cases

Each DRG has a fixed **relative weight** — a number that reflects how resource-intensive cases in that group typically are. CMS multiplies that weight by the hospital's base payment rate (which varies by geography, teaching status, and other adjustments) to produce the final payment.

The physician controls the DRG through documentation. That is the entire mechanism.

---

### The two levers: CC and MCC

Within most DRG families, the presence or absence of secondary diagnoses moves the case between payment tiers. There are two categories that matter:

**CC — Complication or Comorbidity.** A secondary diagnosis that adds clinical complexity to the case. When properly documented, a CC moves the case to a higher-paying DRG tier in a 3-tier family.

**MCC — Major Complication or Comorbidity.** A secondary diagnosis representing the highest level of clinical complexity. An MCC moves the case to the top payment tier in both 2-tier and 3-tier families.

The key phrase in both definitions is *when properly documented*. A condition the patient has is not a CC or MCC until the physician names it in the medical record with the specificity required for the coder to assign the correct ICD-10 code.

> [NOTE]
> **The coder cannot infer the diagnosis.** A creatinine of 2.3 in the chart is not AKI. A sodium of 124 is not hyponatremia. A BNP of 1,800 is not heart failure. The physician must write the diagnosis — in the Assessment, the progress notes, or the discharge summary — before it can be coded and counted.

---

### The payment tiers in plain terms

Most DRG families used in TEAM fall into one of two structures:

**2-tier:** The case pays at the base rate without any CC or MCC. A single MCC moves it to a higher rate. A CC alone changes nothing. LEJR and CABG work this way.

**3-tier:** The case pays at the base rate without any CC or MCC. A CC moves it to a middle tier. An MCC moves it to the top tier. SHFFT, Major Bowel, and cervical/multilevel spinal fusion work this way.

The dollar difference between tiers varies by DRG family but is typically **$5,000–$22,000 per case**. That difference is entirely determined by what the physician documents.

---

<!-- ============================================================
  SECTION: LevelBadge
  Component hint: <LevelBadge level="201"> — visual tier indicator
  ============================================================ -->

## 201 — The Deeper Mechanics

### How the payment number is actually calculated

The payment for any Medicare inpatient case follows this formula:

```
Payment = DRG Relative Weight × Hospital Base Rate
```

The **DRG relative weight** is assigned by CMS annually through the IPPS Final Rule. It reflects the average cost of treating a patient in that DRG relative to the average Medicare inpatient case. A weight of 1.0 means the case is expected to cost the national average. A weight of 3.5 means it is expected to cost 3.5× the average.

The **hospital base rate** is not the same at every hospital. CMS adjusts it by:

- **Wage index** — labor costs vary by market; hospitals in high-wage areas receive a higher adjusted rate
- **DSH (Disproportionate Share Hospital) adjustment** — additional payment for hospitals serving high proportions of low-income patients
- **IME (Indirect Medical Education) adjustment** — additional payment for teaching hospitals
- **Outlier payments** — for extraordinarily high-cost cases that exceed a threshold, CMS pays a portion of the excess

This means the same DRG produces different dollar amounts at different hospitals. The approximate payment figures shown throughout this app are national averages — your hospital's actual payment will vary based on its specific rate adjustments.

> [NOTE]
> **What the payment figures in this app represent:** The dollar amounts shown for each DRG tier (e.g., DRG 469 ~$23,500) are national average approximations. Your hospital's finance team can provide actual contract rates. The *delta between tiers* — the financial gap created by a CC or MCC — is the more operationally meaningful number, and it scales with your hospital's base rate.

---

### What CC and MCC actually mean in the coding system

The CC/MCC designation for any ICD-10 code is determined annually by CMS and published in the MS-DRG Definitions Manual. It is not a clinical judgment — it is a list. A given diagnosis code either is or is not a CC or MCC in a given fiscal year, full stop.

What makes this consequential for documentation:

**Specificity determines the code, and the code determines the tier.**

Many conditions have multiple ICD-10 codes that map to different CC/MCC levels depending on how specifically the condition is documented. Examples from TEAM procedures:

| Physician writes | ICD-10 assigned | CC/MCC status |
|------------------|-----------------|---------------|
| "Heart failure" | I50.9 | CC |
| "Acute systolic heart failure" | I50.21 | **MCC** |
| "Delirium" | F05 | CC |
| "Metabolic encephalopathy" | G93.41 | **MCC** |
| "Malnutrition" | E46 | CC |
| "Severe protein-calorie malnutrition" | E43 | **MCC** |
| "Anemia" | D64.9 | Not a CC |
| "Acute posthemorrhagic anemia" | D62 | **CC** |
| "Obstructive sleep apnea" | G47.33 | CC |
| "Obesity hypoventilation syndrome" | E66.2 | **MCC** |
| "Morbid obesity" | E66.01 | **CC** + HCC 48 |

In every case above, the clinical condition is the same. The documentation language is different. The payment consequence is significant.

---

### TEAM adds a second layer: Risk-adjusted episode payment

The standard DRG payment described above is the foundation. The TEAM model adds a separate accountability structure on top of it.

Under TEAM, CMS calculates a **target price** for each surgical episode — a 30-day window that begins with the inpatient admission and extends through post-acute care. The hospital is then compared against that target on actual spending.

The target price is **risk-adjusted** — meaning CMS raises the expected cost benchmark for patients who are sicker going in. The mechanism for that risk adjustment is the **HCC (Hierarchical Condition Category)** system.

**HCCs are chronic condition categories** used to estimate a patient's expected cost. Each HCC has a risk weight. CMS sums the patient's HCC risk weights to produce a **risk score**. A higher risk score produces a higher target price — meaning the hospital is given more room before it is considered to have exceeded expected spending.

The critical documentation connection: HCC capture depends on physician documentation of active chronic conditions. An underdocumented HCC produces a lower risk score, which produces a lower target price, which increases the probability that the hospital is penalized for costs it was always going to incur.

> [PEARL]
> **The DRG affects what CMS pays the hospital for the inpatient stay. The HCC affects what CMS expects the hospital to spend across the full 30-day episode.** Both are directly controlled by physician documentation. Both matter in the TEAM model. Neither is automatic.

---

### Why commercial payers work differently — and why CMS is still the foundation

Commercial insurers — Blue Cross, Aetna, United, Cigna, and others — negotiate payment contracts with hospitals independently. Those contracts may use:

- **MS-DRG or APR-DRG payment** — similar to CMS, with negotiated multipliers applied to DRG weights
- **Per diem rates** — a flat daily rate regardless of diagnosis, sometimes with case-mix adjustments
- **Percent of charges** — a percentage of the hospital's billed charges, regardless of DRG
- **Bundled or episodic payments** — similar to TEAM, often used for high-volume elective procedures

Because commercial contracts vary, the documentation impact on commercial revenue is more difficult to quantify at the bedside. However, two things remain consistent:

First, **APR-DRG (All Patient Refined DRG)** — used by many commercial payers and state Medicaid programs — is directly affected by the same specificity principles as MS-DRG. APR-DRGs add two additional dimensions: **Severity of Illness (SOI)** and **Risk of Mortality (ROM)**, both scored 1–4. Higher SOI and ROM produce better contract performance on quality metrics and, in many commercial contracts, higher payments.

Second, **quality-based payment adjustments** — from CMS's Value-Based Purchasing program, Hospital Readmissions Reduction Program, and commercial equivalents — are calculated from the same coded data. A record that accurately reflects the patient's severity produces quality metrics that reflect the work that was actually done. A vague record produces the same quality metrics as a straightforward case — regardless of how clinically complex the patient was.

> [NOTE]
> **The TEAM model is a CMS program, but documentation specificity benefits the hospital across all payers.** MS-DRG, APR-DRG, value-based quality metrics, and risk-adjusted benchmarks all draw from the same source: what the physician wrote.

---

### The compounding effect

No single documentation gap is catastrophic. But documentation gaps compound. A typical TEAM surgical case may have three to five conditions that are present, clinically significant, and underdocumented. Each one independently represents a missed CC, a missed MCC, a missed HCC, or a missed APR-DRG SOI point.

The aggregate effect across a hospital's TEAM case volume — multiplied by the payment delta per case, multiplied by the number of cases per year — is the financial exposure that makes CDI programs operationally significant.

The physician's role is not to become a billing expert. It is to document what is clinically true with enough specificity that the record accurately reflects the patient. The payment system is built to reward that accuracy. When the documentation is vague, the payment system cannot distinguish a complex patient from a simple one — and it does not try.

> [PEARL]
> **Accurate documentation is not upcoding. It is accurate coding.** The difference between "heart failure" and "acute systolic heart failure" is not a billing maneuver — it is a clinically meaningful distinction that affects how the case is managed, how quality is measured, and how the hospital is reimbursed. The goal is alignment between the clinical reality and the written record.

---

<!-- ============================================================
  SECTION: PageFooter
  Component hint: <ModuleFooter>
  ============================================================ -->

---

_Source: CMS FY2025/FY2026 IPPS Final Rule · MS-DRG V43.0 · CMS TEAM Model Technical Specifications_  
_Payment figures are national average approximations and vary by hospital wage index and geographic adjustment._  
_CC/MCC designations change annually with each CMS IPPS Final Rule. Verify against the active MS-DRG Definitions Manual for the applicable fiscal year._  
_Last updated: June 2026_
