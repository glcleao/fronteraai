import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, Target, Rocket, ShieldCheck, TrendingUp } from 'lucide-react';
import goncaloImg from '@/assets/goncalo.png';
import joseImg from '@/assets/jose.jpg';
import guilhermeImg from '@/assets/guilherme.jpg';
import fronteraImage from '@/assets/frontera-logo.png';

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
            {t.about.founders.map((founder, index) => {
              const founderData = [
                { image: goncaloImg, linkedin: 'https://www.linkedin.com/in/goncaloleao02/' },
                { image: joseImg, linkedin: 'https://www.linkedin.com/in/jos%C3%A9oliveira30/' },
                { image: guilhermeImg, linkedin: 'https://www.linkedin.com/in/guilhermepguedes29/' }
              ];
              
              return (
                <div 
                  key={founder.name}
                  className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={founderData[index].image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-lg text-muted-foreground mb-3">{founder.role}</p>
                  <a 
                    href={founderData[index].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    aria-label={`LinkedIn de ${founder.name}`}
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            {t.about.storyTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-card">
                <img src={fronteraImage} alt={t.about.storyImageAlt} loading="lazy" className="w-full h-full object-cover aspect-video" />
              </div>
            </div>
            <article className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                {t.about.storyLead}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {t.about.highlights.map((item, i) => (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                    {i === 0 ? (
                      <Target className="w-5 h-5 text-primary mt-1" />
                    ) : i === 1 ? (
                      <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                    ) : i === 2 ? (
                      <Rocket className="w-5 h-5 text-primary mt-1" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-primary mt-1" />
                    )}
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
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
