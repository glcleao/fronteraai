import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations, translations } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    // Start fade-out
    setIsTransitioning(true);
    
    // Change language after fade-out
    setTimeout(() => {
      setLanguageState(lang);
      
      // Start fade-in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language] || translations["pt"],
  };

  return (
    <LanguageContext.Provider value={value}>
      <div className={`transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
