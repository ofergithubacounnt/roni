"use client";

import { useTranslations } from "next-intl";
import { RainbowButton } from "@/components/ui/RainbowButton";
import { useContactForm } from "@/hooks/useContactForm";
import { CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
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
          <h3 className="text-2xl font-bold text-ink-primary text-center mb-2">
            {t("sectionTitle")}
          </h3>
          <p className="text-ink-secondary text-center text-sm mb-6">
            {t("sectionSubtitle")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-ink-primary mb-1.5">
                {t("name")} *
              </label>
              <input
                {...register("name")}
                className="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-rainbow-blue focus:ring-2 focus:ring-rainbow-blue/20 outline-none transition text-base"
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
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-rainbow-blue focus:ring-2 focus:ring-rainbow-blue/20 outline-none transition text-base"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink-primary mb-1.5">
              {t("email")}
            </label>
            <input
              {...register("email")}
              type="email"
              dir="ltr"
              className="w-full px-4 py-3 rounded-xl border border-surface-muted focus:border-rainbow-blue focus:ring-2 focus:ring-rainbow-blue/20 outline-none transition text-base"
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
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
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
  );
}
