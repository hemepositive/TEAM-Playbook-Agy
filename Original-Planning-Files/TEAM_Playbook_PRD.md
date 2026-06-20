# TEAM Playbook — React Application PRD
## Product Requirements Document for Claude Code

**Version:** 1.0  
**Last Updated:** June 2026  
**Stack:** React + React Router + Tailwind CSS  
**Purpose:** Full specification for building the TEAM Playbook React application from existing content files  
**Audience:** Claude Code — this document is the authoritative build specification

---

## 1. Project Overview

TEAM Playbook is a clinical documentation education web application for physicians and APPs at hospitals participating in the CMS TEAM (Transforming Episode Accountability Model) mandatory bundled payment program. It teaches how clinical documentation — specifically the naming and specificity of secondary diagnoses — affects DRG tier assignment, HCC risk adjustment, and episode reimbursement.

**Primary audience:** Attending physicians (surgeons and medicine), hospitalists, APPs  
**Secondary audience:** CDI specialists using the site in physician education sessions  
**Device target:** Desktop primary, tablet secondary, mobile usable  
**Mode:** Light mode only — this is text-heavy reference material

The site is built from pre-written content files (markdown, JSON, JSX prototypes) that already exist. Claude Code's job is to build the React application shell, routing, components, and layout — then wire the existing content into them.

---

## 2. Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | React 18 | Functional components, hooks only |
| Routing | React Router v6 | File-based route structure |
| Styling | Tailwind CSS v3 | Utility-first; no custom CSS files |
| Markdown | react-markdown + gray-matter | Parse frontmatter + render MDX-like content |
| Data | JSON imports | Vignettes and condition data loaded as static imports |
| Build | Vite | Fast dev server, straightforward config |
| Fonts | Google Fonts | DM Sans (body), DM Serif Display (display headings) |
| Icons | Lucide React | Consistent icon set, tree-shakeable |
| No dark mode | — | Light mode only; eliminate `dark:` variant complexity |

**Do not use:** Next.js, styled-components, CSS modules, Emotion, any CSS-in-JS library, Chakra UI, Material UI, shadcn (except as reference for component patterns).

---

## 3. Design System

### 3.1 Visual Reference

The Anthropic Docs site (docs.anthropic.com) is the primary visual reference. Key characteristics to replicate:
- Clean white/off-white surfaces with a left sidebar nav
- Right-side table of contents on long content pages
- Generous line height and readable prose column width (~68ch)
- Subtle section dividers, not heavy borders
- Colored callout blocks that stand out without being aggressive
- Consistent use of small-caps or tight-tracked labels for section metadata

### 3.2 Tailwind Configuration

Add this to `tailwind.config.js`:

```js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'ui-serif', 'Georgia', 'serif'],
        mono: ['DM Mono', 'ui-monospace', 'Menlo', 'monospace'],
      },
      colors: {
        // Brand — warm slate, not cool gray
        slate: {
          50:  '#F7F5F0',
          100: '#EFECE5',
          200: '#E2DDD6',
          300: '#C8C0B4',
          400: '#9C9590',
          500: '#5C5650',
          600: '#3D3832',
          700: '#2A2520',
          800: '#1A1714',
          900: '#0E0C0A',
        },
        // Accent — used for active nav, links, badges
        teal: {
          50:  '#E1F5EE',
          100: '#B8E8D4',
          500: '#1D9E75',
          600: '#0F6E56',
          700: '#085041',
          900: '#04342C',
        },
        // MCC color — green
        mcc: {
          bg:     '#E1F5EE',
          border: '#1D9E75',
          text:   '#085041',
          badge:  '#0F6E56',
        },
        // CC color — amber
        cc: {
          bg:     '#FAEEDA',
          border: '#BA7517',
          text:   '#633806',
          badge:  '#EF9F27',
        },
        // Miss / error — red
        miss: {
          bg:     '#FCEAE8',
          border: '#E8B4B0',
          text:   '#C0392B',
        },
        // Warn — amber (vague documentation)
        warn: {
          bg:     '#FEF3E2',
          border: '#F5C87A',
          text:   '#D4790A',
        },
        // OK / correct — green
        ok: {
          bg:     '#E8F5EE',
          border: '#8FCFAB',
          text:   '#1A7A4A',
        },
        // Info / neutral callout — blue
        info: {
          bg:     '#EBF3FB',
          border: '#85C1E9',
          text:   '#1A5276',
        },
        // Pearl / key teaching point — purple
        pearl: {
          bg:     '#EEEDFE',
          border: '#AFA9EC',
          text:   '#3C3489',
        },
        // Denial risk — deep red
        denial: {
          bg:     '#FFF0F0',
          border: '#F09595',
          text:   '#A32D2D',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '68ch',
            color: '#1A1714',
            lineHeight: '1.7',
            'h1, h2, h3': { color: '#1A1714', fontFamily: 'DM Serif Display, serif' },
            'h2': { marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid #E2DDD6' },
            'h2:first-of-type': { marginTop: 0, paddingTop: 0, borderTop: 'none' },
            'a': { color: '#0F6E56', textDecoration: 'none' },
            'a:hover': { textDecoration: 'underline' },
            'code': { fontFamily: 'DM Mono, monospace', fontSize: '0.875em' },
            'strong': { color: '#1A1714' },
            'p': { color: '#5C5650' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```

Install: `npm install -D tailwindcss @tailwindcss/typography`

### 3.3 Color Semantics

These color assignments are non-negotiable — they map to the content's callout vocabulary and must be consistent across every page:

| Semantic | Tailwind classes | When to use |
|----------|-----------------|-------------|
| MCC | `bg-mcc-bg border-mcc-border text-mcc-text` | MCC badge, MCC callout blocks |
| CC | `bg-cc-bg border-cc-border text-cc-text` | CC badge, CC callout blocks |
| `[MISS]` | `bg-miss-bg border-miss-border text-miss-text` | Documentation error callout |
| `[WARN]` | `bg-warn-bg border-warn-border text-warn-text` | Vague language callout |
| `[OK]` | `bg-ok-bg border-ok-border text-ok-text` | Correct documentation callout |
| `[NOTE]` / `[INFO]` | `bg-info-bg border-info-border text-info-text` | Neutral informational callout |
| `[PEARL]` | `bg-pearl-bg border-pearl-border text-pearl-text` | Key teaching point — prominent |
| `[DENIAL-RISK]` | `bg-denial-bg border-denial-border text-denial-text` | Audit risk warning |

### 3.4 Typography

```html
<!-- In index.html head -->
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

- **Body text:** DM Sans 400, 16px, leading-7
- **Display headings (h1):** DM Serif Display, not DM Sans
- **Section headings (h2, h3):** DM Serif Display for h2; DM Sans 600 for h3
- **Code / ICD-10 chips:** DM Mono
- **Section labels / metadata:** DM Sans 500, text-xs, tracking-widest, uppercase, text-slate-400
- **Prose column max-width:** 68ch (enforced via `prose` class from @tailwindcss/typography)

### 3.5 Layout Dimensions

| Element | Width |
|---------|-------|
| Left sidebar | 240px fixed |
| Right TOC | 220px fixed |
| Main content | Remaining space, max 820px prose width |
| Page max-width | 1280px centered |
| Header height | 52px |

---

## 4. Application Architecture

### 4.1 Directory Structure

```
team-playbook/
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                   # Router setup
│   ├── index.css                 # Tailwind directives only
│   │
│   ├── components/               # Reusable UI components
│   │   ├── layout/
│   │   │   ├── AppShell.jsx      # Header + sidebar + main + TOC wrapper
│   │   │   ├── Header.jsx        # Sticky top nav bar
│   │   │   ├── Sidebar.jsx       # Left navigation
│   │   │   └── TableOfContents.jsx  # Right TOC (auto-generated from h2s)
│   │   │
│   │   ├── content/              # Content rendering components
│   │   │   ├── Callout.jsx       # [PEARL], [NOTE], [MISS], [WARN], [OK], [DENIAL-RISK]
│   │   │   ├── Badge.jsx         # MCC / CC / No-impact badges
│   │   │   ├── CodeChip.jsx      # ICD-10 code pills
│   │   │   ├── DRGImpactCard.jsx # Before/after DRG comparison box
│   │   │   ├── CaseNote.jsx      # Annotated physician note block
│   │   │   ├── PearlBox.jsx      # Large teaching pearl callout
│   │   │   └── MarkdownRenderer.jsx  # Parses callout tags + renders MDX-like
│   │   │
│   │   ├── interactive/          # Interactive components
│   │   │   ├── VignetteCard.jsx          # Single scenario card (collapsed/expanded)
│   │   │   ├── VignetteSet.jsx           # Filtered set of vignettes with controls
│   │   │   ├── SpecificityExplorer.jsx   # Port of cdi-specificity-explorer.html
│   │   │   └── PhrasingQuickLook.jsx     # Scenario widget (approved prototype)
│   │   │
│   │   └── ui/                   # Primitive UI components
│   │       ├── Button.jsx
│   │       ├── Tag.jsx
│   │       └── Breadcrumb.jsx
│   │
│   ├── pages/                    # Route-level page components
│   │   ├── Landing.jsx           # / — role selector + hero
│   │   ├── learn/
│   │   │   ├── index.jsx         # /learn — module index
│   │   │   ├── CDIFundamentals.jsx
│   │   │   ├── TEAMOverview.jsx
│   │   │   └── SurgicalDecisions.jsx
│   │   ├── procedures/
│   │   │   ├── index.jsx         # /procedures — procedure selector
│   │   │   ├── LEJR.jsx
│   │   │   ├── SHFFT.jsx
│   │   │   ├── SpinalFusion.jsx
│   │   │   ├── CABG.jsx
│   │   │   └── MajorBowel.jsx
│   │   ├── conditions/
│   │   │   ├── index.jsx         # /conditions — card grid
│   │   │   └── [slug].jsx        # /conditions/:slug — individual card
│   │   ├── reference/
│   │   │   ├── index.jsx         # /reference — reference index
│   │   │   ├── CCMCC.jsx
│   │   │   ├── HCC.jsx
│   │   │   ├── APRDRG.jsx
│   │   │   ├── PSI.jsx
│   │   │   ├── QuickRef.jsx      # /reference/quick/:procedure
│   │   │   └── HCCByProcedure.jsx
│   │   ├── practice/
│   │   │   └── index.jsx         # /practice — vignette interface
│   │   ├── cases/
│   │   │   ├── index.jsx         # /cases — walkthrough index
│   │   │   └── [slug].jsx        # /cases/:slug — individual walkthrough
│   │   └── explore/
│   │       └── index.jsx         # /explore — specificity explorer
│   │
│   ├── data/                     # Static data files
│   │   ├── micro-vignettes.json  # 50 clinical scenario vignettes
│   │   ├── condition-cards.js    # 40 condition cards (MCC + CC)
│   │   ├── navigation.js         # Sidebar nav structure
│   │   └── procedures.js         # Procedure metadata (DRG families, tier structure)
│   │
│   └── content/                  # Markdown source files (imported at build time)
│       ├── learn/
│       │   ├── cdi-fundamentals.md
│       │   ├── team-overview.md
│       │   └── team-surgical-decisions-and-cost.md
│       ├── procedures/
│       │   ├── lejr-procedure-module.md
│       │   ├── shfft-procedure-module.md
│       │   ├── spinal-fusion-procedure-module.md
│       │   ├── cabg-procedure-module.md
│       │   └── major-bowel-procedure-module.md
│       └── reference/
│           ├── reference-cc-mcc.md
│           ├── reference-hcc-general.md
│           ├── reference-apr-drg.md
│           ├── reference-psi.md
│           ├── reference-lejr.md
│           ├── reference-shfft.md
│           ├── reference-spinal-fusion.md
│           ├── reference-cabg.md
│           └── reference-bowel.md
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

### 4.2 Route Map

| Path | Component | Content Source |
|------|-----------|---------------|
| `/` | `Landing.jsx` | `landing-page.md` |
| `/learn` | `learn/index.jsx` | Static |
| `/learn/cdi-fundamentals` | `CDIFundamentals.jsx` | `cdi-fundamentals.md` |
| `/learn/team-overview` | `TEAMOverview.jsx` | `team-overview.md` |
| `/learn/surgical-decisions` | `SurgicalDecisions.jsx` | `team-surgical-decisions-and-cost.md` |
| `/procedures` | `procedures/index.jsx` | Static (procedure selector) |
| `/procedures/lejr` | `LEJR.jsx` | `lejr-procedure-module.md` |
| `/procedures/shfft` | `SHFFT.jsx` | `shfft-procedure-module.md` |
| `/procedures/spinal-fusion` | `SpinalFusion.jsx` | `spinal-fusion-procedure-module.md` |
| `/procedures/cabg` | `CABG.jsx` | `cabg-procedure-module.md` |
| `/procedures/major-bowel` | `MajorBowel.jsx` | `major-bowel-procedure-module.md` |
| `/conditions` | `conditions/index.jsx` | `condition-cards.js` |
| `/conditions/:slug` | `conditions/[slug].jsx` | `condition-cards.js` |
| `/reference` | `reference/index.jsx` | Static |
| `/reference/cc-mcc` | `CCMCC.jsx` | `reference-cc-mcc.md` |
| `/reference/hcc` | `HCC.jsx` | `reference-hcc-general.md` |
| `/reference/hcc/:procedure` | `HCCByProcedure.jsx` | `reference-hcc-[procedure].md` |
| `/reference/apr-drg` | `APRDRG.jsx` | `reference-apr-drg.md` |
| `/reference/psi` | `PSI.jsx` | `reference-psi.md` |
| `/reference/quick/:procedure` | `QuickRef.jsx` | `reference-[procedure].md` |
| `/practice` | `practice/index.jsx` | `micro-vignettes.json` |
| `/cases` | `cases/index.jsx` | Static |
| `/cases/:slug` | `cases/[slug].jsx` | Case HTML files (ported to JSX) |
| `/explore` | `explore/index.jsx` | `SpecificityExplorer.jsx` |

---

## 5. Page Layout — AppShell

Every content page (everything except `/` and `/explore`) uses the `AppShell` component. The landing page and explorer have their own full-width layouts.

### 5.1 AppShell Structure

```jsx
// AppShell.jsx — three-column docs layout
<div className="min-h-screen bg-slate-50">
  <Header />  {/* sticky, full width, h-[52px] */}
  <div className="flex max-w-[1280px] mx-auto">
    <Sidebar />           {/* w-[240px] fixed left, border-r */}
    <main className="flex-1 min-w-0 px-14 py-12">
      {children}          {/* prose content, max-w-[820px] */}
    </main>
    <TableOfContents />   {/* w-[220px] fixed right, border-l */}
  </div>
</div>
```

### 5.2 Header

```jsx
// Header.jsx
<header className="sticky top-0 z-50 h-[52px] bg-slate-800 border-b border-slate-700
                   flex items-center px-10 gap-4">
  <Link to="/" className="font-serif text-white text-lg tracking-tight">
    TEAM Playbook
  </Link>
  <nav className="flex items-center gap-6 ml-8 text-sm text-slate-400">
    <NavLink to="/learn">Learn</NavLink>
    <NavLink to="/procedures">Procedures</NavLink>
    <NavLink to="/conditions">Conditions</NavLink>
    <NavLink to="/reference">Reference</NavLink>
    <NavLink to="/practice">Practice</NavLink>
    <NavLink to="/cases">Cases</NavLink>
    <NavLink to="/explore">Explorer</NavLink>
  </nav>
</header>
```

Active state: `text-white` (not teal — keeps it clean). Hover: `text-slate-200`.

### 5.3 Sidebar

The sidebar renders from `src/data/navigation.js`, which defines a tree structure of sections and links. It is the same nav structure on every page — the active link is highlighted by React Router's `NavLink` matching.

```js
// navigation.js — sidebar structure
export const navigation = [
  {
    label: 'Learn',
    items: [
      { label: 'CDI Fundamentals', to: '/learn/cdi-fundamentals' },
      { label: 'TEAM Overview', to: '/learn/team-overview' },
      { label: 'Surgical Decisions & Cost', to: '/learn/surgical-decisions' },
    ]
  },
  {
    label: 'Procedures',
    items: [
      { label: 'LEJR', to: '/procedures/lejr' },
      { label: 'SHFFT', to: '/procedures/shfft' },
      { label: 'Spinal Fusion', to: '/procedures/spinal-fusion' },
      { label: 'CABG', to: '/procedures/cabg' },
      { label: 'Major Bowel', to: '/procedures/major-bowel' },
    ]
  },
  {
    label: 'Conditions',
    items: [
      { label: 'All Conditions', to: '/conditions' },
      { label: 'MCC Cards', to: '/conditions?filter=mcc' },
      { label: 'CC Cards', to: '/conditions?filter=cc' },
    ]
  },
  {
    label: 'Reference',
    items: [
      { label: 'CC / MCC Guide', to: '/reference/cc-mcc' },
      { label: 'HCC Reference', to: '/reference/hcc' },
      { label: 'APR-DRG / SOI / ROM', to: '/reference/apr-drg' },
      { label: 'PSI Documentation', to: '/reference/psi' },
      { label: 'Quick Reference Cards', to: '/reference/quick/lejr' },
    ]
  },
  {
    label: 'Practice & Tools',
    items: [
      { label: 'Clinical Scenarios', to: '/practice' },
      { label: 'Case Walkthroughs', to: '/cases' },
      { label: 'Specificity Explorer', to: '/explore' },
    ]
  },
]
```

**Sidebar styling:**
- Section labels: `text-xs font-medium tracking-widest uppercase text-slate-400 mt-6 mb-1 px-3`
- Links: `block px-3 py-1.5 text-sm rounded text-slate-600 hover:bg-slate-100 hover:text-slate-900`
- Active link: `bg-teal-50 text-teal-700 font-medium border-l-2 border-teal-600`
- First section label: no top margin

### 5.4 Table of Contents (Right)

Auto-generated from the `id` attributes on `h2` elements in the main content. Uses an `IntersectionObserver` to track which section is currently in view and apply the active style.

```jsx
// TableOfContents.jsx — simplified
const [activeId, setActiveId] = useState(null)

// IntersectionObserver watches all h2[id] elements
// Updates activeId as sections scroll into view

// Render
<aside className="w-[220px] shrink-0 pl-6 border-l border-slate-200
                  sticky top-[52px] h-[calc(100vh-52px)] overflow-y-auto py-8">
  <p className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-3">
    On this page
  </p>
  {headings.map(h => (
    <a key={h.id} href={`#${h.id}`}
       className={`block text-sm py-1 pl-3 border-l-2 mb-0.5 transition-colors
                   ${activeId === h.id
                     ? 'border-teal-600 text-teal-700 font-medium'
                     : 'border-transparent text-slate-500 hover:text-slate-800'}`}>
      {h.text}
    </a>
  ))}
</aside>
```

---

## 6. Content Components

### 6.1 Callout Component

Renders the seven semantic callout types from the markdown content. The markdown parser detects `[PEARL]`, `[NOTE]`, `[MISS]`, `[WARN]`, `[OK]`, `[DENIAL-RISK]` tags and wraps them in this component.

```jsx
// Callout.jsx
const CALLOUT_STYLES = {
  PEARL: {
    wrapper: 'bg-pearl-bg border-l-4 border-pearl-border',
    label: 'text-pearl-text',
    icon: 'Lightbulb',
    labelText: 'Key principle',
  },
  NOTE: {
    wrapper: 'bg-info-bg border-l-4 border-info-border',
    label: 'text-info-text',
    icon: 'Info',
    labelText: 'Note',
  },
  MISS: {
    wrapper: 'bg-miss-bg border-l-4 border-miss-border',
    label: 'text-miss-text',
    icon: 'XCircle',
    labelText: 'Documentation miss',
  },
  WARN: {
    wrapper: 'bg-warn-bg border-l-4 border-warn-border',
    label: 'text-warn-text',
    icon: 'AlertTriangle',
    labelText: 'Vague language',
  },
  OK: {
    wrapper: 'bg-ok-bg border-l-4 border-ok-border',
    label: 'text-ok-text',
    icon: 'CheckCircle',
    labelText: 'Correct documentation',
  },
  'DENIAL-RISK': {
    wrapper: 'bg-denial-bg border-l-4 border-denial-border',
    label: 'text-denial-text',
    icon: 'ShieldAlert',
    labelText: 'Denial risk',
  },
  PHRASING: {
    wrapper: 'bg-slate-50 border border-slate-200 rounded-lg',
    label: 'text-slate-600',
    icon: 'FileText',
    labelText: 'Phrasing example',
  },
}

export function Callout({ type, children }) {
  const style = CALLOUT_STYLES[type] || CALLOUT_STYLES.NOTE
  const Icon = icons[style.icon]
  return (
    <div className={`my-4 px-4 py-3 rounded-r-md ${style.wrapper}`}>
      <div className={`flex items-center gap-1.5 text-xs font-semibold
                       tracking-wider uppercase mb-1.5 ${style.label}`}>
        <Icon size={13} />
        {style.labelText}
      </div>
      <div className="text-slate-700 text-sm leading-relaxed">{children}</div>
    </div>
  )
}
```

### 6.2 Badge Component

Used inline throughout content and on condition cards.

```jsx
// Badge.jsx
const BADGE_STYLES = {
  MCC: 'bg-mcc-bg text-mcc-text border border-mcc-border',
  CC:  'bg-cc-bg text-cc-text border border-cc-border',
  none: 'bg-slate-100 text-slate-500 border border-slate-200',
}

export function Badge({ type }) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs
                      font-semibold tracking-wide ${BADGE_STYLES[type]}`}>
      {type === 'none' ? 'No impact' : type}
    </span>
  )
}
```

### 6.3 DRGImpactCard Component

Shows before/after DRG with dollar difference. Used in case walkthroughs and procedure module pages.

```jsx
// DRGImpactCard.jsx
export function DRGImpactCard({ before, after }) {
  // before / after: { drg, label, payment }
  return (
    <div className="my-6 flex items-center gap-4">
      <div className="flex-1 rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">As documented</p>
        <p className="font-mono text-xl font-semibold text-slate-700">{before.drg}</p>
        <p className="text-xs text-slate-500 mt-0.5">{before.label}</p>
        <p className="text-lg font-medium text-slate-600 mt-2">{before.payment}</p>
      </div>
      <div className="text-slate-400 text-xl">→</div>
      <div className="flex-1 rounded-lg border-2 border-teal-500 bg-teal-50 p-4 text-center">
        <p className="text-xs uppercase tracking-widest text-teal-600 mb-1">Revised documentation</p>
        <p className="font-mono text-xl font-semibold text-teal-800">{after.drg}</p>
        <p className="text-xs text-teal-700 mt-0.5">{after.label}</p>
        <p className="text-lg font-medium text-teal-800 mt-2">{after.payment}</p>
        <p className="text-sm font-semibold text-teal-600 mt-1">▲ {after.delta} difference</p>
      </div>
    </div>
  )
}
```

### 6.4 CaseNote Component

Renders annotated physician notes with inline highlights. Used on case walkthrough pages.

```jsx
// CaseNote.jsx
// variant: 'bad' | 'good'
export function CaseNote({ variant, title, noteType, children }) {
  const headerStyles = {
    bad:  'bg-slate-800 text-white',
    good: 'bg-teal-700 text-white',
  }
  const noteTypeStyles = {
    bad:  'bg-red-600 text-white',
    good: 'bg-teal-500 text-white',
  }
  return (
    <div className="my-6 rounded-lg border border-slate-200 overflow-hidden">
      <div className={`flex items-center justify-between px-4 py-2.5
                       text-xs font-semibold tracking-wider ${headerStyles[variant]}`}>
        <span>{title}</span>
        <span className={`px-2 py-0.5 rounded text-xs ${noteTypeStyles[variant]}`}>
          {noteType}
        </span>
      </div>
      <pre className="p-4 text-sm font-mono leading-relaxed bg-white
                      text-slate-700 whitespace-pre-wrap overflow-x-auto">
        {children}
      </pre>
    </div>
  )
}
```

Inline highlights within the case note text use `<mark>` elements styled by class:
- `mark-miss`: `bg-red-100 text-red-800 rounded px-0.5`
- `mark-warn`: `bg-amber-100 text-amber-800 rounded px-0.5`
- `mark-ok`: `bg-green-100 text-green-800 rounded px-0.5`

### 6.5 MarkdownRenderer Component

Parses markdown files and maps the semantic callout tags to React components. This is the critical bridge between content files and rendered pages.

```jsx
// MarkdownRenderer.jsx
// Uses react-markdown with custom components
// Pre-processes content to detect [PEARL], [NOTE], [MISS], [WARN], [OK], [DENIAL-RISK]
// Wraps them in <Callout type="..."> before passing to ReactMarkdown

import ReactMarkdown from 'react-markdown'
import { Callout } from './Callout'
import { CodeChip } from './CodeChip'

// Pre-processing: detect callout tags at start of paragraph
// Pattern: paragraph starting with [TAG] text...
// Transform to: <Callout type="TAG">text...</Callout>

export function MarkdownRenderer({ content }) {
  const processed = preprocessCallouts(content)
  return (
    <ReactMarkdown
      className="prose prose-slate max-w-none"
      components={{
        // Custom table rendering with overflow-x-auto wrapper
        table: ({ children }) => (
          <div className="overflow-x-auto my-4">
            <table className="min-w-full text-sm border-collapse">{children}</table>
          </div>
        ),
        // Custom code blocks
        code: ({ inline, children }) =>
          inline
            ? <code className="font-mono text-sm bg-slate-100 px-1 py-0.5 rounded">{children}</code>
            : <pre className="bg-slate-50 border border-slate-200 rounded-lg p-4 overflow-x-auto text-sm font-mono">{children}</pre>,
        // Callout detection handled in preprocessCallouts()
      }}
    >
      {processed}
    </ReactMarkdown>
  )
}
```

**Callout parsing rule:** Any paragraph that begins with `[PEARL]`, `[NOTE]`, `[MISS]`, `[WARN]`, `[OK]`, `[PHRASING]`, or `[DENIAL-RISK]` (with a space after the bracket) should be extracted and rendered as a `<Callout>` component with the appropriate type. Strip the tag from the rendered text.

---

## 7. Interactive Components

### 7.1 VignetteCard (Clinical Scenarios)

Based on the approved `phrasing-quicklook-aki.jsx` prototype. Renders a single clinical scenario in collapsed/expanded state.

```jsx
// VignetteCard.jsx
// Props: vignette object from micro-vignettes.json
// State: isOpen (boolean)

// Collapsed: shows scenario text + classification badge + chevron
// Expanded: shows scenario + "instead of" (red) + "write this" (green) + "why it matters"

export function VignetteCard({ vignette, isOpen, onToggle }) {
  const { scenario, instead, write, why, tags } = vignette
  return (
    <div className={`border rounded-xl overflow-hidden transition-shadow
                     ${isOpen ? 'shadow-md border-slate-300' : 'border-slate-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-3 p-4 text-left hover:bg-slate-50"
        aria-expanded={isOpen}
      >
        <Badge type={tags.classification} />
        <span className="flex-1 text-sm text-slate-800 leading-relaxed">{scenario}</span>
        <ChevronDown
          size={16}
          className={`text-slate-400 mt-0.5 shrink-0 transition-transform
                      ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="border-t border-slate-100 p-4 flex flex-col gap-3">
          {/* Instead of */}
          <div className="bg-miss-bg border border-miss-border rounded-lg p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-miss-text mb-1">
              Instead of writing
            </p>
            <p className="text-sm text-slate-800 italic">"{instead}"</p>
          </div>

          {/* Write this */}
          <div className="bg-ok-bg border border-ok-border rounded-lg p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ok-text mb-1">
              Document this
            </p>
            <p className="text-sm text-slate-800 font-medium">"{write}"</p>
          </div>

          {/* Why it matters */}
          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-sm text-slate-600 leading-relaxed">{why}</p>
          </div>
        </div>
      )}
    </div>
  )
}
```

### 7.2 VignetteSet (Practice Page)

Wraps `VignetteCard` with filter controls. Used on `/practice`.

**Filter controls:**
- Procedure selector: All / LEJR / SHFFT / Spinal Fusion / CABG / Major Bowel
- Classification: All / MCC only / CC only
- Audience: All / Medicine / Surgery
- Shuffle button (randomizes order)
- PSI toggle: Show PSI-tagged scenarios only

**One card open at a time** (accordion behavior — opening one closes any other open card).

```jsx
// VignetteSet.jsx
// Loads from: import vignettes from '../../data/micro-vignettes.json'
// Filters vignettes.vignettes array based on active filters
// Passes filtered array to VignetteCard list
```

### 7.3 SpecificityExplorer

Port of `cdi-specificity-explorer.html` to React. The logic is well-defined in the existing PRD (`CDI_Specificity_Explorer_PRD.md`) and the working HTML file — replicate it in React with Tailwind styling.

**Key implementation notes:**
- Diagnosis data as a constant array at top of file (matches existing HTML data model exactly)
- `toggled` state: `useState(new Set())`
- `computeMetrics(toggled)` function: port verbatim from the HTML file
- Animate metric value changes: use a custom hook `useAnimatedValue(value)` that fades out → updates → fades in (150ms + 250ms, same as original)
- Toggle switch: custom Tailwind implementation (not a checkbox)
- Reset button: clears state, all cards return to vague
- Full-width layout (no AppShell sidebar) — use its own layout

**Layout:**
```jsx
// Two-column: left pane (flex-1) + right panel (w-[280px])
// Min height: 100vh - 52px (header)
// Left: border-r border-slate-200, padding 16px
// Right: bg-slate-50, padding 16px, sticky
```

**This component lives at `/explore` and does NOT use AppShell.**

---

## 8. Page Specifications

### 8.1 Landing Page (`/`)

Does not use AppShell. Full-width custom layout.

**Sections in order:**
1. **Hero** — site name, one-line description, role selector (Surgeon / Medicine / APP) — three card buttons that set a `role` preference in localStorage and navigate to `/procedures` or `/learn`
2. **"60 seconds" explainer** — what TEAM is, why documentation matters, two key numbers
3. **Nav cards** — six cards for the six main sections with brief descriptions of what's in each
4. **Accuracy principle** — closing statement about clinical accuracy

Content source: `landing-page.md` — render as sections, not full markdown.

### 8.2 Procedure Pages (`/procedures/:slug`)

Use AppShell. The procedure module markdown files have frontmatter that includes:
```yaml
---
title: "Lower Extremity Joint Replacement"
procedure: LEJR
route: /procedures/lejr
drg-family: "MS-DRG 469/470"
tier-structure: "2-tier (MCC only)"
---
```

**Page structure:**
1. Page metadata line (procedure name · DRG family · tier structure)
2. h1 from frontmatter title
3. Rendered markdown content via `MarkdownRenderer`
4. Right TOC auto-generated from h2 elements in the content

**Embedded interactive elements:** Each procedure page should embed a `PhrasingQuickLook` component beneath the relevant condition sections, seeded with vignettes tagged to that procedure.

### 8.3 Conditions Index (`/conditions`)

Grid of condition cards. Two filter tabs: **MCC** and **CC**.

Each card in the grid:
```jsx
<Link to={`/conditions/${slug}`}>
  <div className="border border-slate-200 rounded-xl p-4 hover:border-teal-400
                  hover:shadow-sm transition-all cursor-pointer">
    <div className="flex items-center justify-between mb-2">
      <Badge type={classification} />
      <span className="text-xs text-slate-400">{procedures.join(' · ')}</span>
    </div>
    <h3 className="font-semibold text-slate-800 text-sm">{condition}</h3>
    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{pearl}</p>
  </div>
</Link>
```

### 8.4 Condition Detail (`/conditions/:slug`)

Uses AppShell. Renders a single condition card's full content:
- Classification badge + procedure tags
- PEARL callout (the single most important rule)
- "Document this" section (✅ examples)
- "Not this" section (❌ examples)
- Rules section
- Denial risk callout if present

Data source: condition cards data file (convert the markdown condition cards to a structured JS/JSON array with fields: `id`, `slug`, `condition`, `classification`, `procedures`, `pearl`, `doThis`, `notThis`, `rules`, `denialRisk`).

### 8.5 Practice Page (`/practice`)

Uses AppShell (without right TOC — full width main area).

**Page header:**
```
Clinical Documentation Scenarios
Read each situation. Think about what you would document. Then tap to see the answer.
```

Filter bar above the vignette list. Renders `VignetteSet`.

### 8.6 Cases Index (`/cases`)

Card grid linking to case walkthroughs. Each card shows:
- Procedure badge
- Case title (consequence-focused)
- One-line description
- Key MCC/CC being taught

Initially: 1 case (LEJR AKI). Placeholder cards for the 4 additional cases (SHFFT, CABG, Major Bowel, Spinal Fusion) in a `coming-soon` disabled state.

### 8.7 Case Walkthrough (`/cases/:slug`)

**Uses its own full-width layout** — not AppShell. This mirrors the standalone HTML design from `cdi_case_walkthrough.html`:
- Left nav (240px) with case list grouped by procedure
- Main content (820px prose)
- Right TOC (220px)
- Sticky header with breadcrumb

Port the LEJR AKI case from `cdi_case_walkthrough.html` as the first case. The case layout component should be reusable for additional cases.

Typography for cases specifically: DM Serif Display for h1, warm off-white background (`bg-slate-50`), larger body text (17px).

### 8.8 Specificity Explorer (`/explore`)

Full-width, no sidebar. Port of `cdi-specificity-explorer.html`.

Header: site header only (no breadcrumb nav). Below header: full-width two-column explorer.

---

## 9. Content Ingestion Strategy

### 9.1 Markdown Files

Markdown files in `src/content/` are imported as raw strings using Vite's `?raw` suffix:

```js
import content from '../content/learn/cdi-fundamentals.md?raw'
```

Parse frontmatter with `gray-matter`, render body with `MarkdownRenderer`.

### 9.2 Vignette JSON

Import directly:
```js
import vignetteData from '../data/micro-vignettes.json'
const vignettes = vignetteData.vignettes // array of 50 vignette objects
```

The `_schema` key at the top of the JSON should be ignored — filter it out on import.

### 9.3 Condition Cards

Convert the two condition card markdown files (`condition-cards.md`, `condition-cards-cc.md`) into a single structured JavaScript array. Each condition card becomes an object:

```js
// condition-cards.js
export const conditionCards = [
  {
    id: 'sepsis',
    slug: 'sepsis',
    condition: 'Sepsis',
    classification: 'MCC',
    procedures: ['LEJR', 'SHFFT', 'Spinal Fusion', 'CABG', 'Major Bowel'],
    pearl: 'Sepsis requires two things documented: an infection source and a systemic response causing organ dysfunction.',
    doThis: [
      'Sepsis due to gram-negative bacteremia, source urinary tract...',
      // ...
    ],
    notThis: [
      'Infection — antibiotics started.',
      // ...
    ],
    rules: [...],
    denialRisk: 'Sepsis is the most audited diagnosis...',
  },
  // ... 39 more
]
```

This structured format avoids markdown parsing on individual condition cards and makes the grid/filter/search features straightforward.

---

## 10. Navigation Behavior

- **React Router** handles all navigation — no full page reloads
- **Active sidebar link** uses `NavLink` with `isActive` prop from React Router
- **Scroll-to-top** on route change: `useEffect(() => window.scrollTo(0, 0), [location.pathname])`
- **Right TOC active state** uses `IntersectionObserver` with `rootMargin: '-20% 0px -70% 0px'` to highlight the section currently in the upper viewport
- **Role preference** stored in `localStorage` — landing page role selector writes it, procedure pages can read it to surface relevant content

---

## 11. Build Order Recommendation

Build in this order to get a working site as fast as possible:

**Phase 1 — Shell (get routing working)**
1. Vite + React + Tailwind + React Router setup
2. `AppShell`, `Header`, `Sidebar` (static nav, no active state yet)
3. All routes registered, each page renders `<h1>Page Name</h1>` placeholder
4. `TableOfContents` stub (renders nothing yet)

**Phase 2 — Content rendering**
5. `MarkdownRenderer` with callout tag parsing
6. Wire one markdown file end-to-end: `/learn/cdi-fundamentals`
7. `Callout` component (all 7 types)
8. `TableOfContents` with IntersectionObserver
9. Wire remaining markdown files to their routes

**Phase 3 — Conditions**
10. Convert condition card markdown to `condition-cards.js` data
11. `Badge` component
12. `/conditions` grid page
13. `/conditions/:slug` detail page

**Phase 4 — Interactive**
14. `VignetteCard` component
15. `VignetteSet` with filters
16. `/practice` page
17. `SpecificityExplorer` React port

**Phase 5 — Cases & Explorer**
18. Case layout component (full-width, three-column)
19. Port LEJR AKI case walkthrough from HTML to JSX
20. `/cases` index with one live card + placeholders
21. `/explore` route pointing to SpecificityExplorer

**Phase 6 — Landing & Polish**
22. Landing page (role selector, nav cards)
23. Procedure pages with PhrasingQuickLook embedded
24. Active nav state, breadcrumbs, scroll-to-top
25. `<title>` tags, meta descriptions, favicon

---

## 12. Non-Goals (v1)

These are explicitly out of scope for the initial build:

- Dark mode — light mode only
- Authentication or user accounts
- Persistent progress tracking (no "completed" state on vignettes)
- Search across content
- Audio (deferred to future state)
- Additional case walkthroughs beyond the LEJR AKI case (placeholders only)
- Mobile-optimized sidebar (collapsible drawer) — desktop first
- Additional Specificity Explorer case sets (LEJR, CABG, Major Bowel datasets)
- CMS annual update workflow (FY2026 code updates)

---

## 13. Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.23.0",
    "react-markdown": "^9.0.0",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "vite": "^5.2.0",
    "@vitejs/plugin-react": "^4.3.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "@tailwindcss/typography": "^0.5.13"
  }
}
```

---

## 14. Vite Configuration

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Allow importing markdown files as raw strings
  assetsInclude: ['**/*.md'],
})
```

For markdown raw imports, use the `?raw` query suffix — no additional plugin needed in Vite 5.

---

## 15. Content Files Reference

All content files have been pre-written and are ready to drop into `src/content/`. A complete inventory:

**Learn:**
- `cdi-fundamentals.md` — CDI education, accuracy principle, coder pipeline, POA, query process
- `team-overview.md` — What TEAM is, target price, HCC risk adjustment, quality measures
- `team-surgical-decisions-and-cost.md` — Five clinical decisions mapped to dollar consequences

**Procedures:**
- `lejr-procedure-module.md` — 2-tier DRG, MCC-only, AKI focus
- `shfft-procedure-module.md` — 3-tier DRG, dementia/encephalopathy/malnutrition
- `spinal-fusion-procedure-module.md` — Variable tier, DRG family navigator
- `cabg-procedure-module.md` — 2-tier, 6 DRG families, standalone AF section
- `major-bowel-procedure-module.md` — 3-tier, widest payment spread, oncology section

**Reference:**
- `reference-cc-mcc.md` — Full specificity guide, 30+ condition table
- `reference-hcc-general.md` + 5 procedure HCC files
- `reference-apr-drg.md` — APR-DRG vs MS-DRG, SOI/ROM
- `reference-psi.md` — PSI 90 composite, PSI 11 algorithm, all ten PSIs
- `reference-lejr.md`, `reference-shfft.md`, `reference-spinal-fusion.md`, `reference-cabg.md`, `reference-bowel.md`

**Data:**
- `micro-vignettes.json` — 50 clinical scenarios, fully tagged
- Condition cards — 40 total (20 MCC + 20 CC), to be converted to JS data

**Interactive source files (reference for porting):**
- `cdi_case_walkthrough.html` — LEJR AKI case (port to JSX for `/cases/lejr-aki`)
- `cdi-specificity-explorer.html` — Port to `SpecificityExplorer.jsx`
- `DRG_SOI_ROM_Infographic.html` — Port to static JSX, embed in `/reference/apr-drg`
- `phrasing-quicklook-aki.jsx` — Approved prototype, refactor to production component

---

*TEAM Playbook PRD v1.0 — June 2026*  
*Build target: Claude Code*  
*Content status: All content pre-written and ready for ingestion*
