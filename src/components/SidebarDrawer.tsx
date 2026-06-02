import React from 'react';
import { X, Home, List, CheckSquare, PhoneCall, UserCheck, ShieldCheck } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: 'home' | 'schemes' | 'track' | 'profile') => void;
  activeTab: string;
  currentLanguage: Language;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  activeTab,
  currentLanguage,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLanguage];

  const menuItems = [
    { id: 'home', label: t.home, icon: Home },
    { id: 'schemes', label: currentLanguage === 'en' ? 'Browse All Schemes' : 'सभी योजनाएं ब्राउज़ करें', icon: List },
    { id: 'track', label: t.trackApplication, icon: CheckSquare },
    { id: 'profile', label: t.citizenProfile, icon: UserCheck },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/45 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Slide drawer container */}
      <div className="absolute inset-y-0 left-0 max-w-full flex">
        <div className="w-80 bg-white shadow-2xl flex flex-col h-full transform transition ease-in-out duration-300">
          {/* Header */}
          <div className="px-5 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white">
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-[#001b44] tracking-tight leading-none text-lg">
                {currentLanguage === 'en' ? 'Portal Menu' : 'पोर्टल मेनू'}
              </span>
              <span className="text-[10px] text-saffron uppercase font-bold tracking-widest mt-1">
                {currentLanguage === 'en' ? 'Citizen Assistance' : 'नागरिक सहायता'}
              </span>
            </div>
            <button
              id="sidebar-drawer-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links Section */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-2 text-left">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
              {currentLanguage === 'en' ? 'Primary Directory' : 'प्राथमिक निर्देशिका'}
            </div>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id as any);
                    onClose();
                  }}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#001b44] text-white font-bold shadow-md shadow-blue-900/10'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#001b44]'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-saffron' : 'text-slate-400'} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}

            <div className="pt-6 border-t border-slate-100 mt-6 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">
                {currentLanguage === 'en' ? 'Helpdesk & Guides' : 'सहायता डेस्क और मार्गदर्शिका'}
              </div>
              
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-1 text-xs text-slate-600">
                <span className="font-semibold text-[#001b44] flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-green-india" />
                  Direct Benefit Transfer (DBT)
                </span>
                <p className="text-slate-500 leading-relaxed mt-1">
                  {currentLanguage === 'en'
                    ? 'All subsidies and funds are directly disbursed to the bank accounts linked with Aadhaar.'
                    : 'सभी सब्सिडी और धनराशि सीधे आधार से जुड़े बैंक खातों में वितरित की जाती है।'}
                </p>
              </div>

              <div className="p-3.5 bg-saffron/5 rounded-xl border border-saffron/10 flex flex-col gap-1 text-xs text-slate-700">
                <span className="font-semibold text-saffron flex items-center gap-1.5">
                  <PhoneCall size={14} />
                  {currentLanguage === 'en' ? 'National Helpline' : 'राष्ट्रीय हेल्पलाइन'}
                </span>
                <span className="font-mono text-sm font-bold text-slate-800 tracking-wide mt-1">
                  1800-111-5555
                </span>
                <span className="text-xs text-slate-500">
                  {currentLanguage === 'en' ? 'Toll-free / Available 24/7' : 'टोल-फ्री / २४/७ उपलब्ध'}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Badge */}
          <div className="p-5 border-t border-slate-100 bg-slate-50 text-center">
            <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
              🇮🇳 {currentLanguage === 'en' ? 'National Informatics Centre' : 'राष्ट्रीय सूचना विज्ञान केंद्र'}
            </span>
            <span className="text-[10px] text-slate-300 block mt-0.5">
              Secure Cloud v2.4.67
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
