"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import type { LandingPageProps } from "@/types/landing";
import { sectionIds } from "@/lib/data";

import { Header } from "@/app/header";
import { HeroSection } from "@/app/hero-section";
import { AboutSection } from "@/app/about-section";
import { ExperienceSection } from "@/app/experience-section";
import { ProjectsSection } from "@/app/projects-section";
import { ContactSection } from "@/app/contact-section";
import { Footer } from "@/app/footer";

export function LandingPage({ initialData }: LandingPageProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const lastSection = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = id;
          }
        }
      }
      setActiveSection(current);
      setActionSessionToUrl(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setActionSessionToUrl = (section: string) => {
    if (section && section !== lastSection.current) {
      history.replaceState(
        null,
        "",
        section === "hero"
          ? window.location.pathname + window.location.search
          : `#${section}`
      );
      lastSection.current = section;
    }
  };

  return (
    <div className="relative min-h-screen">
      {sectionIds.map((id) => {
        return (
          <motion.div
            key={id}
            id={id}
            initial={false}
            animate={
              activeSection === id
                ? { opacity: 1, y: 0 }
                : { opacity: 0.3, y: 60 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="min-h-screen flex items-center justify-center pt-20"
          >
            {id === "hero" && <HeroSection content={initialData} />}
            {id === "about" && <AboutSection about={initialData.about} />}
            {id === "experience" && (
              <ExperienceSection experience={initialData.workHistory} />
            )}
            {id === "works" && <ProjectsSection projects={initialData.works} />}
            {id === "contact" && (
              <ContactSection contact={initialData.contact} />
            )}
          </motion.div>
        );
      })}
      <Header content={initialData} />
      <Footer name={initialData.name} />
    </div>
  );
}
