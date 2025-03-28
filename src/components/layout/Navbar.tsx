"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SunIcon,
  MoonIcon,
  MenuIcon,
  XIcon,
  GlobeIcon,
} from "@/components/Icons";
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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const t = translations[language as keyof typeof translations];

  // Debounced scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    // Check initial scroll position
    handleScroll();

    // Passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
    if (isLangMenuOpen) setIsLangMenuOpen(false);
  }, [isLangMenuOpen]);

  const toggleLangMenu = useCallback(() => {
    setIsLangMenuOpen((prev) => !prev);
    if (isMenuOpen) setIsMenuOpen(false);
  }, [isMenuOpen]);

  const handleLanguageChange = useCallback(
    (lang: string) => {
      setLanguage(lang);
      setIsLangMenuOpen(false);
    },
    [setLanguage]
  );

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isLangMenuOpen && !target.closest("[data-lang-menu]")) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLangMenuOpen]);

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/services", label: t.services },
    { href: "/about", label: t.about },
    { href: "/contact", label: t.contact },
    { href: "/pricing", label: t.pricing },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 bg-white dark:bg-gray-900 ${
        scrolled ? "py-3 shadow-md" : "py-5"
      }`}
    >
      <div
        className={`mx-auto px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "max-w-6xl" : "max-w-7xl"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center text-xl font-serif font-bold tracking-tight transition-all duration-300 ${
              scrolled
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-gray-900 dark:text-white"
            }`}
          >
            <svg
              className="w-8 h-8 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.99V5.5M5.99 12H2.48M21.5 12H18M12 18.5V22.01M16.05 7.95L18.53 5.47M7.95 7.95L5.47 5.47M7.95 16.05L5.47 18.53M16.05 16.05L18.53 18.53"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            SkyGarden
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide relative overflow-hidden group ${
                  pathname === link.href
                    ? "text-emerald-600 dark:text-emerald-400"
                    : scrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      : "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300 ease-out ${
                    pathname === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "hover:bg-gray-200/30 dark:hover:bg-gray-800/30"
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
            <div className="relative" data-lang-menu>
              <motion.button
                onClick={toggleLangMenu}
                className={`p-2 rounded-full flex items-center transition-colors ${
                  scrolled
                    ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "hover:bg-gray-200/30 dark:hover:bg-gray-800/30"
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
                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-100 dark:border-gray-700"
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
                            ? "bg-gray-50 dark:bg-gray-700 text-emerald-600 dark:text-emerald-400"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
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
                  : "bg-white/90 text-emerald-700 hover:bg-white border border-transparent"
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
                  ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "hover:bg-gray-200/30 dark:hover:bg-gray-800/30"
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

      {/* Mobile Menu - with optimized animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-800 shadow-inner border-t border-gray-100 dark:border-gray-700"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
          >
            <div className="mx-auto px-4 py-6">
              <motion.nav
                className="flex flex-col space-y-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
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
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    onClick={toggleMenu}
                    className="w-full block py-3 text-center text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors"
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
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
