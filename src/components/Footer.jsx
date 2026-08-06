import {  Mail } from 'lucide-react';
import { FaApple, FaGithub, FaFacebookF ,FaGooglePlay} from 'react-icons/fa';
import { links } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { colors } = useTheme();
  const { translations: t } = useLanguage();
  return (
    <footer className="pt-16 pb-8" style={{ background: colors.primaryDark }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 text-center directional-text">

          {/* About */}
          <div className="md:max-w-sm">
            <h3 className="text-2xl font-bold text-white mb-3">{t.common.appName}</h3>
            <p className="text-white/70 leading-7 mb-6">
              {t.footer.description}
            </p>

            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              <a
                href={links.playStore}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition-transform duration-300 hover:scale-105"
                style={{ background: colors.secondary, color: colors.primaryDark }}
              >
                <FaGooglePlay size={18} />
                Google Play
              </a>

              <button
                disabled
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold cursor-default opacity-70 border"
                style={{ borderColor: "rgba(255,255,255,.2)", color: "#fff" }}
              >
                <FaApple size={18} />
                App Store
                <span className="text-xs opacity-70">{t.footer.soon}</span>
              </button>
            </div>
          </div>

          {/* Links + Contact, close together, on the left */}
          <div className="flex justify-center md:justify-start gap-14">
            <div>
              <h4 className="text-lg font-bold text-white mb-4">{t.footer.links}</h4>
              <div className="flex flex-col gap-3 text-white/70">
                {[
                  { label: 'GitHub', href: links.github },
                  { label: t.footer.privacy, href: links.privacy },
                  { label: t.footer.terms, href: links.terms },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="relative w-fit group transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                    <span
                      className="absolute -bottom-1 right-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full"
                      style={{ background: colors.secondary }}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">{t.footer.contact}</h4>
              <div className="flex flex-col gap-3 text-white/70">
                <a href={`mailto:${links.email}`} className="flex items-center gap-2 transition-colors duration-200 hover:text-white">
                  <Mail size={18} />
                  {links.email}
                </a>
                <a href={links.facebook} className="flex items-center gap-2 transition-colors duration-200 hover:text-white">
                  <FaFacebookF size={18} />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8" style={{ borderTop: "1px solid rgba(255,255,255,.1)" }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-3">
            <a
              href={links.github}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
             style={{ background: "rgba(255,255,255,.06)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.secondary)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.06)")}
            >
              <FaGithub size={18} color="white" />
            </a>
            <a
              href={links.facebook}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,.06)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.secondary)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,.06)")}
            >
              <FaFacebookF size={18} color="white" />
            </a>
          </div>
          <p className="text-white/50 text-sm text-center">
            {t.footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}
