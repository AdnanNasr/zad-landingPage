import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { colors, faqs } from '../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="py-24 islamic-pattern"
      style={{ backgroundColor: '#F8F3E6' }}
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <span
            className="text-sm font-bold tracking-wide"
            style={{ color: colors.secondary }}
          >
            الأسئلة الشائعة
          </span>

          <h2
            className="text-4xl font-extrabold mt-4"
            style={{ color: colors.primary }}
          >
            لديك سؤال؟
          </h2>
        </div>

        <div className="border-t border-[#DDD4BF]">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-b border-[#DDD4BF]"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-7 text-right transition-all duration-200 hover:bg-[#FCF8EE]"
              >

                <span
                  className="textlg font-bold"
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
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? 'max-h-48 pb-7'
                    : 'max-h-0'
                }`}
              >
                <p
                  className="text-base leading-8 pr-1"
                  style={{ color: '#555' }}
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