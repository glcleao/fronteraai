import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('demonstracao')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Demonstração
            </button>
            <button 
              onClick={() => scrollToSection('casos-estudo')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Casos de Estudo
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
            <a 
              href="https://calendly.com/frontera_ai/introduction-technology-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero text-sm px-4 py-2 inline-block"
            >
              Agendar Demonstração Gratuita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('demonstracao')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Demonstração
            </button>
            <button 
              onClick={() => scrollToSection('casos-estudo')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Casos de Estudo
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
            <a 
              href="https://calendly.com/frontera_ai/introduction-technology-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-hero text-sm mt-4 inline-block text-center"
            >
              Agendar Demonstração Gratuita
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;