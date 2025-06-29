
import { SectionWrapper } from './section-wrapper';
import { AnimatedSection } from './animated-section';
import { Badge } from '@/components/ui/badge';
import { Icon, type IconName } from '@/components/icon';

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
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.name} delay={index * 50}>
              <Badge variant="outline" className="text-base px-4 py-2 bg-background border-accent text-accent-foreground/80 hover:bg-accent/50 transition-colors duration-300">
                <Icon name={skill.icon} className="mr-2 h-5 w-5" />
                {skill.name}
              </Badge>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
