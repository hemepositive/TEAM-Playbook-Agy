# Product Requirements Document
## CDI Specificity Explorer — Single Page Web Application

**Version:** 1.0  
**Author:** CMO Office  
**Status:** Ready for development  
**Target:** Claude Code implementation

---

## 1. Purpose & Problem Statement

Physicians and CDI teams lack an intuitive tool for understanding how documentation specificity directly affects hospital reimbursement and quality metrics. The gap between vague and specific clinical language can represent thousands of dollars per encounter and significantly distort risk-adjusted mortality and severity scores.

This application is a self-contained, interactive teaching tool that demonstrates the financial and quality impact of documentation specificity in real time. A physician should be able to open it, interact with a realistic clinical note, and immediately understand what is at stake — without any training or explanation.

---

## 2. Target Users

- Hospitalist physicians and specialists (primary audience)
- CDI specialists using it in physician education sessions
- CMO / Quality officers demonstrating documentation ROI
- Residency and medical education programs

---

## 3. Product Overview

A single-page web application with two panels:

**Left panel — Clinical Note:** Displays a realistic Assessment & Plan note. Each diagnosis entry starts in its vague, unspecified form. Users can hover a diagnosis to ghost-preview the specific language, then toggle a switch to "lock in" the specificity. The note text animates from vague to specific on toggle.

**Right panel — Live Metrics:** Displays four metrics that update in real time as the user toggles diagnoses: MS-DRG assignment, APR-DRG Severity of Illness (SOI) subclass, APR-DRG Risk of Mortality (ROM) subclass, and estimated Medicare reimbursement. All metrics animate when values change.

---

## 4. Functional Requirements

### 4.1 Diagnosis Rows

Each diagnosis row contains:

- **Index number** (1–N)
- **Vague text** — the unspecified documentation phrase (e.g., "Heart failure")
- **Specific text** — the CDI-optimized phrase (e.g., "Acute-on-chronic systolic heart failure, EF 25%")
- **ICD-10 pill** — shows current code assignment, updates on toggle
- **CC/MCC badge** — shows "No impact", "CC", or "MCC" based on current state
- **Role tag** — "PDx" (principal diagnosis) or "SDx" (secondary diagnosis)
- **Specificity note** — one-line explanation of why this diagnosis matters
- **Toggle switch** — click to specify; animates label between "Specify" and "Specified"

**Hover behavior (preview):** When the user hovers a row that has not yet been toggled, the vague text fades to 35% opacity and the specific text appears at 60% opacity in italic — signaling what the upgrade would look like without committing. When the user moves away, the preview disappears.

**Toggle behavior (commit):** When the user clicks the toggle:
- The vague text animates out (opacity + height collapse)
- The specific text animates in (opacity + height expand)
- The ICD-10 code updates
- The CC/MCC badge updates with appropriate color
- The right panel metrics recalculate and animate

**Reset button:** A "Reset all to vague" button at the bottom of the right panel returns all diagnoses to their unspecified state with a single click, animating all changes simultaneously.

### 4.2 Diagnosis Dataset

The application ships with the following five diagnoses representing a heart failure admission. This dataset is the default and must be hardcoded accurately.

| # | Vague text | Specific text | Vague ICD-10 | Specific ICD-10 | Tier (specific) | Role |
|---|---|---|---|---|---|---|
| 1 | Heart failure | Acute-on-chronic systolic heart failure (EF 25%) | I50.9 | I50.22 | MCC | PDx |
| 2 | Respiratory distress | Acute hypoxic respiratory failure | R06.09 | J96.01 | MCC | SDx |
| 3 | Low sodium | Severe hyponatremia (Na 118) | E87.1 | E87.1 | MCC | SDx |
| 4 | Kidney disease | Chronic kidney disease, stage 3b | N18.9 | N18.32 | CC | SDx |
| 5 | Atrial fibrillation | Persistent atrial fibrillation | I48.91 | I48.11 | CC | SDx |

> Note: Diagnosis 3 (hyponatremia) shares the same ICD-10 code in both vague and specific states — the upgrade is in the clinical specificity of the documented language that justifies the code, not the code itself.

### 4.3 Metrics Engine

The right panel recalculates after every toggle event. The logic is deterministic based on which diagnoses have been toggled.

**MS-DRG Assignment Rules (Heart Failure MDC 5):**

| Condition | DRG | Description | Relative Weight |
|---|---|---|---|
| No CC or MCC specified | DRG 293 | HF & shock — no CC/MCC | 0.7220 |
| 1–2 CC only (no MCC) | DRG 292 | HF & shock — with CC | 1.0520 |
| Any MCC present | DRG 291 | HF & shock — with MCC | 1.7543 |

MCC diagnoses in dataset: #1 (I50.22), #2 (J96.01), #3 (E87.1)  
CC diagnoses in dataset: #4 (N18.32), #5 (I48.11)

The DRG is determined by the highest-tier secondary diagnosis present, following standard MS-DRG grouper logic. A single MCC overrides any CCs and assigns DRG 291.

**APR-DRG SOI Subclass Rules:**

| Active specified diagnoses | SOI subclass | Label |
|---|---|---|
| None specified | 1 | Minor |
| CCs only (1–2) | 2 | Moderate |
| 1 MCC | 3 | Major |
| 2+ MCCs | 4 | Extreme |

**APR-DRG ROM Subclass Rules:**

| Active specified diagnoses | ROM subclass | Label |
|---|---|---|
| None specified | 1 | Minor |
| CCs only | 1–2 | Minor to Moderate |
| MCC #1 only (I50.22) | 2 | Moderate |
| MCC #2 present (J96.01) | 3 | Major |
| MCC #2 + MCC #3 present | 4 | Extreme |

> Rationale: J96.01 (acute respiratory failure) is the dominant ROM driver in this APR-DRG family. The PDx I50.22 alone contributes to SOI more than ROM.

**Reimbursement Calculation:**

```
Estimated reimbursement = $6,000 × DRG relative weight
```

Base case (DRG 293): $6,000 × 0.7220 = $4,332  
CC case (DRG 292): $6,000 × 1.0520 = $6,312  
MCC case (DRG 291): $6,000 × 1.7543 = $10,526

The delta displayed is always relative to the base case (DRG 293, no specificity).

### 4.4 Specificity Progress Indicator

A progress bar and label at the bottom of the right panel shows how many of the 5 diagnoses have been specified:

- Bar fills left to right as diagnoses are toggled
- Label shows "N of 5 specified" and percentage
- Bar color: purple (`#534AB7`)

---

## 5. UI Layout & Visual Design

### 5.1 Layout

```
┌─────────────────────────────────┬──────────────┐
│  Left panel (flex: 1)           │  Right panel │
│  Clinical note + diagnosis rows │  260px fixed │
│                                 │              │
│  [Dx row 1]                     │  MS-DRG      │
│  [Dx row 2]                     │  SOI         │
│  [Dx row 3]                     │  ROM         │
│  [Dx row 4]                     │  Reimb.      │
│  [Dx row 5]                     │  Progress    │
│                                 │  [Reset btn] │
└─────────────────────────────────┴──────────────┘
```

- Two-column CSS grid: `1fr 260px`
- Left panel: `padding: 16px`, right border separator
- Right panel: `padding: 14px`, subtle background (`--color-background-secondary`)
- Minimum app height: 500px
- No external scroll — content fits in viewport on a 1280px wide screen

### 5.2 Color Coding

All colors must work in both light and dark mode. Use CSS variables for theme-aware colors; use hardcoded values only for semantic coding (CC/MCC tiers).

| Tier | Badge bg | Badge text | Specific text color |
|---|---|---|---|
| No impact | `#F1EFE8` | `#5F5E5A` | Default |
| CC | `#FAEEDA` | `#633806` | `#633806` |
| MCC | `#E1F5EE` | `#085041` | `#085041` |

| Metric state | Color |
|---|---|
| DRG upgraded to MCC | `#085041` |
| DRG upgraded to CC | `#633806` |
| SOI/ROM 3 (Major) | `#633806` |
| SOI/ROM 4 (Extreme) | `#085041` |
| Positive delta badge | bg `#E1F5EE`, text `#085041` |
| Neutral delta badge | bg `#F1EFE8`, text `#5F5E5A` |

Role tags:
- PDx: bg `#EEEDFE`, text `#3C3489`
- SDx: bg `#F1EFE8`, text `#5F5E5A`

### 5.3 Typography

- Font: system sans-serif stack (`-apple-system, 'Segoe UI', sans-serif`)
- Monospace for ICD-10 codes: `'Menlo', 'Consolas', monospace`
- Diagnosis vague text: 13px, italic, muted color
- Diagnosis specific text: 13px, weight 500, tier color
- Metric values: 22–28px, weight 500
- Labels: 10px, uppercase, letter-spacing 0.07em, tertiary color
- All text minimum 11px

### 5.4 Animations & Transitions

All transitions use `cubic-bezier(0.4, 0, 0.2, 1)` easing.

| Element | Transition |
|---|---|
| Vague text hide | opacity 0 + max-height collapse, 350ms |
| Specific text reveal | opacity 1 + max-height expand, 350ms |
| Toggle switch thumb | transform translateX, 200ms |
| Toggle track background | background-color, 200ms |
| Metric value change | opacity out (150ms) then value swap then opacity in (250ms), with slight translateY(-4px → 0) |
| Progress bar | width, 500ms cubic-bezier |
| SOI/ROM progress bars | width, 500ms cubic-bezier |
| Delta badge color | color + background, 300ms |

On metric value animation: fade old value out with slight upward movement, swap text, fade new value in from below. Do not use CSS transitions on `textContent` changes — use a JS timeout pattern:

```javascript
el.style.opacity = '0';
el.style.transform = 'translateY(-4px)';
setTimeout(() => {
  el.textContent = newValue;
  el.style.opacity = '1';
  el.style.transform = 'translateY(0)';
}, 150);
```

---

## 6. Technical Requirements

### 6.1 Stack

- **Single HTML file** — all CSS and JavaScript inline; zero external dependencies
- **No build step** — must open directly in any modern browser via `file://` or a static server
- **No frameworks** — vanilla HTML/CSS/JS only
- **No CDN resources** — fully self-contained for use in air-gapped or offline environments (hospital conference rooms, grand rounds, etc.)
- Target browsers: Chrome 110+, Safari 16+, Edge 110+, Firefox 110+

### 6.2 File Structure

```
cdi-specificity-explorer.html   ← single deliverable file
```

### 6.3 Dark Mode

The application must support `prefers-color-scheme: dark`. Use CSS custom properties defined in `:root` with a `@media (prefers-color-scheme: dark)` override block. All semantic colors (CC/MCC tier colors) need explicit dark-mode variants since they are hardcoded hex values.

Dark mode color overrides required:

```css
@media (prefers-color-scheme: dark) {
  /* Backgrounds */
  --app-bg: #1c1c1a;
  --panel-bg: #2a2a27;
  /* Tag backgrounds */
  .badge-none  → bg #3a3a36, text #d3d1c7
  .badge-cc    → bg #3d2a0a, text #fac775
  .badge-mcc   → bg #042820, text #5dcaa5
  /* Specific text colors */
  cc-text  → #ef9f27
  mcc-text → #1d9e75
  /* Role tags */
  pdx-tag → bg #26215c, text #afa9ec
  sdx-tag → bg #3a3a36, text #d3d1c7
  /* Metric card backgrounds */
  drg-card → bg #26215c, border #534ab7
  soi-card → bg #3d2a0a, border #854f0b
  rom-card → bg #042820, border #0f6e56
}
```

### 6.4 Accessibility

- Screen reader summary: include a visually-hidden `<h1>` or `<p>` describing the tool purpose
- All toggle controls must be keyboard-operable (Enter/Space to toggle)
- Toggle switches must have `role="switch"` and `aria-checked` attributes that update on state change
- Color is never the sole differentiator — badges always include text labels
- Minimum touch target size: 28px × 28px for toggle controls

### 6.5 Performance

- No JavaScript libraries or external assets
- Total file size target: under 25KB unminified
- All state is held in a plain JavaScript `Set` — no framework state management
- DOM updates are surgical (target specific elements by ID) — no full re-renders

---

## 7. Data Model

### 7.1 Diagnosis Object

```javascript
{
  id: Number,           // 0-indexed
  vague: String,        // Unspecified text shown initially
  specific: String,     // CDI-optimized text shown after toggle
  icd_vague: String,    // ICD-10 code in vague state
  icd_specific: String, // ICD-10 code in specific state
  tier_vague: 'none',   // Always 'none' — unspecified = no CC/MCC credit
  tier_specific: 'none' | 'cc' | 'mcc',
  role: 'pdx' | 'sdx',
  note: String          // One-line educational note shown beneath text
}
```

### 7.2 Application State

```javascript
const toggled = new Set(); // Set of diagnosis IDs currently in specified state
```

No other state is needed. All metric values are computed deterministically from `toggled` on every update.

### 7.3 Metric Computation Function

```javascript
function computeMetrics(toggled) {
  const mccIds  = new Set([0, 1, 2]); // diagnoses that are MCC when specified
  const ccIds   = new Set([3, 4]);    // diagnoses that are CC when specified

  const activeMCCs = [...toggled].filter(id => mccIds.has(id));
  const activeCCs  = [...toggled].filter(id => ccIds.has(id));

  const hasMCC = activeMCCs.length > 0;
  const hasCC  = activeCCs.length > 0;

  // MS-DRG
  let drg, drgWeight, drgSub, drgTier;
  if (hasMCC) {
    drg = 'DRG 291'; drgWeight = 1.7543;
    drgSub = 'HF & shock — with MCC'; drgTier = 'mcc';
  } else if (hasCC) {
    drg = 'DRG 292'; drgWeight = 1.0520;
    drgSub = 'HF & shock — with CC'; drgTier = 'cc';
  } else {
    drg = 'DRG 293'; drgWeight = 0.7220;
    drgSub = 'HF & shock — no CC/MCC'; drgTier = 'none';
  }

  // SOI
  let soi, soiLabel;
  if (activeMCCs.length >= 2)     { soi = 4; soiLabel = 'Extreme'; }
  else if (activeMCCs.length >= 1) { soi = 3; soiLabel = 'Major'; }
  else if (activeCCs.length >= 1)  { soi = 2; soiLabel = 'Moderate'; }
  else                             { soi = 1; soiLabel = 'Minor'; }

  // ROM — J96.01 (id=1) is the dominant ROM driver
  let rom, romLabel;
  if (toggled.has(1) && toggled.has(2)) { rom = 4; romLabel = 'Extreme'; }
  else if (toggled.has(1))              { rom = 3; romLabel = 'Major'; }
  else if (hasMCC || activeCCs.length >= 2) { rom = 2; romLabel = 'Moderate'; }
  else                                  { rom = 1; romLabel = 'Minor'; }

  // Reimbursement
  const BASE_RATE = 6000;
  const reimb     = Math.round(BASE_RATE * drgWeight);
  const baseReimb = Math.round(BASE_RATE * 0.7220);
  const delta     = reimb - baseReimb;

  return { drg, drgSub, drgTier, drgWeight, soi, soiLabel, rom, romLabel, reimb, delta };
}
```

---

## 8. UI Component Specifications

### 8.1 Diagnosis Row

```
┌─────────────────────────────────────────────────────┐
│  N.  [Vague text / Specific text]         [Badge]   │
│      [Educational note — 10px muted]      [ICD pill]│
│      [○ Toggle — "Specify"]  [PDx/SDx tag]          │
└─────────────────────────────────────────────────────┘
```

- Border: `0.5px solid var(--border-color)`, rounded `8px`
- Hover: border brightens
- Margin between rows: `7px`
- Padding top section: `9px 10px 6px`
- Padding bottom section: `5px 10px 8px 32px` (left-indent past the number)

### 8.2 Toggle Switch

Custom CSS toggle — do not use a checkbox with default styling.

```html
<div class="toggle-wrap" role="switch" aria-checked="false" tabindex="0">
  <div class="toggle-track">
    <div class="toggle-thumb"></div>
  </div>
  <span class="toggle-label">Specify</span>
</div>
```

- Track: `28px × 16px`, `border-radius: 8px`
- Thumb: `12px × 12px`, `border-radius: 50%`, white
- Off state track: `var(--color-border-secondary)`
- On state track: `#0F6E56` (teal-600)
- Thumb offset when on: `translateX(12px)`

### 8.3 Metric Cards (right panel)

Each metric block:
```
[LABEL — 10px uppercase]
[Value — 22px weight 500]
[Sub-description — 11px muted]
[Delta badge — inline pill]
```

SOI and ROM cards additionally include:
```
[Progress bar — 4px height, fills proportionally 1/4 to 4/4]
[Min/Max labels — "Minor" ... "Extreme"]
```

Reimbursement card uses 28px value size.

### 8.4 Section Header

Left panel header:
```
[ASSESSMENT & PLAN — 10px uppercase label]
[Hint text — 11px, tertiary color, 1–2 lines]
```

---

## 9. Extensibility Notes

The following features are out of scope for v1.0 but the architecture should not preclude them:

- **Editable base rate** — slider or text input to change the $6,000 base rate
- **Multiple case types** — selector to switch between HF, CABG, LEJR, Major Bowel encounter datasets
- **Export** — "Copy summary" button that copies the before/after metric comparison to clipboard
- **Physician name / date** — optional header fields for use in actual CDI query letters
- **Print stylesheet** — `@media print` styles that render a clean one-page summary

The diagnosis dataset should be defined as a JavaScript array constant at the top of the script block, separate from all rendering logic, so new case types can be added by appending to that array without modifying any other code.

---

## 10. Acceptance Criteria

| # | Criterion |
|---|---|
| AC-1 | Application opens as a single `.html` file with no external dependencies |
| AC-2 | All five diagnoses display in vague state on load |
| AC-3 | Hovering a row previews specific text without committing |
| AC-4 | Toggling any diagnosis updates all four right-panel metrics within one animation frame |
| AC-5 | Metric values animate (fade out → update → fade in) on every change |
| AC-6 | DRG 293 → 292 → 291 progression fires correctly as CC/MCC diagnoses are toggled |
| AC-7 | Reimbursement delta displays correctly relative to the base (DRG 293) case |
| AC-8 | SOI and ROM progress bars fill proportionally to subclass value (1–4) |
| AC-9 | Reset button returns all rows and metrics to initial state |
| AC-10 | Application renders correctly in dark mode |
| AC-11 | Toggle controls are keyboard-operable and have correct ARIA attributes |
| AC-12 | ICD-10 codes update correctly on toggle and reset |
| AC-13 | CC/MCC badges update color and text on toggle and reset |
| AC-14 | Total file size is under 25KB |
| AC-15 | No JavaScript console errors on load or interaction |

---

## 11. Reference: Medicare DRG Weights

The following relative weights are sourced from CMS IPPS FY2025 Final Rule, Table 5. These are the authoritative values to use in the reimbursement calculation.

| DRG | Description | Relative Weight | Geometric Mean LOS |
|---|---|---|---|
| 291 | Heart failure & shock with MCC | 1.7543 | 4.9 |
| 292 | Heart failure & shock with CC | 1.0520 | 3.6 |
| 293 | Heart failure & shock without CC/MCC | 0.7220 | 2.5 |

Reimbursement formula: `Base Rate × Relative Weight`  
Default base rate: `$6,000` (configurable in v2)

The actual Medicare base rate varies by hospital (wage index, DSH, IME adjustments). $6,000 is a reasonable approximation for a mid-size non-teaching community hospital in the Southeast United States.

---

## 12. Deliverable

A single file: `cdi-specificity-explorer.html`

The file should include a comment block at the top:

```html
<!--
  CDI Specificity Explorer v1.0
  Clinical Documentation Improvement Teaching Tool
  CMO Office — Physician Quest Training Program
  DRG weights: CMS IPPS FY2025 Final Rule, Table 5
  Base rate: $6,000 (community hospital approximation)
-->
```

---

*End of PRD*
