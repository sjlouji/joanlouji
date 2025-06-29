import { SectionWrapper } from "./section-wrapper";
import { AnimatedSection } from "../components/animated-section";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/card";
import { Badge } from "../components/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  "data-ai-hint": string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionWrapper
      id="projects"
      title="My Projects"
      className="bg-secondary/50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card className="flex flex-col h-full overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project["data-ai-hint"]}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="font-headline text-2xl mb-2">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex-wrap gap-2 pt-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
              <Link
                href={project.link}
                className="ml-auto text-primary inline-flex items-center gap-1 group-hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View <ArrowUpRight className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
