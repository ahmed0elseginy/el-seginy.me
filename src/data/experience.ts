import { Experience } from "@/types";
import { Briefcase, Rocket, BookOpen } from "lucide-react";

export const experienceIcons = {
  Briefcase,
  Rocket,
  BookOpen,
} as const;

export const experiences: Experience[] = [
  {
    date: "Sep 2025 - Present",
    status: "Current",
    title: "Software Engineer",
    company: "ZagSystems",
    location: "Remote",
    description: "Developing enterprise microservices platform and reusable workflow engine adopted across company projects with focus on scalability and modularity.",
    achievements: ["Workflow Engine Development", "CI/CD with Jenkins", "System Architecture","Integration Testing"],
    type: "Part-time",
    icon: "Briefcase",
    path: "backend",
    logo: "/images/campany/zagSystems.png",
    companyLogo: "/images/campany/logo-min-min.png",
  },
  { 
    date: "May 2025 - Sep 2025",
    status: "Completed",
    title: "Software Engineer Intern",
    company: "ZagSystems",
    location: "Remote",
    description: "Worked on IoT Platform and Pharmacy Inventory Management System within microservices environment using Spring Boot.",
    achievements: ["Backend Business Logic", "Microservices", "Database Migrations", "Agile Collaboration"],
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
    description: "Completed hands-on mentorship in Spring Boot, Microservices, and Event-Driven Architecture while building scalable backend applications.",
    achievements: ["Spring Boot Mastery", "RESTful APIs","Event-Driven Architecture", "Social Media Platform"],
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
    company: "Online",
    location: "Remote",
    description: "Built backend applications with Spring Boot and MySQL, focusing on clean architecture, testing, and API documentation.",
    achievements: ["Spring Core", "Spring Boot", "MySQL", "Clean Architecture", "API Documentation"],
    type: "Education",
    icon: "BookOpen",
    path: "backend",
    logo: "/images/logos/spring-boot.svg",
  },
];

