// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon, MenuIcon, XIcon, GlobeIcon } from "../Icons";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

// Language strings for the navbar
const translations = {
  lv: {
    home: "Sākums",
    services: "Pakalpojumi",
    about: "Par mums",
    contact: "Kontakti",
    pricing: "Cenas",
  },
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    pricing: "Pricing",
  },
  ru: {
    home: "Главная",
    services: "Услуги",
    about: "О нас",
    contact: "Контакты",
    pricing: "Цены",
  },
  de: {
    home: "Startseite",
    services: "Dienstleistungen",
    about: "Über uns",
    contact: "Kontakt",
    pricing: "Preise",
  },
};

const languages = [
  { code: "lv", name: "Latviešu" },
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
  { code: "de", name: "Deutsch" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isLangMenuOpen) setIsLangMenuOpen(false);
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/services", label: t.services },
    { href: "/about", label: t.about },
    { href: "/contact", label: t.contact },
    { href: "/pricing", label: t.pricing },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div
        className={`container mx-auto px-4 transition-all duration-500 ${
          scrolled ? "max-w-6xl" : "max-w-7xl"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className={`text-xl font-serif font-bold tracking-tighter transition-all duration-300 ${
              scrolled
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-gray-900 dark:text-white"
            }`}
          >
            PiemiņasRūpes
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide relative overflow-hidden group transition-colors ${
                  pathname === link.href
                    ? "text-emerald-600 dark:text-emerald-400"
                    : scrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300 ease-out ${
                    pathname === link.href ? "scale-x-100" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled
                  ? "hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
              }`}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-gray-300" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </motion.button>

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={toggleLangMenu}
                className={`p-2 rounded-full flex items-center transition-colors ${
                  scrolled
                    ? "hover:bg-gray-200 dark:hover:bg-gray-700"
                    : "hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
                }`}
                aria-label="Change language"
                whileTap={{ scale: 0.95 }}
              >
                <GlobeIcon
                  className={`h-5 w-5 ${
                    scrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                />
                <span
                  className={`ml-1 text-sm font-medium hidden sm:inline ${
                    scrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {language.toUpperCase()}
                </span>
              </motion.button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          language === lang.code
                            ? "bg-gray-100 dark:bg-gray-700 text-emerald-600 dark:text-emerald-400"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button (desktop) */}
            <Link
              href="/contact"
              className={`hidden lg:inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                scrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-white/90 text-emerald-700 hover:bg-white"
              }`}
            >
              {language === "lv"
                ? "Sazināties"
                : language === "en"
                ? "Contact Us"
                : language === "ru"
                ? "Связаться"
                : "Kontakt"}
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-full transition-colors ${
                scrolled
                  ? "hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "hover:bg-gray-200/50 dark:hover:bg-gray-700/50"
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <XIcon
                  className={`h-6 w-6 ${
                    scrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                />
              ) : (
                <MenuIcon
                  className={`h-6 w-6 ${
                    scrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 text-base font-medium tracking-wide border-b border-gray-100 dark:border-gray-700 ${
                        pathname === link.href
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full block py-3 text-center text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700"
                  >
                    {language === "lv"
                      ? "Sazināties ar mums"
                      : language === "en"
                      ? "Contact Us"
                      : language === "ru"
                      ? "Связаться с нами"
                      : "Kontaktieren Sie uns"}
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

// // components/Navbar.tsx
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { SunIcon, MoonIcon, MenuIcon, XIcon, GlobeIcon } from "./Icons";
// import { useTheme } from "@/context/ThemeContext";
// import { useLanguage } from "@/context/LanguageContext";

// // Language strings
// const translations = {
//   lv: {
//     home: "Sākums",
//     services: "Pakalpojumi",
//     about: "Par mums",
//     contact: "Kontakti",
//     pricing: "Cenas",
//   },
//   en: {
//     home: "Home",
//     services: "Services",
//     about: "About",
//     contact: "Contact",
//     pricing: "Pricing",
//   },
//   ru: {
//     home: "Главная",
//     services: "Услуги",
//     about: "О нас",
//     contact: "Контакты",
//     pricing: "Цены",
//   },
//   de: {
//     home: "Startseite",
//     services: "Dienstleistungen",
//     about: "Über uns",
//     contact: "Kontakt",
//     pricing: "Preise",
//   },
// };

// const languages = [
//   { code: "lv", name: "Latviešu" },
//   { code: "en", name: "English" },
//   { code: "ru", name: "Русский" },
//   { code: "de", name: "Deutsch" },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { theme, toggleTheme } = useTheme();
//   const { language, setLanguage } = useLanguage();
//   const pathname = usePathname();

//   const t = translations[language as keyof typeof translations];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (isLangMenuOpen) setIsLangMenuOpen(false);
//   };

//   const toggleLangMenu = () => {
//     setIsLangMenuOpen(!isLangMenuOpen);
//     if (isMenuOpen) setIsMenuOpen(false);
//   };

//   const handleLanguageChange = (lang: string) => {
//     setLanguage(lang);
//     setIsLangMenuOpen(false);
//   };

//   const navLinks = [
//     { href: "/", label: t.home },
//     { href: "/services", label: t.services },
//     { href: "/about", label: t.about },
//     { href: "/contact", label: t.contact },
//     { href: "/pricing", label: t.pricing },
//   ];

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="text-xl font-serif font-bold tracking-tighter text-gray-900 dark:text-white"
//           >
//             PiemiņasRūpes
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-sm font-medium tracking-wide hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors ${
//                   pathname === link.href
//                     ? "text-emerald-600 dark:text-emerald-400"
//                     : "text-gray-700 dark:text-gray-300"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Controls */}
//           <div className="flex items-center space-x-4">
//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               aria-label={
//                 theme === "dark"
//                   ? "Switch to light mode"
//                   : "Switch to dark mode"
//               }
//             >
//               {theme === "dark" ? (
//                 <SunIcon className="h-5 w-5 text-gray-300" />
//               ) : (
//                 <MoonIcon className="h-5 w-5 text-gray-700" />
//               )}
//             </button>

//             {/* Language Selector */}
//             <div className="relative">
//               <button
//                 onClick={toggleLangMenu}
//                 className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
//                 aria-label="Change language"
//               >
//                 <GlobeIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
//                 <span className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">
//                   {language.toUpperCase()}
//                 </span>
//               </button>

//               {isLangMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
//                   {languages.map((lang) => (
//                     <button
//                       key={lang.code}
//                       onClick={() => handleLanguageChange(lang.code)}
//                       className={`block w-full text-left px-4 py-2 text-sm ${
//                         language === lang.code
//                           ? "bg-gray-100 dark:bg-gray-700 text-emerald-600 dark:text-emerald-400"
//                           : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//                       }`}
//                     >
//                       {lang.name}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={toggleMenu}
//               className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//             >
//               {isMenuOpen ? (
//                 <XIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
//               ) : (
//                 <MenuIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
//           <div className="container mx-auto px-4 py-4">
//             <nav className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`py-2 text-sm font-medium tracking-wide ${
//                     pathname === link.href
//                       ? "text-emerald-600 dark:text-emerald-400"
//                       : "text-gray-700 dark:text-gray-300"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
