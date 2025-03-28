"use client";

import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import {
  SparklesIcon,
  FlowerIcon,
  ToolsIcon,
  HeartIcon,
} from "@/components/Icons";
import Image from "next/image";

export default function MemorialCare() {
  // Add custom CSS for scrollbar hiding and scroll snap
  const scrollStyles = `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
      max-width: 100%;
    }
    .scroll-snap-x {
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
    }
    .scroll-snap-item {
      scroll-snap-align: start;
    }
    html, body {
      overflow-x: hidden;
      max-width: 100%;
    }
  `;

  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const sectionRef = useRef(null);

  const services = [
    {
      id: "regular",
      icon: SparklesIcon,
      title: t.services.regular.title,
      description: t.services.regular.description,
      imageUrl:
        "https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743187975/regulara-kopsana_ukdtgn.jpg",
    },
    {
      id: "seasonal",
      icon: FlowerIcon,
      title: t.services.seasonal.title,
      description: t.services.seasonal.description,
      imageUrl:
        "https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743187975/sezonala-kopsana_ogetg0.jpg",
    },
    {
      id: "restoration",
      icon: ToolsIcon,
      title: t.services.restoration.title,
      description: t.services.restoration.description,
      imageUrl:
        "https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743187974/piemineklu-atjaunosana_ay1r6e.jpg",
    },
    {
      id: "custom",
      icon: HeartIcon,
      title: t.services.custom.title,
      description: t.services.custom.description,
      imageUrl:
        "https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743187974/individuali-risinajumi_jk2hu3.jpg",
    },
  ];

  return (
    <div
      className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      ref={sectionRef}
    >
      <style jsx>{scrollStyles}</style>
      {/* Refined background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#555 0.5px, transparent 0.5px)",
            backgroundSize: "28px 28px",
          }}
        ></div>
      </div>

      {/* Elegant top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70"></div>

      {/* Main content */}
      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Services Preview Section - Refined styling */}
        <div className="mb-0 mx-0">
          <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white">
              {t.services.title}
            </h2>
            <div className="mt-6 mx-auto w-32 h-[2px] bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
            <p className="mt-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          {/* Horizontal scroll container for mobile with premium styling */}
          <div className="px-0 overflow-hidden">
            <div className="overflow-x-auto hide-scrollbar scroll-snap-x">
              <div className="flex pb-6 gap-1">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow-hidden w-[90%] sm:w-1/2 lg:w-1/4 flex-shrink-0 scroll-snap-item h-[500px] cursor-pointer transition-all duration-500"
                    style={{
                      borderRadius: "0px",
                      margin: "0px",
                    }}
                  >
                    {/* Make entire card clickable */}
                    <a
                      href={`/services#${service.id}`}
                      className="absolute inset-0 z-30"
                      aria-label={`Learn more about ${service.title}`}
                    ></a>

                    {/* Background image with enhanced overlay */}
                    <div className="absolute inset-0 overflow-hidden">
                      {service.imageUrl ? (
                        <Image
                          src={service.imageUrl}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 25vw"
                          priority={index < 2}
                          className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700"
                          quality={90}
                        />
                      ) : (
                        /* Fallback if no image provided */
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-950"></div>
                      )}
                      {/* Premium gradient overlay with hover effect - top darker */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/30 opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                      {/* Premium border effect that appears on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
                      </div>
                    </div>

                    {/* Content overlay with enhanced animations */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 transform group-hover:translate-y-[-8px] transition-transform duration-500">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3 group-hover:text-emerald-100 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-white text-opacity-80 mb-6 line-clamp-3 group-hover:text-opacity-100 transition-all duration-300">
                        {service.description}
                      </p>

                      {/* Button that appears on hover */}
                      <div className="mt-auto transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-sm border border-white/20 text-white font-medium tracking-wider text-sm uppercase transition-all duration-300">
                          {t.services.learnMore}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant bottom border with enhanced glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70"></div>
    </div>
  );
}
