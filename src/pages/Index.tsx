import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MessageSection from '@/components/MessageSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MessageSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
