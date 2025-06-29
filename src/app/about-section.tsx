import { SectionWrapper } from "./section-wrapper";
import { AnimatedSection } from "../components/animated-section";

interface AboutSectionProps {
  about: string;
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <SectionWrapper id="about" title="About Me">
      <AnimatedSection delay={200}>
        <p className="max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
          {about}
        </p>
      </AnimatedSection>
    </SectionWrapper>
  );
}
