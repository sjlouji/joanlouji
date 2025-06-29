"use client";

import type { PortfolioData } from "@/lib/data";

import { Header } from "@/app/header";
import { HeroSection } from "@/app/hero-section";
import { AboutSection } from "@/app/about-section";
import { SkillsSection } from "@/app/skills-section";
import { ExperienceSection } from "@/app/experience-section";
import { ProjectsSection } from "@/app/projects-section";
import { ContactSection } from "@/app/contact-section";
import { Footer } from "@/app/footer";
import { useScrollHash } from "@/hooks/use-scroll-hash";

interface LandingPageProps {
  initialData: PortfolioData;
}

export function LandingPage({ initialData }: LandingPageProps) {
  const content = initialData;
  useScrollHash();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header content={content} />
      <main className="flex-1">
        <HeroSection content={content} />
        <AboutSection about={initialData.about} />
        <ExperienceSection experience={content.workHistory} />
        <ProjectsSection projects={content.projects} />
        <ContactSection contact={initialData.contact} />
      </main>
      <Footer name={initialData.name} />
    </div>
  );
}
