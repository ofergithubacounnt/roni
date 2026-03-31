"use client";

import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  rainbow?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  rainbow = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`text-center mb-12 md:mb-16 ${className ?? ""}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${
          rainbow
            ? "rainbow-text"
            : light
              ? "text-white"
              : "text-ink-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto ${
            light ? "text-white/80" : "text-ink-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="rainbow-divider w-24 mx-auto mt-6" />
    </ScrollReveal>
  );
}
