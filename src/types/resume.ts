import type { LucideIcon } from "lucide-react";

export interface ResumeData {
  personalDetails: {
    name: string;
    title: string;
    phone: string;
    email: string;
    linkedin: string;
    location: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
  skills: string[];
  passions: Passion[];
  courses: Course[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  university: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface Achievement {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Passion {
  id: string;
  icon: LucideIcon;
  name: string;
  description: string;
}

export interface Course {
  id: string;
  name: string;
  institution: string;
}
