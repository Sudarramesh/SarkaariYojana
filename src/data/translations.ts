export type Language = 'en' | 'hi';

export interface TranslationSet {
  // Navigation
  home: string;
  allSchemes: string;
  trackApplication: string;
  citizenProfile: string;
  latestUpdates: string;
  portal: string;
  govOfIndia: string;
  dbtActive: string;
  
  // Hero section
  heroSubtitle: string;
  heroTitleBase: string;
  heroTitleYojana: string;
  heroTitleEnd: string;
  heroDesc: string;
  searchPlaceholder: string;
  searchBtn: string;
  
  // Hero Stats
  activeSchemes: string;
  beneficiaries: string;
  statesCovered: string;
  benefitsDisbursed: string;
  secureDbtUpTime: string;
  successfulApplicants: string;
  centralInitiatives: string;

  // Categories
  allCategories: string;
  agriculture: string;
  health: string;
  education: string;
  housing: string;
  women: string;
  finance: string;

  // Tabs / Sections
  popularSchemesTitle: string;
  popularSchemesSubtitle: string;
  viewAllBtn: string;
  howToApplyTitle: string;
  howToApplySubtitle: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  step5Title: string;
  step5Desc: string;

  // Eligibility Checker
  smartCheckerTitle: string;
  smartCheckerDesc: string;
  dynamicEval: string;
  checkCriteriaAgeOccupation: string;
  checkIncomeThreshold: string;
  directShortcutLinks: string;
  evaluationComplete: string;
  matchingOpportunities: string;
  checkAgain: string;
  noMatchingSchemes: string;
  unmatchedAdjustFilters: string;
  notMatchingCount: string;
  findMySchemesBtn: string;
  genderCategoryLabel: string;
  allGenders: string;
  maleGender: string;
  femaleGender: string;
  ageYearsLabel: string;
  annualIncomeLabel: string;
  selectRangePlaceholder: string;
  stateLabel: string;
  selectOptionPlaceholder: string;
  occupationLabel: string;

  // Status Tracker
  trackerTitle: string;
  trackerDesc: string;
  trackInputPlaceholder: string;
  trackBtn: string;
  errorTrackPrompt: string;
  errorTrackNotFound: string;
  applicationStatusLabel: string;
  encryptedGatewayNode: string;
  expectedBy: string;

  // Profiles
  profileTitle: string;
  profileSubtitle: string;
  verifiedCitizen: string;
  emailLabel: string;
  stateLabelProfile: string;
  occupationLabelProfile: string;
  aadhaarStatusLabel: string;
  linkedStatus: string;
  submittedApplicationsLedger: string;
  inAudit: string;
  trackBtnProfile: string;
  submittedOn: string;

  // Card & Common Action Buttons
  guideBtn: string;
  applyNowBtn: string;
  closeBtn: string;
  onlineEForm: string;
  cancelBtn: string;
  submitEFormBtn: string;
  
  // Footer
  footerDesc: string;
  footerRights: string;
  footerHelpline: string;
  footerSupportBar: string;
  quickLinks: string;
  browseOptions: string;
  officialPortals: string;
}

export const TRANSLATIONS: Record<Language, TranslationSet> = {
  en: {
    home: 'Home',
    allSchemes: 'All Schemes',
    trackApplication: 'Track Application',
    citizenProfile: 'Citizen Profile',
    latestUpdates: 'LATEST UPDATES',
    portal: 'PORTAL',
    govOfIndia: 'Government of India',
    dbtActive: 'DBT Net Active',
    
    heroSubtitle: 'Official Schemes Portal',
    heroTitleBase: 'Every ',
    heroTitleYojana: 'Yojana',
    heroTitleEnd: ', Every Benefit — At Your Fingertips',
    heroDesc: 'Discover 500+ central and state government welfare schemes, check your matching eligibility rules, submit digital e-forms, and track status.',
    searchPlaceholder: 'Search schemes by name, category, or state details...',
    searchBtn: 'Search',
    
    activeSchemes: 'Active Schemes',
    beneficiaries: 'Beneficiaries',
    statesCovered: 'States Covered',
    benefitsDisbursed: 'Disbursed directly via DBT',
    secureDbtUpTime: 'Secure digital up-time',
    successfulApplicants: 'Successful applicants',
    centralInitiatives: 'Active central schemes',

    allCategories: 'All Categories',
    agriculture: 'Agriculture',
    health: 'Health',
    education: 'Education',
    housing: 'Housing',
    women: 'Women',
    finance: 'Finance',

    popularSchemesTitle: 'Recent & Popular Schemes',
    popularSchemesSubtitle: 'Showing prominent citizen welfare programs active this cycle.',
    viewAllBtn: 'View all 500+',
    howToApplyTitle: 'How to Apply — Step by Step',
    howToApplySubtitle: 'The simplified central unified pipeline for hassle-free direct audits and funding.',
    
    step1Title: 'Find Your Scheme',
    step1Desc: 'Scan or filter list indices. Use our smart matching Eligibility widget below.',
    step2Title: 'Check Eligibility',
    step2Desc: 'Input parameters representing age, state, brackets. Match results instantly.',
    step3Title: 'Prepare Docs',
    step3Desc: 'Consult requirements guides checklist. Scrape together PDFs or softcopies.',
    step4Title: 'Apply Online',
    step4Desc: 'Complete rapid digital form on portal nodes and sign with Aadhaar credentials.',
    step5Title: 'Track Status',
    step5Desc: 'Copy reference keys. Check live timelines to watch approvals disburse funds.',

    smartCheckerTitle: 'Smart Eligibility Checker',
    smartCheckerDesc: 'Answer a few simple questions representing household statistics — we will scan all central databases and display compatible welfare schemes instantly.',
    dynamicEval: 'Dynamic Evaluation',
    checkCriteriaAgeOccupation: 'Match against Age and Occupation parameters',
    checkIncomeThreshold: 'Check income threshold compatibility rules',
    directShortcutLinks: 'Direct shortcut links to application e-forms',
    evaluationComplete: 'Evaluation Complete',
    matchingOpportunities: 'Found {count} matching welfare opportunities',
    checkAgain: 'Check Again',
    noMatchingSchemes: 'No direct active matches found.',
    unmatchedAdjustFilters: 'Adjust your occupation filters or income limits to browse general category initiatives.',
    notMatchingCount: 'Other Non-Matching Schemes available on Portal: {count}',
    findMySchemesBtn: 'Find My Schemes',
    genderCategoryLabel: 'Gender Category',
    allGenders: 'All Genders',
    maleGender: 'Male',
    femaleGender: 'Female',
    ageYearsLabel: 'Age (Years)',
    annualIncomeLabel: 'Annual Income (₹)',
    selectRangePlaceholder: 'Select range',
    stateLabel: 'State',
    selectOptionPlaceholder: 'Select Option',
    occupationLabel: 'Occupation',

    trackerTitle: 'Track Your Application Status',
    trackerDesc: 'Enter your unique e-Form reference number (e.g. {code}) to query the status.',
    trackInputPlaceholder: 'Enter Reference (e.g. {code})',
    trackBtn: 'Track Status',
    errorTrackPrompt: 'Please enter an application reference code',
    errorTrackNotFound: 'No matching records found for Code: "{code}". Please verify and try again.',
    applicationStatusLabel: 'Application Status: {status}',
    encryptedGatewayNode: 'Encrypted DBT Gateway Node ID: 221-NIC-SECURE',
    expectedBy: 'Expected by',

    profileTitle: 'Citizen Profile',
    profileSubtitle: 'Verify personal parameters, e-Aadhaar links and application logs ledger.',
    verifiedCitizen: 'Verified Citizen',
    emailLabel: 'Email:',
    stateLabelProfile: 'State:',
    occupationLabelProfile: 'Occupation:',
    aadhaarStatusLabel: 'Aadhaar status:',
    linkedStatus: 'Linked',
    submittedApplicationsLedger: 'Submitted Applications Ledger',
    inAudit: 'In Audit',
    trackBtnProfile: 'Track',
    submittedOn: 'Submitted on: ',

    guideBtn: 'Guide',
    applyNowBtn: 'Apply Now',
    closeBtn: 'Close Guide',
    onlineEForm: 'Portal e-Form',
    cancelBtn: 'Cancel',
    submitEFormBtn: 'Submit e-Form',

    footerDesc: "India's most comprehensive government schemes portal. Providing unified citizens with accessible tools to discover, verify, and track benefits deserved.",
    footerRights: '© 2026 — Official Portal for Citizens. Always verify credentials on state-specific portals.',
    footerHelpline: 'National toll-free Helpline:',
    footerSupportBar: 'Jai Hind — सरकारी योजना पोर्टल',
    quickLinks: 'Quick Links',
    browseOptions: 'Browse Options',
    officialPortals: 'Official Portals',
  },
  hi: {
    home: 'होम',
    allSchemes: 'सभी योजनाएं',
    trackApplication: 'आवेदन ट्रैक करें',
    citizenProfile: 'नागरिक प्रोफ़ाइल',
    latestUpdates: 'नवीनतम अपडेट',
    portal: 'पोर्टल',
    govOfIndia: 'भारत सरकार',
    dbtActive: 'डीबीटी सक्रिय',
    
    heroSubtitle: 'आधिकारिक योजना पोर्टल',
    heroTitleBase: 'हर ',
    heroTitleYojana: 'योजना',
    heroTitleEnd: ', हर लाभ — आपकी उंगलियों पर',
    heroDesc: '५००+ केंद्रीय और राज्य सरकारी कल्याणकारी योजनाओं की खोज करें, अपनी पात्रता नियमों की जांच करें, डिजिटल ई-फॉर्म जमा करें और स्थिति ट्रैक करें।',
    searchPlaceholder: 'नाम, श्रेणी या राज्य विवरण द्वारा योजनाएं खोजें...',
    searchBtn: 'खोजें',
    
    activeSchemes: 'सक्रिय योजनाएं',
    beneficiaries: 'लाभार्थी',
    statesCovered: 'कवर किए गए राज्य',
    benefitsDisbursed: 'डीबीटी के माध्यम से सीधे वितरित किया गया',
    secureDbtUpTime: 'सुरक्षित डिजिटल अप-टाइम',
    successfulApplicants: 'सफल आवेदक',
    centralInitiatives: 'सक्रिय केंद्रीय योजनाएं',

    allCategories: 'सभी श्रेणियां',
    agriculture: 'कृषि',
    health: 'स्वास्थ्य',
    education: 'शिक्षा',
    housing: 'आवास',
    women: 'महिला कल्याण',
    finance: 'वित्त',

    popularSchemesTitle: 'हाल की और लोकप्रिय योजनाएं',
    popularSchemesSubtitle: 'इस चक्र में सक्रिय प्रमुख नागरिक कल्याण कार्यक्रम दिखा रहा है।',
    viewAllBtn: 'सभी ५००+ देखें',
    howToApplyTitle: 'आवेदन कैसे करें — चरण दर चरण',
    howToApplySubtitle: 'परेशानी मुक्त प्रत्यक्ष ऑडिट और धन के लिए सरलीकृत केंद्रीय एकीकृत पाइपलाइन।',
    
    step1Title: 'अपनी योजना खोजें',
    step1Desc: 'योजना सूची को स्कैन या फ़िल्टर करें। नीचे दिए गए हमारे स्मार्ट पात्रता टूल का उपयोग करें।',
    step2Title: 'पात्रता जाँचे',
    step2Desc: 'आयु, राज्य, आय सीमा का प्रतिनिधित्व करने वाले विवरण भरें। तुरंत परिणाम प्राप्त करें।',
    step3Title: 'दस्तावेज तैयार करें',
    step3Desc: 'आवश्यक दस्तावेज चेकलिस्ट की सलाह लें। पीडीएफ या सॉफ्ट कॉपी एकत्र करें।',
    step4Title: 'ऑनलाइन आवेदन करें',
    step4Desc: 'पोर्टल नोड्स पर त्वरित डिजिटल फॉर्म पूरा करें और आधार क्रेडेंशियल के साथ हस्ताक्षर करें।',
    step5Title: 'स्थिति ट्रैक करें',
    step5Desc: 'संदर्भ कोड कॉपी करें। भुगतान वितरण और अनुमोदन देखने के लिए लाइव टाइमलाइन देखें।',

    smartCheckerTitle: 'स्मार्ट पात्रता जांच',
    smartCheckerDesc: 'पारिवारिक विवरण से जुड़े कुछ सरल सवालों के जवाब दें — हम तुरंत सभी केंद्रीय डेटाबेस को स्कैन करेंगे और अनुकूल योजनाएं दिखाएंगे।',
    dynamicEval: 'गतिशील मूल्यांकन',
    checkCriteriaAgeOccupation: 'आयु और व्यवसाय मापदंडों के विरुद्ध मिलान करें',
    checkIncomeThreshold: 'आय सीमा अनुकूलता नियमों की जाँच करें',
    directShortcutLinks: 'एप्लिकेशन ई-फॉर्म के सीधे शॉर्टकट लिंक',
    evaluationComplete: 'मूल्यांकन पूर्ण',
    matchingOpportunities: '{count} मिलान कल्याणकारी अवसर मिले',
    checkAgain: 'पुनः जांचें',
    noMatchingSchemes: 'कोई सीधा सक्रिय मिलान नहीं मिला।',
    unmatchedAdjustFilters: 'कल्याणकारी योजनाओं को ब्राउज़ करने के लिए अपने व्यवसाय फ़िल्टर या आय सीमा को समायोजित करें।',
    notMatchingCount: 'पोर्टल पर उपलब्ध अन्य गैर-मिलान योजनाएं: {count}',
    findMySchemesBtn: 'मेरी योजनाएं खोजें',
    genderCategoryLabel: 'लिंग श्रेणी',
    allGenders: 'सभी लिंग',
    maleGender: 'पुरुष',
    femaleGender: 'महिला',
    ageYearsLabel: 'आयु (वर्ष)',
    annualIncomeLabel: 'वार्षिक आय (₹)',
    selectRangePlaceholder: 'आय सीमा चुनें',
    stateLabel: 'राज्य',
    selectOptionPlaceholder: 'विकल्प चुनें',
    occupationLabel: 'व्यवसाय',

    trackerTitle: 'अपने आवेदन की स्थिति ट्रैक करें',
    trackerDesc: 'स्थिति जानने के लिए अपना विशिष्ट ई-फॉर्म संदर्भ नंबर (जैसे {code}) दर्ज करें।',
    trackInputPlaceholder: 'संदर्भ नंबर दर्ज करें (जैसे {code})',
    trackBtn: 'स्थिति ट्रैक करें',
    errorTrackPrompt: 'कृपया आवेदन संदर्भ कोड दर्ज करें',
    errorTrackNotFound: 'कोड: "{code}" के लिए कोई मिलान रिकॉर्ड नहीं मिला। कृपया जांचें और पुनः प्रयास करें।',
    applicationStatusLabel: 'आवेदन की स्थिति: {status}',
    encryptedGatewayNode: 'एन्क्रिप्टेड डीबीटी गेटवे नोड आईडी: 221-NIC-SECURE',
    expectedBy: 'अपेक्षित तिथि',

    profileTitle: 'नागरिक प्रोफ़ाइल',
    profileSubtitle: 'व्यक्तिगत विवरण, ई-आधार लिंक और आवेदन लॉग लेजर सत्यापित करें।',
    verifiedCitizen: 'सत्यापित नागरिक',
    emailLabel: 'ईमेल:',
    stateLabelProfile: 'राज्य:',
    occupationLabelProfile: 'व्यवसाय:',
    aadhaarStatusLabel: 'आधार स्थिति:',
    linkedStatus: 'सम्बद्ध (Linked)',
    submittedApplicationsLedger: 'जमा किए गए आवेदनों का लेजर',
    inAudit: 'ऑडिट में',
    trackBtnProfile: 'ट्रैक करें',
    submittedOn: 'जमा करने की तिथि: ',

    guideBtn: 'मार्गदर्शिका',
    applyNowBtn: 'अभी आवेदन करें',
    closeBtn: 'गाइड बंद करें',
    onlineEForm: 'पोर्टल ई-फॉर्म',
    cancelBtn: 'रद्द करें',
    submitEFormBtn: 'ई-फॉर्म जमा करें',

    footerDesc: 'भारत का सबसे व्यापक सरकारी योजना पोर्टल। नागरिकों को सुलभ उपकरणों के साथ उन लाभों को खोजने, सत्यापित करने और ट्रैक करने के लिए प्रदान करता है जिसके वे पात्र हैं।',
    footerRights: '© २०२६ — नागरिकों के लिए आधिकारिक पोर्टल। हमेशा राज्य-विशिष्ट पोर्टलों पर विवरण सत्यापित करें।',
    footerHelpline: 'राष्ट्रीय टोल-फ्री हेल्पलाइन:',
    footerSupportBar: 'जय हिंद — सरकारी योजना पोर्टल',
    quickLinks: 'त्वरित लिंक',
    browseOptions: 'विकल्प खोजें',
    officialPortals: 'आधिकारिक पोर्टल',
  }
};
