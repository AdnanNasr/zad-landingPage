import { colors, CheckCircle2 } from '../data/siteData';
import { ShieldCheck } from 'lucide-react';

const privacyPoints = [
  "لا يجمع التطبيق أي بيانات عن المستخدمين.",
  "إذن الموقع يُستخدم فقط لحساب مواقيت الصلاة وتحديد اتجاه القبلة.",
  "الإنترنت مطلوب مرة واحدة لجلب مدينتك، وبعدها تعمل المواقيت محليًا.",
  "الإنترنت مطلوب أيضًا عند تنزيل التفاسير أو تحميل التلاوات للاستماع دون اتصال.",
  "معظم أقسام التطبيق تعمل بالكامل دون إنترنت.",
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-10">
          <span className="text-sm font-bold" style={{ color: colors.secondary }}>الخصوصية والأذونات</span>
          <h2 className="text-3xl font-bold mt-3" style={{ color: colors.primary }}>نحن نحترم خصوصيتك </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
          <div className="flex justify-center" style={{ marginLeft: 'auto', marginRight: '2rem' }}>
            <ShieldCheck size={240} color={colors.secondary} strokeWidth={1.2} />
          </div>

          <div>
            {privacyPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-4"
                style={{ borderBottom: i < privacyPoints.length - 1 ? '1px solid #e5e0d0' : 'none' }}
              >
                <CheckCircle2 size={20} color={colors.primary} className="mt-0.5 flex-shrink-0" />
                <p style={{ color: '#444' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}