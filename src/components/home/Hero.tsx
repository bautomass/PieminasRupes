"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const clipPathValue = "polygon(0 0, 100% 0, 100% 85%, 0 100%)";

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ clipPath: clipPathValue }}
    >
      {/* Background image with dynamic overlay */}
      <motion.div
        className="absolute inset-0 z-0 h-full w-full"
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Memorial Garden"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
          quality={100}
        />
        {/* Angular gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent"></div>
      </motion.div>

      {/* Angled layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-950/80 to-transparent"
          style={{ clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0% 100%)" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/30 to-transparent"
          style={{ clipPath: "polygon(0 40%, 100% 10%, 100% 100%, 0% 100%)" }}
        ></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full">
        {/* Left content column */}
        <div className="flex h-full w-full flex-col justify-center p-8 lg:pl-24 lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center">
              <div className="h-[3px] w-12 rounded-full bg-emerald-400 mr-4"></div>
              <span className="text-sm font-medium uppercase tracking-widest text-emerald-300">
                PiemiņasRūpes
              </span>
            </div>

            <h1 className="mb-6 font-serif text-5xl font-bold tracking-wide text-white drop-shadow-md md:text-6xl">
              {t.hero.title}
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-sm">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-emerald-600 px-8 py-4 text-base font-medium shadow-lg hover:bg-emerald-700"
              >
                {t.hero.cta}
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white/30 px-8 py-4 text-base font-medium text-white backdrop-blur-sm hover:bg-white/10"
              >
                {t.hero.secondaryLink}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right floating element */}
        <div className="hidden lg:flex items-center justify-center w-2/5 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-24 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/10 to-emerald-800/10 border border-emerald-400/20 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-center p-12"
            >
              <div className="mb-4 flex justify-center">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-emerald-500/30 backdrop-blur-md border border-emerald-500/50">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                {t.why.respect.title}
              </h3>
              <p className="text-white/80 text-sm line-clamp-2">
                {t.why.respect.description.substring(0, 80)}...
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useLanguage } from "@/context/LanguageContext";
// import Button from "@/components/ui/Button";
// import { translations } from "@/lib/translations";

// export default function Hero() {
//   const { language } = useLanguage();
//   const t = translations[language as keyof typeof translations];
//   const sectionRef = useRef<HTMLElement>(null);

//   // Subtle parallax effect
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 80]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen w-full overflow-hidden"
//     >
//       {/* Background image with gradient overlay */}
//       <motion.div
//         className="absolute inset-0 z-0 h-full w-full"
//         style={{ y: backgroundY }}
//       >
//         <Image
//           src="/images/hero-bg.png"
//           alt="Memorial Garden"
//           fill
//           priority
//           sizes="100vw"
//           className="h-full w-full object-cover object-center"
//           quality={100}
//         />
//         {/* Cinematic gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
//       </motion.div>

//       {/* Two column layout */}
//       <div className="relative z-10 grid h-full w-full grid-cols-1 lg:grid-cols-5">
//         {/* Left column - Main content */}
//         <div className="col-span-3 flex h-full flex-col justify-center px-8 md:px-16 lg:px-24">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             <div className="mb-2 inline-block overflow-hidden">
//               <motion.span
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.1 }}
//                 className="block text-sm font-medium uppercase tracking-widest text-emerald-400"
//               >
//                 PiemiņasRūpes
//               </motion.span>
//             </div>

//             <div className="overflow-hidden">
//               <motion.h1
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="mb-4 block font-serif text-4xl font-bold tracking-wide text-white drop-shadow-md md:text-5xl lg:text-6xl"
//               >
//                 {t.hero.title}
//               </motion.h1>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, width: 0 }}
//               animate={{ opacity: 1, width: "100px" }}
//               transition={{ duration: 1, delay: 0.6 }}
//               className="mb-6 h-[2px] bg-emerald-400"
//             />

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.7 }}
//               className="mb-8 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-sm"
//             >
//               {t.hero.subtitle}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.9 }}
//               className="flex flex-wrap gap-4"
//             >
//               <Button
//                 href="/contact"
//                 variant="primary"
//                 size="lg"
//                 className="bg-emerald-600 px-8 py-4 text-base font-medium shadow-lg hover:bg-emerald-700"
//               >
//                 {t.hero.cta}
//                 <svg
//                   className="ml-2 inline-block h-5 w-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </Button>

//               <Button
//                 href="/services"
//                 variant="outline"
//                 size="lg"
//                 className="border-white/80 px-8 py-4 text-base font-medium text-white backdrop-blur-sm hover:bg-white/10"
//               >
//                 {t.hero.secondaryLink}
//               </Button>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Right column - Feature highlights */}
//         <div className="col-span-2 hidden lg:flex items-center p-16">
//           <div className="grid grid-cols-1 gap-6">
//             {[
//               { title: t.why.respect.title, desc: t.why.respect.description },
//               { title: t.why.quality.title, desc: t.why.quality.description },
//               {
//                 title: t.why.individual.title,
//                 desc: t.why.individual.description,
//               },
//             ].map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7, delay: 0.4 + i * 0.2 }}
//                 className="flex items-center gap-4 rounded-lg bg-white/5 backdrop-blur-sm p-4 border border-white/10"
//               >
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30">
//                   <svg
//                     className="h-5 w-5 text-emerald-400"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <path
//                       d="M5 13l4 4L19 7"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-white font-medium">{feature.title}</h3>
//                   <p className="text-sm text-white/70 line-clamp-1">
//                     {feature.desc.substring(0, 60)}...
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer transition-opacity duration-300 hover:opacity-90"
//         onClick={() =>
//           window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
//         }
//       >
//         <div className="flex flex-col items-center">
//           <span className="mb-2 text-sm font-medium text-white opacity-90">
//             {t.hero.scrollText}
//           </span>
//           <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/20 backdrop-blur-sm transition-colors duration-300 animate-pulse">
//             <svg
//               className="h-5 w-5 text-white"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
