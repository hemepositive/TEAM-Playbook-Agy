# TEAM Playbook

An interactive, clinician-focused education and reference application designed to help surgeons, medicine physicians, and APPs improve clinical documentation (CDI) under the CMS Transforming Episode-Based Payment (TEAM) model.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

---

## Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your web browser.

### 3. Build for static hosting
```bash
npm run build
```
Compiles and bundles the site to the static `dist/` directory.

---

## Instructions for Next Session

In the next session, we will expand on this MVP with content depth and new interactive layers. Here is the suggested agenda:

### 1. Expand Clinical Content & Detail Tables
We have raw content reference files in [Content_Reference_files/](file:///Users/uxorious/Projects/TEAM-CDI-Content-Creation-Antigravity/Content_Reference_files/) (like [Morbid-Obesity-Documentation-and-DRG-Impact.md](file:///Users/uxorious/Projects/TEAM-CDI-Content-Creation-Antigravity/Content_Reference_files/Morbid-Obesity-Documentation-and-DRG-Impact.md) and [common_secondary_diagnoses_by_drg.md](file:///Users/uxorious/Projects/TEAM-CDI-Content-Creation-Antigravity/Content_Reference_files/common_secondary_diagnoses_by_drg.md)).
* **Next Task**: Incorporate these deep-dive documentation guidelines and reference tables directly into the surgical procedure pages (e.g., adding detailed Morbid Obesity checklists to the LEJR page).

### 2. Embed Slides & Media
* **Next Task**: Create video and slide carousel sections within the Overview and CDI Fundamentals pages to embed your NotebookLM-generated slides and videos.

### 3. Build the Speech Dictation Box (Self-Explanation Feature)
The current vignette card includes a text area for jotting down notes before clicking "Reveal".
* **Next Task**: Integrate the browser Web Speech API (or an external ElevenLabs integration) to allow surgeons to **dictate** their documentation notes, preparing the interface for future AI parsing and feedback features.

### 4. Search Functionality
* **Next Task**: Add a fast, client-side search box in the header to allow surgeons to search across all procedures, diagnoses, and ICD-10 criteria.
