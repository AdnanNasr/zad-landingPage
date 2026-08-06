import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('zad-language') || 'ar');
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('zad-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  const value = useMemo(() => ({
    language,
    direction,
    translations: translations[language],
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === 'ar' ? 'en' : 'ar'),
  }), [language, direction]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
