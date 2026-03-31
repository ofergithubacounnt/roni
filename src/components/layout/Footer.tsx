"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const isHe = locale === "he";

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-ink-primary text-white">
      <div className="rainbow-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-extrabold rainbow-text mb-4">
              {BUSINESS.name[isHe ? "he" : "en"]}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {t("metadata.description")}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-rainbow-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={BUSINESS.callUrl}
                  className="flex items-center gap-2 text-white/70 hover:text-rainbow-green transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-rainbow-blue transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                {BUSINESS.address[isHe ? "he" : "en"]}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()}{" "}
            {BUSINESS.name[isHe ? "he" : "en"]}. {t("footer.rights")}.
          </p>
          <p className="text-white/50 text-xs">
            {t("footer.madeWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
