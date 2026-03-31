"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RainbowCard } from "@/components/ui/RainbowCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  Award,
  Users,
  Clock,
  Paintbrush,
  Wallet,
  Percent,
} from "lucide-react";
import { getRainbowColor } from "@/lib/utils";

const advantages = [
  { key: "item1", icon: Award, hasCounter: true },
  { key: "item2", icon: Users, hasCounter: false },
  { key: "item3", icon: Clock, hasCounter: false },
  { key: "item4", icon: Paintbrush, hasCounter: false },
  { key: "item5", icon: Wallet, hasCounter: false },
  { key: "item6", icon: Percent, hasCounter: false },
];

export function AdvantagesSection() {
  const t = useTranslations("advantages");

  return (
    <section className="py-20 md:py-28 bg-surface-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t("sectionTitle")} rainbow />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            const color = getRainbowColor(i);
            return (
              <ScrollReveal key={adv.key} delay={i * 0.1}>
                <RainbowCard
                  accentColor={color}
                  className="text-center h-full"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>

                  {adv.hasCounter ? (
                    <div className="mb-2">
                      <AnimatedCounter
                        target={20}
                        suffix="+"
                        className="text-3xl"
                      />
                    </div>
                  ) : null}

                  <h3 className="text-lg font-bold text-ink-primary mb-2">
                    {t(`${adv.key}Title`)}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {t(`${adv.key}Desc`)}
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
