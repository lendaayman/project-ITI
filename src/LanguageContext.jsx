import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from './locales/en';
import ar from './locales/ar';
import { productTranslationsAr, badgeTranslationsAr } from './locales/productTranslations';

const translations = { en, ar };
const Ctx = createContext();

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    return saved === 'ar' ? 'ar' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = useCallback(
    (key) => {
      const value = getNestedValue(translations[lang], key);
      return value !== undefined ? value : getNestedValue(translations.en, key) ?? key;
    },
    [lang]
  );

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const localizeProduct = useCallback(
    (product) => {
      if (!product || lang === 'en') return product;
      const tr = productTranslationsAr[product.id];
      if (!tr) return product;
      return {
        ...product,
        name: tr.name ?? product.name,
        subtext: tr.subtext ?? product.subtext,
        description: tr.description ?? product.description,
        ingredients: tr.ingredients ?? product.ingredients,
        howToUse: tr.howToUse ?? product.howToUse,
        badge: tr.badge ?? (product.badge ? badgeTranslationsAr[product.badge] ?? product.badge : product.badge),
      };
    },
    [lang]
  );

  const localizeBadge = useCallback(
    (badge) => {
      if (!badge || lang === 'en') return badge;
      return badgeTranslationsAr[badge] ?? badge;
    },
    [lang]
  );

  const localizeCategory = useCallback(
    (category) => {
      if (!category || lang === 'en') return category;
      const categories = getNestedValue(translations.ar, 'shop.categories');
      return categories?.[category] ?? category;
    },
    [lang]
  );

  const localizeStatus = useCallback(
    (status) => {
      if (!status || lang === 'en') return status;
      const statuses = getNestedValue(translations.ar, 'admin.statuses');
      return statuses?.[status] ?? status;
    },
    [lang]
  );

  return (
    <Ctx.Provider value={{ lang, toggleLanguage, t, isRTL: lang === 'ar', localizeProduct, localizeBadge, localizeCategory, localizeStatus }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLanguage = () => useContext(Ctx);
