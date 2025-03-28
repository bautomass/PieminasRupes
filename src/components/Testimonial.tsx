// components/home/Testimonials.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";

export default function Testimonials() {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);

  // Future testimonials placeholder for now
  const placeholder = {
    lv: "Jūsu uzticība ir mūsu lielākais sasniegums. Drīzumā šeit būs mūsu klientu atsauksmes.",
    en: "Your trust is our greatest achievement. Client testimonials will be featured here soon.",
    ru: "Ваше доверие - наше величайшее достижение. Скоро здесь будут отзывы наших клиентов.",
    de: "Ihr Vertrauen ist unsere größte Errungenschaft. Kundenbewertungen werden hier in Kürze vorgestellt.",
  };

  const title = {
    lv: "Klientu atsauksmes",
    en: "Client Testimonials",
    ru: "Отзывы клиентов",
    de: "Kundenbewertungen",
  };

  const subtitle = {
    lv: "Mēs lepojamies ar mūsu klientu atzinību",
    en: "We take pride in our client appreciation",
    ru: "Мы гордимся признанием наших клиентов",
    de: "Wir sind stolz auf die Anerkennung unserer Kunden",
  };

  return (
    <Section bgColor="light">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-gray-900 font-serif sm:text-4xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title[language as keyof typeof title]}
        </motion.h2>

        <motion.p
          className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle[language as keyof typeof subtitle]}
        </motion.p>
      </div>

      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-10 text-center bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden group">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-100 rounded-br-full dark:bg-emerald-900/30 transform transition-transform duration-700 group-hover:scale-150"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-emerald-100 rounded-tl-full dark:bg-emerald-900/30 transform transition-transform duration-700 group-hover:scale-150"></div>

          <svg
            className="w-14 h-14 mx-auto mb-8 text-emerald-300 dark:text-emerald-600 opacity-60"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <AnimatePresence mode="wait">
            <motion.p
              key={language}
              className="text-2xl text-gray-700 dark:text-gray-200 mb-10 max-w-3xl mx-auto font-serif italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {placeholder[language as keyof typeof placeholder]}
            </motion.p>
          </AnimatePresence>

          <div className="flex justify-center space-x-3">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  active === index
                    ? "bg-emerald-500 scale-125"
                    : "bg-emerald-300 dark:bg-emerald-700 opacity-50 hover:opacity-70"
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
