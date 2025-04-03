"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { PhoneIcon, EmailIcon, LogoIcon, GlobeIcon } from "@/components/Icons";

export default function Footer() {
  const { language, setLanguage } = useLanguage();
  const phoneNumber = "+37129183370";
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    lv: {
      services: "Pakalpojumi",
      about: "Par mums",
      contact: "Kontakti",
      pricing: "Cenas",
      faq: "BUJ",
      terms: "Lietošanas noteikumi",
      privacy: "Privātuma politika",
      copyright: `© ${currentYear} SkyGarden. Visas tiesības aizsargātas.`,
      serviceAreas: "Apkalpojamās teritorijas",
      contactUs: "Sazināties ar mums",
      companyInfo: "Uzņēmuma informācija",
      bankDetails: "Bankas rekvizīti",
      whatsappContact: "Sazinies ar mums WhatsApp",
    },
    en: {
      services: "Services",
      about: "About",
      contact: "Contact",
      pricing: "Pricing",
      faq: "FAQ",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      copyright: `© ${currentYear} SkyGarden. All rights reserved.`,
      serviceAreas: "Service Areas",
      contactUs: "Contact Us",
      companyInfo: "Company Information",
      bankDetails: "Bank Details",
      whatsappContact: "Contact us on WhatsApp",
    },
    ru: {
      services: "Услуги",
      about: "О нас",
      contact: "Контакты",
      pricing: "Цены",
      faq: "ЧЗВ",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
      copyright: `© ${currentYear} SkyGarden. Все права защищены.`,
      serviceAreas: "Зоны обслуживания",
      contactUs: "Связаться с нами",
      companyInfo: "Информация о компании",
      bankDetails: "Банковские реквизиты",
      whatsappContact: "Свяжитесь с нами в WhatsApp",
    },
    de: {
      services: "Dienstleistungen",
      about: "Über uns",
      contact: "Kontakt",
      pricing: "Preise",
      faq: "FAQ",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutzrichtlinie",
      copyright: `© ${currentYear} SkyGarden. Alle Rechte vorbehalten.`,
      serviceAreas: "Servicegebiete",
      contactUs: "Kontaktieren Sie uns",
      companyInfo: "Unternehmensangaben",
      bankDetails: "Bankverbindung",
      whatsappContact: "Kontaktieren Sie uns über WhatsApp",
    },
  };

  const t = footerLinks[language as keyof typeof footerLinks];

  const languages = [
    { code: "lv", name: "Latviešu" },
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "de", name: "Deutsch" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Elegant top border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 sm:py-10 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Logo and Company Info */}
          <div className="text-center sm:text-left mx-auto sm:mx-0 w-full max-w-xs sm:max-w-none">
            <Link
              href="/"
              className="flex items-center text-2xl font-serif font-bold tracking-tight text-white mb-4 justify-center sm:justify-start"
            >
              <LogoIcon className="w-10 h-10 mr-2 text-emerald-400" />
              SkyGarden
            </Link>

            {/* Company Legal Information */}
            <div className="mb-4">
              <h4 className="text-white text-sm font-medium mb-2">
                {t.companyInfo}
              </h4>
              <ul className="text-gray-500 text-sm sm:text-xs space-y-2 sm:space-y-1">
                <li>SIA &quot;MARLIN&quot;</li>
                <li>Reģ. Nr.: 42103083865</li>
              </ul>
            </div>

            {/* Bank Details */}
            <div className="pt-3 border-t border-gray-800">
              <h4 className="text-white text-sm font-medium mb-2">
                {t.bankDetails}
              </h4>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>Banka: [Bankas nosaukums]</li>
                <li>SWIFT: [SWIFT kods]</li>
                <li>IBAN: [Konta numurs]</li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left mx-auto sm:mx-0 w-full max-w-xs sm:max-w-none">
            <h3 className="text-white font-medium mb-5 text-xl sm:text-lg inline-block pb-2 border-b-2 border-emerald-500">
              {language === "lv"
                ? "Ātrās saites"
                : language === "en"
                  ? "Quick Links"
                  : language === "ru"
                    ? "Быстрые ссылки"
                    : "Schnelllinks"}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-center sm:justify-start text-lg sm:text-base"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {t.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-center sm:justify-start"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-center sm:justify-start"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {t.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-center sm:justify-start"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {t.faq}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center justify-center sm:justify-start"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="text-center sm:text-left mx-auto sm:mx-0 w-full max-w-xs sm:max-w-none">
            <h3 className="text-white font-medium mb-5 text-lg inline-block pb-2 border-b-2 border-emerald-500">
              {t.serviceAreas}
            </h3>
            <ul className="space-y-3 text-gray-400 mb-5">
              <li className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2.5"></span>
                Dienvidkurzemes novads
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2.5"></span>
                Liepāja
              </li>
            </ul>

            {/* Map image with frame */}
            <div className="mt-5 overflow-hidden rounded-lg border border-gray-700 max-w-[180px] shadow-lg mx-auto sm:mx-0">
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743622650/dienvidkurzemes-nodavads_1_dm6mgt.jpg"
                  alt="Dienvidkurzemes novada karte"
                  width={180}
                  height={120}
                  className="w-full h-auto hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 border-4 border-gray-900 opacity-30"></div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left mx-auto sm:mx-0 w-full max-w-xs sm:max-w-none">
            <h3 className="text-white font-medium mb-5 text-lg inline-block pb-2 border-b-2 border-emerald-500">
              {t.contactUs}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center group justify-center sm:justify-start">
                <Link
                  href={`https://wa.me/${phoneNumber.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="bg-gray-800 p-2.5 sm:p-2 rounded-full mr-3 group-hover:bg-emerald-900 transition-colors">
                    <PhoneIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-400 group-hover:text-emerald-400 transition-colors text-lg sm:text-sm">
                    {t.whatsappContact}
                  </span>
                </Link>
              </li>
              <li className="flex items-center group justify-center sm:justify-start">
                <div className="bg-gray-800 p-2.5 sm:p-2 rounded-full mr-3 group-hover:bg-emerald-900 transition-colors">
                  <EmailIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg sm:text-sm">
                  info@skygarden.lv
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links and Language Selector */}
        <div className="mt-14 pt-6 border-t border-gray-800 flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-8">
            {/* Language selector */}
            <div className="relative flex items-center mb-2 sm:mb-0">
              <GlobeIcon className="w-5 h-5 text-emerald-400 mr-3" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 text-gray-300 py-3 pl-4 pr-12 sm:py-1 sm:px-3 sm:pr-10 rounded text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 min-w-[140px] sm:min-w-0"
                aria-label={
                  language === "lv"
                    ? "Mainīt valodu"
                    : language === "en"
                      ? "Change language"
                      : language === "ru"
                        ? "Изменить язык"
                        : "Sprache ändern"
                }
              >
                {languages.map((lang) => (
                  <option
                    key={lang.code}
                    value={lang.code}
                    className="bg-gray-800"
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 flex items-center text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="flex space-x-8">
              <Link
                href="/terms-of-service"
                className="text-gray-500 text-base sm:text-sm hover:text-emerald-400 transition-colors"
              >
                {t.terms}
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-500 text-base sm:text-sm hover:text-emerald-400 transition-colors"
              >
                {t.privacy}
              </Link>
            </div>
          </div>

          {/* Copyright - now at the very bottom */}
          <p className="text-gray-500 text-base sm:text-sm mb-2">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
