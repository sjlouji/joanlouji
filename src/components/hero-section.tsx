"use client";

import { useFormStatus } from 'react-dom';
import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, LoaderCircle } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  title: string;
  intro: string;
  formAction: (formData: FormData) => void;
  isPending: boolean;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <LoaderCircle className="animate-spin" /> : <Sparkles />}
      Personalize
    </Button>
  );
}


export function HeroSection({ name, title, intro, formAction }: HeroSectionProps) {
  return (
    <section className="w-full py-24 sm:py-32 lg:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-primary">
                {name}
              </h1>
              <h2 className="text-2xl font-medium sm:text-3xl text-foreground/80">{title}</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {intro}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <AnimatedSection delay={200} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Sparkles className="text-primary" /> See a Tailored View
                </h3>
                <p className="text-muted-foreground">
                  Let AI customize this portfolio for you based on your role or interests.
                </p>
              </div>
              <form action={formAction} className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="viewerProfile">I am a...</Label>
                    <Input id="viewerProfile" name="viewerProfile" placeholder="e.g., recruiter looking for a Next.js dev" />
                 </div>
                 <SubmitButton />
              </form>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
