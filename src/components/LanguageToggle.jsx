import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';

export default function LanguageToggle({ style = {} }) {
  const { theme: t } = useTheme();
  const { lang, toggleLanguage, t: tr } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      title={tr('nav.toggleLang')}
      style={{
        background: t.surface,
        border: `1px solid ${t.border}`,
        borderRadius: '20px',
        padding: '6px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '12px',
        fontFamily: 'Outfit, sans-serif',
        fontWeight: '600',
        color: t.text,
        letterSpacing: '0.05em',
        minWidth: '44px',
        ...style,
      }}
    >
      {lang === 'en' ? 'عربي' : 'EN'}
    </button>
  );
}
