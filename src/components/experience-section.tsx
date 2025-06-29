
import { SectionWrapper } from './section-wrapper';
import { AnimatedSection } from './animated-section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Icon, type IconName } from '@/components/icon';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: IconName;
}

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true" />
        {experience.map((job, index) => (
          <AnimatedSection key={index} delay={index * 150}>
            <div className="md:grid md:grid-cols-2 md:gap-8 mb-8">
              <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}`}>
                {index % 2 === 0 ? null : <div className="hidden md:block w-full" />}
                <div className="hidden md:block bg-background p-2 rounded-full border">
                  <Icon name={job.icon} className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className={index % 2 === 0 ? 'md:col-start-1 md:row-start-1 md:text-right' : 'md:col-start-2'}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{job.role}</CardTitle>
                    <CardDescription>{job.company} | {job.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
