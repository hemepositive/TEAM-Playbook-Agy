# TEAM Playbook — Site Design Spec

## Goal Description
Build the MVP of the **TEAM Playbook**, an interactive public documentation and reference site that educates surgeons, medicine physicians, and APPs on clinical documentation improvement (CDI) for the CMS TEAM (Transforming Episode-Based Payment) model. 

The site will feature a clean, premium three-column Mintlify-style documentation layout combined with inline interactive clinical vignettes ("Recall & Reveal") to challenge surgeons and show how specific documentation affects payment and quality metrics (Severity of Illness and Risk of Mortality).

---

## Technical Stack
* **Framework**: React 18+ (scaffolded with Vite).
* **Styling**: Tailwind CSS v4 (leveraging CSS variables and modern layout utilities).
* **Routing**: React Router v6 (client-side routing).
* **Content Management**: Direct TSX Pages (pages written as React TSX files under `src/pages/` for flexibility and robust component embedding).
* **State Management**: React `useState` & context for dark/light theme toggle and selected surgical specialty path.

---

## Layout & Architecture

The application will use a central `DocsLayout.tsx` that provides the responsive three-column grid.

```
┌────────────────────────────────────────────────────────┐
│ Header (Logo, Search Bar, Dark/Light Toggle)          │
├──────────────┬──────────────────────────┬──────────────┤
│              │                          │              │
│ Left Sidebar │ Center Content Column    │ Right Sidebar│
│ (Specialty   │ (Documentation Prose &   │ (Dynamic     │
│  Switcher,   │  Interactive Vignette    │  Table of    │
│  Navigation) │  Components)             │  Contents)   │
│              │                          │              │
└──────────────┴──────────────────────────┴──────────────┘
```

### 1. Header (Sticky)
* **Left**: Brand logo and application title ("TEAM Playbook").
* **Center**: Fast search bar (client-side search across page titles and headings).
* **Right**: Dark/Light mode toggle switch using typical sun/moon iconography.

### 2. Left Sidebar (Sticky, Scrollable)
* **Specialty Switcher (Top)**: A pill-toggle selector or dropdown with options:
  * **All Procedures** (Shows all 5 TEAM procedures)
  * **Orthopedics** (Filters navigation to Joint Replacement and Hip Fracture)
  * **Spine Surgery** (Filters navigation to Spinal Fusion)
  * **Cardiothoracic** (Filters navigation to CABG)
  * **General Surgery** (Filters navigation to Major Bowel)
* **Navigation Links**:
  * *General Docs*: "What is TEAM?", "CDI Fundamentals", "H&P & Discharge Rules"
  * *Procedure References*: Section headings dynamically filtered by the selected specialty switcher.

### 3. Center Content Workspace
* Maximum width of `800px` for readability.
* Typography: **Outfit** for headers, **Inter** for body text.
* Premium styling elements: Glassmorphism borders (`backdrop-blur`), soft shadow layers, and clear color-coded callouts for information boxes.

### 4. Right Sidebar (Sticky, Desktop-Only)
* **Table of Contents**: Displays an auto-generated list of headers (`h2` and `h3`) from the current page's center column.
* **Scroll-spy**: Dynamically highlights the header currently visible in the user's viewport.

---

## Interactive Component: Clinical Vignette (`<ClinicalVignette />`)

Each vignette is structured as a self-contained card embedded inline within a procedure page.

### State 1: Active Challenge
* **Patient Profile Header**: Displays demographics (Age, Gender, Admitting DX) and an avatar.
* **Clinical Vignette Description**: Concise chief complaint, history, and key vitals/lab values (e.g., Creatinine levels, BMI, Lactate).
* **Recall Challenge Prompt**: *"Mentally review: What secondary diagnoses would you document in your notes to accurately capture this patient's severity?"*
* **Interactive Notepad (Optional/Future-Proof)**: A simple text area where the user can jot down their diagnoses before clicking reveal.
* **Reveal Trigger**: A large high-contrast button reading **"Reveal Optimal Documentation"**.

### State 2: Post-Reveal Dashboard
Once clicked, the vignette card expands to reveal:
1. **Specificity Comparison**:
   * *The Trap (Generic/Vague)*: Common documentation misses labeled with a gray/red indicator (e.g., *"Elevated creatinine"* ➔ ❌ *No DRG Impact*).
   * *The Target (Specific/Optimal)*: The precise, codeable terms labeled with a green indicator (e.g., *"Acute kidney injury"* ➔ ✅ *MCC*).
2. **Impact Metrics Dashboard**:
   * *Financial Indicator*: Illustrates the payment tier shift (e.g., `+$6,400` or `$12,000 ➔ $18,400`).
   * *SOI (Severity of Illness)*: Visual level bar (Levels 1 to 4) showing the change in severity rating.
   * *ROM (Risk of Mortality)*: Visual level bar (Levels 1 to 4) showing the change in mortality rating.
3. **CDI Teaching Points**:
   * Bulleted clinician-to-clinician explanation detailing diagnostic criteria (such as KDIGO or ASPEN guidelines) and why specific wording is critical.

---

## Page Route Map
* `/` ➔ Landing Page (with large visual entry cards for each specialty & basic onboarding).
* `/docs/overview` ➔ What is the TEAM Model? (General education page).
* `/docs/fundamentals` ➔ CDI Fundamentals (HCC vs. CC/MCC overview).
* `/docs/lejr` ➔ Lower Extremity Joint Replacement.
* `/docs/hip-fracture` ➔ Surgical Hip Fracture Management.
* `/docs/spinal-fusion` ➔ Spinal Fusion.
* `/docs/cabg` ➔ Coronary Artery Bypass Graft.
* `/docs/major-bowel` ➔ Major Bowel Procedure.

---

## Verification Plan

### Manual Verification
1. **Responsive Verification**: Verify layout collapses cleanly on mobile viewports. Left and right sidebars must collapse into a mobile drawer, and vignette elements must stack cleanly.
2. **Specialty Switcher Verification**: Switch between specialties (e.g., Orthopedics) and verify that the sidebar dynamically filters out irrelevant procedures (e.g., CABG) without breaking navigation history.
3. **Theme Toggle Verification**: Test the dark/light mode toggle in the header and verify that colors transition cleanly without styling bugs.
4. **Vignette Interaction Verification**: Click the "Reveal Optimal Documentation" button in each vignette and ensure states transition smoothly.
