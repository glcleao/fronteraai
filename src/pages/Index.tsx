import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MessageSection from '@/components/MessageSection';
import CaseStudies from '@/components/CaseStudies';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MessageSection />
      <CaseStudies />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
