// components/home/Process.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import Section from "@/components/ui/Section";

export default function Process() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <Section bgColor="white">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-gray-900 font-serif sm:text-4xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.process.title}
        </motion.h2>
        <motion.p
          className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.process.subtitle}
        </motion.p>
      </div>

      <div className="relative mt-20">
        {/* Timeline connector */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-emerald-200 dark:bg-emerald-800 hidden md:block"></div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {t.process.steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative ${
                index % 2 === 0 ? "md:text-right md:mr-8" : "md:ml-8 md:mt-24"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-emerald-500 z-10 shadow-md"
                style={{ [index % 2 === 0 ? "right" : "left"]: "-20px" }}
              ></div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-900 rounded-xl transform transition-transform group-hover:scale-105 opacity-70"></div>

                <div className="relative p-8 border border-gray-200 rounded-xl bg-white dark:bg-gray-900/80 dark:border-gray-700 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:shadow-md z-10">
                  <div className="flex items-center mb-4 justify-center md:justify-start">
                    <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-emerald-600 rounded-full dark:bg-emerald-500 shadow-inner mr-3 transition-all group-hover:scale-110">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white font-serif">
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className={`text-gray-600 dark:text-gray-300 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
