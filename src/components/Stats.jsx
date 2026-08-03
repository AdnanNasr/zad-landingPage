import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

function parseStat(raw) {
  const prefix = raw.trim().startsWith('+') ? '+' : '';
  const target = parseInt(raw.replace(/[^0-9]/g, ''), 10) || 0;
  return { target, prefix };
}

export default function Stats() {
  const { colors } = useTheme();
  const cardRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // يبدأ العدّ أول ما الكارت يظهر في الشاشة (مرة واحدة بس)
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const parsed = stats.map((s) => parseStat(s.number));
    const duration = 1400;
    const startTime = performance.now();
    let frameId;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setCounts(parsed.map((p) => Math.round(p.target * eased)));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started]);

  return (
  <section className="relative z-20 px-6 py-16 md:py-0">
    <div
      ref={cardRef}
      className="max-w-5xl mx-auto md:-mt-12 rounded-3xl px-6 py-8 md:py-10"
      style={{
        background: colors.cardBg,
        boxShadow: '0 35px 70px -25px rgba(10,53,56,0.4), 0 0 0 1px rgba(23,107,112,0.08)',
      }}
    >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 text-center">
          {stats.map((s, i) => {
            const { prefix } = parseStat(s.number);
            return (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black" style={{ color: colors.primary }}>
                  {prefix}
                  {counts[i].toLocaleString('en-US')}
                </div>
                <div className="text-sm mt-1" style={{ color: colors.textFaint }}>{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
