import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { scenarios, type ScenarioData } from '../data/scenarios';
import microData from '../../Content-Files/micro-vignettes.json';
import { User, AlertCircle, TrendingUp, ShieldAlert, Award, Search, ChevronDown, ChevronUp, Check, X, Info } from 'lucide-react';

const procedureLabelMap: Record<string, string> = {
  lejr: 'Lower Extremity Joint (LEJR)',
  'hip-fracture': 'Surgical Hip Fracture (SHFFT)',
  'spinal-fusion': 'Spinal Fusion',
  cabg: 'CABG',
  'major-bowel': 'Major Bowel Procedure'
};

const microTagMap: Record<string, string> = {
  lejr: 'LEJR',
  'hip-fracture': 'SHFFT',
  'spinal-fusion': 'Spinal Fusion',
  cabg: 'CABG',
  'major-bowel': 'Major Bowel'
};

interface MicroVignette {
  id: string;
  scenario: string;
  instead: string;
  write: string;
  why: string;
  tags: {
    condition: string;
    classification: string;
    procedures: string[];
    audience: string;
    difficulty: number;
    psi: boolean;
  };
}

export const Cases: React.FC = () => {
  const { procedure } = useParams<{ procedure: string }>();
  
  if (!procedure || !procedureLabelMap[procedure]) {
    return <Navigate to="/docs/overview" replace />;
  }

  // Filter detailed scenarios for this procedure
  const activeScenarios = scenarios.filter(s => s.procedure === procedure);
  
  // State for active detailed case
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const currentCase: ScenarioData | undefined = activeScenarios[activeCaseIdx];

  // Questionnaire States
  const [selectedOpts, setSelectedOpts] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  
  // Micro-vignette states
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedVignettes, setExpandedVignettes] = useState<Record<string, boolean>>({});

  // Reset inputs when switching cases or procedures
  useEffect(() => {
    setSelectedOpts([]);
    setSubmitted(false);
  }, [activeCaseIdx, procedure]);

  if (!currentCase) {
    return (
      <div className="p-4 border border-red-500 rounded bg-red-950/20 text-red-400 font-mono text-xs">
        No case scenarios found for procedure "{procedure}".
      </div>
    );
  }

  // Get matching micro-vignettes
  const targetTag = microTagMap[procedure];
  const matchingMicros: MicroVignette[] = (microData.vignettes as MicroVignette[]).filter(v => 
    v.tags.procedures.includes(targetTag) || v.tags.procedures.includes('All')
  );

  const filteredMicros = matchingMicros.filter(v => 
    v.scenario.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.tags.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.tags.classification.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleOption = (idx: number) => {
    if (submitted) return;
    setSelectedOpts(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx].sort()
    );
  };

  const handleSubmit = () => {
    if (selectedOpts.length === 0) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOpts([]);
    setSubmitted(false);
  };

  const toggleVignette = (id: string) => {
    setExpandedVignettes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Check if selection matches exactly the correct answers
  const isPerfect = 
    selectedOpts.length === currentCase.correctOptions.length &&
    selectedOpts.every(o => currentCase.correctOptions.includes(o));

  return (
    <div className="space-y-10 pb-12">
      {/* Title */}
      <div>
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-display tracking-widest uppercase block mb-1">
          Interactive Case Simulator
        </span>
        <h1 className="text-3xl font-extrabold font-display text-slate-800 dark:text-slate-100">
          {procedureLabelMap[procedure]} Cases
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
          Practice identifying documentation traps and capturing CC/MCC indicators.
        </p>
      </div>

      {/* Case Tabs Selector */}
      {activeScenarios.length > 1 && (
        <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto gap-1">
          {activeScenarios.map((scen, idx) => (
            <button
              key={scen.id}
              onClick={() => setActiveCaseIdx(idx)}
              className={`px-4 py-2.5 font-display text-sm font-bold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                activeCaseIdx === idx
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {scen.patientName} ({scen.gender}, {scen.age})
            </button>
          ))}
        </div>
      )}

      {/* Interactive Case Board */}
      <div className="rounded-xl glass bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 shadow-xl overflow-hidden">
        {/* Case Profile Header */}
        <div className="bg-slate-50 dark:bg-slate-950/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800/60 flex items-center space-x-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 font-display">
              Patient Profile: {currentCase.patientName}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Age {currentCase.age} / {currentCase.gender} / Admitting DX: {currentCase.admittingDx}
            </p>
          </div>
        </div>

        {/* HPI Details */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {currentCase.chiefComplaint && (
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-display block mb-1">Chief Complaint</span>
                  <p className="text-slate-700 dark:text-slate-300 italic font-medium">"{currentCase.chiefComplaint}"</p>
                </div>
              )}
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-display block mb-1">History of Present Illness</span>
                <p className="text-slate-650 dark:text-slate-300 text-sm font-medium leading-relaxed">{currentCase.hpi}</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentCase.pmh && currentCase.pmh.length > 0 && (
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-display block mb-2">Past Medical History</span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentCase.pmh.map((p, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-semibold border border-slate-200/40 dark:border-slate-800/40">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {currentCase.vitalsLabs && currentCase.vitalsLabs.length > 0 && (
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-display block mb-2">Key Vitals & Labs</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentCase.vitalsLabs.map((lab, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-950/60 dark:border-slate-800/50">
                        <div className="text-[10px] uppercase tracking-wider font-bold text-slate-450 dark:text-slate-500">{lab.label}</div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">{lab.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-800/50" />

          {/* Multiple Choice Card */}
          {!submitted ? (
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-250 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold font-display">{currentCase.challengePrompt}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Identify all diagnoses that must be documented with specificity to reflect the patient's severity.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCase.options.map((opt, i) => {
                  const isChecked = selectedOpts.includes(i);
                  return (
                    <button
                      key={i}
                      onClick={() => toggleOption(i)}
                      className={`p-4 rounded-lg border text-left flex items-start space-x-3 transition-all cursor-pointer group ${
                        isChecked
                          ? 'border-emerald-500 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400'
                          : 'border-slate-200 hover:border-slate-350 dark:border-slate-800 dark:hover:border-slate-700 text-slate-650 dark:text-slate-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-emerald-500 border-emerald-500 text-slate-950'
                          : 'border-slate-300 group-hover:border-slate-400 dark:border-slate-700 dark:group-hover:border-slate-600'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-sm font-bold leading-tight">{opt}</span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleSubmit}
                disabled={selectedOpts.length === 0}
                className={`w-full py-3 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.99] disabled:opacity-40 disabled:pointer-events-none disabled:active:scale-100 transition-all text-slate-950 font-bold rounded-lg cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/10`}
              >
                Submit Documentation
              </button>
            </div>
          ) : (
            /* Results Panel */
            <div className="space-y-8 animate-fadeIn">
              {/* Score header alert */}
              <div className={`p-4 rounded-lg border flex items-start space-x-3 ${
                isPerfect
                  ? 'bg-emerald-500/10 border-emerald-250 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                  : 'bg-rose-500/10 border-rose-250 dark:border-rose-900/30 text-rose-700 dark:text-rose-400'
              }`}>
                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <h4 className="font-bold font-display text-base">
                    {isPerfect ? 'Excellent Capture!' : 'Documentation Trap Triggered!'}
                  </h4>
                  <p className="text-xs mt-0.5 font-medium opacity-90">
                    {isPerfect 
                      ? 'You successfully documented the baseline active conditions and specified the high-value severity indicator.'
                      : 'You missed critical documentation specificities or fell for symptom-only terminology.'}
                  </p>
                </div>
              </div>

              {/* Feedback checkboxes options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCase.options.map((opt, i) => {
                  const isChecked = selectedOpts.includes(i);
                  const isCorrect = currentCase.correctOptions.includes(i);
                  const isOptimal = opt === currentCase.optimalOption;
                  
                  let styleClass = 'border-slate-200 dark:border-slate-800 text-slate-400 opacity-60';
                  let icon = null;
                  
                  if (isChecked && isCorrect) {
                    styleClass = 'border-emerald-500 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400';
                    icon = <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[3]" />;
                  } else if (isChecked && !isCorrect) {
                    styleClass = 'border-rose-500 bg-rose-500/5 text-rose-700 dark:text-rose-400';
                    icon = <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5 stroke-[3]" />;
                  } else if (!isChecked && isCorrect) {
                    styleClass = 'border-emerald-300 dark:border-emerald-900/40 text-emerald-600/80 dark:text-emerald-500/80 border-dashed';
                    icon = <Check className="w-4 h-4 text-emerald-400/80 shrink-0 mt-0.5 stroke-[2]" />;
                  }

                  return (
                    <div
                      key={i}
                      className={`p-4 rounded-lg border text-left flex items-start space-x-3 transition-all relative ${styleClass}`}
                    >
                      {icon}
                      <div className="flex-1">
                        <span className="text-sm font-bold leading-tight">{opt}</span>
                        {isOptimal && (
                          <span className="ml-2 px-1.5 py-0.5 text-[9px] font-bold uppercase rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            Optimal Specificity Target
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Financial and quality dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-250 dark:border-emerald-900/30">
                  <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[10px] font-bold font-display tracking-wider uppercase">Reimbursement Shift</span>
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-100">{currentCase.impact.paymentShift}</div>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-250 dark:border-blue-900/30">
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                    <ShieldAlert className="w-4 h-4" />
                    <span className="text-[10px] font-bold font-display tracking-wider uppercase">Severity of Illness (SOI)</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    {[1, 2, 3, 4].map(level => (
                      <div
                        key={level}
                        className={`h-2 w-1/4 rounded-full transition-all ${
                          level <= currentCase.impact.soiAfter
                            ? level <= currentCase.impact.soiBefore
                              ? 'bg-slate-400 dark:bg-slate-600'
                              : 'bg-blue-500 shadow-sm shadow-blue-500/20'
                            : 'bg-slate-200 dark:bg-slate-800'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 pl-2">Lvl {currentCase.impact.soiAfter}</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-250 dark:border-purple-900/30">
                  <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 mb-2">
                    <Award className="w-4 h-4" />
                    <span className="text-[10px] font-bold font-display tracking-wider uppercase">Risk of Mortality (ROM)</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    {[1, 2, 3, 4].map(level => (
                      <div
                        key={level}
                        className={`h-2 w-1/4 rounded-full transition-all ${
                          level <= currentCase.impact.romAfter
                            ? level <= currentCase.impact.romBefore
                              ? 'bg-slate-400 dark:bg-slate-600'
                              : 'bg-purple-500 shadow-sm shadow-purple-500/20'
                            : 'bg-slate-200 dark:bg-slate-800'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 pl-2">Lvl {currentCase.impact.romAfter}</span>
                  </div>
                </div>
              </div>

              {/* Explanations */}
              <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 dark:bg-slate-950/80 dark:border-slate-800/80">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 font-display block mb-3">CDI Documentation Trap Breakdown</span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                  {currentCase.trapExplanation}
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleReset}
                  className="w-full py-3 bg-slate-250 hover:bg-slate-350 hover:text-slate-900 text-slate-700 font-bold rounded-lg transition-colors cursor-pointer text-sm dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-100"
                >
                  Retake Scenario
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick-Fire Micro-Vignettes Section */}
      <div className="space-y-6">
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <h2 className="text-2xl font-bold font-display text-slate-800 dark:text-slate-200">
            Quick-Fire Micro-Vignettes
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-450 mt-1 font-medium">
            Review specific phrasing targets and clinical pearls. Hover/click "Reveal" to test your recall.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-3 max-w-md">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by condition, severity, or keyword..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-lg glass bg-white text-slate-800 border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-950 dark:text-slate-205 dark:border-slate-800"
            />
          </div>
        </div>

        {/* List of micro-vignettes */}
        <div className="space-y-3">
          {filteredMicros.length === 0 ? (
            <div className="p-6 text-center text-slate-500 dark:text-slate-500 text-sm font-semibold rounded-lg bg-slate-50 dark:bg-slate-900/10 border border-dashed border-slate-200 dark:border-slate-850">
              No matching quick-fire vignettes found.
            </div>
          ) : (
            filteredMicros.map(v => {
              const isExpanded = !!expandedVignettes[v.id];
              const isMCC = v.tags.classification.startsWith('MCC');
              
              return (
                <div
                  key={v.id}
                  className="rounded-lg border border-slate-200/80 bg-white hover:border-slate-350 dark:border-slate-800/80 dark:bg-slate-900/20 dark:hover:border-slate-700 transition-all overflow-hidden"
                >
                  {/* Collapsed Header */}
                  <button
                    onClick={() => toggleVignette(v.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/10"
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                        <span className="text-sm font-bold text-slate-850 dark:text-slate-200 font-display">
                          {v.tags.condition}
                        </span>
                        <span className={`px-1.5 py-0.5 text-[9px] font-extrabold uppercase rounded ${
                          isMCC
                            ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                            : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                        }`}>
                          {v.tags.classification}
                        </span>
                        {v.tags.psi && (
                          <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                            PSI Indicator
                          </span>
                        )}
                        <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase rounded bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          Diff {v.tags.difficulty}/4
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-450 mt-1.5 font-medium line-clamp-2 md:line-clamp-none">
                        {v.scenario}
                      </p>
                    </div>
                    <div className="text-slate-400 shrink-0">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/20 pt-4 space-y-4 animate-slideDown">
                      {/* Phrasing block */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
                          <span className="text-[10px] font-bold font-display uppercase tracking-wider text-slate-500 block mb-1">
                            ❌ Typical Vague Wording (Symptom/Lab)
                          </span>
                          <p className="text-xs font-semibold text-slate-700 dark:text-slate-350 italic">
                            "{v.instead}"
                          </p>
                        </div>
                        <div className="p-3.5 rounded-lg border border-emerald-250 bg-emerald-500/5 dark:border-emerald-900/30">
                          <span className="text-[10px] font-bold font-display uppercase tracking-wider text-emerald-600 dark:text-emerald-450 block mb-1">
                            ✅ Optimal Capture Wording (Diagnosis)
                          </span>
                          <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
                            "{v.write}"
                          </p>
                        </div>
                      </div>

                      {/* Clinical Pearl */}
                      <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80">
                        <span className="text-[10px] font-bold font-display uppercase tracking-wider text-slate-500 dark:text-slate-450 block mb-1.5">
                          Documentation Pearl
                        </span>
                        <p className="text-xs font-medium text-slate-650 dark:text-slate-300 leading-relaxed">
                          {v.why}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Cases;
