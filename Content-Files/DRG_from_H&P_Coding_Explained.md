---
title: "How H&P Becomes a DRG"
procedure: null
route: /learn/documentation-to-drg
drg-family: null
tier-structure: null
---

# From Assessment & Plan to Medicare Payment


*How your H\&P becomes a DRG claim*

---

## The Journey: Documentation → Codes → Payment

When you write an Assessment & Plan, you are not just communicating clinical thinking — you are generating the source material that determines how (and how much) the hospital is paid. Here is how that process unfolds.

---

## Step 1: The Coder Reads Your Assessment & Plan

After discharge, a **hospital coding professional** (often a Certified Professional Coder or Registered Health Information Technician) reviews the medical record. The Assessment & Plan is the single most important section they read.

Coders are looking for:

- **The principal diagnosis** — the condition, after study, determined to be chiefly responsible for the admission  
- **Secondary diagnoses** — comorbidities and complications that were actively managed or that affected care during the stay  
- **Procedures performed** — surgical, diagnostic, and therapeutic  
- **Specificity and linkage** — whether conditions are described with enough detail to assign a precise code, and whether related conditions are explicitly connected (e.g., "AKI *due to* sepsis")

Coders are trained interpreters, not clinicians. They can only code what is **explicitly documented**. If it is not written, it does not exist in the claim.

---

## Step 2: ICD-10-CM/PCS Codes Are Assigned

From the Assessment & Plan (and supporting documentation throughout the record), the coder assigns:

- **ICD-10-CM codes** — diagnoses (e.g., `A41.9` Sepsis, unspecified; `N17.9` Acute kidney failure, unspecified)  
- **ICD-10-PCS codes** — inpatient procedures (e.g., mechanical ventilation, surgical procedures)

The **principal diagnosis code** anchors the claim. Every additional coded diagnosis that meets the definition of a CC or MCC adds complexity — and potentially changes the DRG.

**Specificity matters.** `N17.9` (AKI, unspecified) is a CC. If the record supports AKI stage 3, the coder can assign `N17.2` — which is an MCC. One word of documentation changes the code, the DRG, and the payment.

---

## Step 3: The Grouper Assigns a DRG

The coded claim is run through CMS's **DRG Grouper** software, which applies a decision logic tree:

1. Reads the principal diagnosis → assigns a base MDC (Major Diagnostic Category)  
2. Evaluates procedures → may move the claim to a surgical DRG  
3. Scans secondary diagnoses for MCCs and CCs  
4. Outputs a **final MS-DRG** with its associated **Relative Weight (RW)**

This is entirely algorithmic — the grouper does not interpret clinical nuance. It only reads the codes it was given.

---

## Step 4: The Claim Is Submitted to Medicare

The hospital submits a **UB-04 claim form** (institutional claim) electronically to Medicare (or a Medicare Advantage plan). The claim contains:

- Patient demographics and admission/discharge dates  
- All ICD-10 diagnosis codes, in priority order  
- All ICD-10 procedure codes  
- The assigned MS-DRG

Medicare calculates payment as:

**Payment \= Hospital Base Rate × DRG Relative Weight**

The base rate is hospital-specific and adjusted for local wage index, teaching status, and disproportionate share. Payment is issued as a **single lump sum** for the entire episode — no matter how many labs, imaging studies, or days were involved.

---

## Why Your Assessment & Plan Is the Linchpin

| What You Write | What the Coder Can Do | What Medicare Pays |
| :---- | :---- | :---- |
| "Infection, possible sepsis" | Codes infection only — sepsis requires explicit diagnosis | Lower-weighted DRG |
| "Sepsis" | Codes sepsis (MCC) | Higher-weighted DRG |
| "AKI" | Codes AKI unspecified (CC) | Moderate weight |
| "AKI stage 3 due to sepsis" | Codes AKI stage 3 (MCC) \+ causal link | Highest-weighted DRG, accurate risk adjustment |

---

**The bottom line:** Coders translate your clinical language into codes. The grouper turns codes into a DRG. Medicare turns the DRG into a check. Every step is dependent on the precision of what you write in the Assessment & Plan — no step in the chain can add specificity that you did not put there first.  
