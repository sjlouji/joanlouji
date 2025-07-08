import { useRef } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-grid-system";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import { SectionWrapper } from "@/app/section-wrapper";
import { ZoomOnHover } from "@/components/zoom-on-hover";
import { ResumePreview } from "@/app/resume-section";
import type { AboutSectionProps } from "@/types/about";
import { initialData } from "@/lib/data";

export function AboutSection({ about }: { about: AboutSectionProps }) {
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper id="about" title="About">
      <Container fluid style={{ padding: 0 }}>
        <Row gutterWidth={32}>
          <Col xs={12} md={8}>
            <div className="space-y-6">
              {about.description.map((text: string, i: number) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="space-y-6 mt-8 md:mt-0">
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <div className="divide-y w-full">
                  {about.links.map((link) => {
                    return (
                      <div
                        key={link.title}
                        className="flex flex-col transition-colors py-6"
                      >
                        <div className="flex items-start">
                          <div className="w-24 flex-shrink-0 text-xs uppercase text-gray-400 pt-1">
                            <motion.span
                              key={link.logo}
                              className="inline-block text-xs md:text-sm font-mono  rounded px-2 py-0.5 leading-tight"
                              whileHover={{
                                scale: 1.12,
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Image
                                src={link.logo}
                                alt={link.title}
                                width={28}
                                height={28}
                                className="inline-block"
                                unoptimized={link.logo.startsWith("http")}
                              />
                            </motion.span>
                          </div>
                          <div className="flex-1">
                            <motion.a
                              href={link.remoteMethod ? link.path : link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ x: 8 }}
                              className="block text-left text-2xl md:text-2xl font-mono font-medium text-gray-900 hover:underline focus:underline transition group"
                            >
                              {link.title}
                              <div className="font-sans text-base md:text-lg text-gray-600 mb-2 mt-2">
                                {link.subtitle}
                              </div>
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="mt-10">
              <Marquee
                gradient
                gradientColor="white"
                gradientWidth={150}
                pauseOnHover={true}
                speed={50}
              >
                {about.skills.map(
                  (
                    skill: { name: string; logo?: string; icon?: string },
                    i: number
                  ) => (
                    <span key={skill.name}>
                      <ZoomOnHover
                        key={skill.name}
                        className="mx-4 md:mx-8 flex items-center gap-x-4 text-base md:text-xl font-medium text-muted-foreground cursor-pointer"
                      >
                        {skill.logo && (
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={28}
                            height={28}
                            className="inline-block"
                            unoptimized={skill.logo.startsWith("http")}
                          />
                        )}
                        <span className="whitespace-nowrap ml-2 mt-4">
                          {skill.name}
                        </span>
                      </ZoomOnHover>
                    </span>
                  )
                )}
              </Marquee>
            </div>
          </Col>
        </Row>
        <div style={{ display: "none" }}>
          <div ref={previewRef}>
            <ResumePreview data={initialData} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
