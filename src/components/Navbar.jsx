import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { colors, links } from '../data/siteData';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur shadow-sm"
    style={{background:'rgba(23,107,112,0.85)'}}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold" style={{ color: colors.secondary }}>
          {/* لما الشعار يوصل من العميل: حطيه في public/logo.png وشيلي السطر اللي تحت */}
          <img src="/logo.jpg" alt="زاد المسلم" className="w-8 h-8 rounded-full" />
          زاد المسلم
        </div>

        {/* روابط الديسكتوب - زي ما هي */}
        <div className="hidden md:flex gap-8 text-sm font-semibold" style={{ color: '#fff' }}>
          <a href="#features">المزايا</a>
          <a href="#screenshots">صور التطبيق</a>
          <a href="#faq">الأسئلة الشائعة</a>
        </div>

        <a
          href={links.playStore}
          className="hidden md:inline-flex rounded-full px-5 py-2 text-sm font-bold text-white"
          style={{ background: colors.primary }}>
          تحميل التطبيق
        </a>

        {/* زرار الهامبرجر - يظهر بس على الموبايل */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="القائمة"
        >
          {menuOpen ? <X color={colors.primary} /> : <Menu color={colors.primary} />}
        </button>
      </div>

      {/* القايمة نفسها - بتظهر بس لما menuOpen يبقى true وعلى الموبايل فقط */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-5 text-sm font-semibold" style={{ color: colors.ink }}>
          <a href="#features" onClick={() => setMenuOpen(false)}>المزايا</a>
          <a href="#screenshots" onClick={() => setMenuOpen(false)}>صور التطبيق</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>الأسئلة الشائعة</a>
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