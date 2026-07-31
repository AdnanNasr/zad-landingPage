import { colors } from '../data/siteData';
import { Info } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="py-20 islamic-pattern" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center justify-center w-13 h-13 rounded-full mb-5 "
          style={{ background: colors.primary, width: 52, height: 52 }}
        >
          <Info size={24} color={colors.secondaryLight} />
        </div>

        <span className="block text-sm font-bold mb-4" style={{ color: colors.secondary }}>
          عن التطبيق
        </span>

        <p className="text-lg leading-loose" style={{ color: '#3a3a34' }}>
          زاد المسلم يجمع بين{' '}
          <span style={{ fontFamily: "'Amiri', serif", fontWeight: 700, color: colors.primary }}>
            القرآن الكريم ، مواقيت الصلاة ، الاذكار ، السنة النبوية ، اتجاه القبلة 
          </span>
          {' '}
             في تجربة واحدة صُممت لترافقك في كل لحظة من يومك.
          استمع إلى أكثر من
          {' '}
          <span style={{ fontWeight: 700, color: colors.secondary }}>30 قارئًا</span>
          ، وحمّل السور أو المصحف كاملًا للاستماع 
          {' '}<span style={{ fontWeight: 700, color: colors.secondary }}>دون انترنت</span>
          ، وتابع قراءتك من حيث توقفت بلمسة واحدة.
          احصل على مواقيت صلاة دقيقة مع تنبيهات الأذان والعد التنازلي للصلاة القادمة، واستفد من الأذكار
          اليومية وحصن المسلم، وتصفح الأحاديث النبوية بسهولة، مع بوصلة دقيقة لتحديد اتجاه القبلة،
          والتاريخين الهجري والميلادي، وتشغيل التلاوات في الخلفية مع التحكم بها مباشرة من الإشعارات
          وشاشة القفل.
        </p>
      </div>
    </section>
  );
}