---
title: "Patient Safety Indicators: Surgical Complications and Documentation"
procedure: null
route: /reference/psi
drg-family: null
tier-structure: null
---

<!-- PageHero -->
# Patient Safety Indicators: Surgical Complications and Documentation

When physicians hear the word "complication," they hear medical error. When CDI specialists say "complication," they mean something entirely different. And when the quality system calculates a Patient Safety Indicator, it means something different still. These three uses of the same word are the source of most PSI documentation confusion — and most of the documentation errors that make hospitals look worse than they actually are.

This module explains what PSIs are, why your documentation directly determines whether a PSI is triggered, and — for each of the ten surgical PSIs most relevant to TEAM procedures — exactly what to write and what to avoid.

[PEARL] Documenting a complication code does not automatically trigger a PSI. And failing to document a complication that occurred does not protect you from a PSI — it just makes your hospital's record inaccurate. The goal is accurate documentation of what actually happened, with the clinical context that allows the quality system to classify it correctly.

---

<!-- Section: WhatArePSIs -->
## What Are Patient Safety Indicators?

Patient Safety Indicators (PSIs) were developed by AHRQ and first released in 2003 to identify potentially avoidable safety events in inpatient hospital care. They use administrative claims data — the same ICD-10-CM codes that determine your DRG and your TEAM episode cost — to screen for complications and adverse events following surgeries and procedures.

PSIs feed directly into CMS Hospital Compare, Leapfrog, U.S. News & World Report rankings, and the TEAM Composite Quality Score. A hospital's PSI performance affects its public reputation, commercial contract negotiations, and — under TEAM — its quality-based reconciliation adjustment of up to ±10%.

**What PSIs are not:** PSIs are not a direct measure of whether a complication occurred. They are a screening tool built from coded data. A PSI fires when a qualifying diagnosis code appears in the record with the wrong POA status. Whether that firing accurately reflects a preventable complication depends entirely on how the case was documented and coded.

The most important insight from AHRQ's own validation work is this: PSI validation studies found that many PSI flags were false positives — cases where the complication was actually present on admission, or where a qualifying condition was miscoded rather than reflecting a true hospital-acquired event. POA documentation substantially improves the accuracy of PSI measurement. Accurate, complete documentation — including explicit POA status — is the mechanism that makes PSIs work the way they were designed to.

---

<!-- Section: TheThreeLanguages -->
## Three Uses of the Word "Complication"

Understanding why documentation causes PSI problems requires distinguishing three separate definitions that use the same word.

**Clinical language:** To a physician, "complication" implies a bad outcome — often one with medicolegal significance. When CDI asks about a "postoperative complication," the physician hears an accusation. This is why physicians often push back on documentation of complications even when the clinical picture clearly warrants it.

**Coding language:** In ICD-10-CM, "complication" means a condition that has a cause-and-effect relationship with a procedure and meets the threshold of clinical significance (requires clinical evaluation, therapeutic treatment, diagnostic procedures, extended stay, increased monitoring, or has implications for future care). The term does not imply wrongdoing. Some conditions occurring after surgery are classified by ICD-10-CM as complications whether the physician explicitly states "complication" or not. A surgeon who documents a serosal tear and the subsequent repair has documented a complication whether or not they use the word.

**Quality measure language:** A PSI fires when a qualifying diagnosis code appears as a secondary diagnosis that is not present on admission (POA = N), in the context of a qualifying procedure. The PSI algorithm does not know whether the complication was preventable, appropriate, or unavoidable. It only knows what the codes say.

[NOTE] The "postop" problem: in clinical language, "postop" means after surgery — a time reference. In coding language, "postoperative [condition]" means due to surgery — a causal relationship. When a physician documents "postoperative respiratory failure," a coder reads it as "respiratory failure caused by surgery" and assigns a procedure-specific complication code. That code triggers PSI 11. If the physician meant "respiratory failure that developed after surgery due to the patient's underlying COPD," the documentation should say so explicitly — and it should use the non-procedure-specific code category (J96.x rather than J95.82x).

---

<!-- Section: PSI90 -->
## PSI 90: The Composite That Matters Most

CMS publicly reports a **Patient Safety and Adverse Events Composite (PSI 90)** on Hospital Compare. This composite score is one of the three quality measures that modify TEAM reconciliation payments by up to ±10%. It is a weighted combination of ten individual PSIs.

The component weights for PSI 90 (v2022) are:

| PSI | Description | Component Weight |
|-----|-------------|-----------------|
| PSI 03 | Pressure Ulcer Rate | 0.1669 |
| PSI 06 | Iatrogenic Pneumothorax | 0.0305 |
| PSI 08 | In-Hospital Fall with Hip Fracture | 0.0145 |
| PSI 09 | Perioperative Hemorrhage or Hematoma | 0.0434 |
| PSI 10 | Postoperative AKI Requiring Dialysis | 0.0572 |
| **PSI 11** | **Postoperative Respiratory Failure** | **0.2397** |
| PSI 12 | Perioperative PE or DVT | 0.1808 |
| PSI 13 | Postoperative Sepsis | 0.2151 |
| PSI 14 | Postoperative Wound Dehiscence | 0.0174 |
| PSI 15 | Abdominopelvic Accidental Puncture/Laceration | 0.0345 |

PSI 11 (Postoperative Respiratory Failure) carries the highest component weight at 24% of the composite — making it the single largest driver of your hospital's PSI 90 score. PSI 13 (Postoperative Sepsis) is second at 21.5%. These two PSIs combined represent nearly half the composite.

---

<!-- Section: PSI11 -->
## PSI 11: Postoperative Respiratory Failure

### What Triggers It

A case is flagged as a PSI 11 if **any** of the following occur after an elective surgery:

| Trigger | Definition |
|---------|-----------|
| Diagnosis code | "Acute postprocedural respiratory failure" (J95.821 or J95.822) as a secondary diagnosis |
| 96-hour rule | Mechanical ventilation >96 hours starting on or after the procedure date |
| 24-hour rule | Ventilation lasting 24–96 hours that begins 2 or more days after surgery |
| Reintubation | Any unplanned reintubation occurring 1 or more days after surgery |

Note that the last three triggers are claim-level events — they fire based on procedure codes alone, regardless of what diagnosis is documented. This means PSI 11 can fire even if you never write "respiratory failure" anywhere in the chart.

### The Documentation Decision Algorithm

Before documenting any respiratory condition after surgery, apply these three filters in order. This algorithm was developed with and approved by your coding department.

**Filter 1: Protection or Failure?**

The first question is whether the patient remained intubated for airway protection rather than for pulmonary failure. Airway protection ventilation is not respiratory failure.

Indications for airway protection intubation include: risk of airway edema, combativeness, anticipated return to the OR, excessive secretions, inability to protect airway due to neurological status.

✅ Document: *"Prolonged mechanical ventilation for airway protection — no intrinsic pulmonary failure present."*

**Filter 2: Planned or Unplanned?**

If the ventilation was a planned part of the procedure — a staged operation, a high-risk surgical protocol, or an anticipated postoperative ventilator course — it is not a complication.

✅ Document: *"Planned postoperative ventilation per surgical protocol — expected component of high-risk procedure."*

**Filter 3: Surgical or Medical Cause?**

This is the most consequential filter for documentation purposes. If the respiratory failure is due to an underlying medical condition — COPD exacerbation, decompensated heart failure, medication adverse effect, OHS — rather than a procedural complication, the etiology should be documented explicitly and the non-procedure-specific code (J96.x) used, not the postprocedural code (J95.82x).

✅ Document: *"Acute on chronic hypoxic respiratory failure due to COPD exacerbation — not a complication of the surgical procedure."*

✅ Document: *"Acute hypercapnic respiratory failure secondary to obesity hypoventilation syndrome and retained secretions — underlying medical etiology."*

[PEARL] J95.821/J95.822 (postprocedural respiratory failure) triggers PSI 11. J96.01/J96.02 (acute respiratory failure, not elsewhere classified) does not. The clinical distinction between "failure due to the procedure" and "failure due to the patient's underlying disease that developed in the postoperative period" is yours to document. Make it explicit.

### The Respiratory Support Continuum

Not every post-surgical respiratory event is respiratory failure. Understanding the spectrum prevents both overcoding and undercoding.

| Clinical Situation | Appropriate Diagnosis | PSI 11 Risk |
|-------------------|----------------------|-------------|
| Normal wean and extubation, no O2 needed | None — routine recovery | None |
| Slow wean, low-moderate O2, PEEP ≤5, moderate secretions, pCO₂ <50 mmHg | Acute postoperative pulmonary insufficiency | Low (no PSI 11 trigger unless reintubated or vent >96h) |
| Reintubation, vent >48 hours, meets respiratory failure criteria | Acute postprocedural respiratory failure (if procedural cause) OR Acute respiratory failure J96.x (if medical cause) | High if J95.82x used; lower if J96.x with documented medical etiology |

**Postoperative pulmonary insufficiency** is a distinct entity between normal recovery and acute respiratory failure. It is not a routine post-op finding, but it is not respiratory failure either. It applies when the patient requires interventions (supplemental O2, bronchodilators, intensified observation) that are non-routine but that do not rise to the level of respiratory failure. It does not trigger PSI 11 unless ventilator criteria are independently met.

**Respiratory insufficiency** should generally not be used as a diagnostic term — it codes to a symptom code, not a diagnosis.

### What to Write — and What Not To

[PHRASING]
❌ "Postoperative respiratory failure — patient intubated for airway protection after edematous airway."
✅ "Prolonged mechanical ventilation for airway protection following difficult airway management — no intrinsic pulmonary failure. Extubated safely on POD 2."

[PHRASING]
❌ "Postoperative respiratory failure, COPD contributing."
✅ "Acute hypercapnic respiratory failure (J96.02) due to acute exacerbation of COPD — underlying medical etiology, not a procedural complication. BiPAP initiated. This respiratory failure is attributable to the patient's underlying pulmonary disease, not to the operative procedure."

[PHRASING]
❌ "Patient difficult to wean from vent — respiratory failure."
✅ "Planned postoperative ventilation per cardiac surgical protocol, day 1 post-CABG. Expected ventilatory support during routine recovery. No acute respiratory failure — weaning as expected."

[PHRASING]
❌ "Reintubated for respiratory distress."
✅ "Unplanned reintubation on POD 2 for acute hypoxic respiratory failure (J96.01) — etiology: aspiration pneumonia developing post-extubation. This represents a medical complication of aspiration, not a procedural complication of the operative technique."

### PSI 11 Exclusions

PSI 11 does not apply when any of the following are present:

- Acute respiratory failure or tracheostomy diagnosis coded as POA = Y
- Respiratory MDC-04 (DRGs 163–208) — respiratory diagnoses as principal
- Neuromuscular disorders, degenerative brain disorders (present on admission)
- Tracheostomy present on admission
- Laryngeal, pharyngeal, nose, mouth, or facial surgery with significant airway risk
- Esophageal surgery, lung cancer procedures, lung or heart transplant

[NOTE] If any of these exclusions apply, they must be documented and coded with POA = Y for the exclusion to take effect. A pre-existing tracheostomy that is not documented as present on admission will not exclude the case.

---

<!-- Section: PSI13 -->
## PSI 13: Postoperative Sepsis

### What Triggers It

PSI 13 fires when sepsis appears as a secondary diagnosis with POA = N following elective surgery — even if the sepsis is unrelated to the surgical procedure. A patient who has elective surgery, has an extended stay, and develops sepsis on day 15 from a cause unrelated to the surgery will trigger PSI 13.

### The Critical Documentation Point

The most common driver of false-positive PSI 13 flags is sepsis that was actually present at or developing at the time of admission, but was not documented as POA.

The exclusion logic: if sepsis is coded as the principal or secondary diagnosis with POA = Y, the case is excluded. If any infection diagnosis is coded with POA = Y, the case is excluded.

✅ If a patient comes in with a Crohn's flare and elevated inflammatory markers, and develops sepsis during the subsequent bowel resection, the pre-existing infection should be documented in the H&P as present on admission and linked to the subsequent sepsis.

[PHRASING]
❌ "Patient with Crohn's flare underwent exploratory laparotomy — sepsis documented intraoperatively."
✅ "Patient presented with active Crohn's flare, elevated inflammatory markers, and clinical concern for secondary infection at time of inpatient order. Broad-spectrum antibiotics initiated on admission. Sepsis subsequently confirmed intraoperatively. Infection and systemic response present on admission — POA = Y."

### SIRS vs. Sepsis

Documenting SIRS when sepsis criteria are met underdocuments the complication. Documenting sepsis when SIRS criteria are met but a non-infectious etiology is responsible creates a PSI 13 flag for a non-qualifying event.

✅ When the systemic response is due to surgery itself (SIRS due to non-infectious process), document specifically: *"SIRS due to non-infectious process — surgical inflammatory response. No infectious source identified."* This codes to a separate, non-PSI-triggering category.

---

<!-- Section: PSI12 -->
## PSI 12: Perioperative PE or DVT

### What Triggers It

PSI 12 fires when DVT or PE is coded as a secondary diagnosis with POA = N following a qualifying surgical procedure.

The AHRQ validation data reveals an important finding: the clinical positive predictive value of PSI 12 is approximately 48% — meaning roughly half of cases flagged by the administrative algorithm on clinical review are not actually hospital-acquired VTE. The most common reasons: VTE was present on admission but not documented as such, or VTE involved upper extremity or superficial/unspecified veins that are not clinically equivalent to classic post-surgical DVT.

### The Only Real Protection Is POA Documentation

Almost the only way to avoid a PSI 12 flag for a VTE that genuinely occurred is for the DVT or PE to be coded as present on admission. If your patient arrives with an existing DVT from a prior admission or from a chronic condition — document it explicitly in the H&P with POA = Y.

✅ "Chronic deep vein thrombosis, right lower extremity, documented on prior imaging — present on admission. On therapeutic anticoagulation. POA = Yes."

For VTE that is genuinely hospital-acquired, the PSI flag is appropriate and should not be avoided through documentation gymnastics. The goal is accuracy: ensuring that pre-existing VTE is documented as POA, and that hospital-acquired VTE is identified and addressed.

### DVT Specificity

Upper extremity DVT and superficial vein thrombosis are documented in the record but code to categories that do not trigger PSI 12. Over-documentation of lower extremity DVT when the clot is actually superficial or upper extremity creates false positive flags. Document the actual location and vein involved.

---

<!-- Section: PSI03 -->
## PSI 03: Pressure Ulcer Rate

### What Triggers It

PSI 03 fires when a Stage III or Stage IV pressure ulcer is coded as a secondary diagnosis with POA = N (not present on admission).

### The Staging and POA Rules

Pressure ulcer staging must be documented by the physician — or the case will code as unstageable or unspecified, losing both the MCC/CC designation and the PSI accuracy. Nursing wound care documentation of stage is not sufficient for coding purposes without physician confirmation.

**The PSI 03 exclusion:** Stage III and Stage IV pressure ulcers coded as POA = Y (present at admission) are excluded from PSI 03. This is the most documentation-sensitive exclusion in the composite. A patient arriving from a skilled nursing facility or long-term care with a pressure injury that was present before admission must have that fact explicitly documented in the admission note.

✅ "Stage III sacral pressure injury present on admission — noted on physical examination at time of admission. Wound care team notified. POA = Yes."

[NOTE] The AHRQ validation data showed PPV of 60% for PSI 03 at UHC hospitals after POA exclusion — meaning 40% of pressure ulcer flags were for ulcers that were actually present on admission but not documented as POA. This is one of the highest rates of avoidable false positives in the PSI 90 composite.

---

<!-- Section: PSI09 -->
## PSI 09: Perioperative Hemorrhage or Hematoma

### What Triggers It

PSI 09 fires when a hemorrhage or hematoma complicating a procedure is coded as a secondary diagnosis with POA = N and requires a separate operative procedure to control the bleeding or evacuate the hematoma.

### The Clinical Documentation Nuance

Not all postoperative bleeding is a PSI 09 event. The ICD-10-CM coding guidelines specify that there must be more than a routinely expected condition. If, in the physician's clinical judgment, the blood loss is expected and the physician does not document it as a complication, it should not be coded as one.

The key distinction: **a bruise or ecchymosis is not a hematoma**. Do not document a collection of soft tissue ecchymosis as a hematoma unless the clinical picture — size, drainage, operative management — supports it.

**The coagulation disorder exclusion:** If the hemorrhage or hematoma is explicitly documented to be *due to* (not merely "with" or "while on") anticoagulation or antiplatelet therapy, it codes to a hemorrhagic disorder category that excludes the case from PSI 09. This requires explicit causal language.

✅ "Postoperative hematoma due to anticoagulant effect of therapeutic warfarin — supratherapeutic INR at time of bleeding. Hematoma directly attributable to extrinsic anticoagulation." — Coded to D68.32; excluded from PSI 09.

❌ "Patient on warfarin with postoperative hematoma." — "With" does not establish causation; does not trigger the exclusion.

Other exclusionary diagnoses: documented thrombocytopenia, congenital or acquired coagulopathy (including due to liver disease), or documented platelet count below the institutional threshold.

---

<!-- Section: PSI06 -->
## PSI 06: Iatrogenic Pneumothorax

### What Triggers It

PSI 06 fires when an iatrogenic pneumothorax is coded as a secondary diagnosis with POA = N.

### Exclusions Worth Knowing

Several diagnoses and procedures automatically exclude a case from PSI 06: pleural effusion as a secondary diagnosis, chest trauma or rib fracture, thoracic surgeries, cardiac surgery, lung biopsies, diaphragmatic repairs. These must be coded for the exclusion to apply.

**For spine surgery specifically:** Thoracic spine procedures and certain other procedures carry a risk of small pneumothorax as a known procedural risk. If the pneumothorax occurred and was insignificant — did not require treatment — it should not be coded as an additional diagnosis at all. Only clinically significant conditions requiring evaluation or treatment warrant coding.

✅ "Small pneumothorax identified on post-procedure CXR following thoracic spine surgery — clinically insignificant, no treatment required, resolved spontaneously. Not coded as additional diagnosis per coding guidelines."

❌ "Post-procedure pneumothorax — monitoring." — If you document it, it will be coded. If it doesn't meet the threshold for clinical significance, do not code it.

**The POA question:** If a pneumothorax was present or suspected before the inpatient order — for example, in the emergency department prior to admission — document this explicitly: "Pneumothorax present at time of inpatient order, predating any inpatient procedure." POA = Y excludes the case.

---

<!-- Section: PSI08 -->
## PSI 08: In-Hospital Fall with Hip Fracture

### What Triggers It

PSI 08 fires when an in-hospital fall resulting in hip fracture is coded as a secondary diagnosis with POA = N.

### Exclusions That Require Documentation

**Metastatic cancer and primary bone malignancy** are exclusionary — but only if documented and coded, even if the condition is not clinically manifested but is treated with adjuvant chemotherapy. A patient on tamoxifen for breast cancer may not appear to have active cancer, but that treatment status excludes them from PSI 08 if the breast cancer diagnosis is appropriately coded.

✅ "Patient on adjuvant tamoxifen for hormone receptor-positive breast cancer — active malignancy diagnosis maintained."

**Other exclusionary principal diagnoses:** If the admission was occasioned by seizure, stroke, syncope, poisoning, or other trauma that is sequenced as the principal diagnosis, the case is excluded. This requires accurate principal diagnosis sequencing.

---

<!-- Section: PSI15 -->
## PSI 15: Abdominopelvic Accidental Puncture or Laceration

### What Triggers It

PSI 15 fires when a diagnosis code for accidental puncture or laceration during an abdominopelvic procedure is coded as POA = N, and a second abdominopelvic procedure follows one or more days after the first surgery.

The key distinction from PSI 15: it fires only when the puncture or laceration is *unrecognized at the time of the initial procedure* — requiring a return to the OR. If the puncture is recognized and repaired during the initial procedure, it will not trigger PSI 15.

### The Coding Classification Catch

Many accidental puncture and laceration codes are assigned based on the ICD-10-CM coding classification system rather than requiring the physician to explicitly document "complication." If a surgeon documents a serosal tear and the subsequent repair, a complication code may be assigned even if the surgeon states the tear was unavoidable. The coders are applying the classification system, not making a clinical judgment.

The practical implication: if the puncture or laceration was recognized intraoperatively, repaired, and did not require a separate return to the OR on a subsequent day, document this explicitly in the operative note: "Serosal tear identified and repaired during the initial procedure — no separate operative intervention required."

---

<!-- Section: PSIandCCMCC -->
## PSIs, CCs, and MCCs: Where They Overlap

A critical concept from the Brundage Group's CDI framework: a complication code does not automatically trigger a PSI, and a PSI flag does not require a complication code.

**The distinction:**
- **CC/MCC** = the diagnosis itself carries payment weight in the DRG system, regardless of whether it was present on admission or developed during the stay
- **PSI** = the quality system flags the case based on diagnosis codes with POA = N in a surgical context

A post-surgical sepsis that was POA = Y is still a CC/MCC for DRG purposes. It is excluded from PSI 13.

A post-surgical DVT that develops during hospitalization is a CC for DRG purposes AND triggers PSI 12.

This is why documentation must be precise about both the diagnosis and the POA status. The two systems read the same codes but use them differently.

---

<!-- Section: DocumentationPrinciples -->
## Documentation Principles for PSI Accuracy

**Document POA status explicitly for high-risk conditions.** The most common cause of false-positive PSIs is a condition that was present on admission being coded as POA = N due to insufficient documentation. For pressure ulcers, VTE, sepsis, and pneumonia in particular — if the condition was present before admission, say so clearly in the H&P.

**Document the etiology of postoperative complications.** For respiratory failure, sepsis, AKI, and hemorrhage — the etiology determines whether the event codes as a procedural complication (PSI-triggering) or a medical complication (non-PSI-triggering). Name the cause. "Respiratory failure due to COPD exacerbation" and "postprocedural respiratory failure" are different codes and different PSI outcomes.

**Do not document "postoperative [condition]" unless you mean it was caused by the procedure.** In clinical language, "postoperative" is a time reference. In coding language, it is a causal relationship. If you mean "this condition occurred after surgery," write "this condition developed on POD [X]." If you mean "this condition was caused by the surgical procedure," write "postprocedural."

**Document exclusionary diagnoses when present.** Coagulopathy, metastatic cancer, pre-existing tracheostomy, bone malignancy, neuromuscular disorders — all of these can exclude cases from specific PSI calculations, but only if they are coded and documented as present on admission.

**When a procedure is expected and routine, say so.** Expected blood loss, expected ventilatory support, planned postoperative ventilation — these should be documented explicitly. Silence creates ambiguity; ambiguity creates PSI flags.

---

*Module: Patient Safety Indicators — Surgical Complications and Documentation*
*Playbook: TEAM Playbook*
*PSI Version: AHRQ QI v2022*
*PSI 90 component weights: AHRQ ICD-10-CM/PCS Specification v2022*
*Last updated: June 2026*
*Format: Option A — Component-ready prose markdown*
*Sources: AHRQ PSI Technical Specifications v2022; ACDIS Guest Post PSI Quirks (Kennedy); AHRQ PSI Validation Study (Romano, UC Davis, 2010); Brundage Group / ACDIS 2023 — What Physicians Need to Know About Complications and PSIs (Ericson & Brundage); PSI-11 Postoperative Respiratory Failure Provider Education Content and Algorithm (approved by coding department)*
