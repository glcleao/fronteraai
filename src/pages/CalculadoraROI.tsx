import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const CalculadoraROI = () => {
  const [formData, setFormData] = useState({
    leadsNaoContactadas: '',
    leadsProcessadasPorDia: '',
    ticketMedio: '',
    periodoEmDias: '30'
  });

  const [resultados, setResultados] = useState<{
    diasParaProcessar: number;
    vendasPerdidasPorDia: number;
    receitaPerdidaPorDia: number;
    receitaPerdidaTotal: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calcularROI = (e: React.FormEvent) => {
    e.preventDefault();
    
    const leadsNaoContactadas = parseFloat(formData.leadsNaoContactadas);
    const leadsProcessadasPorDia = parseFloat(formData.leadsProcessadasPorDia);
    const ticketMedio = parseFloat(formData.ticketMedio);
    const periodoEmDias = parseFloat(formData.periodoEmDias);

    if (!leadsNaoContactadas || !leadsProcessadasPorDia || !ticketMedio || !periodoEmDias) {
      return;
    }

    const taxaConversao = 0.05; // 5%
    const diasParaProcessar = leadsNaoContactadas / leadsProcessadasPorDia;
    const leadsPerdidasPorDia = leadsNaoContactadas / periodoEmDias;
    const vendasPerdidasPorDia = leadsPerdidasPorDia * taxaConversao;
    const receitaPerdidaPorDia = vendasPerdidasPorDia * ticketMedio;
    const receitaPerdidaTotal = receitaPerdidaPorDia * periodoEmDias;
    
    setResultados({
      diasParaProcessar,
      vendasPerdidasPorDia,
      receitaPerdidaPorDia,
      receitaPerdidaTotal
    });

    // Scroll to results section
    setTimeout(() => {
      const element = document.getElementById('resultados');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const formatEuro = (value: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('pt-PT', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-24 pb-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-10" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Calculadora de
              <span className="text-gradient block">Oportunidade</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra quanto dinheiro a sua empresa está a perder por não contactar leads esquecidos
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="text-2xl">Insira os Seus Dados</CardTitle>
                <CardDescription>Preencha as informações abaixo para calcular o impacto financeiro</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={calcularROI} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="leadsNaoContactadas">Leads Não Contactadas</Label>
                      <Input
                        id="leadsNaoContactadas"
                        name="leadsNaoContactadas"
                        type="number"
                        min="0"
                        step="1"
                        value={formData.leadsNaoContactadas}
                        onChange={handleInputChange}
                        placeholder="Ex: 1000"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="leadsProcessadasPorDia">Leads Processadas por Dia</Label>
                      <Input
                        id="leadsProcessadasPorDia"
                        name="leadsProcessadasPorDia"
                        type="number"
                        min="1"
                        step="1"
                        value={formData.leadsProcessadasPorDia}
                        onChange={handleInputChange}
                        placeholder="Ex: 50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ticketMedio">Ticket Médio (€)</Label>
                      <Input
                        id="ticketMedio"
                        name="ticketMedio"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.ticketMedio}
                        onChange={handleInputChange}
                        placeholder="Ex: 500.00"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="periodoEmDias">Período de Análise (dias)</Label>
                      <Input
                        id="periodoEmDias"
                        name="periodoEmDias"
                        type="number"
                        min="1"
                        max="365"
                        step="1"
                        value={formData.periodoEmDias}
                        onChange={handleInputChange}
                        placeholder="Ex: 30"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Descobre as suas perdas
                  </Button>
                </form>
              </CardContent>
            </Card>

            {resultados && (
              <div id="resultados" className="mt-12 space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Os Seus <span className="text-gradient">Resultados</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="card-premium">
                    <CardHeader>
                      <CardTitle className="text-lg">Receita Perdida por Dia</CardTitle>
                      <CardDescription>Valor diário não recuperado</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-gradient">
                        {formatEuro(resultados.receitaPerdidaPorDia)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-premium border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg">Receita Total Perdida</CardTitle>
                      <CardDescription>No período de {formData.periodoEmDias} dias</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-5xl font-bold text-gradient">
                        {formatEuro(resultados.receitaPerdidaTotal)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-premium">
                    <CardHeader>
                      <CardTitle className="text-lg">Vendas Perdidas por Dia</CardTitle>
                      <CardDescription>Com taxa de conversão de 5%</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-gradient">
                        {formatNumber(resultados.vendasPerdidasPorDia)}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-premium">
                    <CardHeader>
                      <CardTitle className="text-lg">Dias para Processar</CardTitle>
                      <CardDescription>Tempo necessário para contactar todas as leads</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-gradient">
                        {formatNumber(resultados.diasParaProcessar)} dias
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="card-premium bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 mt-8">
                  <CardContent className="pt-6">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold">
                        Recupere Este Valor com a <span className="text-gradient">frontera</span>
                      </h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        A nossa IA contacta automaticamente os seus leads esquecidos e converte-os em vendas. 
                        Sem risco, apenas paga por resultados.
                      </p>
                      <a 
                        href="https://calendly.com/frontera-ai-info/45min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-hero inline-block"
                      >
                        Agendar Demonstração Gratuita
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CalculadoraROI;