import Link from "next/link";

import { MotionImage } from "@/components/motion-image";
import { AnimatedNavLink } from "@/components/animated-nav-link";
import type { HeaderSectionProps } from "@/types/header";

export function Header({ content }: { content: HeaderSectionProps }) {
  const { name, logo, sections } = content;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 md:px-8 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 items-center">
        <Link
          href="#"
          className="mr-6 flex items-center space-x-2"
          prefetch={false}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <MotionImage
            src={logo}
            alt={name}
            width={52}
            height={52}
            className="w-15 h-15"
            whileTap={{ scale: 0.85, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </Link>
        <nav className="hidden md:flex space-x-10 text-lg font-medium ml-auto">
          {sections?.map((section: { name: string; href: string }) => (
            <AnimatedNavLink key={section.href} href={section.href}>
              {section.name}
            </AnimatedNavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
