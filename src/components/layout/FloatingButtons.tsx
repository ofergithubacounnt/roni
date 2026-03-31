"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 start-6 z-50 flex flex-col gap-3">
      <motion.a
        href={BUSINESS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <MessageCircle className="h-7 w-7 relative z-10" />
      </motion.a>

      <motion.a
        href={BUSINESS.callUrl}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-rainbow-blue text-white shadow-lg hover:bg-blue-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Call ${BUSINESS.phone}`}
      >
        <Phone className="h-7 w-7" />
      </motion.a>
    </div>
  );
}
