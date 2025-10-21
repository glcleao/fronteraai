import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { User } from 'lucide-react';

const About = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const titles = {
      pt: 'Sobre a Frontera | Reativação de Leads com IA',
      es: 'Sobre Frontera | Reactivación de Leads con IA',
      en: 'About Frontera | Lead Reactivation with AI'
    };
    document.title = titles[language];
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <div className="min-h-screen animate-fade-in">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            {t.about.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up" style={{ animationDelay: '100ms' }}>
            {t.about.subtitle}
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t.about.foundersTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.founders.map((founder, index) => (
              <div 
                key={founder.name}
                className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-lg text-muted-foreground">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {t.about.missionTitle}
          </h2>
          
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {t.about.missionText}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
