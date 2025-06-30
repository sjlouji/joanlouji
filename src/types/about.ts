export interface AboutSectionProps {
  name: string;
  description: string[];
  skillsDescription: string;
  links: {
    logo: string;
    title: string;
    subtitle: string;
    url: string;
  }[];
  skills: {
    name: string;
    logo?: string;
    icon?: string;
  }[];
}
