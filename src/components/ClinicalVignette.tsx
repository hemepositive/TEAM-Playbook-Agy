import React, { useState } from 'react';
import { scenarios } from '../data/scenarios';
import { AlertCircle, User, TrendingUp, ShieldAlert, Award } from 'lucide-react';

interface VignetteProps {
  id: string;
}

export const ClinicalVignette: React.FC<VignetteProps> = ({ id }) => {
  const data = scenarios[id];
  const [revealed, setRevealed] = useState(false);
  const [notes, setNotes] = useState('');

  if (!data) {
    return (
      <div className="p-4 border border-red-500 rounded bg-red-950/20 text-red-400">
        Error: Scenario "{id}" not found.
      </div>
    );
  }

  return (
    <div className="my-8 rounded-xl glass bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800/80 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-950/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800/50 flex items-center space-x-3">
        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 dark:text-slate-100 font-display">Patient Profile: {data.patientName}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Age {data.age} / {data.gender} / Admitting DX: {data.admittingDx}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-display block mb-1">Chief Complaint</span>
            <p className="text-slate-700 dark:text-slate-300 italic">{data.chiefComplaint}</p>
          </div>
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-display block mb-1">History of Present Illness</span>
            <p className="text-slate-700 dark:text-slate-300">{data.hpi}</p>
          </div>

          {/* PMH */}
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-display block mb-2">Past Medical History</span>
            <div className="flex flex-wrap gap-2">
              {data.pmh.map((pmh, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-medium">
                  {pmh}
                </span>
              ))}
            </div>
          </div>

          {/* Vitals & Labs */}
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-display block mb-2">Key Vitals & Labs</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {data.vitalsLabs.map((lab, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-550/60 border border-slate-200 dark:bg-slate-950/60 dark:border-slate-800/40 bg-slate-50">
                  <div className="text-xs text-slate-500 font-medium">{lab.label}</div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{lab.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-slate-200 dark:border-slate-800/50" />

        {/* Active State / Review Section */}
        {!revealed ? (
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 text-emerald-700 dark:text-emerald-400">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">{data.challengePrompt}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Think about it, jot your notes below, then reveal the optimal billing-specific diagnosis codes.</p>
              </div>
            </div>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write or dictate your thoughts here (e.g. documentation phrasing, specific conditions)..."
              className="w-full h-24 p-3 text-sm rounded-lg glass bg-white text-slate-800 border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-950 dark:text-slate-200 dark:border-slate-800"
            />

            <button
              onClick={() => setRevealed(true)}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.99] transition-all text-slate-950 font-bold rounded-lg cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/10"
            >
              Reveal Optimal Documentation
            </button>
          </div>
        ) : (
          /* Revealed State */
          <div className="space-y-6">
            {/* Dashboard metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30">
                <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-semibold font-display tracking-wider uppercase">Reimbursement Shift</span>
                </div>
                <div className="text-lg font-bold text-slate-800 dark:text-slate-100">{data.impact.paymentShift}</div>
              </div>

              <div className="p-4 rounded-lg bg-blue-500/10 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30">
                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span className="text-xs font-semibold font-display tracking-wider uppercase">Severity of Illness (SOI)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  {[1, 2, 3, 4].map(level => (
                    <div
                      key={level}
                      className={`h-2.5 w-1/4 rounded-full transition-all ${
                        level <= data.impact.soiAfter
                          ? level <= data.impact.soiBefore
                            ? 'bg-slate-400 dark:bg-slate-600'
                            : 'bg-blue-500 shadow-sm shadow-blue-500/20'
                          : 'bg-slate-200 dark:bg-slate-800'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 pl-2">Lvl {data.impact.soiAfter}</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-purple-500/10 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/30">
                <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 mb-2">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-semibold font-display tracking-wider uppercase">Risk of Mortality (ROM)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  {[1, 2, 3, 4].map(level => (
                    <div
                      key={level}
                      className={`h-2.5 w-1/4 rounded-full transition-all ${
                        level <= data.impact.romAfter
                          ? level <= data.impact.romBefore
                            ? 'bg-slate-400 dark:bg-slate-600'
                            : 'bg-purple-500 shadow-sm shadow-purple-500/20'
                          : 'bg-slate-200 dark:bg-slate-800'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 pl-2">Lvl {data.impact.romAfter}</span>
                </div>
              </div>
            </div>

            {/* The Specific vs Vague Comparison */}
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-550 dark:text-slate-500 font-display block">Phrasing Comparison</span>
              <div className="space-y-2">
                {data.traps.map((trap, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-lg border ${
                      trap.isOptimal
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/30'
                        : 'bg-slate-50 border-slate-200 dark:bg-slate-950/50 dark:border-slate-800/60'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`text-sm font-bold ${trap.isOptimal ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-400'}`}>
                        {trap.term}
                      </span>
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded ${
                        trap.isOptimal
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                          : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {trap.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{trap.explanation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Points */}
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-950/80 dark:border-slate-800/80">
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 font-display block mb-3">CDI Clinical Pearls</span>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {data.teachingPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setRevealed(false)}
                className="flex-1 py-2.5 bg-slate-200 hover:bg-slate-300 hover:text-slate-900 text-slate-700 font-semibold rounded-lg transition-colors cursor-pointer text-center text-sm dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-100"
              >
                Reset Scenario
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
