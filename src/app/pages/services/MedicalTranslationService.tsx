import { useEffect } from 'react';
import { Heart, CheckCircle2, Shield, Clock, Globe } from 'lucide-react';

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
    </div>
  );
}
