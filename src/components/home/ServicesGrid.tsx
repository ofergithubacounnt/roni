"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RainbowCard } from "@/components/ui/RainbowCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Home,
  Sofa,
  Droplets,
  Building2,
  ArrowUpDown,
  Layers,
} from "lucide-react";

const services = [
  { key: "emptyApartment", color: "#FF3B3B", icon: Home, hasDiscount: true },
  { key: "occupiedApartment", color: "#FF8C42", icon: Sofa, hasDiscount: false },
  { key: "moisture", color: "#45B7D1", icon: Droplets, hasDiscount: false },
  { key: "offices", color: "#4D96FF", icon: Building2, hasDiscount: false },
  { key: "stairwells", color: "#6C5CE7", icon: ArrowUpDown, hasDiscount: false },
  { key: "spackle", color: "#A855F7", icon: Layers, hasDiscount: false },
];

export function ServicesGrid() {
  const t = useTranslations("services");

  return (
    <section className="py-20 md:py-28 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.key} delay={i * 0.1}>
                <RainbowCard
                  accentColor={service.color}
                  className="h-full min-h-[220px] flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: service.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-ink-primary mb-1">
                        {t(`${service.key}.title`)}
                      </h3>
                      {service.hasDiscount && (
                        <span
                          className="inline-block text-xs font-bold text-white px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: service.color }}
                        >
                          {t(`${service.key}.discount`)}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-ink-secondary leading-relaxed flex-1">
                    {t(`${service.key}.description`)}
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
