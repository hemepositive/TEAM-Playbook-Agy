import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSpecialty, type Specialty } from '../context/SpecialtyContext';
import { generalNavItems, procedureNavItems } from '../config/navigation';
import { Sun, Moon, Stethoscope, Menu, X, ArrowLeft } from 'lucide-react';
import { TOC } from './TOC';

export const DocsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { specialty, setSpecialty } = useSpecialty();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProcedures = procedureNavItems.filter(
    item => specialty === 'all' || item.specialty === specialty
  );

  const specialtiesList: { value: Specialty; label: string }[] = [
    { value: 'all', label: 'All Specialties' },
    { value: 'ortho', label: 'Orthopedic Surgery' },
    { value: 'spine', label: 'Spine Surgery' },
    { value: 'cardiac', label: 'Cardiothoracic' },
    { value: 'general', label: 'General Surgery' }
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full space-y-6">
      <div>
        <label className="block mb-2 text-xs font-semibold tracking-wider uppercase text-slate-400 font-display">
          Surgical Path Switcher
        </label>
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value as Specialty)}
          className="w-full px-3 py-2 text-sm rounded-lg glass bg-white text-slate-800 border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-950 dark:text-slate-200 dark:border-slate-800"
        >
          {specialtiesList.map(spec => (
            <option key={spec.value} value={spec.value}>
              {spec.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="px-3 mb-2 text-xs font-semibold tracking-wider uppercase text-slate-400 font-display">
            General Overview
          </h4>
          <nav className="space-y-1">
            {generalNavItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-emerald-50 text-emerald-700 font-medium dark:bg-emerald-950/50 dark:text-emerald-400'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/40'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="px-3 mb-2 text-xs font-semibold tracking-wider uppercase text-slate-400 font-display">
            Procedure Playbooks
          </h4>
          <nav className="space-y-1">
            {filteredProcedures.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-emerald-50 text-emerald-700 font-medium dark:bg-emerald-950/50 dark:text-emerald-400'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/40'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-550 text-slate-900 font-sans dark:bg-slate-950 dark:text-slate-100 bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b glass border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80">
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold font-display text-emerald-600 dark:text-emerald-400">
            <Stethoscope className="w-6 h-6" />
            <span>TEAM Playbook</span>
          </Link>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 animate-spin-slow" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="w-full px-6 mx-auto max-w-7xl">
        <div className="flex">
          {/* Desktop Left Sidebar */}
          <aside className="sticky top-[73px] hidden md:block w-72 h-[calc(100vh-73px)] py-8 border-r border-slate-200 dark:border-slate-900 pr-6 overflow-y-auto shrink-0">
            {sidebarContent}
          </aside>

          {/* Mobile Sidebar overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-30 md:hidden bg-slate-950/80 backdrop-blur-sm">
              <aside className="w-80 h-full p-6 bg-white border-r border-slate-200 dark:bg-slate-950 dark:border-slate-900 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-bold text-emerald-400 font-display">Navigation</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-1 cursor-pointer">
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                </div>
                {sidebarContent}
              </aside>
            </div>
          )}

          {/* Main Content Area */}
          <main className="flex-1 min-w-0 py-8 md:px-8">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              {/* Center Content Column */}
              <article className="flex-1 max-w-[800px] leading-relaxed">
                <Link to="/" className="inline-flex items-center space-x-2 text-sm text-slate-500 hover:text-slate-300 mb-6">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
                {children}
              </article>

              {/* Right TOC Sidebar */}
              <aside className="sticky top-[73px] hidden lg:block w-64 h-[calc(100vh-73px)] py-8 pl-6 overflow-y-auto shrink-0">
                <TOC />
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
