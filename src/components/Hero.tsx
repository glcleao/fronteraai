import { useState, useEffect } from 'react';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
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
            Transforme
            <span className="text-gradient block px-0 py-px">Leads Antigos</span>
            em Vendas Reais
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">A nossa IA personalizada contacta automaticamente os seus leads esquecidos por SMS e converte-os em vendas.</p>
          
          {/* CTA Button */}
          <div className="space-y-4">
            <button onClick={() => {
            const element = document.getElementById('contacto');
            if (element) element.scrollIntoView({
              behavior: 'smooth'
            });
          }} className="btn-hero">
              Agendar Demonstração
            </button>
            <p className="text-sm text-muted-foreground">Sem compromisso</p>
          </div>
          
          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">40%</div>
              <div className="text-sm text-muted-foreground py-[5px]">Taxa de Resposta</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">Sem Risco</div>
              <div className="text-sm text-muted-foreground py-[5px]">Performance-based</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">1 Semana</div>
              <div className="text-sm text-muted-foreground py-[5px]">Implementação</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;