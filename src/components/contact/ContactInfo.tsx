"use client";

import { useTranslations } from "next-intl";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";

export function ContactInfo() {
  const t = useTranslations("contact");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
      <motion.a
        href={BUSINESS.callUrl}
        className="flex flex-col items-center justify-center gap-3 bg-rainbow-green text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Phone className="w-10 h-10" />
        <span className="text-xl font-bold">{t("callUs")}</span>
        <span className="text-white/80 font-accent text-lg" dir="ltr">
          {t("phone")}
        </span>
      </motion.a>

      <motion.a
        href={BUSINESS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-3 bg-[#25D366] text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <MessageCircle className="w-10 h-10" />
        <span className="text-xl font-bold">{t("whatsapp")}</span>
        <span className="text-white/80 font-accent text-lg" dir="ltr">
          {t("phone")}
        </span>
      </motion.a>
    </div>
  );
}
