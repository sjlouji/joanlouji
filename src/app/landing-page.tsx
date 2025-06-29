"use client";

import type { PortfolioData } from "@/lib/data";
import React, {
  useState,
  useTransition,
  useActionState,
  useEffect,
} from "react";
import { personalizeContentAction } from "../lib/actions";
import { useToast } from "@/hooks/use-toast";

import { Header } from "./header";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { SkillsSection } from "./skills-section";
import { ExperienceSection } from "./experience-section";
import { ProjectsSection } from "./projects-section";
import { ContactSection } from "./contact-section";
import { Footer } from "./footer";

interface LandingPageProps {
  initialData: PortfolioData;
}

export function LandingPage({ initialData }: LandingPageProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const [state, formAction] = useActionState(personalizeContentAction, {
    success: false,
    error: null,
    data: null,
  });

  const [content, setContent] = useState(initialData);

  useEffect(() => {
    if (state.success && state.data) {
      setContent((prevContent) => ({
        ...prevContent,
        about: state.data.personalizedIntro || prevContent.about,
        workHistory: state.data.tailoredWorkHistory
          ? [
              {
                role: "Tailored Experience",
                company: "Based on your profile",
                period: "Now",
                description: state.data.tailoredWorkHistory,
                icon: prevContent.workHistory[0].icon,
              },
            ]
          : prevContent.workHistory,
        skills: state.data.tailoredSkills
          ? state.data.tailoredSkills.split(", ").map((s) => ({
              name: s.trim(),
              icon: prevContent.skills[0].icon,
            }))
          : prevContent.skills,
        projects: state.data.tailoredProjects
          ? [
              {
                title: "Tailored Projects",
                description: state.data.tailoredProjects,
                image: "https://placehold.co/600x400.png",
                tags: ["AI-Selected"],
                link: "#",
                "data-ai-hint": "abstract tech",
              },
            ]
          : prevContent.projects,
      }));
      toast({
        title: "Content Personalized!",
        description: "The portfolio has been tailored for you.",
      });
    } else if (state.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state.error,
      });
    }
  }, [state, toast]);

  const handleFormAction = (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection
          name={initialData.name}
          title={initialData.title}
          intro={content.about}
          formAction={handleFormAction}
          isPending={isPending}
        />
        <AboutSection about={initialData.about} />
        <SkillsSection skills={content.skills} />
        <ExperienceSection experience={content.workHistory} />
        <ProjectsSection projects={content.projects} />
        <ContactSection contact={initialData.contact} />
      </main>
      <Footer name={initialData.name} />
    </div>
  );
}
