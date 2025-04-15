"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();

  // Translations for the button text
  const translations = {
    lv: {
      message: "Jautājums? Nosūtiet mums ziņu!",
      ariaLabel: "Sazināties ar mums WhatsApp",
    },
    en: {
      message: "Question? Send us a message!",
      ariaLabel: "Contact us on WhatsApp",
    },
    ru: {
      message: "Вопрос? Отправьте нам сообщение!",
      ariaLabel: "Свяжитесь с нами в WhatsApp",
    },
    de: {
      message: "Frage? Senden Sie uns eine Nachricht!",
      ariaLabel: "Kontaktieren Sie uns auf WhatsApp",
    },
  };

  const t = translations[language] || translations.en;

  // WhatsApp phone number
  const phoneNumber = "+37129183370";

  // WhatsApp message URL
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  // Memoized handlers to prevent unnecessary re-renders
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleFocus = useCallback(() => setIsHovered(true), []);
  const handleBlur = useCallback(() => setIsHovered(false), []);

  return (
    <div className="fixed bottom-4 right-4 z-50" aria-hidden="false">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, width: 0 }}
            animate={{ opacity: 1, x: 0, width: "auto" }}
            exit={{ opacity: 0, x: 10, width: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-12 bottom-1 bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-2 px-4 rounded-full shadow-lg border border-emerald-100 dark:border-emerald-800/30"
            style={{
              willChange: "transform, opacity",
              translateZ: 0,
              backfaceVisibility: "hidden",
            }}
          >
            <p className="whitespace-nowrap font-medium text-xs">{t.message}</p>

            {/* Right pointing triangle */}
            <div
              className="absolute right-[-6px] top-1/2 transform -translate-y-1/2"
              aria-hidden="true"
            >
              <div className="w-0 h-0 border-t-6 border-t-transparent border-l-6 border-l-white dark:border-l-gray-800 border-b-6 border-b-transparent"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t.ariaLabel}
        style={{
          willChange: "transform",
          translateZ: 0,
          backfaceVisibility: "hidden",
        }}
      >
        <div className="relative">
          {/* Simplified pulsating effect */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 0.5, 0.7],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
            style={{
              willChange: "transform, opacity",
              translateZ: 0,
            }}
            aria-hidden="true"
          />

          {/* Smaller main button */}
          <div className="relative bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full shadow-md border-2 border-white dark:border-gray-700 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </motion.a>
    </div>
  );
}
