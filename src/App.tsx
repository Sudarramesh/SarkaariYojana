import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  HeartPulse, 
  GraduationCap, 
  Home as HomeIcon, 
  Heart, 
  Search, 
  CheckCircle, 
  BookmarkCheck, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  PhoneCall, 
  FileCheck2, 
  Calculator, 
  User, 
  Award, 
  CreditCard, 
  Clock, 
  TrendingUp, 
  MapPin, 
  Activity,
  CheckCircle2
} from 'lucide-react';
import { Header } from './components/Header';
import { SidebarDrawer } from './components/SidebarDrawer';
import { SchemeCard } from './components/SchemeCard';
import { SchemeDetailsModal } from './components/SchemeDetailsModal';
import { ApplyModal } from './components/ApplyModal';
import { EligibilityChecker } from './components/EligibilityChecker';
import { StatusTracker } from './components/StatusTracker';
import { Footer } from './components/Footer';
import { SCHEMES } from './data/schemes';
import { Language, TRANSLATIONS } from './data/translations';
import { Scheme, Application } from './types';

export default function App() {
  // Navigation Screens Tabs
  const [activeTab, setActiveTab] = useState<'home' | 'schemes' | 'track' | 'profile'>('home');
  
  // Side Menu Drawer Toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Modal Interactions State
  const [selectedDetailsScheme, setSelectedDetailsScheme] = useState<Scheme | null>(null);
  const [selectedApplyScheme, setSelectedApplyScheme] = useState<Scheme | null>(null);

  // Search Query parameters
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Interactive Global Application Registry
  const [applications, setApplications] = useState<Application[]>([]);
  
  // Direct shortcut reference code to trigger in Track View
  const [trackedReferenceCode, setTrackedReferenceCode] = useState<string>('');

  // Global Bilingual State Settings
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const t = TRANSLATIONS[currentLanguage];

  // Auto-populating user metadata
  const userEmail = 'suderramesh541@gmail.com';

  // Load persistence records from localstorage on initialization
  useEffect(() => {
    const savedApps = localStorage.getItem('sarkari_applications');
    if (savedApps) {
      try {
        setApplications(JSON.parse(savedApps));
      } catch (err) {
        console.error('Failed to parse saved applications details', err);
      }
    }
  }, []);

  // Save applications list on updates
  const handleAddApplication = (newApp: Application) => {
    const updatedApps = [newApp, ...applications];
    setApplications(updatedApps);
    localStorage.setItem('sarkari_applications', JSON.stringify(updatedApps));
    
    // Automatically prepare tracking reference and switch views for instant tracking
    setTrackedReferenceCode(newApp.referenceNumber);
    setActiveTab('track');
  };

  // Switch navigation tabs smoothly and scroll to top
  const handleNavigate = (tab: 'home' | 'schemes' | 'track' | 'profile') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Triggers search filtering & switches to browser view
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveTab('schemes');
    }
  };

  // Filters schemes inside the browser list
  const filteredSchemes = SCHEMES.filter((scheme) => {
    const matchesCategory = activeCategory === 'All' || scheme.category.toLowerCase() === activeCategory.toLowerCase();
    const query = searchQuery.toLowerCase();
    
    const nameStr = currentLanguage === 'hi' && scheme.hiName ? scheme.hiName : scheme.name;
    const descStr = currentLanguage === 'hi' && scheme.hiDescription ? scheme.hiDescription : scheme.description;
    
    const matchesQuery = 
      nameStr.toLowerCase().includes(query) || 
      descStr.toLowerCase().includes(query) || 
      scheme.category.toLowerCase().includes(query) ||
      scheme.tags.some(tag => tag.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex flex-col font-sans select-none antialiased">
      {/* Top Banner & Heading Nav Bars */}
      <Header 
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} 
        onNavigate={handleNavigate} 
        activeTab={activeTab} 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />

      {/* Side Slide Hamburger Menu */}
      <SidebarDrawer 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={handleNavigate} 
        activeTab={activeTab} 
        currentLanguage={currentLanguage}
      />

      {/* Main Container Core */}
      <main className="flex-1 pt-24 pb-24 md:pb-12">
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Hero Section Banner */}
            <section className="relative overflow-hidden pt-12 pb-16 px-4 md:px-8 bg-gradient-to-b from-[#f3f6fc] to-[#f8f9ff]">
              <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0056c6]/8 border border-[#0056c6]/15 text-[#0056c6] shadow-xs">
                  <CheckCircle size={15} className="text-[#0056c6] shrink-0 animate-pulse" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">{t.heroSubtitle}</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-black text-[#001b44] tracking-tight max-w-3xl mx-auto leading-none">
                  {t.heroTitleBase}<span className="text-saffron underline decoration-wavy decoration-saffron/30">{t.heroTitleYojana}</span>{t.heroTitleEnd}
                </h1>
                
                <p className="text-slate-500 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
                  {t.heroDesc}
                </p>

                {/* Search Bar Input Container */}
                <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto bg-white p-1.5 rounded-full border border-slate-300 flex items-center shadow-lg gap-2">
                  <span className="p-2 pl-4 text-slate-400">
                    <Search size={18} />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full bg-transparent border-none py-2 text-sm outline-hidden focus:ring-0 text-[#001b44] font-medium placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className="bg-saffron text-white rounded-full px-6 py-2.5 text-xs font-bold hover:brightness-110 cursor-pointer transition-all whitespace-nowrap"
                  >
                    {t.searchBtn}
                  </button>
                </form>

                {/* Sub-Statistics Row */}
                <div className="grid grid-cols-3 gap-6 max-w-md mx-auto pt-4 text-center">
                  <div className="space-y-0.5">
                    <div className="text-[#001b44] font-black text-lg md:text-2xl tracking-tight">500+</div>
                    <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest leading-none">{t.activeSchemes}</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[#001b44] font-black text-lg md:text-2xl tracking-tight">12Cr+</div>
                    <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest leading-none">{t.beneficiaries}</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[#001b44] font-black text-lg md:text-2xl tracking-tight">28</div>
                    <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest leading-none">{t.statesCovered}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Categories Filter row */}
            <div className="bg-white border-y border-slate-200 overflow-x-auto whitespace-nowrap scrollbar-hide py-3">
              <div className="max-w-7xl mx-auto px-4 md:px-8 flex gap-3 text-xs">
                {[
                  { id: 'All', label: t.allCategories },
                  { id: 'Agriculture', label: t.agriculture, icon: Sprout },
                  { id: 'Health', label: t.health, icon: HeartPulse },
                  { id: 'Education', label: t.education, icon: GraduationCap },
                  { id: 'Housing', label: t.housing, icon: HomeIcon },
                  { id: 'Women', label: t.women, icon: Heart }
                ].map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 py-2 rounded-full font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#001b44] text-white'
                          : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                      }`}
                    >
                      {Icon && <Icon size={14} className={isActive ? 'text-saffron' : 'text-slate-400'} />}
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Popular Schemes sections */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                <div className="text-left space-y-1">
                  <h2 className="text-xl md:text-2xl font-black text-[#001b44] tracking-tight">{t.popularSchemesTitle}</h2>
                  <p className="text-xs text-slate-400 leading-none">{t.popularSchemesSubtitle}</p>
                </div>
                <button
                  onClick={() => handleNavigate('schemes')}
                  className="text-[#0056c6] font-bold text-xs flex items-center gap-1 hover:underline cursor-pointer py-1"
                >
                  {t.viewAllBtn}
                  <ArrowRight size={13} />
                </button>
              </div>

              {/* Central Database Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SCHEMES.map((scheme) => (
                  <SchemeCard
                    key={scheme.id}
                    scheme={scheme}
                    onOpenDetails={setSelectedDetailsScheme}
                    onOpenApply={setSelectedApplyScheme}
                    currentLanguage={currentLanguage}
                  />
                ))}
              </div>
            </section>

            {/* Step-by-Step guides section */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto py-12 bg-slate-50/70 border-y border-slate-100">
              <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
                <h2 className="text-xl md:text-2xl font-black text-[#001b44] tracking-tight">{t.howToApplyTitle}</h2>
                <p className="text-xs text-slate-400 leading-relaxed max-w-lg mx-auto">
                  {t.howToApplySubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { step: '1', title: t.step1Title, desc: t.step1Desc },
                  { step: '2', title: t.step2Title, desc: t.step2Desc },
                  { step: '3', title: t.step3Title, desc: t.step3Desc },
                  { step: '4', title: t.step4Title, desc: t.step4Desc },
                  { step: '5', title: t.step5Title, desc: t.step5Desc }
                ].map((item) => (
                  <div key={item.step} className="bg-white p-5 rounded-2xl border border-slate-150 space-y-4 shadow-xs relative text-left">
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-[#001b44] font-black text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 bg-saffron/10 border border-saffron/20 rounded-xl flex items-center justify-center text-saffron font-extrabold text-sm font-mono">
                      0{item.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-extrabold text-[#001b44]">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Smart Checker Interaction Section */}
            <section id="eligibility-widget" className="px-4 md:px-8 max-w-7xl mx-auto">
              <EligibilityChecker 
                onOpenApply={setSelectedApplyScheme} 
                onOpenDetails={setSelectedDetailsScheme} 
                currentLanguage={currentLanguage}
              />
            </section>

            {/* Dynamic Status Tracking Core Form */}
            <section id="tracking-widget" className="px-4 md:px-8 max-w-7xl mx-auto">
              <StatusTracker 
                applicationsList={applications} 
                initialSearchCode={trackedReferenceCode}
                onClearInitialCode={() => setTrackedReferenceCode('')}
                currentLanguage={currentLanguage}
              />
            </section>

            {/* Sub Footer highlights stats block */}
            <section className="px-4 md:px-8 max-w-7xl mx-auto pt-6 text-center">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { value: '500+', label: currentLanguage === 'en' ? 'Active central schemes' : t.centralInitiatives },
                  { value: '10M+', label: currentLanguage === 'en' ? 'Successful applicants' : t.successfulApplicants },
                  { value: '₹45B+', label: currentLanguage === 'en' ? 'Disbursed directly via DBT' : t.benefitsDisbursed },
                  { value: '24/7', label: currentLanguage === 'en' ? 'Secure digital up-time' : t.secureDbtUpTime }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-150 space-y-1 shadow-xs">
                    <div className="text-xl md:text-2xl font-black text-[#0056c6] tracking-tight">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest leading-none">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Tab: All Schemes Browser Screen */}
        {activeTab === 'schemes' && (
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 text-left">
            <div className="flex flex-col gap-2 pb-2 border-b border-slate-200">
              <h2 className="text-2xl font-black text-[#001b44] tracking-tight">
                {currentLanguage === 'en' ? 'Portal Schemes Index' : 'योजना सूची - पोर्टल'}
              </h2>
              <p className="text-xs text-slate-400 leading-none">
                {currentLanguage === 'en' 
                  ? 'Browse, search, and sort complete active schemes catalog.' 
                  : 'सक्रिय योजनाओं की संपूर्ण जानकारी खोजें, सॉर्ट करें और छानें।'}
              </p>
            </div>

            {/* Grid layout with left filter rail and right grid browser list */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              {/* Left filter rail */}
              <div className="col-span-1 bg-white p-5 rounded-2xl border border-slate-200 space-y-5">
                <div className="text-xs font-black text-slate-450 uppercase tracking-widest">
                  {currentLanguage === 'en' ? 'Quick Query' : 'त्वरित खोज'}
                </div>
                
                {/* Search query box */}
                <div className="relative font-sans">
                  <span className="absolute left-3 top-2.5 text-slate-450">
                    <Search size={14} />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={currentLanguage === 'en' ? 'Search query keywords...' : 'खोज शब्द डालें...'}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl py-2 pl-9 pr-3 text-xs outline-hidden focus:bg-white focus:ring-1 focus:ring-[#0056c6] text-slate-700 font-medium"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 px-1.5 py-1 text-[9px] font-bold text-slate-450 hover:text-slate-600 bg-slate-200 rounded shrink-0 cursor-pointer"
                    >
                      {currentLanguage === 'en' ? 'Clear' : 'साफ़ करें'}
                    </button>
                  )}
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-3">
                  <div className="text-xs font-black text-slate-450 uppercase tracking-widest">
                    {currentLanguage === 'en' ? 'Categories' : 'श्रेणियां'}
                  </div>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: 'All', label: currentLanguage === 'en' ? 'All Schemes' : 'सभी योजनाएं' },
                      { id: 'Agriculture', label: currentLanguage === 'en' ? 'Agriculture' : t.agriculture },
                      { id: 'Health', label: currentLanguage === 'en' ? 'Health' : t.health },
                      { id: 'Education', label: currentLanguage === 'en' ? 'Education' : t.education },
                      { id: 'Housing', label: currentLanguage === 'en' ? 'Housing' : t.housing },
                      { id: 'Women', label: currentLanguage === 'en' ? 'Women & Child' : t.women }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`text-left px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer ${
                          activeCategory === cat.id
                            ? 'bg-[#001b44] text-white font-bold'
                            : 'text-slate-650 hover:bg-slate-50'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* DBT notice sidebar badge */}
                <div className="border-t border-slate-100 pt-4 text-center">
                  <span className="text-[10px] text-green-india font-bold bg-green-50 px-2 py-1 rounded inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-india animate-ping"></span>
                    {currentLanguage === 'en' ? 'Direct Benefit Eligible' : 'डीबीटी / प्रत्यक्ष लाभ अंतरण योग्य'}
                  </span>
                </div>
              </div>

              {/* Right grid browser */}
              <div className="col-span-1 lg:col-span-3 space-y-4">
                <div className="text-xs font-bold text-slate-400">
                  {currentLanguage === 'en' 
                    ? `Showing ${filteredSchemes.length} matching welfare programs`
                    : `${filteredSchemes.length} योग्य जनकल्याणकारी कार्यक्रम दिखाए जा रहे हैं`}
                </div>
                
                {filteredSchemes.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredSchemes.map((scheme) => (
                      <SchemeCard
                        key={scheme.id}
                        scheme={scheme}
                        onOpenDetails={setSelectedDetailsScheme}
                        onOpenApply={setSelectedApplyScheme}
                        currentLanguage={currentLanguage}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-dashed border-slate-200 rounded-3xl p-12 text-center text-slate-400 space-y-2">
                    <p className="text-sm font-semibold">
                      {currentLanguage === 'en' ? 'No active schemes found matching query' : 'इस खोज के अनुरूप कोई सक्रिय योजना नहीं मिली'}
                    </p>
                    <p className="text-xs">
                      {currentLanguage === 'en' 
                        ? 'Adjust filters, reset keywords or browse all general categories.'
                        : 'फ़िल्टर बदलें, मुख्य शब्द रीसेट करें या सामान्य श्रेणियों को ब्राउज़ करें।'}
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('All');
                      }}
                      className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
                    >
                      {currentLanguage === 'en' ? 'Reset and Browse All' : 'रीसेट करें और सभी देखें'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Status Tracker screen */}
        {activeTab === 'track' && (
          <div className="max-w-3xl mx-auto px-4 md:px-8 space-y-8 text-left">
            <div className="flex flex-col gap-2 pb-2 border-b border-slate-200">
              <h2 className="text-2xl font-black text-[#001b44] tracking-tight">
                {currentLanguage === 'en' ? 'Citizen Tracker Portal' : 'नागरिक ट्रैकर पोर्टल'}
              </h2>
              <p className="text-xs text-slate-400 leading-none">
                {currentLanguage === 'en'
                  ? 'Query central node databases for real-time application processing loops.'
                  : 'वास्तविक समय आवेदन प्रक्रियाओं के लिए केंद्रीय नोड डेटाबेस में खोजें।'}
              </p>
            </div>

            <StatusTracker 
              applicationsList={applications} 
              initialSearchCode={trackedReferenceCode}
              onClearInitialCode={() => setTrackedReferenceCode('')}
            />
          </div>
        )}

        {/* Tab: User Profile / Citizen Records Screen */}
        {activeTab === 'profile' && (
          <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-8 text-left font-sans">
            <div className="flex flex-col gap-2 pb-2 border-b border-slate-200">
              <h2 className="text-2xl font-black text-[#001b44] tracking-tight">
                {currentLanguage === 'en' ? 'Citizen Profile' : 'नागरिक प्रोफाइल'}
              </h2>
              <p className="text-xs text-slate-400 leading-none">
                {currentLanguage === 'en'
                  ? 'Verify personal parameters, e-Aadhaar links and application logs ledger.'
                  : 'व्यक्तिगत विवरण, ई-आधार लिंक और आवेदन लॉग लेजर सत्यापित करें।'}
              </p>
            </div>

            {/* Profile Detail Headers layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Profile Card */}
              <div className="md:col-span-1 bg-white p-6 rounded-2xl border border-slate-200 space-y-5 shadow-xs flex flex-col justify-between">
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-[#001b44] text-white rounded-full flex items-center justify-center font-extrabold text-xl mx-auto shadow-md">
                    RS
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-extrabold text-slate-900">Ramesh Suder</h3>
                    <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                      {currentLanguage === 'en' ? 'Verified Citizen' : 'सत्यापित नागरिक'}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center text-slate-500">
                    <span>{currentLanguage === 'en' ? 'Email:' : 'ईमेल:'}</span>
                    <span className="font-semibold text-slate-700 truncate max-w-[130px]">{userEmail}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500">
                    <span>{currentLanguage === 'en' ? 'State:' : 'राज्य:'}</span>
                    <span className="font-semibold text-slate-700">
                      {currentLanguage === 'en' ? 'Maharashtra' : 'महाराष्ट्र'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500">
                    <span>{currentLanguage === 'en' ? 'Occupation:' : 'व्यवसाय:'}</span>
                    <span className="font-semibold text-slate-700">
                      {currentLanguage === 'en' ? 'Farmer' : 'किसान'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500">
                    <span>{currentLanguage === 'en' ? 'Aadhaar status:' : 'आधार स्थिति:'}</span>
                    <span className="text-green-india font-bold inline-flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded leading-none">
                      {currentLanguage === 'en' ? 'Linked' : 'संबद्ध (लिंक्ड)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right ledger listing applications */}
              <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                <h3 className="text-sm font-extrabold text-[#001b44] uppercase tracking-wide flex items-center gap-1.5 border-b border-slate-100 pb-3">
                  <BookmarkCheck size={16} className="text-[#0056c6]" />
                  {currentLanguage === 'en' ? 'Submitted Applications Ledger' : 'जमा किए गए आवेदनों का बहीखाता (खाता-बही)'}
                </h3>

                <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                  {/* Seeded index application representation when user hasn't made custom submissions */}
                  <div className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 text-left">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[8px] bg-green-100 text-green-800 px-1.5 py-0.5 rounded font-extrabold uppercase">
                          {currentLanguage === 'en' ? 'Agriculture' : t.agriculture}
                        </span>
                        <span className="text-[10px] font-mono font-extrabold text-slate-500">
                          {currentLanguage === 'en' ? 'Ref:' : 'संदर्भ:'} PKS-2026-4820183
                        </span>
                      </div>
                      <h4 className="text-xs font-extrabold text-slate-900 leading-none">
                        {currentLanguage === 'en' ? 'PM Kisan Samman Nidhi' : 'पीएम किसान सम्मान निधि'}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {currentLanguage === 'en' ? 'Submitted on:' : 'जमा करने की तिथि:'} 15 April 2026
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[10px] bg-green-100 text-green-india font-bold px-2 py-1 rounded leading-none">
                        {currentLanguage === 'en' ? 'Approved' : 'स्वीकृत'}
                      </span>
                      <button
                        onClick={() => {
                          setTrackedReferenceCode('PKS-2026-4820183');
                          setActiveTab('track');
                        }}
                        className="text-xs text-[#0056c6] hover:underline font-bold cursor-pointer"
                      >
                        {currentLanguage === 'en' ? 'Track' : 'ट्रैक करें'}
                      </button>
                    </div>
                  </div>

                  {/* Custom dyn registry */}
                  {applications.map((app) => (
                    <div key={app.referenceNumber} className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 text-left">
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[8px] bg-sky-100 text-[#0056c6] px-1.5 py-0.5 rounded font-extrabold uppercase">
                            {app.category}
                          </span>
                          <span className="text-[10px] font-mono font-extrabold text-slate-500">
                            {currentLanguage === 'en' ? 'Ref:' : 'संदर्भ:'} {app.referenceNumber}
                          </span>
                        </div>
                        <h4 className="text-xs font-extrabold text-slate-900 leading-none">
                          {app.schemeName}
                        </h4>
                        <p className="text-[10px] text-slate-400">
                          {currentLanguage === 'en' ? 'Submitted on:' : 'जमा करने की तिथि:'} {app.submissionDate}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-[10px] bg-[#001b44]/10 text-[#001b44] font-bold px-2 py-1 rounded leading-none">
                          {currentLanguage === 'en' ? 'In Audit' : 'ऑडिट प्रक्रिया में'}
                        </span>
                        <button
                          onClick={() => {
                            setTrackedReferenceCode(app.referenceNumber);
                            setActiveTab('track');
                          }}
                          className="text-xs text-[#0056c6] hover:underline font-bold cursor-pointer"
                        >
                          {currentLanguage === 'en' ? 'Track' : 'ट्रैक करें'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </main>

      {/* Footer component */}
      <Footer onNavigate={handleNavigate} currentLanguage={currentLanguage} />

      {/* Bottom Navigation Mobile Bar (visible on mobile layout viewport) */}
      <nav className="fixed bottom-0 w-full z-40 rounded-t-2xl bg-white border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] md:hidden py-1">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={() => handleNavigate('home')}
            className={`flex flex-col items-center gap-1 py-1.5 px-3 transition-colors ${
              activeTab === 'home' ? 'text-[#0056c6] font-bold' : 'text-slate-400 hover:text-[#001b44]'
            }`}
          >
            <HomeIcon size={18} className={activeTab === 'home' ? 'text-[#0056c6]' : 'text-slate-400'} />
            <span className="text-[10px] font-medium leading-none">
              {currentLanguage === 'en' ? 'Home' : 'होम'}
            </span>
          </button>

          <button
            onClick={() => handleNavigate('schemes')}
            className={`flex flex-col items-center gap-1 py-1.5 px-3 transition-colors ${
              activeTab === 'schemes' ? 'text-[#0056c6] font-bold' : 'text-slate-400 hover:text-[#001b44]'
            }`}
          >
            <Search size={18} className={activeTab === 'schemes' ? 'text-[#0056c6]' : 'text-slate-400'} />
            <span className="text-[10px] font-medium leading-none">
              {currentLanguage === 'en' ? 'Schemes' : 'योजनाएं'}
            </span>
          </button>

          <button
            onClick={() => handleNavigate('track')}
            className={`flex flex-col items-center gap-1 py-1.5 px-3 transition-colors ${
              activeTab === 'track' ? 'text-[#0056c6] font-bold' : 'text-slate-400 hover:text-[#001b44]'
            }`}
          >
            <FileCheck2 size={18} className={activeTab === 'track' ? 'text-[#0056c6]' : 'text-slate-400'} />
            <span className="text-[10px] font-medium leading-none">
              {currentLanguage === 'en' ? 'Track' : 'ट्रैक करें'}
            </span>
          </button>

          <button
            onClick={() => handleNavigate('profile')}
            className={`flex flex-col items-center gap-1 py-1.5 px-3 transition-colors ${
              activeTab === 'profile' ? 'text-[#0056c6] font-bold' : 'text-slate-400 hover:text-[#001b44]'
            }`}
          >
            <User size={18} className={activeTab === 'profile' ? 'text-[#0056c6]' : 'text-slate-400'} />
            <span className="text-[10px] font-medium leading-none">
              {currentLanguage === 'en' ? 'Profile' : 'प्रोफ़ाइल'}
            </span>
          </button>
        </div>
      </nav>

      {/* Detail Rules Guidelines Drawer/Modal toggles */}
      <SchemeDetailsModal
        scheme={selectedDetailsScheme}
        isOpen={selectedDetailsScheme !== null}
        onClose={() => setSelectedDetailsScheme(null)}
        onApply={(schemeId) => {
          const matched = SCHEMES.find(sc => sc.id === schemeId);
          if (matched) setSelectedApplyScheme(matched);
        }}
        currentLanguage={currentLanguage}
      />

      {/* Online Application Form slide-overs */}
      <ApplyModal
        scheme={selectedApplyScheme}
        isOpen={selectedApplyScheme !== null}
        onClose={() => setSelectedApplyScheme(null)}
        onSubmitApplication={handleAddApplication}
        userEmail={userEmail}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}
