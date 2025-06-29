import { SectionWrapper } from "./section-wrapper";
import { AnimatedSection } from "../components/animated-section";
import { Button } from "../components/button";
import Link from "next/link";
import { Icon, type IconName } from "../components/icon";

interface Contact {
  email: string;
  socials: {
    name: string;
    url: string;
    icon: IconName;
  }[];
  icon: IconName;
}

interface ContactSectionProps {
  contact: Contact;
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of an amazing team. Feel free to reach out.
        </p>
        <Button asChild size="lg">
          <a href={`mailto:${contact.email}`}>
            Say Hello <Icon name={contact.icon} className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <div className="flex justify-center gap-6 pt-4">
          {contact.socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Icon
                name={social.icon}
                className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary"
              />
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
