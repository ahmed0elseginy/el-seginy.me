import { Project } from "@/types";
import { Code, Database, Shield, Zap, Globe, Sparkles } from "lucide-react";

// Icon mapping - we'll use the component names as strings and resolve them dynamically
export const projectIcons = {
  Code,
  Database,
  Shield,
  Zap,
  Globe,
  Sparkles,
} as const;

export const projects: Project[] = [
  {
    id: 1,
    title: "Luisi ERP-System",
    subtitle: "Enterprise Management Platform",
    description: "Developed a comprehensive monolithic service using Spring Boot (backend) and Next.js with ShadCN UI & Redux (frontend). Secured authentication with AWS Cognito and managed relational data using PostgreSQL.",
    story: "Here I learned that enterprise systems are like complex galaxies - every component must work in perfect harmony.",
    tags: ["Spring Boot", "Next.js", "AWS Cognito", "PostgreSQL", "RabbitMQ", "Redux"],
    githubUrl: "https://github.com/ahmed0elseginy/luisi-backend",
    liveUrl: "#",
    icon: "Globe",
    category: "Full Stack",
    preview: {
      type: "image",
      url: "/images/projects/luisi/luisi.png" // Placeholder - replace with actual preview
    }
  },
  {
    id: 2,
    title: "Social Media Platform",
    subtitle: "Zag Systems",
    subtitleLogo: "/images/campany/logo-min-min.png",
    description: "Designed and developed RESTful APIs with Java Spring Boot, applied Spring Security with ActiveMQ Artemis, and managed relational data using MySQL + Hibernate + Liquibase.",
    story: "Building connections between people taught me that APIs are like bridges between worlds.",
    tags: ["Java", "Spring Boot", "Spring Security", "ActiveMQ", "MySQL", "Hibernate", "Swagger"],
    githubUrl: "https://github.com/ahmed0elseginy/sm-backend",
    liveUrl: "#",
    icon: "Database",
    category: "Backend",
    preview: {
      type: "image",
      url: "/images/projects/sm/sm0.png"
    }
  },
  {
    id: 3,
    title: "Z-Pharma Inventory System",
    subtitle: "Zag Systems",
    subtitleLogo: "/images/campany/logo-min-min.png",
    description: "Designed and developed core modules of a pharmaceutical inventory management system based on Microservices Architecture — including Pharmacy Management, Complaint Handling, Notification System, and User Management.",
    story: "In the world of microservices, I learned that orchestration is an art — where each service dances to its own rhythm, yet moves in perfect harmony with the whole.",
    tags: ["Java", "Spring Boot", "Spring Cloud", "Microservices", "DDD", "Workflow Engine", "Message Queue", "Liquibase", "Caching"],
    githubUrl: "#",
    liveUrl: "#",
    icon: "Globe",
    category: "Backend",
    preview: {
      type: "image",
      url: "/images/projects/z-pharma/image.png"
    }
  },
  {
    id: 4,
    title: "Mizan Legal System",
    subtitle: "Legal Management System",
    description: "A comprehensive legal management system built as a monorepo with Java Spring Boot backend, Next.js web application, and Flutter mobile app. Features document management, case tracking, client management, secure authentication with role-based access control, and real-time updates across platforms. Organized as Git submodules for scalable microservices architecture.",
    story: "In the realm of law and code, I discovered that justice needs structure — where every document, case, and client finds its place in a system built on trust and precision.",
    tags: ["Java", "Spring Boot", "Next.js", "TypeScript", "MySQL", "Hibernate", "Authentication", "Real-time"],
    githubUrl: "https://github.com/ahmed0elseginy/sgp-legal",
    liveUrl: "#",
    icon: "Shield",
    category: "Full Stack",
    preview: {
      type: "image",
      url: "/images/projects/mizan/mizan.png" // Placeholder - replace with actual preview
    }
  },
  {
    id: 5,
    title: "T-Tech",
    subtitle: "Our services",
    description: "Comprehensive technology solutions tailored to your needs.",
    story: "T-Tech is a modern web application built to showcase and streamline tech services for clients.",
    tags: ["Next.js", "TypeScript", "ShadCN", "Chatbot"],
    githubUrl: "https://github.com/ahmed0elseginy/t-tech",
    liveUrl: "https://t-tech-tau.vercel.app/",
    icon: "Sparkles",
    category: "Frontend",
    preview: {
      type: "image",
      url: "/images/projects/t-tech.png",
    }
  },
  {
    id: 6,
    title: "Verdia",
    subtitle: "Cultivating Tomorrow's Harvest",
    description: "Empowering farmers with sustainable AI-driven solutions and advanced robotics to maximize yield and minimize environmental impact.",
    story: "In the fields where tradition meets innovation, Verdia plants seeds of the future - where technology nurtures the earth and grows sustainable tomorrows.",
    tags: ["Next.js", "TypeScript", "ShadCN", "AI", "Robotics", "Agriculture"],
    githubUrl: "https://github.com/ahmed0elseginy/verdia",
    liveUrl: "https://verdia-tau.vercel.app/",
    icon: "Globe",
    category: "Frontend",
    preview: {
      type: "video",
      url: "/videos/verdia.webm",
      thumbnail: "/images/projects/verdia.png"
    }
  }

];

