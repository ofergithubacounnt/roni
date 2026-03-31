"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getRainbowColor } from "@/lib/utils";
import {
  PackageOpen,
  ShieldCheck,
  Scissors,
  PaintBucket,
  Bandage,
  Wrench,
  Layers,
  Disc,
  Paintbrush,
  Sparkles,
} from "lucide-react";

const stepIcons = [
  PackageOpen,
  ShieldCheck,
  Scissors,
  PaintBucket,
  Bandage,
  Wrench,
  Layers,
  Disc,
  Paintbrush,
  Sparkles,
];

export function WhatIncludedSection() {
  const t = useTranslations("whatIncludes");

  const steps = Array.from({ length: 10 }, (_, i) => ({
    title: t(`step${i + 1}Title`),
    description: t(`step${i + 1}Desc`),
    icon: stepIcons[i],
    color: getRainbowColor(i),
  }));

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
          rainbow
        />

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 start-6 md:start-8 w-1 rounded-full hidden sm:block"
            style={{
              background:
                "linear-gradient(180deg, #FF3B3B, #FF8C42, #FFD93D, #6BCB77, #45B7D1, #4D96FF, #6C5CE7, #A855F7)",
            }}
          />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  key={i}
                  delay={i * 0.08}
                  direction="left"
                >
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div
                      className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 text-white font-bold shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="bg-surface-light rounded-2xl p-5 md:p-6 flex-1 border border-surface-muted">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="font-accent text-sm font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: step.color }}
                        >
                          {i + 1}
                        </span>
                        <h3 className="text-base md:text-lg font-bold text-ink-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
