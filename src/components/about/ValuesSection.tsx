"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RainbowCard } from "@/components/ui/RainbowCard";
import { Target, Shield, Sparkles, Eye } from "lucide-react";
import { getRainbowColor } from "@/lib/utils";

const valueIcons = [Target, Shield, Sparkles, Eye];

export function ValuesSection() {
  const t = useTranslations("about");

  const values = Array.from({ length: 4 }, (_, i) => ({
    title: t(`value${i + 1}Title`),
    description: t(`value${i + 1}Desc`),
    icon: valueIcons[i],
    color: getRainbowColor(i),
  }));

  return (
    <section className="py-20 md:py-28 bg-surface-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("valuesTitle")} rainbow />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <RainbowCard
                  accentColor={value.color}
                  className="text-center h-full"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-ink-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {value.description}
                  </p>
                </RainbowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
