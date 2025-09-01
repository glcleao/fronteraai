import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate form submission - in a real app, this would send to your backend
      // The email glcleao@gmail.com would be handled server-side for security
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Pedido Enviado!",
        description: "Entraremos em contacto consigo em breve para agendar a demonstração."
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar o seu pedido. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contacto" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para <span className="text-gradient">Transformar</span> o Seu Negócio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agende uma demonstração personalizada e veja como podemos converter os seus leads antigos em receita real
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 text-center">O que inclui a demonstração:</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[{
                title: "Análise Gratuita dos Seus Leads",
                desc: "Avaliamos o potencial dos seus leads antigos",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
              }, {
                title: "Demonstração ao Vivo",
                desc: "Veja a nossa IA em ação com os seus dados reais",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
              }, {
                title: "Estratégia Personalizada",
                desc: "Plano específico para o seu negócio e sector",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1z" />
                      </svg>
              }, {
                title: "Estimativa de ROI",
                desc: "Projeção realista dos resultados esperados",
                icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
              }].map((benefit, index) => <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 text-white">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Right side - Form */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;