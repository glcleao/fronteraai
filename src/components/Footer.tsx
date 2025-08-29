const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Frontera AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;