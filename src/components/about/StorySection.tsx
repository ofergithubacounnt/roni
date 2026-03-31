"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

export function StorySection() {
  const t = useTranslations("about");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <ScrollReveal direction="right">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink-primary mb-6">
                {t("storyTitle")}
              </h2>
              <div className="space-y-4 text-ink-secondary leading-relaxed">
                <p>{t("storyP1")}</p>
                <p>{t("storyP2")}</p>
                <p>{t("storyP3")}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="rainbow-border p-1 rounded-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/images/general/1desktop.png"
                  alt={t("storyTitle")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
