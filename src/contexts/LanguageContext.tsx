import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'EN' | 'FR' | 'NL';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return saved === 'FR' || saved === 'FN' || saved === 'NL' ? (saved === 'FN' ? 'FR' : saved) : 'EN';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'FR' ? 'fr' : language === 'NL' ? 'nl' : 'en';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string) => {
    const translations = language === 'FR' ? translationsFR : translationsEN;
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translationsEN = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    blog: 'Blog',
    getQuote: 'Get Quote'
  },
  about: {
    ceo: 'CEO',
    aboutUs: 'About Us',
    service: 'Service',
    joinUs: 'Join Us',
    missionVision: 'Mission and Vision',
    refundPolicy: 'Refund and Cancellation policy',
    ourTeam: 'Our Team',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    terms: 'Terms & Condition',
    privacy: 'Privacy & Policy'
  },
  services: {
    translation: 'Translation Service',
    interpretation: 'Interpretation Service',
    apostille: 'Apostille Service',
    proofReading: 'Proof Reading Service',
    dtpTyping: 'DTP & Typing Service',
    attestation: 'Attestation Service',
    overseasEducation: 'Overseas Educational Consultant Service',
    carrierCoaching: 'Carrier Coaching Service',
    visaAssistance: 'Visa Assistance',
    studyAbroad: 'Study Abroad Service',
    languageTraining: 'Language Training Service',
    contentWriting: 'Content Writing Service',
    localization: 'Localization Service',
    voiceOverDubbing: 'Voice Over & Dubbing',
    graphicDesign: 'Graphic Designing Service',
    transcription: 'Transcription Service',
    subtitling: 'Subtitling Service'
  },
  home: {
    hero: {
      title: 'Certified Translation Services for Belgium',
      subtitle: 'Professional certified translation services for individuals, companies and institutions across Belgium.',
      getStarted: 'Get Started',
      whatsapp: 'WhatsApp'
    },
    faq: {
      question1: 'What languages do you support in Belgium?',
      answer1: 'We provide certified translation services in English, French, Dutch, German, Arabic, Spanish and 120+ languages for clients in Brussels, Antwerp, Ghent, Liege and across Belgium.',
      question2: 'How long does certified translation take in Belgium?',
      answer2: 'Most standard documents are delivered within 24-48 hours. Express certified translation is available for urgent Belgian administrative, legal, academic and business deadlines.',
      question3: 'Are your translations accepted in Belgium?',
      answer3: 'Yes, our certified translations are prepared for use with Belgian authorities, communes, universities, courts, employers and official institutions.',
      question4: 'How much does translation cost?',
      answer4: 'Pricing depends on language pair, document type, word count and urgency. Contact us for a Belgium-focused translation quote tailored to your document.',
      question5: 'Is my information secure?',
      answer5: 'Absolutely. We maintain strict confidentiality and use secure systems to protect your documents and personal information.'
    },
    process: {
      title: 'Our Working Process',
      subtitle: 'A clear workflow for certified translation projects in Belgium',
      step1Title: 'Submit Your Document',
      step1Desc: 'Send your document securely and tell us the required Belgian authority, city, language pair and deadline.',
      step2Title: 'Expert Translation',
      step2Desc: 'Your document is translated by qualified linguists with subject expertise in Belgian legal, business, academic and administrative terminology.',
      step3Title: 'Quality Assurance',
      step3Desc: 'Each translation is checked for terminology, formatting, accuracy and Belgian French, Dutch or English usage.',
      step4Title: 'Secure Delivery',
      step4Desc: 'Receive your completed translation on time, ready for professional, academic or official use in Belgium.',
      ctaText: 'Ready to experience our seamless process?',
      ctaButton: 'Start Your Belgium Translation'
    },
    industries: {
      title: 'Industries We Serve',
      subtitle: 'Specialized expertise across multiple sectors',
      legal: 'Legal',
      medical: 'Medical',
      corporate: 'Corporate',
      education: 'Education',
      marketing: 'Marketing'
    },
    whyUs: {
      title: 'Why Choose Us',
      subtitle: 'Belgium-focused translation services you can trust',
      feature1Title: 'Accurate & Certified Translators',
      feature1Desc: 'Our translators combine professional credentials with experience in Belgian administrative, legal, medical, corporate and academic content.',
      feature2Title: 'Fast and Reliable',
      feature2Desc: '24-48 hour delivery for many standard documents, with express options for urgent Brussels, Antwerp, Ghent and Liege requests.',
      feature3Title: 'Secure & Confidential',
      feature3Desc: 'Your documents are handled securely and confidentially, from Belgian certificates to business records.'
    },
    aboutCompany: {
      title: 'Your Trusted Translation Partner in Belgium',
      description: "We help people and organizations communicate clearly in Belgium's multilingual market. Our mission is to provide accurate certified translations, localization and language support for Brussels, Flanders, Wallonia and beyond.",
      clients: 'Clients',
      languages: 'Languages',
      experience: 'Years Experience'
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Trusted by clients across Belgium',
      client1Name: 'Sophie Janssens',
      client1Location: '🇺🇸 United States',
      client1Text: 'Excellent certified translation service in Brussels. My legal documents were translated quickly, accurately and accepted without issues.',
      client2Name: 'Karim Benali',
      client2Location: 'Antwerp, Belgium',
      client2Text: 'Fast and reliable translation support for our Antwerp business documents. The terminology and formatting were spot on.',
      client3Name: 'Marie Laurent',
      client3Location: '🇪🇸 Spain',
      client3Text: 'Outstanding quality for French and Dutch website localization in Belgium. Our content now sounds natural to local customers.'
    },
    contactForm: {
      title: 'Get Your Translation Started Today',
      subtitle: 'Fast, accurate and certified translations for Belgium in 120+ languages.',
      feature1: 'Certified Translators',
      feature1Desc: 'Belgian-market linguists with professional credentials',
      feature2: 'Fast Turnaround',
      feature2Desc: '24-48 hour delivery with rush options',
      feature3: 'Secure & Confidential',
      feature3Desc: 'Secure handling for personal, legal and business documents',
      isoCertified: 'ISO Certified',
      clients: '10K+ Projects',
      support: '24/7 Support',
      getQuote: 'Get Quote',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      languagePair: 'Select Language Pair',
      enToAr: 'English → Arabic',
      arToEn: 'Arabic → English',
      enToFr: 'English → French',
      enToEs: 'English → Spanish',
      enToCn: 'English → Chinese',
      enToHi: 'English → Hindi',
      otherPair: 'Other Language Pair',
      uploadText: 'Drop your document here or click to browse',
      uploadFormat: 'PDF, DOC, DOCX, JPG (Max 10MB)',
      additionalNotes: 'Additional Notes (Optional)',
      securityNote: 'Your information is secure and confidential'
    },
    cta: {
      title: 'Ready to Get Started?',
      subtitle: 'Get your documents translated by certified professionals for Belgium today',
      button: 'Request a Quote'
    }
  },
  contact: {
    hero: {
      badge: 'Available 24/7',
      title: 'Get in Touch With Us',
      subtitle: "We're here to help with certified translation, interpretation and localization needs across Belgium."
    },
    form: {
      title: 'Send Us a Message',
      subtitle: "Fill out the form below and we'll get back to you promptly",
      fullName: 'Full Name *',
      email: 'Email Address *',
      phone: 'Phone Number',
      language: 'Select Language',
      languagePlaceholder: 'Choose language pair',
      uploadDoc: 'Upload Document (Optional)',
      uploadText: 'Drop your file here or click to browse',
      uploadFormat: 'PDF, DOC, DOCX, JPG, PNG (Max 10MB)',
      uploadSuccess: 'File uploaded successfully',
      message: 'Message / Description *',
      messagePlaceholder: 'Tell us which Belgian authority, city, language pair or business goal your translation is for...',
      sendButton: 'Send Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      phonePlaceholder: '+32 2 XXX XXXX'
    },
    faq: {
      title: 'Quick Questions',
      subtitle: 'Common questions about our services',
      question1: 'How long does certified translation take in Belgium?',
      answer1: 'Standard translations are delivered within 24-48 hours. Express services are available for urgent needs with delivery in 4-6 hours.',
      question2: 'Do you offer certified translations?',
      answer2: 'Yes, our certified translations are prepared for use with Belgian authorities, communes, universities, courts, employers and official institutions.',
      question3: 'How many languages do you support?',
      answer3: 'We provide professional translation services in 120+ languages with certified linguists for Brussels, Antwerp, Ghent, Liege and all of Belgium.',
      question4: 'What are your rates?',
      answer4: 'Pricing varies based on language pair, document type, and urgency. Contact us for a free personalized quote.'
    },
    contactDetails: {
      title: 'Other Ways to Reach Us',
      subtitle: "We're available through multiple channels",
      emailTitle: 'Email Support',
      emailAddress: 'sales@honeytranslations.com',
      emailNote: 'We reply within one Belgian business day',
      phoneTitle: 'Phone / WhatsApp',
      phoneNumber: '+32 2 XXX XXXX',
      phoneNote: 'Available 9AM-6PM CET',
      locationTitle: 'Office Location',
      locationAddress: 'Brussels, Belgium',
      locationNote: 'Belgium-wide support by appointment and online',
      hoursTitle: 'Business Hours',
      hoursWeekday: 'Mon-Fri: 9AM-6PM',
      hoursSunday: 'Weekend: By appointment'
    },
    map: {
      title: 'Visit Our Office',
      subtitle: 'Serving Brussels and all major Belgian cities',
      location: 'Brussels, Belgium',
      center: 'Belgium Translation Services Center'
    },
    cta: {
      title: 'Need Help with a Translation?',
      subtitle: 'Our expert team is ready to assist you with professional translation services',
      button: 'Talk to Our Team'
    }
  },
  servicesPage: {
    hero: {
      badge: 'Professional Translation Solutions',
      title: 'Translation That Feels Natural',
      subtitle: "Professional translation services designed for Belgium's multilingual business, legal, academic and public-sector environment.",
      tagline: 'Accurate. Certified. Belgium-focused.'
    },
    overview: {
      paragraph1: 'Honey Translation offers professional language solutions for individuals, companies, institutions and organizations across Belgium.',
      paragraph2: 'We preserve meaning, tone and local relevance for Belgian French, Dutch, German and English audiences.',
      paragraph3: 'Our services are flexible, scalable and tailored to official, commercial and digital communication needs in Belgium.'
    },
    core: {
      title: 'Core Services',
      subtitle: 'What We Translate',
      service1Title: 'Business & Corporate Translation Belgium',
      service1Desc: 'Reports, presentations, emails, proposals and internal documents translated for Belgian companies, startups, NGOs and EU-facing teams.',
      service2Title: 'Website & Digital Content Localization Belgium',
      service2Desc: 'Websites, landing pages, apps and online content localized for French-speaking, Dutch-speaking and English-speaking audiences in Belgium.',
      service3Title: 'Marketing & Brand Translation',
      service3Desc: 'Brochures, ads, campaigns and brand messaging adapted for Belgian customers in Brussels, Flanders and Wallonia.',
      service4Title: 'Legal & Official Translation Belgium',
      service4Desc: 'Contracts, certificates, agreements and official documents translated with strict confidentiality for Belgian administrative and legal use.',
      service5Title: 'Academic & Personal Translation',
      service5Desc: 'Diplomas, transcripts, research papers, CVs, residence documents and personal records for Belgian universities, employers and authorities.',
      service6Title: 'Technical Documentation',
      service6Desc: 'Manuals, specifications and technical content translated with precise terminology for Belgian engineering, medical, IT and industrial sectors.'
    },
    specialized: {
      title: 'Specialized Solutions',
      subtitle: 'Beyond Translation',
      intro: 'In addition to translation, we provide language support services to ensure clarity and consistency.',
      service1Title: 'Proofreading & Editing',
      service1Desc: 'Refine and perfect your translated content',
      service2Title: 'Localization Services',
      service2Desc: 'Adaptation for Belgian French, Dutch and English audiences',
      service3Title: 'Content Adaptation',
      service3Desc: 'Rewrite content for Belgium-specific search intent and local context',
      service4Title: 'Multilingual Content Review',
      service4Desc: 'Quality checks across languages',
      outro: 'These services ensure your message sounds natural and professional.'
    },
    workflow: {
      title: 'Our Workflow',
      subtitle: 'How We Work',
      step1Title: 'Content Review',
      step1Desc: 'We assess your content, purpose, and target audience.',
      step2Title: 'Expert Translation',
      step2Desc: 'Professional translators handle your project with precision.',
      step3Title: 'Quality Assurance',
      step3Desc: 'Multiple checks for accuracy, tone, and clarity.',
      step4Title: 'Final Delivery',
      step4Desc: 'On-time delivery with post-delivery support if needed.'
    },
    industries: {
      title: 'Industries We Serve',
      subtitle: "We work with clients across Belgium's key industries",
      industry1: 'Belgian Companies & Startups',
      industry2: 'E-commerce',
      industry3: 'Education & Research',
      industry4: 'Legal, Government & Communes',
      industry5: 'Marketing & Media',
      industry6: 'Residents, Expats & Freelancers',
      note: 'Every industry receives the same level of care and professionalism.'
    },
    quality: {
      title: 'Quality & Confidentiality',
      subtitle: 'Our Promise to You',
      feature1Title: 'Strict Confidentiality',
      feature1Desc: 'All documents are handled with complete privacy and security, from Belgian identity documents and certificates to business contracts and medical files.',
      feature2Title: 'Human-Reviewed Translations',
      feature2Desc: 'Every translation is reviewed by native speakers to ensure authenticity and natural flow.',
      feature3Title: 'Belgian Cultural & Linguistic Accuracy',
      feature3Desc: 'We preserve meaning, tone and local language usage for French, Dutch, German and English communication in Belgium.',
      feature4Title: 'Commitment to Deadlines',
      feature4Desc: 'On-time delivery guaranteed. We respect your timeline and work accordingly.',
      note: 'Your content is handled with complete care and respect.'
    },
    whyUs: {
      title: 'Why Choose Honey Translation Belgium',
      subtitle: 'Our Sweet Advantage',
      feature1Title: 'Human-Centered Approach',
      feature1Desc: 'We prioritize meaning and context over word-for-word translation.',
      feature2Title: 'Clear Communication',
      feature2Desc: 'Transparent process with updates throughout your project.',
      feature3Title: 'Consistent Quality',
      feature3Desc: 'Every project meets our rigorous standards for excellence.',
      feature4Title: 'Flexible Service Options',
      feature4Desc: 'Scalable solutions for individuals, SMEs, legal firms, healthcare providers, universities and Belgian market expansion.',
      feature5Title: 'Client-Focused Support',
      feature5Desc: 'Dedicated support for Belgium translation requests, deadlines, formats and delivery requirements.',
      feature6Title: 'Long-Term Partnerships',
      feature6Desc: 'We build long-term partnerships with clients who need reliable language support in Belgium.',
      badge: 'Guaranteed',
      closing: 'We build long-term Belgium language partnerships, not just translations.'
    },
    specialized: {
      title: 'Specialized Solutions',
      subtitle: 'Beyond Translation',
      intro: 'In addition to translation, we provide language support services to ensure clarity and consistency.',
      service1: 'Proofreading & Editing',
      service1Desc: 'Refine and perfect your translated content',
      service2: 'Localization Services',
      service2Desc: 'Adaptation for Belgian French, Dutch and English audiences',
      service3: 'Content Adaptation',
      service3Desc: 'Rewrite content for Belgium-specific search intent and local context',
      service4: 'Multilingual Content Review',
      service4Desc: 'Quality checks across languages',
      outro: 'These services ensure your message sounds natural and professional.'
    },
    workflow: {
      title: 'Our Workflow',
      subtitle: 'How We Work',
      step1: 'Content Review',
      step1Desc: 'We assess your content, purpose, and target audience.',
      step2: 'Expert Translation',
      step2Desc: 'Professional translators handle your project with precision.',
      step3: 'Quality Assurance',
      step3Desc: 'Multiple checks for accuracy, tone, and clarity.',
      step4: 'Final Delivery',
      step4Desc: 'On-time delivery with post-delivery support if needed.'
    },
    industries: {
      title: 'Industries We Serve',
      subtitle: "We work with clients across Belgium's key industries",
      industry1: 'Belgian Companies & Startups',
      industry2: 'E-commerce',
      industry3: 'Education & Research',
      industry4: 'Legal, Government & Communes',
      industry5: 'Marketing & Media',
      industry6: 'Residents, Expats & Freelancers',
      note: 'Every industry receives the same level of care and professionalism.'
    },
    quality: {
      title: 'Quality & Confidentiality',
      subtitle: 'Our Promise to You',
      feature1: 'Strict Confidentiality',
      feature1Desc: 'All documents are handled with complete privacy and security, from Belgian identity documents and certificates to business contracts and medical files.',
      feature2: 'Human-Reviewed Translations',
      feature2Desc: 'Every translation is reviewed by native speakers to ensure authenticity and natural flow.',
      feature3: 'Belgian Cultural & Linguistic Accuracy',
      feature3Desc: 'We preserve meaning, tone and local language usage for French, Dutch, German and English communication in Belgium.',
      feature4: 'Commitment to Deadlines',
      feature4Desc: 'On-time delivery guaranteed. We respect your timeline and work accordingly.',
      note: 'Your content is handled with complete care and respect.'
    },
    whyUs: {
      title: 'Why Choose Honey Translation Belgium',
      subtitle: 'Our Sweet Advantage',
      feature1: 'Human-Centered Approach',
      feature1Desc: 'We prioritize meaning and context over word-for-word translation.',
      feature2: 'Clear Communication',
      feature2Desc: 'Transparent process with updates throughout your project.',
      feature3: 'Consistent Quality',
      feature3Desc: 'Every project meets our rigorous standards for excellence.',
      feature4: 'Flexible Service Options',
      feature4Desc: 'Scalable solutions for individuals, SMEs, legal firms, healthcare providers, universities and Belgian market expansion.',
      feature5: 'Client-Focused Support',
      feature5Desc: 'Dedicated support for Belgium translation requests, deadlines, formats and delivery requirements.',
      feature6: 'Long-Term Partnerships',
      feature6Desc: 'We build long-term partnerships with clients who need reliable language support in Belgium.',
      badge: 'Guaranteed',
      closing: 'We build long-term Belgium language partnerships, not just translations.'
    },
    cta: {
      title: 'Ready to Make Your Message Global?',
      subtitle: 'Let Honey Translation handle your Belgium translation, localization and multilingual content needs with clarity and confidence.',
      button1: 'Request a Quote',
      button2: 'Contact Us',
      badge1: 'Secure & Confidential',
      badge2: 'Fast Turnaround',
      badge3: 'Quality Guaranteed'
    }
  },
  footer: {
    tagline: 'Certified Translation Services for Belgium',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About',
    services: 'Services',
    industries: 'Industries',
    contact: 'Contact',
    faqs: 'FAQs',
    servicesTitle: 'Services',
    docTranslation: 'Document Translation',
    legalTranslation: 'Legal Translation',
    medicalTranslation: 'Medical Translation',
    technicalTranslation: 'Technical Translation',
    subtitles: 'Subtitles & Transcription',
    websiteLocalization: 'Website Localization',
    contactTitle: 'Contact',
    phone: 'Phone',
    phoneNumber: '7299005577',
    email: 'Email',
    emailAddress: 'sales@honeytranslations.com',
    location: 'Location',
    officeLocation: 'Remote',
    copyright: '© 2026 Honey Translations Belgium. All Rights Reserved.'
  },
  popup: {
    title: 'Get Your Translation Done Today',
    fast: 'Fast',
    accurate: 'Accurate',
    certified: 'Certified',
    description: 'Fill in your details and our expert team will contact you within 24 hours with a personalized quote.',
    namePlaceholder: 'Your Full Name',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+32 4XX XX XX XX',
    submitButton: 'Get Translation',
    securityNote: 'Your information is secure and confidential'
  },
  common: {
    loading: 'Loading...',
    submit: 'Submit',
    cancel: 'Cancel',
    close: 'Close',
    readMore: 'Read More',
    learnMore: 'Learn More',
    viewAll: 'View All',
    backToHome: 'Back to Home',
    required: 'Required',
    optional: 'Optional'
  },
  aboutPage: {
    hero: {
      badge: 'About Honey Translation Belgium',
      title: 'Clarity That Speaks Every Language',
      subtitle: 'We make communication simple, accurate, and human. Honey Translation helps individuals, companies and institutions in Belgium communicate across French, Dutch, German, English and 120+ languages with precision, care and cultural understanding.',
      tagline: 'Sweet Clarity. Global Reach.'
    },
    whoWeAre: {
      badge: 'Who We Are',
      title: 'Human-Centered Translation',
      paragraph1: 'Honey Translation Belgium is a professional language service provider focused on accurate certified translation, localization and multilingual content for the Belgian market.',
      paragraph2: 'We believe translation is more than words — it\'s meaning, tone, and intent.',
      paragraph3: 'Our team works closely with clients to ensure every message feels natural, clear, and authentic in the target language.',
      stat1: '120+',
      stat1Label: 'Languages',
      stat2: '10K+',
      stat2Label: 'Projects',
      stat3: '15+',
      stat3Label: 'Years'
    },
    whatMakesUsDifferent: {
      badge: 'What Makes Us Different',
      title: 'Our Sweet Advantage',
      subtitle: 'We don\'t just translate — we adapt your message for real people.',
      feature1: 'Human-Reviewed Translations',
      feature1Desc: 'Every translation is reviewed by native speakers to ensure authenticity and accuracy.',
      feature2: 'Cultural Accuracy',
      feature2Desc: 'Not just literal meaning — we capture tone, context, and cultural nuances.',
      feature3: 'Fast Turnaround',
      feature3Desc: 'Quick delivery without compromising quality or attention to detail.',
      feature4: 'Clear Communication',
      feature4Desc: 'Transparent process with regular updates and open dialogue throughout.',
      feature5: 'Trusted by Professionals',
      feature5Desc: 'Used by growing brands, SMEs, professionals, students and residents across Belgium.',
      feature6: 'Quality Guaranteed',
      feature6Desc: 'Every project meets our rigorous standards for excellence and precision.',
      verifiedAdvantage: 'Verified Advantage'
    },
    ourServices: {
      badge: 'Our Services',
      title: 'What We Translate',
      subtitle: 'Every project is handled with confidentiality and care.',
      service1: 'Business & Corporate Documents',
      service1Desc: 'Professional translation of contracts, reports, proposals, presentations and internal communications for Belgian and EU-facing business operations.',
      service2: 'Websites & Digital Content',
      service2Desc: 'Localization of websites, apps, software interfaces, and digital platforms to engage audiences in their native language.',
      service3: 'Marketing & Brand Materials',
      service3Desc: 'Culturally adapted marketing content, social media content, ads, and brand messaging that resonates locally.',
      service4: 'Legal & Official Documents',
      service4Desc: 'Certified translation of legal contracts, certificates, immigration documents, and official records accepted by authorities.',
      service5: 'Personal & Academic Translations',
      service5Desc: 'Accurate translation of academic transcripts, research papers, personal documents, and educational materials.'
    },
    ourProcess: {
      title: 'Our Process',
      subtitle: 'Simple. Clear. Reliable.',
      step1: 'Understanding Your Needs',
      step1Desc: 'We analyze your content, audience, and goals.',
      step2: 'Professional Translation',
      step2Desc: 'Expert translators work on your project with precision.',
      step3: 'Review & Quality Check',
      step3Desc: 'Every translation is checked for accuracy and tone.',
      step4: 'Delivery & Support',
      step4Desc: 'On-time delivery with ongoing support if needed.'
    },
    ourMission: {
      badge: 'Our Mission',
      title: 'Why We Exist',
      paragraph1: 'Our mission is to eliminate language barriers and help people communicate freely across borders.',
      paragraph2: 'We aim to provide translations that feel natural, respectful, and meaningful — just like a conversation in your native language.'
    },
    ourVision: {
      badge: 'Our Vision',
      title: 'Where We\'re Going',
      paragraph1: 'We envision a world where language is never a limitation.',
      paragraph2: 'Honey Translation strives to be a trusted Belgium translation partner for businesses and individuals seeking clear, honest and high-quality language services.'
    },
    whatWeStandFor: {
      title: 'What We Stand For',
      subtitle: 'Every translation reflects our values.',
      value1: 'Accuracy',
      value1Desc: 'Precision in every word and phrase',
      value2: 'Integrity',
      value2Desc: 'Honest and transparent service',
      value3: 'Confidentiality',
      value3Desc: 'Your data is always protected',
      value4: 'Cultural Respect',
      value4Desc: 'Honoring every language and culture',
      value5: 'Client Satisfaction',
      value5Desc: 'Your success is our priority'
    },
    cta: {
      title: 'Let\'s Translate Together',
      subtitle: 'You have content that needs to speak clearly across languages? We\'re here to help.',
      button1: 'Contact Us',
      button2: 'View Services',
      badge1: 'ISO Certified',
      badge2: 'Trusted by 10,000+ Clients',
      badge3: '24/7 Support'
    }
  },
  teamPage: {
    hero: {
      badge: 'Meet Our Team',
      title: 'The People Behind the Words',
      subtitle: 'Meet the professionals who bring clarity, precision, and cultural understanding to every translation.',
      tagline: 'Human Expertise. Global Perspective.'
    },
    whoWeAre: {
      badge: 'Who We Are',
      title: 'A Global Language Team',
      paragraph1: "Honey Translation is powered by a diverse team of language professionals serving Belgium's multilingual regions and cross-border communication needs.",
      paragraph2: 'Our translators, editors, and reviewers collaborate to ensure every project meets high standards of accuracy, tone, and meaning.',
      stat1: '200+',
      stat1Label: 'Professionals',
      stat2: '80+',
      stat2Label: 'Languages',
      stat3: '40+',
      stat3Label: 'Countries'
    },
    teamStructure: {
      badge: 'Our Team Structure',
      title: 'How We Work Together',
      subtitle: 'Our team includes specialized roles that collaborate seamlessly',
      role1: 'Professional Translators',
      role1Desc: 'Native speakers with domain expertise translating with accuracy and cultural sensitivity.',
      role2: 'Proofreaders & Editors',
      role2Desc: 'Quality specialists ensuring precision, consistency, and grammatical excellence.',
      role3: 'Language Specialists',
      role3Desc: 'Experts in technical, legal, medical, and industry-specific specialized translations.',
      role4: 'Localization Experts',
      role4Desc: 'Cultural consultants adapting content for regional and cultural relevance.',
      role5: 'Project Coordinators',
      role5Desc: 'Dedicated managers ensuring smooth workflow and on-time delivery.',
      bottomText: 'Every role plays a key part in delivering reliable translations.'
    },
    ourExperts: {
      title: 'Our Experts',
      subtitle: 'Experience You Can Trust',
      block1Title: 'Rigorous Selection Process',
      block1Desc: 'Our team members are selected based on their expertise, language mastery, and attention to detail.',
      block2Title: 'Domain Expertise',
      block2Desc: 'Many of our professionals have experience in business, legal, academic, and marketing translations — ensuring domain-specific accuracy.',
      area1: 'Business',
      area2: 'Legal',
      area3: 'Academic',
      area4: 'Marketing'
    },
    ourValues: {
      title: 'Our Values as a Team',
      subtitle: 'What Guides Us',
      value1: 'Accuracy & Quality',
      value1Desc: 'Precision in every word',
      value2: 'Cultural Awareness',
      value2Desc: 'Context and nuance',
      value3: 'Respect & Collaboration',
      value3Desc: 'Working together',
      value4: 'Clear Communication',
      value4Desc: 'Open dialogue',
      value5: 'Commitment to Deadlines',
      value5Desc: 'On-time delivery',
      bottomText: 'These values shape how we work together and serve our clients.'
    },
    collaboration: {
      badge: 'Collaboration & Culture',
      title: 'How We Work',
      paragraph1: 'We believe that great translations come from collaboration.',
      paragraph2: 'Our team works closely across Belgian language communities and client schedules, maintaining open communication and consistent quality throughout every project.',
      aspect1: 'Cross-Functional',
      aspect2: 'Belgian Network',
      aspect3: 'Open Communication',
      aspect4: 'Shared Goals'
    },
    qualityAssurance: {
      badge: 'Quality Assurance',
      title: 'Our Final Check',
      paragraph1: 'Before delivery, every project goes through a dedicated review process.',
      paragraph2: 'Our quality assurance team ensures translations are accurate, culturally appropriate, and aligned with client expectations.',
      step1: 'Accuracy Check',
      step2: 'Cultural Review',
      step3: 'Client Alignment'
    },
    joinTeam: {
      title: 'Join Our Team',
      subtitle: 'We are always open to working with skilled language professionals who share our commitment to quality.',
      question: 'Interested in joining Honey Translation Belgium?',
      button1: 'Join Us',
      button2: 'Contact Us',
      badge1: 'Global Team',
      badge2: 'Expert Professionals',
      badge3: 'Collaborative Culture'
    }
  }
};

const translationsFR = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    contact: 'Contact',
    blog: 'Blog',
    getQuote: 'Obtenir un devis'
  },
  about: {
    ceo: 'PDG',
    aboutUs: 'À propos de nous',
    service: 'Service',
    joinUs: 'Rejoignez-nous',
    missionVision: 'Mission et Vision',
    refundPolicy: "Politique de remboursement et d'annulation",
    ourTeam: 'Notre équipe',
    pricing: 'Tarification',
    testimonials: 'Témoignages',
    terms: 'Termes et conditions',
    privacy: 'Politique de confidentialité'
  },
  services: {
    translation: 'Service de traduction',
    interpretation: "Service d'interprétation",
    apostille: "Service d'apostille",
    proofReading: 'Service de relecture',
    dtpTyping: 'Service de PAO et de saisie',
    attestation: "Service d'attestation",
    overseasEducation: "Service de consultation en éducation à l'étranger",
    carrierCoaching: 'Service de coaching de carrière',
    visaAssistance: 'Assistance visa',
    studyAbroad: "Service d'études à l'étranger",
    languageTraining: 'Service de formation linguistique',
    contentWriting: 'Service de rédaction de contenu',
    localization: 'Service de localisation',
    voiceOverDubbing: 'Voix off et doublage',
    graphicDesign: 'Service de conception graphique',
    transcription: 'Service de transcription',
    subtitling: 'Service de sous-titrage'
  },
  home: {
    hero: {
      title: 'Services de traduction certifiée en Belgique',
      subtitle: 'Traductions certifiées, localisation et interprétation pour particuliers, entreprises et institutions en Belgique.',
      getStarted: 'Commencer',
      whatsapp: 'WhatsApp'
    },
    faq: {
      question1: 'Quelles langues proposez-vous en Belgique ?',
      answer1: 'Nous fournissons des services de traduction certifiés dans plus de 120 langues, notamment l\'arabe, l\'anglais, le français, l\'espagnol, le chinois, l\'allemand et bien d\'autres.',
      question2: 'Quel est le delai pour une traduction certifiee en Belgique ?',
      answer2: 'La plupart des documents standard sont livrés sous 24 à 48 heures. Un service express est disponible pour les démarches belges urgentes.',
      question3: 'Vos traductions sont-elles acceptées en Belgique ?',
      answer3: 'Oui, nos traductions certifiées sont préparées pour les communes, universités, tribunaux, employeurs et institutions en Belgique.',
      question4: 'Combien coûte la traduction ?',
      answer4: 'Les prix varient en fonction de la paire de langues, du type de document et de l\'urgence. Contactez-nous pour un devis gratuit adapté à vos besoins spécifiques.',
      question5: 'Mes informations sont-elles sécurisées ?',
      answer5: 'Absolument. Nous maintenons une confidentialité stricte et utilisons des systèmes sécurisés pour protéger vos documents et informations personnelles.'
    },
    process: {
      title: 'Notre processus de travail',
      subtitle: 'Un processus clair pour vos traductions certifiees en Belgique',
      step1Title: 'Soumettez votre document',
      step1Desc: "Envoyez votre document en toute sécurité et indiquez la ville, l'autorité belge, la paire de langues et le délai.",
      step2Title: 'Traduction par des experts',
      step2Desc: 'Votre document est traduit par des linguistes qualifiés, habitués aux contenus juridiques, administratifs, académiques et professionnels belges.',
      step3Title: 'Assurance qualité',
      step3Desc: 'Chaque traduction fait l\'objet de contrôles de qualité stricts pour garantir l\'exactitude et la pertinence culturelle.',
      step4Title: 'Livraison sécurisée',
      step4Desc: 'Recevez votre traduction dans les délais, prête pour un usage officiel, académique ou professionnel en Belgique.',
      ctaText: 'Prêt à découvrir notre processus sans faille ?',
      ctaButton: 'Commencer votre traduction en Belgique'
    },
    industries: {
      title: 'Secteurs que nous servons',
      subtitle: 'Expertise spécialisée dans plusieurs secteurs',
      legal: 'Juridique',
      medical: 'Médical',
      corporate: 'Entreprise',
      education: 'Éducation',
      marketing: 'Marketing'
    },
    whyUs: {
      title: 'Pourquoi nous choisir',
      subtitle: 'Services de traduction optimises pour le marche belge',
      feature1Title: 'Traducteurs précis et certifiés',
      feature1Desc: 'Tous nos traducteurs sont des professionnels certifiés avec des années d\'expérience.',
      feature2Title: 'Rapide et fiable',
      feature2Desc: 'Livraison en 24 à 48 heures pour de nombreux documents standard, avec options express pour Bruxelles, Anvers, Gand et Liège.',
      feature3Title: 'Sécurisé et confidentiel',
      feature3Desc: 'Vos certificats, contrats et dossiers personnels sont traités avec sécurité et confidentialité.'
    },
    aboutCompany: {
      title: 'Votre partenaire de traduction en Belgique',
      description: 'Nous aidons les particuliers, entreprises et institutions à communiquer clairement dans le marché multilingue belge, de Bruxelles à la Flandre et à la Wallonie.',
      clients: 'Clients',
      languages: 'Langues',
      experience: 'Années d\'expérience'
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      subtitle: 'Approuvé par des clients en Belgique',
      client1Name: 'Sophie Janssens',
      client1Location: 'Bruxelles, Belgique',
      client1Text: 'Excellent service de traduction certifiée à Bruxelles. Mes documents juridiques ont été traduits rapidement et acceptés sans problème.',
      client2Name: 'Karim Benali',
      client2Location: 'Anvers, Belgique',
      client2Text: "Service rapide et fiable pour nos documents d'entreprise à Anvers. Terminologie précise et livraison dans les délais.",
      client3Name: 'Marie Laurent',
      client3Location: 'Gand, Belgique',
      client3Text: 'Qualité exceptionnelle et attention aux détails. Ils ont parfaitement géré la localisation de notre site web d\'entreprise.'
    },
    contactForm: {
      title: 'Commencez votre traduction aujourd\'hui',
      subtitle: 'Traductions rapides, précises et certifiées pour la Belgique en 120+ langues.',
      feature1: 'Traducteurs certifiés',
      feature1Desc: 'Linguistes qualifies pour le marche belge',
      feature2: 'Livraison rapide',
      feature2Desc: 'Livraison en 24 à 48 heures avec options express',
      feature3: 'Sécurisé et confidentiel',
      feature3Desc: 'Traitement sécurisé de vos documents personnels, juridiques et commerciaux',
      isoCertified: 'Certifié ISO',
      clients: '10K+ Projects',
      support: 'Support 24/7',
      getQuote: 'Obtenir un devis',
      fullName: 'Nom complet',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      languagePair: 'Sélectionner la paire de langues',
      enToAr: 'Anglais → Arabe',
      arToEn: 'Arabe → Anglais',
      enToFr: 'Anglais → Français',
      enToEs: 'Anglais → Espagnol',
      enToCn: 'Anglais → Chinois',
      enToHi: 'Anglais → Hindi',
      otherPair: 'Autre paire de langues',
      uploadText: 'Déposez votre document ici ou cliquez pour parcourir',
      uploadFormat: 'PDF, DOC, DOCX, JPG (Max 10 Mo)',
      additionalNotes: 'Notes supplémentaires (Facultatif)',
      securityNote: 'Vos informations sont sécurisées et confidentielles'
    },
    cta: {
      title: 'Prêt à commencer ?',
      subtitle: 'Faites traduire vos documents par des professionnels certifiés dès aujourd\'hui',
      button: 'Demander un devis'
    }
  },
  contact: {
    hero: {
      badge: 'Disponible 24/7',
      title: 'Contactez-nous',
      subtitle: "Nous vous aidons pour la traduction certifiée, l'interprétation et la localisation à Bruxelles et dans toute la Belgique."
    },
    form: {
      title: 'Envoyez-nous un message',
      subtitle: 'Remplissez le formulaire ci-dessous et nous vous répondrons rapidement',
      fullName: 'Nom complet *',
      email: 'Adresse e-mail *',
      phone: 'Numéro de téléphone',
      language: 'Sélectionner la langue',
      languagePlaceholder: 'Choisir la paire de langues',
      uploadDoc: 'Télécharger le document (Facultatif)',
      uploadText: 'Déposez votre fichier ici ou cliquez pour parcourir',
      uploadFormat: 'PDF, DOC, DOCX, JPG, PNG (Max 10 Mo)',
      uploadSuccess: 'Fichier téléchargé avec succès',
      message: 'Message / Description *',
      messagePlaceholder: "Indiquez l'autorite belge, la ville, la paire de langues ou l'objectif de votre traduction...",
      sendButton: 'Envoyer le message',
      namePlaceholder: 'Jean Dupont',
      emailPlaceholder: 'jean@exemple.com',
      phonePlaceholder: '+32 2 XXX XXXX'
    },
    faq: {
      title: 'Questions rapides',
      subtitle: 'Questions courantes sur nos services',
      question1: 'Quel est le delai pour une traduction certifiee en Belgique ?',
      answer1: 'Les traductions standard sont livrées sous 24 à 48 heures. Des services express sont disponibles pour les besoins urgents avec une livraison en 4 à 6 heures.',
      question2: 'Proposez-vous des traductions certifiées ?',
      answer2: 'Oui, nos traductions certifiées sont préparées pour les communes, universités, tribunaux, employeurs et institutions en Belgique.',
      question3: 'Combien de langues soutenez-vous ?',
      answer3: 'Nous fournissons des services de traduction professionnels dans plus de 120 langues avec des traducteurs natifs certifiés.',
      question4: 'Quels sont vos tarifs ?',
      answer4: 'Les prix varient en fonction de la paire de langues, du type de document et de l\'urgence. Contactez-nous pour un devis personnalisé gratuit.'
    },
    contactDetails: {
      title: 'Autres moyens de nous joindre',
      subtitle: 'Nous sommes disponibles via plusieurs canaux',
      emailTitle: 'Support par e-mail',
      emailAddress: 'sales@honeytranslations.com',
      emailNote: 'Nous répondons sous 24 heures',
      phoneTitle: 'Téléphone / WhatsApp',
      phoneNumber: '+32 2 XXX XXXX',
      phoneNote: 'Disponible de 9h a 18h CET',
      locationTitle: 'Localisation du bureau',
      locationAddress: 'Bruxelles, Belgique',
      locationNote: 'Visitez-nous sur rendez-vous',
      hoursTitle: 'Heures d\'ouverture',
      hoursWeekday: 'Lun-Sam : 9h-21h',
      hoursSunday: 'Dimanche : Fermé'
    },
    map: {
      title: 'Visitez notre bureau',
      subtitle: 'Au service de Bruxelles et des principales villes belges',
      location: 'Bruxelles, Belgique',
      center: 'Centre de services de traduction en Belgique'
    },
    cta: {
      title: 'Besoin d\'aide pour une traduction ?',
      subtitle: 'Notre équipe d\'experts est prête à vous aider avec des services de traduction professionnels',
      button: 'Parler à notre équipe'
    }
  },
  servicesPage: {
    hero: {
      badge: 'Solutions de traduction pour la Belgique',
      title: 'Une traduction qui semble naturelle',
      subtitle: 'Services de traduction professionnels conçus pour aider votre message à voyager clairement à travers les langues et les cultures.',
      tagline: 'Précis. Fiable. Centré sur l\'humain.'
    },
    overview: {
      paragraph1: 'Honey Translation propose des solutions linguistiques professionnelles pour les particuliers, entreprises et institutions en Belgique.',
      paragraph2: 'Nous nous concentrons sur la fourniture de traductions qui préservent le sens, le ton et la pertinence culturelle - pas seulement les mots.',
      paragraph3: 'Nos services sont flexibles, évolutifs et adaptés à vos besoins.'
    },
    core: {
      title: 'Services principaux',
      subtitle: 'Ce que nous traduisons',
      service1Title: 'Traduction commerciale et d\'entreprise',
      service1Desc: 'Rapports, présentations, e-mails, propositions et documents internes traduits avec une précision professionnelle.',
      service2Title: 'Traduction de sites web et de contenu numérique',
      service2Desc: 'Sites web, landing pages, applications et contenus en ligne localisés pour les publics francophones, néerlandophones et anglophones en Belgique.',
      service3Title: 'Traduction marketing et de marque',
      service3Desc: 'Brochures, publicités, campagnes et messages de marque adaptés pour un impact culturel.',
      service4Title: 'Traduction juridique et officielle',
      service4Desc: 'Contrats, certificats, accords et documents officiels traités avec une stricte confidentialité.',
      service5Title: 'Traduction académique et personnelle',
      service5Desc: 'Essais, articles de recherche, CV, documents personnels et plus encore.',
      service6Title: 'Documentation technique',
      service6Desc: 'Manuels, spécifications et contenu technique avec précision industrielle.'
    },
    specialized: {
      title: 'Solutions spécialisées',
      subtitle: 'Au-delà de la traduction',
      intro: 'En plus de la traduction, nous fournissons des services de support linguistique pour garantir clarté et cohérence.',
      service1Title: 'Relecture et édition',
      service1Desc: 'Affinez et perfectionnez votre contenu traduit',
      service2Title: 'Services de localisation',
      service2Desc: 'Adaptation culturelle pour les marchés cibles',
      service3Title: 'Adaptation de contenu',
      service3Desc: 'Réécrire le contenu pour l\'adapter aux contextes locaux',
      service4Title: 'Révision de contenu multilingue',
      service4Desc: 'Contrôles de qualité dans toutes les langues',
      outro: 'Ces services garantissent que votre message sonne naturel et professionnel.'
    },
    workflow: {
      title: 'Notre flux de travail',
      subtitle: 'Comment nous travaillons',
      step1Title: 'Révision du contenu',
      step1Desc: 'Nous évaluons votre contenu, votre objectif et votre public cible.',
      step2Title: 'Traduction par des experts',
      step2Desc: 'Des traducteurs professionnels gèrent votre projet avec précision.',
      step3Title: 'Assurance qualité',
      step3Desc: 'Contrôles multiples pour l\'exactitude, le ton et la clarté.',
      step4Title: 'Livraison finale',
      step4Desc: 'Livraison à temps avec support post-livraison si nécessaire.'
    },
    industries: {
      title: 'Secteurs que nous servons',
      subtitle: 'Nous travaillons avec des clients de plusieurs secteurs',
      industry1: 'Entreprises et startups',
      industry2: 'E-commerce',
      industry3: 'Éducation et recherche',
      industry4: 'Juridique et gouvernemental',
      industry5: 'Marketing et médias',
      industry6: 'Particuliers et freelances',
      note: 'Chaque secteur reçoit le même niveau de soin et de professionnalisme.'
    },
    quality: {
      title: 'Qualité et confidentialité',
      subtitle: 'Notre promesse envers vous',
      feature1Title: 'Confidentialité stricte',
      feature1Desc: 'Tous les documents sont traités avec une confidentialité et une sécurité totales. Votre contenu ne quitte jamais nos systèmes sécurisés.',
      feature2Title: 'Traductions vérifiées par des humains',
      feature2Desc: 'Chaque traduction est vérifiée par des locuteurs natifs pour garantir l\'authenticité et le naturel.',
      feature3Title: 'Précision culturelle et linguistique',
      feature3Desc: 'Nous préservons le sens, le ton et le contexte culturel - pas seulement la traduction littérale.',
      feature4Title: 'Engagement envers les délais',
      feature4Desc: 'Livraison à temps garantie. Nous respectons votre calendrier et travaillons en conséquence.',
      note: 'Votre contenu est traité avec un soin et un respect complets.'
    },
    whyUs: {
      title: 'Pourquoi choisir Honey Translation Belgique',
      subtitle: 'Notre avantage doux',
      feature1Title: 'Approche centrée sur l\'humain',
      feature1Desc: 'Nous privilégions le sens et le contexte plutôt que la traduction mot à mot.',
      feature2Title: 'Communication claire',
      feature2Desc: 'Processus transparent avec des mises à jour tout au long de votre projet.',
      feature3Title: 'Qualité constante',
      feature3Desc: 'Chaque projet répond à nos normes rigoureuses d\'excellence.',
      feature4Title: 'Options de service flexibles',
      feature4Desc: 'Solutions évolutives qui s\'adaptent à vos besoins spécifiques.',
      feature5Title: 'Support centré sur le client',
      feature5Desc: 'Équipe de support dédiée disponible pour vous aider.',
      feature6Title: 'Partenariats à long terme',
      feature6Desc: 'Nous construisons des relations, pas seulement des transactions.',
      badge: 'Garanti',
      closing: 'Nous construisons des partenariats à long terme, pas seulement des traductions.'
    },
    workflow: {
      title: 'Notre flux de travail',
      subtitle: 'Comment nous travaillons',
      step1: 'Révision du contenu',
      step1Desc: 'Nous évaluons votre contenu, votre objectif et votre public cible.',
      step2: 'Traduction par des experts',
      step2Desc: 'Des traducteurs professionnels gèrent votre projet avec précision.',
      step3: 'Assurance qualité',
      step3Desc: 'Contrôles multiples pour l\'exactitude, le ton et la clarté.',
      step4: 'Livraison finale',
      step4Desc: 'Livraison à temps avec support post-livraison si nécessaire.'
    },
    industries: {
      title: 'Secteurs que nous servons',
      subtitle: 'Nous travaillons avec des clients de plusieurs secteurs',
      industry1: 'Entreprises et startups',
      industry2: 'E-commerce',
      industry3: 'Éducation et recherche',
      industry4: 'Juridique et gouvernemental',
      industry5: 'Marketing et médias',
      industry6: 'Particuliers et freelances',
      note: 'Chaque secteur reçoit le même niveau de soin et de professionnalisme.'
    },
    quality: {
      title: 'Qualité et confidentialité',
      subtitle: 'Notre promesse envers vous',
      feature1: 'Confidentialité stricte',
      feature1Desc: 'Tous les documents sont traités avec une confidentialité et une sécurité totales. Votre contenu ne quitte jamais nos systèmes sécurisés.',
      feature2: 'Traductions vérifiées par des humains',
      feature2Desc: 'Chaque traduction est vérifiée par des locuteurs natifs pour garantir l\'authenticité et le naturel.',
      feature3: 'Précision culturelle et linguistique',
      feature3Desc: 'Nous préservons le sens, le ton et le contexte culturel - pas seulement la traduction littérale.',
      feature4: 'Engagement envers les délais',
      feature4Desc: 'Livraison à temps garantie. Nous respectons votre calendrier et travaillons en conséquence.',
      note: 'Votre contenu est traité avec un soin et un respect complets.'
    },
    whyUs: {
      title: 'Pourquoi choisir Honey Translation Belgique',
      subtitle: 'Notre avantage doux',
      feature1: 'Approche centrée sur l\'humain',
      feature1Desc: 'Nous privilégions le sens et le contexte plutôt que la traduction mot à mot.',
      feature2: 'Communication claire',
      feature2Desc: 'Processus transparent avec des mises à jour tout au long de votre projet.',
      feature3: 'Qualité constante',
      feature3Desc: 'Chaque projet répond à nos normes rigoureuses d\'excellence.',
      feature4: 'Options de service flexibles',
      feature4Desc: 'Solutions évolutives qui s\'adaptent à vos besoins spécifiques.',
      feature5: 'Support centré sur le client',
      feature5Desc: 'Équipe de support dédiée disponible pour vous aider.',
      feature6: 'Partenariats à long terme',
      feature6Desc: 'Nous construisons des relations, pas seulement des transactions.',
      badge: 'Garanti',
      closing: 'Nous construisons des partenariats à long terme, pas seulement des traductions.'
    },
    cta: {
      title: 'Prêt à toucher la Belgique clairement ?',
      subtitle: 'Laissez Honey Translation gérer vos besoins linguistiques avec clarté et confiance.',
      button1: 'Demander un devis',
      button2: 'Contactez-nous',
      badge1: 'Sécurisé et confidentiel',
      badge2: 'Livraison rapide',
      badge3: 'Qualité garantie'
    }
  },
  footer: {
    tagline: 'Services de traduction certifiée en Belgique',
    quickLinks: 'Liens rapides',
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    industries: 'Secteurs',
    contact: 'Contact',
    faqs: 'FAQ',
    servicesTitle: 'Services',
    docTranslation: 'Traduction de documents',
    legalTranslation: 'Traduction juridique',
    medicalTranslation: 'Traduction médicale',
    technicalTranslation: 'Traduction technique',
    subtitles: 'Sous-titres et transcription',
    websiteLocalization: 'Localisation de sites web',
    contactTitle: 'Contact',
    phone: 'Téléphone',
    phoneNumber: '7299005577',
    email: 'E-mail',
    emailAddress: 'sales@honeytranslations.com',
    location: 'Localisation',
    officeLocation: 'Remote',
    copyright: '© 2025 Honey Translations. Tous droits réservés.'
  },
  popup: {
    title: 'Faites traduire aujourd\'hui',
    fast: 'Rapide',
    accurate: 'Précis',
    certified: 'Certifié',
    description: 'Remplissez vos coordonnées et notre équipe d\'experts vous contactera dans les 24 heures avec un devis personnalisé.',
    namePlaceholder: 'Votre nom complet',
    emailPlaceholder: 'votre@email.com',
    phonePlaceholder: '+32 4XX XX XX XX',
    submitButton: 'Obtenir une traduction',
    securityNote: 'Vos informations sont sécurisées et confidentielles'
  },
  common: {
    loading: 'Chargement...',
    submit: 'Soumettre',
    cancel: 'Annuler',
    close: 'Fermer',
    readMore: 'Lire la suite',
    learnMore: 'En savoir plus',
    viewAll: 'Voir tout',
    backToHome: "Retour à l'accueil",
    required: 'Requis',
    optional: 'Facultatif'
  },
  aboutPage: {
    hero: {
      badge: 'A propos de Honey Translation Belgique',
      title: 'Une clarté qui parle toutes les langues',
      subtitle: 'Nous rendons la communication simple, précise et humaine. Honey Translation aide les particuliers et les entreprises à se connecter à travers les langues avec précision, soin et compréhension culturelle.',
      tagline: 'Clarté humaine. Présence belge.'
    },
    whoWeAre: {
      badge: 'Qui sommes-nous',
      title: 'Traduction centrée sur l\'humain',
      paragraph1: 'Honey Translation est un fournisseur de services linguistiques professionnels axé sur la fourniture de traductions précises et culturellement adaptées.',
      paragraph2: 'Nous pensons que la traduction est plus que des mots — c\'est le sens, le ton et l\'intention.',
      paragraph3: 'Notre équipe travaille en étroite collaboration avec les clients pour s\'assurer que chaque message semble naturel, clair et authentique dans la langue cible.',
      stat1: '120+',
      stat1Label: 'Langues',
      stat2: '10K+',
      stat2Label: 'Projets',
      stat3: '15+',
      stat3Label: 'Années'
    },
    whatMakesUsDifferent: {
      badge: 'Ce qui nous différencie',
      title: 'Notre avantage doux',
      subtitle: 'Nous ne traduisons pas seulement — nous adaptons votre message pour de vraies personnes.',
      feature1: 'Traductions vérifiées par des humains',
      feature1Desc: 'Chaque traduction est vérifiée par des locuteurs natifs pour garantir l\'authenticité et la précision.',
      feature2: 'Précision culturelle',
      feature2Desc: 'Pas seulement le sens littéral — nous capturons le ton, le contexte et les nuances culturelles.',
      feature3: 'Livraison rapide',
      feature3Desc: 'Livraison rapide sans compromettre la qualité ou l\'attention aux détails.',
      feature4: 'Communication claire',
      feature4Desc: 'Processus transparent avec des mises à jour régulières et un dialogue ouvert tout au long.',
      feature5: 'Approuvé par les professionnels',
      feature5Desc: 'Utilisé par des marques, PME, professionnels, étudiants et résidents en Belgique.',
      feature6: 'Qualité garantie',
      feature6Desc: 'Chaque projet répond à nos normes rigoureuses d\'excellence et de précision.',
      verifiedAdvantage: 'Avantage vérifié'
    },
    ourServices: {
      badge: 'Nos services',
      title: 'Ce que nous traduisons',
      subtitle: 'Chaque projet est traité avec confidentialité et soin.',
      service1: 'Documents commerciaux et d\'entreprise',
      service1Desc: "Traduction professionnelle de contrats, rapports, propositions, présentations et communications internes pour les entreprises belges et les équipes tournées vers l'UE.",
      service2: 'Sites web et contenu numérique',
      service2Desc: 'Localisation de sites web, d\'applications, d\'interfaces logicielles et de plateformes numériques pour engager les audiences dans leur langue maternelle.',
      service3: 'Marketing et matériaux de marque',
      service3Desc: 'Contenu marketing adapté culturellement, contenu de médias sociaux, publicités et messages de marque qui résonnent localement.',
      service4: 'Documents juridiques et officiels',
      service4Desc: 'Traduction certifiée de contrats juridiques, certificats, documents d\'immigration et dossiers officiels acceptés par les autorités.',
      service5: 'Traductions personnelles et académiques',
      service5Desc: 'Traduction précise de relevés de notes académiques, articles de recherche, documents personnels et matériel éducatif.'
    },
    ourProcess: {
      title: 'Notre processus',
      subtitle: 'Simple. Clair. Fiable.',
      step1: 'Comprendre vos besoins',
      step1Desc: 'Nous analysons votre contenu, votre public et vos objectifs.',
      step2: 'Traduction professionnelle',
      step2Desc: 'Des traducteurs experts travaillent sur votre projet avec précision.',
      step3: 'Révision et contrôle qualité',
      step3Desc: 'Chaque traduction est vérifiée pour l\'exactitude et le ton.',
      step4: 'Livraison et support',
      step4Desc: 'Livraison à temps avec support continu si nécessaire.'
    },
    ourMission: {
      badge: 'Notre mission',
      title: 'Pourquoi nous existons',
      paragraph1: 'Notre mission est d\'éliminer les barrières linguistiques et d\'aider les gens à communiquer librement au-delà des frontières.',
      paragraph2: 'Nous visons à fournir des traductions qui semblent naturelles, respectueuses et significatives — tout comme une conversation dans votre langue maternelle.'
    },
    ourVision: {
      badge: 'Notre vision',
      title: 'Où nous allons',
      paragraph1: 'Nous envisageons un monde où la langue n\'est jamais une limitation.',
      paragraph2: 'Honey Translation s\'efforce de devenir un partenaire mondial de confiance pour les entreprises et les particuliers à la recherche de traductions claires, honnêtes et de haute qualité.'
    },
    whatWeStandFor: {
      title: 'Ce que nous représentons',
      subtitle: 'Chaque traduction reflète nos valeurs.',
      value1: 'Précision',
      value1Desc: 'Précision dans chaque mot et phrase',
      value2: 'Intégrité',
      value2Desc: 'Service honnête et transparent',
      value3: 'Confidentialité',
      value3Desc: 'Vos données sont toujours protégées',
      value4: 'Respect culturel',
      value4Desc: 'Honorer chaque langue et culture',
      value5: 'Satisfaction client',
      value5Desc: 'Votre succès est notre priorité'
    },
    cta: {
      title: 'Traduisons ensemble',
      subtitle: 'Vous avez du contenu qui doit parler clairement à travers les langues ? Nous sommes là pour vous aider.',
      button1: 'Nous contacter',
      button2: 'Voir les services',
      badge1: 'Certifié ISO',
      badge2: 'Approuvé par plus de 10 000 clients',
      badge3: 'Support 24/7'
    }
  },
  teamPage: {
    hero: {
      badge: 'Rencontrez notre équipe',
      title: 'Les personnes derrière les mots',
      subtitle: 'Rencontrez les professionnels qui apportent clarté, précision et compréhension culturelle à chaque traduction.',
      tagline: 'Expertise humaine. Perspective belge.'
    },
    whoWeAre: {
      badge: 'Qui sommes-nous',
      title: 'Une équipe linguistique pour la Belgique',
      paragraph1: 'Honey Translation est propulsée par une équipe diversifiée de professionnels de la langue travaillant à travers les régions et les cultures.',
      paragraph2: 'Nos traducteurs, éditeurs et réviseurs collaborent pour garantir que chaque projet répond à des normes élevées de précision, de ton et de sens.',
      stat1: '200+',
      stat1Label: 'Professionnels',
      stat2: '80+',
      stat2Label: 'Langues',
      stat3: '40+',
      stat3Label: 'Pays'
    },
    teamStructure: {
      badge: 'Structure de notre équipe',
      title: 'Comment nous travaillons ensemble',
      subtitle: 'Notre équipe comprend des rôles spécialisés qui collaborent harmonieusement',
      role1: 'Traducteurs professionnels',
      role1Desc: 'Locuteurs natifs avec une expertise de domaine traduisant avec précision et sensibilité culturelle.',
      role2: 'Correcteurs et éditeurs',
      role2Desc: 'Spécialistes de la qualité garantissant la précision, la cohérence et l\'excellence grammaticale.',
      role3: 'Spécialistes linguistiques',
      role3Desc: 'Experts en traductions techniques, juridiques, médicales et spécialisées par secteur.',
      role4: 'Experts en localisation',
      role4Desc: 'Consultants culturels adaptant le contenu pour la pertinence régionale et culturelle.',
      role5: 'Coordinateurs de projet',
      role5Desc: 'Gestionnaires dédiés garantissant un flux de travail fluide et une livraison dans les délais.',
      bottomText: 'Chaque rôle joue un rôle clé dans la fourniture de traductions fiables.'
    },
    ourExperts: {
      title: 'Nos experts',
      subtitle: 'Une expérience en qui vous pouvez avoir confiance',
      block1Title: 'Processus de sélection rigoureux',
      block1Desc: 'Les membres de notre équipe sont sélectionnés en fonction de leur expertise, de leur maîtrise de la langue et de leur attention aux détails.',
      block2Title: 'Expertise de domaine',
      block2Desc: 'Beaucoup de nos professionnels ont de l\'expérience dans les traductions commerciales, juridiques, académiques et marketing — garantissant une précision spécifique au domaine.',
      area1: 'Commercial',
      area2: 'Juridique',
      area3: 'Académique',
      area4: 'Marketing'
    },
    ourValues: {
      title: 'Nos valeurs en tant qu\'équipe',
      subtitle: 'Ce qui nous guide',
      value1: 'Précision et qualité',
      value1Desc: 'Précision dans chaque mot',
      value2: 'Conscience culturelle',
      value2Desc: 'Contexte et nuance',
      value3: 'Respect et collaboration',
      value3Desc: 'Travailler ensemble',
      value4: 'Communication claire',
      value4Desc: 'Dialogue ouvert',
      value5: 'Engagement envers les délais',
      value5Desc: 'Livraison à temps',
      bottomText: 'Ces valeurs façonnent la façon dont nous travaillons ensemble et servons nos clients.'
    },
    collaboration: {
      badge: 'Collaboration et culture',
      title: 'Comment nous travaillons',
      paragraph1: 'Nous croyons que les grandes traductions viennent de la collaboration.',
      paragraph2: 'Notre équipe travaille en étroite collaboration à travers les langues et les fuseaux horaires, en maintenant une communication ouverte et une qualité constante tout au long de chaque projet.',
      aspect1: 'Inter-équipes',
      aspect2: 'Réseau belge',
      aspect3: 'Communication ouverte',
      aspect4: 'Objectifs partagés'
    },
    qualityAssurance: {
      badge: 'Assurance qualité',
      title: 'Notre vérification finale',
      paragraph1: 'Avant la livraison, chaque projet passe par un processus de révision dédié.',
      paragraph2: 'Notre équipe d\'assurance qualité garantit que les traductions sont précises, culturellement appropriées et alignées sur les attentes des clients.',
      step1: 'Vérification de la précision',
      step2: 'Révision culturelle',
      step3: 'Alignement client'
    },
    joinTeam: {
      title: 'Rejoignez notre équipe',
      subtitle: 'Nous sommes toujours ouverts à travailler avec des professionnels de la langue qualifiés qui partagent notre engagement envers la qualité.',
      question: 'Intéressé à rejoindre Honey Translation ?',
      button1: 'Rejoignez-nous',
      button2: 'Contactez-nous',
      badge1: 'Équipe belge',
      badge2: 'Professionnels experts',
      badge3: 'Culture collaborative'
    }
  }
};
