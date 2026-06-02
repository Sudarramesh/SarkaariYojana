import React from 'react';
import { Sprout, HeartPulse, GraduationCap, Home, Heart, Coins, Landmark, Calendar, Sparkles } from 'lucide-react';
import { Scheme } from '../types';
import { Language } from '../data/translations';

interface SchemeCardProps {
  scheme: Scheme;
  onOpenDetails: (scheme: Scheme) => void;
  onOpenApply: (scheme: Scheme) => void;
  currentLanguage: Language;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({
  scheme,
  onOpenDetails,
  onOpenApply,
  currentLanguage,
}) => {
  // Get icon depending on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Agriculture': return <Sprout size={16} className="text-green-india" />;
      case 'Health': return <HeartPulse size={16} className="text-rose-600" />;
      case 'Education': return <GraduationCap size={16} className="text-[#0056c6]" />;
      case 'Housing': return <Home size={16} className="text-amber-600" />;
      case 'Women': return <Heart size={16} className="text-indigo-600" />;
      case 'Finance': return <Coins size={16} className="text-emerald-600" />;
      default: return <Landmark size={16} className="text-slate-600" />;
    }
  };

  const getTranslatedCategory = (category: string) => {
    if (currentLanguage === 'hi') {
      switch (category) {
        case 'Agriculture': return 'कृषि कल्याण';
        case 'Health': return 'स्वास्थ्य और परिवार';
        case 'Education': return 'शिक्षा व कौशल';
        case 'Housing': return 'आवास योजना';
        case 'Women': return 'महिला सशक्तिकरण';
        case 'Finance': return 'वित्तीय समावेशन';
        default: return 'केंद्रीय योजना';
      }
    }
    return category;
  };

  // Badges logic depending on scheme database
  const getBadgeOverlays = () => {
    if (scheme.id === 'pm-kisan') {
      return (
        <>
          <span className="bg-green-india/90 text-white px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider">
            {currentLanguage === 'en' ? 'Open' : 'चालू'}
          </span>
          <span className="bg-[#001b44]/90 text-white px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider">
            {currentLanguage === 'en' ? 'Popular' : 'लोकप्रिय'}
          </span>
        </>
      );
    } else if (scheme.id === 'ayushman-bharat') {
      return (
        <span className="bg-green-india/90 text-white px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider font-sans">
          {currentLanguage === 'en' ? 'Open' : 'चालू'}
        </span>
      );
    } else if (scheme.id === 'nsp-scholarship') {
      return (
        <span className="bg-saffron/90 text-white px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider">
          {currentLanguage === 'en' ? 'New' : 'नया'}
        </span>
      );
    } else {
      return (
        <span className="bg-slate-500/90 text-white px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider">
          {currentLanguage === 'en' ? 'Active' : 'सक्रिय'}
        </span>
      );
    }
  };

  const displayName = currentLanguage === 'hi' && scheme.hiName ? scheme.hiName : scheme.name;
  const displayDesc = currentLanguage === 'hi' && scheme.hiDescription ? scheme.hiDescription : scheme.description;
  const displayBenefits = currentLanguage === 'hi' && scheme.hiBenefitsLabel ? scheme.hiBenefitsLabel : scheme.benefitsLabel;
  const displayTimeline = currentLanguage === 'hi' && scheme.hiTimelineLabel ? scheme.hiTimelineLabel : scheme.timelineLabel;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group font-sans">
      {/* Cover Image with tag overlays */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={scheme.image}
          alt={displayName}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 flex gap-1.5 z-10">
          {getBadgeOverlays()}
        </div>
      </div>

      {/* Card Information */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2 text-left">
          {/* Category Label */}
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center p-1 bg-slate-50 rounded border border-slate-100">
              {getCategoryIcon(scheme.category)}
            </span>
            <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest font-sans">
              {getTranslatedCategory(scheme.category)}
            </span>
          </div>

          {/* Scheme Title */}
          <h3 className="text-base font-extrabold text-[#001b44] leading-snug group-hover:text-[#0056c6] transition-colors line-clamp-1 text-left">
            {displayName}
          </h3>

          {/* Scheme short description */}
          <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-2 h-10 text-left">
            {displayDesc}
          </p>
        </div>

        {/* Benefits details row */}
        <div className="flex flex-wrap gap-4 text-[11px] text-slate-500 border-t border-slate-100 pt-4 mt-4 text-left">
          <div className="flex items-center gap-1.5 font-medium shrink-0">
            <Landmark size={14} className="text-[#0056c6]" />
            <span>
              {currentLanguage === 'en' ? 'Eligible benefits: ' : 'योग्य लाभ: '}
              <strong className="text-slate-800">{displayBenefits}</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-medium shrink-0">
            <Calendar size={14} className="text-saffron" />
            <span>
              {currentLanguage === 'en' ? 'Timeline: ' : 'समय सीमा: '}
              <strong className="text-slate-800">{displayTimeline}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Actions Grid */}
      <div className="p-4 bg-slate-50/65 border-t border-slate-200/60 flex gap-3">
        <button
          onClick={() => onOpenDetails(scheme)}
          className="flex-1 bg-white text-slate-700 hover:text-[#001b44] font-bold text-xs py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs hover:shadow-sm cursor-pointer"
        >
          {currentLanguage === 'en' ? 'Guide' : 'मार्गदर्शिका'}
        </button>
        <button
          onClick={() => onOpenApply(scheme)}
          className="flex-1 bg-[#001b44] text-white hover:bg-[#0056c6] font-bold text-xs py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer"
        >
          {currentLanguage === 'en' ? 'Apply Now' : 'अभी आवेदन करें'}
        </button>
      </div>
    </div>
  );
};
