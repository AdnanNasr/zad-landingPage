import { useTheme } from "../context/ThemeContext";
import { Info } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function IntroSection() {
  const { colors } = useTheme();
  const { translations: t } = useLanguage();
  return (
    <section
      className="py-20 islamic-pattern"
      style={{ backgroundColor: colors.pageBg }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center justify-center w-13 h-13 rounded-full mb-5 "
          style={{ background: colors.primary, width: 52, height: 52 }}
        >
          <Info size={24} color={colors.secondaryLight} />
        </div>

        <span
          className="block text-sm font-bold mb-4"
          style={{ color: colors.secondary }}
        >
          {t.intro.label}
        </span>

        <p className="text-lg leading-loose" style={{ color: colors.text }}>
          {t.intro.before}{" "}
          <span
            style={{
              fontFamily: "'Amiri', serif",
              fontWeight: 700,
              color: colors.primary,
            }}
          >
            {t.intro.highlight}
          </span>{" "}
          {"\u00A0"}
          {" "}{t.intro.after}{" "}
          <span style={{ fontWeight: 700, color: colors.secondary }}>
            {t.intro.readers}
          </span>
          {t.intro.offlineBefore}{" "}
          <span style={{ fontWeight: 700, color: colors.secondary }}>
            {t.intro.offline}
          </span>
          {t.intro.rest}
        </p>
      </div>
    </section>
  );
}
