import type { LucideIcon } from "lucide-react";
import {
  Home,
  Code2,
  Briefcase,
  Layers,
  GitBranch,
  Award,
  FolderGit2,
  BookOpen,
  Mail,
  FileText,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  dividerAfter?: boolean;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#top", icon: Home },
  { id: "toolkit", label: "Toolkit", href: "#toolkit", icon: Code2 },
  { id: "experience", label: "Experience", href: "#experience", icon: Briefcase },
  { id: "skills", label: "Skills", href: "#skills", icon: Layers },
  { id: "leetcode", label: "LeetCode", href: "#leetcode", icon: GitBranch },
  { id: "certs", label: "Certifications", href: "#certifications", icon: Award },
  { id: "projects", label: "Projects", href: "#projects", icon: FolderGit2 },
  { id: "writing", label: "Writing", href: "#writing", icon: BookOpen, dividerAfter: true },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
  { id: "resume", label: "Resume", href: "/resume.pdf", icon: FileText },
];
