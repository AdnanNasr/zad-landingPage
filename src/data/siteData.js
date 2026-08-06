import { BookOpen, Clock, Heart, ScrollText, Compass, Volume2, WifiOff, BookMarked ,CheckCircle2 } from 'lucide-react';
import { Gift, ShieldOff, Lock, Code2 } from 'lucide-react';

// ألوان الوضع الفاتح (الافتراضي)
export const lightColors = {
  primary: "#176B70",
  primaryDark: "#0A3538",
  primaryLight: "#2E8F94",
  secondary: "#E7893B",
  secondaryLight: "#F3C08A",
  ink: "#1B1B1B",
  bg: "#FAFAF8",
  cream: "#EEF5F4",
  // ألوان إضافية عشان الوضع الداكن يقدر يبدّلها بسهولة  
  pageBg: "#FAFAF8",      
  cardBg: "#ebf6ff",      
  faqBg: "#F8F3E6",       
  faqHover: "#FCF8EE",    
  border: "#e5e0d0",      
  faqBorder: "#DDD4BF",   
  text: "#3a3a34",       
  textMuted: "#555555",   
  textFaint: "#666666",   
  sectionAccentBg:"#176B70",
  missionText: "#176B70",
  downloadNow: "#a5bdbd"
};

// ألوان الوضع الداكن
export const darkColors = {
  primary: "#2E8F94",
  primaryDark: "#04100F",
  primaryLight: "#176B70",
  secondary: "#E7893B",
  secondaryLight: "#F3C08A",
  ink: "#0E0E0E",
  bg: "#0B1E1F",
  cream: "#0F2A2C",
  pageBg: "#17383a",
  cardBg: "#102B2D",
  faqBg: "#0C2224",
  faqHover: "#123234",
  border: "#1E3B3D",
  faqBorder: "#1E3B3D",
  text: "#EDEAE0",
  textMuted: "#B9C4C3",
  textFaint: "#9AA6A5",
  sectionAccentBg:"#17383a",
  missionText: "#EDEAE0",
  downloadNow: "#a5bdbd"
};

//  الوضع الفاتح افتراضيًا
export const colors = lightColors;

// رابط الموقع الرسمي — بيتقرا من ملف .env (REACT_APP_SITE_URL)
export const siteUrl = process.env.REACT_APP_SITE_URL || "https://zad_al_muslim.adnandev.cloud";

export const links = {
  playStore: "https://play.google.com/store/apps/details?id=com.zad_al_muslim.adnan",
  github: "https://github.com/AdnanNasr/Zad_Al-Muslim",
  privacy: "https://adnannasr.github.io/Zad_Al-Muslim/privacy-policy.html",
  terms: "https://adnannasr.github.io/Zad_Al-Muslim/terms-of-use.html",
  email: "adnzed00@gmail.com",
  facebook: "https://www.facebook.com/ADN557",
};

export const featureIcons = [BookOpen, BookMarked, Clock, ScrollText, Heart, Compass, Volume2, WifiOff];

// صور الموقع light & dark
export const screenshotImages = [
  { src: "/home.webp", srcDark: "/home_dark.webp" },
  { src: "/PrayersTime.webp", srcDark: "/prayersTime_dark.webp" },
  { src: "/quran.webp", srcDark: "/quran_dark.webp" },
  { src: "/sunnah&hadith.webp", srcDark: "/sunnah&hadith_dark.webp" },
  { src: "/quranMurattal.webp", srcDark: "/quranMurattal_dark.webp" },
  { src: "/qibla.webp", srcDark: "/qibla_dark.webp" },
  { src: "/settings.webp", srcDark: "/settings_dark.webp" },
];
 
export const whyIcons = [Gift, ShieldOff, Lock, WifiOff, Code2];

//qr code
export const qrCodeSrc = "/qr-code.svg";  

export {CheckCircle2};
