import { CheckCircle2 } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Privacy() {
  const { colors } = useTheme();
  const { translations: t } = useLanguage();
  const privacyPoints = t.privacy.items;
  return (
    <section id="privacy" className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-10">
          <span className="text-sm font-bold" style={{ color: colors.secondary }}>
            {t.privacy.label}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-3"
            style={{ color: colors.primary }}
          >
            {t.privacy.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
          <div className="flex justify-center items-center">
            <ShieldCheck
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72"
              color={colors.secondary}
              strokeWidth={1.2}
            />
          </div>

          <div>
            {privacyPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-4"
                style={{
                  borderBottom: i < privacyPoints.length - 1 ? `1px solid ${colors.border}` : 'none',
                }}
              >
                <CheckCircle2
                  size={20}
                  color={colors.primary}
                  className="mt-0.5 flex-shrink-0"
                />
                <p style={{ color: colors.text }}>{point}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
