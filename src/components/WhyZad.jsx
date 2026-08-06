import { whyIcons } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function WhyZad() {
  const { colors } = useTheme();
  const { translations: t } = useLanguage();
  return (
    <section id="why" className="py-20" style={{ background: colors.sectionAccentBg }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-sm font-bold" style={{ color: colors.secondary }}>{t.why.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">{t.why.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {t.why.items.map((p, i) => {
            const Icon = whyIcons[i];
            return (
            <div key={i}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <Icon size={24} color={colors.secondary} />
              </div>
              <h3 className="font-bold text-white mb-1">{p.title}</h3>
              <p className="text-sm text-white/70">{p.desc}</p>
            </div>
          )})}
        </div>

      </div>
    </section>
  );
}
