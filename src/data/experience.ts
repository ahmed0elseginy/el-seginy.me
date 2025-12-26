import { Experience } from "@/types";
import { Briefcase, Rocket, BookOpen } from "lucide-react";

export const experienceIcons = {
  Briefcase,
  Rocket,
  BookOpen,
} as const;

export const experiences: Experience[] = [
  {
    date: "May 2025 - Present",
    status: "Current",
    title: "Software Engineer Intern",
    company: "ZagSystems",
    location: "Remote",
    description: "Designing and implementing workflow engine modules to support business processes while learning scalable system architecture.",
    achievements: ["Workflow Engine Development", "CI/CD with Jenkins", "System Architecture"],
    type: "Internship",
    icon: "Briefcase",
    path: "backend",
    logo: "/images/campany/zagSystems.png",
    companyLogo: "/images/campany/logo-min-min.png",
  },
  {
    date: "Sep 2024 - Aug 2025",
    status: "Completed",
    title: "Java with Spring Mentorship",
    company: "ZagSystems",
    location: "Remote",
    description: "Gained hands-on mentorship in Spring Boot, Microservices, and Event-Driven Architecture while building real-world applications.",
    achievements: ["Spring Boot Mastery", "RESTful APIs", "Social Media Platform"],
    type: "Mentorship",
    icon: "Rocket",
    path: "backend",
    logo: "/images/campany/zagSystems.png",
    companyLogo: "/images/campany/logo-min-min.png",
  },
  {
    date: "Jun 2024 - Jan 2025",
    status: "Completed",
    title: "Spring Boot Bootcamp",
    company: "Online Learning",
    location: "Remote",
    description: "Built sample applications with Spring Boot & MySQL, practicing JWT authentication and modular project structuring.",
    achievements: ["Spring Boot & MySQL", "JWT Authentication", "Clean Architecture"],
    type: "Education",
    icon: "BookOpen",
    path: "backend",
    logo: "/images/logos/spring-boot.svg",
  },
];

