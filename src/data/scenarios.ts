export interface CaseImpact {
  paymentShift: string;
  soiBefore: number;
  soiAfter: number;
  romBefore: number;
  romAfter: number;
}

export interface DocumentationItem {
  term: string;
  isOptimal: boolean;
  badge: string;
  explanation: string;
}

export interface VignetteData {
  id: string;
  patientName: string;
  age: number;
  gender: string;
  admittingDx: string;
  chiefComplaint: string;
  hpi: string;
  pmh: string[];
  vitalsLabs: { label: string; value: string }[];
  challengePrompt: string;
  traps: DocumentationItem[];
  impact: CaseImpact;
  teachingPoints: string[];
}

export const scenarios: Record<string, VignetteData> = {
  lejr: {
    id: 'lejr',
    patientName: 'Robert M.',
    age: 74,
    gender: 'Male',
    admittingDx: 'Right knee osteoarthritis',
    chiefComplaint: '"I\'m here for my new knee."',
    hpi: 'Patient is a 74-year-old male admitted for an elective Right Total Knee Arthroplasty (LEJR). The procedure went well. Now on post-op day 1, the nursing staff reports that the patient\'s urine output has dropped significantly over the past 8 hours.',
    pmh: ['Type 2 Diabetes Mellitus', 'Hypertension', 'Osteoarthritis'],
    vitalsLabs: [
      { label: 'Current Creatinine', value: '2.4 mg/dL' },
      { label: 'Pre-op Creatinine', value: '0.9 mg/dL' },
      { label: 'BUN', value: '42 mg/dL' }
    ],
    challengePrompt: 'Mentally document: What diagnoses would you add to this patient\'s chart to capture the severity of this renal complication?',
    traps: [
      { term: 'Elevated Creatinine / Renal Insufficiency', isOptimal: false, badge: '❌ Symptom Only', explanation: 'These are lab values/vague symptoms. They code to R79.89 or N19, which do not trigger any CC/MCC payment status.' },
      { term: 'Acute Kidney Injury (AKI)', isOptimal: true, badge: '✅ MCC (N17.9)', explanation: 'Documenting the clinical diagnosis of AKI triggers a Major Complication/Comorbidity (MCC), accurately reflecting the patient\'s severity.' }
    ],
    impact: {
      paymentShift: '$12,200 ➔ $18,600 (+$6,400)',
      soiBefore: 1,
      soiAfter: 3,
      romBefore: 1,
      romAfter: 2
    },
    teachingPoints: [
      'KDIGO criteria defines AKI as an increase in serum creatinine by ≥0.3 mg/dL within 48 hours or ≥1.5 times baseline.',
      'You must explicitly state "Acute Kidney Injury" in the progress notes or discharge summary; describing the labs is insufficient.'
    ]
  },
  'hip-fracture': {
    id: 'hip-fracture',
    patientName: 'Eleanor W.',
    age: 82,
    gender: 'Female',
    admittingDx: 'Left Femoral Neck Fracture',
    chiefComplaint: '"I fell in the bathroom and my hip hurts so much."',
    hpi: 'Eleanor was admitted for Surgical Hip Fracture Management (SHFFT). On post-op day 2, she is complaining of dizziness when sitting up. The team ordered a stat CBC and subsequently transfusion of 2 units of pRBCs.',
    pmh: ['Osteoporosis', 'Atrial Fibrillation (on Eliquis)'],
    vitalsLabs: [
      { label: 'Post-op Hgb', value: '7.6 g/dL' },
      { label: 'Admission Hgb', value: '11.2 g/dL' },
      { label: 'BP / HR', value: '100/60 mmHg / 112 bpm' }
    ],
    challengePrompt: 'Mentally document: How should you state this post-operative drop in blood counts and transfusion requirement?',
    traps: [
      { term: 'Post-op Anemia / Low Hgb', isOptimal: false, badge: '❌ Generic CC Missing', explanation: 'Generic anemia codes to D64.9, which has no CC weighting. "Low Hgb" is a lab value.' },
      { term: 'Acute Posthemorrhagic Anemia', isOptimal: true, badge: '✅ CC (D62)', explanation: 'Documenting D62 (Acute Posthemorrhagic Anemia) links the blood loss to the acute state, capturing a CC and raising the DRG tier.' }
    ],
    impact: {
      paymentShift: '$14,500 ➔ $19,200 (+$4,700)',
      soiBefore: 1,
      soiAfter: 2,
      romBefore: 1,
      romAfter: 2
    },
    teachingPoints: [
      'Specify the relationship: the drop in hemoglobin is due to acute blood loss from surgery.',
      'Must state "Acute Posthemorrhagic Anemia" or "Anemia due to acute blood loss" to capture code D62.'
    ]
  },
  'spinal-fusion': {
    id: 'spinal-fusion',
    patientName: 'James C.',
    age: 61,
    gender: 'Male',
    admittingDx: 'Lumbar Spinal Stenosis',
    chiefComplaint: '"My back pain is ten out of ten down my legs."',
    hpi: 'Elective multilevel lumbar spinal fusion. Post-op day 2, the night nurse notes the patient is "confused and pulling at his IV." Family states he is normally oriented at baseline. CAM screen is positive.',
    pmh: ['Hypertension', 'Hyperlipidemia'],
    vitalsLabs: [
      { label: 'Sodium', value: '128 mEq/L (down from 139)' },
      { label: 'O2 Sat', value: '95% on Room Air' }
    ],
    challengePrompt: 'Mentally document: What active diagnoses explain this sudden post-op confusion and electrolyte shift?',
    traps: [
      { term: 'Altered Mental Status / Confusion', isOptimal: false, badge: '❌ Symptom Only', explanation: 'These are symptoms, not diagnoses. They do not code to a CC or MCC.' },
      { term: 'Metabolic Encephalopathy', isOptimal: true, badge: '✅ MCC (G93.41)', explanation: 'The acute toxic/metabolic brain dysfunction from hyponatremia is Metabolic Encephalopathy, which is an MCC.' }
    ],
    impact: {
      paymentShift: '$22,000 ➔ $34,500 (+$12,500)',
      soiBefore: 1,
      soiAfter: 3,
      romBefore: 1,
      romAfter: 3
    },
    teachingPoints: [
      'Encephalopathy is a high-denial target; ensure you document the underlying cause (e.g. "metabolic encephalopathy secondary to acute hyponatremia").'
    ]
  },
  cabg: {
    id: 'cabg',
    patientName: 'Michael T.',
    age: 68,
    gender: 'Male',
    admittingDx: 'Multivessel CAD',
    chiefComplaint: '"I had terrible chest pressure while shoveling snow."',
    hpi: 'Admitted for CABG x 3. On post-op day 2, EKG confirms new onset arrhythmia. Amiodarone drip started.',
    pmh: ['Coronary Artery Disease', 'Hyperlipidemia'],
    vitalsLabs: [
      { label: 'HR / BP', value: '135 bpm (irregular) / 105/70 mmHg' },
      { label: 'EKG', value: 'New onset Atrial Fibrillation' }
    ],
    challengePrompt: 'Mentally document: What type of arrhythmia diagnosis must be documented for billing specificity?',
    traps: [
      { term: 'Atrial Fibrillation (Unspecified)', isOptimal: false, badge: '❌ No CC/MCC', explanation: 'Unspecified atrial fibrillation (I48.91) does not carry CC/MCC status.' },
      { term: 'Paroxysmal Atrial Fibrillation', isOptimal: true, badge: '✅ CC (I48.0)', explanation: 'Specifying the type (Paroxysmal, Persistent, or Chronic) captures the CC status (I48.0).' }
    ],
    impact: {
      paymentShift: '$36,000 ➔ $41,200 (+$5,200)',
      soiBefore: 2,
      soiAfter: 3,
      romBefore: 2,
      romAfter: 3
    },
    teachingPoints: [
      'Always document the specific classification of AFib. Post-operative new onset AFib is almost always paroxysmal.'
    ]
  },
  'major-bowel': {
    id: 'major-bowel',
    patientName: 'Sarah L.',
    age: 58,
    gender: 'Female',
    admittingDx: 'Perforated Diverticulitis',
    chiefComplaint: '"My stomach hurts worse than it ever has."',
    hpi: 'Emergent partial colectomy (Major Bowel Procedure) for perforated diverticulitis. Recovering in ICU. Tachypneic.',
    pmh: ['Diverticulosis'],
    vitalsLabs: [
      { label: 'Lactate', value: '4.2 mmol/L' },
      { label: 'pH / Bicarb', value: '7.28 / 14 mEq/L' },
      { label: 'WBC', value: '18,000 /mcL' }
    ],
    challengePrompt: 'Mentally document: What diagnosis should be captured for the severe metabolic and laboratory findings?',
    traps: [
      { term: 'Elevated Lactic Acid / Low Bicarb', isOptimal: false, badge: '❌ Lab Findings', explanation: 'Listing laboratory anomalies in progress notes does not code to a diagnosis.' },
      { term: 'Lactic Acidosis', isOptimal: true, badge: '✅ CC (E87.2)', explanation: 'Naming the clinical diagnosis "Lactic Acidosis" captures the CC, which increases the severity tier for Major Bowel surgery.' }
    ],
    impact: {
      paymentShift: '$18,900 ➔ $23,400 (+$4,500)',
      soiBefore: 2,
      soiAfter: 3,
      romBefore: 2,
      romAfter: 3
    },
    teachingPoints: [
      'Metabolic acidosis or lactic acidosis must be explicitly documented; lab counts are ignored by billing software.'
    ]
  }
};
