import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfPrivacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Termos de <span className="text-gradient">Privacidade</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Informações que Coletamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Na Frontera AI, coletamos apenas as informações necessárias para fornecer nossos serviços de automação de SMS e conversão de leads. Isso inclui informações de contato fornecidas voluntariamente através dos nossos formulários, dados de uso da plataforma e informações técnicas necessárias para o funcionamento do serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Como Utilizamos suas Informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Fornecer e melhorar nossos serviços de automação de SMS</li>
                <li>Processar e gerenciar suas campanhas de conversão de leads</li>
                <li>Comunicar sobre atualizações do serviço e suporte técnico</li>
                <li>Análise de performance para otimização dos resultados</li>
                <li>Cumprimento de obrigações legais e regulamentares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Proteção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Todos os dados são criptografados em trânsito e em repouso, e o acesso é restrito apenas ao pessoal autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Compartilhamento de Informações</h2>
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais. Podemos compartilhar informações apenas quando necessário para a prestação do serviço, com seu consentimento explícito, ou quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, incluindo requisitos legais, contábeis ou de relatórios. Quando os dados não forem mais necessários, eles serão excluídos de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Acessar suas informações pessoais que processamos</li>
                <li>Solicitar a correção de informações imprecisas</li>
                <li>Solicitar a exclusão de suas informações pessoais</li>
                <li>Opor-se ao processamento de suas informações</li>
                <li>Solicitar a portabilidade de seus dados</li>
                <li>Retirar seu consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Cookies e Tecnologias Similares</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, analisar o tráfego e personalizar o conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta política de privacidade periodicamente para refletir mudanças em nossas práticas ou por outras razões operacionais, legais ou regulamentares. Notificaremos sobre alterações significativas através do nosso site ou por email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre esta política de privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco através dos canais disponibilizados em nosso site ou agende uma demonstração para esclarecimentos adicionais.
              </p>
            </section>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Última atualização: {new Date().toLocaleDateString('pt-PT', { 
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