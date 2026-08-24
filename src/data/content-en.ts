import { PortfolioDictionary } from './types';

export const contentEn: PortfolioDictionary = {
  profile: {
    name: "Victor Gotfrid",
    role: "Product & Web Designer",
    heroHeadline: "Bridging full-stack software engineering with high-impact art direction and product design.",
    heroBio: "Specialized in building end-to-end digital products — from visual systems in Figma, relational data modeling and Python APIs to responsive interfaces in Next.js, TypeScript, and Three.js. Bachelor's in Advertising from Mackenzie University and Systems Analysis & Development from Senac.",
    location: "São Paulo, Brazil",
    availability: "Available for hire (Remote / Hybrid - Brazil & Worldwide)",
    availabilityBadge: "Open for new product & design challenges",
    email: "victorgrcabral@gmail.com",
    github: "https://github.com/victorgrcabral",
    linkedin: "https://linkedin.com/in/victorgrcabral",
    resumePdfUrl: "/resume-victor-cabral-en.pdf",
    stackHighlights: ["Product Design", "Web Design", "Figma", "React", "Next.js", "TypeScript", "Python", "PostgreSQL", "Tailwind CSS", "Three.js", "Generative AI", "REST APIs"]
  },
  nav: {
    about: "Home",
    projects: "Projects",
    architecture: "Architecture",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    resumeButton: "Download Resume",
    viewCv: "View CV",
    switchLang: "Português"
  },
  hero: {
    badge: "Product Design • Web Design • Creative Technology",
    headline: "Product & Web Designer",
    subtitle: "I build end-to-end web products — uniting human-centered product design, refined interface systems, and high-performance software engineering.",
    ctaPrimary: "Download Resume (PDF)",
    ctaSecondary: "Get in Touch",
    ctaProjects: "Explore Projects & Cases",
    terminalSnippet: "const profile = { role: 'Product & Web Designer', engineering: ['React', 'Next.js', 'TypeScript', 'Python', 'PostgreSQL'], ai_tools: ['Codex', 'Antigravity IDE', 'Claude Code', 'DeepSeek', 'Kimi'], design: ['Figma', 'UI/UX', 'Art Direction', 'Design Systems'], status: 'Open to Work' };"
  },
  bidbento: {
    sectionTag: "Primary Product & Software Showcase",
    sectionTitle: "bidbento.lol — Real-Time Screen Visibility & Auction Platform",
    sectionSubtitle: "Complete application engineered for high concurrency, transactional data integrity, and a fluid user experience with live mascot animation.",
    architectureTab: "System Architecture & Nodes",
    systemDesignTab: "Engineering Decisions",
    challengesTab: "Overcome Challenges",
    inspectNodePrompt: "Click any system node to inspect implementation details and architectural rationale:",
    techStackHeading: "Toolchain & Stack",
    keyDecisionsHeading: "Architectural Decisions",
    challengesHeading: "Solved Technical Challenges",
    resultHeading: "Verifiable Outcome",
    viewLive: "Visit bidbento.lol",
    viewCode: "GitHub Repository"
  },
  projects: {
    sectionTag: "Design & Technology Repertoire",
    sectionTitle: "Product, Web & Design Projects",
    sectionSubtitle: "Production-ready solutions with dedicated case study pages, deep-dive architectural decisions, and visual craft.",
    tabs: {
      all: "All Cases",
      software: "Software & Product",
      web: "Web Design & React",
      design: "Branding & Art Direction"
    },
    caseStudyButton: "View Case Study Page",
    viewSite: "Visit Website",
    sourceCode: "Source Code",
    viewBehance: "View Project"
  },
  skills: {
    sectionTag: "Technical & Creative Toolchain",
    sectionTitle: "Skills, Technologies & AI Toolchain",
    sectionSubtitle: "Integrated mastery across full-stack software development, interface design, and generative AI orchestration."
  },
  experience: {
    sectionTag: "Career History",
    sectionTitle: "Professional Experience",
    sectionSubtitle: "Track record of design leadership, web engineering, and product delivery for national and global brands.",
    timelineHeading: "Official Timeline"
  },
  education: {
    sectionTag: "Academic Foundation & Languages",
    sectionTitle: "Education & Languages",
    sectionSubtitle: "Strong foundation in strategic communication, visual semiotics, and computer science.",
    languagesHeading: "Languages"
  },
  contact: {
    sectionTag: "Contact & Opportunities",
    sectionTitle: "Let's Connect",
    sectionSubtitle: "Actively seeking opportunities as a Product Designer, Web Designer, Full-Stack Developer, or Creative Technologist.",
    emailLabel: "Direct Email",
    copiedToast: "Email copied to clipboard!",
    downloadResumePt: "Currículo em Português (PDF)",
    downloadResumeEn: "Resume in English (PDF)",
    quickCopy: "Copy Email",
    sendEmail: "Send Message",
    connectLinkedIn: "Connect on LinkedIn"
  },
  lightbox: {
    close: "Close preview",
    enlargeImage: "Click to expand visual preview"
  },
  footer: {
    allSystemsNormal: "Status: Operational • Open for new challenges",
    builtWith: "Built with Next.js 15, React Three Fiber, TypeScript, and Tailwind CSS.",
    rights: "Victor Gotfrid. All rights reserved."
  },
  featuredProject: {
    id: "bidbento",
    title: "bidbento.lol",
    tagline: "Proportional Screen Visibility & Real-Time Auction Platform",
    category: "software",
    type: "Full-Stack Web Product",
    featured: true,
    coverImage: "/projects/bidbento-mascot-transparent.svg",
    summary: "Innovative screen visibility platform where every valid bid claims real-time proportional grid space, engineered for high concurrency and secure transaction processing.",
    context: "Designed to handle concurrent auction bidding, auditable transaction logs, and real-time state synchronization without data race conditions.",
    problem: "Conventional auction systems frequently suffer from state latency, inconsistent bid validation under load, and cluttered interfaces for operators.",
    role: "End-to-end engineering & UI Design: relational schema modeling in PostgreSQL, REST APIs in Python/FastAPI, JWT authentication, and responsive Next.js/TypeScript frontend.",
    stack: ["Next.js", "React", "TypeScript", "Python / FastAPI", "PostgreSQL", "Tailwind CSS", "WebSockets", "Docker", "JWT Auth", "Figma UI/UX"],
    architecture: {
      overview: "Decoupled modular architecture with Next.js App Router on the client/server layer, consuming structured REST API endpoints backed by a normalized PostgreSQL database with ACID transaction safety.",
      nodes: [
        {
          id: "node-fe",
          title: "Frontend & UI Layer",
          category: "frontend",
          tech: "Next.js 15, TypeScript, Tailwind CSS",
          description: "Reactive component-driven interface with proportional grid rendering, strict prop typing, and optimized responsive layouts.",
          decisions: [
            "Next.js App Router for optimal initial server rendering and selective hydration",
            "Tailwind CSS for zero-runtime styling overhead and cohesive design tokens",
            "Strict TypeScript validation across all data contracts shared with the backend"
          ]
        },
        {
          id: "node-api",
          title: "API & Business Logic Layer",
          category: "api",
          tech: "Python, FastAPI, Pydantic",
          description: "Structured RESTful services with strict input/output schema validation, centralized error handling, and JWT token-based authorization.",
          decisions: [
            "Pydantic for deterministic runtime type validation and schema guarantees",
            "Authentication and rate-limiting middlewares protecting critical bidding endpoints",
            "Clean separation between routing layer, business service logic, and database access"
          ]
        },
        {
          id: "node-db",
          title: "Data Persistence & Models",
          category: "database",
          tech: "PostgreSQL, SQLAlchemy",
          description: "Normalized relational schema with integrity constraints, index optimization on high-frequency query keys, and automated rollback transactions.",
          decisions: [
            "PostgreSQL chosen for robust concurrent transaction handling and data integrity",
            "Composite indexing on auction listing queries and timestamped bid history",
            "Version-controlled schema migrations ensuring reproducible environments"
          ]
        },
        {
          id: "node-sec",
          title: "Security & State Synchronization",
          category: "security",
          tech: "JWT, Bcrypt, CORS & Security Headers",
          description: "Defensive security pipeline with salted password hashing via Bcrypt, cryptographically signed session tokens, and input sanitization.",
          decisions: [
            "Restricted token scopes with explicit expiration policies",
            "Defensive parameter checking preventing race conditions on concurrent bids"
          ]
        }
      ]
    },
    keyDecisions: [
      "Strict separation of concerns between backend business rules and frontend presentation layer.",
      "PostgreSQL chosen with rigid constraints to eliminate inconsistent auction states.",
      "Clean, user-centric interface design reducing cognitive load during time-sensitive bidding."
    ],
    challenges: [
      "Handling concurrency and data synchronization during intense bidding periods.",
      "Guaranteeing end-to-end typing between database models, API schemas, and React components.",
      "Optimizing load times and virtualization when rendering dynamic grid layouts."
    ],
    verifiableResult: "Stable and functional full-stack web application live in production (bidbento.lol) with real-time validations and modular architecture.",
    links: {
      github: "https://github.com/victorgrcabral/bidbento.lol",
      live: "https://bidbento.lol"
    }
  },
  webProjects: [
    {
      id: "interfusao",
      title: "INTERFUSÃO Group",
      tagline: "Brand Identity System & High-Performance Web Portal",
      category: "web",
      type: "Web Engineering & Brand Identity",
      coverImage: "/projects/interfusao-clean.png",
      colorPalette: [
        { name: "Mining Green", hex: "#78B13F", role: "Primary Brand Color" },
        { name: "Pure White", hex: "#FFFFFF", role: "Light Contrast Background" },
        { name: "Quarry Charcoal", hex: "#1A1D1A", role: "Deep Industrial Dark" },
        { name: "Industrial Slate", hex: "#333830", role: "Secondary Steel Neutral" }
      ],
      summary: "Comprehensive web development and brand architecture uniting a cohesive design system across 20+ industrial touchpoints with a high-speed corporate portal and structured SEO.",
      context: "Digital presence restructuring and brand identity evolution for an industrial group serving engineering and mining sectors for 40+ years.",
      problem: "Fragmented visual communication and legacy website suffering from degraded mobile performance and low conversion.",
      role: "360° scope: brand system redesign (logos, palette, style guidelines), modular frontend engineering adhering to SEO, Core Web Vitals, and UX best practices.",
      stack: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3 / Sass", "WordPress Headless / Custom", "Figma", "Design Systems", "SEO"],
      keyDecisions: [
        "Created authentic industrial color tokens: Mining Green (#78B13F) and Charcoal (#1A1D1A).",
        "Modular content structure allowing rapid editorial updates.",
        "Optimized Core Web Vitals achieving green scores while preserving high-resolution technical imagery."
      ],
      challenges: [
        "Balancing complex technical industrial concepts with an intuitive user journey for B2B stakeholders.",
        "Refactoring legacy templates into a decoupled, high-speed modern structure."
      ],
      verifiableResult: "Delivered live corporate portal (interfusao.com.br) with fluid navigation across all breakpoints and complete brand identity guidelines applied company-wide.",
      links: {
        live: "https://www.interfusao.com.br"
      }
    },
    {
      id: "clinica-muricy",
      title: "Clínica Muricy",
      tagline: "Medical & Dental Web Application in React/Next.js",
      category: "web",
      type: "Front-end & UI/UX Design",
      coverImage: "/projects/clinica-muricy-clean.png",
      colorPalette: [
        { name: "Medical Charcoal", hex: "#071510", role: "Base Dark Canvas" },
        { name: "Champagne Gold", hex: "#D4AF37", role: "Noble Clinical Accent" },
        { name: "Clinical Alabaster", hex: "#E8ECE9", role: "Typography and Surface Light" },
        { name: "Clinical Deep Forest", hex: "#0A2619", role: "Deep Surgical Green" }
      ],
      summary: "Modern and accessible medical web interface built with React and Next.js, conveying clinical authority, dental care crafted in every detail, and frictionless navigation in full WCAG compliance.",
      context: "Crafting a premium digital experience for patients seeking specialized clinical dental/medical care and appointment scheduling.",
      problem: "Balancing comprehensive technical documentation with an intuitive, uncluttered user journey for diverse patient demographics.",
      role: "React component engineering, Figma interface design, responsive layout with Tailwind CSS, and form integration.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "UI/UX Design", "Accessibility (WCAG)"],
      keyDecisions: [
        "Modular React component architecture for reusable testimonial, treatment, and doctor profile blocks.",
        "Rigorous adherence to WCAG color contrast and typography standards for maximum legibility.",
        "Subtle UI transitions directing user focus towards direct appointment contact channels."
      ],
      challenges: [
        "Structuring clear visual hierarchy on information-dense clinical service pages.",
        "Maintaining strict image and diagram aspect ratio preservation without vertical distortion."
      ],
      verifiableResult: "Modern, accessible, and fully responsive clinical platform live at clinicamuricy.com with smooth user flows on mobile and desktop.",
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
      type: "Branding & Creative Direction",
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
        { name: "Nerdy Purple", hex: "#7C3AED", role: "Primary Brand Purple" },
        { name: "Pitch Black", hex: "#000000", role: "Core Canvas" },
        { name: "Urban Gray", hex: "#6B7280", role: "Typography Muted" },
        { name: "Clean White", hex: "#FFFFFF", role: "Display Contrast" }
      ],
      summary: "Complete visual identity for a contemporary streetwear brand, featuring custom typography, concept art, urban aesthetics, and creative direction for apparel and social media.",
      context: "Building a distinctive brand identity tailored for urban culture and youth fashion.",
      problem: "Establishing a bold and memorable identity that cuts through a competitive apparel landscape.",
      role: "Art direction, logomark design, bespoke typography, apparel mockups, and social media marketing assets.",
      stack: ["Adobe Illustrator", "Photoshop", "Typography", "Art Direction", "Apparel Design", "Brand Guidelines"],
      keyDecisions: [
        "High-contrast visual treatment with impact typography.",
        "Standardized graphics system across both digital assets and physical garments."
      ],
      challenges: ["Ensuring print fidelity across diverse textile printing methods and digital screen resolutions."],
      verifiableResult: "Complete design case documented with concept art, apparel mockups, and campaign assets.",
      links: {
        live: "#"
      }
    },
    {
      id: "djasco",
      title: "Djasco Headshop",
      tagline: "Concept Creation, Brand Identity & Social Media",
      category: "design",
      type: "Branding & Visual Identity",
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
        { name: "Deep Violet", hex: "#181437", role: "Primary Dark" },
        { name: "Neon Green", hex: "#4ADE80", role: "Vibrant Accent" },
        { name: "Electric Purple", hex: "#C084FC", role: "Secondary Accent" },
        { name: "Midnight Charcoal", hex: "#0E0B20", role: "Background" }
      ],
      summary: "Concept development, full brand identity, custom logo, exclusive illustrations, and social media art direction for a premium headshop brand.",
      context: "Developing an elevated brand positioning and visual identity for a modern smoke shop.",
      problem: "Creating a sophisticated visual identity avoiding industry clichés while conveying contemporary lifestyle.",
      role: "Concept creation, logomark design, color palette, custom illustrations, POS collateral, and social media templates.",
      stack: ["Adobe Illustrator", "Photoshop", "Figma", "Branding", "Illustration", "Social Media"],
      keyDecisions: [
        "Rich dark color palette with vibrant neon accent highlights (#181437).",
        "Versatile iconic symbol crafted for stickers, merchandise, and digital feeds."
      ],
      challenges: ["Maintaining brand consistency across printed packaging, promotional merchandise, and social media."],
      verifiableResult: "Branding and art direction project with comprehensive visual documentation.",
      links: {
        live: "#"
      }
    },
    {
      id: "social-hype",
      title: "SOCIAL HYPE",
      tagline: "High-Impact Art Direction & Digital Campaign Visuals",
      category: "design",
      type: "Art Direction & 3D Visuals",
      coverImage: "/projects/social-hype-board-1.png",
      galleryImages: [
        "/projects/social-hype-board-1.png",
        "/projects/social-hype-board-2.png"
      ],
      colorPalette: [
        { name: "Metallic Chrome", hex: "#E2E8F0", role: "3D Texture" },
        { name: "Neon Cyber", hex: "#38BDF8", role: "Highlight Glow" },
        { name: "Deep Space", hex: "#030712", role: "Background Void" },
        { name: "Hyper Magenta", hex: "#EC4899", role: "Color Accent" }
      ],
      summary: "Bold art direction featuring 3D typography, metallic chrome textures, high-energy compositions, and digital campaign art designed for social engagement.",
      context: "Visual exploration of futuristic design trends and high-energy digital aesthetic.",
      problem: "Creating visuals that instantly demand attention in hypercompetitive digital feeds.",
      role: "Creative direction, 3D composition, image manipulation, and campaign layout design.",
      stack: ["Adobe Photoshop", "Illustrator", "Cinema 4D / 3D", "Art Direction", "Motion & Social"],
      keyDecisions: [
        "Metallic chrome finishing paired with dramatic volumetric lighting.",
        "Visual hierarchy prioritizing display typography and visual punch."
      ],
      challenges: ["Achieving the right balance of reflections, depth, and crispness on mobile screens."],
      verifiableResult: "Key visual art direction case delivered with high visual engagement.",
      links: {
        live: "#"
      }
    },
    {
      id: "buona-notte",
      title: "BUONA NOTTE HOSTEL",
      tagline: "Hospitality Branding, Environmental Signage & Identity",
      category: "design",
      type: "Hospitality Branding & Signage",
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
        { name: "Nocturne Navy", hex: "#1E293B", role: "Primary Deep" },
        { name: "Warm Gold", hex: "#F59E0B", role: "Hospitality Accent" },
        { name: "Alabaster Cream", hex: "#F8FAFC", role: "Stationery Light" },
        { name: "Slate Sage", hex: "#64748B", role: "Wayfinding Neutral" }
      ],
      summary: "Comprehensive branding for a boutique hostel, including logomark design, environmental signage, brand stationery, and hospitality promotional collateral.",
      context: "Crafting a warm, modern, and welcoming visual atmosphere for international travelers and guests.",
      problem: "Developing a cohesive communication system that works harmoniously across physical architectural spaces and digital booking platforms.",
      role: "End-to-end branding, logo design, typography selection, wayfinding signage, and marketing collateral.",
      stack: ["Adobe Illustrator", "Photoshop", "Signage Design", "Brand Strategy", "Stationery"],
      keyDecisions: [
        "Classic typography with a contemporary twist conveying hospitality and rest.",
        "Intuitive wayfinding signage system designed for seamless guest navigation."
      ],
      challenges: ["Ensuring high durability and clear legibility of signage within the hostel physical environment."],
      verifiableResult: "Complete hospitality branding project documented with signage boards.",
      links: {
        live: "#"
      }
    }
  ],
  experiences: [
    {
      id: "exp-interfusao",
      role: "Marketing & Brand Analyst (Visual Identity & Web UX)",
      company: "Interfusão Group",
      location: "São Paulo, Brazil (Hybrid)",
      period: "May 2025 — Present",
      type: "Full-Time",
      isCurrent: true,
      responsibilities: [
        "Spearheaded INTERFUSÃO's visual identity and design system evolution, unifying over 20 industrial touchpoints.",
        "Engineered the official corporate website and high-converting landing pages applying SEO, Core Web Vitals, and UX best practices.",
        "Produced multimedia assets, executive presentations, and social visuals for the mining and engineering sectors.",
        "Implemented user-centered design principles across all company digital interfaces."
      ],
      technologies: ["Figma", "WordPress", "JavaScript", "TypeScript", "React", "HTML5/CSS3", "Adobe Creative Cloud", "Brand Strategy"]
    },
    {
      id: "exp-rc",
      role: "Creative Art Director",
      company: "Agência RC Marketing",
      location: "São Paulo, Brazil",
      period: "February 2025 — May 2025",
      type: "Full-Time",
      isCurrent: false,
      responsibilities: [
        "Directed creative execution for point-of-sale (POS) campaigns and retail environments for major brands including Aurora Foods.",
        "Adapted master key visuals across multiple product lines with strict brand guideline adherence.",
        "Prepared press-ready files for large-scale printing and managed a 4-person creative team."
      ],
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "POS Design", "Art Direction", "Team Leadership"]
    },
    {
      id: "exp-salesfy",
      role: "Designer Freelancer (UX/UI & Digital)",
      company: "Salesfy",
      location: "São Paulo, Brazil (Remote)",
      period: "October 2024 — January 2025",
      type: "Freelance",
      isCurrent: false,
      responsibilities: [
        "Designed conversion-focused landing pages implementing UX/UI best practices.",
        "Created interactive wireframes and clickable prototypes in Figma bridging design and engineering teams.",
        "Produced multimedia visual assets for integrated digital marketing campaigns."
      ],
      technologies: ["Figma", "UX/UI Design", "Landing Pages", "WordPress", "Framer", "Adobe Creative Suite", "HTML/CSS"]
    },
    {
      id: "exp-liv",
      role: "Head of Design / Junior Designer",
      company: "LIV MARKETING",
      location: "São Paulo, Brazil",
      period: "October 2022 — June 2024",
      type: "Full-Time",
      isCurrent: false,
      responsibilities: [
        "Led design vision and execution across branding, digital products, and marketing campaigns (promoted to Head of Design in 2023).",
        "Directed end-to-end visual identity projects, from logo concept and key visuals to comprehensive brand books.",
        "Streamlined team design workflows using agile methodologies and ensured proactive client alignment."
      ],
      technologies: ["Figma", "Adobe Illustrator", "Photoshop", "Brand Strategy", "Agile / Scrum", "Creative Leadership"]
    },
    {
      id: "exp-imedlife",
      role: "Head of Design / Marketing Intern",
      company: "IMEDLIFE",
      location: "São Paulo, Brazil",
      period: "August 2020 — March 2022",
      type: "Full-Time",
      isCurrent: false,
      responsibilities: [
        "Led design strategy and execution for healthcare branding and e-commerce platforms.",
        "Engineered and maintained WordPress/Elementor platform improving UI/UX engagement.",
        "Developed brand systems and visual guidelines adopted across clinical patient touchpoints."
      ],
      technologies: ["WordPress", "Elementor", "Figma", "UI/UX", "Adobe Suite", "Healthcare Branding"]
    },
    {
      id: "exp-tecnologia-unica",
      role: "Social Media Jr.",
      company: "Tecnologia Única",
      location: "São Paulo, Brazil",
      period: "May 2022 — September 2022",
      type: "Full-Time",
      isCurrent: false,
      responsibilities: [
        "Created and art-directed digital campaigns for technology-focused audiences.",
        "Produced motion graphics and multimedia visual content using Adobe Creative Suite."
      ],
      technologies: ["Adobe Photoshop", "Illustrator", "Premiere Pro", "Motion Design", "Digital Media"]
    }
  ],
  educationList: [
    {
      id: "edu-mackenzie",
      degree: "Bachelor's in Advertising, Marketing & Communication",
      institution: "Universidade Presbiteriana Mackenzie",
      period: "2017 — 2021",
      status: "Graduated / Completed",
      details: "Comprehensive university education in communication strategy, art direction, consumer psychology, visual semiotics, copywriting, and branding."
    },
    {
      id: "edu-senac-ads",
      degree: "Associate Degree in Systems Analysis & Development (ADS)",
      institution: "Centro Universitário Senac",
      period: "2026 — 2028",
      status: "In Progress",
      details: "Higher education in software engineering, data structures, relational database modeling, systems architecture, and full-stack web development."
    },
    {
      id: "edu-senac-adobe",
      degree: "Adobe Suite Specialization (Photoshop & Illustrator)",
      institution: "Centro Universitário Senac",
      period: "2017",
      status: "Certified",
      details: "Advanced training in digital image processing, vector illustration, and visual composition for print and digital media."
    },
    {
      id: "edu-ccaa",
      degree: "English as a Second Language (Complete Program)",
      institution: "CCAA",
      period: "2007 — 2013",
      status: "Completed",
      details: "Full professional English fluency, with mastery of conversation, technical writing, and corporate communications."
    }
  ],
  languagesList: [
    {
      language: "Portuguese",
      proficiency: "Native / Mother Tongue",
      level: "C2 — Native Fluency"
    },
    {
      language: "English",
      proficiency: "Fluent / Bilingual",
      level: "C1 — Fully proficient for technical discussions, team leadership, and international clients"
    },
    {
      language: "Spanish",
      proficiency: "Professional Working Proficiency",
      level: "B2 — Professional reading, writing, and conversational comprehension"
    }
  ],
  skillsList: [
    {
      category: "Product Design & UX/UI",
      iconName: "Layout",
      skills: [
        { name: "Figma (Auto-layout, Tokens)", focus: true },
        { name: "Design Systems", focus: true },
        { name: "High-Fidelity Prototyping", focus: true },
        { name: "Information Architecture" },
        { name: "Wireframing & User Flows" },
        { name: "Accessibility (WCAG)", focus: true },
        { name: "Usability Testing" }
      ]
    },
    {
      category: "Front-end & Creative Web",
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
      category: "Back-end & Databases",
      iconName: "Server",
      skills: [
        { name: "PostgreSQL", focus: true },
        { name: "Python", focus: true },
        { name: "FastAPI", focus: true },
        { name: "Node.js", focus: true },
        { name: "RESTful APIs", focus: true },
        { name: "Relational Modeling" },
        { name: "Authentication (JWT, Bcrypt)" },
        { name: "Docker" }
      ]
    },
    {
      category: "Branding & Art Direction",
      iconName: "Sparkles",
      skills: [
        { name: "Adobe Photoshop", focus: true },
        { name: "Adobe Illustrator", focus: true },
        { name: "Adobe InDesign" },
        { name: "Adobe Premiere Pro" },
        { name: "Visual Identity & Key Visuals", focus: true },
        { name: "360° Creative Direction" }
      ]
    },
    {
      category: "AI, LLMs & Prompt Engineering",
      iconName: "Bot",
      skills: [
        { name: "Codex", focus: true },
        { name: "Antigravity", focus: true },
        { name: "Antigravity IDE", focus: true },
        { name: "Claude", focus: true },
        { name: "Claude Code", focus: true },
        { name: "Generative AI", focus: true },
        { name: "DeepSeek", focus: true },
        { name: "Kimi", focus: true },
        { name: "Hermes", focus: true },
        { name: "Orca" },
        { name: "Cursor", focus: true },
        { name: "OpenAI APIs", focus: true },
        { name: "Prompt Engineering", focus: true },
        { name: "Autonomous Agents (Multi-Agent Systems)", focus: true },
        { name: "RAG & Embeddings", focus: true },
        { name: "Structured Outputs & Function Calling", focus: true },
        { name: "Prompt Fine-Tuning & Context Windows" },
        { name: "Model Evaluation & Benchmarks" }
      ]
    }
  ]
};
