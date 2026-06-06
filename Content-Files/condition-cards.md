---
title: "Condition Documentation Cards"
route: /conditions
last-updated: 2026-06
---

---
# Sepsis

**Classification:** MCC
**Applies to:** All five TEAM procedures

[PEARL] Sepsis requires two things documented: an infection source and a systemic response causing organ dysfunction. "Infection" alone is not sepsis. "SIRS" alone is not sepsis. You must write both — and link them.

## Document This

✅ "Sepsis due to gram-negative bacteremia, source urinary tract. Meeting Sepsis-3 criteria with acute kidney injury and hypotension requiring fluid resuscitation."

✅ "Severe sepsis with acute respiratory failure secondary to community-acquired pneumonia."

✅ "Septic shock — vasopressors required to maintain MAP ≥65 despite adequate resuscitation. Source: infected surgical wound."

## Not This

❌ "Infection — antibiotics started." — Not sepsis. Will not be coded as sepsis.

❌ "Urosepsis." — Not a valid ICD-10 term. Will generate a query. Write sepsis due to UTI instead.

❌ "SIRS." — Not sepsis. Different diagnosis, different code, no MCC.

❌ "Sepsis workup ordered." — Unconfirmed; cannot be coded until the physician documents the diagnosis.

## Rules

- Name the source. "Sepsis" without a source codes correctly but is harder to defend.
- For severe sepsis, name the organ dysfunction — AKI, respiratory failure, encephalopathy. "Multi-organ dysfunction" alone is insufficient for coding organ dysfunction.
- For septic shock, document vasopressor requirement and persistent hypotension explicitly.

[DENIAL-RISK] Sepsis is the most audited diagnosis in inpatient medicine. Auditors look for: treatment consistent with sepsis (blood cultures, IV antibiotics, fluid resuscitation), organ dysfunction documentation, and explicit physician attestation — not just nursing or respiratory therapy notes.

---

# Acute Kidney Injury

**Classification:** MCC
**Applies to:** All five TEAM procedures

[PEARL] A rising creatinine is a lab value. Acute kidney injury is a diagnosis. You must write the diagnosis. KDIGO Stage 1 threshold: creatinine rise ≥0.3 mg/dL in 48 hours or ≥1.5× baseline within 7 days.

## Document This

✅ "Acute kidney injury, likely prerenal, creatinine 2.4 from baseline 1.0. IV fluids started, nephrotoxins held."

✅ "AKI with acute tubular necrosis, contrast-induced. Nephrology consulted."

✅ "Acute kidney injury on chronic kidney disease stage 3. Both conditions active and being managed."

## Not This

❌ "Creatinine elevated, monitoring." — Lab finding. Not a diagnosis.

❌ "Prerenal azotemia." — Not a valid coding term. Write AKI instead.

❌ "Creatinine up from baseline, likely related to contrast — will trend." — Still a lab observation, not a diagnosis.

## Rules

- When AKI occurs in a patient with CKD, document both — AKI and the CKD stage. Missing either loses severity.
- ATN (acute tubular necrosis) should be specified when the mechanism supports it — contrast, ischemia, aminoglycosides, rhabdomyolysis.
- Stage is not required in the note but is helpful for audit defense.

[DENIAL-RISK] Top RAC target. Auditors look for creatinine values meeting threshold, clinical response (IV fluids, held nephrotoxins, nephrology consult), and documentation throughout the stay — not only in the discharge summary.

---

# Metabolic or Toxic Encephalopathy

**Classification:** MCC
**Applies to:** All five TEAM procedures

[PEARL] "Confusion" is a symptom. "Altered mental status" is a symptom. "Delirium" is a CC — not an MCC. Metabolic or toxic encephalopathy is an MCC. The etiology is what makes the diagnosis specific enough to code correctly.

## Document This

✅ "Acute metabolic encephalopathy secondary to uremia and hyponatremia."

✅ "Toxic encephalopathy due to opioid toxicity."

✅ "Septic encephalopathy — metabolic encephalopathy in the setting of sepsis." (Septic encephalopathy codes as metabolic.)

✅ "Acute metabolic encephalopathy in the setting of chronic hepatic encephalopathy." — When both are present, document both explicitly.

## Not This

❌ "Confusion, likely multifactorial." — Multifactorial is not codeable. Name the cause.

❌ "AMS — delirium precautions in place." — Delirium is a CC; encephalopathy is an MCC. If the clinical picture supports encephalopathy, document it.

❌ "Encephalopathy." — Without metabolic or toxic qualifier, codes to unspecified encephalopathy. Audit exposure.

## Rules

- Always classify as metabolic or toxic, or both. "Acute encephalopathy" alone is a less specific code.
- Metabolic = internal cause (electrolyte, organ failure, sepsis, hypoxia).
- Toxic = external cause (alcohol, medication, drug, toxin).
- Link the etiology: "due to," "secondary to," "in the setting of."

[DENIAL-RISK] Heavily scrutinized. Auditors look for documented cognitive change from baseline, labs or findings consistent with the named etiology, and clinical response to treatment of the underlying cause.

---

# Severe Malnutrition

**Classification:** MCC (severe) · CC (moderate or unspecified)
**Applies to:** All five TEAM procedures

[PEARL] The dietitian can identify and document malnutrition findings. Only the physician can establish the diagnosis for coding purposes. A dietitian note alone — no matter how detailed — cannot be coded as a physician diagnosis.

## Document This

✅ "Severe protein-calorie malnutrition — greater than 10% weight loss over 2 months, significant muscle wasting on exam, energy intake less than 50% of estimated needs. Consistent with ASPEN criteria for severe malnutrition in the context of acute illness. TPN initiated."

✅ "Moderate malnutrition in the setting of chronic illness — reduced intake, mild muscle wasting, consistent with ASPEN criteria. Nutrition support initiated."

## Not This

❌ "Poor appetite — dietary consult placed." — No diagnosis. Not codeable.

❌ "Low albumin." — Albumin is not a required criterion for malnutrition under current ASPEN or GLIM criteria and is not a diagnosis.

❌ "Cachectic." — Codes as cachexia, which is a CC but is not the same as malnutrition.

## Rules

- Severity matters: severe = MCC, moderate = CC, unspecified = CC. Document the severity.
- Treatment must match severity. A patient documented as severely malnourished should have aggressive nutritional intervention — TPN, tube feeds, or equivalent. Mismatch triggers audits.
- ASPEN criteria require at least 2 of: energy deficit, weight loss, muscle wasting, fat wasting, fluid accumulation, reduced grip strength — in the context of acute illness, chronic illness, or social circumstances.

[DENIAL-RISK] OIG priority. Auditors look for ASPEN/GLIM criteria support, physician documentation (not dietitian only), and treatment intensity consistent with stated severity.

---

# Acute Heart Failure

**Classification:** MCC (acute or acute-on-chronic) · CC (chronic or unspecified)
**Applies to:** All five TEAM procedures

[PEARL] "CHF" and "heart failure" written alone are unspecified diagnoses. Unspecified heart failure is not a CC or MCC. Three words fix it: acute, systolic or diastolic.

## Document This

✅ "Acute on chronic systolic heart failure. IV diuresis initiated, 2L net negative. EF 35% on prior echo."

✅ "Acute diastolic heart failure, new onset. BNP 2,400, pulmonary edema on CXR, responding to IV Lasix."

✅ "Chronic systolic heart failure, stable. Continue home furosemide and carvedilol." — CC only, but still documented correctly.

## Not This

❌ "CHF — gave Lasix." — Unspecified. No CC or MCC.

❌ "Heart failure exacerbation." — "Exacerbation" does not code to acute. Write acute explicitly.

❌ "Volume overloaded." — Clinical finding, not a diagnosis.

## Rules

- Specify systolic vs. diastolic — or combined if both are present.
- Specify acuity — acute, chronic, or acute-on-chronic.
- Include EF when available. It does not change the code but supports audit defense.
- If the patient received IV diuresis, the clinical picture almost always supports acute HF. Document it as such.

---

# Acute Respiratory Failure

**Classification:** MCC
**Applies to:** All five TEAM procedures

[PEARL] Hypoxia is a finding. Respiratory distress is a symptom. Acute respiratory failure is a diagnosis. Mechanical ventilation is not required — patients on high-flow nasal cannula or BiPAP can qualify.

## Document This

✅ "Acute hypoxic respiratory failure requiring high-flow nasal cannula at 40L/60%. Likely pneumonia-related."

✅ "Acute hypercapnic respiratory failure due to COPD exacerbation. Non-invasive positive pressure ventilation initiated."

✅ "Acute-on-chronic respiratory failure — baseline hypercapnia, now acutely worsening requiring BiPAP."

## Not This

❌ "Hypoxia — supplemental O2 started." — Symptom and treatment. Not a diagnosis.

❌ "Respiratory distress, improving on O2." — Not a diagnosis.

❌ "Prolonged intubation." — Describes a treatment, not a diagnosis.

## Rules

- Specify type: hypoxic (low O2), hypercapnic (high CO2), or both.
- Link to etiology when known: pneumonia, COPD exacerbation, pulmonary edema, sepsis.
- If the patient required escalation beyond routine supplemental O2 — high-flow, BiPAP, CPAP, or intubation — the clinical picture likely supports respiratory failure. Document it.

[DENIAL-RISK] Auditors look for SpO2 or ABG values consistent with the diagnosis, escalation of respiratory support beyond routine O2, and documentation throughout the stay.

---

# Acute Pulmonary Embolism

**Classification:** MCC
**Applies to:** All five TEAM procedures (especially LEJR, SHFFT, Spinal Fusion)

[PEARL] PE must be confirmed and diagnosed by the physician — a positive CT-PA is a finding, not a diagnosis. Write the diagnosis explicitly in the note.

## Document This

✅ "Acute pulmonary embolism confirmed on CT-PA. Anticoagulation initiated with therapeutic enoxaparin."

✅ "Submassive pulmonary embolism with right heart strain on echo. Hematology consulted, systemic thrombolytics considered."

✅ "Acute bilateral pulmonary emboli, hemodynamically stable. Anticoagulation started."

## Not This

❌ "CT-PA positive — starting heparin." — Positive finding documented, diagnosis not written.

❌ "Suspected PE, anticoagulated empirically." — Suspected is not codeable. Once confirmed, write the confirmed diagnosis.

## Rules

- Specify acuity: acute vs. chronic. Chronic PE codes differently and carries less severity weight.
- Massive (hemodynamic compromise) vs. submassive (right heart strain without shock) is clinically meaningful and should be documented when applicable.
- POA matters for PE: a PE present on admission vs. one that develops during hospitalization affects HAC implications for orthopedic procedures specifically.

---

# Acute Myocardial Infarction

**Classification:** MCC
**Applies to:** CABG · All five procedures when it occurs as a complication

[PEARL] "Troponin elevation" is a lab value. "Demand ischemia" is a clinical finding. Acute myocardial infarction is a diagnosis. Perioperative MI after CABG is not "expected troponin release" — it is a codeable, documentable, MCC-generating diagnosis when the clinical criteria are met.

## Document This

✅ "NSTEMI — troponin peak 18 ng/mL with new ST changes in leads V4-V6. Cardiology managing."

✅ "Perioperative myocardial infarction, type 5, post-CABG. New wall motion abnormality on echo, troponin significantly elevated above expected post-bypass range."

✅ "Acute STEMI, inferior wall. Emergent cath lab activation."

## Not This

❌ "Troponin bump — expected after bypass." — Not a diagnosis. If criteria are met, document MI.

❌ "Demand ischemia." — CC only, not MCC. If the picture supports MI, document MI.

❌ "Elevated troponin, etiology unclear." — Uncertainty is acceptable — but once you have made a clinical determination, document it.

## Rules

- STEMI vs. NSTEMI: specify when known.
- Perioperative MI (type 5) after CABG is its own category — document it separately from expected post-bypass troponin release when clinical criteria support it.
- Type 2 MI (demand ischemia causing myocardial necrosis) is a higher-acuity diagnosis than demand ischemia alone — document when the clinical picture supports it.

---

# Severe Sepsis / Septic Shock

**Classification:** MCC (if patient survives to discharge)
**Applies to:** All five TEAM procedures

[NOTE] Septic shock is a specific diagnosis distinct from sepsis. It requires both vasopressor dependence and lactate >2 mmol/L despite adequate resuscitation. Document both elements explicitly.

## Document This

✅ "Septic shock — persistent hypotension requiring norepinephrine, lactate 4.2 mmol/L despite 3L IVF. Source: intra-abdominal infection."

✅ "Severe sepsis with acute organ dysfunction: AKI stage 2 and metabolic encephalopathy, in the setting of gram-positive bacteremia."

## Not This

❌ "On pressors for hypotension." — Describes treatment, not diagnosis.

❌ "Sepsis, hypotensive." — Hypotension alone doesn't document shock. Write septic shock when vasopressors are required.

## Rules

- Septic shock = sepsis + vasopressors + lactate >2 despite resuscitation. All three elements should be evident in the chart.
- Severe sepsis = sepsis + named organ dysfunction. Name the organ — AKI, respiratory failure, encephalopathy — don't just write "multi-organ dysfunction."
- Both are MCC only if the patient is discharged alive.

---

# Disseminated Intravascular Coagulation (DIC)

**Classification:** MCC
**Applies to:** Major Bowel · CABG · SHFFT (sepsis-related DIC)

[PEARL] DIC in the setting of sepsis or major surgery is frequently present and rarely documented. If the patient has thrombocytopenia, prolonged PT/PTT, elevated D-dimer, and fibrinogen dropping — and you are treating it — document the diagnosis.

## Document This

✅ "Disseminated intravascular coagulation in the setting of septic shock — thrombocytopenia, elevated D-dimer, hypofibrinogenemia. FFP and cryoprecipitate administered."

✅ "DIC, acute, secondary to gram-negative sepsis. Hematology consulted."

## Not This

❌ "Coagulopathy — FFP given." — Coagulopathy is a symptom. DIC is a diagnosis.

❌ "Labs consistent with DIC." — Labs support the diagnosis; the physician must state it.

## Rules

- Link DIC to its cause: sepsis, major surgery, malignancy, obstetric complication.
- Treatment should match: FFP, cryoprecipitate, platelet transfusion, or hematology involvement supports the diagnosis clinically.

---

# Pressure Ulcer (Stage III or IV)

**Classification:** MCC (Stage III or IV) · CC (Stage II)
**Applies to:** SHFFT · LEJR · Any immobilized patient

[PEARL] Physicians must document the stage. Nursing documents the wound — but the physician's attestation of stage is required for coding. An unstaged pressure ulcer codes as unspecified — no CC or MCC.

## Document This

✅ "Stage III sacral pressure injury, present on admission. Wound care team managing."

✅ "Stage IV right heel pressure ulcer with exposed tendon, developed during hospitalization." — Note: developed during hospitalization = HAC implications; POA = N.

✅ "Stage II left hip pressure injury, present on admission. Wound care initiated."

## Not This

❌ "Decubitus ulcer — wound care ordered." — No stage. Codes as unspecified. No CC or MCC.

❌ "Redness to sacrum." — Stage I. Not a CC or MCC.

## Rules

- Stage the wound as the physician of record, not just nursing.
- POA status is critical: Stage III/IV present on admission = MCC. Stage III/IV acquired during hospitalization = HAC — will not move the DRG tier.
- Document site and laterality: sacral, right heel, left ischium, etc.

---

# Aspiration Pneumonia

**Classification:** MCC
**Applies to:** SHFFT · Major Bowel · Any procedure with prolonged intubation

[PEARL] Aspiration pneumonia and aspiration pneumonitis are different diagnoses with different codes. Aspiration pneumonia = bacterial infection from aspirated material. Aspiration pneumonitis = chemical inflammation from aspiration. The clinical picture and treatment determine which applies.

## Document This

✅ "Aspiration pneumonia, right lower lobe, following witnessed aspiration event. IV antibiotics started."

✅ "Healthcare-associated pneumonia with suspected aspiration component in an intubated patient."

## Not This

❌ "Aspiration event — monitoring." — Event documented, diagnosis not.

❌ "Pneumonia." — Specify type: aspiration, community-acquired, hospital-acquired, ventilator-associated. Each codes differently.

## Rules

- Aspiration pneumonia is an MCC. Standard pneumonia (without aspiration or viral specification) may code as MCC or CC depending on the organism.
- For intubated patients, distinguish ventilator-associated pneumonia (VAP) from aspiration — VAP has HAC implications.
- Document the side and lobe when known.

---

# Atrial Fibrillation

**Classification:** CC
**Applies to:** CABG · LEJR · All procedures in elderly patients

[PEARL] Atrial fibrillation is one of the most prevalent cardiac diagnoses in surgical patients and one of the most vaguely documented. "A-fib" codes correctly — but the type matters for clinical completeness and audit defense.

## Document This

✅ "Paroxysmal atrial fibrillation, converted to sinus rhythm with amiodarone. Discharged in sinus."

✅ "Persistent atrial fibrillation with rapid ventricular response, rate controlled on metoprolol. Anticoagulated with apixaban."

✅ "New-onset postoperative atrial fibrillation, POD2 after CABG. Spontaneously converted. Amiodarone continued for 4 weeks."

## Not This

❌ "Irregular rhythm." — Not codeable.

❌ "A-fib history." — History of codes as resolved. If active, document as active.

❌ "Rate-controlled." — Describes management, not diagnosis.

## Rules

- Specify type: paroxysmal (terminates spontaneously), persistent (requires intervention or ongoing), long-standing persistent, or permanent.
- New post-operative AF in CABG patients is extremely common and almost as commonly underdocumented. Document it.
- If present at admission, document as POA. If new during hospitalization, document when it started.

---

# COPD with Acute Exacerbation

**Classification:** CC
**Applies to:** All five TEAM procedures

[PEARL] "COPD" alone codes correctly as a chronic diagnosis but without exacerbation it carries less severity weight. "COPD with acute exacerbation" is the CC. If you escalated treatment — added steroids, nebulizers, changed O2 requirements — document the exacerbation.

## Document This

✅ "COPD with acute exacerbation — increased dyspnea, worsening airflow obstruction. Systemic steroids and scheduled nebulizers started."

✅ "Acute exacerbation of COPD requiring IV methylprednisolone and respiratory therapy."

## Not This

❌ "COPD — continued home inhalers." — Stable COPD. No exacerbation captured.

❌ "Bronchospasm." — Symptom, not a diagnosis.

❌ "Wheezing, SOB — nebulizer treatments given." — Treatment documented, exacerbation diagnosis not.

## Rules

- Exacerbation means worsening from baseline requiring treatment escalation: steroids, increased bronchodilators, O2 change, or antibiotics for infectious exacerbation.
- Link to infection if present: "COPD exacerbation with acute bronchitis due to H. influenzae."
- If respiratory failure develops on top of COPD exacerbation, document both.

---

# Obesity Hypoventilation Syndrome

**Classification:** CC
**Applies to:** LEJR · SHFFT · Spinal Fusion — any procedure in morbidly obese patients on home CPAP/BiPAP

[PEARL] "Morbid obesity" and "obstructive sleep apnea" are not OHS. OHS requires daytime hypercapnia — chronic CO2 retention while awake. If your patient uses home BiPAP and has a BMI over 35, OHS is likely and worth documenting.

## Document This

✅ "Obesity hypoventilation syndrome — BMI 46, home BiPAP, prior ABG with daytime pCO₂ 52 mmHg. BiPAP continued perioperatively."

✅ "OHS (Pickwickian syndrome) — on home BiPAP, daytime hypercapnia documented on prior pulmonology workup."

## Not This

❌ "Morbid obesity on CPAP for sleep apnea." — OSA and OHS are different diagnoses. OSA is not a CC. OHS is.

❌ "BMI 48, home CPAP." — BMI is a finding. OHS is a diagnosis.

## Rules

- OHS requires BMI ≥30 and awake daytime hypercapnia (pCO₂ >45 mmHg) not explained by another cause.
- If prior ABG or pulmonology documentation supports the diagnosis, reference it.
- "Pickwickian syndrome" is an accepted alternate term that codes identically.

---

# Acute Blood Loss Anemia

**Classification:** CC
**Applies to:** All five TEAM procedures

[PEARL] When you order a transfusion, document why. "Postop anemia" codes as unspecified anemia — not a CC. "Acute blood loss anemia" is a CC and accurately reflects why the patient needed blood.

## Document This

✅ "Acute blood loss anemia — hemoglobin 7.1 following 800mL estimated blood loss intraoperatively. Two units pRBC transfused."

✅ "Anemia of acute blood loss, postoperative. Hemoglobin dropped from 12.4 preoperatively to 7.8. Transfusion initiated."

## Not This

❌ "Postop anemia — transfusion given." — Unspecified anemia. Not a CC.

❌ "Hemoglobin low — transfuse." — Lab finding plus order. Not a diagnosis.

## Rules

- "Acute blood loss anemia" (D62) is the correct term. It codes as a CC.
- Iron deficiency anemia or anemia of chronic disease are different diagnoses — don't use those terms if the etiology is surgical blood loss.
- Chronic anemia present before surgery codes separately from acute blood loss anemia that develops during or after the procedure. Document both if both are present.

---

# Drug or Alcohol Withdrawal

**Classification:** CC
**Applies to:** All five TEAM procedures

[PEARL] Patients who use alcohol or opioids daily will withdraw during hospitalization. "History of alcohol use" is not a diagnosis. Withdrawal is an active, manageable, codeable condition — and a common unexpected complication that CDI programs consistently flag as underdocumented.

## Document This

✅ "Alcohol withdrawal syndrome, uncomplicated. CIWA protocol initiated, lorazepam administered."

✅ "Opioid withdrawal in setting of chronic opioid dependence — patient using 80mg oxycodone daily at home, now without access. Methadone/buprenorphine bridge started."

✅ "Alcohol withdrawal with seizure. Neurology consulted, benzodiazepine protocol escalated."

## Not This

❌ "History of alcohol use, monitoring for withdrawal." — No diagnosis. Not codeable.

❌ "ETOH use disorder." — Use disorder alone is a different code than withdrawal. If withdrawal is occurring, document withdrawal.

## Rules

- Specify the substance: alcohol, opioid, benzodiazepine, etc.
- Specify severity when applicable: uncomplicated, with seizure, with delirium (delirium tremens).
- CIWA score initiation and benzodiazepine administration in the chart support the diagnosis clinically.

---

# Dementia with Behavioral Disturbance

**Classification:** CC
**Applies to:** SHFFT · LEJR — elderly surgical patients

[PEARL] "Dementia" alone codes as unspecified dementia. "Dementia with behavioral disturbance" is a CC. If the patient is agitated, wandering, aggressive, or has delusions on top of baseline dementia — document the behavioral disturbance.

## Document This

✅ "Moderate Alzheimer's dementia with behavioral disturbance — agitation and combativeness, requiring redirection. On donepezil at home."

✅ "Vascular dementia with behavioral disturbance — sundowning, acute agitation in the evening. Quetiapine initiated."

## Not This

❌ "Dementia — patient confused." — Unspecified dementia. No CC if behavioral disturbance not specified.

❌ "Known dementia, oriented to person only." — Orientation level noted, behavioral disturbance not named.

## Rules

- Specify dementia type when known: Alzheimer's, vascular, Lewy body, frontotemporal.
- Behavioral disturbance includes: agitation, aggression, wandering, psychosis, sundowning, combativeness.
- Pre-fracture cognitive baseline should be documented for SHFFT patients — it distinguishes acute delirium from underlying dementia and matters for disposition planning.

---

# Chronic Kidney Disease (Staged)

**Classification:** CC (Stage IV) · MCC (Stage V / ESRD)
**Applies to:** All five TEAM procedures

[PEARL] "CKD" without a stage codes as unspecified and does not carry CC or MCC weight. The eGFR is in the chart. Stage the CKD.

## Document This

✅ "Chronic kidney disease, stage 4 — eGFR 22 mL/min/1.73m². Nephrology following."

✅ "End-stage renal disease on hemodialysis three times weekly."

✅ "CKD stage 3b — eGFR 34. Monitored, no dialysis yet."

## Not This

❌ "CKD — creatinine at baseline." — Unspecified. No CC.

❌ "Renal insufficiency." — Vague. No codeable stage.

❌ "Chronic renal disease." — Unspecified. No CC.

## Rules

| Stage | eGFR | Classification |
|-------|------|---------------|
| 3a | 45–59 | No CC/MCC |
| 3b | 30–44 | No CC/MCC |
| 4 | 15–29 | CC |
| 5 | <15 | MCC |
| ESRD | On dialysis | MCC |

- When AKI occurs on top of CKD, document both and stage both.
- ESRD on dialysis is an MCC — document dialysis status and frequency explicitly.

---

*Condition Documentation Cards · TEAM Playbook*
*Last updated June 2026 · Reflects CMS MS-DRG V43.0 and ICD-10-CM FY2026*
*CC/MCC designations update annually with IPPS Final Rule*
