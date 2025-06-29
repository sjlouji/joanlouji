"use client";

import { useFormStatus } from 'react-dom';
import { AnimatedSection } from '@/components/animated-section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, LoaderCircle } from 'lucide-react';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface HeroSectionProps {
  name: string;
  title: string;
  intro: string;
  formAction: (formData: FormData) => void;
  isPending: boolean;
}

const personalizationFormSchema = z.object({
  viewerProfile: z.string().min(10, {
    message: "Please describe your role or interests (min. 10 characters).",
  }),
});

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
  const form = useForm<z.infer<typeof personalizationFormSchema>>({
    resolver: zodResolver(personalizationFormSchema),
    defaultValues: {
      viewerProfile: "",
    },
  });

  return (
    <section className="w-full pt-32 pb-20 lg:pt-48 lg:pb-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
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
                <h3 className="font-headline text-2xl font-bold flex items-center gap-2">
                  <Sparkles className="text-accent-foreground" /> See a Tailored View
                </h3>
                <p className="text-muted-foreground">
                  I am a... (e.g., "hiring manager for a frontend role", "startup founder looking for a designer"). Let AI customize this portfolio for you.
                </p>
              </div>
              <form action={formAction} className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="viewerProfile">Your Role or Interest</Label>
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
