export const siteConfig = {
  name: "OFERTAS IRRESISTÍVEIS",
  tagline: "Comunidade Gratuita de Achadinhos e Promoções",
  description:
    "Receba diariamente uma curadoria de achadinhos, promoções, cupons de desconto e oportunidades de economia direto no seu WhatsApp.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://ofertasirresistiveis.com.br",

  // Link Oficial Centralizado do Grupo de WhatsApp
  whatsappGroupUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL ||
    "https://chat.whatsapp.com/LOLQwz5hqgzAxfpKupaoXi?s=cl&p=a&mlu=4&ilr=4",

  // Meta Ads / Analytics
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "1160559719946128",

  // Dados da Empresa / Controlador (LGPD)
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || "OFERTAS IRRESISTÍVEIS",
    legalName:
      process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME || "[PREENCHER_RAZAO_SOCIAL]",
    cnpj: process.env.NEXT_PUBLIC_COMPANY_CNPJ || "[PREENCHER_CNPJ_SE_APLICAVEL]",
    email:
      process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
      "contato@ofertasirresistiveis.com.br",
    location: process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Brasil",
  },

  // Conteúdo das Seções
  hero: {
    badge: "COMUNIDADE GRATUITA DE ACHADINHOS",
    headline: "As melhores oportunidades de economia podem estar a um clique de você!",
    subheadline:
      "Entre para o Ofertas Irresistíveis e receba uma seleção de achadinhos, promoções e cupons diretamente no seu WhatsApp.",
    benefits: [
      "Ofertas e cupons selecionados diariamente",
      "Achadinhos de diversas categorias",
      "Participação 100% gratuita",
      "Acesso direto e prático pelo WhatsApp",
    ],
    ctaText: "QUERO ENTRAR NO GRUPO GRÁTIS",
    microcopy:
      "Participação gratuita. Ao entrar, você poderá visualizar mensagens e números de outros participantes do grupo.",
  },

  howItWorks: {
    title: "Economizar pode ser muito mais simples!",
    subtitle: "Em apenas 3 passos práticos você começa a receber as melhores oportunidades de compra online.",
    steps: [
      {
        number: "01",
        title: "Entre gratuitamente",
        description: "Clique no botão e participe da nossa comunidade oficial no WhatsApp.",
      },
      {
        number: "02",
        title: "Acompanhe os achadinhos",
        description: "Confira promoções, cupons e produtos selecionados diariamente pela equipe.",
      },
      {
        number: "03",
        title: "Aproveite as oportunidades",
        description: "Escolha as ofertas que fazem sentido para você e compre diretamente nas lojas oficiais.",
      },
    ],
  },

  categories: {
    title: "Achadinhos para diferentes momentos do seu dia!",
    subtitle:
      "Todas as categorias reunidas no mesmo grupo oficial para você não perder nenhuma oportunidade relevante.",
    items: [
      {
        id: "tecnologia",
        title: "Tecnologia e eletrônicos",
        description: "Smartphones, notebooks, fones bluetooth, periféricos e gadgets com preço baixo.",
        icon: "Smartphone",
      },
      {
        id: "casa",
        title: "Casa e cozinha",
        description: "Eletroportáteis, air fryers, itens de organização e utensílios para facilitar seu dia.",
        icon: "Home",
      },
      {
        id: "moda",
        title: "Moda e beleza",
        description: "Roupas, calçados, perfumes, maquiagens e produtos de cuidados pessoais em liquidação.",
        icon: "Sparkles",
      },
      {
        id: "games",
        title: "Games e acessórios",
        description: "Jogos, consoles, controles, headsets e itens gamers com descontos imperdíveis.",
        icon: "Gamepad2",
      },
      {
        id: "variados",
        title: "Produtos variados",
        description: "Itens úteis, novidades e achados inusitados de grandes lojas e marketplaces.",
        icon: "ShoppingBag",
      },
      {
        id: "cupons",
        title: "Cupons e promoções",
        description: "Cupons testados, frete grátis, queimas de estoque e campanhas relâmpago de lojas parceiras.",
        icon: "TicketPercent",
      },
    ],
  },

  benefits: {
    title: "Por que participar do Ofertas Irresistíveis?",
    subtitle:
      "A curadoria certa para você economizar dinheiro e tempo sem complicações.",
    items: [
      {
        title: "Economia de tempo na procura",
        description: "Filtramos dezenas de lojas diariamente para trazer apenas promoções que realmente valem a pena.",
      },
      {
        title: "Produtos de diferentes categorias",
        description: "De eletrônicos a produtos de casa, ache o que precisa com o melhor valor disponível.",
      },
      {
        title: "Cupons e oportunidades selecionadas",
        description: "Avisos rápidos sobre cupons de desconto antes que esgotem.",
      },
      {
        title: "Acesso gratuito à comunidade",
        description: "Você não paga nenhuma taxa, mensalidade ou valor para participar do grupo.",
      },
      {
        title: "Compartilhamento organizado",
        description: "Mensagens claras, com link direto, preço promocional e informações essenciais.",
      },
    ],
    ctaText: "QUERO RECEBER OFERTAS NO WHATSAPP",
  },

  transparency: {
    title: "Transparência e Confiança em Primeiro Lugar",
    subtitle: "Conheça como a nossa comunidade funciona e como mantemos o serviço gratuito para você.",
    points: [
      {
        title: "Participação 100% gratuita",
        description: "Você nunca será cobrado por participar, receber mensagens ou clicar nas ofertas do grupo.",
      },
      {
        title: "Links de afiliados e monetização",
        description: "Algumas ofertas compartilhadas contêm links de afiliados. Isso significa que podemos receber uma comissão caso você decida comprar através do nosso link, sem nenhum custo adicional para você.",
      },
      {
        title: "Publicações patrocinadas identificadas",
        description: "Eventuais divulgações em parceria com marcas serão devidamente identificadas como publicidade ou conteúdo patrocinado.",
      },
      {
        title: "Preços e estoques são definidos pelos lojistas",
        description: "Os preços, disponibilidade de estoque, regras de frete e prazos são de responsabilidade exclusiva dos lojistas e podem ser alterados a qualquer instante.",
      },
      {
        title: "Decisão de compra totalmente livre",
        description: "A curadoria é estritamente informativa. Você tem autonomia total para avaliar se o item faz sentido para você antes de concluir qualquer compra.",
      },
    ],
  },

  faq: [
    {
      question: "Preciso pagar para participar?",
      answer: "Não. A participação no grupo é totalmente gratuita.",
    },
    {
      question: "Como receberei as ofertas?",
      answer: "As ofertas serão compartilhadas diretamente no grupo oficial de WhatsApp pelo administrador.",
    },
    {
      question: "Sou obrigado a comprar?",
      answer: "Não. Você é livre para avaliar as oportunidades e só comprar o que realmente quiser ou precisar.",
    },
    {
      question: "As promoções ficam disponíveis para sempre?",
      answer: "Não necessariamente. Preços, cupons e estoques variam rapidamente e podem sofrer alterações a qualquer momento pelas lojas parceiras.",
    },
    {
      question: "Posso sair do grupo quando quiser?",
      answer: "Sim. Você pode sair do grupo a qualquer momento, diretamente pelas configurações do WhatsApp, com total liberdade.",
    },
  ],

  finalCta: {
    headline: "Seu próximo achadinho pode estar esperando por você!",
    description: "Participe gratuitamente e acompanhe oportunidades selecionadas diretamente no WhatsApp.",
    ctaText: "ENTRAR NO GRUPO AGORA",
  },
};
