import { useState, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { colors, screenshots } from '../data/siteData';

export default function Screenshots() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(screenshots.length - 1, i));
    setActive(clamped);
    itemRefs.current[clamped]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
    <section id="screenshots" className="py-20" style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-sm font-bold" style={{ color: colors.secondary }}>لمحة من الداخل</span>
          <h2 className="text-3xl font-bold mt-3" style={{ color: colors.primary }}>شكل التطبيق</h2>
        </div>

        {/* نفس الصف الأصلي - قابل للسحب، مع scroll-snap عشان يستقر في النص */}
        <div className="flex items-center gap-5 overflow-x-auto pb-4 px-1" style={{ scrollSnapType: 'x mandatory' }}>
          {screenshots.map((shot, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={() => goTo(i)}
                className={`flex-none transition-all duration-300 cursor-pointer ${
                  isActive ? 'w-44 md:w-52' : 'w-40 md:w-48'
                }`}
                style={{ scrollSnapAlign: 'center' }}
              >
                <div
                  className="rounded-[28px] p-2 aspect-[9/19] transition-all duration-300"
                  style={{
                    background: '#0A1D1E',
                    border: isActive ? `3px solid ${colors.secondary}` : '3px solid transparent',
                    boxShadow: isActive
                      ? '0 24px 44px -18px rgba(0,0,0,0.4), 0 0 0 1px rgba(23,107,112,0.2)'
                      : '0 20px 40px -18px rgba(0,0,0,0.35), 0 0 0 1px rgba(23,107,112,0.2)',
                  }}
                >
                  {shot.src ? (
                    <img src={shot.src} alt={shot.title} loading="lazy" className="w-full h-full object-cover rounded-2xl" />
                  ) : (
                    <div
                      className="w-full h-full rounded-2xl flex items-center justify-center text-center text-xs p-3"
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', border: '1px dashed rgba(255,255,255,0.15)' }}
                    >
                      {shot.title}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* الأسهم */}
        <div className="flex gap-3 justify-center mt-6">
          <button
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="السابق"
            className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30"
            style={{ border: `1px solid ${colors.primary}40`, background: '#fff', color: colors.primary }}
          >
            <ArrowRight size={17} />
          </button>
          <button
            onClick={() => goTo(active + 1)}
            disabled={active === screenshots.length - 1}
            aria-label="التالي"
            className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30"
            style={{ background: colors.secondary, color: '#fff' }}
          >
            <ArrowLeft size={17} />
          </button>
        </div>

      </div>
    </section>
  );
}