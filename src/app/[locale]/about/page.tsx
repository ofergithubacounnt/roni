import { setRequestLocale } from "next-intl/server";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { ValuesSection } from "@/components/about/ValuesSection";
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
      ? "אודות | רוני הצבעי"
      : "About | Roni HaTzabai",
    description: isHe
      ? "הכירו את רוני הצבעי — 20 שנות ניסיון בעבודות צבע ושפכטל. עסק משפחתי, צוות ישראלי מקצועי."
      : "Meet Roni HaTzabai — 20 years of experience in painting and spackling. A family business with a professional Israeli crew.",
    alternates: {
      canonical: `https://roni.co.il/${locale}/about`,
      languages: {
        he: "https://roni.co.il/he/about",
        en: "https://roni.co.il/en/about",
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
    </>
  );
}
