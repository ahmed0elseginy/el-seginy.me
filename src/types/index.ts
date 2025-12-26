// Core type definitions for the application

export type ProjectCategory = "Full Stack" | "Backend" | "Frontend";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  subtitleLogo?: string; // Company/brand logo to display instead of subtitle text
  description: string;
  story: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  icon: string; // Icon name from lucide-react
  category: ProjectCategory;
  preview?: {
    type: "image" | "video";
    url: string;
    thumbnail?: string; // Optional thumbnail for videos
  };
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
  logo?: string; // Company logo/icon for timeline node
  companyLogo?: string; // Full company logo with name (replaces text)
  image?: string; // Project/work image
  path?: string; // Career path identifier (e.g., "backend", "fullstack")
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export interface VolunteeringClub {
  name: string;
  role: string;
  date: string;
  description?: string;
  logo?: string;
}

export interface Education {
  date: string;
  degree: string;
  institution: string;
  location: string;
  description?: string;
  achievements?: string[];
  logo?: string; // Institution logo path
  photos?: string[]; // Photos from university/school
  certificates?: Certificate[];
  volunteering?: VolunteeringClub[];
  grade?: string;
  status?: "Current" | "Completed";
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

