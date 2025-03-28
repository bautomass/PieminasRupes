"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingBanner() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <section className="bg-white dark:bg-gray-800 border-t border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Heading and Description */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              {t.pricingBanner.title}
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700 mx-auto mb-6"></div>

            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              {t.pricingBanner.description}
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { label: t.pricingBanner.smallSize, price: "35€" },
              { label: t.pricingBanner.mediumSize, price: "45€" },
              { label: t.pricingBanner.largeSize, price: "50€" },
              { label: t.pricingBanner.veryLargeSize, price: "60€" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md border border-gray-100 dark:border-gray-600 p-5 text-center hover:shadow-lg transition-shadow duration-300 hover:border-emerald-200 dark:hover:border-emerald-800"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  {item.label}
                </p>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {item.price}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  {t.serviceDetails.pricing.quarterly}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium shadow-md hover:bg-emerald-700 transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              {t.pricingBanner.buttonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              {t.pricingBanner.ctaText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
