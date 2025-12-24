import { NavLink } from "@/types";
import { Briefcase, GraduationCap, Mails, FolderGit2, Zap } from "lucide-react";

export const navIcons = {
  Briefcase,
  GraduationCap,
  Mails,
  FolderGit2,
  Zap,
} as const;

export const navLinks: NavLink[] = [
  { href: "#home", label: "Overview", icon: "Zap" },
  { href: "#about", label: "About", icon: "Briefcase" },
  { href: "#skills", label: "Skills", icon: "FolderGit2" },
  { href: "#projects", label: "Projects", icon: "FolderGit2" },
  { href: "#education", label: "Education", icon: "GraduationCap" },
  { href: "#experience", label: "Experience", icon: "Briefcase" },
  { href: "#contact", label: "Contact", icon: "Mails" },
];

