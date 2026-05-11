import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, CheckCircle2, Shield, Clock, BookOpen, Globe, Sparkles, Phone, MessageCircle, Mail } from 'lucide-react';

export function LegalTranslationService() {
  useEffect(() => {
    document.title = 'Legal Translation Services | Honey Translation';
  }, []);

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white py-28 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-blue-400/20 bottom-10 left-10"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
                <Scale className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            <h1 className="text-white mb-6" style={{ fontSize: '3.5rem', lineHeight: '1.2', textShadow: '0px 3px 10px rgba(0,0,0,0.4)' }}>
              Legal Translation Services
            </h1>

            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Precise legal translations trusted by law firms, courts, and institutions.
            </p>

            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '0px 2px 6px rgba(0,0,0,0.3)' }}>
              Our legal translators specialize in contracts, certificates, court documents, and legal filings for Belgian and international needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Choose Legal Translation from Honey
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Accuracy, confidentiality, and a deep understanding of legal language make our service ideal for sensitive legal projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Confidential Legal Handling',
                description: 'All legal documents are handled with strict privacy and secure workflows.',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: CheckCircle2,
                title: 'Certified Accuracy',
                description: 'Experienced legal linguists review every translation for precision and terminology.',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Clock,
                title: 'Fast Delivery Options',
                description: 'Urgent legal translation services with reliable turnaround times.',
                gradient: 'from-yellow-400 to-yellow-500'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 card-shadow-premium hover:scale-105 transition-all duration-300 group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#151249] mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Legal Documents We Translate
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From legal contracts to court papers, we translate the documents that matter most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              'Contracts & agreements',
              'Court judgments & affidavits',
              'Immigration & legal certificates',
              'Corporate & merger documents',
              'Notarized statements',
              'Legal opinions & disclaimers'
            ].map((item, index) => (
              <div key={index} className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#151249]" />
                  <h3 className="text-lg font-semibold text-[#151249]">{item}</h3>
                </div>
                <p className="text-gray-600">Professional translation for legal and regulatory use.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL TRANSLATION SPECIALTIES */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Legal Translation Specialties
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We handle complex legal documents with specialized expertise
            </p>
          </div>

          {/* Specialties Cards */}
          <div className="space-y-12">
            {/* Corporate Law */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    🏢 Corporate Law
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Mergers & acquisitions',
                      'Shareholder agreements',
                      'Corporate bylaws & policies'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      Corporate translations require understanding of business terminology and legal frameworks across jurisdictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Immigration Law */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    🌍 Immigration Law
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Visa applications & petitions',
                      'Citizenship documents',
                      'Immigration court filings'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      Immigration translations must meet strict government standards and are often required for embassy submissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    📋 Intellectual Property
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Patent applications',
                      'Trademark registrations',
                      'Copyright agreements'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      IP translations require specialized knowledge of technical and legal terminology in multiple languages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US PROFESSIONAL */}
      <section className="py-24 bg-gradient-to-b from-soft-blue to-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Makes Our Legal Translation Professional?
            </h2>
          </div>

          {/* Professional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Legal Expertise */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Scale className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">⚖ Legal Expertise</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our translators have legal backgrounds and understand the nuances of legal language, ensuring <strong className="text-[#151249]">court-admissible translations</strong>.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🔒 Confidentiality</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                All legal documents are handled under strict attorney-client privilege standards with <strong className="text-[#151249]">secure, encrypted workflows</strong>.
              </p>
            </div>

            {/* Certification */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">📜 Certification</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide certified translations accepted by courts, embassies, and government agencies across <strong className="text-[#151249]">Belgium and the EU</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#151249] to-[#1e1a5e] text-white px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 bottom-10 right-10"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-white mb-6" style={{ fontSize: '2.75rem' }}>
              Get Your Legal Documents Translated
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Professional, certified, and confidential.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="tel:+3220000000"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>

            <a 
              href="https://wa.me/917299005577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-green-500 text-white font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#151249] font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <Mail className="w-5 h-5" />
              <span>Request a Quote</span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <a href="mailto:sales@honeytranslations.com" className="text-white hover:text-yellow-400 transition-colors font-semibold">
                    sales@honeytranslations.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Response Time</p>
                  <p className="text-white font-semibold">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
