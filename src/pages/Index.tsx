import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MessageSection from '@/components/MessageSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    const titles = {
      pt: 'frontera | Converta leads perdidos em oportunidades reais',
      es: 'frontera | Convierte leads perdidos en oportunidades reales',
      en: 'frontera | Convert lost leads into real opportunities'
    };
    document.title = titles[language];
  }, [language]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MessageSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
