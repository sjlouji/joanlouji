import { useEffect, useRef } from "react";
import { portfolioData } from "@/lib/data";

export function useScrollHash() {
  const lastSection = useRef<string | null>(null);

  useEffect(() => {
    const sectionIds = [
      "hero",
      ...portfolioData.sections.map((s) => s.href.replace(/^#/, "")),
    ];
    const getCurrentSection = () => {
      const scrollY = window.scrollY;
      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop;
          if (scrollY >= offset - 100) {
            current = id;
          }
        }
      }
      return current;
    };
    const onScroll = () => {
      const section = getCurrentSection();
      if (section && section !== lastSection.current) {
        history.replaceState(
          null,
          "",
          section === "hero"
            ? window.location.pathname + window.location.search
            : `#${section}`
        );
        lastSection.current = section;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
