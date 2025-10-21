export type Language = 'pt' | 'es' | 'en';

export interface Translations {
  navigation: {
    inicio: string;
    calculadora: string;
    demonstracao: string;
    sobre: string;
    agendarDemo: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    cta: string;
    noCommitment: string;
    stats: {
      responseRate: string;
      responseValue: string;
      noRisk: string;
      performanceBased: string;
      implementation: string;
      implementationValue: string;
    };
  };
  demo: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    messages: Array<{
      type: 'response' | 'user';
      content: string;
      delay: number;
    }>;
    header: {
      messages: string;
      leadConverted: string;
    };
    result: string;
    resultText: string;
    value: string;
    time: string;
  };
  contact: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    demoIncludes: string;
    benefits: Array<{
      title: string;
      desc: string;
    }>;
    cta: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    form: {
      leadsLabel: string;
      leadsPlaceholder: string;
      processedLabel: string;
      processedPlaceholder: string;
      ticketLabel: string;
      ticketPlaceholder: string;
      periodLabel: string;
      periodPlaceholder: string;
      submit: string;
    };
    results: {
      title: string;
      lostPerDay: string;
      totalLost: string;
      salesPerDay: string;
      daysToProcess: string;
      days: string;
      cta: string;
      ctaButton: string;
    };
  };
  footer: {
    copyright: string;
    privacy: string;
  };
  about: {
    title: string;
    subtitle: string;
    foundersTitle: string;
    founders: Array<{
      name: string;
      role: string;
    }>;
    missionTitle: string;
    missionText: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    navigation: {
      inicio: 'Início',
      calculadora: 'Calculadora',
      demonstracao: 'Demonstração',
      sobre: 'Sobre nós',
      agendarDemo: 'Agendar Demonstração Gratuita',
    },
    hero: {
      title: 'Leads frios',
      titleHighlight: 'não são leads perdidos.',
      titleEnd: '',
      subtitle: 'A nossa IA volta a abrir conversas por SMS e recupera oportunidades esquecidas.',
      cta: 'Agendar Demonstração',
      noCommitment: 'Sem compromisso',
      stats: {
        responseRate: 'Taxa de Resposta',
        responseValue: '5%',
        noRisk: 'Sem Risco',
        performanceBased: 'Performance-based',
        implementation: 'Implementação',
        implementationValue: '1 Semana',
      },
    },
    demo: {
      title: 'Veja a nossa',
      titleHighlight: 'IA em Ação',
      subtitle: 'Assim é como a nossa IA Frontera desperta leads adormecidos e os transforma em vendas reais',
      messages: [
        {
          type: 'response',
          content: 'Olá! Obrigada por ter mostrado interesse em energia solar há alguns meses. Ainda está à procura de soluções?',
          delay: 1000,
        },
        {
          type: 'user',
          content: 'Sim, ainda estou interessado',
          delay: 2500,
        },
        {
          type: 'response',
          content: 'Excelente! Para o orientar na direção certa, pode dar-me uma estimativa da sua fatura mensal de eletricidade?',
          delay: 4000,
        },
        {
          type: 'user',
          content: '€100 por mês',
          delay: 5500,
        },
        {
          type: 'response',
          content: 'Perfeito! É fascinante como conseguimos poupar com energia solar. Os nossos preços são competitivos e comprometemo-nos a não ultrapassar nenhuma taxa de mercado. Gostaria que organizasse uma chamada com um dos nossos consultores?',
          delay: 7000,
        },
        {
          type: 'user',
          content: 'Sim, por favor, mas estou preocupado com os pagamentos',
          delay: 9000,
        },
        {
          type: 'response',
          content: 'Compreendo perfeitamente. Gerir custos eficazmente é super importante. Aqui na YOURCOMPANY, reconhecemos que as necessidades de cada um são diferentes, é por isso que temos várias opções de financiamento, esperando ajudá-lo a manter-se dentro do orçamento. Quer discutir isto mais com um consultor, numa chamada?',
          delay: 11000,
        },
        {
          type: 'user',
          content: 'Sim, aceito',
          delay: 12500,
        },
        {
          type: 'response',
          content: 'Óptimo! Aqui está o meu calendário para marcar um horário - https://SEUCALENDARIO.COM',
          delay: 14000,
        },
      ],
      header: {
        messages: 'Mensagens',
        leadConverted: 'Lead Convertido',
      },
      result: 'Resultado',
      resultText: 'Lead Convertido em Cliente',
      value: 'Valor',
      time: 'Tempo',
    },
    contact: {
      title: 'Pronto para',
      titleHighlight: 'Transformar',
      subtitle: 'Agende uma demonstração personalizada e veja como podemos converter os seus leads antigos em receita real',
      demoIncludes: 'O que inclui a demonstração:',
      benefits: [
        {
          title: 'Análise Gratuita dos Seus Leads',
          desc: 'Avaliamos o potencial dos seus leads antigos',
        },
        {
          title: 'Demonstração ao Vivo',
          desc: 'Veja a nossa IA em ação com os seus dados reais',
        },
        {
          title: 'Estratégia Personalizada',
          desc: 'Plano específico para o seu negócio e sector',
        },
        {
          title: 'Estimativa de ROI',
          desc: 'Projeção realista dos resultados esperados',
        },
      ],
      cta: 'Agendar Demonstração Gratuita',
    },
    calculator: {
      title: 'Calculadora de Oportunidade',
      subtitle: 'Descubra quanto dinheiro está a perder com leads não contactadas',
      form: {
        leadsLabel: 'Leads Não Contactadas',
        leadsPlaceholder: 'Ex: 1000',
        processedLabel: 'Leads Processadas por Dia',
        processedPlaceholder: 'Ex: 50',
        ticketLabel: 'Ticket Médio',
        ticketPlaceholder: 'Ex: 500',
        periodLabel: 'Período de Análise (dias)',
        periodPlaceholder: 'Ex: 30',
        submit: 'Descobre as suas perdas',
      },
      results: {
        title: 'Os seus resultados',
        lostPerDay: 'Receita Perdida por Dia',
        totalLost: 'Receita Total Perdida',
        salesPerDay: 'Vendas Perdidas por Dia',
        daysToProcess: 'Dias para Processar',
        days: 'dias',
        cta: 'Recupere Este Valor com a frontera',
        ctaButton: 'Agendar Demonstração Gratuita',
      },
    },
    footer: {
      copyright: 'Todos os direitos reservados',
      privacy: 'Termos de Privacidade',
    },
    about: {
      title: 'Sobre a Frontera',
      subtitle: 'Tecnologia portuguesa de reativação de leads com IA aplicada a vendas B2C.',
      foundersTitle: 'Fundadores',
      founders: [
        { name: 'Gonçalo', role: 'CEO' },
        { name: 'José', role: 'CTO' },
        { name: 'Guilherme', role: 'COO' },
      ],
      missionTitle: 'Missão',
      missionText: 'A nossa missão é eliminar o desperdício de leads através de inteligência artificial prática e ética, que entende o comportamento humano e reativa contactos esquecidos com contexto e precisão.',
    },
  },
  es: {
    navigation: {
      inicio: 'Inicio',
      calculadora: 'Calculadora',
      demonstracao: 'Demostración',
      sobre: 'Sobre nosotros',
      agendarDemo: 'Agendar Demostración Gratuita',
    },
    hero: {
      title: 'Los leads fríos',
      titleHighlight: 'no son leads perdidos.',
      titleEnd: '',
      subtitle: 'Nuestra IA vuelve a abrir conversaciones por SMS y recupera oportunidades olvidadas.',
      cta: 'Agendar Demostración',
      noCommitment: 'Sin compromiso',
      stats: {
        responseRate: 'Tasa de Respuesta',
        responseValue: '5%',
        noRisk: 'Sin Riesgo',
        performanceBased: 'Basado en resultados',
        implementation: 'Implementación',
        implementationValue: '1 Semana',
      },
    },
    demo: {
      title: 'Vea nuestra',
      titleHighlight: 'IA en Acción',
      subtitle: 'Así es como nuestra IA Frontera despierta leads dormidos y los transforma en ventas reales',
      messages: [
        {
          type: 'response',
          content: '¡Hola! Gracias por haber mostrado interés en energía solar hace unos meses. ¿Todavía está buscando soluciones?',
          delay: 1000,
        },
        {
          type: 'user',
          content: 'Sí, todavía estoy interesado',
          delay: 2500,
        },
        {
          type: 'response',
          content: '¡Excelente! Para orientarlo en la dirección correcta, ¿puede darme una estimación de su factura mensual de electricidad?',
          delay: 4000,
        },
        {
          type: 'user',
          content: '€100 por mes',
          delay: 5500,
        },
        {
          type: 'response',
          content: '¡Perfecto! Es fascinante cómo podemos ahorrar con energía solar. Nuestros precios son competitivos y nos comprometemos a no superar ninguna tarifa del mercado. ¿Le gustaría que organizara una llamada con uno de nuestros consultores?',
          delay: 7000,
        },
        {
          type: 'user',
          content: 'Sí, por favor, pero estoy preocupado por los pagos',
          delay: 9000,
        },
        {
          type: 'response',
          content: 'Lo entiendo perfectamente. Gestionar costos eficazmente es súper importante. Aquí en YOURCOMPANY, reconocemos que las necesidades de cada uno son diferentes, por eso tenemos varias opciones de financiamiento, esperando ayudarlo a mantenerse dentro del presupuesto. ¿Quiere discutir esto más con un consultor, en una llamada?',
          delay: 11000,
        },
        {
          type: 'user',
          content: 'Sí, acepto',
          delay: 12500,
        },
        {
          type: 'response',
          content: '¡Óptimo! Aquí está mi calendario para marcar un horario - https://SUCALENDARIO.COM',
          delay: 14000,
        },
      ],
      header: {
        messages: 'Mensajes',
        leadConverted: 'Lead Convertido',
      },
      result: 'Resultado',
      resultText: 'Lead Convertido en Cliente',
      value: 'Valor',
      time: 'Tiempo',
    },
    contact: {
      title: 'Listo para',
      titleHighlight: 'Transformar',
      subtitle: 'Agende una demostración personalizada y vea cómo podemos convertir sus leads antiguos en ingresos reales',
      demoIncludes: 'Lo que incluye la demostración:',
      benefits: [
        {
          title: 'Análisis Gratuito de Sus Leads',
          desc: 'Evaluamos el potencial de sus leads antiguos',
        },
        {
          title: 'Demostración en Vivo',
          desc: 'Vea nuestra IA en acción con sus datos reales',
        },
        {
          title: 'Estrategia Personalizada',
          desc: 'Plan específico para su negocio y sector',
        },
        {
          title: 'Estimación de ROI',
          desc: 'Proyección realista de los resultados esperados',
        },
      ],
      cta: 'Agendar Demostración Gratuita',
    },
    calculator: {
      title: 'Calculadora de Oportunidad',
      subtitle: 'Descubra cuánto dinero está perdiendo con leads no contactados',
      form: {
        leadsLabel: 'Leads No Contactados',
        leadsPlaceholder: 'Ej: 1000',
        processedLabel: 'Leads Procesados por Día',
        processedPlaceholder: 'Ej: 50',
        ticketLabel: 'Ticket Medio',
        ticketPlaceholder: 'Ej: 500',
        periodLabel: 'Período de Análisis (días)',
        periodPlaceholder: 'Ej: 30',
        submit: 'Descubre tus pérdidas',
      },
      results: {
        title: 'Sus resultados',
        lostPerDay: 'Ingresos Perdidos por Día',
        totalLost: 'Ingresos Totales Perdidos',
        salesPerDay: 'Ventas Perdidas por Día',
        daysToProcess: 'Días para Procesar',
        days: 'días',
        cta: 'Recupere Este Valor con frontera',
        ctaButton: 'Agendar Demostración Gratuita',
      },
    },
    footer: {
      copyright: 'Todos los derechos reservados',
      privacy: 'Términos de Privacidad',
    },
    about: {
      title: 'Sobre Frontera',
      subtitle: 'Tecnología portuguesa de reactivación de leads con IA aplicada a ventas B2C.',
      foundersTitle: 'Fundadores',
      founders: [
        { name: 'Gonçalo', role: 'CEO' },
        { name: 'José', role: 'CTO' },
        { name: 'Guilherme', role: 'COO' },
      ],
      missionTitle: 'Misión',
      missionText: 'Nuestra misión es eliminar el desperdicio de leads a través de inteligencia artificial práctica y ética, que entiende el comportamiento humano y reactiva contactos olvidados con contexto y precisión.',
    },
  },
  en: {
    navigation: {
      inicio: 'Home',
      calculadora: 'Calculator',
      demonstracao: 'Demo',
      sobre: 'About us',
      agendarDemo: 'Schedule Free Demo',
    },
    hero: {
      title: 'Cold leads',
      titleHighlight: 'are not lost leads.',
      titleEnd: '',
      subtitle: 'Our AI reopens conversations via SMS and recovers forgotten opportunities.',
      cta: 'Schedule Demo',
      noCommitment: 'No commitment',
      stats: {
        responseRate: 'Response Rate',
        responseValue: '5%',
        noRisk: 'No Risk',
        performanceBased: 'Performance-based',
        implementation: 'Implementation',
        implementationValue: '1 Week',
      },
    },
    demo: {
      title: 'See our',
      titleHighlight: 'AI in Action',
      subtitle: 'This is how our Frontera AI awakens dormant leads and transforms them into real sales',
      messages: [
        {
          type: 'response',
          content: 'Hello! Thank you for showing interest in solar energy a few months ago. Are you still looking for solutions?',
          delay: 1000,
        },
        {
          type: 'user',
          content: 'Yes, I am still interested',
          delay: 2500,
        },
        {
          type: 'response',
          content: 'Excellent! To guide you in the right direction, can you give me an estimate of your monthly electricity bill?',
          delay: 4000,
        },
        {
          type: 'user',
          content: '€100 per month',
          delay: 5500,
        },
        {
          type: 'response',
          content: 'Perfect! It is fascinating how we can save with solar energy. Our prices are competitive and we commit to not exceeding any market rate. Would you like me to arrange a call with one of our consultants?',
          delay: 7000,
        },
        {
          type: 'user',
          content: 'Yes, please, but I am worried about payments',
          delay: 9000,
        },
        {
          type: 'response',
          content: 'I understand perfectly. Managing costs effectively is super important. Here at YOURCOMPANY, we recognize that everyone\'s needs are different, which is why we have various financing options, hoping to help you stay within budget. Do you want to discuss this further with a consultant, on a call?',
          delay: 11000,
        },
        {
          type: 'user',
          content: 'Yes, I accept',
          delay: 12500,
        },
        {
          type: 'response',
          content: 'Great! Here is my calendar to schedule a time - https://YOURCALENDAR.COM',
          delay: 14000,
        },
      ],
      header: {
        messages: 'Messages',
        leadConverted: 'Lead Converted',
      },
      result: 'Result',
      resultText: 'Lead Converted to Customer',
      value: 'Value',
      time: 'Time',
    },
    contact: {
      title: 'Ready to',
      titleHighlight: 'Transform',
      subtitle: 'Schedule a personalized demo and see how we can convert your old leads into real revenue',
      demoIncludes: 'What the demo includes:',
      benefits: [
        {
          title: 'Free Analysis of Your Leads',
          desc: 'We evaluate the potential of your old leads',
        },
        {
          title: 'Live Demo',
          desc: 'See our AI in action with your real data',
        },
        {
          title: 'Personalized Strategy',
          desc: 'Specific plan for your business and sector',
        },
        {
          title: 'ROI Estimation',
          desc: 'Realistic projection of expected results',
        },
      ],
      cta: 'Schedule Free Demo',
    },
    calculator: {
      title: 'Opportunity Calculator',
      subtitle: 'Discover how much money you are losing with uncontacted leads',
      form: {
        leadsLabel: 'Uncontacted Leads',
        leadsPlaceholder: 'Ex: 1000',
        processedLabel: 'Leads Processed per Day',
        processedPlaceholder: 'Ex: 50',
        ticketLabel: 'Average Ticket',
        ticketPlaceholder: 'Ex: 500',
        periodLabel: 'Analysis Period (days)',
        periodPlaceholder: 'Ex: 30',
        submit: 'Discover your losses',
      },
      results: {
        title: 'Your results',
        lostPerDay: 'Revenue Lost per Day',
        totalLost: 'Total Revenue Lost',
        salesPerDay: 'Sales Lost per Day',
        daysToProcess: 'Days to Process',
        days: 'days',
        cta: 'Recover This Value with frontera',
        ctaButton: 'Schedule Free Demo',
      },
    },
    footer: {
      copyright: 'All rights reserved',
      privacy: 'Privacy Terms',
    },
    about: {
      title: 'About Frontera',
      subtitle: 'Portuguese technology for lead reactivation with AI applied to B2C sales.',
      foundersTitle: 'Founders',
      founders: [
        { name: 'Gonçalo', role: 'CEO' },
        { name: 'José', role: 'CTO' },
        { name: 'Guilherme', role: 'COO' },
      ],
      missionTitle: 'Mission',
      missionText: 'Our mission is to eliminate lead waste through practical and ethical artificial intelligence that understands human behavior and reactivates forgotten contacts with context and precision.',
    },
  },
};
