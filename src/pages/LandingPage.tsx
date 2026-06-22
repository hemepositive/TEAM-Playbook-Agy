import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpecialty, type Specialty } from '../context/SpecialtyContext';
import { Stethoscope, Activity, Heart, Shield, Bone } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setSpecialty } = useSpecialty();
  const navigate = useNavigate();

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
      icon: <Heart className="w-8 h-8 text-red-400 light:text-red-600" />,
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-6 py-12 light:bg-slate-50 light:text-slate-900">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 bg-emerald-500/10 rounded-full text-emerald-400 light:text-emerald-600 animate-pulse">
            <Stethoscope className="w-12 h-12" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent light:from-emerald-700 light:to-teal-600 light:bg-clip-text light:text-transparent">
            TEAM Playbook
          </h1>
          <p className="text-slate-400 light:text-slate-600 max-w-xl text-lg">
            Clinician-led documentation improvement guides for the CMS Transforming Episode-Based Payment (TEAM) model.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {pathways.map((p, i) => (
            <button
              key={i}
              onClick={() => {
                setSpecialty(p.specialty);
                navigate(p.path);
              }}
              className="p-6 rounded-xl glass bg-slate-900 border-slate-800 text-left hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 cursor-pointer group light:bg-white light:border-slate-200"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-slate-100 light:text-slate-800 font-display group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors">
                {p.title}
              </h3>
              <p className="text-slate-400 light:text-slate-500 text-sm mt-2">{p.desc}</p>
            </button>
          ))}
        </div>

        <div className="pt-8">
          <button
            onClick={() => {
              setSpecialty('all');
              navigate('/docs/overview');
            }}
            className="px-6 py-3 border border-slate-800 hover:border-slate-700 text-slate-300 font-medium rounded-lg transition-colors cursor-pointer text-sm light:border-slate-200 light:text-slate-600 light:hover:text-slate-800"
          >
            Browse General Documentation
          </button>
        </div>
      </div>
    </div>
  );
};
