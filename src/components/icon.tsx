
"use client";

import {
  Briefcase,
  Code,
  Lightbulb,
  Linkedin,
  Github,
  Twitter,
  Mail,
  type LucideProps
} from 'lucide-react';

const icons = {
  Briefcase,
  Code,
  Lightbulb,
  Linkedin,
  Github,
  Twitter,
  Mail,
};

export type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIconComponent = icons[name];
  if (!LucideIconComponent) {
    return null;
  }
  return <LucideIconComponent {...props} />;
}
