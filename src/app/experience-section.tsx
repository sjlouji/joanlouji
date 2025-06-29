import { SectionWrapper } from "./section-wrapper";
import { AnimatedSection } from "../components/animated-section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/card";
import { Icon, type IconName } from "../components/icon";

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
      <div className="max-w-3xl mx-auto space-y-8">
        {experience.map((job, index) => (
          <Card className="hover:shadow-lg transition-shadow duration-300 text-left">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full border">
                  <Icon name={job.icon} className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle>{job.role}</CardTitle>
                  <CardDescription>
                    {job.company} | {job.period}
                  </CardDescription>
                  <CardContent className="p-0 pt-4">
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
