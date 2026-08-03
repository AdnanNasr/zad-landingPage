import { Clock, Volume2 } from 'lucide-react';
import { links } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

const imgs=["/home_dark.webp" , "/home.webp"]
export default function Hero() {
  const { colors, isDark } = useTheme();

  const heroImage = isDark ? imgs[0] : imgs[1];

  // ألوان الكروت : في الوضع الفاتح كرت غامق وفي الوضع الداكن بتنعكس لكرت فاتح
  const floatCardBg = isDark ? "#F5F1E8" : colors.ink;
  const floatCardTitle = isDark ? "#8a8a7a" : "#bbbbad";
  const floatCardText = isDark ? colors.ink : "#fff";

  return (
    <header id="hero" className="relative overflow-hidden"
    style={{ background: "radial-gradient(40% 40% at 10% 14%, " + colors.secondaryLight + "55 0%, rgba(0,0,0,0) 70%), linear-gradient(160deg, " + colors.primaryLight + " 0%, " + colors.primary + " 50%, " + colors.primaryDark + " 100%)" }}    >
      <style>{`
      @keyframes twinkle {
        0%, 100% { opacity: 0.15; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.3); }
      }
    `}</style>

<div className="absolute inset-0 pointer-events-none overflow-hidden">
  {[
    { top: "12%", right: "15%", size: 4, delay: "0s", duration: "3s" },
    { top: "28%", right: "35%", size: 3, delay: "0.6s", duration: "2.4s" },
    { top: "8%", right: "55%", size: 5, delay: "1.2s", duration: "3.4s" },
    { top: "42%", right: "8%", size: 3, delay: "0.3s", duration: "2.8s" },
    { top: "20%", right: "75%", size: 4, delay: "1.6s", duration: "3s" },
    { top: "55%", right: "48%", size: 3, delay: "0.9s", duration: "2.6s" },
    { top: "35%", right: "20%", size: 2, delay: "2s", duration: "2.2s" },
    { top: "15%", right: "90%", size: 3, delay: "0.4s", duration: "3.2s" },
    { top: "38%", right: "85%", size: 3, delay: "1s", duration: "2.2s" },
    { top: "90%", right: "66%", size: 3, delay: "0.4s", duration: "2.7s" },
  ].map((s, i) => (
    <div
      key={i}
      className="absolute rounded-full"
      style={{
        top: s.top,
        right: s.right,
        width: s.size,
        height: s.size,
        background: colors.secondaryLight,
        boxShadow: `0 0 ${s.size * 2}px ${colors.secondaryLight}`,
        animation: `twinkle ${s.duration} ease-in-out infinite`,
        animationDelay: s.delay,
      }}
    />
  ))}
</div>

      <div
        className="hidden md:block absolute rounded-full"
        style={{
          top: 60,
          left: 70,
          width: 90,
          height: 90,
          boxShadow: "-26px 6px 0 5px " + colors.secondaryLight,
          opacity: 0.9,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-10 md:pt-32 md:pb-16 grid md:grid-cols-2 gap-6 md:gap-10 items-center text-center md:text-right relative z-10">
        <div>
          <span
            className="inline-block text-sm font-bold mb-4 px-4 py-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.1)", color: colors.secondary }}
          >
            زاد المسلم
          </span>

          <h1
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "'Amiri', serif", color: colors.bg }}
          >
            كل ما يحتاجه <span style={{color:colors.secondary}}> المسلم</span><br></br>في مكان واحد
          </h1>

          <p className="text-lg mb-8 max-w-md mx-auto md:mx-0" style={{ color: "rgba(251,246,236,0.78)" }}>
                زاد المسلم يجمع بين القرآن الكريم، مواقيت الصلاة، الأذكار، السنة النبوية، واتجاه القبلة في تجربة واحدة صُممت لترافقك في كل لحظة من يومك

          </p>

          <a
            href={links.playStore}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-black text-base"
            style={{ background: colors.secondary, color: colors.primaryDark, boxShadow: "0 12px 30px -10px rgba(231,137,59,0.5)" }}
          >
            حمّل التطبيق الآن مجانًا
          </a>

          <span className="block mt-3 text-xs" style={{ color: "rgba(251,246,236,0.55)" }}>
            متاح لاجهزة Andriod وقريبا ios
          </span>
        </div>

        <div className="relative mx-auto w-fit">
          <style>{`
            @keyframes floatCard {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
          `}</style>

          <div
            className="w-36 h-[290px] sm:w-56 sm:h-[460px] md:w-64 md:h-[520px] lg:w-72 lg:h-[580px] rounded-[28px] sm:rounded-[32px] p-1.5 sm:p-2 lg:p-3"
            style={{ background: "#0A1D1E", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(23,107,112,0.25)" }}
          >
            <div className="w-full h-full rounded-3xl bg-white/10 flex items-center justify-center text-white/40 text-sm"style={{overflow:'hidden'}} >
              <img src={heroImage} alt="زاد المسلم" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* كارت : الصلاة القادمة */}
          <div
            className="flex items-center gap-1.5 sm:gap-3 absolute -right-16 top-2 sm:-right-6 sm:top-10 rounded-lg sm:rounded-2xl px-2 py-1.5 sm:px-4 sm:py-3 z-20 max-w-[110px] sm:max-w-none"
            style={{
              background: floatCardBg,
              boxShadow: "-14px 18px 32px -8px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
              animation: "floatCard 5s ease-in-out infinite",
            }}
          >
            <div
              className="w-5 h-5 sm:w-9 sm:h-9 rounded-md sm:rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: colors.primary }}
            >
              <Clock size={10} className="sm:hidden" color="#fff" />
              <Clock size={16} className="hidden sm:block" color="#fff" />
            </div>
            <div className="text-right">
              <div className="text-[7px] sm:text-[11px] font-bold whitespace-nowrap" style={{ color: floatCardTitle }}>الصلاة القادمة</div>
              <div className="text-[10px] sm:text-sm font-black whitespace-nowrap" style={{ color: floatCardText }}>العصر · 04:41</div>
            </div>
          </div>

          {/* كارت : القارئ النشط */}
          <div
            className="flex items-center gap-1.5 sm:gap-3 absolute -left-16 bottom-6 sm:-left-8 sm:bottom-16 rounded-lg sm:rounded-2xl px-2 py-1.5 sm:px-4 sm:py-3 z-20 max-w-[110px] sm:max-w-none"
            style={{
              background: floatCardBg,
              boxShadow: "-14px 18px 32px -8px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
              animation: "floatCard 6s ease-in-out infinite 1.2s",
            }}
          >
            <div
              className="w-5 h-5 sm:w-9 sm:h-9 rounded-md sm:rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: colors.secondary }}
            >
              <Volume2 size={10} className="sm:hidden" color="#fff" />
              <Volume2 size={16} className="hidden sm:block" color="#fff" />
            </div>
            <div className="text-right min-w-0">
              <div className="text-[7px] sm:text-[11px] font-bold whitespace-nowrap" style={{ color: floatCardTitle }}>قارئ نشط الآن</div>
              <div className="text-[10px] sm:text-sm font-black " style={{ color: floatCardText }}>مشاري العفاسي</div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}