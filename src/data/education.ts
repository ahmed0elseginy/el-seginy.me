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
  },
  {
    date: "Oct 2020 - Jun 2024",
    degree: "High School Diploma, Computer Programming",
    institution: "Misr International Computer & AI Academy | MICA",
    location: "Computer Science Track",
    description: "Mastered Java programming fundamentals with distinction, explored Oracle Database development and PL/SQL programming, and participated in coding competitions.",
    achievements: ["Java Foundation", "Oracle Database", "High Distinction"],
  },
];

