import React from 'react';
import { ClinicalVignette } from '../components/ClinicalVignette';

export const MajorBowel: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 id="bowel-title" className="text-3xl font-extrabold font-display text-slate-800 dark:text-slate-100 mb-6">Major Bowel Procedure Playbook</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Major Bowel surgical episodes frequently involve complex abdominal infections and metabolic imbalances that must be correctly nomenclature-coded in the chart.
      </p>

      <h2 id="clinical-scenario" className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8">Case Challenge: Metabolic Imbalances</h2>
      <ClinicalVignette id="major-bowel" />

      <h2 id="top-diagnoses" className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8 mb-4">Top CC/MCC Targets</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
          <thead className="text-xs uppercase text-slate-400 dark:text-slate-505 font-display">
            <tr>
              <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-800">Diagnosis</th>
              <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-800">Severity</th>
              <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-800">Clinical Indicator</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Lactic Acidosis</td>
              <td className="py-3 px-4"><span className="text-yellow-600 dark:text-yellow-400 font-semibold">CC</span></td>
              <td className="py-3 px-4 text-slate-650 dark:text-slate-400">Elevated lactate &gt;2.0 mmol/L with metabolic acidemia (pH &lt;7.35).</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Sepsis</td>
              <td className="py-3 px-4"><span className="text-red-600 dark:text-red-400 font-semibold">MCC</span></td>
              <td className="py-3 px-4 text-slate-650 dark:text-slate-400">Sepsis-3 criteria (suspected infection + acute change in SOFA score ≥2).</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Moderate Malnutrition</td>
              <td className="py-3 px-4"><span className="text-yellow-600 dark:text-yellow-400 font-semibold">CC</span></td>
              <td className="py-3 px-4 text-slate-650 dark:text-slate-400">ASPEN criteria (moderate weight loss or fat/muscle wasting).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
