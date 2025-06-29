"use client";

import { motion, useInView } from "framer-motion";
import * as React from "react";

interface HeaderSectionProps {
  title: string;
  subTitle: string;
}

export function HeroSection({ content }: { content: HeaderSectionProps }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const { title, subTitle } = content;

  const splittedText = title.split(" ");

  const pullUpVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section className="w-full min-h-[70vh] flex items-center py-24 sm:py-32 lg:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-medium leading-tight tracking-tight text-left flex flex-wrap gap-3">
            {splittedText.map((word, i) => (
              <span key={i} className="-hidden block">
                <motion.span
                  key={i}
                  ref={ref}
                  variants={pullUpVariant}
                  initial="initial"
                  animate={isInView ? "animate" : ""}
                  custom={i}
                  className="inline-block"
                >
                  {word == "" ? <span>&nbsp;</span> : word}
                </motion.span>
              </span>
            ))}
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-left max-w-2xl">
            {subTitle}
          </p>
        </div>
      </div>
    </section>
  );
}
