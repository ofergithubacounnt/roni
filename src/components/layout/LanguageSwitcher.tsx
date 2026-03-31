"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === "he" ? "en" : "he";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink-primary/10 hover:border-rainbow-blue/50 transition-colors text-sm font-medium cursor-pointer"
      aria-label={locale === "he" ? "Switch to English" : "עבור לעברית"}
    >
      <Globe className="w-4 h-4" />
      <span>{locale === "he" ? "EN" : "HE"}</span>
    </button>
  );
}
