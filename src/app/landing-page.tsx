"use client";

import type { PortfolioData } from "../lib/data";
import React, { useState } from "react";

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
  const [content, setContent] = useState(initialData);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header content={content} />
      <main className="flex-1">
        <HeroSection />
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
