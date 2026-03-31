"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { RainbowButton } from "@/components/ui/RainbowButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, navLinks }: MobileMenuProps) {
  const t = useTranslations("nav");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,59,59,0.95), rgba(255,140,66,0.95), rgba(255,217,61,0.95), rgba(107,203,119,0.95), rgba(69,183,209,0.95), rgba(77,150,255,0.95), rgba(108,92,231,0.95), rgba(168,85,247,0.95))",
              backgroundSize: "300% 300%",
              animation: "rainbow-shift 6s ease infinite",
            }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          />

          <div className="relative h-full flex flex-col items-center justify-center px-8">
            <button
              onClick={onClose}
              className="absolute top-6 end-6 p-2 text-white cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-6 mb-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-2xl font-bold text-white hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <Link href="/contact" onClick={onClose}>
                <RainbowButton variant="outline" size="lg">
                  {t("getQuote")}
                </RainbowButton>
              </Link>
              <LanguageSwitcher />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
