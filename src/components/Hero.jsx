import { Clock, Volume2 } from 'lucide-react';
import { colors, links } from '../data/siteData';

export default function Hero() {
  return (
    <header className="relative overflow-hidden"
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

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 grid md:grid-cols-2 gap-10 items-center text-center md:text-right relative z-10">
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
            حمّل التطبيق مجانًا
          </a>

          <span className="block mt-3 text-xs" style={{ color: "rgba(251,246,236,0.55)" }}>
            متاح الآن على أندرويد
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
            className="w-64 h-[520px] rounded-[38px] p-3"
            style={{ background: "#0A1D1E", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(23,107,112,0.25)" }}
          >
            <div className="w-full h-full rounded-3xl bg-white/10 flex items-center justify-center text-white/40 text-sm"style={{overflow:'hidden'}} >
              <img src="/images.png" alt="زاد المسلم" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* كارت : الصلاة القادمة */}
          <div
            className="hidden sm:flex items-center gap-3 absolute -right-6 top-10 rounded-2xl px-4 py-3 z-20"
            style={{
              background: colors.bg,
              boxShadow: "0 20px 40px -15px rgba(10,53,56,0.45)",
              animation: "floatCard 5s ease-in-out infinite",
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
style={{ background: colors.primary }}
            >
              <Clock size={16} color="#fff" />
            </div>
            <div className="text-right">
              <div className="text-[11px] font-bold" style={{ color: "#8a8a80" }}>الصلاة القادمة</div>
              <div className="text-sm font-black" style={{ color: colors.primary }}>العصر · 04:41</div>
            </div>
          </div>

          {/* كارت : القارئ النشط */}
          <div
            className="hidden sm:flex items-center gap-3 absolute -left-8 bottom-16 rounded-2xl px-4 py-3 z-20"
            style={{
              background: colors.bg,
              boxShadow: "0 20px 40px -15px rgba(10,53,56,0.45)",
              animation: "floatCard 6s ease-in-out infinite 1.2s",
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: colors.secondary }}
            >
              <Volume2 size={16} color="#fff" />
            </div>
            <div className="text-right">
              <div className="text-[11px] font-bold" style={{ color: "#8a8a80" }}>قارئ نشط الآن</div>
              <div className="text-sm font-black" style={{ color: colors.primary }}>مشاري العفاسي</div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}