import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { colors, links } from '../data/siteData';

const navLinks = [
  { id: 'features', label: 'المزايا' },
  { id: 'screenshots', label: 'صور التطبيق' },
  { id: 'why', label: 'لماذا زاد المسلم' },
  { id: 'privacy', label: 'الخصوصية' },
  { id: 'Github', label: 'المساهمة' },
  { id: 'faq', label: 'الأسئلة الشائعة' },
];

export default function Navbar() {
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
  }, []);

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
  <img src="/logo 480x80.webp" alt="زاد المسلم" className="w-8 h-8 rounded-full" />
 <span>زاد المسلم</span> 
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

        <a
          href={links.playStore}
          className="hidden md:inline-flex rounded-full px-5 py-2 text-sm font-bold text-white transition-transform duration-200 hover:scale-105"
          style={{ background: colors.primary }}
        >
          تحميل التطبيق
        </a>

        <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="القائمة">
          {menuOpen ? <X color="#fff" /> : <Menu color="#fff" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-5 text-sm font-semibold" style={{ color: colors.ink }}>
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setMenuOpen(false)}
              style={{ color: active === l.id ? colors.secondary : colors.ink, fontWeight: active === l.id ? 800 : 600 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={links.playStore}
            className="rounded-full px-4 py-2 text-center font-bold text-white"
            style={{ background: colors.primary }}
          >
            تحميل التطبيق
          </a>
        </div>
      )}
    </nav>
  );
}