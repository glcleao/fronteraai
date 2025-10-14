import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight py-px">
            {t.hero.title}
            <span className="text-gradient block px-0 py-px">{t.hero.titleHighlight}</span>
            {t.hero.titleEnd}
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">{t.hero.subtitle}</p>
          
          {/* CTA Button */}
          <div className="space-y-4">
            <a 
              href="https://calendly.com/frontera-ai-info/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-block"
            >
              {t.hero.cta}
            </a>
            <p className="text-sm text-muted-foreground">{t.hero.noCommitment}</p>
          </div>
          
          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">{t.hero.stats.responseValue}</div>
              <div className="text-sm text-muted-foreground py-[5px]">{t.hero.stats.responseRate}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">{t.hero.stats.noRisk}</div>
              <div className="text-sm text-muted-foreground py-[5px]">{t.hero.stats.performanceBased}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">{t.hero.stats.implementationValue}</div>
              <div className="text-sm text-muted-foreground py-[5px]">{t.hero.stats.implementation}</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
