import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpecialty, type Specialty } from '../context/SpecialtyContext';
import { Stethoscope, Activity, Heart, Shield, Bone, UserCheck, Zap, HelpCircle, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import contentData from '../data/playbook-content.json';

type RoleType = 'surgeon' | 'medicine' | 'app';

export const LandingPage: React.FC = () => {
  const { setSpecialty } = useSpecialty();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<RoleType>('surgeon');

  const landingData = (contentData as Record<string, any>)['/'] || {};
  const html = landingData.html || '';

  const getSectionHtml = (sectionId: string, nextSectionId?: string) => {
    if (!html) return '';
    const startTag = `id="${sectionId}"`;
    const startIdx = html.indexOf(startTag);
    if (startIdx === -1) return '';
    
    // Find the closing of this heading tag
    const contentStartIdx = html.indexOf('>', startIdx) + 1;
    
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
    <h1 class="text-3xl sm:text-4xl font-extrabold font-display text-slate-800 dark:text-slate-100 mt-8 mb-6">Your documentation is worth more than you think.</h1>
    <p class="my-4 text-slate-650 dark:text-slate-300 font-medium leading-relaxed">Starting January 2026, Medicare changed how it pays for five common surgeries — joint replacement, hip fracture repair, spinal fusion, bypass surgery, and bowel resection. Your hospital now receives a single bundled payment for each episode of care, and that payment is calculated partly based on how sick your patients are documented to be.</p>
    <p class="my-4 text-slate-650 dark:text-slate-300 font-medium leading-relaxed">Not how sick they are. How sick your notes say they are.</p>
    <p class="my-4 text-slate-650 dark:text-slate-300 font-medium leading-relaxed">This playbook shows you what that means in practice — and what to write.</p>
  `;
  
  const surgeonHtml = getSectionHtml('i-m-a-surgeon', 'i-m-a-medicine-physician-or-hospitalist');
  const medicineHtml = getSectionHtml('i-m-a-medicine-physician-or-hospitalist', 'i-m-an-app');
  const appHtml = getSectionHtml('i-m-an-app', 'what-this-is-about-in-60-seconds');
  const about60sHtml = getSectionHtml('what-this-is-about-in-60-seconds', 'what-s-in-this-playbook');
  const whatsInPlaybookHtml = getSectionHtml('what-s-in-this-playbook', 'one-more-thing');
  const oneMoreThingHtml = getSectionHtml('one-more-thing');

  const pathways: { title: string; desc: string; specialty: Specialty; icon: React.ReactNode; path: string }[] = [
    {
      title: 'Orthopedic Surgery',
      desc: 'Quick guidelines for LEJR (Joint Replacement) and SHFFT (Hip Fracture).',
      specialty: 'ortho',
      icon: <Bone className="w-8 h-8 text-emerald-400 light:text-emerald-600" />,
      path: '/docs/lejr'
    },
    {
      title: 'Spine Surgery',
      desc: 'Documentation checklists for Spinal Fusion and relative neurology.',
      specialty: 'spine',
      icon: <Shield className="w-8 h-8 text-blue-400 light:text-blue-600" />,
      path: '/docs/spinal-fusion'
    },
    {
      title: 'Cardiothoracic',
      desc: 'Cardiac care checklist for Coronary Artery Bypass Grafting (CABG).',
      specialty: 'cardiac',
      icon: <Heart className="w-8 h-8 text-rose-400 light:text-rose-600" />,
      path: '/docs/cabg'
    },
    {
      title: 'General Surgery',
      desc: 'Quick references for Major Bowel resection procedures and infections.',
      specialty: 'general',
      icon: <Activity className="w-8 h-8 text-purple-400 light:text-purple-600" />,
      path: '/docs/major-bowel'
    }
  ];

  const roleDetails = {
    surgeon: {
      title: "I'm a Surgeon",
      html: surgeonHtml || 'Your orders and discharge summary determine a large share of episode cost and captured complexity.',
      recommendation: "procedures",
      btnText: "Go to Procedures",
      colorClass: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:border-emerald-500"
    },
    medicine: {
      title: "I'm a Medicine Physician / Hospitalist",
      html: medicineHtml || 'Sepsis, AKI, encephalopathy, malnutrition, heart failure — the diagnoses that move DRG tiers are managed by you.',
      recommendation: "fundamentals",
      btnText: "Go to CDI Fundamentals",
      colorClass: "border-blue-500/30 text-blue-400 bg-blue-500/5 hover:border-blue-500"
    },
    app: {
      title: "I'm an APP",
      html: appHtml || 'You write progress notes and discharge summaries. The final opportunity to capture severity before billing.',
      recommendation: "procedures",
      btnText: "Go to Procedures",
      colorClass: "border-purple-500/30 text-purple-400 bg-purple-500/5 hover:border-purple-500"
    }
  };

  const handleRoleAction = (rec: string) => {
    if (rec === 'fundamentals') {
      setSpecialty('all');
      navigate('/docs/fundamentals');
    } else {
      // Highlight procedure focus
      setSpecialty('all');
      navigate('/docs/lejr');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-start items-center px-4 sm:px-6 py-12 dark:bg-slate-950 dark:text-slate-100 bg-slate-50 text-slate-900">
      <div className="max-w-6xl w-full space-y-12">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-3.5 bg-emerald-550/10 rounded-2xl text-emerald-400 light:text-emerald-600 animate-pulse border border-emerald-500/20">
              <Stethoscope className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest font-display">
              CMS TEAM Model Integrity Playbook
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight font-display bg-gradient-to-r from-emerald-400 via-teal-350 to-emerald-300 bg-clip-text text-transparent light:from-emerald-700 light:to-teal-600">
              TEAM Playbook
            </h1>
          </div>
          
          <div 
            className="prose prose-slate dark:prose-invert max-w-none text-slate-300 dark:text-slate-300 text-lg leading-relaxed pt-2"
            dangerouslySetInnerHTML={{ __html: heroHtml }}
          />
        </div>

        {/* Interactive Roles & Pathways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Role Selector */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-6 light:bg-white light:border-slate-200 shadow-xl">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-display flex items-center space-x-1.5">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>Tailored Documentation Insights</span>
              </span>
              <h2 className="text-xl font-bold font-display mt-1">Select Your Clinical Role</h2>
              <p className="text-xs text-slate-500 mt-0.5">Explore specific documentation highlights for your workflow.</p>
            </div>

            {/* Role Tab Buttons */}
            <div className="grid grid-cols-3 gap-2">
              {(['surgeon', 'medicine', 'app'] as RoleType[]).map(role => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all cursor-pointer text-center ${
                    selectedRole === role
                      ? 'border-emerald-500 bg-emerald-550/10 text-emerald-400 font-semibold'
                      : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 light:border-slate-250 light:hover:border-slate-350 light:text-slate-600 light:hover:text-slate-900'
                  }`}
                >
                  {role === 'surgeon' ? 'Surgeon' : role === 'medicine' ? 'Medicine' : 'APP'}
                </button>
              ))}
            </div>

            {/* Dynamic Role Display Card */}
            <div className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-5 space-y-4 light:bg-slate-50/50 light:border-slate-200/80 min-h-[160px] flex flex-col justify-between">
              <div 
                className="text-sm font-medium leading-relaxed text-slate-300 dark:text-slate-300 prose prose-xs dark:prose-invert"
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
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-display flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Procedure Specific Guidelines</span>
              </span>
              <h2 className="text-xl font-bold font-display mt-1">Select Procedure Pathway</h2>
              <p className="text-xs text-slate-500 mt-0.5">Jump directly to checklist documentation guides and interactive vignettes.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pathways.map((p, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSpecialty(p.specialty);
                    navigate(p.path);
                  }}
                  className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 text-left hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-550/5 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group light:bg-white light:border-slate-200"
                >
                  <div className="mb-3">{p.icon}</div>
                  <h3 className="text-base font-bold text-slate-100 light:text-slate-800 font-display group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 light:text-slate-500 text-xs mt-1.5 font-medium leading-relaxed">{p.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setSpecialty('all');
                  navigate('/docs/overview');
                }}
                className="w-full py-3 border border-slate-800 hover:border-slate-700 bg-slate-900/20 text-slate-350 hover:text-slate-100 font-bold rounded-lg transition-colors cursor-pointer text-xs light:border-slate-250 light:text-slate-600 light:hover:text-slate-800 light:bg-white/50"
              >
                Browse General TEAM Overview Guide
              </button>
            </div>
          </div>
        </div>

        {/* 60-Second Explanation & One More Thing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-800/80 pt-10 light:border-slate-200">
          {/* 60s summary */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-display flex items-center space-x-2 text-emerald-450">
              <HelpCircle className="w-5 h-5" />
              <span>What This Is About — In 60 Seconds</span>
            </h2>
            <div 
              className="prose prose-sm prose-slate dark:prose-invert max-w-none text-slate-300 dark:text-slate-300 leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: about60sHtml }}
            />
          </div>

          {/* One more thing */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-display flex items-center space-x-2 text-blue-450">
              <ShieldCheck className="w-5 h-5" />
              <span>Integrity & Accuracy Standard</span>
            </h2>
            <div 
              className="prose prose-sm prose-slate dark:prose-invert max-w-none text-slate-300 dark:text-slate-300 leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: oneMoreThingHtml }}
            />
          </div>
        </div>

        {/* What's In This Playbook Checklist Section */}
        {whatsInPlaybookHtml && (
          <div className="border-t border-slate-800/80 pt-10 light:border-slate-200">
            <h2 className="text-xl font-bold font-display mb-6 flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span>What's In This Playbook</span>
            </h2>
            <div 
              className="prose prose-sm prose-slate dark:prose-invert max-w-none grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-300 dark:text-slate-300 font-medium"
              dangerouslySetInnerHTML={{ __html: whatsInPlaybookHtml }}
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default LandingPage;
