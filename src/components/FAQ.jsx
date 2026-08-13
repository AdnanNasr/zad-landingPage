import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function FAQ() {
  const { colors } = useTheme();
  const { translations: t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="py-24 islamic-pattern"
      style={{ backgroundColor: colors.faqBg }}
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <span
            className="text-sm font-bold tracking-wide"
            style={{ color: colors.secondary }}
          >
            {t.faq.label}
          </span>

          <h2
            className="text-3xl md:text-4xl font-extrabold mt-4"
            style={{ color: colors.primary }}
          >
            {t.faq.title}
          </h2>
        </div>

        <div >

          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="border-b"
              style={{ borderColor: colors.faqBorder }}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex items-center justify-between py-7 directional-text transition-all duration-200"
                onMouseEnter={(e) => (e.currentTarget.style.background = colors.faqHover)}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >

                <span
                  className="text-lg font-bold"
                  style={{ color: colors.primary }}
                >
                  {item.q}
                </span>

                {openIndex === i ? (
                  <Minus
                    size={24}
                    style={{ color: colors.secondary }}
                    className="flex-shrink-0"
                  />
                ) : (
                  <Plus
                    size={24}
                    style={{ color: colors.secondary }}
                    className="flex-shrink-0"
                  />
                )}

              </button>

              <div
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? 'max-h-48 pb-7'
                    : 'max-h-0'
                }`}
              >
                <p
                  className="text-base leading-8 px-1 directional-text"
                  style={{ color: colors.textMuted }}
                >
                  {item.a}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
