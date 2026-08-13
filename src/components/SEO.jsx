import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { links, siteUrl } from "../data/siteData";

const seo = {
  ar: {
    title: "زاد المسلم | تطبيق القرآن والأذكار ومواقيت الصلاة",
    description:
      "حمّل تطبيق زاد المسلم المجاني للأندرويد: القرآن الكريم والتفاسير والتلاوات، مواقيت الصلاة وتنبيهات الأذان، الأذكار وحصن المسلم، الأحاديث واتجاه القبلة، بلا إعلانات.",
    keywords:
      "زاد المسلم, تطبيق زاد المسلم, تطبيق إسلامي, تطبيق مسلم, القرآن الكريم, تطبيق القرآن الكريم, قراءة القرآن, القرآن صوت, تلاوات القرآن, تفسير القرآن, مواقيت الصلاة, أوقات الصلاة, تنبيهات الأذان, الأذكار اليومية, أذكار الصباح والمساء, حصن المسلم, الأحاديث النبوية, السنة النبوية, اتجاه القبلة, بوصلة القبلة, تطبيق إسلامي بدون إعلانات, تطبيق إسلامي بدون إنترنت",
    locale: "ar_AR",
    imageAlt: "تطبيق زاد المسلم للقرآن الكريم والأذكار ومواقيت الصلاة واتجاه القبلة",
  },
  en: {
    title: "Zad Al-Muslim | Quran, Adhkar & Prayer Times App",
    description:
      "Download Zad Al-Muslim, a free Android app for the Quran, tafsir and recitations, prayer times and adhan alerts, daily adhkar, hadith and Qibla direction—with no ads.",
    keywords:
      "Zad Al-Muslim, Muslim app, Islamic app, Quran app, Holy Quran, Quran recitation, Quran tafsir, prayer times, adhan alerts, daily adhkar, morning adhkar, evening adhkar, Hisn Al-Muslim, hadith app, Sunnah, Qibla direction, Qibla compass, free Islamic app, offline Muslim app, ad-free Islamic app",
    locale: "en_US",
    imageAlt: "Zad Al-Muslim app for Quran, adhkar, prayer times and Qibla direction",
  },
};

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function setStructuredData(id, data) {
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

export default function SEO() {
  const { language, translations: t } = useLanguage();

  useEffect(() => {
    const content = seo[language];
    const baseUrl = siteUrl.replace(/\/+$/, "");
    const pageUrl = `${baseUrl}/`;
    const imageUrl = `${baseUrl}/og.png`;

    document.title = content.title;
    setMeta('meta[name="description"]', "content", content.description);
    setMeta('meta[name="keywords"]', "content", content.keywords);
    setMeta('meta[property="og:title"]', "content", content.title);
    setMeta('meta[property="og:description"]', "content", content.description);
    setMeta('meta[property="og:locale"]', "content", content.locale);
    setMeta('meta[property="og:image:alt"]', "content", content.imageAlt);
    setMeta('meta[name="twitter:title"]', "content", content.title);
    setMeta('meta[name="twitter:description"]', "content", content.description);
    setMeta('meta[name="twitter:image:alt"]', "content", content.imageAlt);

    const applicationSchema = {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: language === "ar" ? "زاد المسلم" : "Zad Al-Muslim",
      alternateName: language === "ar" ? "Zad Al-Muslim" : "زاد المسلم",
      operatingSystem: "Android",
      applicationCategory: "LifestyleApplication",
      applicationSubCategory: "Islamic application",
      inLanguage: ["ar", "en"],
      url: pageUrl,
      downloadUrl: links.playStore,
      installUrl: links.playStore,
      image: imageUrl,
      screenshot: `${baseUrl}/home.webp`,
      description: content.description,
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Person", name: "Adnan Nasr" },
      sameAs: [links.playStore, links.github],
      featureList: t.features.items.map((item) => item.title),
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: language,
      mainEntity: t.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: language === "ar" ? "زاد المسلم" : "Zad Al-Muslim",
      alternateName: language === "ar" ? "Zad Al-Muslim" : "زاد المسلم",
      url: pageUrl,
      inLanguage: ["ar", "en"],
    };

    setStructuredData("application-schema", applicationSchema);
    setStructuredData("faq-schema", faqSchema);
    setStructuredData("website-schema", websiteSchema);
  }, [language, t]);

  return null;
}
