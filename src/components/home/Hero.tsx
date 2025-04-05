"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import { translations } from "@/lib/translations";
import { MapPinIcon } from "@/components/Icons";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gray-50 dark:bg-gray-900 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-1 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px]"
            >
              <Image
                src="https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743146265/tradicionala-latvijas-kapsetu-kopsana-pirms-pec-atjaunosanas_sinvbh.jpg"
                alt="SkyGarden memorial care services showing before and after cemetery maintenance"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                quality={100}
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg font-serif italic">
                    {t.memorial.imageCaption}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Content */}
          <div className="order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex items-center">
                <div
                  className="h-[3px] w-12 rounded-full bg-emerald-500 mr-4"
                  aria-hidden="true"
                ></div>
                <span className="text-sm font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  SkyGarden
                </span>
              </div>

              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6"
              >
                {t.hero.title}
              </h1>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-12">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md"
                  aria-label={t.hero.cta}
                >
                  {t.hero.cta}
                </Button>

                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
                  aria-label={t.hero.secondaryLink}
                >
                  {t.hero.secondaryLink}
                </Button>
              </div>

              {/* Service Areas - Improved styling */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-800 rounded-lg p-6 shadow-lg border border-emerald-100 dark:border-emerald-800/30 mb-6"
              >
                <h3 className="font-medium text-emerald-700 dark:text-emerald-300 mb-4 flex items-center">
                  <span
                    className="bg-emerald-100 dark:bg-emerald-800/40 p-1.5 rounded-full mr-3"
                    aria-hidden="true"
                  >
                    <MapPinIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </span>
                  {t.memorial.serviceArea}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t.memorial.serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-600"
                    >
                      <div
                        className="w-2 h-2 rounded-full bg-emerald-500 mr-2"
                        aria-hidden="true"
                      ></div>
                      <span className="text-gray-700 dark:text-gray-200">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
