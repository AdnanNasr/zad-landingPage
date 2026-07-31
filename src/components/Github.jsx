import { FaGithub } from 'react-icons/fa';
import { colors, links } from '../data/siteData';

export default function GithubSection() {
  return (
    <section className="py-20" style={{ background: colors.bg }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-sm font-bold" style={{ color: colors.secondary }}>مفتوح المصدر</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: colors.primaryDark }}>
            شارك في تطوير زاد المسلم
          </h2>
        </div>

        <div
          className="rounded-3xl px-5 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8 relative"
          style={{ background: colors.primaryDark }}
        >

          <div className="flex items-start justify-end gap-4 text-right order-1 md:order-2">
            <FaGithub size={36} color="#fff" className="flex-none mt-1" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">مشروع مفتوح المصدر بالكامل</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                يمكنك الاطلاع على الكود، اقتراح تحسينات، أو المساهمة مباشرة في تطوير التطبيق عبر GitHub.
              </p>
            </div>
            <a
            href={links.github}
            className="flex-none rounded-full px-6 py-3 font-bold text-sm absolute left-5 md:left-8 top-1/2 -translate-y-1/2 order-2 md:order-1"
            style={{ background: '#fff', color: colors.primaryDark }}
          >
              زيارة المستودع  ↗   
          </a>
          </div>
        </div>

      </div>
    </section>
  );
}