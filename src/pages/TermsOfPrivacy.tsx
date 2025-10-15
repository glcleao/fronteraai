import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsOfPrivacy = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const titles = {
      pt: 'Termos de Privacidade | frontera',
      es: 'Términos de Privacidad | frontera',
      en: 'Privacy Terms | frontera'
    };
    document.title = titles[language];
  }, [language]);

  const content = {
    pt: {
      title: 'Termos de',
      titleHighlight: 'Privacidade',
      sections: [
        {
          title: '1. Informações que Coletamos',
          content: 'Na Frontera AI, coletamos apenas as informações necessárias para fornecer nossos serviços de automação de SMS e conversão de leads. Isso inclui informações de contato fornecidas voluntariamente através dos nossos formulários, dados de uso da plataforma e informações técnicas necessárias para o funcionamento do serviço.'
        },
        {
          title: '2. Como Utilizamos suas Informações',
          content: 'Utilizamos as informações coletadas para:',
          list: [
            'Fornecer e melhorar nossos serviços de automação de SMS',
            'Processar e gerenciar suas campanhas de conversão de leads',
            'Comunicar sobre atualizações do serviço e suporte técnico',
            'Análise de performance para otimização dos resultados',
            'Cumprimento de obrigações legais e regulamentares'
          ]
        },
        {
          title: '3. Proteção de Dados',
          content: 'Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Todos os dados são criptografados em trânsito e em repouso, e o acesso é restrito apenas ao pessoal autorizado.'
        },
        {
          title: '4. Compartilhamento de Informações',
          content: 'Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais. Podemos compartilhar informações apenas quando necessário para a prestação do serviço, com seu consentimento explícito, ou quando exigido por lei.'
        },
        {
          title: '5. Retenção de Dados',
          content: 'Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, incluindo requisitos legais, contábeis ou de relatórios. Quando os dados não forem mais necessários, eles serão excluídos de forma segura.'
        },
        {
          title: '6. Seus Direitos',
          content: 'Você tem o direito de:',
          list: [
            'Acessar suas informações pessoais que processamos',
            'Solicitar a correção de informações imprecisas',
            'Solicitar a exclusão de suas informações pessoais',
            'Opor-se ao processamento de suas informações',
            'Solicitar a portabilidade de seus dados',
            'Retirar seu consentimento a qualquer momento'
          ]
        },
        {
          title: '7. Cookies e Tecnologias Similares',
          content: 'Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, analisar o tráfego e personalizar o conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.'
        },
        {
          title: '8. Alterações nesta Política',
          content: 'Podemos atualizar esta política de privacidade periodicamente para refletir mudanças em nossas práticas ou por outras razões operacionais, legais ou regulamentares. Notificaremos sobre alterações significativas através do nosso site ou por email.'
        },
        {
          title: '9. Contacto',
          content: 'Se você tiver dúvidas sobre esta política de privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco através dos canais disponibilizados em nosso site ou agende uma demonstração para esclarecimentos adicionais.'
        }
      ],
      lastUpdated: 'Última atualização:'
    },
    es: {
      title: 'Términos de',
      titleHighlight: 'Privacidad',
      sections: [
        {
          title: '1. Información que Recopilamos',
          content: 'En Frontera AI, recopilamos solo la información necesaria para proporcionar nuestros servicios de automatización de SMS y conversión de leads. Esto incluye información de contacto proporcionada voluntariamente a través de nuestros formularios, datos de uso de la plataforma e información técnica necesaria para el funcionamiento del servicio.'
        },
        {
          title: '2. Cómo Utilizamos su Información',
          content: 'Utilizamos la información recopilada para:',
          list: [
            'Proporcionar y mejorar nuestros servicios de automatización de SMS',
            'Procesar y gestionar sus campañas de conversión de leads',
            'Comunicar actualizaciones del servicio y soporte técnico',
            'Análisis de rendimiento para optimización de resultados',
            'Cumplimiento de obligaciones legales y regulatorias'
          ]
        },
        {
          title: '3. Protección de Datos',
          content: 'Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Todos los datos están encriptados en tránsito y en reposo, y el acceso está restringido solo al personal autorizado.'
        },
        {
          title: '4. Compartir Información',
          content: 'No vendemos, alquilamos ni compartimos su información personal con terceros con fines comerciales. Podemos compartir información solo cuando sea necesario para la prestación del servicio, con su consentimiento explícito, o cuando lo exija la ley.'
        },
        {
          title: '5. Retención de Datos',
          content: 'Mantenemos su información personal solo durante el tiempo necesario para cumplir los propósitos para los cuales fue recopilada, incluidos los requisitos legales, contables o de informes. Cuando los datos ya no sean necesarios, se eliminarán de forma segura.'
        },
        {
          title: '6. Sus Derechos',
          content: 'Usted tiene derecho a:',
          list: [
            'Acceder a su información personal que procesamos',
            'Solicitar la corrección de información inexacta',
            'Solicitar la eliminación de su información personal',
            'Oponerse al procesamiento de su información',
            'Solicitar la portabilidad de sus datos',
            'Retirar su consentimiento en cualquier momento'
          ]
        },
        {
          title: '7. Cookies y Tecnologías Similares',
          content: 'Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio, analizar el tráfico y personalizar el contenido. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.'
        },
        {
          title: '8. Cambios en esta Política',
          content: 'Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o regulatorias. Notificaremos sobre cambios significativos a través de nuestro sitio web o por correo electrónico.'
        },
        {
          title: '9. Contacto',
          content: 'Si tiene preguntas sobre esta política de privacidad o sobre cómo tratamos su información personal, contáctenos a través de los canales disponibles en nuestro sitio web o programe una demostración para aclaraciones adicionales.'
        }
      ],
      lastUpdated: 'Última actualización:'
    },
    en: {
      title: 'Terms of',
      titleHighlight: 'Privacy',
      sections: [
        {
          title: '1. Information We Collect',
          content: 'At Frontera AI, we collect only the information necessary to provide our SMS automation and lead conversion services. This includes contact information voluntarily provided through our forms, platform usage data, and technical information necessary for service operation.'
        },
        {
          title: '2. How We Use Your Information',
          content: 'We use the collected information to:',
          list: [
            'Provide and improve our SMS automation services',
            'Process and manage your lead conversion campaigns',
            'Communicate service updates and technical support',
            'Performance analysis for results optimization',
            'Compliance with legal and regulatory obligations'
          ]
        },
        {
          title: '3. Data Protection',
          content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest, and access is restricted to authorized personnel only.'
        },
        {
          title: '4. Information Sharing',
          content: 'We do not sell, rent, or share your personal information with third parties for commercial purposes. We may share information only when necessary for service provision, with your explicit consent, or when required by law.'
        },
        {
          title: '5. Data Retention',
          content: 'We maintain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. When data is no longer needed, it will be securely deleted.'
        },
        {
          title: '6. Your Rights',
          content: 'You have the right to:',
          list: [
            'Access your personal information that we process',
            'Request correction of inaccurate information',
            'Request deletion of your personal information',
            'Object to the processing of your information',
            'Request portability of your data',
            'Withdraw your consent at any time'
          ]
        },
        {
          title: '7. Cookies and Similar Technologies',
          content: 'We use cookies and similar technologies to improve your experience on our site, analyze traffic, and personalize content. You can manage your cookie preferences through your browser settings.'
        },
        {
          title: '8. Changes to this Policy',
          content: 'We may update this privacy policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of significant changes through our website or by email.'
        },
        {
          title: '9. Contact',
          content: 'If you have questions about this privacy policy or how we handle your personal information, contact us through the channels available on our website or schedule a demo for additional clarification.'
        }
      ],
      lastUpdated: 'Last updated:'
    }
  };

  const t = content[language];
  const dateLocale = language === 'pt' ? 'pt-PT' : language === 'es' ? 'es-ES' : 'en-US';

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            {t.title} <span className="text-gradient">{t.titleHighlight}</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            {t.sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                {t.lastUpdated} {new Date().toLocaleDateString(dateLocale, { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfPrivacy;