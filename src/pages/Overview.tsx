import React from 'react';

export const Overview: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 id="overview-title" className="text-3xl font-extrabold font-display text-slate-800 dark:text-slate-100 mb-6">What is the CMS TEAM Model?</h1>
      <p className="text-slate-600 dark:text-slate-300 text-lg mb-4">
        The **Transforming Episode-Based Payment (TEAM)** model is a mandatory CMS initiative beginning in 2026. It establishes bundle-based financial responsibility for selected acute-care hospitals during a 30-day post-discharge period.
      </p>

      <h2 id="why-it-matters" className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8 mb-4">Why It Matters for Surgeons</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-4">
        Hospital reimbursement under the TEAM model is risk-adjusted. If documentation does not clearly show the complexity of your patients (captured through CC/MCC codes), your hospital will be paid less than the actual cost of care, penalizing the surgical team.
      </p>

      <h2 id="mandated-categories" className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200 mt-8 mb-4">The 5 Mandated Surgical Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {[
          { name: 'Lower Extremity Joint Replacement', key: 'LEJR' },
          { name: 'Surgical Hip Fracture Management', key: 'SHFFT' },
          { name: 'Spinal Fusion', key: 'Fusion' },
          { name: 'Coronary Artery Bypass Graft', key: 'CABG' },
          { name: 'Major Bowel Procedures', key: 'Bowel' }
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-lg bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-850">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-display block mb-1">{item.key}</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
