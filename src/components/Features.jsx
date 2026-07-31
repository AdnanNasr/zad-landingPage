import { colors, features } from '../data/siteData';

export default function Features() {
  return (
    <section id="features" className="py-20" style={{ background: '#fff' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-sm font-bold" style={{ color: colors.secondary }}>المزايا</span>
          <h2 className="text-3xl font-bold mt-3" style={{ color: colors.primary }}>
           كل ما تحتاجه في مكان واحد
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2  hover:shadow-xl cursor-default"
              style={{ background: colors.cream, border: `1px solid ${colors.primary}20`}}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: colors.primary }}
              >
                <f.icon size={22} color="#fff" />
              </div>
              <h3 className="font-bold mb-2" style={{ color: colors.primary }}>{f.title}</h3>
              <p className="text-sm" style={{ color: '#555' }}>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}