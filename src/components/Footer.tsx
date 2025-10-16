import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 bg-background border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Frontera AI. {t.footer.copyright}.
          </p>
          <div>
            <Link 
              to="/terms-of-privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;