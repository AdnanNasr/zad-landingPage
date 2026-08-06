import { useTheme } from "../context/ThemeContext";
const missionText =
  "زاد المسلم لم يُصمم كمشروع تجاري، بل كخطوة بسيطة لخدمة المسلمين في يومهم. لا إعلانات، لا مقابل مادي، فقط تطبيق يسعى لأن يكون رفيقًا صادقًا في رحلتك اليومية مع القرآن والصلاة والذكر.";

export default function MissionMessage() {
  const { colors } = useTheme();
  return (
    <section className="py-20 ">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="text-sm font-bold" style={{ color: colors.secondary }}>
          رسالتنا
        </span>
        <p
          className="mt-4 text-xl leading-loose font-medium"
          style={{ color: colors.missionText }}
        >
          {missionText}
        </p>
      </div>
    </section>
  );
}
