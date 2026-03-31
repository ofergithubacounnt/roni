"use client";

import { useTranslations } from "next-intl";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StatsCounter() {
  const t = useTranslations("stats");

  const stats = [
    { target: 20, suffix: "+", label: t("years"), color: "#FF3B3B" },
    { target: 1000, suffix: "+", label: t("projects"), color: "#4D96FF" },
    { target: 100, suffix: "%", label: t("satisfaction"), color: "#6BCB77" },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="text-4xl md:text-5xl"
                />
                <p className="text-ink-secondary text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
