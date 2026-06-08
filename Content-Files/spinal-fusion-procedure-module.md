---
title: Spinal Fusion
procedure: spinal-fusion
drg-family: [402, 426, 427, 428, 429, 430, 447, 448, 450, 451, 471, 472, 473]
tier-structure: varies-by-family
team-procedures: [LEJR, SHFFT, Spinal Fusion, CABG, Major Bowel]
route: /procedures/spinal-fusion
last-updated: 2026-06
source: CMS FY2025/FY2026 IPPS Final Rule, MS-DRG V43.0
---

<!-- ============================================================
  SECTION: PageHero
  Component hint: <PageHero>
  ============================================================ -->

# Spinal Fusion

**Category:** TEAM Surgical Episode · MS-DRG 402, 426–430, 447–451, 471–473

Spinal fusion is the most procedurally complex DRG family in the TEAM model. Unlike the other four procedures — where a single DRG family applies — spinal fusion patients can land in any of thirteen different DRGs depending on how the surgery was performed. The procedure itself determines the DRG family. Your documentation determines the payment tier within it. Both matter.

---

<!-- ============================================================
  SECTION: DRGNavigator
  Component hint: <DRGNavigator> — the most important structural
  section on this page. Teach the two-step assignment logic before
  anything else. Consider an interactive decision tree component.
  ============================================================ -->

## How Spinal Fusion DRGs Work — The Two-Step Rule

Every spinal fusion DRG assignment follows the same two-step logic:

**Step 1 — The procedure determines the DRG family.**  
The surgical note, operative report, and procedure codes determine which family applies. This is set by the OR — not the documentation team.

**Step 2 — The comorbidities determine the tier within that family.**  
Once the family is established, the presence of a CC or MCC moves the case up within that family. This is where physician documentation controls the outcome.

> [PEARL]
> **The surgical note and the discharge summary do different jobs.**
> The operative report captures what was done. The discharge summary captures how sick the patient was. Both are required for accurate DRG assignment — but only one is written by the physician managing the patient's medical comorbidities.

---

## DRG Family Navigator

Use this table to identify which DRG family applies, then document comorbidities to determine the tier.

| Procedure Type | Region | DRG Family | Tier Structure |
|----------------|--------|------------|----------------|
| Single-level combined ant/post fusion | Non-cervical | **402** | No CC/MCC split — one tier only |
| Multiple-level combined ant/post fusion | Non-cervical | **426 / 427 / 428** | 3-tier: MCC / CC / None |
| Combined ant/post fusion | Cervical | **429 / 430** | 2-tier: MCC / None |
| Multiple-level fusion | Non-cervical | **447 / 448** | 2-tier: MCC / None |
| Single-level fusion | Non-cervical | **450 / 451** | 2-tier: MCC / None |
| Cervical fusion | Cervical | **471 / 472 / 473** | 3-tier: MCC / CC / None |

> [NOTE]
> **DRG 402 has no payment tiers.** Single-level combined anterior/posterior non-cervical fusion pays the same regardless of CC or MCC documentation. CDI efforts on these cases should focus entirely on APR-DRG SOI/ROM and TEAM risk adjustment — not DRG payment.

> [NOTE]
> **Most non-cervical fusion families are 2-tier.** DRG 447/448 and 450/451 work like LEJR — only an MCC changes the payment. A CC improves quality metrics but does not affect reimbursement. Cervical fusion (471/472/473) is the exception — it is 3-tier, meaning both CCs and MCCs have payment value.

---

## DRG Tiers at a Glance

### Cervical Fusion — 3-Tier (471 / 472 / 473)

| MS-DRG | Description | Severity | Approx. Payment |
|--------|-------------|----------|-----------------|
| **471** | Cervical spinal fusion | **With MCC** | ~$29,000 |
| **472** | Cervical spinal fusion | **With CC** | ~$17,400 |
| **473** | Cervical spinal fusion | **Without CC/MCC** | ~$14,200 |

### Multiple-Level Combined Ant/Post — 3-Tier (426 / 427 / 428)

| MS-DRG | Description | Severity | Approx. Payment |
|--------|-------------|----------|-----------------|
| **426** | Multiple-level combined ant/post fusion, non-cervical | **With MCC** | ~$40,000+ |
| **427** | Multiple-level combined ant/post fusion, non-cervical | **With CC** | ~$28,000 |
| **428** | Multiple-level combined ant/post fusion, non-cervical | **Without CC/MCC** | ~$22,000 |

### Single-Level Non-Cervical Fusion — 2-Tier (450 / 451)

| MS-DRG | Description | Severity | Approx. Payment |
|--------|-------------|----------|-----------------|
| **450** | Single-level spinal fusion, non-cervical | **With MCC** | ~$22,000 |
| **451** | Single-level spinal fusion, non-cervical | **Without MCC** | ~$15,000 |

> [NOTE]
> Payment figures are national average approximations using CMS FY2025 IPPS base rates. Actual reimbursement varies by hospital wage index, DSH status, and teaching adjustment. For the complete DRG family table including 429/430 and 447/448, refer to the CMS IPPS Final Rule Table 5.

---

<!-- ============================================================
  SECTION: TopMCCs
  Component hint: <MCCCardList>
  ============================================================ -->

## Top MCCs to Document — Spinal Fusion

These MCCs apply across the spinal fusion DRG families. For 2-tier families, an MCC changes the payment tier. For 3-tier families (cervical, multiple-level combined), an MCC produces the highest-paying tier. For DRG 402, document for SOI/ROM only.

---

### 1. Acute Kidney Injury

**ICD-10:** N17.9 (MCC) · N17.0 with tubular necrosis (MCC)

Postoperative AKI occurs across all spinal fusion types — perioperative fluid management, NSAID administration, and contrast from pre-surgical imaging all contribute. It is among the most consistently underdocumented MCCs across all surgical populations.

**Clinical trigger:** Creatinine rise ≥ 0.3 mg/dL above preoperative baseline, or ≥ 1.5× baseline within 7 days. Decreased urine output. IV fluid resuscitation given. Nephrology consulted.

**What physicians write instead:** "Elevated creatinine" / "creatinine up from baseline" / "renal insufficiency"

**Why it's missed:** Identical barrier as LEJR and SHFFT — lab values are documented, the diagnosis is not named. Three words resolve it.

> [PHRASING]
> ❌ "Creatinine mildly elevated postoperatively, improving"  
> ✅ "Acute kidney injury, likely related to perioperative fluid shifts and NSAID use — creatinine peak 2.1, baseline 0.9, improving with IV hydration"

---

### 2. Metabolic Encephalopathy

**ICD-10:** G93.41 (MCC)

Post-surgical confusion in spine patients is frequently attributed to pain medications, especially in the opioid-dependent chronic pain population. When confusion occurs in the context of a metabolic abnormality — hyponatremia, hyperglycemia, uremia, or medication toxicity — the correct diagnosis is metabolic encephalopathy, and it requires naming the metabolic cause.

**Clinical trigger:** New-onset confusion or altered mental status not at baseline. CAM-positive assessment. Concurrent metabolic abnormality on labs. Opioid dose escalation or new sedating medication in the 24–48 hours prior.

**What physicians write instead:** "Confusion, likely medication effect" / "altered mental status" / "delirium" / "encephalopathy" without specifying type

**Why it's missed:** Surgeons attribute postoperative confusion to expected medication effects and document it as such — which yields no codeable diagnosis. If the patient also has a metabolic abnormality, the linkage between the two must be explicitly documented. "Encephalopathy" without a type specifier does not code to G93.41.

> [PHRASING]
> ❌ "Patient confused, likely narcotic effect, will monitor"  
> ✅ "Metabolic encephalopathy — new-onset confusion in setting of hyponatremia (Na 126) and opioid use, not at baseline per family, CAM-positive"

---

### 3. Acute Systolic Heart Failure

**ICD-10:** I50.21 (MCC) · I50.23 Acute-on-chronic systolic heart failure (MCC)

Cardiac comorbidities are common in the spinal fusion population, particularly in older patients undergoing multilevel procedures. Perioperative fluid shifts, extended operative times, and the physiologic stress of major spine surgery can precipitate acute decompensation in patients with underlying cardiac dysfunction.

**Clinical trigger:** BNP elevation. Bilateral crackles on exam. Pulmonary edema on chest X-ray. IV diuresis initiated. Echocardiogram showing reduced ejection fraction.

**What physicians write instead:** "CHF" / "heart failure" / "volume overload" / "fluid overloaded"

**Why it's missed:** "CHF" codes to I50.9 — unspecified heart failure — which is a CC, not an MCC. Specifying *systolic vs. diastolic* and *acute vs. chronic or acute-on-chronic* is required for MCC status. Both pieces of specificity must be present.

> [PHRASING]
> ❌ "History of CHF, on Lasix at home"  
> ✅ "Acute-on-chronic systolic heart failure — BNP 1,840, bilateral crackles, patient required IV furosemide with 2L net negative response, baseline EF 40% per prior echo"

---

### 4. Severe Protein-Calorie Malnutrition

**ICD-10:** E43 (MCC) · E41 nutritional marasmus (MCC)

Malnutrition is disproportionately common in chronic spine patients — years of pain, reduced mobility, opioid-related appetite suppression, and systemic inflammation all contribute to nutritional depletion. It is also disproportionately underdocumented, because surgeons focus on the structural problem being corrected and rarely address nutritional status explicitly.

**Clinical trigger:** Albumin < 2.0. BMI < 18.5. Documented weight loss. Muscle wasting on exam. Preoperative nutrition consult or dietitian note documenting ASPEN criteria. TPN or nutritional supplementation ordered.

**What physicians write instead:** "Nutritional status poor" / "low albumin noted" / "patient cachectic" / nothing

**Why it's missed:** The dietitian often performs the full malnutrition assessment. The surgeon rarely transfers that assessment into their own note. The fix is acknowledgment and severity specification — the physician must name the condition and specify that it is severe, with supporting documentation.

> [PHRASING]
> ❌ "Preop albumin 1.8, nutrition consult placed"  
> ✅ "Severe protein-calorie malnutrition — albumin 1.8, 20-lb weight loss over prior 6 months, temporal wasting on exam, meeting ASPEN criteria per preoperative nutrition assessment"

> [DENIAL-RISK]
> E43 is one of the most audited inpatient codes. Document the supporting clinical criteria explicitly — albumin value, weight loss percentage and timeframe, physical exam findings. A label without criteria will not survive a clinical validation review.

---

### 5. Vertebral Osteomyelitis / Disc Space Infection

**ICD-10:** M46.20 Osteomyelitis of vertebra, unspecified (MCC) · M46.30 Infection of intervertebral disc, unspecified (MCC)

When spinal fusion is performed specifically to address vertebral osteomyelitis or disc space infection, these conditions are among the strongest MCC and DRG-shift drivers in the entire spinal fusion family. They are unique to this procedure group and do not appear in the other four TEAM modules.

**Clinical trigger:** Fusion performed for infectious indication. Preoperative MRI showing marrow edema or disc involvement. Blood cultures positive. Infectious disease consultation. Extended antibiotic course planned at discharge.

**What physicians write instead:** "Spinal infection" / "discitis" (without specificity) / "infected disc"

**Why it's missed:** Surgeons write the operative indication accurately in the operative report but may not carry the specific diagnostic code-driving language into the H&P or discharge summary. "Discitis" maps to a less specific code than "infection of intervertebral disc" (M46.30). When infection is the reason for fusion, the diagnosis must appear explicitly in the attending's documentation with site specification.

> [PHRASING]
> ❌ "Spinal fusion for discitis at L4-L5"  
> ✅ "Infection of intervertebral disc, L4-L5 — culture-positive for Staphylococcus aureus, ID-guided antibiotic therapy, fusion performed for structural stabilization"

---

### 6. Multiple Sclerosis

**ICD-10:** G35 (MCC)

Multiple sclerosis is an MCC when present as a secondary diagnosis in spinal fusion cases. It is not common but it is frequently underrecognized as a coded diagnosis during a surgical admission — the neurologist manages the MS, the surgeon manages the spine, and neither documents it in a way that captures the coding credit.

**Clinical trigger:** Known MS diagnosis. Neurologist on the care team. MS-related medications continued during admission. Any MS-related symptoms (fatigue, spasticity, bladder dysfunction) affecting inpatient management.

**What physicians write instead:** "Neurologic history" / "MS per patient history" / nothing in the Assessment & Plan

**Why it's missed:** When MS is not the reason for admission, surgeons rarely list it as an active secondary diagnosis. But if it is actively affecting the management of the patient during the admission — medication management, physical therapy goals, discharge planning — it belongs in the Assessment.

> [PHRASING]
> ❌ "Neuro history: multiple sclerosis (managed by neurology)"  
> ✅ "Multiple sclerosis — relapsing-remitting, on natalizumab, neurologist co-managing during admission; MS-related fatigue and lower extremity spasticity affecting postoperative rehabilitation"

---

### 7. Sepsis

**ICD-10:** A41.9 (MCC) · R65.20 severe sepsis (MCC) · R65.21 severe sepsis with septic shock (MCC)

Post-spinal fusion sepsis — from surgical site infection, wound dehiscence, or instrumentation-related infection — is a serious complication and an unambiguous MCC when the word is written. Surgical site infections after instrumented fusion carry particularly high clinical and financial significance.

**Clinical trigger:** Fever or hypothermia + elevated WBC + suspected or confirmed source. Broad-spectrum antibiotics. Blood cultures. Wound drainage or erythema with systemic signs.

**What physicians write instead:** "Infection" / "wound infection" / "SIRS" / "bacteremia"

**Why it's missed:** Same pattern as the other procedures — source-specific language ("wound infection," "bacteremia") does not code to sepsis. The physician must write the word sepsis, and when a source is identified, name it.

> [PHRASING]
> ❌ "Wound erythema and drainage, started on antibiotics, blood cultures pending"  
> ✅ "Sepsis, likely surgical site source — fever 102.1, WBC 22,000, wound erythema with purulent drainage, blood cultures drawn, ID consulted, IV vancomycin initiated"

---

<!-- ============================================================
  SECTION: BeforeAfterNote
  Component hint: <NoteComparison>
  ============================================================ -->

## Before & After: Two Documentation Failures, One Note

**The patient:** 61-year-old male admitted for elective multilevel lumbar spinal fusion (3 levels, single posterior approach — DRG 447/448 family). History of hypertension, hyperlipidemia, and chronic opioid use for back pain. BMI 44. Uses BiPAP at home. Prior ABG on file showing PaCO₂ of 52. Albumin on preoperative labs is 2.1. On POD 2, creatinine rises from 0.9 to 2.0. POD 3, the patient is found confused and disoriented; concurrent sodium is 126.

---

### As Written — DRG 448 (~$15,000)

```
DISCHARGE DIAGNOSES:
1. Status post multilevel lumbar spinal fusion (L3-S1)
2. Hypertension
3. Hyperlipidemia
4. [HIGHLIGHT-MISS] Elevated creatinine, improving [/HIGHLIGHT-MISS]
5. [HIGHLIGHT-MISS] Obstructive sleep apnea [/HIGHLIGHT-MISS]
6. [HIGHLIGHT-MISS] Low albumin preoperatively [/HIGHLIGHT-MISS]

HOSPITAL COURSE:
Patient underwent uncomplicated L3-S1 posterior lumbar fusion.
POD 2: [HIGHLIGHT-MISS] Creatinine up to 2.0, improved with fluids. [/HIGHLIGHT-MISS]
POD 3: [HIGHLIGHT-MISS] Patient confused overnight, likely narcotic effect,
improved by morning. [/HIGHLIGHT-MISS] Sodium noted to be 126.
Patient ambulating with PT, pain managed, cleared for discharge.
```

> [MISS]
> "Elevated creatinine, improving" is a lab trend — not a diagnosis. N17.9 cannot be assigned. No MCC.

> [MISS]
> "Obstructive sleep apnea" (G47.33) is a CC — it does not move this 2-tier DRG. But the clinical picture here supports obesity hypoventilation syndrome (E66.2), not OSA alone. The patient has morbid obesity, uses BiPAP, and has a documented PaCO₂ of 52. OHS is an MCC. The wrong diagnosis is being documented, and it's the lower-value one.

> [MISS]
> "Low albumin preoperatively" is a lab value. It does not code to malnutrition. The nutritional diagnosis must be named and severity specified.

> [WARN]
> "Patient confused overnight, likely narcotic effect" attributes confusion to medication without connecting it to the documented metabolic abnormality (sodium 126). This yields no codeable diagnosis. Even if narcotic effect is contributing, the concurrent hyponatremia establishes a metabolic cause for encephalopathy.

---

### Revised — DRG 447 (~$22,000) · ▲ ~$7,000

```
DISCHARGE DIAGNOSES:
1. Status post multilevel lumbar spinal fusion (L3-S1)
2. [HIGHLIGHT-OK] Acute kidney injury, resolving [/HIGHLIGHT-OK]
3. [HIGHLIGHT-OK] Obesity hypoventilation syndrome [/HIGHLIGHT-OK]
4. [HIGHLIGHT-OK] Moderate protein-calorie malnutrition [/HIGHLIGHT-OK]
5. [HIGHLIGHT-OK] Metabolic encephalopathy secondary to hyponatremia [/HIGHLIGHT-OK]
6. [HIGHLIGHT-OK] Hyponatremia (Na 126) [/HIGHLIGHT-OK]
7. Hypertension
8. Hyperlipidemia

HOSPITAL COURSE:
Patient underwent uncomplicated L3-S1 posterior lumbar fusion.

POD 2: Patient developed [HIGHLIGHT-OK] acute kidney injury [/HIGHLIGHT-OK] — creatinine rose
from baseline 0.9 to peak 2.0 in setting of perioperative
fluid shifts. Treated with IV hydration; improved to 1.2
by discharge.

POD 3: Patient found confused and disoriented. [HIGHLIGHT-OK] Metabolic
encephalopathy secondary to hyponatremia (Na 126) [/HIGHLIGHT-OK] — confusion
exceeded baseline per family, CAM-positive. Sodium corrected
cautiously; mental status returned to baseline by discharge.

Nutritional status: preoperative albumin 2.1. [HIGHLIGHT-OK] Moderate
protein-calorie malnutrition [/HIGHLIGHT-OK] documented by nutrition team —
dietitian assessment referenced.

[HIGHLIGHT-OK] Obesity hypoventilation syndrome [/HIGHLIGHT-OK] — BMI 44, BiPAP-dependent,
prior PaCO₂ 52 on ABG. BiPAP continued throughout admission
without respiratory decompensation.
```

> [OK]
> Acute kidney injury is named and documented with baseline, peak, treatment, and resolution. Codes to N17.9 — MCC. DRG moves from 448 to 447.

> [OK]
> Obesity hypoventilation syndrome is named with supporting criteria — BMI, BiPAP use, documented hypercapnia. Codes to E66.2 — MCC. Redundant MCC, but contributes to APR-DRG SOI subclass 4 (Extreme) when combined with AKI.

> [OK]
> Moderate protein-calorie malnutrition is named with reference to the dietitian's assessment. Codes to E44.0 — CC. Contributes to APR-DRG SOI.

> [OK]
> Metabolic encephalopathy is named with the causative metabolic condition (hyponatremia). The deviation from baseline is established. Codes to G93.41 — MCC.

> [NOTE]
> This case had four documentation gaps that were all correctible without changing any clinical facts. The DRG payment impact alone was approximately $7,000. The APR-DRG SOI moved from subclass 1 to subclass 4 — meaning quality metrics and commercial payer contracts will now reflect this patient's actual severity.

---

<!-- ============================================================
  SECTION: CCList
  Component hint: <CCReferenceTable>
  ============================================================ -->

## Common CCs — Tier Structure Determines Value

Whether a CC changes payment depends entirely on which DRG family the case landed in. Before documenting for payment impact, identify the family first.

| DRG Family | Does a CC change payment? |
|------------|--------------------------|
| 402 (single-level combined ant/post, non-cervical) | No — one tier only |
| 447/448 (multilevel, non-cervical) | No — 2-tier, MCC only |
| 450/451 (single-level, non-cervical) | No — 2-tier, MCC only |
| 429/430 (combined ant/post, cervical) | No — 2-tier, MCC only |
| 426/427/428 (multilevel combined, non-cervical) | Yes — 3-tier |
| 471/472/473 (cervical fusion) | Yes — 3-tier |

For cases where CCs do not change payment, document them for APR-DRG SOI/ROM and TEAM risk adjustment.

| Condition | ICD-10 | What to Specify |
|-----------|--------|-----------------|
| Morbid obesity | E66.01 | Provider must document "morbid obesity" — BMI code alone insufficient; CC in 3-tier families (426–428, 471–473); HCC 48 for risk adjustment |
| Obstructive sleep apnea | G47.33 | CC — screen for OHS (E66.2, MCC) if patient uses BiPAP; particularly relevant in obese spine patients |
| Acute posthemorrhagic anemia | D62 | Common in multilevel cases; link to surgical blood loss |
| Type 2 diabetes with hyperglycemia | E11.65 | Specify type and complication |
| Unspecified protein-calorie malnutrition | E46 | CC tier; document "severe" + ASPEN criteria for E43 (MCC) |
| Hyponatremia | E87.1 | Name it — do not rely on lab value documentation |
| Chronic kidney disease, stage 3 | N18.3 | Stage required — N18.9 is not a CC |
| Chronic kidney disease, stage 4 | N18.4 | Stage 4 is CC; stage 5 is MCC |
| Longstanding persistent atrial fibrillation | I48.11 | Type required — unspecified Afib (I48.91) is not a CC |
| COPD with acute exacerbation | J44.1 | "Exacerbation" required — J44.9 is not a CC |
| Opioid dependence, uncomplicated | F11.20 | Common in chronic spine patients — document if present and affecting management |
| Major depressive disorder | F32.9 | Frequently active in chronic pain population; surgeons rarely document it |
| Chronic pain | G89.29 | CC; specificity with causal linkage strengthens the record |
| Obstructive sleep apnea | G47.33 | CC — not MCC; screen for OHS criteria if BiPAP is used |

> [NOTE]
> **The opioid dependence documentation gap:** Chronic spine patients are disproportionately represented in the opioid-dependent population, and F11.20 is a CC that is almost universally underdocumented in surgical cases. If the patient is on chronic opioid therapy and it is affecting inpatient management — pain control, withdrawal monitoring, CIWA-equivalent — it belongs in the Assessment as an active secondary diagnosis.

> [NOTE]
> **Major depressive disorder in spine patients:** Surgeons consistently under-document psychiatric comorbidities. In the chronic pain population, MDD (F32.9) is frequently active, frequently treated with medication that appears on the medication reconciliation list, and frequently invisible in the surgical Assessment & Plan. It is a CC. If sertraline, duloxetine, or another antidepressant is on the MAR, ask whether the underlying diagnosis is documented.

---

<!-- ============================================================
  SECTION: HCCList
  Component hint: <HCCCardList>
  ============================================================ -->

## Key HCCs for Spinal Fusion Patients

HCC documentation raises the TEAM risk-adjusted target price for the episode. In spinal fusion, chronic comorbidities are often well-established but poorly documented in the acute care record — they appear in the H&P problem list and vanish from subsequent notes.

| HCC | Condition | Documentation Tip |
|-----|-----------|-------------------|
| HCC 17 | Metastatic cancer | When fusion is performed in the context of metastatic spine disease, document the primary and metastatic sites explicitly |
| HCC 18 | Cancer, non-metastatic | Specify primary site and histology |
| HCC 37 | Diabetes with chronic complications | Name the complication — neuropathy, nephropathy, retinopathy |
| HCC 48 | Morbid obesity | Provider note must include "morbid obesity" — BMI code alone insufficient |
| HCC 93 | Rheumatoid arthritis and other inflammatory arthropathies | Specify the diagnosis — "arthritis" alone does not map |
| HCC 125/126/127 | Dementia (severe/moderate/mild) | Less common in spinal fusion than SHFFT but document when present |
| HCC 182 | Spinal cord disorders and injuries | Document functional deficits explicitly — myelopathy, cord compression with deficits |
| HCC 192/193 | Cerebral palsy; inflammatory polyneuritis | Document active neurological comorbidities in the Assessment |
| HCC 199 | Parkinson's and basal ganglia disorders | Active condition — not history |
| HCC 224 | Acute-on-chronic heart failure | Specify type and acuity |
| HCC 226 | Heart failure, except end-stage | Specify systolic vs. diastolic, chronic status |
| HCC 253 | Hemiplegia/hemiparesis | Active residual deficits — not "history of stroke" |
| HCC 267 | DVT and pulmonary embolism | Document when present; prophylaxis ≠ diagnosis |
| HCC 326/327 | CKD stage 5 / stage 4 | Stage must be explicitly documented by the provider |

> [NOTE]
> **Myelopathy and HCC 182:** When cervical or thoracic fusion is performed for myelopathy — spinal cord compression with functional neurological deficits — documenting the myelopathy explicitly (not just the structural stenosis) is important for both HCC capture and for accurately reflecting the patient's neurological risk. "Cervical myelopathy with upper extremity weakness and gait dysfunction" is more complete than "cervical stenosis."

---

<!-- ============================================================
  SECTION: DischargeChecklist
  Component hint: <DischargeChecklist>
  ============================================================ -->

## Before You Sign the Discharge Summary

Identify the DRG family first — it determines whether your CC documentation has payment value or quality-only value. Then work through this checklist.

**1. Identify the tier structure**  
Is this a 2-tier or 3-tier DRG family? Cervical fusion (471–473) and multilevel combined non-cervical (426–428) are 3-tier — both CCs and MCCs matter for payment. Single-level non-cervical (450/451) and multilevel non-cervical (447/448) are 2-tier — only MCCs move the payment.

**2. Obesity**  
Does the patient have a BMI ≥ 40? **Document "morbid obesity" explicitly — a BMI code alone is not sufficient.** Morbid obesity (E66.01) is a CC with direct payment value in 3-tier families (426–428, 471–473) and contributes to APR-DRG SOI and HCC 48 risk adjustment across all families. In obese spine patients, also consider whether OHS criteria are met — OHS (E66.2) is an MCC.

**3. Creatinine**  
Did it rise ≥ 0.3 mg/dL above the preoperative baseline? **Name it as acute kidney injury.** Include the baseline value, peak value, and clinical response. Resolution before discharge does not eliminate the diagnosis.

**4. Mental status**  
Was there any new-onset confusion, disorientation, or behavioral change not at baseline? Was there a concurrent metabolic abnormality? **Document metabolic encephalopathy with the causative metabolic condition.** "Confusion" and "delirium" do not code as MCCs.

**5. Respiratory status**  
Does the patient use BiPAP at home? Is there documented or suspected daytime hypercapnia (prior ABG, history of morning headaches, BiPAP rather than CPAP)? **Consider obesity hypoventilation syndrome rather than OSA alone.** OHS (E66.2) is an MCC; OSA (G47.33) is a CC.

**6. Nutrition**  
Was preoperative albumin below 3.0? Did the dietitian document malnutrition? **Name the diagnosis and specify severity.** "Malnutrition" alone is E46 (CC). "Severe protein-calorie malnutrition" meeting ASPEN criteria is E43 (MCC).

**7. Opioids and psychiatric comorbidities**  
Is the patient on chronic opioids for pain management? On antidepressants or anxiolytics? Was psychiatry or psychology involved? **Document opioid dependence (F11.20) and active psychiatric diagnoses.** These are CCs that are almost universally absent from surgical discharge summaries.

**8. Blood loss and anemia**  
Did hemoglobin drop significantly from the preoperative value, particularly in multilevel cases? Was a transfusion given? **Name it as acute posthemorrhagic anemia (D62) and link it to surgical blood loss.** "Anemia" (D64.9) is not a CC.

**9. Infection**  
Were antibiotics extended beyond the standard perioperative prophylaxis period for a suspected infection? Was the indication for fusion infectious — osteomyelitis or disc space infection? **Name the infectious diagnosis explicitly with site specification.** M46.20 and M46.30 are MCCs.

---

<!-- ============================================================
  SECTION: QueryTemplates
  Component hint: <QueryTemplateList>
  ============================================================ -->

## CDI Query Prompts — Spinal Fusion

> [NOTE]
> These prompts surface conditions that are clinically present but underdocumented. They are written as physician-facing language — what a CDI specialist or hospitalist colleague might raise to clarify a diagnosis. Documentation should reflect genuine clinical judgment.

**Morbid obesity query:**  
*"The patient has a BMI of [X] documented in the chart. Can you document morbid obesity as an active secondary diagnosis in the discharge summary? The specific phrase 'morbid obesity' is required — a BMI code alone does not capture the CC credit or HCC 48 for TEAM risk adjustment. For cervical or multilevel combined fusion cases, this CC also has direct payment value."*

**AKI query:**  
*"Creatinine rose from [baseline] to [peak] postoperatively and improved with IV hydration — does this represent acute kidney injury?"*

**OHS query:**  
*"The patient has morbid obesity (BMI [X]), uses BiPAP at home, and a prior ABG shows PaCO₂ of [value]. Does this represent obesity hypoventilation syndrome rather than obstructive sleep apnea alone?"*

**Encephalopathy query:**  
*"The patient had new-onset confusion on POD [X] in the setting of [sodium value / metabolic abnormality]. Family confirms this exceeded baseline. Does this represent metabolic encephalopathy secondary to [causative condition]?"*

**Malnutrition query:**  
*"The nutrition team has documented [albumin value, weight loss, physical exam findings] meeting ASPEN criteria for [severity] malnutrition. Can you document the malnutrition diagnosis and severity level in your note?"*

**Opioid dependence query:**  
*"The patient is on chronic opioid therapy ([medication and dose]) for pain management, which is being continued and monitored during this admission. Does opioid dependence represent an active diagnosis affecting management?"*

**Psychiatric diagnosis query:**  
*"The patient is on [antidepressant/anxiolytic] and was seen by [psychiatry/psychology] during this admission. Is [major depressive disorder / generalized anxiety disorder] an active diagnosis that should be included in the discharge diagnoses?"*

**Spinal infection query:**  
*"The operative report documents fusion performed for [discitis / vertebral osteomyelitis] at [level]. Can you confirm the specific infectious diagnosis and document it with site specification in the discharge summary?"*

---

<!-- ============================================================
  SECTION: PageFooter
  Component hint: <ModuleFooter>
  ============================================================ -->

---

*Source: CMS FY2025/FY2026 IPPS Final Rule · MS-DRG V43.0 · ICD-10-CM FY2025*  
*DRG payment figures are national average approximations and vary by hospital wage index and geographic adjustment.*  
*CC/MCC designations change annually with each CMS IPPS Final Rule. Verify against the active MS-DRG Definitions Manual for the applicable fiscal year.*  
*The DRG family navigator reflects the FY2025 reorganization of spinal fusion DRGs. DRG family assignments depend on the complete set of procedure codes and may vary from the simplified table above.*  
*Last updated: June 2026*
