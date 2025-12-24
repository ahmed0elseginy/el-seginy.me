import { AboutSkill } from "@/types";
import { Server, Database, Settings } from "lucide-react";

export const aboutIcons = {
  Server,
  Database,
  Settings,
} as const;

export const aboutSkills: AboutSkill[] = [
  {
    title: "Backend Development",
    icon: "Server",
    description: [
      "Building scalable and maintainable backend systems using Java & Spring Boot",
      "Designing and implementing secure RESTful APIs with Spring Security",
      "Utilizing Spring Data JPA and Hibernate for efficient data persistence",
      "Implementing workflow engines and business process automation"
    ]
  },
  {
    title: "Databases & Data Management",
    icon: "Database",
    description: [
      "Proficient in MySQL, PostgreSQL, and Oracle for relational database management",
      "Using Liquibase for version-controlled database schema migrations",
      "Writing complex SQL and PL/SQL queries for data manipulation and retrieval",
      "Experience with database design and optimization"
    ]
  },
  {
    title: "Software Architecture",
    icon: "Settings",
    description: [
      "Applying OOP, SOLID principles, and design patterns for clean code",
      "Implementing Event-Driven Architecture with RabbitMQ and ActiveMQ",
      "Experience with API design and documentation using Swagger/OpenAPI",
      "Microservices architecture and CI/CD pipeline management with Jenkins"
    ]
  }
];

