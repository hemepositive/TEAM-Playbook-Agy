# CDI Case Walkthrough — Product Requirements Document
## HTML Format & Component System for TEAM Model Education

**Version:** 1.0  
**Last Updated:** June 2026  
**Purpose:** Reference specification for authoring additional CDI case walkthrough pages using the established HTML/CSS design system  
**Audience:** Content author (Jonathan), AI assistant, or future developer building additional cases

---

## 1. Overview

Each CDI case walkthrough is a single self-contained HTML file. It teaches physicians how accurate clinical documentation affects MS-DRG assignment and reimbursement under the CMS TEAM model, using a specific patient scenario as the vehicle.

The format is built around one pedagogical core: **show a real note, annotate what's wrong with it, show the corrected note, and quantify the financial consequence.** Everything else supports that core.

---

## 2. File Conventions

| Property | Specification |
|---|---|
| File format | Single `.html` file, no external dependencies except Google Fonts |
| Naming convention | `cdi_[procedure]_[topic].html` — e.g., `cdi_lejr_aki.html`, `cdi_cabg_periop_mi.html` |
| Font loading | Google Fonts CDN: DM Serif Display, DM Mono, DM Sans (already in `<head>`) |
| CSS | All styles inline in `<style>` tag within the file — no external stylesheet |
| Self-contained | No JavaScript required; pure HTML/CSS |
| Target viewport | Desktop primary; responsive breakpoints at 1024px and 680px included |

---

## 3. CSS Design System

Copy this CSS variable block verbatim into every new file. Do not alter the variable names — all components reference them.

```css
:root {
  --bg: #F7F5F0;
  --surface: #FFFFFF;
  --surface-warm: #FDFBF7;
  --border: #E2DDD6;
  --border-strong: #C8C0B4;
  --text-primary: #1A1714;
  --text-secondary: #5C5650;
  --text-muted: #9C9590;
  --accent: #C0392B;          /* Red — used for errors, misses, headers */
  --accent-light: #FCEAE8;
  --accent-border: #E8B4B0;
  --warn: #D4790A;             /* Amber — used for warnings, vague language */
  --warn-light: #FEF3E2;
  --warn-border: #F5C87A;
  --ok: #1A7A4A;               /* Green — used for correct documentation */
  --ok-light: #E8F5EE;
  --ok-border: #8FCFAB;
  --info: #1A5276;             /* Blue — used for neutral informational callouts */
  --info-light: #EBF3FB;
  --info-border: #85C1E9;
  --drg-high: #C0392B;
  --drg-low: #7F8C8D;
  --mono: 'DM Mono', monospace;
  --serif: 'DM Serif Display', serif;
  --sans: 'DM Sans', sans-serif;
}
```

**Color semantics — use consistently:**

| Color | Variable | When to Use |
|---|---|---|
| Red | `--accent` | Missed MCCs, documentation errors, undercoded notes |
| Amber | `--warn` | Vague language, partial documentation, warnings |
| Green | `--ok` | Correct documentation, captured MCCs, resolved issues |
| Blue | `--info` | Neutral facts, bonus tips, coding rules that aren't errors |

---

## 4. Page Structure

Every case page uses this three-column layout:

```
┌─────────────────────────────────────────────────┐
│  SITE HEADER (sticky, full width)               │
├──────────────┬──────────────────────┬───────────┤
│  LEFT NAV    │   MAIN CONTENT       │  RIGHT    │
│  (240px)     │   (max 820px)        │  TOC      │
│              │                      │  (220px)  │
│  Procedure   │   Page title         │           │
│  sections    │   Case content       │  Section  │
│  with active │   Components         │  anchors  │
│  state       │                      │           │
└──────────────┴──────────────────────┴───────────┘
```

### 4.1 Site Header

```html
<header class="site-header">
  <div class="logo">CDI Education — TEAM Model</div>
  <div class="breadcrumb">
    <span>[PROCEDURE]</span> › <span>Case Walkthroughs</span> › [Case Title]
  </div>
</header>
```

**Rules:**
- Logo text is always "CDI Education — TEAM Model"
- Breadcrumb: procedure abbreviation → "Case Walkthroughs" → short case title
- Header is sticky (`position: sticky; top: 0; z-index: 100`)

### 4.2 Left Navigation

Organize by the five TEAM procedures. Mark the current page with class `active` on the relevant `<a>` tag.

```html
<nav class="left-nav">
  <div class="nav-section-label">TEAM Overview</div>
  <a href="#">What is the TEAM Model?</a>
  <a href="#">DRG Tier Structures</a>
  <a href="#">CC vs. MCC — The Basics</a>

  <div class="nav-section-label">LEJR</div>
  <a href="#">MS-DRG 469 / 470 Overview</a>
  <a href="#" class="active">Case: [Current Page Title]</a>
  <!-- additional cases -->

  <div class="nav-section-label">SHFFT</div>
  <!-- ... -->

  <div class="nav-section-label">Spinal Fusion</div>
  <!-- ... -->

  <div class="nav-section-label">CABG</div>
  <!-- ... -->

  <div class="nav-section-label">Major Bowel</div>
  <!-- ... -->
</nav>
```

**Rules:**
- Section labels use `.nav-section-label` (uppercase, muted)
- Active item: add class `active` to the current page's link
- Link destinations are `#` placeholders until pages exist

### 4.3 Main Content

```html
<main class="main">
  <!-- Page category line -->
  <div class="page-category">[PROCEDURE] · Case Walkthrough · [Topic Type]</div>
  
  <!-- Page title: punchy, consequence-focused -->
  <h1>[Title]</h1>
  
  <!-- Subtitle: one sentence summarizing the clinical scenario and its documentation failure -->
  <p class="page-subtitle">[Subtitle]</p>

  <div class="page-divider"></div>

  <!-- Sections with h2 anchors -->
  <h2 id="the-case">The Case</h2>
  <!-- ... -->
</main>
```

**Title writing guidelines:**
- Titles should lead with consequence, not topic: *"The Note That Cost $9,000"* not *"AKI Documentation in LEJR"*
- Subtitles should name the clinical scenario and hint at the failure in one sentence

### 4.4 Right Table of Contents

```html
<aside class="right-toc">
  <div class="toc-label">On This Page</div>
  <a href="#the-case" class="active">The Case</a>
  <a href="#drg-impact">DRG Impact</a>
  <a href="#the-rule">The Documentation Rule</a>
  <a href="#codes">Relevant Codes</a>
  <a href="#quick-checklist">Discharge Checklist</a>
</aside>
```

**Rules:**
- First item is always `active` on load
- Anchor IDs must match the `id=""` attributes on the `<h2>` elements in main content
- Five to six items maximum

---

## 5. Content Components

These are the reusable building blocks. Use them in combination to build each case.

---

### 5.1 Case Note Block

Use to display physician-written notes — one "as written" (bad) and one "revised" (good).

```html
<!-- BAD / underdocumented note -->
<div class="case-note">
  <div class="case-note-header bad">
    <span>Discharge Summary — As Written</span>
    <span class="note-type">UNDERDOCUMENTED</span>
  </div>
  <div class="case-note-body">[Note text here. Use inline spans for highlights — see below.]</div>
</div>

<!-- GOOD / corrected note -->
<div class="case-note">
  <div class="case-note-header good">
    <span>Discharge Summary — Revised</span>
    <span class="note-type">COMPLETE</span>
  </div>
  <div class="case-note-body">[Note text here.]</div>
</div>
```

**Header variants:**

| Class on `.case-note-header` | Background | Label Tag | Use When |
|---|---|---|---|
| *(none)* | `--text-primary` (dark) | Any | Neutral / reference note |
| `bad` | Dark red `#4A1010` | `UNDERDOCUMENTED` | The problematic version |
| `good` | Dark green `#0F3D24` | `COMPLETE` | The corrected version |

**Note type badge options:** `UNDERDOCUMENTED`, `COMPLETE`, `PARTIAL`, `QUERY RESPONSE`, `H&P`

**Inline text highlights within note body:**

Use `<span>` with highlight classes to draw attention to specific phrases:

```html
<!-- Red highlight: missing/wrong language -->
<span class="hl-miss">elevated creatinine, improving</span>

<!-- Amber highlight: vague but present language -->
<span class="hl-warn">creatinine was noted to be elevated</span>

<!-- Green highlight: correct language -->
<span class="hl-ok">acute kidney injury, resolving</span>
```

**Writing guidelines for note content:**
- Write notes in realistic clinical style — abbreviated, slightly rushed
- The bad note should have language a real physician might actually write (not obviously wrong on its face)
- The good note should demonstrate the minimum necessary change, not a rewrite
- Use monospace font (already applied via `.case-note-body`) — preserve line breaks with spacing

---

### 5.2 Annotation Callouts

Place immediately after a case note or after a specific highlighted phrase. Explain what the highlight means and why it matters.

```html
<!-- Red: missed documentation, error -->
<div class="annotation miss">
  <div class="ann-icon">⚠</div>
  <div class="ann-body">
    <strong>Missed MCC</strong>
    [Explanation of what's missing and why the coder can't work with what's there.]
  </div>
</div>

<!-- Amber: warning, vague language -->
<div class="annotation warn">
  <div class="ann-icon">◎</div>
  <div class="ann-body">
    <strong>Vague Phrasing</strong>
    [Explanation of why this language is insufficient.]
  </div>
</div>

<!-- Green: correct, captured -->
<div class="annotation ok">
  <div class="ann-icon">✓</div>
  <div class="ann-body">
    <strong>MCC Captured</strong>
    [Explanation of why this works and what it enables the coder to do.]
  </div>
</div>

<!-- Blue: informational, bonus point -->
<div class="annotation info">
  <div class="ann-icon">i</div>
  <div class="ann-body">
    <strong>Bonus: [Topic]</strong>
    [Supplementary information — coding rule, quality metric, related tip.]
  </div>
</div>
```

**Strong label options by type:**

| Variant | Common Strong Labels |
|---|---|
| `miss` (red) | Missed MCC, Not Codeable, Documentation Gap, HAC Risk |
| `warn` (amber) | Vague Phrasing, Incomplete Causality, Missing Specificity, Uncertain Language |
| `ok` (green) | MCC Captured, CC Captured, Causality Established, POA Supported |
| `info` (blue) | Bonus, Coding Rule, Quality Metric, APR-DRG Note, POA Note |

**Sequencing rules:**
- Always follow a bad note with miss/warn annotations first
- Always follow a good note with ok/info annotations
- Do not use more than 3 annotations per note block
- The first annotation after a bad note should be the highest-value miss (the MCC or the biggest problem)

---

### 5.3 DRG Impact Box

Shows the before/after DRG assignment and the reimbursement delta. Use once per case, after the note pair.

```html
<div class="drg-impact">
  <div class="drg-card before">
    <div class="drg-label">As Written</div>
    <div class="drg-number">DRG [###]</div>
    <div class="drg-desc">[DRG description]<br>[Severity level — "Without MCC"]</div>
    <div class="drg-payment">~$[amount]</div>
  </div>
  <div class="drg-arrow">→</div>
  <div class="drg-card after">
    <div class="drg-label">Revised Documentation</div>
    <div class="drg-number">DRG [###]</div>
    <div class="drg-desc">[DRG description]<br>[Severity level — "With MCC"]</div>
    <div class="drg-payment">~$[amount]</div>
    <div class="drg-delta">▲ ~$[delta] difference</div>
  </div>
</div>
```

**DRG payment reference (FY2025 approximations — national average):**

| Procedure | Without CC/MCC | With CC | With MCC | MCC Delta |
|---|---|---|---|---|
| LEJR (DRG 470 → 469) | ~$14,500 | N/A (2-tier) | ~$23,500 | ~$9,000 |
| SHFFT (DRG 482 → 481 → 480) | ~$13,000 | ~$18,000 | ~$25,000 | CC: ~$5K / MCC: ~$12K |
| CABG w/o cath (DRG 236 → 235) | ~$29,000 | N/A (2-tier) | ~$41,000 | ~$12,000 |
| CABG w/ cath (DRG 234 → 233) | ~$38,000 | N/A (2-tier) | ~$55,500 | ~$17,500 |
| Major Bowel (DRG 331 → 330 → 329) | ~$13,500 | ~$21,000 | ~$35,000 | CC: ~$7.5K / MCC: ~$21.5K |

**Rules:**
- Always include a `drg-delta` line on the "after" card
- Use `~$` to signal approximation — these are national averages
- For 3-tier cases, you may show a 3-card layout or focus on the most impactful transition (base → MCC)

**3-tier variant** (add a middle card for CC tier):
```html
<div class="drg-impact" style="grid-template-columns: 1fr 30px 1fr 30px 1fr;">
  <!-- Card: Without CC/MCC -->
  <!-- Arrow -->
  <!-- Card: With CC -->
  <!-- Arrow -->
  <!-- Card: With MCC -->
</div>
```

---

### 5.4 Pearl Box

Use once per case, typically at the start of "The Documentation Rule" section. States the overarching principle in bold, memorable terms.

```html
<div class="pearl-box">
  <div class="pearl-label">Documentation Principle</div>
  <div class="pearl-text">[One to two sentences. Bold, actionable, generalizable beyond this specific case.]</div>
</div>
```

**Writing guidelines:**
- The pearl should be memorable enough to repeat in rounds
- It generalizes the lesson of the specific case: *"A lab value is not a diagnosis. A treatment is not a diagnosis. Only a physician-documented clinical condition — named explicitly — can be coded."*
- Avoid jargon; a first-year resident should understand it without CDI training

---

### 5.5 Step Sequence

Use for two purposes: (1) showing what does NOT work (with ✗ markers), and (2) showing what DOES work (with ✓ markers). Also used for the discharge checklist.

```html
<!-- "Does not work" sequence -->
<div class="steps">
  <div class="step">
    <div class="step-num">✗</div>
    <div class="step-body"><strong>"[exact phrase]"</strong> — [brief explanation of why it fails]</div>
  </div>
  <!-- repeat -->
</div>

<!-- "Does work" sequence -->
<div class="steps">
  <div class="step">
    <div class="step-num">✓</div>
    <div class="step-body"><strong>"[exact phrase]"</strong> — [brief explanation of why it works]</div>
  </div>
</div>

<!-- Numbered checklist (discharge checklist) -->
<div class="steps">
  <div class="step">
    <div class="step-num">1</div>
    <div class="step-body">[Clinical trigger]. <strong>[Actionable instruction.]</strong></div>
  </div>
  <!-- 3–5 steps maximum -->
</div>
```

**Rules:**
- Step sequences with ✗/✓ use 3–5 items
- Discharge checklists use 1/2/3 numbering, 3–5 items, never more
- Bold the actionable instruction, not the explanation
- Each step should be one to two sentences maximum

---

### 5.6 Code Chips

Inline display of ICD-10 codes with CC/MCC designation. Use in the "Relevant Codes" section.

```html
<!-- MCC — red background -->
<span class="code-chip mcc">N17.9 — AKI, unspecified · MCC</span>

<!-- CC — amber background -->
<span class="code-chip cc">N18.3 — CKD Stage 3 · CC</span>

<!-- Neutral / confirmed correct — green background -->
<span class="code-chip ok">E11.65 — T2DM with hyperglycemia · CC</span>

<!-- Default — dark background (use for procedure codes or neutral reference) -->
<span class="code-chip">Z96.641 — Presence of right artificial hip joint</span>
```

**Format for chip text:** `[ICD-10 Code] — [Short Description] · [CC/MCC/POA Note]`

**Rules:**
- Always note CC or MCC status in the chip text
- Group MCCs first, then CCs
- Include a plain-text note below chips for important caveats (POA rules, PDX exclusions, annual update reminders)

---

### 5.7 Page Divider

Simple horizontal rule used once, immediately after the subtitle/intro block.

```html
<div class="page-divider"></div>
```

---

### 5.8 Page Footer

Use at the bottom of every case page, inside `<main>`.

```html
<div class="main-footer">
  <p>Source: CMS FY2025 IPPS Final Rule · MS-DRG V43.0 · ICD-10-CM FY2025</p>
  <p>DRG payment figures are national average approximations and vary by hospital wage index and geographic adjustment. Verify current CC/MCC status annually.</p>
</div>
```

---

## 6. Required Sections — Every Case Page

Every case walkthrough must include these sections in this order:

| # | Section | `h2` ID | Required Components |
|---|---|---|---|
| 1 | The Case | `#the-case` | Clinical narrative (prose) + bad note + annotations + good note + annotations |
| 2 | DRG Impact | `#drg-impact` | DRG Impact Box + 1–2 sentences of explanation |
| 3 | The Documentation Rule | `#the-rule` | Pearl Box + "does not work" step sequence + "does work" step sequence |
| 4 | Relevant Codes | `#codes` | Code chips + caveats paragraph |
| 5 | Before You Sign the Discharge Summary | `#quick-checklist` | Numbered step sequence (3–5 items) |

---

## 7. Section Writing Guidelines

### 7.1 The Case — Clinical Narrative

Open with a 2–3 sentence patient setup: age, sex, procedure, relevant PMH. Then transition: "Here's what the discharge summary says."

Do not editorialize in the setup paragraph — present the clinical facts neutrally. The annotation callouts do the teaching.

**Patient demographics:** Vary age, sex, and comorbidity profiles across cases. Use realistic but not identifying demographics. Suggested range: 58–82 years old for LEJR/SHFFT/CABG; broader range for spinal fusion and major bowel.

### 7.2 DRG Impact — Connecting Prose

After the DRG impact box, add one to two sentences that make the "so what" explicit. The sentence should quantify the consequence and connect it to the specific documentation change:

> *"The clinical work was identical in both scenarios. The creatinine rose. Nephrology was consulted. IV fluids were given. The difference is four words: 'acute kidney injury, resolving.'"*

### 7.3 The Documentation Rule

The pearl states the principle. The ✗/✓ sequences make it concrete. Follow this order:

1. Pearl box — the rule in abstract terms
2. Brief framing sentence: *"Coders work from physician documentation. They cannot infer..."*
3. ✗ sequence: 3–5 examples of non-codeable language, drawn from the bad note
4. Brief framing sentence: *"The following language is codeable:"*
5. ✓ sequence: 3–4 examples of acceptable documentation language

### 7.4 Relevant Codes

List codes in this order: MCCs first, then CCs. For each code, include the ICD-10 code, description, and designation in the chip. Below the chips, add a 1–2 sentence caveat paragraph covering:
- POA/secondary diagnosis rules ("These are MCCs only when used as secondary diagnoses")
- Any escalation opportunities (e.g., "CKD stage 5 is an MCC — document the stage")
- Annual update reminder

### 7.5 Discharge Checklist

3–5 items. Each item follows the pattern:
- Clinical trigger (what the physician observes): *"Did creatinine rise ≥ 0.3 mg/dL above baseline?"*
- Actionable instruction in bold: *"Name it as AKI in your discharge diagnoses."*
- Optional: why it matters or a common pitfall

---

## 8. Case Inventory — Recommended Build Order

### Priority 1: One case per procedure (TEAM coverage)

| File | Procedure | Topic | Key MCC | DRG Impact |
|---|---|---|---|---|
| `cdi_lejr_aki.html` | LEJR | Postop AKI | N17.9 | 470 → 469 (~$9K) |
| `cdi_shfft_delirium.html` | SHFFT | Metabolic encephalopathy / delirium | G93.41 | 482 → 480 (~$12K) |
| `cdi_spinalfusion_malnutrition.html` | Spinal Fusion | Severe malnutrition | E43 | Varies by DRG family |
| `cdi_cabg_postop_af.html` | CABG | New-onset afib (CC only — 2-tier teaching) | I48.19 (CC) | No DRG change; SOI lesson |
| `cdi_majorbowel_sepsis.html` | Major Bowel | Sepsis / bowel perforation | A41.9 + R65.21 | 331 → 329 (~$21K) |

### Priority 2: High-value second cases

| File | Procedure | Topic | Teaching Focus |
|---|---|---|---|
| `cdi_lejr_encephalopathy.html` | LEJR | Postop AMS → metabolic encephalopathy | G93.41 as MCC; "altered mental status" not codeable |
| `cdi_shfft_malnutrition.html` | SHFFT | Malnutrition in hip fracture | E46 (CC) vs. E43 (MCC); albumin documentation |
| `cdi_cabg_periop_mi.html` | CABG | Perioperative MI | I21.9 — explicit documentation required |
| `cdi_spinalfusion_bloodloss.html` | Spinal Fusion | Acute blood loss anemia | D62 (CC); multilevel case, intraop EBL |
| `cdi_majorbowel_malnutrition.html` | Major Bowel | Malnutrition + colorectal cancer | E43 + C18.9 stacking |

### Priority 3: Cross-cutting concept cases

| File | Topic | Teaching Focus |
|---|---|---|
| `cdi_concept_2tier_vs_3tier.html` | Tier structure | Why a CC doesn't always matter |
| `cdi_concept_poa_hac.html` | POA / HAC | When capturing a CC hurts more than it helps |
| `cdi_concept_specificity.html` | Specificity | "Heart failure" vs. "acute systolic heart failure" |
| `cdi_concept_query.html` | CDI query writing | What a compliant clarification query looks like |

---

## 9. What NOT to Include

To maintain clinical and compliance integrity, every case must avoid:

- **Suggesting upcoding:** All cases teach accurate documentation of genuine clinical conditions. No case should imply that a condition should be documented when it was not clinically present.
- **Fabricating clinical findings:** Bad note examples should reflect plausible physician language, not deliberately absurd strawmen.
- **Specifying exact reimbursement as guaranteed:** Always use `~$` and include the footer disclaimer.
- **Outdated code references:** Verify ICD-10 codes and CC/MCC designations against the active fiscal year's CMS table before publishing.
- **Legal/compliance advice:** This is educational material. It does not constitute coding advice and should not be positioned as such.

---

## 10. HTML Template — Copy/Paste Starting Point

Use this shell for every new case. Replace all `[BRACKETED]` placeholders.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Case Title] — CDI Education TEAM Model</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<style>
  /* === PASTE FULL CSS FROM cdi_lejr_aki.html HERE === */
  /* All :root variables, all class definitions */
  /* Do not modify variable names or class names */
</style>
</head>
<body>

<header class="site-header">
  <div class="logo">CDI Education — TEAM Model</div>
  <div class="breadcrumb">
    <span>[PROCEDURE ABBREV]</span> › <span>Case Walkthroughs</span> › [Short Case Title]
  </div>
</header>

<div class="layout">

  <nav class="left-nav">
    <!-- Copy nav from reference file; set class="active" on current page link -->
  </nav>

  <main class="main">

    <div class="page-category">[PROCEDURE] · Case Walkthrough · [Topic Type]</div>
    <h1>[Punchy Consequence-Focused Title]</h1>
    <p class="page-subtitle">[One sentence: clinical scenario + documentation failure hint]</p>
    <div class="page-divider"></div>

    <h2 id="the-case">The Case</h2>
    <!-- Clinical narrative prose -->
    <!-- Bad case note + annotations -->
    <!-- Good case note + annotations -->

    <h2 id="drg-impact">DRG Impact</h2>
    <!-- DRG impact box -->
    <!-- 1-2 sentence connecting prose -->

    <h2 id="the-rule">The Documentation Rule</h2>
    <!-- Pearl box -->
    <!-- Framing sentence -->
    <!-- Steps with ✗ (does not work) -->
    <!-- Framing sentence -->
    <!-- Steps with ✓ (does work) -->

    <h2 id="codes">Relevant Codes</h2>
    <!-- Code chips -->
    <!-- Caveats paragraph -->

    <h2 id="quick-checklist">Before You Sign the Discharge Summary</h2>
    <!-- Numbered steps: clinical trigger + bold action -->

    <div class="main-footer">
      <p>Source: CMS FY2025 IPPS Final Rule · MS-DRG V43.0 · ICD-10-CM FY2025</p>
      <p>DRG payment figures are national average approximations and vary by hospital wage index and geographic adjustment. Verify current CC/MCC status annually.</p>
    </div>

  </main>

  <aside class="right-toc">
    <div class="toc-label">On This Page</div>
    <a href="#the-case" class="active">The Case</a>
    <a href="#drg-impact">DRG Impact</a>
    <a href="#the-rule">The Documentation Rule</a>
    <a href="#codes">Relevant Codes</a>
    <a href="#quick-checklist">Discharge Checklist</a>
  </aside>

</div>
</body>
</html>
```

---

## 11. Quick Reference Card

When building a new case, answer these questions in order. The answers populate every section.

**Clinical setup:**
1. Which TEAM procedure is this? (Determines DRG family and tier structure)
2. What comorbidity or complication is the teaching topic?
3. Is this condition an MCC, a CC, or a specificity lesson?
4. Is this a 2-tier or 3-tier DRG? (Determines whether CC matters for payment)

**Note pair:**
5. What would a busy physician realistically write that misses this? (Bad note)
6. What is the minimum language change that makes it codeable? (Good note — keep changes minimal)
7. Which phrases in the bad note need red highlights? Amber?
8. Which phrases in the good note need green highlights?

**DRG numbers:**
9. What DRG does the bad note produce?
10. What DRG does the corrected note produce?
11. What is the approximate payment difference? (Use table in Section 5.3)

**The rule:**
12. What is the one-sentence pearl for this case?
13. What are 3–4 specific non-codeable phrases a physician might write for this condition?
14. What are 2–3 acceptable phrases?

**Codes:**
15. What is the primary ICD-10 code being taught? MCC or CC?
16. What related codes are worth noting (escalation opportunities, related CCs)?

**Checklist:**
17. What 3–5 clinical triggers at discharge signal this condition is present?
18. What is the specific action word for each trigger? (Name it, document, specify, confirm)

---

*This PRD is a living document. Update the case inventory table as new cases are completed. Update payment figures when CMS releases a new IPPS Final Rule. Verify CC/MCC designations against the active MS-DRG Definitions Manual each fiscal year.*
