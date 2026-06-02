import React from 'react';
import { Menu, User, Bell, ChevronDown } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  onToggleMenu: () => void;
  onNavigate: (tab: 'home' | 'schemes' | 'track' | 'profile') => void;
  activeTab: string;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onToggleMenu, 
  onNavigate, 
  activeTab,
  currentLanguage,
  onLanguageChange,
}) => {
  const t = TRANSLATIONS[currentLanguage];

  return (
    <>
      {/* Top Announcement Bar / Ticker */}
      <div className="fixed top-0 w-full z-50 bg-[#001b44] text-white text-[12px] h-9 overflow-hidden border-b border-white/10 flex items-center">
        <div className="relative flex items-center w-full overflow-hidden">
          <div className="absolute left-0 z-10 bg-saffron px-3 py-1 text-[10px] font-bold tracking-wider uppercase h-full flex items-center shadow-md">
            {t.latestUpdates}
          </div>
          <div className="animate-ticker flex whitespace-nowrap pl-32">
            <span className="mx-10 flex items-center gap-1.5 text-white">
              <Bell size={13} className="text-saffron animate-bounce" />
              {currentLanguage === 'en' 
                ? 'PM Kisan 18th installment released — ₹2000 credited to eligible verified farmers bank accounts.' 
                : 'पीएम किसान 18वीं किस्त जारी — ₹2000 पात्र सत्यापित किसानों के बैंक खातों में जमा किए गए।'}
            </span>
            <span className="mx-10 flex items-center gap-1.5 text-white">
              <Bell size={13} className="text-saffron" />
              {currentLanguage === 'en'
                ? 'Ayushman Bharat PM-JAY — Apply now to receive free corporate-level health insurance up to ₹5 Lakhs.'
                : 'आयुष्मान भारत पीएम-जेएवाई — ₹5 लाख तक का मुफ्त कॉर्पोरेट-स्तरीय स्वास्थ्य बीमा प्राप्त करने के लिए अभी आवेदन करें।'}
            </span>
            <span className="mx-10 flex items-center gap-1.5 text-white">
              <Bell size={13} className="text-saffron" />
              {currentLanguage === 'en'
                ? 'New Scheme: Mahila Samman Savings Certificate offering 7.5% guaranteed interest.'
                : 'नई योजना: महिला सम्मान बचत प्रमाणपत्र 7.5% गारंटीकृत ब्याज की पेशकश कर रहा है।'}
            </span>
            <span className="mx-10 flex items-center gap-1.5 text-white">
              <Bell size={13} className="text-saffron" />
              {currentLanguage === 'en'
                ? 'PMAY Housing Subsidy list updated for FY 2026-27. Use Tracker to check.'
                : 'वित्त वर्ष 2026-27 के लिए पीएमएवाई आवास सब्सिडी सूची अपडेट की गई। जाँच के लिए ट्रैकर का उपयोग करें।'}
            </span>
            <span className="mx-10 flex items-center gap-1.5 text-white">
              <Bell size={13} className="text-saffron" />
              {currentLanguage === 'en'
                ? 'NSP Scholarship registration deadline extended to June 30th, 2026.'
                : 'एनएसपी छात्रवृत्ति पंजीकरण की समय सीमा 30 जून, 2026 तक बढ़ाई गई।'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Government Top Bar */}
      <header className="fixed top-9 w-full z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 h-16 shadow-xs">
        <div className="flex justify-between items-center px-4 md:px-8 h-full w-full max-w-7xl mx-auto">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3 font-sans">
            <button
              onClick={onToggleMenu}
              className="p-2 -ml-2 rounded-full text-[#001b44] hover:bg-slate-100 transition-colors cursor-pointer"
              title="Menu"
              id="header-menu-btn"
            >
              <Menu size={22} />
            </button>
            <div className="flex flex-col cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="flex items-center gap-1.5">
                <span className="font-sans text-[20px] font-extrabold text-[#001b44] tracking-tight leading-none uppercase">
                  Sarkari<span className="text-saffron">Yojana</span>
                </span>
                <span className="text-[10px] bg-slate-100 text-[#001b44] px-1.5 py-0.5 rounded border border-slate-200 font-semibold font-mono">
                  {t.portal}
                </span>
              </div>
              <span className="text-[10px] text-saffron font-bold tracking-wider uppercase leading-tight mt-0.5">
                {t.govOfIndia}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`text-[14px] font-medium transition-colors cursor-pointer ${
                activeTab === 'home' ? 'text-[#0056c6] font-semibold' : 'text-[#434750] hover:text-[#001b44]'
              }`}
            >
              {t.home}
            </button>
            <button
              onClick={() => onNavigate('schemes')}
              className={`text-[14px] font-medium transition-colors cursor-pointer ${
                activeTab === 'schemes' ? 'text-[#0056c6] font-semibold' : 'text-[#434750] hover:text-[#001b44]'
              }`}
            >
              {t.allSchemes}
            </button>
            <button
              onClick={() => onNavigate('track')}
              className={`text-[14px] font-medium transition-colors cursor-pointer ${
                activeTab === 'track' ? 'text-[#0056c6] font-semibold' : 'text-[#434750] hover:text-[#001b44]'
              }`}
            >
              {t.trackApplication}
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className={`text-[14px] font-medium transition-colors cursor-pointer ${
                activeTab === 'profile' ? 'text-[#0056c6] font-semibold' : 'text-[#434750] hover:text-[#001b44]'
              }`}
            >
              {t.citizenProfile}
            </button>
          </nav>

          {/* User Controls */}
          <div className="flex items-center gap-3 font-sans">
            <div className="hidden sm:flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-full py-1.5 px-3">
              <span className="w-2 h-2 rounded-full bg-green-india animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-600">{t.dbtActive}</span>
            </div>

            {/* Language Selector Toggle */}
            <div className="flex border border-slate-200 rounded-lg p-0.5 bg-slate-50 text-[11px] font-bold">
              <button
                type="button"
                id="lang-toggle-en"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  currentLanguage === 'en'
                    ? 'bg-[#001b44] text-white'
                    : 'text-slate-655 hover:bg-slate-100'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                id="lang-toggle-hi"
                onClick={() => onLanguageChange('hi')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  currentLanguage === 'hi'
                    ? 'bg-[#001b44] text-white font-sans'
                    : 'text-slate-655 hover:bg-slate-100'
                }`}
              >
                हिंदी
              </button>
            </div>

            <button
              onClick={() => onNavigate('profile')}
              className="p-2 rounded-full text-[#001b44] hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer flex items-center justify-center bg-slate-50"
              title={t.citizenProfile}
              id="citizen-profile-btn"
            >
              <User size={18} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
