"use client";

import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import {
  CheckIcon,
  CalendarIcon,
  SearchIcon,
  InfoIcon,
  HeartIcon,
} from "@/components/Icons";
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Enhanced header section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="inline-block bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 font-medium text-sm uppercase px-4 py-2 rounded-full mb-2">
              {t.memorial.preTitle || "Our Approach"}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
            {t.memorial.title}
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
          <p className="mt-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {t.memorial.subtitle}
          </p>
        </div>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column: Service Information & Values */}
          <div className="space-y-10">
            {/* Improved Service Ordering Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-800 border-b border-emerald-100 dark:border-emerald-800/30 p-6">
                <div className="flex items-center">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-sm mr-4">
                    <CalendarIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                    {t.memorial.orderTitle}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shadow-md">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          1
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg">
                        {t.memorial.orderText}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shadow-md">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          2
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                        {t.memorial.orderExtra}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Improved Grave Search Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-800 border-b border-emerald-100 dark:border-emerald-800/30 p-6">
                <div className="flex items-center">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-sm mr-4">
                    <SearchIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                    {t.memorial.graveSearchTitle}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                  {t.memorial.graveSearchText}
                </p>

                <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <InfoIcon className="w-5 h-5 text-amber-500" />
                    </div>
                    <p className="ml-4 text-amber-700 dark:text-amber-300 font-medium">
                      {t.memorial.graveSearchNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elegant CTA section */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-emerald-100 dark:border-emerald-900/30 transform transition-all duration-300 hover:shadow-xl">
              {/* Refined background styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-90"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100 dark:bg-emerald-900/30 rounded-full transform translate-x-20 -translate-y-20 opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-100 dark:bg-emerald-900/30 rounded-full transform -translate-x-10 translate-y-10 opacity-60"></div>

              {/* CTA content */}
              <div className="relative p-8 md:p-10">
                <div className="flex flex-col space-y-8">
                  <div className="flex items-start mb-2">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md mr-4">
                      <HeartIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">
                      {t.memorial.ctaTitle}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t.memorial.ctaText}
                  </p>

                  <div className="flex justify-start pt-4">
                    <Button
                      href="/contact"
                      variant="primary"
                      size="lg"
                      className="text-base px-8 py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {t.memorial.ctaButton}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Values and Pricing */}
          <div className="space-y-10">
            {/* Enhanced values section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="p-8">
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
                      className="group relative rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
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
                          <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-3">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-full mr-4 shadow-sm">
                    {/* Using SVG directly instead of CoinIcon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                    {t.serviceDetails.pricing.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {t.serviceDetails.pricing.sizes.map((size, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-5 group hover:bg-gray-50 dark:hover:bg-gray-800/80 p-2 rounded-lg transition-colors duration-200"
                    >
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                          {size.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {size.size}
                        </p>
                      </div>
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-lg">
                        {size.price}€
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm italic bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                  {t.serviceDetails.pricing.note}
                </p>
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
// import { useLanguage } from "@/context/LanguageContext";
// import { translations } from "@/lib/translations";
// import {
//   CheckIcon,
//   CalendarIcon,
//   MapPinIcon,
//   SearchIcon,
//   InfoIcon,
// } from "@/components/Icons";
// import Button from "@/components/ui/Button";

// export default function MemorialCare() {
//   const { language } = useLanguage();
//   const t = translations[language as keyof typeof translations];
//   const sectionRef = useRef(null);

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
//         {/* Enhanced header section */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
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

//         {/* Service Areas - Improved visual presentation */}
//         <div className="mb-16 bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-emerald-100 dark:border-emerald-800/30">
//           <div className="flex items-center mb-6">
//             <div className="bg-emerald-100 dark:bg-emerald-800/40 p-2 rounded-full mr-4">
//               <MapPinIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
//             </div>
//             <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
//               {t.memorial.serviceArea}
//             </h3>
//           </div>

//           <div className="flex flex-wrap gap-4">
//             {t.memorial.serviceAreas.map((area, index) => (
//               <div
//                 key={index}
//                 className="flex items-center bg-white dark:bg-gray-700 px-5 py-3 rounded-full shadow-sm border border-gray-100 dark:border-gray-600"
//               >
//                 <div className="w-3 h-3 rounded-full bg-emerald-500 mr-3"></div>
//                 <span className="text-gray-700 dark:text-gray-200 font-medium">
//                   {area}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Improved Service Ordering Information */}
//         <div className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
//           <div className="bg-emerald-50 dark:bg-emerald-900/20 border-b border-emerald-100 dark:border-emerald-800/30 p-6">
//             <div className="flex items-center">
//               <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-sm mr-4">
//                 <CalendarIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
//               </div>
//               <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
//                 {t.memorial.orderTitle}
//               </h3>
//             </div>
//           </div>

//           <div className="p-6 md:p-8">
//             <div className="space-y-6">
//               <div className="flex gap-4">
//                 <div className="flex-shrink-0 mt-1">
//                   <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
//                     <span className="text-emerald-600 dark:text-emerald-400 font-bold">
//                       1
//                     </span>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-gray-700 dark:text-gray-300 text-lg">
//                     {t.memorial.orderText}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="flex-shrink-0 mt-1">
//                   <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
//                     <span className="text-emerald-600 dark:text-emerald-400 font-bold">
//                       2
//                     </span>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-gray-700 dark:text-gray-300 text-lg italic">
//                     {t.memorial.orderExtra}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Improved Grave Search Section */}
//         <div className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
//           <div className="bg-emerald-50 dark:bg-emerald-900/20 border-b border-emerald-100 dark:border-emerald-800/30 p-6">
//             <div className="flex items-center">
//               <div className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-sm mr-4">
//                 <SearchIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
//               </div>
//               <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
//                 {t.memorial.graveSearchTitle}
//               </h3>
//             </div>
//           </div>

//           <div className="p-6 md:p-8">
//             <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
//               {t.memorial.graveSearchText}
//             </p>

//             <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
//               <div className="flex">
//                 <div className="flex-shrink-0">
//                   <InfoIcon className="w-5 h-5 text-amber-500" />
//                 </div>
//                 <p className="ml-3 text-amber-700 dark:text-amber-300 font-medium">
//                   {t.memorial.graveSearchNote}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main content grid with refinements */}
//         <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
//           {/* Left column: Values */}
//           <div className="lg:col-span-6">
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
//           </div>

//           {/* Right column: Pricing and CTA */}
//           <div className="lg:col-span-6 space-y-16">
//             {/* Pricing section */}
//             <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
//               <div className="p-6 md:p-10">
//                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">
//                   {t.serviceDetails.pricing.title}
//                 </h3>

//                 <div className="space-y-6">
//                   {t.serviceDetails.pricing.sizes.map((size, index) => (
//                     <div
//                       key={index}
//                       className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-4"
//                     >
//                       <div>
//                         <h4 className="font-bold text-gray-900 dark:text-white text-lg">
//                           {size.title}
//                         </h4>
//                         <p className="text-gray-600 dark:text-gray-400">
//                           {size.size}
//                         </p>
//                       </div>
//                       <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
//                         {size.price}€
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <p className="mt-6 text-gray-500 dark:text-gray-400 text-sm italic">
//                   {t.serviceDetails.pricing.note}
//                 </p>
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
