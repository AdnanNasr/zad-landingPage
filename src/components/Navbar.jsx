import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { links } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { colors, isDark, toggleTheme } = useTheme();
  const { translations: t, toggleLanguage } = useLanguage();
  const navLinks = useMemo(() => [
    { id: 'features', label: t.nav.features }, { id: 'screenshots', label: t.nav.screenshots },
    { id: 'why', label: t.nav.why }, { id: 'privacy', label: t.nav.privacy },
    { id: 'Github', label: t.nav.github }, { id: 'faq', label: t.nav.faq },
  ], [t]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur shadow-sm"
      style={{ background: 'rgba(23,107,112,0.85)' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
       <a
  href="#hero"
  className="flex items-center gap-2 text-xl font-bold transition-opacity hover:opacity-90"
  style={{ color: colors.secondary }}
>
  <img src="/logo 480x80.webp" alt={t.common.appName} className="w-8 h-8 rounded-full" />
 <span>{t.common.appName}</span>
</a>

        <div className="hidden md:flex gap-8 text-sm font-semibold">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="transition-colors duration-200"
              style={{ color: active === l.id ? colors.secondary : '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.secondary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = active === l.id ? colors.secondary : '#fff')}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleLanguage} aria-label={t.common.switchLanguage} className="h-10 min-w-10 px-3 rounded-full font-bold text-white" style={{ background: 'rgba(255,255,255,0.12)' }}>
            {t.common.languageShort}
          </button>
          <button
            onClick={toggleTheme}
            aria-label={isDark ? t.common.enableLight : t.common.enableDark}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            {isDark ? <Sun size={18} color="#fff" /> : <Moon size={18} color="#fff" />}
          </button>

          <a
            href={links.playStore}
            className="inline-flex rounded-full px-5 py-2 text-sm font-bold text-white transition-transform duration-200 hover:scale-105"
            style={{ background: colors.primary }}
          >
            {t.common.download}
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label={t.common.menu}>
          {menuOpen ? <X color="#fff" /> : <Menu color="#fff" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-5 text-sm font-semibold" style={{ color: colors.text, background: colors.cardBg }}>
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setMenuOpen(false)}
              style={{ color: active === l.id ? colors.secondary : colors.text, fontWeight: active === l.id ? 800 : 600 }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center gap-2 rounded-full px-4 py-2 font-bold"
            style={{ background: colors.pageBg, color: colors.text, border: `1px solid ${colors.border}` }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            {isDark ? t.common.lightMode : t.common.darkMode}
          </button>
          <button onClick={toggleLanguage} className="rounded-full px-4 py-2 font-bold" style={{ background: colors.pageBg, color: colors.text, border: `1px solid ${colors.border}` }}>
            {t.common.languageLabel}
          </button>
          <a
            href={links.playStore}
            className="rounded-full px-4 py-2 text-center font-bold text-white"
            style={{ background: colors.primary }}
          >
            {t.common.download}
          </a>
        </div>
      )}
    </nav>
  );
}
