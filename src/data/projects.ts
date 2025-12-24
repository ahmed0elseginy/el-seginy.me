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
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Social Media Platform",
    subtitle: "Zag Systems Backend",
    description: "Designed and developed RESTful APIs with Java Spring Boot, applied Spring Security with ActiveMQ Artemis, and managed relational data using MySQL + Hibernate + Liquibase.",
    story: "Building connections between people taught me that APIs are like bridges between worlds.",
    tags: ["Java", "Spring Boot", "Spring Security", "ActiveMQ", "MySQL", "Hibernate", "Swagger"],
    githubUrl: "https://github.com/ahmed0elseginy/sm-backend",
    liveUrl: "#",
    icon: "Database",
    category: "Backend"
  },
  {
    id: 3,
    title: "User Management System",
    subtitle: "Secure Access Control",
    description: "Developed full CRUD RESTful endpoints following REST standards. Integrated a message publishing endpoint and followed OpenAPI specifications for API documentation.",
    story: "Managing users taught me that every individual deserves secure and efficient access to digital services.",
    tags: ["Java", "REST API", "OpenAPI", "CRUD", "Message Publishing"],
    githubUrl: "https://github.com/ahmed0elseginy/user-mgt-antibug-team",
    liveUrl: "#",
    icon: "Shield",
    category: "Backend"
  },
  {
    id: 4,
    title: "Toda - Task Manager",
    subtitle: "Clean Architecture Demo",
    description: "Implemented essential CRUD operations with a focus on maintainability and code readability. Prioritized clean architecture and modular code for demonstration and testing purposes.",
    story: "Like the Little Prince tending to his rose, I tended to each line of code with care and attention.",
    tags: ["Java", "CRUD", "Clean Architecture", "Modular Design"],
    githubUrl: "https://github.com/ahmed0elseginy/toda-backend",
    liveUrl: "#",
    icon: "Code",
    category: "Backend"
  },
  {
    id: 5,
    title: "Amazon-El8alaba",
    subtitle: "Shopping Experience",
    description: "Built CRUD functionalities using Spring Boot, MySQL, and Thymeleaf for a dynamic web interface. Focused on creating a seamless shopping experience.",
    story: "Commerce flows like a river - it needs clear channels and secure foundations to reach its destination.",
    tags: ["Spring Boot", "MySQL", "Thymeleaf", "CRUD", "Web Interface"],
    githubUrl: "https://github.com/ahmed0elseginy/Amazon-El8alaba",
    liveUrl: "#",
    icon: "Zap",
    category: "Full Stack"
  },
  {
    id: 6,
    title: "t-tech",
    subtitle: "Our services",
    description: "Comprehensive technology solutions tailored to your needs.",
    story: "T-Tech is a modern web application built to showcase and streamline tech services for clients.",
    tags: ["Next.js", "TypeScript", "ShadCN", "Chatbot"],
    githubUrl: "https://github.com/ahmed0elseginy/t-tech",
    liveUrl: "https://t-tech-tau.vercel.app/",
    icon: "Sparkles",
    category: "Frontend"
  }
];

