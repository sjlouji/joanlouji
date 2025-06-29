import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "../components/animated-section";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  title,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("w-full py-20 lg:py-20", className)}>
      <div className="container mx-auto px-4 md:px-3">
        <AnimatedSection>
          <h2 className="font-headline text-4xl md:text-5xl font-medium mb-12">
            {title}
          </h2>
        </AnimatedSection>
        {children}
      </div>
    </section>
  );
}
