"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RainbowButton } from "@/components/ui/RainbowButton";
import { useContactForm } from "@/hooks/useContactForm";
import { CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function QuoteFormSection() {
  const t = useTranslations("quoteForm");
  const { form, onSubmit, status, setStatus } = useContactForm();
  const {
    register,
    formState: { errors },
  } = form;

  const serviceOptions = Array.from({ length: 7 }, (_, i) =>
    t(`serviceOption${i + 1}`)
  );

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "linear-gradient(135deg, #FF3B3B, #FF8C42, #FFD93D, #6BCB77, #45B7D1, #4D96FF, #6C5CE7, #A855F7)",
          backgroundSize: "300% 300%",
          animation: "rainbow-shift 6s ease infinite",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
          rainbow
        />

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center"
            >
              <CheckCircle className="w-16 h-16 text-rainbow-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-ink-primary mb-2">
                {t("successTitle")}
              </h3>
              <p className="text-ink-secondary mb-6">{t("successMessage")}</p>
              <button
                onClick={() => setStatus("idle")}
                className="text-rainbow-blue font-medium hover:underline cursor-pointer"
              >
                {t("submit")}
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-xl space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-ink-primary mb-1.5">
                      {t("name")} *
                    </label>
                    <input
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-rainbow-blue focus:ring-2 focus:ring-rainbow-blue/20 outline-none transition text-base"
                      placeholder={t("name")}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink-primary mb-1.5">
                      {t("phone")} *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-rainbow-blue focus:ring-2 focus:ring-rainbow-blue/20 outline-none transition text-base"
                      placeholder={t("phone")}
                      dir="ltr"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              <div>
                <label className="block text-sm font-medium text-ink-primary mb-1.5">
                  {t("email")}
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-rainbow-blue focus:ring-2 focus:ring-rainbow-blue/20 outline-none transition text-base"
                  placeholder={t("email")}
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-primary mb-1.5">
                  {t("serviceType")} *
                </label>
                <select
                  {...register("serviceType")}
                  className="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-rainbow-blue focus:ring-2 focus:ring-rainbow-blue/20 outline-none transition text-base bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t("selectService")}
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.serviceType.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-primary mb-1.5">
                  {t("address")} *
                </label>
                <input
                  {...register("address")}
                  className="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-rainbow-blue focus:ring-2 focus:ring-rainbow-blue/20 outline-none transition text-base"
                  placeholder={t("address")}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-primary mb-1.5">
                  {t("notes")}
                </label>
                <textarea
                  {...register("notes")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-rainbow-blue focus:ring-2 focus:ring-rainbow-blue/20 outline-none transition text-base resize-none"
                  placeholder={t("notes")}
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-xl">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {t("errorMessage")}
                </div>
              )}

              <RainbowButton
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? t("sending") : t("submit")}
              </RainbowButton>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
