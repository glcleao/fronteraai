const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Frontera AI. Todos os direitos reservados.
          </p>
          <div>
            <a 
              href="/terms-of-privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Termos de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;