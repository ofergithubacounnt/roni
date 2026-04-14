import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Heebo, Outfit } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import "@/app/globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

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
      <head>
        <meta name="google-site-verification" content="wXfXnGqagAL0ju3wy2QorBV6YvM-A5i04A4iawcqCG8" />
      </head>
      <body
        className={`${heebo.className} ${outfit.variable} min-h-screen flex flex-col`}
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
