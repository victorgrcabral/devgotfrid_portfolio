export type Locale = 'pt' | 'en';

export interface ArchitectureNode {
  id: string;
  title: string;
  category: 'frontend' | 'api' | 'database' | 'security' | 'caching';
  tech: string;
  description: string;
  decisions: string[];
}

export interface ProjectColorToken {
  name: string;
  hex: string;
  role?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'software' | 'web' | 'design';
  type: string;
  featured?: boolean;
  coverImage?: string;
  galleryImages?: string[];
  colorPalette?: ProjectColorToken[];
  summary: string;
  context: string;
  problem: string;
  role: string;
  stack: string[];
  architecture?: {
    overview: string;
    nodes: ArchitectureNode[];
  };
  keyDecisions: string[];
  challenges: string[];
  verifiableResult: string;
  links?: {
    live?: string;
    github?: string;
    figma?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  details?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    focus?: boolean;
  }[];
}

export interface CareerProfile {
  name: string;
  role: string;
  heroHeadline: string;
  heroBio: string;
  location: string;
  availability: string;
  availabilityBadge: string;
  email: string;
  github: string;
  linkedin: string;
  resumePdfUrl: string;
  stackHighlights: string[];
}

export interface PortfolioDictionary {
  profile: CareerProfile;
  nav: {
    about: string;
    projects: string;
    architecture: string;
    skills: string;
    experience: string;
    education: string;
    contact: string;
    resumeButton: string;
    viewCv: string;
    switchLang: string;
  };
  hero: {
    badge: string;
    headline: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaProjects: string;
    terminalSnippet: string;
  };
  bidbento: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    architectureTab: string;
    systemDesignTab: string;
    challengesTab: string;
    inspectNodePrompt: string;
    techStackHeading: string;
    keyDecisionsHeading: string;
    challengesHeading: string;
    resultHeading: string;
    viewLive: string;
    viewCode: string;
  };
  projects: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    tabs: {
      all: string;
      software: string;
      web: string;
      design: string;
    };
    caseStudyButton: string;
    viewSite: string;
    sourceCode: string;
    viewBehance: string;
  };
  skills: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
  };
  experience: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    timelineHeading: string;
  };
  education: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    languagesHeading: string;
  };
  contact: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    emailLabel: string;
    copiedToast: string;
    downloadResumePt: string;
    downloadResumeEn: string;
    quickCopy: string;
    sendEmail: string;
    connectLinkedIn: string;
  };
  lightbox: {
    close: string;
    enlargeImage: string;
  };
  footer: {
    allSystemsNormal: string;
    builtWith: string;
    rights: string;
  };
  featuredProject: ProjectItem;
  webProjects: ProjectItem[];
  designProjects: ProjectItem[];
  experiences: ExperienceItem[];
  educationList: EducationItem[];
  languagesList: LanguageItem[];
  skillsList: SkillCategory[];
}
