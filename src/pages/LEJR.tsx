import React from 'react';
import { ClinicalVignette } from '../components/ClinicalVignette';

export const LEJR: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 id="lejr-title" className="text-3xl font-extrabold font-display text-slate-800 dark:text-slate-100 mb-6">Lower Extremity Joint Replacement (LEJR)</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Under the TEAM model, LEJR procedures are paid in a 2-tier DRG model. A single Major Complication/Comorbidity (MCC) increases hospital reimbursement significantly.
      </p>

      <h2 id="clinical-scenario" className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8">Case Challenge: Post-Op Complications</h2>
      <ClinicalVignette id="lejr" />

      <h2 id="top-diagnoses" className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8 mb-4">Top CC/MCC Targets</h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
          <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 font-display">
            <tr>
              <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-800">Diagnosis</th>
              <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-800">Severity</th>
              <th className="py-3 px-4 border-b border-slate-200 dark:border-slate-800">Clinical Indicator</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Acute Kidney Injury (AKI)</td>
              <td className="py-3 px-4"><span className="text-red-600 dark:text-red-400 font-semibold">MCC</span></td>
              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">Creatinine increase of ≥0.3 mg/dL or 1.5x baseline.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Severe Protein-Calorie Malnutrition</td>
              <td className="py-3 px-4"><span className="text-red-600 dark:text-red-400 font-semibold">MCC</span></td>
              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">ASPEN criteria (weight loss, muscle/fat wasting).</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Hyponatremia</td>
              <td className="py-3 px-4"><span className="text-yellow-600 dark:text-yellow-400 font-semibold">CC</span></td>
              <td className="py-3 px-4 text-slate-600 dark:text-slate-400">Serum Sodium &lt; 135 mEq/L.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
