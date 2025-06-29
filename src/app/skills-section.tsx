import { SectionWrapper } from "./section-wrapper";
import { AnimatedSection } from "../components/animated-section";
import { Badge } from "../components/badge";
import { type IconName } from "../components/icon";

interface Skill {
  name: string;
  icon: IconName;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <SectionWrapper id="skills" title="My Skills" className="bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.name} delay={index * 50}>
              <Badge
                variant="secondary"
                className="text-base px-4 py-2 transition-colors duration-300"
              >
                {skill.name}
              </Badge>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
