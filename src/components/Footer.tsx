"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { PhoneIcon, EmailIcon, LogoIcon, GlobeIcon } from "@/components/Icons";

export default function Footer() {
  const { language, setLanguage } = useLanguage();

  const footerLinks = {
    lv: {
      services: "Pakalpojumi",
      about: "Par mums",
      contact: "Kontakti",
      pricing: "Cenas",
      faq: "BUJ",
      terms: "Lietošanas noteikumi",
      privacy: "Privātuma politika",
      copyright: "© 2025 SkyGarden. Visas tiesības aizsargātas.",
      serviceAreas: "Apkalpojamās teritorijas",
      contactUs: "Sazināties ar mums",
      companyInfo: "Uzņēmuma informācija",
      bankDetails: "Bankas rekvizīti",
    },
    en: {
      services: "Services",
      about: "About",
      contact: "Contact",
      pricing: "Pricing",
      faq: "FAQ",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      copyright: "© 2025 SkyGarden. All rights reserved.",
      serviceAreas: "Service Areas",
      contactUs: "Contact Us",
      companyInfo: "Company Information",
      bankDetails: "Bank Details",
    },
    ru: {
      services: "Услуги",
      about: "О нас",
      contact: "Контакты",
      pricing: "Цены",
      faq: "ЧЗВ",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
      copyright: "© 2025 SkyGarden. Все права защищены.",
      serviceAreas: "Зоны обслуживания",
      contactUs: "Связаться с нами",
      companyInfo: "Информация о компании",
      bankDetails: "Банковские реквизиты",
    },
    de: {
      services: "Dienstleistungen",
      about: "Über uns",
      contact: "Kontakt",
      pricing: "Preise",
      faq: "FAQ",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutzrichtlinie",
      copyright: "© 2025 SkyGarden. Alle Rechte vorbehalten.",
      serviceAreas: "Servicegebiete",
      contactUs: "Kontaktieren Sie uns",
      companyInfo: "Unternehmensangaben",
      bankDetails: "Bankverbindung",
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
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Logo and Description */}
          <div>
            <Link
              href="/"
              className="flex items-center text-xl font-serif font-bold tracking-tight text-white mb-4"
            >
              <LogoIcon className="w-8 h-8 mr-2 text-emerald-400" />
              SkyGarden
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {language === "lv"
                ? "Profesionāla kapavietu kopšana, kas saglabā un godina Jūsu tuvinieku piemiņu."
                : language === "en"
                  ? "Professional grave care that preserves and honors the memory of your loved ones."
                  : language === "ru"
                    ? "Профессиональный уход за могилами, который сохраняет и чтит память о ваших близких."
                    : "Professionelle Grabpflege, die das Andenken an Ihre Lieben bewahrt und ehrt."}
            </p>

            {/* Company Legal Information */}
            <div className="pt-4 border-t border-gray-800">
              <h4 className="text-white text-sm font-medium mb-2">
                {t.companyInfo}
              </h4>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>SIA "MARLIN"</li>
                <li>Reģ. Nr.: 42103083865</li>
                <li className="break-words">
                  Dienvidkurzemes nov., Vērgales pag., Ploce, "Audzes", LV-3463
                </li>
              </ul>
            </div>

            {/* Bank Details - Moved here */}
            <div className="mt-4 pt-4 border-t border-gray-800">
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
          <div>
            <h3 className="text-white font-medium mb-5 text-lg inline-block pb-2 border-b-2 border-emerald-500">
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
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {t.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {t.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {t.faq}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-medium mb-5 text-lg inline-block pb-2 border-b-2 border-emerald-500">
              {t.serviceAreas}
            </h3>
            <ul className="space-y-3 text-gray-400 mb-5">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2.5"></span>
                Dienvidkurzemes novads
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2.5"></span>
                Liepāja
              </li>
            </ul>

            {/* Map image with frame */}
            <div className="mt-5 overflow-hidden rounded-lg border border-gray-700 max-w-[180px] shadow-lg">
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
          <div>
            <h3 className="text-white font-medium mb-5 text-lg inline-block pb-2 border-b-2 border-emerald-500">
              {t.contactUs}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center group">
                <div className="bg-gray-800 p-2 rounded-full mr-3 group-hover:bg-emerald-900 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  +371 2X XXX XXX
                </span>
              </li>
              <li className="flex items-center group">
                <div className="bg-gray-800 p-2 rounded-full mr-3 group-hover:bg-emerald-900 transition-colors">
                  <EmailIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  info@skygarden.lv
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-14 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">{t.copyright}</p>

          <div className="flex items-center space-x-6">
            {/* Language selector - Moved back to bottom */}
            <div className="relative flex items-center">
              <GlobeIcon className="w-4 h-4 text-emerald-400 mr-2" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 text-gray-300 py-1 pl-2 pr-8 rounded text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
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
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  className="w-4 h-4"
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

            <Link
              href="/terms"
              className="text-gray-500 text-sm hover:text-emerald-400 transition-colors"
            >
              {t.terms}
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 text-sm hover:text-emerald-400 transition-colors"
            >
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
