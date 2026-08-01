import { BookOpen, Clock, Heart, ScrollText, Compass, Volume2, WifiOff, BookMarked ,CheckCircle2 } from 'lucide-react';
import { Gift, ShieldOff, Lock, Code2 } from 'lucide-react';

export const colors = {
  primary: "#176B70",
  primaryDark: "#0A3538",
  primaryLight: "#2E8F94",
  secondary: "#E7893B",
  secondaryLight: "#F3C08A",
  ink: "#1B1B1B",
  bg: "#FAFAF8",
  cream: "#EEF5F4",
};

// رابط الموقع الرسمي — بيتقرا من ملف .env (REACT_APP_SITE_URL)
// غيّريه من هناك مش هنا
export const siteUrl = process.env.REACT_APP_SITE_URL || "https://zad-landing-pae-a83t.vercel.app";

export const links = {
  playStore: "https://play.google.com/store/apps/details?id=com.zad_al_muslim.adnan",
  github: "https://github.com/AdnanNasr/Zad_Al-Muslim",
  privacy: "https://adnannasr.github.io/Zad_Al-Muslim/privacy-policy.html",
  terms: "https://adnannasr.github.io/Zad_Al-Muslim/terms-of-use.html",
  email: "adnzed00@gmail.com",
  facebook: "https://www.facebook.com/ADN557",
};

export const stats = [
  { number: "5", label: "كتب تفسير" },
  { number: "7,563", label: "حديثًا" },
  { number: "+30", label: "قارئًا" },
  { number: "5", label: "إصدارات" },
  { number: "+70", label: "مستخدمًا" },
];

export const features = [
  {
    icon: BookOpen,
    title: "القرآن الكريم",
    desc: "قراءة المصحف، متابعة موضع القراءة تلقائيًا، والاستماع لأكثر من 30 قارئًا.",
  },
  {
    icon: BookMarked,
    title: "التفاسير",
    desc: "الوصول إلى خمسة كتب تفسير متاحة داخل التطبيق.",
  },
  {
    icon: Clock,
    title: "مواقيت الصلاة",
    desc: "مواقيت دقيقة، تنبيهات الأذان، وعد تنازلي للصلاة القادمة.",
  },
  {
    icon: ScrollText,
    title: "الأحاديث النبوية",
    desc: "تصفح 7,563 حديثًا بطريقة منظمة وسهلة.",
  },
  {
    icon: Heart,
    title: "الأذكار وحصن المسلم",
    desc: "أذكار يومية ومحتوى مناسب لمختلف أوقات اليوم.",
  },
  {
    icon: Compass,
    title: "اتجاه القبلة",
    desc: "بوصلة لتحديد اتجاه القبلة اعتمادًا على موقعك.",
  },
  {
    icon: Volume2,
    title: "التلاوات الصوتية",
    desc: "تشغيل في الخلفية والتحكم مباشرة من الإشعارات وشاشة القفل.",
  },
  {
    icon: WifiOff,
    title: "العمل دون إنترنت",
    desc: "معظم أجزاء التطبيق متاحة دون إنترنت بعد تنزيل المحتوى.",
  },
];

export const screenshots = [
  { title: "الصفحة الرئيسية", src: "/home_page.png" },
  { title: "مواقيت الصلاة", src: "/pray_times.png" },
  { title: "القرآن الكريم", src: "/quran_page.png" },
  { title: "الأحاديث", src: "/hadith_page.png" },
  { title: "القرآن المرتل والصوتيات", src: "/quran_voice_page.png" },
  { title: "اتجاه القبلة", src: "/qibla_page.png" },
  { title: "الإعدادات", src: "/settings_page.png" },
  { title: "الوضع الداكن", src: "/home_page_darkmode_green_theme.png" },
];
 
export const whyPoints = [
  { icon: Gift, title: "مجاني بالكامل", desc: "بدون أي رسوم أو اشتراكات." },
  { icon: ShieldOff, title: "بدون إعلانات", desc: "تجربة نظيفة من أول لحظة." },
  { icon: Lock, title: "خصوصيتك محفوظة", desc: "لا نجمع أي بيانات عن المستخدمين." },
  { icon: WifiOff, title: "يعمل دون إنترنت", desc: "معظم الأقسام متاحة بدون اتصال." },
  { icon: Code2, title: "مفتوح المصدر", desc: "الكود متاح للجميع على GitHub." },
];





export const faqs = [
  { q: "هل التطبيق مجاني؟", a: "نعم، التطبيق مجاني بالكامل." },
  { q: "هل يحتوي على إعلانات؟", a: "لا، التطبيق خالٍ تمامًا من الإعلانات." },
  { q: "هل يعمل دون إنترنت؟", a: "يعمل جزء كبير من التطبيق دون إنترنت، بينما تتطلب بعض العمليات مثل تنزيل التفاسير والتلاوات اتصالًا بالإنترنت." },
  { q: "لماذا يحتاج التطبيق إلى تحديد الموقع؟", a: "لاستخدامه في حساب مواقيت الصلاة وتحديد اتجاه القبلة فقط." },
  { q: "هل يجمع بيانات المستخدمين؟", a: "لا، التطبيق لا يجمع أي بيانات عن المستخدمين." },
  { q: "هل التطبيق متوفر على iPhone؟", a: "غير متوفر حاليًا، ومن المخطط طرح نسخة على App Store مستقبلًا." },
  { q: "كيف يمكنني الإبلاغ عن مشكلة؟", a: "عبر مراسلة المطور من صفحة التطبيق في المتجر، أو إنشاء Issue في مستودع GitHub." },
];

export const qrCodeSrc = "/qr-code.svg";  

export {CheckCircle2};