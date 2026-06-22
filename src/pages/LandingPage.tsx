import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpecialty, type Specialty } from '../context/SpecialtyContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Stethoscope, Activity, Heart, Shield, Bone, UserCheck, Zap, 
  HelpCircle, CheckCircle, ArrowRight, ShieldCheck, Sun, Moon,
  Layers, FileText, ClipboardList, Sliders, DollarSign, Home, Award
} from 'lucide-react';
import contentData from '../data/playbook-content.json';

type RoleType = 'surgeon' | 'medicine' | 'app';

export const LandingPage: React.FC = () => {
  const { setSpecialty } = useSpecialty();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<RoleType>('surgeon');

  const landingData = (contentData as Record<string, any>)['/'] || {};
  const html = landingData.html || '';

  const getSectionHtml = (sectionId: string, nextSectionId?: string) => {
    if (!html) return '';
    const startTag = `id="${sectionId}"`;
    const startIdx = html.indexOf(startTag);
    if (startIdx === -1) return '';
    
    // Find the closing tag of this heading (e.g. </h1>, </h2>, etc.)
    const headingCloseIdx = html.indexOf('</h', startIdx);
    if (headingCloseIdx === -1) return '';
    const contentStartIdx = html.indexOf('>', headingCloseIdx) + 1;
    
    let endIdx = html.length;
    if (nextSectionId) {
      const endTag = `id="${nextSectionId}"`;
      const nextIdx = html.indexOf(endTag);
      if (nextIdx !== -1) {
        const headingStart = html.lastIndexOf('<h', nextIdx);
        if (headingStart !== -1) {
          endIdx = headingStart;
        } else {
          endIdx = nextIdx;
        }
      }
    }
    return html.slice(contentStartIdx, endIdx).trim();
  };

  // Extract sections
  const heroHtml = getSectionHtml('hero', 'role-selector') || `
    <p class="my-4 text-slate-650 dark:text-slate-350 font-medium leading-relaxed">Your hospital now receives a single bundled payment for each episode of care, and Medicare calculates this payment based on the severity of illness documented for your patients. The only way insurance companies can assess how sick the patients are is through the documentation you provide. This playbook outlines what this means in practice and offers guidance on what to write.</p>
  `;
  
  const surgeonHtml = getSectionHtml('i-m-a-surgeon', 'i-m-a-medicine-physician-or-hospitalist');
  const medicineHtml = getSectionHtml('i-m-a-medicine-physician-or-hospitalist', 'i-m-an-app');
  const appHtml = getSectionHtml('i-m-an-app', 'what-this-is-about-in-60-seconds');
  const about60sHtml = getSectionHtml('what-this-is-about-in-60-seconds', 'what-s-in-this-playbook');
  const oneMoreThingHtml = getSectionHtml('one-more-thing');

  const pathways: { title: string; desc: string; specialty: Specialty; icon: React.ReactNode; path: string }[] = [
    {
      title: 'Orthopedic Surgery',
      desc: 'Quick guidelines for LEJR (Joint Replacement) and SHFFT (Hip Fracture).',
      specialty: 'ortho',
      icon: <Bone className="w-8 h-8 text-emerald-600 dark:text-emerald-455" />,
      path: '/docs/lejr'
    },
    {
      title: 'Spine Surgery',
      desc: 'Documentation checklists for Spinal Fusion and relative neurology.',
      specialty: 'spine',
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-455" />,
      path: '/docs/spinal-fusion'
    },
    {
      title: 'Cardiac Surgery',
      desc: 'Cardiac care checklist for Coronary Artery Bypass Grafting (CABG).',
      specialty: 'cardiac',
      icon: <Heart className="w-8 h-8 text-rose-600 dark:text-rose-455" />,
      path: '/docs/cabg'
    },
    {
      title: 'Colorectal Surgery',
      desc: 'Quick references for Major Bowel resection procedures and infections.',
      specialty: 'general',
      icon: <Activity className="w-8 h-8 text-purple-600 dark:text-purple-455" />,
      path: '/docs/major-bowel'
    }
  ];

  const playbookFeatures = [
    {
      title: "Understand the TEAM Model",
      desc: "What it is, why it's mandatory, which hospitals are affected, and how the target price is calculated. No jargon — written for a physician who has never heard of a bundled payment.",
      linkText: "TEAM Overview",
      linkPath: "/docs/overview",
      icon: <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-450" />,
      color: "border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/[0.03] dark:bg-emerald-500/5"
    },
    {
      title: "Know what your documentation actually does",
      desc: "How a diagnosis moves from your note to a DRG tier to a payment. Why 'heart failure' and 'acute systolic heart failure' are not the same code. Why lab values are not diagnoses.",
      linkText: "CDI Fundamentals",
      linkPath: "/docs/fundamentals",
      icon: <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      color: "border-blue-500/20 hover:border-blue-500/50 bg-blue-500/[0.03] dark:bg-blue-500/5"
    },
    {
      title: "See exactly which conditions to document for your procedure",
      desc: "Ranked MCCs, ranked CCs, phrasing examples, and a discharge checklist — one page per procedure. Print it. Bookmark it. Use it before every discharge.",
      linkText: "Quick Reference Cards",
      linkPath: "/docs/lejr",
      icon: <ClipboardList className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      color: "border-rose-500/20 hover:border-rose-500/50 bg-rose-500/[0.03] dark:bg-rose-500/5"
    },
    {
      title: "Understand the CC/MCC system completely",
      desc: "Every high-value CC and MCC across all five procedures — with the common documentation miss for each and the clinical criteria that must be present to justify the diagnosis.",
      linkText: "CC/MCC Reference",
      linkPath: "/docs/reference/cc-mcc",
      icon: <Sliders className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      color: "border-purple-500/20 hover:border-purple-500/50 bg-purple-500/[0.03] dark:bg-purple-500/5"
    },
    {
      title: "Understand HCCs and the target price",
      desc: "What HCCs are, how they differ from CCs and MCCs, and which chronic conditions in your patient population — if accurately documented in the six months before surgery — raise the episode's target price.",
      linkText: "HCC Reference",
      linkPath: "/docs/reference/hcc",
      icon: <DollarSign className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      color: "border-amber-500/20 hover:border-amber-500/50 bg-amber-500/[0.03] dark:bg-amber-500/5"
    },
    {
      title: "Know what happens after discharge",
      desc: "How discharge disposition, SNF selection, DME orders, and readmission prevention connect to episode cost — and which of those decisions are yours to make.",
      linkText: "Surgical Decisions",
      linkPath: "/docs/surgical-decisions",
      icon: <Home className="w-6 h-6 text-teal-650 dark:text-teal-400" />,
      color: "border-teal-500/20 hover:border-teal-500/50 bg-teal-500/[0.03] dark:bg-teal-500/5"
    },
    {
      title: "Understand the full quality picture",
      desc: "How APR-DRG severity scoring affects your hospital's quality rankings, commercial contracts, and Medicaid payment — and why it runs in parallel with the MS-DRG system you already know.",
      linkText: "APR-DRG SOI/ROM Reference",
      linkPath: "/docs/reference/apr-drg",
      icon: <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      color: "border-indigo-500/20 hover:border-indigo-500/50 bg-indigo-500/[0.03] dark:bg-indigo-500/5"
    }
  ];

  const roleDetails = {
    surgeon: {
      title: "I'm a Surgeon",
      html: surgeonHtml || 'Your orders and discharge summary determine a large share of episode cost and captured complexity.',
      recommendation: "procedures",
      btnText: "Go to Procedures",
      colorClass: "border-emerald-500/30 text-emerald-650 dark:text-emerald-450 bg-emerald-500/5 hover:border-emerald-500"
    },
    medicine: {
      title: "I'm a Medicine Physician / Hospitalist",
      html: medicineHtml || 'Sepsis, AKI, encephalopathy, malnutrition, heart failure — the diagnoses that move DRG tiers are managed by you.',
      recommendation: "fundamentals",
      btnText: "Go to CDI Fundamentals",
      colorClass: "border-blue-500/30 text-blue-650 dark:text-blue-450 bg-blue-500/5 hover:border-blue-500"
    },
    app: {
      title: "I'm an APP",
      html: appHtml || 'You write progress notes and discharge summaries. The final opportunity to capture severity before billing.',
      recommendation: "procedures",
      btnText: "Go to Procedures",
      colorClass: "border-purple-500/30 text-purple-655 dark:text-purple-450 bg-purple-500/5 hover:border-purple-500"
    }
  };

  const handleRoleAction = (rec: string) => {
    if (rec === 'fundamentals') {
      setSpecialty('all');
      navigate('/docs/fundamentals');
    } else {
      setSpecialty('all');
      navigate('/docs/lejr');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-start items-center px-4 sm:px-6 py-12 transition-colors duration-300">
      <div className="max-w-6xl w-full space-y-12">
        
        {/* Navigation & Theme Toggle Header */}
        <div className="w-full flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-900">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Stethoscope className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold tracking-wider text-slate-700 dark:text-slate-300 font-display">
              CMS TEAM Model Playbook
            </span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-350 transition-all cursor-pointer shadow-sm hover:scale-105"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
        </div>

        {/* Header Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-505 uppercase tracking-widest font-display">
              CMS TEAM Model Playbook
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight font-display bg-gradient-to-b from-emerald-850 to-teal-600 dark:from-emerald-500 dark:to-emerald-300 bg-clip-text text-transparent">
              TEAM Playbook
            </h1>
          </div>
          
          <div 
            className="prose prose-slate dark:prose-invert max-w-none text-slate-650 dark:text-slate-300 text-lg leading-relaxed pt-2"
            dangerouslySetInnerHTML={{ __html: heroHtml }}
          />
        </div>

        {/* Interactive Roles & Pathways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Role Selector */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 space-y-6 shadow-md">
            <div>
              <span className="text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-wider font-display flex items-center space-x-1.5">
                <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-450" />
                <span>Tailored Documentation Insights</span>
              </span>
              <h2 className="text-xl font-bold font-display mt-1 text-slate-800 dark:text-slate-100">Select Your Clinical Role</h2>
              <p className="text-xs text-slate-505 dark:text-slate-400 mt-0.5">Explore specific documentation highlights for your workflow.</p>
            </div>

            {/* Role Tab Buttons */}
            <div className="grid grid-cols-3 gap-2">
              {(['surgeon', 'medicine', 'app'] as RoleType[]).map(role => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all cursor-pointer text-center ${
                    selectedRole === role
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-650 dark:text-emerald-400 font-semibold'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-850 dark:hover:text-slate-200'
                  }`}
                >
                  {role === 'surgeon' ? 'Surgeon' : role === 'medicine' ? 'Medicine' : 'APP'}
                </button>
              ))}
            </div>

            {/* Dynamic Role Display Card */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-955/40 p-5 space-y-4 min-h-[160px] flex flex-col justify-between">
              <div 
                className="text-sm font-medium leading-relaxed text-slate-650 dark:text-slate-300 prose prose-xs dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: roleDetails[selectedRole].html }}
              />
              
              <button
                onClick={() => handleRoleAction(roleDetails[selectedRole].recommendation)}
                className={`w-full py-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer flex items-center justify-center space-x-2 ${roleDetails[selectedRole].colorClass}`}
              >
                <span>{roleDetails[selectedRole].btnText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Surgical Pathways Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-550 dark:text-slate-400 uppercase tracking-wider font-display flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-450" />
                <span>Procedure Specific Guidelines</span>
              </span>
              <h2 className="text-xl font-bold font-display mt-1 text-slate-800 dark:text-slate-100">Select Procedure Pathway</h2>
              <p className="text-xs text-slate-505 dark:text-slate-400 mt-0.5">Jump directly to checklist documentation guides and interactive vignettes.</p>
            </div>

            {/* Repositioned General Overview Guide card */}
            <button
              onClick={() => {
                setSpecialty('all');
                navigate('/docs/overview');
              }}
              className="w-full p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5 text-left hover:border-emerald-500 dark:hover:border-emerald-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group shadow-sm flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-md text-[10px] font-bold tracking-widest uppercase">
                    Core Introduction
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-slate-850 dark:text-slate-100 group-hover:text-emerald-650 dark:group-hover:text-emerald-450 transition-colors">
                  Browse General TEAM Overview Guide
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium max-w-lg leading-relaxed">
                  Understand the CMS Bundled Payment model structure, targets, quality metrics, and operational basics.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-450 dark:text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </button>

            {/* Pathways Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pathways.map((p, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSpecialty(p.specialty);
                    navigate(p.path);
                  }}
                  className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-left hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-3">{p.icon}</div>
                  <h3 className="text-base font-bold text-slate-855 dark:text-slate-100 font-display group-hover:text-emerald-650 dark:group-hover:text-emerald-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 font-medium leading-relaxed">{p.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 60-Second Explanation & Accuracy Standard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 dark:border-slate-850 pt-10">
          {/* 60s summary */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-display flex items-center space-x-2 text-emerald-650 dark:text-emerald-400">
              <HelpCircle className="w-5 h-5" />
              <span>What This Is About — In 60 Seconds</span>
            </h2>
            <div 
              className="prose prose-sm prose-slate dark:prose-invert max-w-none text-slate-650 dark:text-slate-300 leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: about60sHtml }}
            />
          </div>

          {/* Compliance & Accuracy */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-display flex items-center space-x-2 text-blue-650 dark:text-blue-400">
              <ShieldCheck className="w-5 h-5" />
              <span>Accuracy & Compliance Standard</span>
            </h2>
            <div 
              className="prose prose-sm prose-slate dark:prose-invert max-w-none text-slate-650 dark:text-slate-300 leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: oneMoreThingHtml }}
            />
          </div>
        </div>

        {/* Playbook Features Grid */}
        <div className="border-t border-slate-200 dark:border-slate-850 pt-10">
          <div className="flex items-center space-x-2 mb-6">
            <CheckCircle className="w-5 h-5 text-emerald-505" />
            <h2 className="text-xl font-bold font-display text-slate-855 dark:text-slate-100">
              What's In This Playbook
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playbookFeatures.map((feat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSpecialty('all');
                  navigate(feat.linkPath);
                }}
                className={`p-5 rounded-xl border text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full min-h-[180px] shadow-sm ${feat.color} border-slate-200 dark:border-slate-850`}
              >
                <div>
                  <div className="mb-3.5 p-2 rounded-lg bg-white/80 dark:bg-slate-900/60 shadow-sm w-fit border border-slate-100 dark:border-slate-800/50">
                    {feat.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-850 dark:text-slate-150 font-display group-hover:text-emerald-650 dark:group-hover:text-emerald-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 font-medium leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/30 flex items-center justify-between w-full text-[11px] font-bold text-slate-600 dark:text-slate-400 group-hover:text-emerald-650 dark:group-hover:text-emerald-400 transition-colors">
                  <span>{feat.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
