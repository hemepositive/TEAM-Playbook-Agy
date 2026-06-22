export interface CaseImpact {
  paymentShift: string;
  soiBefore: number;
  soiAfter: number;
  romBefore: number;
  romAfter: number;
}

export interface ScenarioData {
  id: string;
  title: string;
  patientName: string;
  age: number;
  gender: string;
  admittingDx: string;
  chiefComplaint: string;
  hpi: string;
  pmh: string[];
  vitalsLabs: { label: string; value: string }[];
  challengePrompt: string;
  options: string[];
  correctOptions: number[];
  optimalOption: string;
  procedure: string;
  impact: CaseImpact;
  trapExplanation: string;
}

export const scenarios: ScenarioData[] = [
  {
    "id": "enc-1",
    "title": "The LEJR Trap (Difficulty: \u2b50 Apprentice)",
    "patientName": "Robert M.",
    "age": 74,
    "gender": "Male",
    "admittingDx": "Right knee osteoarthritis",
    "chiefComplaint": "I'm here for my new knee.",
    "hpi": "Patient is a 74-year-old male admitted for an elective Right Total Knee Arthroplasty (LEJR). The procedure went well. Now on post-op day 1, the nursing staff reports that the patient's urine output has dropped significantly over the past 8 hours. He is still making some urine but much less than expected based on his fluid intake.",
    "pmh": [
      "Type 2 Diabetes Mellitus",
      "Hypertension",
      "Osteoarthritis"
    ],
    "vitalsLabs": [
      {
        "label": "Current Creatinine",
        "value": "2.4 mg/dL"
      },
      {
        "label": "Pre-op Creatinine",
        "value": "0.9 mg/dL"
      },
      {
        "label": "BUN",
        "value": "42 mg/dL"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Right knee osteoarthritis",
      "Elevated creatinine",
      "Renal insufficiency",
      "Acute kidney injury",
      "Type 2 Diabetes Mellitus",
      "Hypertension"
    ],
    "correctOptions": [
      0,
      3,
      4,
      5
    ],
    "optimalOption": "Acute kidney injury",
    "procedure": "lejr",
    "impact": {
      "paymentShift": "$14,500 \u2794 $23,500 (+$9,000)",
      "soiBefore": 1,
      "soiAfter": 3,
      "romBefore": 1,
      "romAfter": 2
    },
    "trapExplanation": "- You missed: \"Acute kidney injury\" (MCC)\n- If you selected \"Elevated creatinine\" or \"Renal insufficiency\", these are lab findings or vague symptoms that do not code to an MCC.\n- LEJR is a 2-tier DRG. An acute kidney injury diagnosis (N17.9) is an MCC that will shift the reimbursement tier correctly for this patient's severity!"
  },
  {
    "id": "enc-2",
    "title": "Major Bowel Acidemia (Difficulty: \u2b50\u2b50\u2b50\u2b50)",
    "patientName": "Sarah L.",
    "age": 58,
    "gender": "Female",
    "admittingDx": "Perforated Diverticulitis",
    "chiefComplaint": "My stomach hurts worse than it ever has.",
    "hpi": "Patient is a 58-year-old female admitted for an emergent partial colectomy (Major Bowel Procedure) due to perforated diverticulitis. Post-op, she is recovering in the ICU. She is tachypneic but oxygenating well on room air.",
    "pmh": [
      "Diverticulosis",
      "Appendectomy in childhood"
    ],
    "vitalsLabs": [
      {
        "label": "Lactate",
        "value": "4.2 mmol/L"
      },
      {
        "label": "pH",
        "value": "7.28"
      },
      {
        "label": "Bicarbonate",
        "value": "14 mEq/L"
      },
      {
        "label": "WBC",
        "value": "18,000 /mcL"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Diverticulitis with perforation",
      "Low bicarbonate",
      "Lactic acidosis",
      "Elevated lactic acid",
      "Leukocytosis",
      "Secondary peritonitis"
    ],
    "correctOptions": [
      0,
      2,
      5
    ],
    "optimalOption": "Lactic acidosis",
    "procedure": "major-bowel",
    "impact": {
      "paymentShift": "$18,000 \u2794 $23,000 (+$5,000)",
      "soiBefore": 2,
      "soiAfter": 3,
      "romBefore": 2,
      "romAfter": 3
    },
    "trapExplanation": "- You missed: \"Lactic acidosis\" (CC)\n- Acidemia has an over 60% ICD code omission rate in studies!\n- Providers order labs and treat the condition but rarely name it. \"Low bicarb\" or \"elevated lactic acid\" are lab values, not diagnoses. Documenting lactic acidosis secures the CC."
  },
  {
    "id": "enc-3",
    "title": "SHFFT Post-Hemorrhagic Anemia (Difficulty: \u2b50)",
    "patientName": "Eleanor W.",
    "age": 82,
    "gender": "Female",
    "admittingDx": "Left Femoral Neck Fracture",
    "chiefComplaint": "I fell in the bathroom and my hip hurts so much.",
    "hpi": "Eleanor admitted for Surgical Hip and Femur Fracture Treatment (SHFFT). On post-op day 2, she is complaining of dizziness when sitting up in her bed. Her heart rate ranges in the 110s. The team ordered a stat CBC and subsequently transfused 2 units of pRBCs.",
    "pmh": [
      "Osteoporosis",
      "Atrial Fibrillation (on Eliquis)"
    ],
    "vitalsLabs": [
      {
        "label": "Post-op Hgb",
        "value": "7.6 g/dL"
      },
      {
        "label": "Admission Hgb",
        "value": "11.2 g/dL"
      },
      {
        "label": "BP",
        "value": "100/60 mmHg, HR: 112 bpm"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Left femoral neck fracture",
      "Anemia",
      "Acute posthemorrhagic anemia",
      "Blood loss",
      "Osteoporosis",
      "Atrial fibrillation"
    ],
    "correctOptions": [
      0,
      2,
      4,
      5
    ],
    "optimalOption": "Acute posthemorrhagic anemia",
    "procedure": "hip-fracture",
    "impact": {
      "paymentShift": "$13,000 \u2794 $18,000 (+$5,000)",
      "soiBefore": 1,
      "soiAfter": 2,
      "romBefore": 1,
      "romAfter": 2
    },
    "trapExplanation": "- You missed: \"Acute posthemorrhagic anemia\" (CC)\n- Generic \"anemia\" codes to D64.9, which is not a CC!\n- Acute posthemorrhagic anemia (D62) requires documentation of the acute blood loss as the cause and provides a CC rating, shifting the SHFFT 3-tier DRG reimbursement."
  },
  {
    "id": "enc-4",
    "title": "Spinal Fusion & Encephalopathy (Difficulty: \u2b50\u2b50\u2b50)",
    "patientName": "James C.",
    "age": 61,
    "gender": "Male",
    "admittingDx": "Lumbar Spinal Stenosis",
    "chiefComplaint": "My back pain is ten out of ten down my legs.",
    "hpi": "Patient admitted for elective multilevel lumbar spinal fusion. Post-op day 2, the night nurse notes the patient is \"confused and pulling at his IV.\" His family expresses concern, stating he is normally sharply oriented and never confused at baseline. His CAM screen is positive.",
    "pmh": [
      "Hypertension",
      "Hyperlipidemia"
    ],
    "vitalsLabs": [
      {
        "label": "Sodium",
        "value": "128 mEq/L (Down from 139 admission)"
      },
      {
        "label": "O2 Sat",
        "value": "95% on Room Air"
      },
      {
        "label": "Neuro",
        "value": "Disoriented to time and place."
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Lumbar spinal stenosis",
      "Altered mental status / Confusion",
      "Delirium",
      "Metabolic encephalopathy",
      "Hyponatremia",
      "Low sodium"
    ],
    "correctOptions": [
      0,
      3,
      4
    ],
    "optimalOption": "Metabolic encephalopathy",
    "procedure": "spinal-fusion",
    "impact": {
      "paymentShift": "$22,000 \u2794 $34,500 (+$12,500)",
      "soiBefore": 1,
      "soiAfter": 3,
      "romBefore": 1,
      "romAfter": 3
    },
    "trapExplanation": "- You missed: \"Metabolic encephalopathy\" (MCC) and \"Hyponatremia\" (CC)\n- \"Confusion\" and \"Altered mental status\" are symptoms, not diagnoses. \"Delirium\" captures only a CC.\n- You need to document \"Metabolic encephalopathy\" secondary to \"Hyponatremia\" to correctly recognize the MCC along with the underlying cause."
  },
  {
    "id": "enc-5",
    "title": "CABG & The Specificity Rule (Difficulty: \u2b50\u2b50)",
    "patientName": "Michael T.",
    "age": 68,
    "gender": "Male",
    "admittingDx": "Multivessel CAD",
    "chiefComplaint": "I had terrible chest pressure while shoveling snow.",
    "hpi": "Patient admitted for CABG. On post-op day 2, the telemetry monitor alarms for an irregular, rapid heartbeat. EKG confirms a new arrhythmia. The patient is started on an amiodarone drip.",
    "pmh": [
      "Coronary Artery Disease",
      "Hyperlipidemia. No prior history of arrhythmias"
    ],
    "vitalsLabs": [
      {
        "label": "HR",
        "value": "135 bpm, irregularly irregular"
      },
      {
        "label": "BP",
        "value": "105/70 mmHg"
      },
      {
        "label": "EKG",
        "value": "New onset Atrial Fibrillation"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Coronary Artery Disease",
      "Atrial Fibrillation",
      "Cardiac Arrhythmia",
      "Paroxysmal Atrial Fibrillation",
      "Post-operative tachycardia"
    ],
    "correctOptions": [
      0,
      3
    ],
    "optimalOption": "Paroxysmal Atrial Fibrillation",
    "procedure": "cabg",
    "impact": {
      "paymentShift": "No Payment Shift (2-Tier DRG: CC does not change tier) \u2014 Increases SOI/ROM!",
      "soiBefore": 1,
      "soiAfter": 2,
      "romBefore": 1,
      "romAfter": 2
    },
    "trapExplanation": "- You missed: \"Paroxysmal Atrial Fibrillation\" (CC)\n- Unspecified Atrial Fibrillation is NOT a CC. Specifying this as Paroxysmal, Persistent, or Longstanding Persistent Atrial Fibrillation captures the CC.\n- Even though CABG is a 2-tier DRG and this won't move the payment tier on its own, it significantly affects the Severity of Illness/Risk of Mortality (SOI/ROM)."
  },
  {
    "id": "enc-6",
    "title": "The Sepsis Trap (Difficulty: \u2b50)",
    "patientName": "Thomas G.",
    "age": 65,
    "gender": "Male",
    "admittingDx": "Ischemic Bowel",
    "chiefComplaint": "My belly hurts and I feel freezing.",
    "hpi": "Admitted for emergency bowel resection (Major Bowel Procedure) for ischemic bowel. Post-op, the patient spikes a fever of 102.1\u00b0F and his heart rate goes up to 120 bpm. The team suspects peritonitis from a micro-perforation and starts broad-spectrum antibiotics.",
    "pmh": [
      "Hypertension",
      "Hyperlipidemia"
    ],
    "vitalsLabs": [
      {
        "label": "Temp",
        "value": "102.1\u00b0F, HR: 120 bpm, RR: 22"
      },
      {
        "label": "WBC",
        "value": "21,000 /mcL"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Ischemic bowel",
      "Severe infection",
      "SIRS",
      "Bacteremia",
      "Sepsis",
      "Elevated WBC"
    ],
    "correctOptions": [
      0,
      4
    ],
    "optimalOption": "Sepsis",
    "procedure": "major-bowel",
    "impact": {
      "paymentShift": "$18,000 \u2794 $31,500 (+$13,500)",
      "soiBefore": 2,
      "soiAfter": 4,
      "romBefore": 2,
      "romAfter": 4
    },
    "trapExplanation": "- You missed: \"Sepsis\" (MCC)\n- Documenting \"SIRS\", \"severe infection\", or \"bacteremia\" does NOT code to Sepsis.\n- The provider must document the explicit word Sepsis to capture the MCC. A generic inflammatory state or elevated WBC count leaves major reimbursement on the table for this complex bowel case."
  },
  {
    "id": "enc-7",
    "title": "The OHS Trap (Difficulty: \u2b50\u2b50\u2b50)",
    "patientName": "David R.",
    "age": 54,
    "gender": "Male",
    "admittingDx": "Left Hip Osteoarthritis",
    "chiefComplaint": "I am here for my hip replacement.",
    "hpi": "Admitted for Left Total Hip Arthroplasty (LEJR). The patient has significant obesity and snores heavily in the recovery room. He is placed on his home BiPAP machine.",
    "pmh": [
      "\"Sleep Apnea\" per patient statement. Hypertension"
    ],
    "vitalsLabs": [
      {
        "label": "BMI",
        "value": "42.5"
      },
      {
        "label": "ABG",
        "value": "PaCO2 52 mmHg (Hypercapnia)"
      },
      {
        "label": "O2 Sat",
        "value": "93% on BiPAP"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Left hip osteoarthritis",
      "Obstructive Sleep Apnea",
      "Obesity Hypoventilation Syndrome",
      "Morbid Obesity",
      "Elevated CO2",
      "Hypertension"
    ],
    "correctOptions": [
      0,
      2,
      3,
      5
    ],
    "optimalOption": "Obesity Hypoventilation Syndrome",
    "procedure": "lejr",
    "impact": {
      "paymentShift": "$14,500 \u2794 $23,500 (+$9,000)",
      "soiBefore": 1,
      "soiAfter": 3,
      "romBefore": 1,
      "romAfter": 2
    },
    "trapExplanation": "- You missed: \"Obesity Hypoventilation Syndrome\" (MCC)\n- Usually, Obstructive Sleep Apnea (OSA) is just a CC. But given the hypercapnia (PaCO2 > 45) and severe obesity, this is Obesity Hypoventilation Syndrome (OHS), which is an MCC!\n- This completely shifts the LEJR DRG tier from without MCC to with MCC."
  },
  {
    "id": "enc-8",
    "title": "The Hemiplegia Trap (Difficulty: \u2b50\u2b50\u2b50\u2b50)",
    "patientName": "William C.",
    "age": 78,
    "gender": "Male",
    "admittingDx": "Intertrochanteric Femur Fx",
    "chiefComplaint": "I tripped over my dog and broke my hip.",
    "hpi": "Admitted for Surgical Hip and Femur Fracture Treatment (SHFFT). PT/OT evaluate the patient and note he still has difficulty gripping a walker with his left hand, and that he drags his left leg slightly when trying to mobilize. Furthermore, the patient has Class 2 Obesity (BMI 36.8) and a history of poorly controlled diabetes and hypertension, which complicates post-op mobilization.",
    "pmh": [
      "CVA 3 years ago",
      "Hypertension",
      "Type 2 Diabetes Mellitus"
    ],
    "vitalsLabs": [
      {
        "label": "Neuro exam",
        "value": "Left grip strength 3/5. Left lower extremity mild circumduction gait."
      },
      {
        "label": "BMI",
        "value": "36.8 (Class 2 Obesity)"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Intertrochanteric femur fracture",
      "History of stroke (CVA)",
      "Hypertension",
      "Hemiplegia/Hemiparesis from prior stroke",
      "Left-sided weakness",
      "Fall assessment",
      "Morbid obesity due to comorbidities"
    ],
    "correctOptions": [
      0,
      2,
      3,
      6
    ],
    "optimalOption": "Hemiplegia/Hemiparesis from prior stroke",
    "procedure": "hip-fracture",
    "impact": {
      "paymentShift": "$13,000 \u2794 $25,000 (+$12,000)",
      "soiBefore": 1,
      "soiAfter": 3,
      "romBefore": 1,
      "romAfter": 3
    },
    "trapExplanation": "- You missed: \"Hemiplegia/Hemiparesis from prior stroke\" (MCC) and/or \"Morbid obesity due to comorbidities\" (CC).\n- If you documented \"History of stroke\", it codes to Z86.73, which is not a CC!\n- The residual deficits observed by PT mean the prior stroke effects are still an active condition. This upgrades the SHFFT encounter drastically.\n- Additionally, a BMI of 36.8 is Class 2 Obesity, which is not a CC on its own. However, because the patient has weight-exacerbated diabetes and hypertension, it meets clinical criteria for \"Morbid obesity due to comorbidities\" (E66.01), which functions as a CC (DRG 482 to 481 shift, +$3,663.75 if no MCC is present) and triggers HCC 48 risk adjustment."
  },
  {
    "id": "enc-9",
    "title": "Acute-on-Chronic Respiratory Failure (Difficulty: \u2b50\u2b50\u2b50\u2b50)",
    "patientName": "Arthur P.",
    "age": 71,
    "gender": "Male",
    "admittingDx": "Advanced Multivessel CAD",
    "chiefComplaint": "I get out of breath just walking to the kitchen.",
    "hpi": "Admitted for CABG procedure. The patient has a long history of severe COPD and is dependent on home oxygen. On post-op day 1, he is unable to be weaned from the ventilator due to severe respiratory decompensation.",
    "pmh": [
      "Severe COPD (Baseline PaCO2 48)",
      "CAD"
    ],
    "vitalsLabs": [
      {
        "label": "Current ABG",
        "value": "PaCO2 65 mmHg, pH 7.21"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Coronary Artery Disease",
      "COPD exacerbation",
      "Acute respiratory failure",
      "Chronic respiratory failure",
      "Acute-on-chronic respiratory failure",
      "Hypoxia"
    ],
    "correctOptions": [
      0,
      4
    ],
    "optimalOption": "Acute-on-chronic respiratory failure",
    "procedure": "cabg",
    "impact": {
      "paymentShift": "$36,000 \u2794 $52,000 (+$16,000)",
      "soiBefore": 2,
      "soiAfter": 4,
      "romBefore": 2,
      "romAfter": 4
    },
    "trapExplanation": "- You missed: \"Acute-on-chronic respiratory failure\" (MCC)\n- While \"Acute respiratory failure\" is an MCC, capturing the \"acute-on-chronic\" nuance demonstrates optimal CDI documentation.\n- Documenting \"hypoxia\" or just \"COPD exacerbation\" (CC) misses the chronic baseline completely, leaving critical value on the table for this complex CABG patient."
  },
  {
    "id": "enc-10",
    "title": "Pressure Ulcer Staging & POA (Difficulty: \u2b50\u2b50\u2b50)",
    "patientName": "Margaret S.",
    "age": 88,
    "gender": "Female",
    "admittingDx": "Hip Fracture",
    "chiefComplaint": "I fell at the nursing home and was brought here.",
    "hpi": "Admitted for SHFFT. The patient is largely bedbound at her nursing facility. Upon admission, the wound care nurse documents a large, deep ulcer on her sacrum extending down to the subcutaneous fat.",
    "pmh": [
      "Dementia",
      "Osteoporosis"
    ],
    "vitalsLabs": [
      {
        "label": "Skin Exam",
        "value": "Sacral ulcer, Stage 3. Documented by wound care on Admission Day 1."
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Skin breakdown",
      "Stage 3 sacral pressure ulcer",
      "Stage 3 sacral pressure ulcer (Present on Admission)",
      "Unstageable pressure ulcer",
      "Sacral wound",
      "Bed sores"
    ],
    "correctOptions": [
      0,
      2
    ],
    "optimalOption": "Stage 3 sacral pressure ulcer (Present on Admission)",
    "procedure": "hip-fracture",
    "impact": {
      "paymentShift": "$13,000 \u2794 $25,000 (+$12,000)",
      "soiBefore": 1,
      "soiAfter": 3,
      "romBefore": 1,
      "romAfter": 3
    },
    "trapExplanation": "- You missed: \"Stage 3 sacral pressure ulcer (Present on Admission)\" (MCC)\n- If you forget to specifically denote that the Stage 3/4 ulcer was Present On Admission (POA), this condition looks like a Hospital-Acquired Condition (HAC) that your facility caused!\n- POA omissions for MCCs lead to severe quality metric and reimbursement penalties. Nursing staging must be explicitly acknowledged in the provider's note."
  },
  {
    "id": "enc-11",
    "title": "Malnutrition & Obesity (Difficulty: \u2b50\u2b50\u2b50\u2b50)",
    "patientName": "John B.",
    "age": 60,
    "gender": "Male",
    "admittingDx": "Rectal Cancer",
    "chiefComplaint": "I haven't felt like eating much lately.",
    "hpi": "Admitted for Major Bowel Procedure to remove a rectal mass. The patient states his appetite has been poor, but his weight has been stable. The dietitian notes he does not meet ASPEN criteria for severe malnutrition, but has mild/moderate risk. The surgeon notes \"nutritional status poor\" and \"low albumin.\" The patient also has Obstructive Sleep Apnea and Class 2 Obesity (BMI 37.5).",
    "pmh": [
      "Rectal Cancer",
      "Obstructive Sleep Apnea"
    ],
    "vitalsLabs": [
      {
        "label": "Albumin",
        "value": "2.7 g/dL"
      },
      {
        "label": "BMI",
        "value": "37.5 (Class 2 Obesity)"
      },
      {
        "label": "Weight",
        "value": "Stable over 6 months"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Rectal Cancer",
      "Poor appetite",
      "Low albumin",
      "Moderate malnutrition",
      "Severe protein-calorie malnutrition",
      "Cachexia",
      "Morbid obesity due to obstructive sleep apnea"
    ],
    "correctOptions": [
      0,
      3,
      6
    ],
    "optimalOption": "Moderate malnutrition",
    "procedure": "major-bowel",
    "impact": {
      "paymentShift": "$13,000 \u2794 $18,000 (+$5,000)",
      "soiBefore": 1,
      "soiAfter": 2,
      "romBefore": 1,
      "romAfter": 2
    },
    "trapExplanation": "- You missed: \"Moderate malnutrition\" (CC) and/or \"Morbid obesity due to obstructive sleep apnea\" (CC).\n- \"Moderate malnutrition\" is the correct malnutrition severity CC based on the clinical picture, preventing OIG audits for overcoding.\n- Additionally, a BMI of 37.5 is Class 2 Obesity, which is not a CC on its own. However, because the patient has weight-exacerbated obstructive sleep apnea, it meets clinical criteria for \"Morbid obesity due to comorbidities\" (E66.01). Documenting this captures a CC (DRG 331 to 330 shift, +$5,345.25 if no other CC/MCC is present) and triggers HCC 48 for TEAM risk adjustment."
  },
  {
    "id": "enc-12",
    "title": "MDD & Morbid Obesity (Difficulty: \u2b50\u2b50\u2b50\u2b50)",
    "patientName": "Lisa M.",
    "age": 45,
    "gender": "Female",
    "admittingDx": "Spondylolisthesis",
    "chiefComplaint": "I can't take this back pain anymore. It's ruining my life.",
    "hpi": "Admitted for Lumbar Spinal Fusion. The patient is suffering from severe chronic pain. She was seen by psychiatry last month and started on medication due to overwhelming sadness and lack of motivation related to her chronic pain. She also has Class 3 Obesity (BMI 41.2) which will require specialized surgical positioning.",
    "pmh": [
      "Chronic lower back pain",
      "Morbid obesity"
    ],
    "vitalsLabs": [
      {
        "label": "Medications list",
        "value": "Sertraline 100mg daily."
      },
      {
        "label": "BMI",
        "value": "41.2 (Class 3 Obesity)"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Spondylolisthesis",
      "Chronic back pain",
      "Patient appears depressed",
      "Psych history",
      "Major depressive disorder",
      "Elevated anxiety",
      "Morbid obesity"
    ],
    "correctOptions": [
      0,
      4,
      6
    ],
    "optimalOption": "Major depressive disorder",
    "procedure": "spinal-fusion",
    "impact": {
      "paymentShift": "$22,000 \u2794 $27,000 (+$5,000)",
      "soiBefore": 1,
      "soiAfter": 2,
      "romBefore": 1,
      "romAfter": 2
    },
    "trapExplanation": "- You missed: \"Major depressive disorder\" (CC) and/or \"Morbid obesity\" (CC).\n- Documenting the specific psychiatric diagnosis (MDD) yields a CC. Unspecific descriptions do not count.\n- Additionally, a BMI of 41.2 represents Class 3 Obesity, which qualifies as \"Morbid obesity\" (E66.01). This functions as a CC, which upgrades 3-tier spinal fusion families (DRG 458 to 457, +$10,660.50 payment shift if no other CC/MCC present) and triggers HCC 48 for TEAM risk adjustment."
  },
  {
    "id": "enc-13",
    "title": "LEJR Malnutrition & Obesity (Difficulty: \u2b50\u2b50\u2b50\u2b50)",
    "patientName": "Betty K.",
    "age": 76,
    "gender": "Female",
    "admittingDx": "Hip Osteoarthritis",
    "chiefComplaint": "My hip hurts and I have lost my appetite.",
    "hpi": "Admitted for elective Right Total Hip Arthroplasty (LEJR). The dietitian evaluates the patient and notes she has lost 10% of her body weight over the past 3 months. She has severe temporal wasting and diminished grip strength. The dietitian documents \"Severe protein-calorie malnutrition based on ASPEN criteria.\" The patient also has Class 3 Obesity (BMI 42.1) which will require specialized post-op mobilization.",
    "pmh": [
      "Osteoarthritis",
      "Hypertension",
      "Morbid obesity"
    ],
    "vitalsLabs": [
      {
        "label": "Albumin",
        "value": "1.9 g/dL"
      },
      {
        "label": "Weight",
        "value": "98 lbs (down from 110 lbs)"
      },
      {
        "label": "BMI",
        "value": "42.1 (Class 3 Obesity)"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Right hip osteoarthritis",
      "Low albumin",
      "Weight loss",
      "Unspecified protein-calorie malnutrition",
      "Severe protein-calorie malnutrition",
      "Hypertension",
      "Morbid obesity"
    ],
    "correctOptions": [
      0,
      4,
      5,
      6
    ],
    "optimalOption": "Severe protein-calorie malnutrition",
    "procedure": "lejr",
    "impact": {
      "paymentShift": "$14,500 \u2794 $23,500 (+$9,000)",
      "soiBefore": 1,
      "soiAfter": 3,
      "romBefore": 1,
      "romAfter": 2
    },
    "trapExplanation": "- You missed: \"Severe protein-calorie malnutrition\" (MCC) and/or \"Morbid obesity\" (CC).\n- In LEJR (a 2-tier DRG), only the MCC (Severe Malnutrition) shifts the inpatient MS-DRG reimbursement. A CC like morbid obesity does not change the payment tier on its own.\n- However, documenting \"Morbid obesity\" (BMI 42.1) is critical because it triggers HCC 48. Under the TEAM model, capturing HCC 48 adjusts expected postoperative complications and readmissions, raising the hospital's target price/budget and protecting its quality metrics."
  },
  {
    "id": "enc-14",
    "title": "CABG Heart Failure & Obesity (Difficulty: \u2b50)",
    "patientName": "Charles H.",
    "age": 69,
    "gender": "Male",
    "admittingDx": "Triple Vessel CAD",
    "chiefComplaint": "I feel like an elephant is sitting on my chest.",
    "hpi": "Admitted for CABG. On post-op day 3, the patient develops pink frothy sputum, bilateral crackles on lung exam, and worsening dyspnea. His BNP skyrockets to 1200. He is started on IV Lasix with significant diuresis. An echo confirms an ejection fraction of 25%. The patient also has Class 3 Obesity (BMI 43.4) which increases the risk of postoperative wound infection and sternal dehiscence.",
    "pmh": [
      "Coronary Artery Disease",
      "Morbid obesity"
    ],
    "vitalsLabs": [
      {
        "label": "BNP",
        "value": "1200 pg/mL"
      },
      {
        "label": "Echo",
        "value": "EF 25% (Systolic Dysfunction)"
      },
      {
        "label": "BMI",
        "value": "43.4 (Class 3 Obesity)"
      }
    ],
    "challengePrompt": "Based on this presentation, which diagnoses would you document for this admission? Select all that apply.",
    "options": [
      "Coronary Artery Disease",
      "Congestive heart failure (CHF)",
      "Volume overload",
      "Acute systolic heart failure",
      "Pulmonary edema",
      "High BNP",
      "Morbid obesity"
    ],
    "correctOptions": [
      0,
      3,
      6
    ],
    "optimalOption": "Acute systolic heart failure",
    "procedure": "cabg",
    "impact": {
      "paymentShift": "$36,000 \u2794 $50,500 (+$14,500)",
      "soiBefore": 2,
      "soiAfter": 4,
      "romBefore": 2,
      "romAfter": 4
    },
    "trapExplanation": "- You missed: \"Acute systolic heart failure\" (MCC) and/or \"Morbid obesity\" (CC).\n- CABG is a 2-tier DRG! Naming \"Acute systolic heart failure\" (MCC) is required to shift the DRG payment tier (+$14,500).\n- Furthermore, documenting \"Morbid obesity\" (BMI 43.4) is vital because it triggers HCC 48 risk adjustment. This increases expected complication targets (like surgical site infections and sternal dehiscence) in CMS quality scorecards, protecting hospital ratings from penalties."
  }
];
