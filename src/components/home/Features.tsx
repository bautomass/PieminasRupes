// components/home/Features.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import Section from "@/components/ui/Section";
import { CheckIcon } from "@/components/Icons";

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const features = [
    {
      title: t.why.respect.title,
      description: t.why.respect.description,
    },
    {
      title: t.why.quality.title,
      description: t.why.quality.description,
    },
    {
      title: t.why.individual.title,
      description: t.why.individual.description,
    },
    {
      title: t.why.experience.title,
      description: t.why.experience.description,
    },
  ];

  return (
    <Section bgColor="light">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-gray-900 font-serif sm:text-4xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.why.title}
        </motion.h2>
        <motion.p
          className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.why.subtitle}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex p-8 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 group hover:border-emerald-200 dark:hover:border-emerald-800 transition-all"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex-shrink-0 mr-5">
              <div className="p-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 transition-all group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50">
                <CheckIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white font-serif">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
