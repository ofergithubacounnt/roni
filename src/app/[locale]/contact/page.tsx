import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { GoogleMap } from "@/components/contact/GoogleMap";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Clock } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHe = locale === "he";

  return {
    title: isHe ? "צור קשר | רוני הצבעי" : "Contact | Roni HaTzabai",
    description: isHe
      ? "צרו קשר עם רוני הצבעי לקבלת הצעת מחיר חינם. 050-8898584. מודיעין והסביבה."
      : "Contact Roni HaTzabai for a free estimate. 050-8898584. Modi'in and surroundings.",
    alternates: {
      canonical: `https://roni.co.il/${locale}/contact`,
      languages: {
        he: "https://roni.co.il/he/contact",
        en: "https://roni.co.il/en/contact",
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <section className="pt-32 pb-20 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-4 rainbow-text">
            {t("title")}
          </h1>
          <p className="text-lg text-ink-secondary">{t("subtitle")}</p>
          <div className="rainbow-divider w-24 mx-auto mt-6" />
        </div>

        <ContactInfo />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />

          <div>
            <GoogleMap />

            <div className="mt-6 flex items-center gap-3 bg-surface-light rounded-2xl p-5 border border-surface-muted">
              <Clock className="w-6 h-6 text-rainbow-blue shrink-0" />
              <div>
                <p className="font-semibold text-ink-primary text-sm">
                  {t("availability")}
                </p>
                <p className="text-ink-secondary text-xs mt-0.5">
                  {t("freeQuote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
