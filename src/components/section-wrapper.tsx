import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedSection } from './animated-section';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, title, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('w-full py-20 lg:py-28', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-12 text-center">
            {title}
          </h2>
        </AnimatedSection>
        {children}
      </div>
    </section>
  );
}
