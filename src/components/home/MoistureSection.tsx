"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Shield, Check } from "lucide-react";

export function MoistureSection() {
  const t = useTranslations("moistureSection");

  const steps = Array.from({ length: 6 }, (_, i) => t(`step${i + 1}`));

  return (
    <section className="py-20 md:py-28 bg-ink-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, #45B7D1 0%, transparent 70%), radial-gradient(ellipse at 70% 50%, #4D96FF 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ScrollReveal>
            <div className="flex justify-center">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center border-4 border-rainbow-cyan/30 bg-rainbow-cyan/10">
                <Shield className="w-20 h-20 md:w-28 md:h-28 text-rainbow-cyan" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ul className="space-y-4">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rainbow-cyan/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-rainbow-cyan" />
                  </div>
                  <span className="text-white/90 text-sm md:text-base leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
