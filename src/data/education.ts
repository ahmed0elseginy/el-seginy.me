import { Education } from "@/types";
import { GraduationCap, Code } from "lucide-react";

export const educationIcons = {
  GraduationCap,
  Code,
} as const;

export const education: Education[] = [
  {
    date: "Nov 2024 - Present",
    degree: "B.S.E. in Information and Communications Technology (ICT)",
    institution: "New Cairo Technological University (NCTU)",
    location: "Faculty of Industrial and Energy Technology",
    description: "Currently pursuing advanced coursework in software engineering and system design, focusing on scalable architecture and enterprise solutions.",
    achievements: ["ICT Student", "Software Engineering", "System Design"],
    logo: "/images/education/NCTU.png",
    status: "Current",
    grade: "In Progress",
    photos: [
      // Add your university photos here when available
      // "/images/education/nctu-photo-1.jpg",
      // "/images/education/nctu-photo-2.jpg",
    ],
    certificates: [
      // Add certificates here when available
      // {
      //   name: "Certificate Name",
      //   issuer: "Issuer Name",
      //   date: "2024",
      //   credentialUrl: "https://...",
      //   image: "/images/education/certificate-1.jpg",
      // },
    ],
    volunteering: [
      {
        name: "Microsoft Student Clubs (NCTU)",
        role: "Co-Leader of Backend Team",
        date: "2024 - Present",
        description: "Leading backend development initiatives, mentoring students in Java and Spring Boot, organizing technical workshops.",
        image: "/images/education/msc.png",
      },
      {
        name: "Google Developer Groups (GDG)",
        role: "Organizer",
        date: "2024 - Present",
        description: "Organizing tech events, workshops, and hackathons. Building developer community and promoting Google technologies.",
        image: "/images/education/GDG.png",
      },
    ],
  },
  {
    date: "Oct 2020 - Jun 2024",
    degree: "High School Diploma, Computer Programming",
    institution: "Misr International Computer & AI Academy | MICA",
    location: "Computer Science Track",
    description: "Mastered Java programming fundamentals with distinction, explored Oracle Database development and PL/SQL programming, and participated in coding competitions.",
    achievements: ["Java Foundation", "Oracle Database", "High Distinction"],
    logo: "/images/education/MICA.jpeg",
    status: "Completed",
    grade: "95.67%",
    photos: [
      // Add your school photos here when available
      // "/images/education/mica-photo-1.jpg",
      // "/images/education/mica-photo-2.jpg",
    ],
    certificates: [
      {
        name: "Java Foundation",
        issuer: "Oracle",
        date: "2023",
        // credentialUrl: "https://...",
        // image: "/images/education/java-certificate.jpg",
      },
      {
        name: "Oracle Database Development",
        issuer: "Oracle",
        date: "2023",
        // credentialUrl: "https://...",
        // image: "/images/education/oracle-certificate.jpg",
      },
    ],
    volunteering: [],
  },
];

