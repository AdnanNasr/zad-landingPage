import { screenshotImages } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

function PhoneFrame({ shot, isDark }) {
  // لو فيه صورة مخصصة للوضع الداكن نستخدمها، لو مفيش نفضل على الصورة العادية
  const imgSrc = isDark && shot.srcDark ? shot.srcDark : shot.src;
  return (
    <div
      className="relative rounded-[34px] p-[10px]"
      style={{
        background: 'linear-gradient(155deg, #2b2f31 0%, #0d0e0f 45%, #1a1c1d 100%)',
        boxShadow:
          '0 20px 40px -18px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 1px rgba(255,255,255,0.12)',
      }}
    >
      {/* زر الباور */}
      <div
        className="absolute -right-[3px] top-20 w-[3px] h-10 rounded-r"
        style={{ background: '#050506' }}
      />
      {/* زراير الصوت */}
      <div
        className="absolute -left-[3px] top-14 w-[3px] h-6 rounded-l"
        style={{ background: '#050506' }}
      />
      <div
        className="absolute -left-[3px] top-24 w-[3px] h-6 rounded-l"
        style={{ background: '#050506' }}
      />

      {/* الشاشة */}
      <div
        className="relative rounded-[24px] overflow-hidden aspect-[9/19]"
        style={{ background: '#000' }}
      >
        {imgSrc ? (
          <img src={imgSrc} alt={shot.title} loading="lazy" className="w-full h-full object-contain" />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-center text-xs p-3"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', border: '1px dashed rgba(255,255,255,0.15)' }}
          >
            {shot.title}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Screenshots() {
  const { colors, isDark } = useTheme();
  const { translations: t } = useLanguage();
  const screenshots = screenshotImages.map((shot, index) => ({ ...shot, title: t.screenshots.items[index] }));
  const loop = [...screenshots, ...screenshots, ...screenshots, ...screenshots];

  return (
    <section id="screenshots" className="py-20 overflow-hidden" style={{ background: colors.pageBg }}>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        .shots-track {
          animation: marquee 45s linear infinite;
        }`
      }</style>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-sm font-bold" style={{ color: colors.secondary }}>{t.screenshots.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: colors.primary }}>{t.screenshots.title}</h2>
        </div>
      </div>

      <div className="w-full" dir="ltr">
        <div className="shots-track flex gap-6 w-max">
          {loop.map((shot, i) => (
            <div key={i} className="flex-none w-40 md:w-56 lg:w-64">
              <PhoneFrame shot={shot} isDark={isDark} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
