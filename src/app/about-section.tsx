import { useState } from "react";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { SectionWrapper } from "@/app/section-wrapper";
import { motion } from "framer-motion";
import { ZoomOnHover } from "@/components/ui/zoom-on-hover";

interface AboutSectionProps {
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
    icon: string;
    logo?: string;
  }[];
}

export function AboutSection({ about }: { about: AboutSectionProps }) {
  return (
    <SectionWrapper id="about" title="About">
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3 space-y-6">
          {about.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className="col-span-2 col-start-4 p-4">
          <div className="space-y-6">
            {about.links.map((link) => (
              <ZoomOnHover key={link.title} className="w-full" zoom={0.96}>
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border p-6 bg-background shadow-sm transition hover:shadow-md"
                >
                  <div className="flex flex-col items-start gap-2 min-w-[120px]">
                    <div className="flex items-center gap-2 w-full">
                      <div className="flex items-center gap-2 w-full space-between">
                        <Image
                          src={link.logo}
                          alt={link.title}
                          width={30}
                          height={0}
                          className="rounded"
                        />
                        <span className="font-semibold text-lg pl-4">
                          {link.title}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {link.subtitle}
                    </div>
                  </div>
                </a>
              </ZoomOnHover>
            ))}
          </div>
        </div>
        <div className="col-span-5 mt-10">
          <div>
            <Marquee
              gradient
              gradientColor="white"
              gradientWidth={150}
              pauseOnHover={true}
              speed={50}
            >
              {about.skills.map((skill, i) => {
                return (
                  <span key={skill.name}>
                    <ZoomOnHover
                      key={skill.name}
                      className="mx-8 flex items-center gap-x-4 text-xl font-medium text-muted-foreground cursor-pointer"
                    >
                      {skill.logo && (
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="inline-block"
                          unoptimized={skill.logo.startsWith("http")}
                        />
                      )}
                      <span className="whitespace-nowrap ml-2 mt-4">
                        {skill.name}
                      </span>
                    </ZoomOnHover>
                  </span>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
