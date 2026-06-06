---
title: "CDI Fundamentals"
procedure: null
route: /learn/cdi-fundamentals
drg-family: null
tier-structure: null
---

<!-- PageHero -->
# Clinical Documentation Improvement: The Fundamentals

Documentation is how medicine thinks on paper. Every diagnosis you write, every finding you name, every condition you acknowledge or leave unnamed — that language becomes the legal, clinical, and financial record of what happened to your patient. Clinical Documentation Improvement (CDI) is the systematic effort to make sure that record is accurate, complete, and specific enough to mean something.

[PEARL] The goal of CDI is not to increase reimbursement. It is not to decrease reimbursement. It is to make the medical record an accurate reflection of the patient's actual clinical condition. A record that understates complexity fails the patient. A record that overstates complexity is fraud. The target is accuracy.

---

<!-- Section: WhatIsCDI -->
## What Is CDI?

Clinical Documentation Improvement — also called Clinical Documentation Integrity — is a set of practices, processes, and professional roles dedicated to ensuring that clinical records accurately and completely reflect the patient's condition, the care provided, and the outcomes achieved.

[NOTE] The two names in common use — "improvement" and "integrity" — reflect slightly different emphases. *Improvement* focuses on workflows and closing documentation gaps. *Integrity* emphasizes accuracy and ethical practice. In the TEAM context, both matter: you need the process and the standard.

CDI emerged in the 1980s in response to the introduction of Medicare's Diagnosis-Related Group (DRG) payment system — the first time a physician's documentation directly determined a hospital's reimbursement. It gained significant momentum in 2007 when CMS transitioned to Medicare Severity DRGs (MS-DRGs), which weight diagnoses more granularly by severity.

Today, CDI is practiced by a dedicated specialty — CDI specialists — who are typically experienced clinicians (most commonly nurses or physicians) who have transitioned into a documentation-focused role. They review charts, identify gaps, and send queries to attending physicians when the documentation is incomplete, ambiguous, or inconsistent with clinical findings.

**What CDI is:**
- A quality improvement process aimed at accuracy
- A bridge between clinical language and coded data
- A support system for harried providers who document under time pressure
- A protection against both under-documentation and over-documentation

**What CDI is not:**
- A billing optimization scheme
- A mandate to add diagnoses that are not clinically supported
- A mechanism for a hospital to collect more money it hasn't earned
- A replacement for clinical judgment

---

<!-- Section: WhyDocumentationMatters -->
## Why Documentation Matters Beyond Payment

The most common framing of CDI is financial. That framing is incomplete — and it is one reason physicians often tune out.

Here are the five things your documentation actually drives:

**1. Patient Safety and Continuity of Care**

The medical record is the story of your patient. When the next provider — the hospitalist who takes over the night shift, the cardiologist called for a consult, the primary care physician who sees the patient three weeks post-discharge — reads that record, they are reconstructing what happened. An incomplete record leads to missed diagnoses, unsafe handoffs, and redundant workups. This is the most human reason CDI matters.

**2. Quality Metrics and Star Ratings**

Risk-adjusted quality metrics — readmission rates, mortality indices, complication rates — all depend on documented diagnoses to set expected benchmarks. If your patient has five serious comorbidities and only two are documented, the quality measure system will compare your outcomes against a benchmark built for a less sick patient. Your mortality rate looks worse than it should. Your readmission rate looks excessive. CDI accuracy protects the integrity of quality reporting.

**3. DRG-Based Reimbursement**

Under the Inpatient Prospective Payment System (IPPS), hospitals are paid a fixed amount per episode based on the patient's MS-DRG. That DRG is determined by the principal diagnosis, the procedure performed, and any Complications or Comorbidities (CCs) and Major Complications or Comorbidities (MCCs) present. Underdocumented comorbidities produce a lower DRG than the patient's actual illness burden warrants — the hospital receives less than the care cost. Fabricated or unsupported comorbidities produce a higher DRG than is justified — that is fraud. The right DRG is the accurate DRG.

**4. Risk Adjustment and Value-Based Contracts**

Hierarchical Condition Categories (HCCs) are used to risk-adjust payments under Medicare Advantage, accountable care organizations, and bundled payment programs including TEAM. Unlike CCs and MCCs — which are episode-specific — HCCs reflect a patient's chronic disease burden and are used to set expected costs for an entire year or episode. Under-documented HCCs make a sick patient look healthier than they are, distorting the benchmark against which your outcomes are measured.

**5. Public Reporting and Hospital Rankings**

Hospital rankings — including those published by U.S. News, CMS Hospital Compare, and Leapfrog — use coded diagnosis data to risk-adjust outcome comparisons. Hospitals with well-documented patient complexity tend to perform better on these rankings, not because they cheat, but because their benchmark is appropriately calibrated to their patient population.

[NOTE] In the TEAM model specifically, documentation affects both the *target price* (what the episode is expected to cost, based on your patient's risk profile) and the *quality benchmark* (what outcomes are expected, based on comorbidity burden). Getting documentation right affects both sides of the performance equation simultaneously.

---

<!-- Section: TheAccuracyPrinciple -->
## The Accuracy Principle: Neither Upcoding Nor Downcoding

This deserves its own section because it is foundational.

**Upcoding** is the practice of documenting diagnoses that are not clinically supported in order to receive higher payment. It is fraud. It is prosecuted under the False Claims Act. It results in exclusion from Medicare and Medicaid, civil monetary penalties, and criminal liability. No CDI program, no query from a CDI specialist, and no financial pressure from hospital administration can justify documenting a condition that your clinical judgment does not support.

**Downcoding** — deliberately or passively failing to document conditions that are present — is less discussed but causes real harm. A patient whose AKI, malnutrition, or metabolic encephalopathy is not documented has an incomplete medical record. The next provider may miss it. The quality measure system will not account for it. The reimbursement for the episode will not reflect the actual cost of caring for that patient. Downcoding by omission is not ethically neutral.

**The standard is accuracy.**

When a CDI specialist queries you about whether a patient's creatinine elevation represents acute kidney injury, they are not asking you to add a diagnosis to increase the DRG. They are asking you to make a clinical determination — one you may have already made implicitly in your treatment decisions — and document it explicitly. If the answer is yes, document it. If the answer is no, the query should be declined. The physician is always the final authority.

[PHRASING]
❌ "The CDI team wants me to add AKI to the chart."
✅ "The CDI team is asking whether my patient's clinical picture supports a diagnosis of AKI. That's my call to make."

---

<!-- Section: TheCodingPipeline -->
## How Documentation Becomes a Code

Understanding the pipeline from your written words to a billed claim demystifies why specificity matters so much.

**Step 1 — You document.** You write the H&P, daily progress notes, and the discharge summary.

**Step 2 — Coders translate.** Medical coders read your documentation and assign ICD-10-CM diagnosis codes and ICD-10-PCS procedure codes. Critically: **coders cannot infer, assume, or interpret.** If you write "elevated creatinine," coders will code elevated creatinine (R79.89). They cannot independently code acute kidney injury, even if the clinical picture clearly supports it, unless you have written those words. The physician's language is the source of truth.

**Step 3 — The grouper assigns a DRG.** CMS software (the "grouper") takes the principal diagnosis, any secondary diagnoses, the procedure performed, and patient demographics and assigns an MS-DRG. This determines payment.

**Step 4 — Quality systems read the codes.** The same coded data is fed into quality reporting systems, risk adjustment models, and public reporting platforms. The record that drives payment is the same record that drives quality metrics.

[NOTE] The discharge summary is the most important single document in this pipeline. It is the last opportunity to ensure all active diagnoses are documented, all conditions managed during the stay are acknowledged, and all clinical determinations are stated explicitly. Progress notes matter — but if it isn't in the discharge summary, it often does not get coded.

---

<!-- Section: CCsAndMCCs -->
## What Are CCs and MCCs?

In the MS-DRG system, secondary diagnoses are categorized by the additional resource burden they represent:

**CC — Complication or Comorbidity.** A condition that, when present and documented, indicates a more complex clinical picture and increases expected resource consumption. CCs move a case from the base DRG tier to the "with CC" tier, increasing reimbursement to reflect that added complexity.

**MCC — Major Complication or Comorbidity.** A condition that represents severe clinical complexity and substantially increases resource consumption. MCCs move a case to the "with MCC" tier, the highest payment level. Examples include sepsis, acute kidney injury stage 3, metabolic encephalopathy, acute systolic heart failure, and respiratory failure.

These designations are assigned by CMS and are specific to ICD-10-CM codes — not just diagnoses in general. The same clinical condition can map to a CC code, an MCC code, or neither, depending on the specificity of the documentation.

[PHRASING]
❌ "Heart failure." — Maps to I50.9 (unspecified heart failure) — **not a CC or MCC**
✅ "Acute on chronic systolic heart failure." — Maps to I50.43 — **MCC**

[NOTE] CC and MCC designations change annually with each CMS IPPS Final Rule. Any reference list should include the fiscal year it reflects. Codes that were MCCs in FY2024 may not be MCCs in FY2025.

**The two-tier vs. three-tier distinction matters:**

Some DRG families have only two tiers: base (no CC/MCC) and with MCC. In a two-tier family, CCs have no payment value — only MCCs move the needle. Other DRG families have three tiers: base, with CC, and with MCC. In a three-tier family, both CCs and MCCs carry payment weight. Knowing which structure applies to the procedure you performed tells you which documentation gaps matter most.

---

<!-- Section: HCCs -->
## What Are HCCs?

Hierarchical Condition Categories operate on a different logic than CCs and MCCs, and the two systems are often confused.

**HCCs** are a risk-adjustment model developed by CMS and implemented in 2004. They group thousands of ICD-10-CM diagnosis codes into clinically related categories, each carrying a risk weight. These weights are used to calculate a patient's **Risk Adjustment Factor (RAF) score** — a number that predicts their expected healthcare costs.

Where CCs and MCCs affect payment for a single inpatient episode, HCCs affect payment for an entire coverage year — and in bundled payment models like TEAM, they affect the **target price** for the episode itself, calibrating what CMS expects the episode to cost based on how sick the patient was going in.

[NOTE] Under TEAM, HCC documentation before and around the time of the procedure directly affects the baseline against which your episode performance is measured. A patient with poorly documented chronic conditions will generate a lower target price — making the episode look more expensive than it should, and your performance metrics look worse.

**Three things to know about HCC documentation:**

**1. Annual re-documentation is required.** Unlike a diagnosis entered once in the problem list, HCC conditions must be re-documented — with a current assessment and management plan — every calendar year. A condition carried forward from a prior year without active documentation does not capture an HCC for the current payment period.

**2. Specificity matters enormously.** Many unspecified ICD-10-CM codes do not map to any HCC category. "Diabetes mellitus" (unspecified) may not capture the HCC that "Type 2 diabetes mellitus with diabetic chronic kidney disease, stage 3" would. The specificity requirement is the same as for CCs and MCCs — but the stakes extend beyond the current hospitalization.

**3. The "history of" trap.** Documenting a condition as "history of [condition]" signals to coders that the condition is resolved and no longer active. For chronic diseases — heart failure, CKD, COPD, diabetes — this is almost always wrong. A patient who takes metformin every day does not have a "history of" diabetes. They have active, managed diabetes. Document it as present, active, and managed.

[PHRASING]
❌ "History of CHF." — Codes as personal history of heart disease — **no HCC captured**
✅ "Chronic systolic heart failure, stable, managed with guideline-directed therapy." — **HCC captured**

---

<!-- Section: POARules -->
## POA: Present on Admission

**Present on Admission (POA)** status is a required field for every secondary diagnosis on an inpatient claim. It answers a simple but consequential question: was this condition present when the patient was admitted, or did it develop during the hospital stay?

The four POA indicators are:
- **Y** — Yes, present at admission
- **N** — No, developed after admission
- **U** — Unknown / documentation insufficient to determine
- **W** — Provider is unable to clinically determine

**Why this matters:**

CMS maintains a list of **Hospital-Acquired Conditions (HACs)** — serious conditions that are largely preventable and that CMS believes should not have developed during a well-managed hospitalization. Pressure injuries, certain surgical infections, catheter-associated UTIs, and hospital-acquired deep vein thromboses are examples.

If a diagnosis is on the HAC list and carries a POA indicator of "N" (not present on admission), CMS will not allow that condition to increase the MS-DRG for payment purposes. The grouper treats the diagnosis as if it were not there. This is intentional: it creates a financial disincentive for hospitals to let preventable complications occur.

[NOTE] POA status affects payment only when the HAC-listed diagnosis is the *only* condition driving a higher DRG tier. If a patient has another valid CC or MCC that was present on admission, the higher DRG tier is preserved even if a HAC is also coded as "N."

**The documentation implication:**

For conditions that legitimately were present on admission, clear documentation of their presence in the H&P and early progress notes establishes the POA record. If a complication genuinely existed before the patient arrived — an infected wound from a prior surgery, a UTI on transfer from a skilled nursing facility — the admission documentation should reflect it. Failing to document a condition that was truly POA creates a correctable but avoidable problem downstream.

---

<!-- Section: TheSpecificityPrinciple -->
## The Specificity Principle

This is arguably the single most important concept in CDI education for physicians.

**Specificity means naming the condition as precisely as your clinical knowledge supports.**

Vague documentation is not conservative. It is incomplete. When a coder reads "renal insufficiency," they code renal insufficiency — not chronic kidney disease stage 3, not acute kidney injury, not AKI on CKD. All of those are clinically distinct diagnoses with different ICD-10-CM codes, different DRG impacts, different HCC weights, and different implications for the next provider reading the chart.

**The test is not "can I document this more specifically" — it is "does my clinical judgment support this level of specificity."**

If you have treated the patient for a creatinine of 2.8 that was 1.0 on their last visit, ordered IV fluids, held nephrotoxins, and consulted nephrology — you have made a clinical determination about acute kidney injury. Document it as such. The labs, the treatment, and the clinical course already reflect your judgment. The documentation should too.

[PHRASING]
❌ "Elevated BMP — creatinine 2.8, slightly worse than baseline. Continue monitoring." — **No codeable diagnosis**
✅ "Acute kidney injury, stage 2 by KDIGO criteria, likely prerenal in etiology, managed with IV fluid resuscitation and nephrology input." — **MCC captured; clinical determination explicit**

**The diagnosis vs. symptoms distinction:**

Coders are bound by official coding guidelines that prohibit them from converting a symptom code into a diagnosis code without explicit physician documentation. This means:

- "Confusion" is not "metabolic encephalopathy"
- "Shortness of breath" is not "acute hypoxic respiratory failure"
- "Creatinine 2.8" is not "acute kidney injury"
- "BMI 38 with morning headaches and reported snoring" is not "obesity hypoventilation syndrome"

Each of the right-hand diagnoses is clinically significant. Each is a CC or MCC. Each requires you to write the diagnosis — not just document the finding.

---

<!-- Section: TheThreeDocuments -->
## The Three Documents That Matter

Not all documentation carries equal weight in the coding pipeline. In practice, three documents are the primary source for diagnosis coding:

**1. The History and Physical (H&P)**

The H&P establishes the patient's baseline at admission — past medical history, active problems, medications, and presenting illness. It sets the POA context for all secondary diagnoses. A thorough H&P that explicitly names chronic conditions (by their specific, accurate ICD-10-compatible names) is foundational to accurate coding.

**2. Progress Notes**

Progress notes document the evolution of the patient's condition during the stay. New diagnoses made after admission should appear here first. Conditions that are actively being managed should be acknowledged in each note where they affect the clinical picture. The progress note is where a CDI specialist most often identifies gaps — a treatment decision that implies a diagnosis that has never been explicitly named.

**3. The Discharge Summary**

The discharge summary is the most important single document for coding purposes. It is the definitive statement of what happened during the hospitalization. All diagnoses that were active, managed, or relevant during the stay should appear here, named specifically. Any diagnosis documented in progress notes but absent from the discharge summary is at risk of not being coded.

[DENIAL-RISK] Coders and auditors look for consistency across documents. A diagnosis mentioned in one progress note but absent from the discharge summary — or a discharge summary diagnosis that has no supporting clinical documentation earlier in the chart — creates coding risk. The standard is that documentation must be present, internally consistent, and clinically supported throughout the record.

---

<!-- Section: QueryProcess -->
## The Query Process

When a CDI specialist identifies a gap between the clinical picture and the documented diagnoses, they initiate a **query** — a formal written communication to the attending physician asking for clarification.

Queries are regulated by the American Health Information Management Association (AHIMA) and the Association for Clinical Documentation Integrity Specialists (ACDIS). Compliant queries are:

- **Non-leading** — they present clinical indicators and ask an open question, not a yes/no that suggests the desired answer
- **Based on clinical evidence in the record** — they cite the labs, vitals, treatments, or findings that prompted the question
- **Physician-answered** — the physician makes the final clinical determination; coders and CDI specialists document what physicians confirm, not the other way around

[NOTE] A compliant query presents options including "clinically undetermined" or "other" — giving the physician the ability to decline the diagnosis entirely if clinical judgment does not support it. A physician who receives a query is never obligated to add a diagnosis. The obligation is to respond thoughtfully and honestly.

**The right response to a query:**

Answer it. The most common CDI failure mode is unanswered queries — not because physicians intend to ignore them, but because they appear during a busy day and disappear into the EHR. A query that goes unanswered is documentation that stays incomplete. Completing queries — in either direction, confirming or declining — is part of complete documentation practice.

---

<!-- Section: CommonMisses -->
## Common Documentation Gaps

These are the most frequently missed documentation opportunities across inpatient medicine. None of these require documenting something that isn't present. All of them require naming, explicitly and specifically, what already is.

| Condition | Common Miss | Better Documentation |
|-----------|-------------|----------------------|
| Acute kidney injury | "Cr elevated, monitoring" | "AKI stage 2 (KDIGO), prerenal, responding to fluids" |
| Malnutrition | "Poor appetite postop" or dietary consult ordered with no physician diagnosis | "Moderate protein-calorie malnutrition per clinical criteria; nutrition consult placed" |
| Metabolic encephalopathy | "Confusion, likely multifactorial" | "Metabolic encephalopathy secondary to uremia and medication effect" |
| Sepsis | "Infection" or "sepsis workup" | "Sepsis due to [source], meeting Sepsis-3 criteria" |
| Acute heart failure | "CHF" or "volume overloaded" | "Acute on chronic systolic heart failure, NYHA Class III, managed with IV diuresis" |
| Obesity hypoventilation | "Morbid obesity" | "Obesity hypoventilation syndrome, on CPAP at home" |
| Respiratory failure | "Hypoxia, supplemental O2 required" | "Acute hypoxic respiratory failure requiring supplemental oxygen" |
| Atrial fibrillation type | "A-fib" | "Persistent atrial fibrillation with rapid ventricular response" |

[NOTE] The above are documentation patterns — not prompts to diagnose conditions that aren't present. Each entry assumes the clinical picture supports the specific diagnosis. If it does not, the vague documentation is appropriate. If it does, the specific documentation is necessary.

---

<!-- Section: CDIAndIntegrity -->
## CDI and Professional Integrity

CDI exists in tension with two real risks: the risk of being pressured to upcode, and the risk of being indifferent to underdocumentation. Both carry consequences.

A physician who documents diagnoses not supported by clinical evidence — because a CDI specialist asked, because an administrator suggested it, or because it was implied that reimbursement depended on it — has committed fraud. The False Claims Act, OIG guidance, and CMS audits all scrutinize documentation that appears inconsistent with the clinical record. Compliance risk in CDI is real, and it falls on physicians.

A physician who never answers queries, documents all conditions vaguely, and leaves the discharge summary to a resident who copies and pastes the H&P — that physician is also failing their patients, their institution, and the integrity of the healthcare data system that depends on accurate records.

The CDI specialist's role is to surface the gap and ask the question. The physician's role is to answer it accurately, based solely on clinical judgment. That is the whole system.

[PEARL] The question a CDI specialist should always be asking — and the question every physician should internalize — is not "does this diagnosis help the DRG?" It is: "Does the medical record, right now, accurately reflect the clinical condition of this patient? If another physician read this chart tomorrow, would they have an accurate picture of what we found, what we treated, and what we concluded?"

---

<!-- Section: KeyTermsGlossary -->
## Key Terms

**CDI (Clinical Documentation Improvement / Integrity):** The systematic process of ensuring medical records accurately and completely reflect the patient's condition, care, and outcomes.

**MS-DRG (Medicare Severity Diagnosis-Related Group):** CMS's classification system for grouping inpatient hospitalizations into payment categories based on principal diagnosis, procedure, and comorbidity burden.

**CC (Complication or Comorbidity):** A secondary diagnosis that, when documented and coded, reflects additional clinical complexity and may move a case to a higher DRG payment tier.

**MCC (Major Complication or Comorbidity):** A secondary diagnosis reflecting severe clinical complexity; moves a case to the highest DRG payment tier.

**HCC (Hierarchical Condition Category):** A CMS risk-adjustment model that groups diagnoses into categories with associated risk weights; used to predict expected healthcare costs and calibrate payment benchmarks in value-based programs.

**RAF Score (Risk Adjustment Factor):** The numerical score derived from a patient's HCC conditions and demographics; used to adjust expected costs and payments in programs like Medicare Advantage and TEAM.

**POA (Present on Admission):** A required indicator documenting whether a secondary diagnosis was present when the patient was admitted or developed during the stay; affects HAC payment implications.

**HAC (Hospital-Acquired Condition):** A condition on a CMS list of largely preventable events that, if coded as not present on admission, cannot be used to increase the MS-DRG payment.

**ICD-10-CM:** The International Classification of Diseases, 10th Revision, Clinical Modification — the code set used to report diagnoses on inpatient claims.

**Principal Diagnosis:** The condition established, after study, to be chiefly responsible for causing the patient's admission to the hospital.

**Upcoding:** Documenting diagnoses not supported by clinical evidence to obtain higher payment. This is fraud.

**Query:** A compliant, non-leading written communication from a CDI specialist to an attending physician requesting clarification of documentation.

---

_Module: CDI Fundamentals_
_Playbook: TEAM Playbook_
_Last updated: June 2026_
_Format: Option A — Component-ready prose markdown_
