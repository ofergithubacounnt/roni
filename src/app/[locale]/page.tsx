import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhatIncludedSection } from "@/components/home/WhatIncludedSection";
import { MoistureSection } from "@/components/home/MoistureSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { QuoteFormSection } from "@/components/home/QuoteFormSection";
import { StatsCounter } from "@/components/home/StatsCounter";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHe = locale === "he";

  return {
    title: isHe
      ? "רוני הצבעי | עבודות שפכטל וצבע במודיעין והסביבה"
      : "Roni HaTzabai | Professional Painting & Spackling in Modi'in",
    description: isHe
      ? "רוני הצבעי - 20 שנות ניסיון בצביעת דירות, תיקוני רטיבות ועובש, שפכטל אמריקאי. מודיעין ואזור השפלה. הצעת מחיר חינם!"
      : "Roni HaTzabai — 20 years of professional painting, spackling, and moisture repair services in Modi'in and the Shfela region. Free estimates!",
    alternates: {
      canonical: `https://roni.co.il/${locale}`,
      languages: { he: "https://roni.co.il/he", en: "https://roni.co.il/en" },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhatIncludedSection />
      <MoistureSection />
      <AdvantagesSection />
      <StatsCounter />
      <QuoteFormSection />
    </>
  );
}
