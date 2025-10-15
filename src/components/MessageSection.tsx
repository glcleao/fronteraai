import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const MessageSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const { t } = useLanguage();

  const messages = t.demo.messages;

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) setSectionVisible(true);
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
      setTimeout(() => setVisibleMessages(index + 1), messages[index].delay);
    });
  }, [sectionVisible]);

  return (
    <section
      id="demonstracao"
      className="py-20 bg-gradient-to-b from-primary/5 via-background/50 to-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.demo.title}{' '}
            <span className="text-gradient">{t.demo.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.demo.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Phone Frame */}
          <div className="bg-gradient-to-b from-card to-muted/30 rounded-3xl p-4 shadow-premium border border-border/50">
            <div className="bg-background rounded-2xl p-6 min-h-[600px]">
              {/* Header */}
              <div className="text-center mb-6 pb-4 border-b border-border">
                <div className="text-sm text-muted-foreground mb-1">
                  {t.demo.header.messages}
                </div>
                <div className="font-semibold">
                  {t.demo.header.leadConverted}
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-4">
                {messages.slice(0, visibleMessages).map((message, index) => (
                  <div
                    key={index}
                    className={`animate-fade-in ${
                      message.type === 'user'
                        ? 'flex justify-end'
                        : 'flex justify-start'
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

              {/* Results Box */}
              <div className="mt-8 text-center">
                <div className="card-premium inline-block py-[10px]">
                  <div className="text-sm text-muted-foreground mb-2">
                    {t.demo.result}
                  </div>
                  <div className="text-lg font-semibold text-gradient">
                    {t.demo.resultText}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {t.demo.value}: €4,500 • {t.demo.time}: 14 minutos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
