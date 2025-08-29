import { useState, useEffect } from 'react';

const messages = [
  { type: 'response', content: 'Olá! Obrigada por ter mostrado interesse em energia solar há alguns meses. Ainda está à procura de soluções?', delay: 1000 },
  { type: 'user', content: 'Sim, ainda estou interessado', delay: 2500 },
  { type: 'response', content: 'Excelente! Para o orientar na direção certa, pode dar-me uma estimativa da sua fatura mensal de eletricidade?', delay: 4000 },
  { type: 'user', content: '€100 por mês', delay: 5500 },
  { type: 'response', content: 'Perfeito! É fascinante como conseguimos poupar com energia solar. Os nossos preços são competitivos e comprometemo-nos a não ultrapassar nenhuma taxa de mercado. Gostaria que organizasse uma chamada com um dos nossos consultores?', delay: 7000 },
  { type: 'user', content: 'Sim, por favor, mas estou preocupado com os pagamentos', delay: 9000 },
  { type: 'response', content: 'Compreendo perfeitamente. Gerir custos eficazmente é super importante. Aqui na UK Solar, reconhecemos que as necessidades de cada um são diferentes, é por isso que temos várias opções de financiamento, esperando ajudá-lo a manter-se dentro do orçamento. Quer discutir isto mais com um consultor, numa chamada?', delay: 11000 },
  { type: 'user', content: 'Sim, aceito', delay: 12500 },
  { type: 'response', content: 'Óptimo! Aqui está o meu calendário para marcar um horário - https://SEUCALENDARIO.COM', delay: 14000 }
];

const MessageSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('demonstracao');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionVisible) return;

    messages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMessages(index + 1);
      }, messages[index].delay);
    });
  }, [sectionVisible]);

  return (
    <section id="demonstracao" className="py-20 bg-gradient-to-b from-primary/5 via-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veja a nossa <span className="text-gradient">IA em Ação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Assim é como a nossa IA Frontera desperta leads adormecidos e os transforma em vendas reais
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Phone Frame */}
          <div className="bg-gradient-to-b from-card to-muted/30 rounded-3xl p-4 shadow-premium border border-border/50">
            <div className="bg-background rounded-2xl p-6 min-h-[600px]">
              {/* Header */}
              <div className="text-center mb-6 pb-4 border-b border-border">
                <div className="text-sm text-muted-foreground mb-1">Mensagens</div>
                <div className="font-semibold">Lead Convertido</div>
              </div>

              {/* Messages */}
              <div className="space-y-4">
                {messages.slice(0, visibleMessages).map((message, index) => (
                  <div
                    key={index}
                    className={`animate-slide-up ${
                      message.type === 'user' ? 'flex justify-end' : 'flex justify-start'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div
                      className={
                        message.type === 'user'
                          ? 'message-bubble'
                          : 'message-response'
                      }
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Typing Indicator */}
              {visibleMessages < messages.length && visibleMessages > 0 && (
                <div className="flex justify-start mt-4">
                  <div className="bg-muted/50 px-4 py-2 rounded-2xl rounded-bl-md max-w-xs">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Box */}
          <div className="mt-8 text-center">
            <div className="card-premium inline-block">
              <div className="text-sm text-muted-foreground mb-2">Resultado</div>
              <div className="text-lg font-semibold text-gradient">Lead Convertido em Cliente</div>
              <div className="text-sm text-muted-foreground mt-1">Valor: €12,500 • Tempo: 14 minutos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;