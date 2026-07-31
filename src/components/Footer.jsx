import { Smartphone, Mail } from 'lucide-react';
import {  FaApple, FaGithub, FaFacebookF } from 'react-icons/fa';
import { colors, links } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="pt-16 pb-8" style={{ background: colors.primaryDark }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div className="md:text-right">
            <h3 className="text-2xl font-bold text-white mb-3">زاد المسلم</h3>
            <p className="text-white/70 leading-7 mb-6">
              تطبيق يجمع بين القرآن الكريم والأذكار ومواقيت الصلاة
              واتجاه القبلة في مكان واحد، مع احترام كامل لخصوصيتك.
            </p>

            <div className="flex flex-wrap justify-end gap-3">
              <a
                href={links.playStore}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition hover:scale-105"
                style={{ background: colors.secondary, color: colors.primary }}
              >
                <Smartphone size={18} />
                Google Play
              </a>

              <button
                disabled
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold cursor-default opacity-70 border"
                style={{ borderColor: "rgba(255,255,255,.2)", color: "#fff" }}
              >
                <FaApple size={18} />
                App Store
                <span className="text-xs opacity-70">قريبًا</span>
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-white mb-4">روابط</h4>
            <div className="flex flex-col gap-3 text-white/70">
              <a href={links.github}>GitHub</a>
              <a href={links.privacy}>سياسة الخصوصية</a>
              <a href={links.terms}>شروط الاستخدام</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">تواصل</h4>
            <div className="flex flex-col gap-3 text-white/70">
              <a href={`mailto:${links.email}`} className="flex items-center gap-2">
                <Mail size={18} />
                {links.email}
              </a>
              <a href={links.facebook} className="flex items-center gap-2">
                <FaFacebookF size={18} />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="my-8" style={{ borderTop: "1px solid rgba(255,255,255,.1)" }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-3">
            <a
              href={links.github}
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,.06)" }}
            >
              <FaGithub size={18} color="white" />
            </a>
            <a
              href={links.facebook}
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,.06)" }}
            >
              <FaFacebookF size={18} color="white" />
            </a>
          </div>
          <p className="text-white/50 text-sm text-center">
            © 2026 زاد المسلم. جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}