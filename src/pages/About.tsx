import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin } from 'lucide-react';
import goncaloImg from '@/assets/goncalo.png';
import joseImg from '@/assets/jose.jpg';
import guilhermeImg from '@/assets/guilherme.jpg';
import fronteraSymbol from '@/assets/frontera-symbol.png';

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

      {/* Journey Timeline Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            {t.about.journeyTitle}
          </h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line - hidden on mobile, shown on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
            
            {/* Mobile vertical line - left side */}
            <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-primary/20" />
            
            {t.about.milestones.map((milestone, index) => {
              const isMarketEntry = index === 2; // Third milestone (Entrada no Mercado)
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={milestone.chapter}
                  className="relative mb-16 last:mb-0 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center">
                    {/* Left side content (even indices) */}
                    {isLeft ? (
                      <>
                        <div className="w-1/2 pr-12 text-right">
                          <span className="text-sm font-semibold text-primary mb-1 block">
                            {milestone.chapter}
                          </span>
                          <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </div>
                        
                        {/* Center marker */}
                        <div className="relative z-10 flex items-center justify-center">
                          {isMarketEntry ? (
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg animate-pulse">
                              <img src={fronteraSymbol} alt="Frontera" className="w-10 h-10" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                          )}
                        </div>
                        
                        <div className="w-1/2 pl-12">
                          <span className="text-3xl font-bold text-primary/30">{milestone.year}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-1/2 pr-12 text-right">
                          <span className="text-3xl font-bold text-primary/30">{milestone.year}</span>
                        </div>
                        
                        {/* Center marker */}
                        <div className="relative z-10 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                        </div>
                        
                        <div className="w-1/2 pl-12">
                          <span className="text-sm font-semibold text-primary mb-1 block">
                            {milestone.chapter}
                          </span>
                          <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start">
                    {/* Left marker */}
                    <div className="relative z-10 flex items-center justify-center mr-6">
                      {isMarketEntry ? (
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                          <img src={fronteraSymbol} alt="Frontera" className="w-7 h-7" />
                        </div>
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-primary border-4 border-background shadow-lg" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-primary">
                          {milestone.chapter}
                        </span>
                        <span className="text-sm font-bold text-primary/40">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-muted/30">
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
