// src/components/PricingButton.jsx
"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

// Simple button component that links to the pricing page
export const PricingButton = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex justify-center mt-8">
      <Link
        href="/pricing"
        className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-md shadow-md hover:bg-emerald-700 transition-all duration-300"
      >
        {t.services.viewPricing}
      </Link>
    </div>
  );
};
