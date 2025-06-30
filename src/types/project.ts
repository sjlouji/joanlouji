export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  date: string;
  featured?: boolean;
  "data-ai-hint": string;
}

export interface ProjectsSectionProps {
  projects: Project[];
}
