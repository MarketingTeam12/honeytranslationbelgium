import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle2, Shield, Clock, Globe, Phone, MessageCircle, Mail } from 'lucide-react';

export function MedicalTranslationService() {
  useEffect(() => {
    document.title = 'Medical Translation Services | Honey Translation';
  }, []);

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-[#0f3f56] via-[#163c5a] to-[#152b4f] text-white py-28 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-green-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-blue-400/20 bottom-10 left-10"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-white mb-6" style={{ fontSize: '3.5rem', lineHeight: '1.2', textShadow: '0px 3px 10px rgba(0,0,0,0.4)' }}>
              Medical Translation Services
            </h1>

            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Trusted medical translations for healthcare, clinical, and patient-facing documents.
            </p>

            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '0px 2px 6px rgba(0,0,0,0.3)' }}>
              We translate medical reports, prescriptions, clinical studies and patient records with precision and regulatory awareness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Medical Translation Matters
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Precise translation is essential for patient safety, regulatory compliance and clear communication in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Secure Patient Data',
                description: 'Confidential handling of medical records and health information.',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: CheckCircle2,
                title: 'Clinical Accuracy',
                description: 'Qualified linguists ensure correct medical terminology and context.',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Clock,
                title: 'Timely Delivery',
                description: 'Fast translations when patient care or regulatory deadlines matter.',
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
              Medical Documents We Translate
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              From prescriptions to clinical reports, our service supports medical professionals and patients alike.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              'Prescriptions & treatment plans',
              'Clinical reports & summaries',
              'Patient records & discharge notes',
              'Insurance & medical billing documents',
              'Regulatory submissions',
              'Health assessments & diagnostic reports'
            ].map((item, index) => (
              <div key={index} className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#151249]" />
                  <h3 className="text-lg font-semibold text-[#151249]">{item}</h3>
                </div>
                <p className="text-gray-600">Professional translation with medical quality controls.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL TRANSLATION SPECIALTIES */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Medical Translation Specialties
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We handle sensitive medical documents with specialized healthcare expertise
            </p>
          </div>

          {/* Specialties Cards */}
          <div className="space-y-12">
            {/* Clinical Research */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    🏥 Clinical Research
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Clinical trial protocols',
                      'Patient informed consents',
                      'Research ethics documents'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      Clinical translations require understanding of medical research terminology and regulatory compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Care */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    👨‍⚕️ Patient Care
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Medical records & histories',
                      'Treatment plans & prescriptions',
                      'Discharge summaries'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      Patient care translations must be accurate and culturally sensitive to ensure proper healthcare delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    📋 Regulatory Compliance
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Drug registration documents',
                      'Medical device manuals',
                      'Regulatory submissions'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      Regulatory translations must meet strict standards for pharmaceuticals and medical devices.
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
              What Makes Our Medical Translation Professional?
            </h2>
          </div>

          {/* Professional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Medical Expertise */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🏥 Medical Expertise</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our translators have medical backgrounds and understand complex terminology, ensuring <strong className="text-[#151249]">clinically accurate translations</strong>.
              </p>
            </div>

            {/* HIPAA Compliance */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🔒 HIPAA Compliance</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                All medical documents are handled under strict privacy standards with <strong className="text-[#151249]">secure, encrypted workflows</strong> protecting patient data.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">✅ Quality Assurance</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every medical translation undergoes review by qualified medical professionals to ensure <strong className="text-[#151249]">accuracy and patient safety</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#0f3f56] via-[#163c5a] to-[#152b4f] text-white px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-green-400/20 bottom-10 right-10"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-white mb-6" style={{ fontSize: '2.75rem' }}>
              Get Your Medical Documents Translated
            </h2>
            <p className="text-2xl text-green-400 mb-10 font-semibold">
              Accurate, confidential, and healthcare-compliant.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="tel:+3220000000"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-400 to-green-500 text-white font-bold hover:scale-105 transition-transform shadow-xl"
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#0f3f56] font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <Mail className="w-5 h-5" />
              <span>Request a Quote</span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-400/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <a href="mailto:sales@honeytranslations.com" className="text-white hover:text-green-400 transition-colors font-semibold">
                    sales@honeytranslations.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-400/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-400" />
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
