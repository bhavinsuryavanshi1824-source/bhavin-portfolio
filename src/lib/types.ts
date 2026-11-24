export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  subtitle: string;
  introduction: string;
  location: string;
  email: string;
  phone: string;
  linkedInUrl: string;
  githubUrl: string;
  isAvailableForHire: boolean;
  availabilityText: string;
  education: {
    degree: string;
    specialization: string;
    institution: string;
    location: string;
    period: string;
    highlights: string[];
  };
}

export type SkillCategoryKey = 
  | "programming"
  | "genai"
  | "frameworks"
  | "databases"
  | "cybersecurity"
  | "tools";

export interface SkillCategory {
  id: SkillCategoryKey;
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export type ProjectCategory = "all" | "flagship" | "ai" | "cybersecurity" | "fullstack";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  techStack: string[];
  highlightBadge?: string;
  isFlagship?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  hasCaseStudy: boolean;
  keyFeatures: string[];
  metrics?: { label: string; value: string }[];
}

export interface CaseStudyData {
  projectId: string;
  title: string;
  tagline: string;
  summary: string;
  problemStatement: string;
  proposedSolution: string;
  architectureDetails: {
    title: string;
    description: string;
    steps: {
      step: number;
      label: string;
      description: string;
      tech: string;
    }[];
  };
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  techStackDetailed: {
    category: string;
    items: string[];
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skillsLearned: string[];
  category: "AI" | "Cybersecurity" | "FullStack";
  badgeIcon: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars?: number;
  forks?: number;
  url: string;
  topics: string[];
}
