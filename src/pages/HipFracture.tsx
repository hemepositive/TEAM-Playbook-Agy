import React from 'react';
import { ClinicalVignette } from '../components/ClinicalVignette';

export const HipFracture: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 id="shfft-title" className="text-3xl font-extrabold font-display text-slate-800 dark:text-slate-100 mb-6">Surgical Hip & Femur Fracture (SHFFT)</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        Surgical hip fracture episodes require rigorous documentation of acute post-operative drops and blood loss management to correctly capture complicating conditions (CC).
      </p>

      <h2 id="clinical-scenario" className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8">Case Challenge: Post-Op Anemia</h2>
      <ClinicalVignette id="hip-fracture" />

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
              <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Acute Posthemorrhagic Anemia</td>
              <td className="py-3 px-4"><span className="text-yellow-600 dark:text-yellow-400 font-semibold">CC</span></td>
              <td className="py-3 px-4 text-slate-650 dark:text-slate-400">Acute post-op drop in Hb/Hct with symptoms or transfusion.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Stage 3/4 Pressure Ulcer (POA)</td>
              <td className="py-3 px-4"><span className="text-red-600 dark:text-red-400 font-semibold">MCC</span></td>
              <td className="py-3 px-4 text-slate-650 dark:text-slate-400">Sacral or heel skin breakdown extending into fat/muscle, Present On Admission.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800 dark:text-slate-200">Hemiplegia from prior CVA</td>
              <td className="py-3 px-4"><span className="text-red-600 dark:text-red-400 font-semibold">MCC</span></td>
              <td className="py-3 px-4 text-slate-650 dark:text-slate-400">Residual weakness requiring active support or therapy evaluation.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
