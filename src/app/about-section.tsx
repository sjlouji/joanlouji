import { Container, Row, Col } from "react-grid-system";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { SectionWrapper } from "@/app/section-wrapper";
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
    logo?: string;
    icon?: string;
  }[];
}

export function AboutSection({ about }: { about: AboutSectionProps }) {
  return (
    <SectionWrapper id="about" title="About">
      <Container fluid style={{ padding: 0 }}>
        <Row gutterWidth={32}>
          <Col xs={12} md={7}>
            <div className="space-y-6">
              {about.description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="space-y-6 mt-8 md:mt-0">
              {about.links.map((link) => (
                <ZoomOnHover key={link.title} className="w-full" zoom={0.96}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border p-4 md:p-6 bg-background shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex flex-col items-start gap-2 min-w-0">
                      <div className="flex items-center gap-2 w-full">
                        <div className="flex items-center gap-2 w-full">
                          <Image
                            src={link.logo}
                            alt={link.title}
                            width={30}
                            height={30}
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
                {about.skills.map((skill, i) => (
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
                ))}
              </Marquee>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
}
