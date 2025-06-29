import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 md:px-8 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center">
        <Link href="#" className="mr-6 flex items-center space-x-2" prefetch={false}>
          <Sparkles className="h-6 w-6 text-accent-foreground" />
          <span className="font-bold font-headline text-lg">Ethereal Folio</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          <Link
            href="#about"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#skills"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-primary"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
