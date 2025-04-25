"use client";
import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
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

// TypeScript interfaces
interface TranslationItem {
  home: string;
  services: string;
  pricing: string;
  about: string;
  faq: string;
  contact: string;
  contactButton: string;
  contactButtonFull: string;
  changeLanguage: string;
  openMenu: string;
  closeMenu: string;
  switchToLight: string;
  switchToDark: string;
  skipToContent: string;
}

interface Translations {
  lv: TranslationItem;
  en: TranslationItem;
  ru: TranslationItem;
  de: TranslationItem;
  [key: string]: TranslationItem;
}

interface Language {
  code: string;
  name: string;
}

interface ThemeToggleButtonProps {
  theme: string;
  toggleTheme: () => void;
  scrolled: boolean;
  t: TranslationItem;
}

interface LanguageButtonProps {
  toggleLangMenu: () => void;
  scrolled: boolean;
  language: string;
  t: TranslationItem;
}

interface MobileMenuButtonProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  scrolled: boolean;
  t: TranslationItem;
}

interface NavLinkProps {
  href: string;
  label: string;
  pathname: string;
  scrolled: boolean;
  onClick?: () => void;
}

interface NavItem {
  href: string;
  label: string;
}

// Language strings for the navbar
const translations: Translations = {
  lv: {
    home: "Sākums",
    services: "Pakalpojumi",
    pricing: "Cenas",
    about: "Par mums",
    faq: "BUJ",
    contact: "Kontakti",
    contactButton: "Sazināties",
    contactButtonFull: "Sazināties ar mums",
    changeLanguage: "Mainīt valodu",
    openMenu: "Atvērt izvēlni",
    closeMenu: "Aizvērt izvēlni",
    switchToLight: "Pārslēgties uz gaišo režīmu",
    switchToDark: "Pārslēgties uz tumšo režīmu",
    skipToContent: "Pāriet uz saturu",
  },
  en: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    contactButton: "Contact Us",
    contactButtonFull: "Contact Us",
    changeLanguage: "Change language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    skipToContent: "Skip to content",
  },
  ru: {
    home: "Главная",
    services: "Услуги",
    pricing: "Цены",
    about: "О нас",
    faq: "ЧЗВ",
    contact: "Контакты",
    contactButton: "Связаться",
    contactButtonFull: "Связаться с нами",
    changeLanguage: "Изменить язык",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    switchToLight: "Включить светлый режим",
    switchToDark: "Включить темный режим",
    skipToContent: "Перейти к содержанию",
  },
  de: {
    home: "Startseite",
    services: "Dienstleistungen",
    pricing: "Preise",
    about: "Über uns",
    faq: "FAQ",
    contact: "Kontakt",
    contactButton: "Kontakt",
    contactButtonFull: "Kontaktieren Sie uns",
    changeLanguage: "Sprache ändern",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    switchToLight: "Zum hellen Modus wechseln",
    switchToDark: "Zum dunklen Modus wechseln",
    skipToContent: "Zum Inhalt springen",
  },
};

const languages: Language[] = [
  { code: "lv", name: "Latviešu" },
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
  { code: "de", name: "Deutsch" },
];

// Memoized button components for better performance
const ThemeToggleButton = memo(
  ({ theme, toggleTheme, scrolled, t }: ThemeToggleButtonProps) => (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        scrolled
          ? "hover:bg-gray-100 dark:hover:bg-gray-800"
          : "hover:bg-gray-200/30 dark:hover:bg-gray-800/30"
      }`}
      aria-label={theme === "dark" ? t.switchToLight : t.switchToDark}
      whileTap={{ scale: 0.9 }}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-gray-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-700" />
      )}
    </motion.button>
  )
);

ThemeToggleButton.displayName = "ThemeToggleButton";

const LanguageButton = memo(
  ({ toggleLangMenu, scrolled, language, t }: LanguageButtonProps) => (
    <motion.button
      onClick={toggleLangMenu}
      className={`p-2 rounded-full flex items-center transition-colors ${
        scrolled
          ? "hover:bg-gray-100 dark:hover:bg-gray-800"
          : "hover:bg-gray-200/30 dark:hover:bg-gray-800/30"
      }`}
      aria-label={t.changeLanguage}
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
  )
);

LanguageButton.displayName = "LanguageButton";

const MobileMenuButton = memo(
  ({ toggleMenu, isMenuOpen, scrolled, t }: MobileMenuButtonProps) => (
    <motion.button
      onClick={toggleMenu}
      className={`md:hidden p-2 rounded-full transition-colors ${
        scrolled
          ? "hover:bg-gray-100 dark:hover:bg-gray-800"
          : "hover:bg-gray-200/30 dark:hover:bg-gray-800/30"
      }`}
      aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
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
  )
);

MobileMenuButton.displayName = "MobileMenuButton";

// NavLink component for consistent styling
const NavLink = memo(
  ({ href, label, pathname, scrolled, onClick }: NavLinkProps) => (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium tracking-wide relative overflow-hidden group ${
        pathname === href
          ? "text-emerald-600 dark:text-emerald-400"
          : scrolled
            ? "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            : "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
      }`}
      aria-current={pathname === href ? "page" : undefined}
    >
      {label}
      <span
        className={`absolute left-0 bottom-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300 ease-out ${
          pathname === href
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100"
        }`}
        aria-hidden="true"
      ></span>
    </Link>
  )
);

NavLink.displayName = "NavLink";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();

  const t = translations[language as keyof typeof translations];

  // Set mounted state after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Debounced scroll handler with requestAnimationFrame for better performance
  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Check initial scroll position
    handleScroll();

    // Passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, isMounted]);

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
    if (!isMounted) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isLangMenuOpen && !target.closest("[data-lang-menu]")) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLangMenuOpen, isMounted]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    if (!isMounted) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isLangMenuOpen) setIsLangMenuOpen(false);
        if (isMenuOpen) setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isLangMenuOpen, isMenuOpen, isMounted]);

  const navLinks: NavItem[] = [
    { href: "/", label: t.home },
    { href: "/services", label: t.services },
    { href: "/pricing", label: t.pricing },
    { href: "/about", label: t.about },
    { href: "/faq", label: t.faq }, // Added FAQ page to navigation
    { href: "/contact", label: t.contact },
  ];

  // Logo path selection based on theme
  const logoPath =
    theme === "dark" ? "/images/logo_dark_theme.svg" : "/images/logo_dark.svg";

  // Server-side and initial client render - simplified version
  if (!isMounted) {
    return (
      <header
        className="fixed w-full z-50 bg-white dark:bg-gray-900 py-5"
        role="banner"
      >
        <div className="mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo (minimal version) */}
            <Link
              href="/"
              className="flex items-center text-xl font-serif font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <img
                src="/images/logo_dark.svg"
                alt="SkyGarden Logo"
                className="w-70 h-20 mr-1"
              />
            </Link>

            {/* Static placeholders for nav and controls */}
            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {/* Placeholder for nav links */}
              </div>
              <div className="flex items-center space-x-1 sm:space-x-3">
                {/* Placeholder for controls */}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Full client-side render with all interactive elements
  return (
    <>
      {/* Skip to content link - only rendered on client */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-black focus:outline-emerald-600"
      >
        {t.skipToContent}
      </a>

      <header
        className={`fixed w-full z-50 transition-all duration-500 bg-white dark:bg-gray-900 ${
          scrolled ? "py-3 shadow-md" : "py-5"
        }`}
        role="banner"
      >
        <div
          className={`mx-auto px-4 sm:px-6 transition-all duration-300 ${
            scrolled ? "max-w-6xl" : "max-w-7xl"
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo - now using external SVG files based on theme */}
            <Link
              href="/"
              className={`flex items-center text-xl font-serif font-bold tracking-tight transition-all duration-300 ${
                scrolled
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-gray-900 dark:text-white"
              }`}
              aria-label="SkyGarden Home"
            >
              <img
                src={logoPath}
                alt="SkyGarden Logo"
                className="w-50 h-20 mr-1"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-6 lg:space-x-8"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                  scrolled={scrolled}
                />
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-1 sm:space-x-3">
              {/* Theme Toggle */}
              <ThemeToggleButton
                theme={theme}
                toggleTheme={toggleTheme}
                scrolled={scrolled}
                t={t}
              />

              {/* Language Selector */}
              <div className="relative" data-lang-menu>
                <LanguageButton
                  toggleLangMenu={toggleLangMenu}
                  scrolled={scrolled}
                  language={language}
                  t={t}
                />

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-100 dark:border-gray-700"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="language-menu-button"
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
                          role="menuitem"
                          aria-current={
                            language === lang.code ? "true" : "false"
                          }
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
                aria-label={t.contactButtonFull}
              >
                {t.contactButton}
              </Link>

              {/* Mobile Menu Button */}
              <MobileMenuButton
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                scrolled={scrolled}
                t={t}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu - with optimized animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
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
              role="navigation"
              aria-label="Mobile Navigation"
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
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ type: "tween" }}
                    >
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        className={`block py-2 text-base font-medium tracking-wide border-b border-gray-100 dark:border-gray-700 ${
                          pathname === link.href
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                        aria-current={
                          pathname === link.href ? "page" : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ type: "tween" }}
                    className="pt-4"
                  >
                    <Link
                      href="/contact"
                      onClick={toggleMenu}
                      className="w-full block py-3 text-center text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors"
                      aria-label={t.contactButtonFull}
                    >
                      {t.contactButtonFull}
                    </Link>
                  </motion.div>
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
