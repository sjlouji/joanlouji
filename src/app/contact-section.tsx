import Link from "next/link";

import { SectionWrapper } from "@/app/section-wrapper";
import { Button } from "@/components/button";
import { Icon, type IconName } from "@/components/icon";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ZoomOnHover } from "@/components/ui/zoom-on-hover";

interface Contact {
  email: string;
  socials: {
    name: string;
    logo: string;
    url: string;
  }[];
}

interface ContactSectionProps {
  contact: Contact;
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <section id="contact" className="py-16">
        <div className="max-w-2xl mx-auto space-y-8"></div>
      </section>
    </SectionWrapper>
  );
}
