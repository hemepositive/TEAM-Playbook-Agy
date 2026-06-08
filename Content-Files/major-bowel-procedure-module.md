---
title: Major Bowel Procedure
procedure: major-bowel
drg-family: [329, 330, 331]
tier-structure: 3-tier
team-procedures: [LEJR, SHFFT, Spinal Fusion, CABG, Major Bowel]
route: /procedures/bowel
last-updated: 2026-06
source: CMS FY2025/FY2026 IPPS Final Rule, MS-DRG V43.0
---

<!-- ============================================================
  SECTION: PageHero
  Component hint: <PageHero>
  ============================================================ -->

# Major Bowel Procedure

**Category:** TEAM Surgical Episode · MS-DRG 329 / 330 / 331

Major bowel procedures cover the widest clinical range of any TEAM procedure — colorectal cancer resection, ileostomy and colostomy creation, bowel obstruction, diverticular disease with perforation, ischemic bowel, and inflammatory bowel disease all fall within this category. The patient population is correspondingly heterogeneous, and the documentation profile differs significantly by indication. What is consistent across all of them: the payment spread between the lowest and highest tier is the largest in the TEAM model, and both CC and MCC documentation have direct financial value.

---

<!-- ============================================================
  SECTION: ThreeTierCallout
  Component hint: <AlertBanner variant="critical">
  ============================================================ -->

> [PEARL]
> **Major Bowel is a 3-tier DRG with the widest payment spread in the TEAM model. Both CCs and MCCs change the payment.**
>
> The difference between DRG 331 (no CC/MCC) and DRG 329 (with MCC) is approximately **$21,000–$22,000** per case. Unlike LEJR and CABG where only an MCC matters, every documented CC in a major bowel case has real payment value — moving the case from DRG 331 to DRG 330 is worth approximately **$7,500**. A single MCC moves the case to DRG 329, the highest tier.
>
> The clinical complexity of this population — oncologic, inflammatory, septic, and nutritionally depleted patients — means that MCCs and CCs are genuinely present at high rates. The documentation gap, not the clinical gap, is what leaves money on the table.

---

<!-- ============================================================
  SECTION: DRGOverview
  Component hint: <DRGTierTable>
  ============================================================ -->

## DRG Tiers at a Glance

| MS-DRG | Description | Severity | Approx. Payment |
|--------|-------------|----------|-----------------|
| **329** | Major small and large bowel procedures | **With MCC** | ~$35,000 |
| **330** | Major small and large bowel procedures | **With CC** | ~$21,000 |
| **331** | Major small and large bowel procedures | **Without CC/MCC** | ~$13,500 |

> [NOTE]
> Payment figures are national average approximations using CMS FY2025 IPPS base rates. Actual reimbursement varies by hospital wage index, DSH status, and teaching adjustment. The CC delta (331→330) is approximately **$7,500**. The MCC delta (331→329) is approximately **$21,500**. The spread between the CC and MCC tier is also significant — approximately **$14,000** — meaning that in 3-tier cases, the difference between documenting a CC and documenting an MCC has substantial financial consequences.

---

<!-- ============================================================
  SECTION: TopMCCs
  Component hint: <MCCCardList>
  ============================================================ -->

## Top MCCs to Document — Major Bowel

These MCCs are most commonly present in major bowel patients and most frequently underdocumented. Each one moves the case to DRG 329 — the highest payment tier.

---

### 1. Sepsis

**ICD-10:** A41.9 (MCC) · A41.01 sepsis due to MRSA (MCC) · R65.20 severe sepsis without septic shock (MCC) · R65.21 severe sepsis with septic shock (MCC)

Sepsis is the defining MCC in major bowel procedure cases. Bowel perforation, peritonitis, ischemic bowel, and anastomotic leak are all common sources, and the clinical picture when any of these is present usually meets the threshold for sepsis without ambiguity. The barrier is word choice — not clinical uncertainty.

**Clinical trigger:** Fever or hypothermia + elevated WBC + identified or suspected bowel source. Broad-spectrum antibiotics. Blood cultures drawn. Hemodynamic instability. ICU admission. Vasopressors required.

**What physicians write instead:** "Peritonitis" / "intra-abdominal infection" / "bowel infection" / "SIRS" / "bacteremia"

**Why it's missed:** Surgeons write the anatomic and source-specific diagnosis — peritonitis, perforation, abscess — and do not use the systemic diagnosis of sepsis. Peritonitis is not sepsis. An intra-abdominal abscess is not sepsis. When the clinical picture shows systemic inflammatory response with an infectious source, "sepsis" must be written explicitly. When organ dysfunction is present, document severe sepsis (R65.20). When vasopressors are required, document septic shock (R65.21).

> [PHRASING]
> ❌ "Perforated diverticulitis with peritonitis, broad-spectrum antibiotics started"  
> ✅ "Sepsis from perforated diverticulitis — fever 103.1, WBC 24,000, peritonitis on exam, broad-spectrum IV antibiotics initiated, blood cultures drawn"

> [PHRASING]
> ❌ "Patient hemodynamically unstable, on vasopressors for low BP"  
> ✅ "Severe sepsis with septic shock — bowel source, vasopressor-dependent, lactate 4.8, ICU-level care"

---

### 2. Severe Protein-Calorie Malnutrition

**ICD-10:** E43 (MCC) · E41 nutritional marasmus (MCC)

Malnutrition is more prevalent in the major bowel population than in any other TEAM procedure group. Colorectal cancer causes systemic wasting. Inflammatory bowel disease causes malabsorption and appetite suppression. Bowel obstruction imposes acute nutritional deprivation on top of chronic disease. The dietitian almost always documents it. The surgeon almost never does.

**Clinical trigger:** Albumin < 2.0. BMI < 18.5. Documented weight loss of >10% in preceding months. Muscle wasting on physical exam. TPN or tube feeds initiated. Dietitian consult documenting ASPEN criteria. Pre-admission malnutrition referenced in oncology or gastroenterology notes.

**What physicians write instead:** "Malnourished appearing" / "poor nutritional status" / "low albumin" / "cancer-related weight loss" / nothing

**Why it's missed:** Three failure modes unique to this population. First, surgeons attribute weight loss to the underlying disease — cancer or IBD — and don't document malnutrition as a separate condition. Second, TPN is ordered as a treatment without the underlying diagnosis being named. Third, in emergent bowel cases, the nutrition assessment never happens because the patient goes straight to the OR — creating a documentation gap that can be closed postoperatively with a nutrition consult and explicit physician documentation.

> [PHRASING]
> ❌ "Cancer-related weight loss, TPN initiated postoperatively"  
> ✅ "Severe protein-calorie malnutrition — albumin 1.6, 22-lb weight loss over prior 3 months per oncology records, temporal wasting and reduced muscle bulk on exam, meeting ASPEN criteria per nutrition assessment, TPN initiated"

> [DENIAL-RISK]
> E43 (severe malnutrition) is among the most audited inpatient codes. Document the clinical criteria explicitly — albumin value, weight loss with timeframe, physical exam findings — not just the label. A diagnosis without documented criteria is a denial target.

---

### 3. Acute Kidney Injury

**ICD-10:** N17.9 (MCC) · N17.0 with tubular necrosis (MCC)

AKI in major bowel patients is common and multifactorial — bowel prep dehydration, perioperative fluid shifts, sepsis-related hypoperfusion, contrast from preoperative imaging, and nephrotoxic antibiotics all contribute. It is also consistently underdocumented using the same language patterns as every other procedure.

**Clinical trigger:** Creatinine rise ≥ 0.3 mg/dL above baseline, or ≥ 1.5× baseline within 7 days. Decreased urine output. IV fluid resuscitation. Nephrology consulted. In the septic bowel patient: AKI as part of the sepsis-related organ dysfunction cascade.

**What physicians write instead:** "Elevated creatinine" / "creatinine up from baseline" / "renal insufficiency" / "prerenal azotemia"

**Why it's missed:** "Prerenal azotemia" is a mechanism, not a codeable diagnosis. "Elevated creatinine" is a lab value. The physician must write "acute kidney injury." In septic bowel patients specifically, AKI is often part of multi-organ dysfunction — documenting it as such (alongside sepsis) strengthens both the clinical record and the coding.

> [PHRASING]
> ❌ "Creatinine elevated, prerenal in setting of dehydration from bowel prep, improving with fluids"  
> ✅ "Acute kidney injury — creatinine rose from baseline 0.9 to peak 2.3, likely prerenal from bowel prep dehydration and perioperative fluid shifts, improving with IV hydration"

---

### 4. Secondary Malignant Neoplasm — Metastatic Disease

**ICD-10:** C78.5 — Secondary malignant neoplasm of large intestine (MCC) · C78.4 — Secondary malignant neoplasm of small intestine (MCC) · C78.7 — Secondary malignant neoplasm of liver (MCC)

When major bowel surgery is performed in the context of metastatic colorectal cancer — hepatic metastases, peritoneal carcinomatosis, or other distant spread — the secondary malignancy is an MCC when documented as an active secondary diagnosis. It is also an HCC. It is frequently present in the oncology record and absent from the surgeon's discharge summary.

**Clinical trigger:** Metastatic disease documented in oncology notes. CT or PET scan showing distant metastases. Staging documented as Stage IV. Liver resection or ablation performed concomitantly. Palliative intent of the procedure referenced.

**What physicians write instead:** "Stage IV colon cancer" / "metastatic colon cancer" without specifying the metastatic site / nothing beyond the primary diagnosis

**Why it's missed:** Surgeons document the procedure and the primary diagnosis — "right hemicolectomy for colon cancer" — and do not carry the metastatic sites forward as separately coded secondary diagnoses. When hepatic or other distant metastases are present and clinically relevant, each metastatic site should be documented explicitly.

> [PHRASING]
> ❌ "Stage IV colon cancer, right hemicolectomy performed"  
> ✅ "Malignant neoplasm of ascending colon with secondary malignant neoplasm of liver — Stage IV, hepatic metastases confirmed on preoperative CT, surgical oncology involved"

---

### 5. Acute Respiratory Failure

**ICD-10:** J96.01 — Acute hypoxic respiratory failure (MCC) · J96.00 — Acute respiratory failure, unspecified (MCC)

Respiratory complications in major bowel patients are driven by abdominal distension impairing diaphragmatic excursion, postoperative atelectasis, aspiration in emergent cases, and pulmonary sepsis complications. When active respiratory support is required beyond routine postoperative oxygen, the diagnosis should be named.

**Clinical trigger:** O₂ saturation below 90% on room air beyond the expected immediate postoperative period. Supplemental oxygen required beyond baseline. Ventilator weaning failure. Non-invasive ventilation initiated. Pulmonology consulted.

**What physicians write instead:** "Hypoxia" / "patient hypoxic postoperatively, on supplemental O₂" / "respiratory distress" / "atelectasis"

**Why it's missed:** Atelectasis is a structural finding, not a diagnosis of respiratory failure. Hypoxia is a sign. Respiratory distress is a symptom. When the patient cannot maintain adequate oxygenation without active support, acute respiratory failure is the appropriate diagnosis — regardless of whether the cause is atelectasis, pulmonary edema, or sepsis-related ARDS.

> [PHRASING]
> ❌ "Patient hypoxic postoperatively, supplemental O₂ initiated, improving"  
> ✅ "Acute hypoxic respiratory failure — O₂ saturation 82% on room air POD 1, likely from atelectasis and abdominal splinting, requiring 6L nasal cannula for maintenance above 92%"

---

### 6. Metabolic Encephalopathy

**ICD-10:** G93.41 (MCC)

Post-surgical confusion in major bowel patients — particularly in septic, elderly, or nutritionally depleted patients — is common and routinely underdocumented. When confusion arises in the context of a metabolic abnormality, metabolic encephalopathy with a named cause is the appropriate diagnosis and carries MCC weight.

**Clinical trigger:** New-onset confusion or disorientation not at baseline. CAM-positive assessment. Concurrent metabolic abnormality — hyponatremia, hyperglycemia, uremia, sepsis-related encephalopathy, hepatic dysfunction.

**What physicians write instead:** "Confusion" / "altered mental status" / "delirium" / "ICU psychosis" / "encephalopathy" without specifying type

**Why it's missed:** Same pattern as all five procedures — "delirium" (F05) is a CC, not an MCC. "Altered mental status" is a symptom. In major bowel patients specifically, the septic patient with confusion is an extremely common presentation where the metabolic cause — sepsis itself — is already documented and simply needs to be linked to the encephalopathy.

> [PHRASING]
> ❌ "Patient confused in ICU, likely from medications and illness, improving"  
> ✅ "Metabolic encephalopathy secondary to sepsis and hyponatremia (Na 122) — patient disoriented, CAM-positive, not at baseline per family, improving with metabolic stabilization"

---

### 7. Intestinal Perforation with Peritonitis

**ICD-10:** K63.1 — Perforation of intestine (MCC)

When the operative indication is intestinal perforation with peritonitis, documenting the perforation explicitly as a secondary diagnosis — in addition to the underlying cause (diverticulitis, carcinoma, obstruction) — carries MCC weight. The operative report contains this information. The discharge summary often does not.

**Clinical trigger:** Emergency or urgent bowel surgery for perforation. Operative report documenting free perforation, feculent peritonitis, or contained perforation. Pathology confirming transmural disease.

**What physicians write instead:** "Perforated diverticulitis" (documenting the cause but not the perforation as a separate coded entity) / "emergent bowel surgery for perforation" without explicit secondary diagnosis listing

**Why it's missed:** When the cause of the perforation is documented — perforated diverticulitis, perforated colon cancer — the perforation itself (K63.1) is sometimes omitted from the secondary diagnosis list. Both the underlying condition and the perforation should be documented in the Assessment.

> [PHRASING]
> ❌ "Sigmoid diverticulitis with perforation — emergent partial colectomy performed"  
> ✅ "Perforation of sigmoid colon secondary to diverticulitis — free perforation with feculent peritonitis confirmed intraoperatively, emergent sigmoid colectomy with Hartmann's procedure"

---

<!-- ============================================================
  SECTION: BeforeAfterNote
  Component hint: <NoteComparison>
  ============================================================ -->

## Before & After: Three Tiers, Three Different Outcomes

**The patient:** 67-year-old female admitted urgently for perforated sigmoid diverticulitis. History of diverticulosis, hypertension, and type 2 diabetes. BMI 19.2. Albumin on admission is 1.7. On admission she is febrile, tachycardic, and hypotensive with WBC 26,000. She undergoes emergency sigmoid colectomy with Hartmann's procedure and end colostomy creation. Postoperatively she requires vasopressors for 24 hours and develops creatinine rise from 0.8 to 2.1.

---

### As Written — DRG 331 (~$13,500)

```
DISCHARGE DIAGNOSES:
1. Status post sigmoid colectomy with Hartmann's procedure
2. [HIGHLIGHT-MISS] Diverticulitis with perforation [/HIGHLIGHT-MISS]
3. Hypertension
4. Type 2 diabetes mellitus
5. [HIGHLIGHT-MISS] Creatinine elevated postoperatively, improving [/HIGHLIGHT-MISS]

HOSPITAL COURSE:
Patient admitted urgently with perforated sigmoid diverticulitis.
[HIGHLIGHT-MISS] Intra-abdominal infection with peritonitis. [/HIGHLIGHT-MISS]
[HIGHLIGHT-MISS] Hemodynamically unstable on admission, required pressors
briefly. [/HIGHLIGHT-MISS] Emergent sigmoid colectomy performed with end
colostomy creation.

Postoperatively: [HIGHLIGHT-MISS] Creatinine elevated, improved with fluids. [/HIGHLIGHT-MISS]
Patient progressed to clear liquids, ostomy functioning.
Cleared for discharge with ostomy nurse follow-up.
```

> [MISS]
> "Intra-abdominal infection with peritonitis" does not code as sepsis. The patient required vasopressors — this is septic shock (R65.21), an MCC. The word sepsis must appear, and when shock is present, it must be named explicitly.

> [MISS]
> "Hemodynamically unstable, required pressors briefly" describes a clinical state without naming a diagnosis. Vasopressor requirement in the setting of infection is septic shock — but only if the physician writes it.

> [MISS]
> "Creatinine elevated, improved with fluids" is a lab trend. N17.9 cannot be assigned. No additional MCC.

> [WARN]
> "Diverticulitis with perforation" documents the cause accurately but the perforation of intestine (K63.1 — MCC) is not separately listed as a secondary diagnosis. Both should appear.

> [WARN]
> The colostomy is created and referenced in the operative note but never explicitly documented in the discharge diagnoses with status specification. Colostomy status (Z93.3) is a CC.

---

### Version 2 — DRG 330 (~$21,000) · ▲ ~$7,500

```
DISCHARGE DIAGNOSES:
1. Status post sigmoid colectomy with Hartmann's procedure
2. Sigmoid diverticulitis with perforation
3. [HIGHLIGHT-OK] Perforation of intestine, sigmoid [/HIGHLIGHT-OK]
4. [HIGHLIGHT-OK] Acute posthemorrhagic anemia [/HIGHLIGHT-OK]
5. [HIGHLIGHT-OK] Colostomy status [/HIGHLIGHT-OK]
6. Hypertension
7. Type 2 diabetes mellitus, with hyperglycemia
8. [HIGHLIGHT-OK] Hyponatremia [/HIGHLIGHT-OK]

HOSPITAL COURSE:
[Same operative course as above]

Postoperative period notable for: [HIGHLIGHT-OK] acute posthemorrhagic
anemia [/HIGHLIGHT-OK] requiring transfusion of 2 units pRBCs. [HIGHLIGHT-OK] Hyponatremia
(Na 130) [/HIGHLIGHT-OK] — sodium correction initiated. [HIGHLIGHT-OK] End colostomy
created — colostomy status documented, ostomy nurse involved
in patient education. [/HIGHLIGHT-OK]
```

> [OK]
> Perforation of intestine (K63.1) is now separately listed — MCC. But sepsis and AKI are still missing, so the case lands in DRG 330, not 329.

> [NOTE]
> This is the intermediate version — showing what correct CC documentation alone achieves. With CCs but no MCCs named, the case lands at DRG 330. The next version shows the full picture.

---

### Version 3 — DRG 329 (~$35,000) · ▲ ~$21,500 from base

```
DISCHARGE DIAGNOSES:
1. Status post sigmoid colectomy with Hartmann's procedure
2. Sigmoid diverticulitis with perforation
3. [HIGHLIGHT-OK] Perforation of intestine, sigmoid [/HIGHLIGHT-OK]
4. [HIGHLIGHT-OK] Severe sepsis with septic shock — bowel source [/HIGHLIGHT-OK]
5. [HIGHLIGHT-OK] Acute kidney injury, resolving [/HIGHLIGHT-OK]
6. [HIGHLIGHT-OK] Severe protein-calorie malnutrition [/HIGHLIGHT-OK]
7. [HIGHLIGHT-OK] Colostomy status [/HIGHLIGHT-OK]
8. [HIGHLIGHT-OK] Acute posthemorrhagic anemia [/HIGHLIGHT-OK]
9. Hypertension
10. Type 2 diabetes mellitus, with hyperglycemia
11. [HIGHLIGHT-OK] Hyponatremia [/HIGHLIGHT-OK]

HOSPITAL COURSE:
Patient admitted urgently with perforated sigmoid diverticulitis
and [HIGHLIGHT-OK] severe sepsis with septic shock — bowel source. [/HIGHLIGHT-OK]
Febrile to 103.1, WBC 26,000, hemodynamically unstable requiring
vasopressor support for 24 hours, lactate 4.2. Blood cultures
drawn, broad-spectrum IV antibiotics initiated. Emergent sigmoid
colectomy performed with end colostomy creation.

Postoperative course:
— [HIGHLIGHT-OK] Acute kidney injury [/HIGHLIGHT-OK]: creatinine rose from baseline 0.8
  to peak 2.1 in setting of septic hypoperfusion and perioperative
  fluid shifts. Treated with IV hydration; improved to 1.1
  by discharge.
— [HIGHLIGHT-OK] Severe protein-calorie malnutrition [/HIGHLIGHT-OK]: albumin 1.7 on
  admission, BMI 19.2, temporal wasting on exam, meeting ASPEN
  criteria per nutrition assessment. TPN initiated POD 1.
— [HIGHLIGHT-OK] Acute posthemorrhagic anemia [/HIGHLIGHT-OK]: Hgb dropped from 10.2
  to 7.4 perioperatively; 2 units pRBCs transfused.
— [HIGHLIGHT-OK] Colostomy status [/HIGHLIGHT-OK]: end colostomy created, functioning,
  ostomy nurse education provided.
— Hyponatremia (Na 130) — sodium correction initiated, resolved
  by discharge.
```

> [OK]
> Severe sepsis with septic shock named explicitly with clinical criteria — fever, WBC, hemodynamic instability, vasopressor requirement, lactate. Codes to R65.21 — MCC. DRG moves to 329.

> [OK]
> Acute kidney injury named with baseline, peak, mechanism, and resolution. Codes to N17.9 — MCC. Redundant MCC but drives APR-DRG SOI to subclass 4.

> [OK]
> Severe protein-calorie malnutrition named with albumin, BMI, physical exam finding, and ASPEN criteria reference. Codes to E43 — MCC.

> [OK]
> Intestinal perforation (K63.1) separately listed — MCC.

> [OK]
> Colostomy status (Z93.3) — CC. Acute posthemorrhagic anemia (D62) — CC. Hyponatremia (E87.1) — CC. All three CCs contribute to APR-DRG SOI.

> [NOTE]
> This is the same patient with the same clinical course across all three versions. The difference between DRG 331 (~$13,500) and DRG 329 (~$35,000) is approximately $21,500 — and every dollar of it was earned by documentation, not by doing anything differently in the OR or at the bedside.

---

<!-- ============================================================
  SECTION: CCList
  Component hint: <CCReferenceTable>
  ============================================================ -->

## Common CCs — Every One Moves from DRG 331 to DRG 330

Unlike LEJR and CABG, a single CC in a major bowel case has direct payment value — approximately $7,500. Document all active conditions with specificity.

| Condition | ICD-10 | What to Specify |
|-----------|--------|-----------------|
| Morbid obesity | E66.01 | Provider must document "morbid obesity" — BMI code alone insufficient; moves DRG 331 → 330 (~$7,500); also HCC 48 |
| Obstructive sleep apnea | G47.33 | CC — screen for OHS (E66.2, MCC) if BiPAP-dependent |
| Acute posthemorrhagic anemia | D62 | Link to blood loss — "anemia" alone (D64.9) is not a CC |
| Type 2 diabetes with hyperglycemia | E11.65 | Specify type and complication |
| Unspecified protein-calorie malnutrition | E46 | CC tier; document "severe" + ASPEN criteria for E43 (MCC) |
| Crohn's disease of small intestine | K50.90 | Specify location and activity — active vs. in remission |
| Ulcerative colitis, unspecified | K51.90 | Specify extent and activity |
| Diverticulosis of large intestine | K57.30 | Present without perforation/abscess — background condition |
| Hyponatremia | E87.1 | Name it explicitly — "low sodium" is a lab value |
| Chronic kidney disease, stage 3 | N18.3 | Stage required — N18.9 is not a CC |
| Chronic kidney disease, stage 4 | N18.4 | Stage 4 is CC; stage 5 is MCC |
| Persistent atrial fibrillation | I48.11 | Type required — unspecified Afib (I48.91) is not a CC |
| COPD with acute exacerbation | J44.1 | "Exacerbation" required — J44.9 is not a CC |
| Colostomy status | Z93.3 | Document type and functional status explicitly |
| Ileostomy status | Z93.2 | Document type and functional status explicitly |
| Major depressive disorder | F32.9 | Frequently active in oncology/ostomy patients — document if on MAR |
| Delirium | F05 | CC — metabolic encephalopathy (G93.41) is the MCC upgrade |
| Chronic ulcer of skin | L89.xx / L97.xx | Stage and site required |

> [NOTE]
> **Ostomy documentation:** Colostomy and ileostomy status codes (Z93.3, Z93.2) are CCs that are almost universally uncaptured. The ostomy is created in the OR, documented in the operative report, and then absent from the physician's discharge diagnosis list. When an ostomy is created or is present at admission, it should appear in the discharge diagnoses with type and functional status.

> [NOTE]
> **IBD specificity:** Crohn's disease (K50.xx) and ulcerative colitis (K51.xx) are CCs when coded with appropriate specificity. The base code alone (K50.90, K51.90) is sufficient for CC credit, but documenting disease activity — active flare vs. remission — and anatomic location improves both coding accuracy and the clinical record.

---

<!-- ============================================================
  SECTION: OncologyNote
  Component hint: <CalloutBox variant="teaching"> — standalone
  section for the oncology documentation pattern unique to
  major bowel. Deserves its own visual treatment.
  ============================================================ -->

## The Oncology Documentation Pattern

A disproportionate share of major bowel procedures are performed for colorectal cancer. Oncology patients have a documentation profile unlike any other surgical subpopulation — active malignancy, metastatic disease, treatment-related complications, and nutritional depletion all coexist. Each of these is separately codeable, separately valued, and separately missed.

> [PEARL]
> **The oncology record contains the diagnoses. The surgical discharge summary often does not. Your job is to transfer the clinical complexity documented by your oncology colleagues into your own note.**

The three most common oncology documentation gaps in major bowel cases:

**Gap 1 — Metastatic disease not separately coded.**  
Stage IV colon cancer with hepatic metastases has two separately codeable diagnoses: the primary malignant neoplasm of colon and the secondary malignant neoplasm of liver (C78.7 — MCC). Documenting "Stage IV colon cancer" captures only the primary. The metastatic site must be named explicitly.

**Gap 2 — Primary malignancy coded as "history of."**  
When cancer is the reason for the bowel procedure — or is actively affecting the patient's management during the admission — it is a current condition, not a historical one. "History of colon cancer, s/p prior resection, now with recurrence" should be documented as "malignant neoplasm of colon, recurrent" — not as a historical diagnosis.

**Gap 3 — Treatment-related complications attributed to the underlying disease.**  
Chemotherapy-related myelosuppression, radiation-related bowel injury, and immunosuppression-related infection are distinct diagnoses with coding implications. When the complication of treatment is affecting the surgical admission, it should be documented with specificity.

> [PHRASING]
> ❌ "History of colon cancer, Stage IV with liver mets, here for bowel resection"  
> ✅ "Malignant neoplasm of sigmoid colon with secondary malignant neoplasm of liver — Stage IV, hepatic metastases on preoperative CT, surgical oncology co-managing"

---

<!-- ============================================================
  SECTION: HCCList
  Component hint: <HCCCardList>
  ============================================================ -->

## Key HCCs for Major Bowel Patients

HCC documentation in major bowel cases is critically important for TEAM risk adjustment — particularly in the oncology and IBD subpopulations, where chronic conditions are well-established in subspecialty records but routinely absent from surgical documentation.

| HCC | Condition | Documentation Tip |
|-----|-----------|-------------------|
| HCC 17 | Metastatic cancer — lung, liver, brain | Each metastatic site is separately codeable — name the sites |
| HCC 18 | Cancer — bone, other unspecified metastatic | Specify metastatic sites |
| HCC 22 | Bladder, colorectal, and other cancers | Primary site and histology required |
| HCC 37 | Diabetes with chronic complications | Name the complication — neuropathy, nephropathy |
| HCC 48 | Morbid obesity | Provider note must say "morbid obesity" — BMI alone insufficient |
| HCC 63 | Chronic liver failure / end-stage liver | Document if hepatic disease is active and affecting management |
| HCC 78 | Intestinal obstruction/perforation | When perforation or obstruction is the operative indication |
| HCC 125/126/127 | Dementia | Document when present and affecting management |
| HCC 155 | Major depression, moderate or severe | Active in oncology and ostomy patients — document if on antidepressants |
| HCC 199 | Parkinson's and basal ganglia disorders | Active condition — not history |
| HCC 211 | Respirator dependence / tracheostomy | Document when present |
| HCC 224 | Acute-on-chronic heart failure | Specify type and acuity |
| HCC 226 | Heart failure, except end-stage | Specify systolic vs. diastolic |
| HCC 253 | Hemiplegia/hemiparesis | Active residual deficits — not "history of stroke" |
| HCC 267 | DVT and pulmonary embolism | Oncology patients have high VTE risk — document when present |
| HCC 326/327 | CKD stage 5 / stage 4 | Stage must be documented by the provider |
| HCC 383 | Chronic ulcer of skin | Stage and site required |
| HCC 463 | Artificial openings for feeding or elimination | Ostomy creation — document type and status |

> [NOTE]
> **HCC 463 — Artificial openings:** Colostomy and ileostomy creation maps to HCC 463, which affects TEAM risk adjustment in addition to the CC credit from Z93.3. In the major bowel population, ostomy creation is common and the HCC is almost universally undercaptured in the surgical record.

---

<!-- ============================================================
  SECTION: DischargeChecklist
  Component hint: <DischargeChecklist>
  ============================================================ -->

## Before You Sign the Discharge Summary

Major bowel patients present a wide range of underlying indications. This checklist covers the most commonly missed documentation gaps across all subpopulations.

**1. Obesity**  
Does the patient have a BMI ≥ 40? **Document "morbid obesity" explicitly in the discharge diagnoses — a BMI code alone is not sufficient.** Morbid obesity (E66.01) is a CC in Major Bowel with direct payment value — it moves the case from DRG 331 to DRG 330 (~$7,500) when no MCC is present. It also captures HCC 48 for TEAM risk adjustment.

**2. Sepsis**  
Was there fever, leukocytosis, and a suspected or confirmed bowel source? Were antibiotics started for a systemic indication? Were vasopressors required? **Write the word sepsis.** If organ dysfunction was present, write severe sepsis. If vasopressors were required, write septic shock. "Peritonitis" and "intra-abdominal infection" are not sepsis.

**3. Perforation**  
Was the operative indication bowel perforation? **List intestinal perforation (K63.1) as a separate secondary diagnosis** in addition to the underlying cause. The perforation is an MCC; the underlying cause (diverticulitis, carcinoma) is a separate diagnosis.

**4. Malignancy — primary and metastatic sites**  
Is this an oncologic case? Is the primary malignancy active — not historical? Are there metastatic sites documented in oncology records or on imaging? **Name the primary diagnosis as an active condition and list each metastatic site explicitly.** Stage IV language alone does not capture the metastatic HCC or MCC.

**5. Nutrition**  
Was a nutrition consult placed? Is the patient cachectic, malnourished, or nutritionally depleted from underlying disease or treatment? Was TPN initiated? **Name the malnutrition diagnosis and specify severity.** "Malnutrition" or "unspecified malnutrition" is E46 (CC). "Severe protein-calorie malnutrition" meeting ASPEN criteria is E43 (MCC).

**6. Kidney function**  
Did creatinine rise above baseline — from bowel prep dehydration, septic hypoperfusion, or perioperative shifts? **Name it as acute kidney injury.** "Prerenal azotemia" is a mechanism, not a diagnosis.

**7. Ostomy**  
Was a colostomy or ileostomy created or present? **Document the type and functional status explicitly in the discharge diagnoses.** "Colostomy status" (Z93.3) and "ileostomy status" (Z93.2) are CCs. The operative report alone does not drive this code — it must appear in the physician's discharge documentation.

**8. Anemia**  
Did hemoglobin drop significantly from the admission value? Was a transfusion given? **Name it as acute posthemorrhagic anemia (D62) and link it to the blood loss.** "Anemia" (D64.9) is not a CC.

**9. Mental status**  
Was there any confusion or disorientation — particularly in septic, elderly, or sodium-depleted patients? Was there a concurrent metabolic abnormality? **Document metabolic encephalopathy with the causative condition.** "Delirium" is a CC. Metabolic encephalopathy with a named metabolic cause is an MCC.

---

<!-- ============================================================
  SECTION: QueryTemplates
  Component hint: <QueryTemplateList>
  ============================================================ -->

## CDI Query Prompts — Major Bowel

> [NOTE]
> These prompts surface conditions that are clinically present but underdocumented. They are written in physician-facing language. Documentation should reflect genuine clinical judgment.

**Morbid obesity query:**  
*"The patient has a BMI of [X] documented in the chart. Can you document morbid obesity as an active secondary diagnosis in the discharge summary? The specific phrase 'morbid obesity' is required — a BMI code alone does not capture the CC credit or HCC 48 for TEAM risk adjustment. In Major Bowel, this CC moves the case from DRG 331 to DRG 330 if no MCC is present (~$7,500 impact)."*

**Sepsis query:**  
*"The patient presented with [fever, leukocytosis, hemodynamic instability] and an identified bowel source, and was treated with broad-spectrum IV antibiotics. Does this meet your clinical threshold for sepsis? If vasopressors were required, does this represent severe sepsis with septic shock?"*

**Perforation query:**  
*"The operative report documents free perforation of the [sigmoid / cecum / small bowel]. Can you list intestinal perforation (K63.1) as a separate secondary diagnosis in the discharge summary in addition to the underlying cause?"*

**Malnutrition query:**  
*"The nutrition team has documented [albumin value, weight loss, physical exam findings] meeting ASPEN criteria for [severity] malnutrition. Can you document the malnutrition diagnosis and severity in your note? TPN was initiated — the underlying nutritional diagnosis should also be documented."*

**AKI query:**  
*"Creatinine rose from [baseline] to [peak] — likely from [bowel prep dehydration / septic hypoperfusion / perioperative fluid shifts]. Does this represent acute kidney injury?"*

**Metastatic disease query:**  
*"The preoperative CT and oncology records document metastatic disease to [liver / lung / peritoneum]. Can you document the metastatic sites explicitly as active secondary diagnoses in the discharge summary?"*

**Ostomy query:**  
*"A [colostomy / ileostomy] was created during this admission. Can you document the ostomy type and functional status in your discharge diagnoses? Colostomy status (Z93.3) and ileostomy status (Z93.2) should appear in the physician's discharge documentation."*

**Encephalopathy query:**  
*"The patient had new-onset confusion in the setting of [sepsis / hyponatremia / metabolic derangement] on [POD X]. Family confirms this exceeded baseline. Does this represent metabolic encephalopathy secondary to [causative condition]?"*

---

<!-- ============================================================
  SECTION: PageFooter
  Component hint: <ModuleFooter>
  ============================================================ -->

---

*Source: CMS FY2025/FY2026 IPPS Final Rule · MS-DRG V43.0 · ICD-10-CM FY2025*  
*DRG payment figures are national average approximations and vary by hospital wage index and geographic adjustment.*  
*CC/MCC designations change annually with each CMS IPPS Final Rule. Verify against the active MS-DRG Definitions Manual for the applicable fiscal year.*  
*Last updated: June 2026*
