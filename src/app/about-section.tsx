import { SectionWrapper } from "./section-wrapper";

interface AboutSectionProps {
  about: string;
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <SectionWrapper id="about" title="About Me">
      <p className="max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
        {about}
      </p>
    </SectionWrapper>
  );
}
