"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTASection() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <Section bgColor="gradient">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-serif sm:text-4xl dark:text-white">
          {t.cta.title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {t.cta.description}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/contact" variant="primary" size="lg">
            {t.cta.button}
          </Button>
          <div className="text-gray-700 dark:text-gray-300">
            {t.cta.or} <span className="font-medium">{t.cta.call}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
