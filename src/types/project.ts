export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  date: string;
}

export interface ProjectsSectionProps {
  projects: Project[];
}
