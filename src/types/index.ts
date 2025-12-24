// Core type definitions for the application

export type ProjectCategory = "Full Stack" | "Backend" | "Frontend";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  story: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  icon: string; // Icon name from lucide-react
  category: ProjectCategory;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Experience {
  date: string;
  status: "Current" | "Completed";
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  type: string;
  icon: string; // Icon name from lucide-react
}

export interface Education {
  date: string;
  degree: string;
  institution: string;
  location: string;
  description?: string;
  achievements?: string[];
}

export interface AboutSkill {
  title: string;
  icon: string; // Icon name from lucide-react
  description: string[];
}

export interface NavLink {
  href: string;
  label: string;
  icon: string; // Icon name from lucide-react
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Dashboard types
export interface DashboardRoute {
  path: string;
  label: string;
  icon: string;
  component?: string;
}

export interface DashboardConfig {
  title: string;
  routes: DashboardRoute[];
}

