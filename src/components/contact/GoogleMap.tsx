"use client";

import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

export function GoogleMap() {
  const t = useTranslations("contact");

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-rainbow-red" />
        <h3 className="text-lg font-bold text-ink-primary">
          {t("addressLabel")}
        </h3>
      </div>
      <p className="text-ink-secondary mb-4">{t("address")}</p>

      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.5!2d35.005!3d31.897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDUzJzQ5LjIiTiAzNcKwMDAnMTguMCJF!5e0!3m2!1siw!2sil!4v1"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - Modi'in"
          className="w-full"
        />
      </div>
    </div>
  );
}
