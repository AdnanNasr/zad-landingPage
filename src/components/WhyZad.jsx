import { colors, whyPoints } from '../data/siteData';

export default function WhyZad() {
  return (
    <section id="why" className="py-20" style={{ background: colors.primary }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-sm font-bold" style={{ color: colors.secondary }}>لماذا زاد المسلم؟</span>
          <h2 className="text-3xl font-bold mt-3 text-white">مبني على الثقة والبساطة</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {whyPoints.map((p, i) => (
            <div key={i}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <p.icon size={24} color={colors.secondary} />
              </div>
              <h3 className="font-bold text-white mb-1">{p.title}</h3>
              <p className="text-sm text-white/70">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}