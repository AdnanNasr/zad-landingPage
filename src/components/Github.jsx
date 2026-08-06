import { FaGithub } from 'react-icons/fa';
import { links } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import {ArrowUpLeft} from "lucide-react";
import { useLanguage } from '../context/LanguageContext';

export default function GithubSection() {
  const { colors } = useTheme();
  const { translations: t, direction } = useLanguage();
  return (
    <section id="Github" className="py-20" style={{ background: colors.pageBg }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-sm font-bold" style={{ color: colors.secondary }}>{t.github.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: colors.text }}>
            {t.github.title}
          </h2>
        </div>

        <div
          className="rounded-3xl px-5 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8 relative"
          style={{ background: "linear-gradient(155deg, #2b2f31 0%, #0d0e0f 45%, #1a1c1d 100%)" }}
        >

          <div className="flex flex-col md:flex-row items-center md:items-start justify-end gap-5 text-center directional-text order-1 md:order-2">

          <div className="flex items-start gap-4">
            <FaGithub size={36} color="#fff" className="flex-none mt-1" />

            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t.github.cardTitle}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {t.github.description}
              </p>
            </div>
          </div>

          <a
            href={links.github}
            className={`rounded-full px-6 py-3 font-bold text-sm md:absolute ${direction === 'rtl' ? 'md:left-8' : 'md:right-8'} md:top-1/2 md:-translate-y-1/2`}
            style={{ background: '#fff', color: colors.primaryDark }}
          >
            {t.github.cta}
            <ArrowUpLeft size={16} className="inline-block mx-2" />
          </a>

        </div>

        </div>

      </div>
    </section>
  );
}
