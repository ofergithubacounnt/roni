import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { heebo, outfit } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import "@/app/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "he" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const isRTL = locale === "he";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} className="scroll-smooth">
      <body
        className={`${heebo.variable} ${outfit.variable} font-body min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <LocalBusinessJsonLd locale={locale} />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
