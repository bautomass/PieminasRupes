"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();

  // Translations for the button text
  const translations = {
    lv: {
      message: "Jautājums? Nosūtiet mums ātru ziņu!",
    },
    en: {
      message: "Question? Send us a quick message!",
    },
    ru: {
      message: "Вопрос? Отправьте нам быстрое сообщение!",
    },
    de: {
      message: "Frage? Senden Sie uns eine schnelle Nachricht!",
    },
  };

  const t = translations[language] || translations.en;

  // WhatsApp phone number
  const phoneNumber = "+37129183370";

  // WhatsApp message URL
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, width: 0 }}
            animate={{ opacity: 1, x: 0, width: "auto" }}
            exit={{ opacity: 0, x: 20, width: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-16 bottom-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-3 px-5 rounded-full shadow-lg border border-emerald-100 dark:border-emerald-800/30"
          >
            <p className="whitespace-nowrap font-medium text-sm">{t.message}</p>

            {/* Right pointing triangle */}
            <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white dark:border-l-gray-800 border-b-8 border-b-transparent"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Pulsating effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.5, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />

          {/* Main button */}
          <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg border-2 border-white dark:border-gray-700 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </motion.a>
    </div>
  );
}
