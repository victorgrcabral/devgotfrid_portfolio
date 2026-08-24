import { PortfolioDictionary } from './types';

export const contentPt: PortfolioDictionary = {
  profile: {
    name: "Victor Gotfrid",
    role: "Product & Web Designer",
    heroHeadline: "Unindo engenharia de software full-stack, direção de arte e design de produto.",
    heroBio: "Especializado na concepção e entrega de produtos digitais de ponta a ponta — desde arquitetura de sistemas visuais no Figma, modelagem relacional e APIs em Python, até interfaces de alta performance em Next.js, TypeScript e Three.js. Graduado em Publicidade pela Universidade Presbiteriana Mackenzie e cursando Análise e Desenvolvimento de Sistemas pelo Senac.",
    location: "São Paulo, SP",
    availability: "Disponível para contratação (Remoto / Híbrido — São Paulo e Global)",
    availabilityBadge: "Disponível para novos desafios em Design & Tech",
    email: "victorgrcabral@gmail.com",
    github: "https://github.com/victorgrcabral",
    linkedin: "https://linkedin.com/in/victorgrcabral",
    resumePdfUrl: "/curriculo-victor-cabral-pt.pdf",
    stackHighlights: ["Product Design", "Web Design", "Figma", "React", "Next.js", "TypeScript", "Python", "PostgreSQL", "Tailwind CSS", "Three.js", "IA Generativa", "APIs REST"]
  },
  nav: {
    about: "Início",
    projects: "Projetos",
    architecture: "Arquitetura",
    skills: "Competências",
    experience: "Trajetória",
    education: "Formação",
    contact: "Contato",
    resumeButton: "Baixar Currículo",
    viewCv: "Ver CV",
    switchLang: "English"
  },
  hero: {
    badge: "Design de Produto • Web Design • Tecnologia Criativa",
    headline: "Product & Web Designer",
    subtitle: "Desenvolvo produtos digitais de ponta a ponta — integrando design de interface centrado no usuário, sistemas visuais refinados e engenharia de software full-stack de alta performance.",
    ctaPrimary: "Baixar Currículo (PDF)",
    ctaSecondary: "Entrar em Contato",
    ctaProjects: "Explorar Projetos & Cases",
    terminalSnippet: "const profile = { role: 'Product & Web Designer', engineering: ['React', 'Next.js', 'TypeScript', 'Python', 'PostgreSQL'], ai_tools: ['Codex', 'Antigravity IDE', 'Claude Code', 'DeepSeek', 'Kimi'], design: ['Figma', 'UI/UX', 'Direção de Arte', 'Design Systems'], status: 'Open to Work' };"
  },
  bidbento: {
    sectionTag: "Showcase Principal de Produto & Engenharia",
    sectionTitle: "bidbento.lol — Plataforma de Leilão e Visibilidade Proporcional em Tempo Real",
    sectionSubtitle: "Aplicação completa projetada para alta concorrência, integridade transacional de dados e experiência fluida com animação de mascote.",
    architectureTab: "Nodes & Arquitetura do Sistema",
    systemDesignTab: "Decisões de Engenharia",
    challengesTab: "Desafios Superados",
    inspectNodePrompt: "Clique nos Nodes para inspecionar decisões arquiteturais e detalhes de implementação:",
    techStackHeading: "Ferramentas & Tecnologias",
    keyDecisionsHeading: "Decisões de Arquitetura",
    challengesHeading: "Desafios Técnicos Resolvidos",
    resultHeading: "Resultado Verificável",
    viewLive: "Acessar bidbento.lol",
    viewCode: "Repositório no GitHub"
  },
  projects: {
    sectionTag: "Repertório de Design & Tecnologia",
    sectionTitle: "Projetos de Produto, Web & Design",
    sectionSubtitle: "Soluções com páginas dedicadas de estudo de caso, decisões de arquitetura e direção de arte detalhadas.",
    tabs: {
      all: "Todos os Cases",
      software: "Software & Produto",
      web: "Web Design & React",
      design: "Branding & Direção de Arte"
    },
    caseStudyButton: "Ver Página do Case",
    viewSite: "Acessar Site",
    sourceCode: "Código-Fonte",
    viewBehance: "Ver Projeto"
  },
  skills: {
    sectionTag: "Arsenal Técnico & Criativo",
    sectionTitle: "Competências, Ferramentas & Ecossistema de IA",
    sectionSubtitle: "Domínio integrado em engenharia de software full-stack, design de interfaces e orquestração de Inteligência Artificial."
  },
  experience: {
    sectionTag: "Trajetória Profissional",
    sectionTitle: "Experiência Profissional",
    sectionSubtitle: "Histórico de liderança criativa, engenharia web e entrega de valor para marcas nacionais e globais.",
    timelineHeading: "Linha do Tempo Oficial"
  },
  education: {
    sectionTag: "Base Acadêmica & Idiomas",
    sectionTitle: "Formação Acadêmica & Idiomas",
    sectionSubtitle: "Solidez em comunicação estratégica, semiótica visual e ciência da computação.",
    languagesHeading: "Idiomas"
  },
  contact: {
    sectionTag: "Contato & Oportunidades",
    sectionTitle: "Vamos Conversar",
    sectionSubtitle: "Aberto a contratação como Product Designer, Web Designer, Desenvolvedor Full-Stack ou Diretor de Arte.",
    emailLabel: "E-mail Direto",
    copiedToast: "E-mail copiado para a área de transferência!",
    downloadResumePt: "Currículo em Português (PDF)",
    downloadResumeEn: "Resume in English (PDF)",
    quickCopy: "Copiar E-mail",
    sendEmail: "Enviar Mensagem",
    connectLinkedIn: "Conectar no LinkedIn"
  },
  lightbox: {
    close: "Fechar prévia",
    enlargeImage: "Clique para expandir prévia visual"
  },
  footer: {
    allSystemsNormal: "Status: Operacional • Aberto para novas contratações",
    builtWith: "Construído com Next.js 15, React Three Fiber, TypeScript e Tailwind CSS.",
    rights: "Victor Gotfrid. Todos os direitos reservados."
  },
  featuredProject: {
    id: "bidbento",
    title: "bidbento.lol",
    tagline: "Plataforma de Visibilidade Proporcional & Leilão em Tempo Real",
    category: "software",
    type: "Web Product Full-Stack",
    featured: true,
    coverImage: "/projects/bidbento-mascot-transparent.svg",
    summary: "Plataforma interativa onde cada lance válido conquista visibilidade espacial proporcional em grade reativa, projetada com sincronização em tempo real e concorrência transacional segura.",
    context: "Desenvolvida para suportar lances simultâneos com log de transações auditável e sincronização em tempo real de estado sem race conditions.",
    problem: "Sistemas tradicionais sofrem com latência de estado, inconsistência na validação de lances sob alta carga e falta de engajamento visual.",
    role: "Engenharia e UI Design de ponta a ponta: modelagem de dados no PostgreSQL, API REST em Python/FastAPI, autenticação JWT e frontend reativo em Next.js/TypeScript.",
    stack: ["Next.js", "React", "TypeScript", "Python / FastAPI", "PostgreSQL", "Tailwind CSS", "WebSockets", "Docker", "JWT Auth", "Figma UI/UX"],
    architecture: {
      overview: "Arquitetura modular desacoplada com Next.js App Router no client/server layer, consumindo endpoints REST estruturados em Python/FastAPI e banco relacional PostgreSQL com garantias ACID.",
      nodes: [
        {
          id: "node-fe",
          title: "Frontend & Interface",
          category: "frontend",
          tech: "Next.js 15, TypeScript, Tailwind CSS",
          description: "Interface orientada a componentes com renderização de grade proporcional, tipagem estrita de props e layout responsivo otimizado.",
          decisions: [
            "Next.js App Router para renderização inicial otimizada e hidratação seletiva",
            "Tailwind CSS para estilização sem overhead em runtime",
            "TypeScript em modo estrito garantindo contratos de dados seguros com o backend"
          ]
        },
        {
          id: "node-api",
          title: "API & Regras de Negócio",
          category: "api",
          tech: "Python, FastAPI, Pydantic",
          description: "Serviços RESTful estruturados com validação rigorosa de entrada e saída via schemas Pydantic, tratamento de erros centralizado e autorização por JWT.",
          decisions: [
            "Pydantic para validação determinística de tipos em runtime",
            "Middlewares de rate-limiting e autenticação protegendo endpoints de lances",
            "Separação limpa entre camada de roteamento, serviços de negócio e acesso ao banco"
          ]
        },
        {
          id: "node-db",
          title: "Persistência de Dados",
          category: "database",
          tech: "PostgreSQL, SQLAlchemy",
          description: "Modelagem relacional normalizada com constraints de integridade, índices em chaves de alta frequência e transações com rollback automático.",
          decisions: [
            "PostgreSQL pela robustez no tratamento de concorrência e transações ACID",
            "Índices compostos para consultas de leilões e histórico temporal de lances",
            "Versionamento de schema com migrações automatizadas"
          ]
        },
        {
          id: "node-sec",
          title: "Segurança & Estado",
          category: "security",
          tech: "JWT, Bcrypt, CORS & Security Headers",
          description: "Pipeline defensivo com hash de senha salted via Bcrypt, tokens de sessão criptograficamente assinados e sanitização de inputs.",
          decisions: [
            "Tokens com escopo restrito e tempo de expiração explícito",
            "Checagem defensiva de parâmetros prevenindo race conditions em lances concorrentes"
          ]
        }
      ]
    },
    keyDecisions: [
      "Separação estrita entre regras de negócio do backend e apresentação do frontend.",
      "Banco relacional com locks e constraints para evitar estados inconsistentes no leilão.",
      "Design de interface claro e focado no usuário, reduzindo atrito cognitivo em operações de lance."
    ],
    challenges: [
      "Tratamento de concorrência e integridade em momentos de alta frequência de lances.",
      "Garantia de tipagem uniforme entre modelos do banco, schemas da API e componentes React.",
      "Otimização no carregamento e virtualização da grade proporcional de ocupação."
    ],
    verifiableResult: "Aplicação web full-stack estável e funcional em produção (bidbento.lol) com validações em tempo real e arquitetura modular.",
    links: {
      github: "https://github.com/victorgrcabral/bidbento.lol",
      live: "https://bidbento.lol"
    }
  },
  webProjects: [
    {
      id: "interfusao",
      title: "Grupo INTERFUSÃO",
      tagline: "Sistema de Identidade de Marca & Portal Corporativo de Alta Performance",
      category: "web",
      type: "Engenharia Web & Identidade Visual",
      coverImage: "/projects/interfusao-clean.png",
      colorPalette: [
        { name: "Mining Green", hex: "#78B13F", role: "Cor Primária da Marca" },
        { name: "Pure White", hex: "#FFFFFF", role: "Superfície de Contraste" },
        { name: "Quarry Charcoal", hex: "#1A1D1A", role: "Fundo Escuro Industrial" },
        { name: "Industrial Slate", hex: "#333830", role: "Neutro Secundário" }
      ],
      summary: "Desenvolvimento web e arquitetura de marca completa, unificando sistema de design em mais de 20 pontos de contato industriais com portal corporativo rápido, responsivo e estruturado em SEO.",
      context: "Reestruturação da presença digital e identidade de um grupo industrial atuante nos setores de engenharia pesada e mineração há mais de 40 anos.",
      problem: "Comunicação fragmentada e website legado com baixa performance em dispositivos móveis e métricas de conversão abaixo do potencial.",
      role: "Atuação 360°: reformulação da identidade visual (logotipos, paleta de cores, manual de marca), desenvolvimento modular do frontend em conformidade com SEO, Core Web Vitals e boas práticas de UX.",
      stack: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3 / Sass", "WordPress Headless / Custom", "Figma", "Design Systems", "SEO"],
      keyDecisions: [
        "Criação de tokens autênticos de cor: Mining Green (#78B13F) e Charcoal (#1A1D1A).",
        "Estrutura modular de blocos facilitando manutenção e expansão de conteúdo.",
        "Otimização de Core Web Vitals com notas máximas e renderização rápida de imagens industriais."
      ],
      challenges: [
        "Traduzir conceitos técnicos de engenharia pesada para uma navegação fluida e intuitiva para tomadores de decisão B2B.",
        "Migração e modernização de legado para templates desacoplados de alta velocidade."
      ],
      verifiableResult: "Portal oficial entregue e operando (interfusao.com.br) com navegação fluida em todos os dispositivos e manual de marca adotado em toda a empresa.",
      links: {
        live: "https://www.interfusao.com.br"
      }
    },
    {
      id: "clinica-muricy",
      title: "Clínica Muricy",
      tagline: "Aplicação Web Médica e Odontológica em React/Next.js",
      category: "web",
      type: "Front-end & UI/UX Design",
      coverImage: "/projects/clinica-muricy-clean.png",
      colorPalette: [
        { name: "Medical Charcoal", hex: "#071510", role: "Canvas Base Escuro" },
        { name: "Champagne Gold", hex: "#D4AF37", role: "Destaque Nobre" },
        { name: "Clinical Alabaster", hex: "#E8ECE9", role: "Tipografia e Superfícies Claras" },
        { name: "Clinical Deep Forest", hex: "#0A2619", role: "Verde Escuro Cirúrgico" }
      ],
      summary: "Interface web clínica moderna e acessível em React e Next.js, transmitindo autoridade médica, odontologia de precisão e navegação sem atrito com conformidade WCAG.",
      context: "Criação de experiência digital premium para pacientes que buscam tratamentos odontológicos especializados e agendamento direto.",
      problem: "Equilibrar detalhamento técnico de procedimentos clínicos com usabilidade clara e acolhedora para diferentes perfis demográficos.",
      role: "Desenvolvimento de componentes React, design de interfaces no Figma, layout responsivo com Tailwind CSS e integração de canais de contato direto.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "UI/UX Design", "Acessibilidade (WCAG)"],
      keyDecisions: [
        "Arquitetura de componentes reutilizáveis para blocos de tratamentos, corpo clínico e depoimentos.",
        "Aderência estrita a contraste de cores e tipografia acessível (WCAG AA).",
        "Microinterações direcionando o usuário para canais diretos de consulta."
      ],
      challenges: [
        "Hierarquização de grande volume de informações clínicas sem sobrecarregar a leitura.",
        "Garantia de carregamento instantâneo em conexões móveis."
      ],
      verifiableResult: "Plataforma clínica moderna, acessível e 100% responsiva em produção no clinicamuricy.com com fluxos simplificados de contato.",
      links: {
        live: "https://clinicamuricy.com"
      }
    }
  ],
  designProjects: [
    {
      id: "nerdy",
      title: "NERDY CLOTHING",
      tagline: "Streetwear Brand Identity, Concept & Typography",
      category: "design",
      type: "Branding & Direção Criativa",
      coverImage: "/projects/nerdy-board-1.jpg",
      galleryImages: [
        "/projects/nerdy-board-1.jpg",
        "/projects/nerdy-board-6.png",
        "/projects/nerdy-board-8.png",
        "/projects/nerdy-board-10.jpg",
        "/projects/nerdy-board-14.png",
        "/projects/nerdy-board-18.png",
        "/projects/nerdy-board-22.png",
        "/projects/nerdy-board-26.jpg",
        "/projects/nerdy-board-30.jpg",
        "/projects/nerdy-board-34.jpg",
        "/projects/nerdy-board-38.png",
        "/projects/nerdy-board-40.jpg",
        "/projects/nerdy-board-44.png",
        "/projects/nerdy-board-46.png",
        "/projects/nerdy-board-49.jpg",
        "/projects/nerdy-board-53.jpg",
        "/projects/nerdy-board-56.jpg"
      ],
      colorPalette: [
        { name: "Nerdy Purple", hex: "#7C3AED", role: "Roxo Principal da Marca" },
        { name: "Pitch Black", hex: "#000000", role: "Canvas Base" },
        { name: "Urban Gray", hex: "#6B7280", role: "Neutro Tipográfico" },
        { name: "Clean White", hex: "#FFFFFF", role: "Alto Contraste" }
      ],
      summary: "Identidade visual completa para marca contemporânea de streetwear, incluindo tipografia customizada, concept art, estética urbana e direção criativa para peças de vestuário e campanhas.",
      context: "Construção de identidade visual expressiva para o universo da moda urbana e cultura jovem.",
      problem: "Criar uma identidade marcante e autêntica em um segmento altamente competitivo.",
      role: "Direção de arte, desenvolvimento de logotipo, tipografia customizada, mockups de vestuário e peças conceituais.",
      stack: ["Adobe Illustrator", "Photoshop", "Tipografia", "Direção de Arte", "Design de Moda", "Brand Guidelines"],
      keyDecisions: [
        "Linguagem visual de alto contraste com tipografia de impacto.",
        "Sistema padronizado de grafismos para aplicação em tecidos e mídia digital."
      ],
      challenges: ["Garantir fidelidade na reprodução das estampas em múltiplos processos de estamparia têxtil."],
      verifiableResult: "Case completo de branding documentado com concept art, mockups de peças e ativos de campanha.",
      links: {
        live: "#"
      }
    },
    {
      id: "djasco",
      title: "Djasco Headshop",
      tagline: "Criação de Conceito, Identidade de Marca & Social Media",
      category: "design",
      type: "Branding & Identidade Visual",
      coverImage: "/projects/djasco-board-1.png",
      galleryImages: [
        "/projects/djasco-board-1.png",
        "/projects/djasco-board-4.png",
        "/projects/djasco-board-6.jpg",
        "/projects/djasco-board-8.png",
        "/projects/djasco-board-10.png",
        "/projects/djasco-board-12.png",
        "/projects/djasco-board-16.png",
        "/projects/djasco-board-19.png",
        "/projects/djasco-board-21.png",
        "/projects/djasco-board-23.png",
        "/projects/djasco-board-25.png",
        "/projects/djasco-board-27.png",
        "/projects/djasco-board-29.png"
      ],
      colorPalette: [
        { name: "Deep Violet", hex: "#181437", role: "Base Noturna" },
        { name: "Neon Green", hex: "#4ADE80", role: "Destaque Vibrante" },
        { name: "Electric Purple", hex: "#C084FC", role: "Secundário Glow" },
        { name: "Midnight Charcoal", hex: "#0E0B20", role: "Superfície" }
      ],
      summary: "Desenvolvimento conceitual, identidade visual completa, logotipo exclusivo, ilustrações autorais e direção de arte para marca premium de headshop.",
      context: "Posicionamento e identidade para uma tabacaria e headshop moderna com apelo visual diferenciado.",
      problem: "Criar uma identidade sofisticada que rompa com clichês tradicionais do segmento e transmita estilo de vida contemporâneo.",
      role: "Criação de conceito, logotipo, paleta cromática, ilustrações exclusivas, material de PDV e templates de redes sociais.",
      stack: ["Adobe Illustrator", "Photoshop", "Figma", "Branding", "Ilustração", "Social Media"],
      keyDecisions: [
        "Paleta noturna com contraste em tons neon vibrantes (#181437).",
        "Símbolo icônico e versátil para aplicação em adesivos, embalagens e feed digital."
      ],
      challenges: ["Consistência visual entre materiais impressos (embalagens, brindes) e presença digital."],
      verifiableResult: "Projeto de branding e direção de arte com documentação visual abrangente.",
      links: {
        live: "#"
      }
    },
    {
      id: "social-hype",
      title: "SOCIAL HYPE",
      tagline: "Direção de Arte de Alto Impacto & Visuais para Campanhas Digitais",
      category: "design",
      type: "Direção de Arte & Visuais 3D",
      coverImage: "/projects/social-hype-board-1.png",
      galleryImages: [
        "/projects/social-hype-board-1.png",
        "/projects/social-hype-board-2.png"
      ],
      colorPalette: [
        { name: "Metallic Chrome", hex: "#E2E8F0", role: "Textura Metálica 3D" },
        { name: "Neon Cyber", hex: "#38BDF8", role: "Luz de Acento" },
        { name: "Deep Space", hex: "#030712", role: "Fundo Infinito" },
        { name: "Hyper Magenta", hex: "#EC4899", role: "Contraste Vibrante" }
      ],
      summary: "Direção de arte com tipografia 3D, texturas metálicas em cromo, composições de alta energia e artes de campanha digital com engajamento visual.",
      context: "Exploração visual de tendências estéticas futuristas e identidade de alta energia para ambiente digital.",
      problem: "Desenvolver peças visuais de retenção imediata de atenção em feeds digitais hipercompetitivos.",
      role: "Direção criativa, composição 3D, manipulação de imagem e diagramação de peças de campanha.",
      stack: ["Adobe Photoshop", "Illustrator", "Cinema 4D / 3D", "Direção de Arte", "Motion & Social"],
      keyDecisions: [
        "Acabamento cromado metálico combinado com iluminação dramática volumétrica.",
        "Hierarquia visual priorizando tipografia display e impacto imediato."
      ],
      challenges: ["Equilibrar reflexos, profundidade e nitidez visual em telas de smartphones."],
      verifiableResult: "Case de key visuals e direção de arte entregue com alto engajamento visual.",
      links: {
        live: "#"
      }
    },
    {
      id: "buona-notte",
      title: "BUONA NOTTE HOSTEL",
      tagline: "Branding para Hotelaria, Sinalização Ambiental & Identidade",
      category: "design",
      type: "Branding & Sinalização",
      coverImage: "/projects/buona-notte-board-1.png",
      galleryImages: [
        "/projects/buona-notte-board-1.png",
        "/projects/buona-notte-board-4.png",
        "/projects/buona-notte-board-6.png",
        "/projects/buona-notte-board-9.png",
        "/projects/buona-notte-board-10.png",
        "/projects/buona-notte-board-12.png",
        "/projects/buona-notte-board-14.png",
        "/projects/buona-notte-board-16.png",
        "/projects/buona-notte-board-18.png",
        "/projects/buona-notte-board-20.png",
        "/projects/buona-notte-board-22.png",
        "/projects/buona-notte-board-24.png"
      ],
      colorPalette: [
        { name: "Nocturne Navy", hex: "#1E293B", role: "Azul Noturno Base" },
        { name: "Warm Gold", hex: "#F59E0B", role: "Acolhimento Nobre" },
        { name: "Alabaster Cream", hex: "#F8FAFC", role: "Superfície Clara" },
        { name: "Slate Sage", hex: "#64748B", role: "Neutro de Wayfinding" }
      ],
      summary: "Branding completo para hostel boutique, incluindo logotipo, sinalização ambiental, papelaria institucional e peças promocionais de hospitalidade.",
      context: "Criação de atmosfera acolhedora, moderna e cosmopolita para hóspedes e viajantes internacionais.",
      problem: "Desenvolver uma linguagem que funcione harmonicamente no espaço físico (sinalização) e nos canais digitais de reserva.",
      role: "Identidade visual completa, desenho de logotipo, tipografia, sinalização interna e materiais de boas-vindas.",
      stack: ["Adobe Illustrator", "Photoshop", "Design de Sinalização", "Estratégia de Marca", "Papelaria"],
      keyDecisions: [
        "Tipografia clássica com toque contemporâneo, transmitindo descanso e hospitalidade.",
        "Sistema de sinalização visual intuitivo facilitando a circulação dos hóspedes."
      ],
      challenges: ["Garantir legibilidade e durabilidade dos materiais de sinalização dentro do espaço físico do hostel."],
      verifiableResult: "Projeto de branding para hotelaria completo com pranchas de sinalização.",
      links: {
        live: "#"
      }
    }
  ],
  experiences: [
    {
      id: "exp-interfusao",
      role: "Analista de Marketing e Marca (Identidade Visual & Web UX)",
      company: "Grupo Interfusão",
      location: "São Paulo, SP (Híbrido)",
      period: "Maio 2025 — Presente",
      type: "Tempo Integral",
      isCurrent: true,
      responsibilities: [
        "Liderança na reformulação do sistema de identidade visual da INTERFUSÃO, padronizando mais de 20 pontos de contato corporativos.",
        "Desenvolvimento do site oficial e landing pages institucionais aplicando práticas avançadas de SEO, Core Web Vitals e UX.",
        "Criação de materiais multimídia, apresentações executivas e comunicação visual para os setores de mineração e engenharia.",
        "Implementação de princípios de design centrado no usuário em interfaces corporativas."
      ],
      technologies: ["Figma", "WordPress", "JavaScript", "TypeScript", "React", "HTML5/CSS3", "Adobe Creative Cloud", "Brand Strategy"]
    },
    {
      id: "exp-rc",
      role: "Diretor de Arte Criativo",
      company: "Agência RC Marketing",
      location: "São Paulo, SP",
      period: "Fevereiro 2025 — Maio 2025",
      type: "Tempo Integral",
      isCurrent: false,
      responsibilities: [
        "Direção de arte em campanhas de ponto de venda (PDV) e varejo para marcas líderes de mercado, como Aurora Alimentos.",
        "Desdobramento de conceitos visuais e adaptação para múltiplos formatos e canais com rigor estético.",
        "Fechamento de arquivos em grande escala para produção gráfica e liderança de equipe de 4 designers."
      ],
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Design de PDV", "Direção de Arte", "Liderança Criativa"]
    },
    {
      id: "exp-salesfy",
      role: "Designer Freelancer (UX/UI & Digital)",
      company: "Salesfy",
      location: "São Paulo, SP (Remoto)",
      period: "Outubro 2024 — Janeiro 2025",
      type: "Freelance",
      isCurrent: false,
      responsibilities: [
        "Criação de landing pages com foco em conversão aplicando melhores práticas de UX/UI design.",
        "Desenvolvimento de wireframes e protótipos navegáveis no Figma conectando design e produto.",
        "Produção de peças visuais para campanhas digitais integradas."
      ],
      technologies: ["Figma", "UX/UI Design", "Landing Pages", "WordPress", "Framer", "Adobe Creative Suite", "HTML/CSS"]
    },
    {
      id: "exp-liv",
      role: "Head of Design / Designer Jr.",
      company: "LIV MARKETING",
      location: "São Paulo, SP",
      period: "Outubro 2022 — Junho 2024",
      type: "Tempo Integral",
      isCurrent: false,
      responsibilities: [
        "Gestão da visão criativa e entrega de projetos de branding, interfaces e comunicação institucional (promovido a Head em 2023).",
        "Direção de projetos de identidade visual, desde o conceito do logotipo até o manual de marca completo.",
        "Otimização do fluxo de trabalho criativo com metodologias ágeis e atendimento direto a clientes corporativos."
      ],
      technologies: ["Figma", "Adobe Illustrator", "Photoshop", "Estratégia de Marca", "Metodologias Ágeis", "Liderança de Design"]
    },
    {
      id: "exp-imedlife",
      role: "Head de Criação / Estagiário de Marketing",
      company: "IMEDLIFE",
      location: "São Paulo, SP",
      period: "Agosto 2020 — Março 2022",
      type: "Tempo Integral",
      isCurrent: false,
      responsibilities: [
        "Liderança criativa no desenvolvimento de marcas para o segmento de saúde e plataformas de e-commerce.",
        "Desenvolvimento e manutenção de páginas em WordPress com foco em usabilidade e conversão.",
        "Desenvolvimento de manuais de identidade visual e materiais corporativos para clínicas e hospitais."
      ],
      technologies: ["WordPress", "Elementor", "Figma", "UI/UX", "Adobe Suite", "Branding para Saúde"]
    },
    {
      id: "exp-tecnologia-unica",
      role: "Social Media Jr.",
      company: "Tecnologia Única",
      location: "São Paulo, SP",
      period: "Maio 2022 — Setembro 2022",
      type: "Tempo Integral",
      isCurrent: false,
      responsibilities: [
        "Criação e direção de arte de campanhas digitais para o setor de tecnologia.",
        "Produção de conteúdos audiovisuais e motion design utilizando o pacote Adobe."
      ],
      technologies: ["Adobe Photoshop", "Illustrator", "Premiere Pro", "Motion Design", "Mídias Digitais"]
    }
  ],
  educationList: [
    {
      id: "edu-mackenzie",
      degree: "Bacharelado em Publicidade, Propaganda e Marketing",
      institution: "Universidade Presbiteriana Mackenzie",
      period: "2017 — 2021",
      status: "Graduado / Concluído",
      details: "Formação universitária em estratégia de comunicação, direção de arte, comportamento do consumidor, semiótica visual, redação publicitária e branding."
    },
    {
      id: "edu-senac-ads",
      degree: "Graduação em Análise e Desenvolvimento de Sistemas (ADS)",
      institution: "Centro Universitário Senac",
      period: "2026 — 2028",
      status: "Em Andamento",
      details: "Formação superior em engenharia de software, estruturas de dados, modelagem relacional de banco de dados, arquitetura de sistemas e desenvolvimento web full-stack."
    },
    {
      id: "edu-senac-adobe",
      degree: "Especialização Pacote Adobe (Photoshop e Illustrator)",
      institution: "Centro Universitário Senac",
      period: "2017",
      status: "Certificado",
      details: "Capacitação avançada em tratamento de imagens, ilustração vetorial e composição visual para mídia impressa e digital."
    },
    {
      id: "edu-ccaa",
      degree: "Inglês como Segundo Idioma (Formação Completa)",
      institution: "CCAA",
      period: "2007 — 2013",
      status: "Concluído",
      details: "Fluência profissional em inglês, com domínio de conversação, escrita técnica e comunicação corporativa."
    }
  ],
  languagesList: [
    {
      language: "Português",
      proficiency: "Nativo / Língua Materna",
      level: "C2 — Fluência Nativa"
    },
    {
      language: "Inglês",
      proficiency: "Fluente / Bilíngue",
      level: "C1 — Proficiência completa para discussões técnicas, reuniões executivas e clientes internacionais"
    },
    {
      language: "Espanhol",
      proficiency: "Profissional",
      level: "B2 — Compreensão, leitura e escrita para o ambiente profissional"
    }
  ],
  skillsList: [
    {
      category: "Design de Produto & UI/UX",
      iconName: "Layout",
      skills: [
        { name: "Figma (Auto-layout, Tokens)", focus: true },
        { name: "Design Systems", focus: true },
        { name: "Prototipagem de Alta Fidelidade", focus: true },
        { name: "Arquitetura de Informação" },
        { name: "Wireframes e Fluxos de Usuário" },
        { name: "Acessibilidade (WCAG)", focus: true },
        { name: "Testes de Usabilidade" }
      ]
    },
    {
      category: "Front-end & Web Criativo",
      iconName: "Code2",
      skills: [
        { name: "React", focus: true },
        { name: "Next.js (App Router)", focus: true },
        { name: "TypeScript", focus: true },
        { name: "JavaScript (ES6+)", focus: true },
        { name: "Tailwind CSS", focus: true },
        { name: "Three.js / R3F", focus: true },
        { name: "HTML5 & CSS3 / Sass" },
        { name: "Framer Motion" }
      ]
    },
    {
      category: "Back-end & Banco de Dados",
      iconName: "Server",
      skills: [
        { name: "PostgreSQL", focus: true },
        { name: "Python", focus: true },
        { name: "FastAPI", focus: true },
        { name: "Node.js", focus: true },
        { name: "APIs RESTful", focus: true },
        { name: "Modelagem Relacional" },
        { name: "Autenticação (JWT, Bcrypt)" },
        { name: "Docker" }
      ]
    },
    {
      category: "Branding & Direção de Arte",
      iconName: "Sparkles",
      skills: [
        { name: "Adobe Photoshop", focus: true },
        { name: "Adobe Illustrator", focus: true },
        { name: "Adobe InDesign" },
        { name: "Adobe Premiere Pro" },
        { name: "Identidade Visual & Key Visuals", focus: true },
        { name: "Direção de Arte 360°" }
      ]
    },
    {
      category: "IA, LLMs & Engenharia de Prompt",
      iconName: "Bot",
      skills: [
        { name: "Codex", focus: true },
        { name: "Antigravity", focus: true },
        { name: "Antigravity IDE", focus: true },
        { name: "Claude", focus: true },
        { name: "Claude Code", focus: true },
        { name: "IA Generativa", focus: true },
        { name: "DeepSeek", focus: true },
        { name: "Kimi", focus: true },
        { name: "Hermes", focus: true },
        { name: "Orca" },
        { name: "Cursor", focus: true },
        { name: "APIs OpenAI", focus: true },
        { name: "Engenharia de Prompt", focus: true },
        { name: "Agentes Autônomos (Sistemas Multiagente)", focus: true },
        { name: "RAG & Embeddings", focus: true },
        { name: "Structured Outputs & Function Calling", focus: true },
        { name: "Ajuste Fino de Prompts e Context Windows" },
        { name: "Avaliação de Modelos e Benchmarks" }
      ]
    }
  ]
};
