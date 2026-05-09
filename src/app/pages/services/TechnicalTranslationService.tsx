import { useEffect } from 'react';
import { FileText, CheckCircle2, Shield, Clock, Globe } from 'lucide-react';

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
    </div>
  );
}
