import Image from "next/image";
import { Container, Row, Col } from "react-grid-system";
import { FileText } from "lucide-react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { SectionWrapper } from "@/app/section-wrapper";
import { ZoomOnHover } from "@/components/zoom-on-hover";
import { Dialog, DialogContent, DialogTrigger } from "@/components/dialog";
import { ResumePreview } from "@/app/resume-section";
import type { AboutSectionProps } from "@/types/about";
import { initialData } from "@/lib/data";
import { Button } from "@/components/button";

export function AboutSection({ about }: { about: AboutSectionProps }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const allLinks = [
    ...about.links,
    {
      color: "bg-blue-600",
      title: "Resume",
      subtitle: "View my professional resume and experience.",
      url: "#",
      logo: "/images/cv.png",
    },
  ];

  const previewRef = useRef<HTMLDivElement>(null);

  const pageStyle = `
  @media print {
    @page {
      size: A4;
      margin: 0;
    }
    html, body {
      -webkit-print-color-adjust: exact;
    }
    /* Disable all animations and transitions */
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
    }
    /* Override framer-motion's inline styles for printing */
    [style*="opacity: 0"] {
      opacity: 1 !important;
    }
    [style*="transform:"] {
      transform: none !important;
    }
    /* Ensure on-screen container constraints are removed */
    .A4-size {
      width: 100% !important;
      max-width: none !important;
      aspect-ratio: auto !important;
      box-shadow: none !important;
      border-radius: 0 !important;
    }
    .animated-link::after {
      display: none !important;
    }
  }
`;
  const reactToPrintFn = useReactToPrint({
    contentRef: previewRef,
    pageStyle,
  });

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
                  {allLinks.map((link) => {
                    if (link.title === "Resume") {
                      return (
                        <div
                          key={link.title}
                          className="flex flex-col transition-colors py-6"
                        >
                          <div className="flex items-start">
                            <div className="w-24 flex-shrink-0 text-xs uppercase text-gray-400 pt-1">
                              <motion.span
                                className="inline-block text-xs md:text-sm font-mono rounded px-2 py-0.5 leading-tight"
                                whileHover={{
                                  scale: 1.12,
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Image
                                  src="/images/cv.png"
                                  alt="Resume"
                                  width={28}
                                  height={28}
                                  className="inline-block"
                                />
                              </motion.span>
                            </div>
                            <div className="flex-1">
                              <Dialog
                                open={isResumeOpen}
                                onOpenChange={setIsResumeOpen}
                              >
                                <DialogTrigger asChild>
                                  <motion.button
                                    className="inline-flex items-center text-2xl md:text-2xl font-mono font-medium text-gray-900 hover:underline focus:underline transition group cursor-pointer"
                                    whileHover={{ x: 8 }}
                                  >
                                    {link.title}
                                  </motion.button>
                                </DialogTrigger>
                                <DialogContent
                                  transparent
                                  className="max-w-4xl max-h-[90vh] overflow-y-auto"
                                >
                                  <div className="w-full max-w-5xl mx-auto bg-white rounded-lg p-4">
                                    <div className="w-full max-w-5xl mx-auto mb-6 flex justify-end">
                                      <Button onClick={reactToPrintFn}>
                                        Download Resume
                                      </Button>
                                    </div>
                                    <div
                                      ref={previewRef}
                                      className="w-[210mm] h-[297mm] mx-auto"
                                    >
                                      <ResumePreview data={initialData} />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <div className="font-sans text-base md:text-lg text-gray-600 mb-2 mt-2">
                                {link.subtitle}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }

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
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-2xl md:text-2xl font-mono font-medium text-gray-900 hover:underline focus:underline transition group"
                              whileHover={{ x: 8 }}
                            >
                              {link.title}
                            </motion.a>
                            <div className="font-sans text-base md:text-lg text-gray-600 mb-2 mt-2">
                              {link.subtitle}
                            </div>
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
      </Container>
    </SectionWrapper>
  );
}
