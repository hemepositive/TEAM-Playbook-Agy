import React from 'react';

export const Fundamentals: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 id="fundamentals-title" className="text-3xl font-extrabold font-display text-slate-800 dark:text-slate-100 mb-6">CDI Fundamentals: CCs and MCCs</h1>
      <p className="text-slate-650 dark:text-slate-300 text-lg mb-6">
        Clinical Documentation Improvement (CDI) is the bridge between clinical care and hospital billing. It translates clinical judgment into specific ICD-10 diagnostic codes.
      </p>

      <h2 id="what-are-ccs" className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8 mb-4">Complicating Conditions (CC)</h2>
      <p className="text-slate-605 dark:text-slate-300 mb-4">
        A Complicating Condition represents a moderate increase in clinical severity and resource expenditure. For example: **Hyponatremia** or **Acute Posthemorrhagic Anemia**.
      </p>

      <h2 id="what-are-mccs" className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8 mb-4">Major Complicating Conditions (MCC)</h2>
      <p className="text-slate-605 dark:text-slate-300 mb-4">
        An MCC represents the highest level of severity. Capturing an MCC shifts the DRG (Diagnosis-Related Group) to the highest possible reimbursement bracket. For example: **Acute Kidney Injury (AKI)** or **Metabolic Encephalopathy**.
      </p>

      <h2 id="billing-traps" className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8 mb-4">Common Documentation Traps</h2>
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-slate-700 dark:bg-yellow-950/20 dark:border-yellow-800/30 dark:text-slate-300">
        <p className="font-semibold mb-2 text-yellow-700 dark:text-yellow-400">Do not document symptoms or lab values alone!</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-400">
          <li>Write <strong className="text-slate-800 dark:text-slate-200">"Metabolic Encephalopathy"</strong> instead of <em className="text-slate-500">"altered mental status"</em>.</li>
          <li>Write <strong className="text-slate-800 dark:text-slate-200">"Acute Kidney Injury"</strong> instead of <em className="text-slate-500">"elevated creatinine"</em>.</li>
          <li>Write <strong className="text-slate-800 dark:text-slate-200">"Acute Posthemorrhagic Anemia"</strong> instead of <em className="text-slate-500">"blood loss"</em>.</li>
        </ul>
      </div>
    </div>
  );
};
