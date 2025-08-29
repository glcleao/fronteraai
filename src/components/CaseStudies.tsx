const caseStudies = [{
  company: "TechSolutions",
  industry: "Software B2B",
  oldLeads: "2,847",
  converted: "412",
  revenue: "€89,000",
  roi: "340%",
  timeframe: "2 meses"
}, {
  company: "HealthCare Plus",
  industry: "Serviços Médicos",
  oldLeads: "1,923",
  converted: "298",
  revenue: "€156,000",
  roi: "280%",
  timeframe: "6 semanas"
}, {
  company: "EcoEnergy",
  industry: "Energia Solar",
  oldLeads: "3,156",
  converted: "523",
  revenue: "€245,000",
  roi: "420%",
  timeframe: "3 meses"
}, {
  company: "PropertyPro",
  industry: "Imobiliário",
  oldLeads: "4,021",
  converted: "687",
  revenue: "€312,000",
  roi: "380%",
  timeframe: "10 semanas"
}];
const CaseStudies = () => {
  return <section id="casos-estudo" className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Casos de <span className="text-gradient">Sucesso Reais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Empresas que transformaram leads esquecidos em receita significativa com a tecnologia da Frontera AI</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => <div key={index} className="card-premium group cursor-pointer" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gradient">{study.company}</h3>
                  <p className="text-muted-foreground text-sm">{study.industry}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">{study.roi}</div>
                  <div className="text-xs text-muted-foreground">ROI</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{study.oldLeads}</div>
                  <div className="text-xs text-muted-foreground">Leads Antigos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{study.converted}</div>
                  <div className="text-xs text-muted-foreground">Convertidos</div>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-semibold text-gradient">{study.revenue}</div>
                    <div className="text-xs text-muted-foreground">Receita Gerada</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{study.timeframe}</div>
                    <div className="text-xs text-muted-foreground">Duração</div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>)}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="card-premium inline-block max-w-2xl">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Resultados Combinados</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">11,947</div>
                <div className="text-sm text-muted-foreground">Leads Processados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">1,920</div>
                <div className="text-sm text-muted-foreground">Conversões</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">€802K</div>
                <div className="text-sm text-muted-foreground">Receita Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CaseStudies;