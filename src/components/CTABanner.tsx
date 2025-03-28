import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRightIcon } from "@/components/Icons";
// Removed unused Button import

interface CTABannerProps {
  variant?: "primary" | "secondary" | "subtle";
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export default function CTABanner({
  variant = "primary",
  title,
  description,
  buttonText,
  buttonLink = "/contact",
  className = "",
}: CTABannerProps) {
  const { language } = useLanguage();

  // Default text based on language
  const defaultTitle =
    language === "lv"
      ? "Vai esat gatavi sākt?"
      : language === "en"
        ? "Ready to get started?"
        : language === "ru"
          ? "Готовы начать?"
          : "Bereit anzufangen?";

  const defaultDescription =
    language === "lv"
      ? "Sazinieties ar mums, lai uzzinātu vairāk par mūsu pakalpojumiem un kā mēs varam palīdzēt jums nodrošināt cienīgu piemiņu jūsu tuviniekiem."
      : language === "en"
        ? "Contact us to learn more about our services and how we can help you ensure a dignified memory for your loved ones."
        : language === "ru"
          ? "Свяжитесь с нами, чтобы узнать больше о наших услугах и о том, как мы можем помочь вам обеспечить достойную память о ваших близких."
          : "Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren und wie wir Ihnen helfen können, ein würdiges Andenken an Ihre Lieben zu gewährleisten.";

  const defaultButtonText =
    language === "lv"
      ? "Sazināties ar mums"
      : language === "en"
        ? "Contact Us"
        : language === "ru"
          ? "Связаться с нами"
          : "Kontaktieren Sie uns";

  // Use provided text or fallback to defaults
  const displayTitle = title || defaultTitle;
  const displayDescription = description || defaultDescription;
  const displayButtonText = buttonText || defaultButtonText;

  // Style variants
  const variantStyles = {
    primary: "bg-emerald-600 dark:bg-emerald-700 text-white",
    secondary:
      "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
    subtle:
      "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30",
  };

  // Button variants
  const buttonVariants = {
    primary: "bg-white text-emerald-700 hover:bg-gray-100",
    secondary:
      "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600",
    subtle:
      "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600",
  };

  // Text color for description
  const descriptionColor = {
    primary: "text-emerald-50",
    secondary: "text-gray-600 dark:text-gray-300",
    subtle: "text-gray-700 dark:text-gray-300",
  };

  return (
    <div
      className={`rounded-lg px-6 py-10 md:py-16 md:px-12 ${variantStyles[variant]} ${className}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-serif font-bold tracking-tight sm:text-3xl">
          {displayTitle}
        </h2>
        <p
          className={`max-w-2xl mx-auto mt-4 text-lg ${descriptionColor[variant]}`}
        >
          {displayDescription}
        </p>
        <div className="mt-8">
          <Link
            href={buttonLink}
            className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md shadow-md transition-colors duration-200 ${buttonVariants[variant]}`}
          >
            {displayButtonText}
            <ArrowRightIcon className="ml-2 -mr-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import Link from "next/link";
// import { useLanguage } from "@/context/LanguageContext";
// import { ArrowRightIcon } from "@/components/Icons";
// import Button from "@/components/ui/Button";

// interface CTABannerProps {
//   variant?: "primary" | "secondary" | "subtle";
//   title?: string;
//   description?: string;
//   buttonText?: string;
//   buttonLink?: string;
//   className?: string;
// }

// export default function CTABanner({
//   variant = "primary",
//   title,
//   description,
//   buttonText,
//   buttonLink = "/contact",
//   className = "",
// }: CTABannerProps) {
//   const { language } = useLanguage();

//   // Default text based on language
//   const defaultTitle =
//     language === "lv"
//       ? "Vai esat gatavi sākt?"
//       : language === "en"
//         ? "Ready to get started?"
//         : language === "ru"
//           ? "Готовы начать?"
//           : "Bereit anzufangen?";

//   const defaultDescription =
//     language === "lv"
//       ? "Sazinieties ar mums, lai uzzinātu vairāk par mūsu pakalpojumiem un kā mēs varam palīdzēt jums nodrošināt cienīgu piemiņu jūsu tuviniekiem."
//       : language === "en"
//         ? "Contact us to learn more about our services and how we can help you ensure a dignified memory for your loved ones."
//         : language === "ru"
//           ? "Свяжитесь с нами, чтобы узнать больше о наших услугах и о том, как мы можем помочь вам обеспечить достойную память о ваших близких."
//           : "Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren und wie wir Ihnen helfen können, ein würdiges Andenken an Ihre Lieben zu gewährleisten.";

//   const defaultButtonText =
//     language === "lv"
//       ? "Sazināties ar mums"
//       : language === "en"
//         ? "Contact Us"
//         : language === "ru"
//           ? "Связаться с нами"
//           : "Kontaktieren Sie uns";

//   // Use provided text or fallback to defaults
//   const displayTitle = title || defaultTitle;
//   const displayDescription = description || defaultDescription;
//   const displayButtonText = buttonText || defaultButtonText;

//   // Style variants
//   const variantStyles = {
//     primary: "bg-emerald-600 dark:bg-emerald-700 text-white",
//     secondary:
//       "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
//     subtle:
//       "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30",
//   };

//   // Button variants
//   const buttonVariants = {
//     primary: "bg-white text-emerald-700 hover:bg-gray-100",
//     secondary:
//       "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600",
//     subtle:
//       "bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600",
//   };

//   // Text color for description
//   const descriptionColor = {
//     primary: "text-emerald-50",
//     secondary: "text-gray-600 dark:text-gray-300",
//     subtle: "text-gray-700 dark:text-gray-300",
//   };

//   return (
//     <div
//       className={`rounded-lg px-6 py-10 md:py-16 md:px-12 ${variantStyles[variant]} ${className}`}
//     >
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-2xl font-serif font-bold tracking-tight sm:text-3xl">
//           {displayTitle}
//         </h2>
//         <p
//           className={`max-w-2xl mx-auto mt-4 text-lg ${descriptionColor[variant]}`}
//         >
//           {displayDescription}
//         </p>
//         <div className="mt-8">
//           <Link
//             href={buttonLink}
//             className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md shadow-md transition-colors duration-200 ${buttonVariants[variant]}`}
//           >
//             {displayButtonText}
//             <ArrowRightIcon className="ml-2 -mr-1 w-5 h-5" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
