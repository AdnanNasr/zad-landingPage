import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function MissionMessage() {
  const { colors } = useTheme();
  const { translations: t } = useLanguage();
  return (
    <section className="py-20 ">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="text-sm font-bold" style={{ color: colors.secondary }}>
          {t.mission.label}
        </span>
        <p
          className="mt-4 text-xl leading-loose font-medium"
          style={{ color: colors.missionText }}
        >
          {t.mission.text}
        </p>
      </div>
    </section>
  );
}
