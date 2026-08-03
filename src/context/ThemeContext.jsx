import { createContext, useContext, useEffect, useState } from 'react';
import { lightColors, darkColors } from '../data/siteData';

// نظام الوضع الداكن/الفاتح لكل الموقع

const ThemeContext = createContext(null);

function getInitialTheme() {
  // 1) لو الزائر سبق واختار وضع معيّن، نستخدمه
  const saved = window.localStorage.getItem('zad-theme');
  if (saved === 'dark' || saved === 'light') return saved;

  // 2) لو مفيش اختيار محفوظ، نتبع إعدادات جهاز الزائر
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    window.localStorage.setItem('zad-theme', theme);
    // بنضيف/بنشيل كلاس "dark" على <html> عشان أي استايل CSS يقدر يستخدمه لو احتجنا
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const value = {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    colors: theme === 'dark' ? darkColors : lightColors,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme لازم يتستخدم جوه ThemeProvider');
  }
  return ctx;
}
