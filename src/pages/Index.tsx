import Hero from '@/components/Hero';
import MessageSection from '@/components/MessageSection';
import CaseStudies from '@/components/CaseStudies';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MessageSection />
      <CaseStudies />
      <ContactForm />
    </div>
  );
};

export default Index;
