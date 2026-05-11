import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle2, Shield, Clock, Globe, Scale, Phone, MessageCircle, Mail } from 'lucide-react';

export function TechnicalTranslationService() {
  useEffect(() => {
    document.title = 'Technical Translation Services | Honey Translation';
  }, []);

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] text-white py-28 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-blue-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-gray-400/20 bottom-10 left-10"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-slate-700 flex items-center justify-center shadow-xl">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-white mb-6" style={{ fontSize: '3.5rem', lineHeight: '1.2', textShadow: '0px 3px 10px rgba(0,0,0,0.4)' }}>
              Technical Translation Services
            </h1>

            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Complex technical content translated with precision and industry expertise.
            </p>

            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '0px 2px 6px rgba(0,0,0,0.3)' }}>
              We translate manuals, specifications, training documents and technical guides for technology, engineering, and manufacturing sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Technical Translation You Can Trust
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Technical documents require exact terminology and clarity. Our translators deliver both.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Industry-Specific Expertise',
                description: 'Technical translators with engineering, IT, and manufacturing experience.',
                gradient: 'from-slate-400 to-slate-600'
              },
              {
                icon: CheckCircle2,
                title: 'Terminology Consistency',
                description: 'Accurate terminology ensures your documents remain usable across languages.',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Clock,
                title: 'Reliable Timelines',
                description: 'Translation delivery aligned with project milestones and product launches.',
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
              Technical Content We Translate
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From user manuals to product datasheets, our translations preserve clarity and technical detail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              'Product manuals & user guides',
              'Technical specifications',
              'Software documentation',
              'Assembly instructions',
              'Training materials',
              'Engineering reports'
            ].map((item, index) => (
              <div key={index} className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#151249]" />
                  <h3 className="text-lg font-semibold text-[#151249]">{item}</h3>
                </div>
                <p className="text-gray-600">Translation designed for technical clarity and audience comprehension.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL TRANSLATION SPECIALTIES */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Technical Translation Specialties
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We handle complex technical documents with specialized industry expertise
            </p>
          </div>

          {/* Specialties Cards */}
          <div className="space-y-12">
            {/* Engineering */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    ⚙️ Engineering
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Mechanical engineering specs',
                      'Electrical schematics',
                      'Civil engineering plans'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      Engineering translations require precise terminology and understanding of technical standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* IT & Software */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    💻 IT & Software
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Software documentation',
                      'API specifications',
                      'User manuals & guides'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      IT translations must be technically accurate and user-friendly for global audiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    🏭 Manufacturing
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Production manuals',
                      'Quality control procedures',
                      'Safety data sheets'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-100 border-l-4 border-gray-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      Manufacturing translations ensure compliance with international safety and quality standards.
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
              What Makes Our Technical Translation Professional?
            </h2>
          </div>

          {/* Professional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Technical Expertise */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Scale className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">⚙️ Technical Expertise</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our translators have engineering and technical backgrounds, ensuring <strong className="text-[#151249]">accurate industry terminology</strong>.
              </p>
            </div>

            {/* Industry Standards */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">📏 Industry Standards</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We follow international technical standards and <strong className="text-[#151249]">regulatory requirements</strong> for accurate translations.
              </p>
            </div>

            {/* Clarity */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🔍 Clarity</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Technical translations are reviewed for clarity and comprehension, ensuring <strong className="text-[#151249]">end-users understand the content</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#151249] to-[#1e1a5e] text-white px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-orange-400/20 bottom-10 right-10"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-white mb-6" style={{ fontSize: '2.75rem' }}>
              Get Your Technical Documents Translated
            </h2>
            <p className="text-2xl text-orange-400 mb-10 font-semibold">
              Precise, industry-compliant, and clear.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="tel:+3220000000"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 text-[#151249] font-bold hover:scale-105 transition-transform shadow-xl"
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
                <div className="w-10 h-10 rounded-lg bg-orange-400/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <a href="mailto:sales@honeytranslations.com" className="text-white hover:text-orange-400 transition-colors font-semibold">
                    sales@honeytranslations.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-400/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-400" />
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
