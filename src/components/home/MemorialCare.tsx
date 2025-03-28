"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import Image from "next/image";
import { CheckIcon } from "@/components/Icons";
import Button from "@/components/ui/Button";

export default function MemorialCare() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const sectionRef = useRef(null);

  const features = [
    {
      title: t.why.respect.title,
      description: t.why.respect.description,
      icon: "respect",
    },
    {
      title: t.why.quality.title,
      description: t.why.quality.description,
      icon: "quality",
    },
    {
      title: t.why.individual.title,
      description: t.why.individual.description,
      icon: "individual",
    },
    {
      title: t.why.experience.title,
      description: t.why.experience.description,
      icon: "experience",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 relative" ref={sectionRef}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#555 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      {/* Elegant top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Refined header section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="block text-emerald-600 dark:text-emerald-400 font-medium tracking-wide text-sm uppercase mb-3">
            {t.memorial.preTitle || "Our Approach"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
            {t.memorial.title}
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
          <p className="mt-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {t.memorial.subtitle}
          </p>
        </div>

        {/* Service ordering information */}
        <div className="mb-20 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {t.memorial.orderTitle}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {t.memorial.orderText}
          </p>
          <p className="text-gray-700 dark:text-gray-300 italic">
            {t.memorial.orderExtra}
          </p>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {t.memorial.graveSearchTitle}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t.memorial.graveSearchText}
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {t.memorial.graveSearchNote}
            </p>
          </div>
        </div>

        {/* Main content grid with refinements */}
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
          {/* Left column: Enhanced image and process */}
          <div className="lg:col-span-6 space-y-20">
            {/* Elegant image presentation */}
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-transparent to-transparent dark:from-emerald-900/20 dark:via-transparent dark:to-transparent opacity-80 transition-opacity duration-300 pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 to-emerald-500 dark:from-emerald-600 dark:to-emerald-400"></div>
              <div className="p-3 md:p-4">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/memorial-place.png"
                    alt={t.memorial.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none opacity-60"></div>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                <p className="text-lg md:text-xl font-serif text-gray-900 dark:text-white leading-relaxed">
                  {t.memorial.imageCaption}
                </p>
              </div>
            </div>

            {/* Pricing section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">
                  {t.serviceDetails.pricing.title}
                </h3>

                <div className="space-y-6">
                  {t.serviceDetails.pricing.sizes.map((size, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-4"
                    >
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                          {size.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {size.size}
                        </p>
                      </div>
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                        {size.price}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-gray-500 dark:text-gray-400 text-sm italic">
                  {t.serviceDetails.pricing.note}
                </p>
              </div>
            </div>
          </div>

          {/* Right column: Values and CTA with refinements */}
          <div className="lg:col-span-6 space-y-20">
            {/* Enhanced values section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center border border-emerald-200 dark:border-emerald-700 shadow-sm">
                    <svg
                      className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-5 text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">
                    {t.memorial.valuesTitle}
                  </h3>
                </div>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="group relative rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
                    >
                      {/* Elegant background styling */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/70 border border-gray-100 dark:border-gray-700 group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-colors duration-300"></div>

                      {/* Feature content */}
                      <div className="relative flex items-start">
                        <div className="flex-shrink-0 mr-5">
                          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shadow-md border border-emerald-200 dark:border-emerald-800 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors duration-300">
                            <CheckIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">
                            {feature.title}
                          </h4>
                          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Details - Regular Maintenance */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
              <div className="p-6 md:p-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                  {t.serviceDetails.regular.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {t.serviceDetails.regular.description}
                </p>

                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                  {t.serviceDetails.regular.includes}
                </h4>

                <div className="space-y-8">
                  {t.serviceDetails.regular.services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6"
                    >
                      <h5 className="font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h5>
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600 dark:text-emerald-400" />
                            <span className="ml-3 text-gray-700 dark:text-gray-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-gray-700 dark:text-gray-300 italic">
                  {t.serviceDetails.regular.note}
                </p>
              </div>
            </div>

            {/* Elegant CTA section */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-emerald-100 dark:border-emerald-900/30">
              {/* Refined background styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-90"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 dark:bg-emerald-900/30 rounded-full transform translate-x-16 -translate-y-16 opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full transform -translate-x-8 translate-y-8 opacity-60"></div>

              {/* CTA content */}
              <div className="relative p-8 md:p-12">
                <div className="flex flex-col space-y-8 md:space-y-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                      {t.memorial.ctaTitle}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t.memorial.ctaText}
                    </p>
                  </div>

                  <div className="flex justify-start">
                    <Button
                      href="/contact"
                      variant="primary"
                      size="lg"
                      className="text-base md:text-lg px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      {t.memorial.ctaButton}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
    </div>
  );
}

// "use client";

// import { useRef } from "react";
// // import { useInView } from "framer-motion";
// import { useLanguage } from "@/context/LanguageContext";
// import { translations } from "@/lib/translations";
// import Image from "next/image";
// import { CheckIcon } from "@/components/Icons";
// import Button from "@/components/ui/Button";

// export default function MemorialCare() {
//   const { language } = useLanguage();
//   const t = translations[language as keyof typeof translations];
//   const sectionRef = useRef(null);
//   // const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

//   const features = [
//     {
//       title: t.why.respect.title,
//       description: t.why.respect.description,
//       icon: "respect",
//     },
//     {
//       title: t.why.quality.title,
//       description: t.why.quality.description,
//       icon: "quality",
//     },
//     {
//       title: t.why.individual.title,
//       description: t.why.individual.description,
//       icon: "individual",
//     },
//     {
//       title: t.why.experience.title,
//       description: t.why.experience.description,
//       icon: "experience",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 relative" ref={sectionRef}>
//       {/* Subtle background pattern */}
//       <div className="absolute inset-0 pointer-events-none opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: "radial-gradient(#555 0.5px, transparent 0.5px)",
//             backgroundSize: "24px 24px",
//           }}
//         ></div>
//       </div>

//       {/* Elegant top border */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>

//       {/* Main content */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//         {/* Refined header section */}
//         <div className="text-center max-w-3xl mx-auto mb-24">
//           <span className="block text-emerald-600 dark:text-emerald-400 font-medium tracking-wide text-sm uppercase mb-3">
//             {t.memorial.preTitle || "Our Approach"}
//           </span>
//           <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
//             {t.memorial.title}
//           </h2>
//           <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
//           <p className="mt-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
//             {t.memorial.subtitle}
//           </p>
//         </div>

//         {/* Main content grid with refined spacing */}
//         <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
//           {/* Left column: Enhanced image and process */}
//           <div className="lg:col-span-6 space-y-20">
//             {/* Elegant image presentation */}
//             <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 group">
//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-transparent to-transparent dark:from-emerald-900/20 dark:via-transparent dark:to-transparent opacity-80 transition-opacity duration-300 pointer-events-none"></div>
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 to-emerald-500 dark:from-emerald-600 dark:to-emerald-400"></div>
//               <div className="p-3 md:p-4">
//                 <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
//                   <Image
//                     src="/images/memorial-place.png"
//                     alt={t.memorial.imageAlt}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 600px"
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none opacity-60"></div>
//                 </div>
//               </div>
//               <div className="p-6 md:p-8 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
//                 <p className="text-lg md:text-xl font-serif text-gray-900 dark:text-white leading-relaxed">
//                   {t.memorial.imageCaption}
//                 </p>
//               </div>
//             </div>

//             {/* Refined process section */}
//             <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
//               <div className="p-6 md:p-10">
//                 <div className="flex items-center mb-10">
//                   <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center border border-emerald-200 dark:border-emerald-700 shadow-sm">
//                     <svg
//                       className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12 12 0 0 1 21.582 7.96l-2.162.405a1.5 1.5 0 0 0-1.147 1.168L18 10.5"
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="ml-5 text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">
//                     {t.process.title}
//                   </h3>
//                 </div>

//                 <div className="space-y-10">
//                   {t.process.steps.map((step, index) => (
//                     <div key={index} className="relative">
//                       {/* Connector line between steps */}
//                       {index < t.process.steps.length - 1 && (
//                         <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-emerald-300 to-emerald-100 dark:from-emerald-700 dark:to-emerald-900/30"></div>
//                       )}

//                       <div className="flex items-start">
//                         <div className="flex-shrink-0">
//                           <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/40 dark:to-gray-800 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-800 shadow-md">
//                             {index + 1}
//                           </div>
//                         </div>
//                         <div className="ml-6 pt-1">
//                           <h4 className="text-xl md:text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">
//                             {step.title}
//                           </h4>
//                           <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                             {step.description}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right column: Values and CTA with refinements */}
//           <div className="lg:col-span-6 space-y-20">
//             {/* Enhanced values section */}
//             <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
//               <div className="p-6 md:p-10">
//                 <div className="flex items-center mb-10">
//                   <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center border border-emerald-200 dark:border-emerald-700 shadow-sm">
//                     <svg
//                       className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="ml-5 text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">
//                     {t.memorial.valuesTitle}
//                   </h3>
//                 </div>

//                 <div className="space-y-6">
//                   {features.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="group relative rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
//                     >
//                       {/* Elegant background styling */}
//                       <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/70 border border-gray-100 dark:border-gray-700 group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-colors duration-300"></div>

//                       {/* Feature content */}
//                       <div className="relative flex items-start">
//                         <div className="flex-shrink-0 mr-5">
//                           <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shadow-md border border-emerald-200 dark:border-emerald-800 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors duration-300">
//                             <CheckIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
//                           </div>
//                         </div>
//                         <div>
//                           <h4 className="text-xl md:text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">
//                             {feature.title}
//                           </h4>
//                           <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
//                             {feature.description}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Elegant CTA section */}
//             <div className="relative rounded-xl overflow-hidden shadow-lg border border-emerald-100 dark:border-emerald-900/30">
//               {/* Refined background styling */}
//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-90"></div>
//               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 dark:bg-emerald-900/30 rounded-full transform translate-x-16 -translate-y-16 opacity-60"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full transform -translate-x-8 translate-y-8 opacity-60"></div>

//               {/* CTA content */}
//               <div className="relative p-8 md:p-12">
//                 <div className="flex flex-col space-y-8 md:space-y-10">
//                   <div>
//                     <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
//                       {t.memorial.ctaTitle}
//                     </h3>
//                     <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
//                       {t.memorial.ctaText}
//                     </p>
//                   </div>

//                   <div className="flex justify-start">
//                     <Button
//                       href="/contact"
//                       variant="primary"
//                       size="lg"
//                       className="text-base md:text-lg px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
//                     >
//                       {t.memorial.ctaButton}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Elegant bottom border */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
//     </div>
//   );
// }
