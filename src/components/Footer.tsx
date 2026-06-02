import React from 'react';
import { Landmark, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onNavigate: (tab: 'home' | 'schemes' | 'track' | 'profile') => void;
  currentLanguage: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage];

  const categories = currentLanguage === 'en'
    ? ['Agriculture', 'Health & Wellness', 'Education & Skills', 'Housing & Infrastructure', 'Women & Child Dev.']
    : ['कृषि कल्याण', 'स्वास्थ्य एवं कल्याण', 'शिक्षा एवं कौशल', 'आवास एवं अवसंरचना', 'महिला एवं बाल विकास'];

  const quickLinksList = [
    { label: currentLanguage === 'en' ? 'Check Eligibility' : 'पात्रता की जांच करें', tab: 'home' as const },
    { label: t.trackApplication, tab: 'track' as const },
    { label: currentLanguage === 'en' ? 'Browse Options' : 'विकल्प ब्राउज़ करें', tab: 'schemes' as const },
    { label: t.citizenProfile, tab: 'profile' as const }
  ];

  return (
    <>
      {/* Tricolor Strip representing National Flag */}
      <div className="h-1.5 w-full bg-gradient-to-r from-saffron via-white to-green-india"></div>

      <footer className="bg-[#001b44] text-white pt-16 pb-26 md:pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Company / Portal Description */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xl font-extrabold text-white tracking-tight uppercase">
                Sarkari<span className="text-saffron">Yojana</span>
              </span>
              <span className="text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded font-mono font-bold uppercase">
                {currentLanguage === 'en' ? 'GOVT' : 'सरकार'}
              </span>
            </div>
            
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm font-normal">
              {t.footerDesc}
            </p>
            
            <div className="text-[10px] text-slate-400">
              {t.footerRights}
            </div>
          </div>

          {/* Scheme Categories Links */}
          <div className="lg:col-span-2.5 text-left space-y-4">
            <h4 className="text-xs font-extrabold text-saffron uppercase tracking-widest">
              {currentLanguage === 'en' ? 'Scheme Categories' : 'योजना श्रेणियां'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {categories.map((cat) => (
                <li key={cat}>
                  <button onClick={() => onNavigate('schemes')} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2.5 text-left space-y-4">
            <h4 className="text-xs font-extrabold text-saffron uppercase tracking-widest">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {quickLinksList.map((link, index) => (
                <li key={index}>
                  <button onClick={() => onNavigate(link.tab)} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Portals links */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-extrabold text-saffron uppercase tracking-widest">
              {t.officialPortals}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="https://india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 hover:underline">
                  India.gov.in
                  <ArrowRight size={10} className="text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://myscheme.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 hover:underline">
                  MyScheme Portal
                  <ArrowRight size={10} className="text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://pmindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 hover:underline">
                  PM India Office
                  <ArrowRight size={10} className="text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://digitalindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 hover:underline">
                  Digital India
                  <ArrowRight size={10} className="text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Toll-free Support Footer bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-700/60 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <span className="text-slate-400 text-xs flex items-center gap-2">
            🇮🇳 {t.footerSupportBar}
          </span>
          <span className="text-slate-200 text-sm font-bold block sm:inline">
            {t.footerHelpline} <span className="font-mono text-saffron text-base tracking-wide pl-1">1800-111-5555</span>
          </span>
        </div>
      </footer>
    </>
  );
};
