---
title: "APR-DRG SOI/ROM Reference"
procedure: null
route: /reference/apr-drg
drg-family: null
tier-structure: null
---

<!-- PageHero -->
# APR-DRG: Severity of Illness and Risk of Mortality

The MS-DRG system that drives TEAM episode payments is not the only classification system your documentation feeds. Alongside it runs a parallel system — the All Patient Refined DRG (APR-DRG) — that produces two scores for every inpatient stay: Severity of Illness (SOI) and Risk of Mortality (ROM). These scores do not appear on your Medicare remittance. They do not affect TEAM reconciliation directly. But they shape how your outcomes are compared to other hospitals, how commercial payers contract with your institution, how Medicaid programs in more than 30 states reimburse inpatient care, and whether your hospital's quality rankings reflect the complexity of the patients you actually treat.

Documentation that captures a condition for MS-DRG purposes will usually — but not always — also capture it for APR-DRG purposes. The two systems read the same ICD-10-CM codes but weight them differently. Understanding both is necessary for a complete picture of what your documentation produces.

[PEARL] MS-DRG tells the payment system how costly a patient is expected to be. APR-DRG tells the quality system how sick a patient actually is. If your APR-DRG SOI understates your patients' complexity, your risk-adjusted outcomes will look worse than they should — higher apparent mortality, longer apparent length of stay, higher apparent complication rates — all relative to a benchmark calibrated to a healthier patient population than the one you treated.

---

<!-- Section: WhatIsAPRDRG -->
## What Is the APR-DRG System?

The All Patient Refined DRG (APR-DRG) system was developed by 3M Health Information Systems (now maintained by Solventum, a 3M spin-off) in collaboration with the Children's Hospital Association and physician groups beginning in 1990. It builds on the original DRG framework but differs from MS-DRGs in two fundamental ways.

**First, it covers all patients — not just Medicare.** MS-DRGs were designed by CMS specifically for the Medicare population, which skews elderly. APR-DRGs were built to classify the full spectrum of inpatient patients: neonates, pediatrics, adults, and the elderly. This makes APR-DRG the standard classification system for Medicaid programs, most commercial payers, and research and quality databases that need to compare across payer types.

**Second, it produces two independent severity scores instead of one tier.** Rather than the MS-DRG binary of "with CC," "with MCC," or "without CC/MCC," APR-DRG produces two separate 1–4 scores for every patient: one for Severity of Illness and one for Risk of Mortality. These scores are calculated independently and can differ from each other for the same patient.

APR-DRG is designed for Medicaid programs, commercial insurance plans, and state-specific healthcare programs, handling the full spectrum of patients across different insurance types. Its dual assessment — SOI measuring how sick the patient is and what resources they will likely need, and ROM estimating the probability of death during the hospital stay — provides a more complete picture of patient complexity than MS-DRG alone.

[NOTE] APR-DRGs are a proprietary system. Using the official grouper software requires a commercial license from Solventum (formerly 3M Health Information Systems). The grouper is updated annually. Hospitals do not typically run APR-DRG calculations themselves — the grouper is embedded in billing, analytics, and quality reporting platforms. However, the output feeds every major quality benchmarking system your hospital uses.

---

<!-- Section: SOIvsROM -->
## Severity of Illness vs. Risk of Mortality — Two Different Things

This distinction matters and is frequently blurred in clinical conversation. SOI and ROM are not the same measurement.

**Severity of Illness (SOI)** measures the extent of physiologic decompensation or organ system loss of function. It reflects resource consumption — how much care a patient is expected to require. A high SOI patient needs more nursing time, more diagnostics, more interventions, and longer stay. SOI is primarily used for payment benchmarking and resource allocation.

**Risk of Mortality (ROM)** measures the likelihood that a patient will die during the hospitalization. It reflects clinical outcome risk, not resource consumption. A patient can have high SOI (resource-intensive) and low ROM (unlikely to die), or vice versa.

Severity of illness and risk of mortality relate to distinct patient attributes. A patient with acute choledocholithiasis as the highest secondary diagnosis may be considered a major severity of illness but only a minor risk of mortality.

Research confirms this separation is real and significant: while overall reliability and agreement between SOI and ROM are high, there is substantial heterogeneity across APR-DRGs, and most APR-DRGs show a higher proportion of episodes with ROM level above the SOI level than the opposite — indicating the two measures are genuinely distinct concepts rather than two sides of the same coin.

**Why both matter for documentation:**
- SOI drives payment benchmarking and commercial contract negotiations
- ROM drives observed-to-expected mortality ratios used in quality rankings and public reporting
- A patient with underdocumented comorbidities will have SOI and ROM scores lower than their actual clinical picture, making your outcomes look worse relative to a too-healthy benchmark

---

<!-- Section: TheFourSubclasses -->
## The Four Subclasses: Minor Through Extreme

The four SOI and ROM subclasses are: 1 = Minor, 2 = Moderate, 3 = Major, 4 = Extreme. Although the subclasses are numbered sequentially, the numeric values represent categories, not a continuous scale.

| Subclass | Level | Clinical Meaning | Documentation Implication |
|----------|-------|-----------------|--------------------------|
| 1 | Minor | Minimal physiologic derangement; expected resource use | Few or no significant comorbidities documented |
| 2 | Moderate | Moderate resource needs; some organ system involvement | Some CCs documented; limited interaction between diagnoses |
| 3 | Major | Significant organ system decompensation; high resource use | MCCs present; multiple interacting comorbidities |
| 4 | Extreme | Severe multi-organ dysfunction; very high resource use and mortality risk | Multiple MCCs across organ systems; conditions with explicit interaction |

Extreme SOI or ROM is usually associated with multiple comorbid conditions involving two or more organ systems. Patients with high SOI or ROM tend to have poor outcomes in spite of receiving more frequent and intensive treatment.

**The interaction principle:** APR-DRG SOI and ROM are not simply additive. The system evaluates how conditions interact with each other and with the principal diagnosis. A condition will impact a patient's SOI and ROM depending on what other conditions are present along with their demographic information. A patient's severity will depend on the number, nature, and interaction of complications and comorbidities.

This means the same secondary diagnosis can produce different SOI levels depending on what else is documented. AKI in a patient with sepsis and respiratory failure may push the case to SOI 4. AKI alone in an otherwise uncomplicated patient may produce SOI 3. Documentation of the full clinical picture — not just the most dramatic single diagnosis — determines the final subclass assignment.

---

<!-- Section: APRDRGvsMSDRG -->
## APR-DRG vs. MS-DRG: The Critical Differences

Understanding where the two systems diverge tells you when documentation decisions that work for one may not fully serve the other.

| | MS-DRG | APR-DRG |
|--|--------|---------|
| **Who uses it** | CMS / Medicare | Medicaid (30+ states), commercial payers, quality databases |
| **Coverage** | Medicare population (primarily elderly) | All patients — neonates through elderly |
| **Severity output** | One tier: base / with CC / with MCC | Two scores: SOI (1–4) and ROM (1–4) independently |
| **How conditions are weighted** | Each condition is either a CC, an MCC, or neither — fixed | Each condition's impact depends on what else is documented — interactive |
| **Comorbidity logic** | Any qualifying MCC triggers the MCC tier | Multiple comorbidities across organ systems compound to reach SOI 4 |
| **Principal diagnosis** | Fixed payment basis | Interacts with secondary diagnoses to modify severity |
| **Payment use** | IPPS Medicare payment | Medicaid and commercial payment; quality benchmarking |
| **Quality use** | Limited | Extensive — Vizient, US News, Leapfrog, CMS TEAM quality benchmarking |
| **Updated by** | CMS annually | Solventum (formerly 3M) annually |

**The most important practical difference:** MS-DRGs frequently are described as a way to demonstrate how sick patients are, but in reality, they reflect how costly they tend to be on average in a large population. An individual patient can be quite sick and die quickly and not be expensive to treat in the hospital. Another patient may have a chronic illness that needs IV medication or inpatient monitoring and stay longer than usual but not be particularly expensive compared to another.

APR-DRG was designed to address exactly this gap — to measure actual clinical severity, not just payment complexity. A condition may qualify as a CC in MS-DRG but not move the needle in APR-DRG, or vice versa. The systems are related but not identical, and a documentation strategy that ignores APR-DRG is incomplete.

---

<!-- Section: WhereAPRDRGIsUsed -->
## Where APR-DRG SOI/ROM Appears in Your Hospital's World

**Medicaid payment** — APR-DRGs are used more often in state Medicaid programs and commercial payers. More than 30 state and federal agencies use the system to adjust for SOI and ROM in profiles comparing facilities. If your hospital has a significant Medicaid payer mix, APR-DRG SOI directly affects reimbursement for those cases. A case that reaches SOI 3 vs. SOI 2 generates meaningfully different Medicaid payment in states using APR-DRG-based rates.

**Commercial payer contracts** — Many commercial payers use APR-DRG as the basis for inpatient rates, either directly or through crosswalk to MS-DRG. Hospitals that code incorrectly in a mixed-payer environment risk either leaving money on the table or creating audit exposure when coding does not align with clinical documentation.

**Vizient Quality & Accountability benchmarking** — Vizient uses APR-DRG SOI and ROM to risk-adjust its quality metrics, including observed-to-expected mortality, complication rates, and length of stay. Hospitals participating in Vizient benchmarking are compared against peers within the same APR-DRG and SOI subclass. If your SOI is systematically understated, you are being compared to a less-sick peer group — and your outcomes will look worse. Hospitals in the top quality quintile posted an average operating margin of 6.3% compared with -3.6% among those in the lowest quintile, and negotiated commercial reimbursement at 257% of Medicare compared with 211% for the lowest-performing group. Quality performance — which depends on accurate risk adjustment — has direct commercial financial consequences.

**U.S. News & World Report hospital rankings** — The U.S. News methodology uses risk-adjusted mortality and other outcome measures that incorporate APR-DRG-derived severity scoring. A hospital whose documentation systematically understates patient complexity will appear to have higher-than-expected mortality — not because outcomes are worse, but because the benchmark is calibrated to a healthier patient population.

**Leapfrog and other public reporting** — Similar principle: risk-adjusted safety and outcome scores depend on accurate severity documentation. Underdocumented SOI inflates apparent complication rates.

**TEAM quality benchmarking** — The TEAM Composite Quality Score uses CMS quality measures that are themselves risk-adjusted using coded diagnosis data. Underdocumented comorbidities affect the quality score directly, compounding the DRG-tier and target-price effects documented elsewhere in this playbook.

---

<!-- Section: CrosswalkMSDRGtoAPRDRG -->
## MS-DRG CC/MCC Tier → Approximate APR-DRG SOI Crosswalk

The relationship between MS-DRG tiers and APR-DRG SOI subclasses is approximate — the two systems use different logic and the same case can produce different results. This crosswalk gives a rough expectation for documentation teams, not a precise mapping.

| MS-DRG Tier | Typical APR-DRG SOI Range | Notes |
|-------------|--------------------------|-------|
| Without CC/MCC | SOI 1–2 (Minor to Moderate) | Clean case with no significant comorbidities |
| With CC | SOI 2–3 (Moderate to Major) | Single qualifying comorbidity; may reach Major with interaction |
| With MCC | SOI 3–4 (Major to Extreme) | Single MCC typically produces Major; multiple organ system involvement reaches Extreme |
| With multiple MCCs across organ systems | SOI 4 (Extreme) | The interaction of multiple serious conditions — sepsis + AKI + respiratory failure — reliably produces Extreme SOI |

**Key crosswalk insight:** In MS-DRG, a single MCC is sufficient to reach the highest payment tier. In APR-DRG, reaching SOI 4 (Extreme) typically requires multiple interacting comorbidities across organ systems. This means a patient with sepsis, AKI, and respiratory failure may be MCC-tier in MS-DRG (one MCC required) and still only SOI 3 (Major) in APR-DRG if the interaction between conditions is not fully documented. Full documentation of all active conditions — not just the one that tips the MS-DRG tier — is necessary to accurately capture SOI 4.

---

<!-- Section: SOIDriversByProcedure -->
## SOI/ROM Drivers by Procedure

The conditions that most reliably move APR-DRG SOI from Moderate to Major or Major to Extreme in the five TEAM procedure populations:

**LEJR**
- Sepsis (especially with organ dysfunction — AKI, respiratory failure)
- Acute respiratory failure
- Metabolic encephalopathy (especially combined with other organ system involvement)
- Acute kidney injury in a patient with underlying CKD
- Severe malnutrition combined with a second major comorbidity

**SHFFT**
- Acute on chronic heart failure with documented EF and decompensation
- Metabolic encephalopathy — the most common SOI-driving miss in hip fracture patients
- Aspiration pneumonia (high ROM driver as well)
- Sepsis from any source in an elderly, comorbid patient
- Severe malnutrition in the setting of acute illness and frailty

**Spinal Fusion**
- Myelopathy with documented neurological deficits — SOI 3 driver when explicit, unrecognized when documented as "weakness" or "stenosis"
- Acute kidney injury post-procedure
- Respiratory failure — post-operative in a patient with OHS or COPD
- Sepsis from surgical site or urinary source

**CABG**
- Acute systolic heart failure with reduced EF (most impactful single SOI driver in this population)
- Perioperative MI — both SOI and ROM driver
- Acute respiratory failure post-bypass
- Metabolic encephalopathy post-pump
- Cardiogenic shock (if survived — significant ROM driver)

**Major Bowel**
- Septic shock — the highest SOI/ROM driver in this population
- Acute kidney injury stage 3 with renal replacement therapy
- Respiratory failure requiring prolonged ventilation
- Metastatic cancer combined with acute illness (significantly elevates ROM)
- Severe malnutrition in the setting of active malignancy or sepsis

---

<!-- Section: DocumentationPrinciples -->
## Documentation Principles for APR-DRG SOI/ROM

The principles that produce accurate APR-DRG scoring are identical to those that produce accurate MS-DRG documentation — specificity, completeness, named diagnoses rather than symptoms, and clinical linkage between conditions. The difference is that APR-DRG rewards comprehensiveness across the full clinical picture, while MS-DRG rewards identification of the single highest-weight secondary diagnosis.

**Document all significant active conditions, not just the one that drives the DRG tier.** In MS-DRG, once you have identified one MCC, additional documentation provides diminishing returns for payment (though it protects against denial). In APR-DRG, the interaction between multiple conditions is what drives the severity subclass upward. A patient with AKI alone may score SOI 3. The same patient with AKI + encephalopathy + malnutrition will score SOI 4 — but only if all three are documented.

**Name the condition, not the finding.** "Creatinine 2.4, trending up" does not produce an AKI code. "Acute kidney injury, stage 2, likely prerenal" does. This is identical to the MS-DRG specificity principle, but the SOI consequence of omission is an entire subclass drop.

**Document clinical linkage between conditions.** "Sepsis with acute kidney injury and metabolic encephalopathy" documents three interacting conditions that collectively produce Extreme SOI. "Sepsis — blood cultures pending; creatinine elevated; patient confused" documents three findings that may not all be coded as diagnoses.

**The discharge summary is the final word.** APR-DRG, like MS-DRG, is coded primarily from the discharge summary. Conditions that appear in progress notes but are absent from the discharge summary are at risk of not being coded — and therefore not being scored.

[PHRASING]
❌ "Post-CABG — doing well. AKI resolving. Continue monitoring." — AKI coded but isolated; no interaction documented; likely SOI 3.
✅ "Post-CABG day 4. Acute kidney injury stage 2 (N17.9), improving with IV hydration; creatinine 1.8 from peak 2.4. Metabolic encephalopathy (G93.41) secondary to post-bypass hypoperfusion and uremia, resolving. Chronic systolic heart failure (I50.22) with EF 28%, managed with cautious diuresis. All conditions interacting — monitoring multi-organ recovery." — Three conditions with documented interaction; SOI 4 plausible; audit-defensible.

---

<!-- Section: AnnualUpdate -->
## Annual Update Reminder

The SOI subclasses are related to the APR-DRG grouper that is updated annually by 3M. Conditions that produce SOI 3 in one grouper version may produce SOI 2 or SOI 4 in a subsequent version depending on 3M's annual clinical logic revisions. Any reference to specific SOI levels for specific conditions should be verified against the current grouper version in use by your hospital's analytics and billing platform.

This is distinct from the MS-DRG annual update but occurs on a similar schedule. CDI programs should confirm current grouper version annually and adjust training accordingly.

---

*Module: APR-DRG SOI/ROM Reference*
*Playbook: TEAM Playbook*
*APR-DRG system: maintained by Solventum (formerly 3M Health Information Systems); updated annually*
*Last updated: June 2026*
*Format: Option A — Component-ready prose markdown*
*Sources: 3M APR-DRG Methodology Overview (HCUP/AHRQ); ACDIS Q&A SOI/ROM (2018); Vizient Quality & Accountability Analysis (2026); blueBriX MS-DRG vs. APR-DRG Guide (2026); PMC — Severity of Illness and Risk of Mortality: Two Scales of Different Concepts (2024); 3M APR-DRG Product Overview*
