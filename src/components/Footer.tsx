"use client";

import Link from "next/link";
import { PhoneIcon, EmailIcon, MapPinIcon } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

// Language strings for the footer
const translations = {
  lv: {
    company: "Uzņēmums",
    home: "Sākums",
    services: "Pakalpojumi",
    about: "Par mums",
    contact: "Kontakti",
    pricing: "Cenas",
    legal: "Juridiskā informācija",
    privacy: "Privātuma politika",
    terms: "Lietošanas noteikumi",
    rights: "Visas tiesības aizsargātas",
    callUs: "Zvaniet mums",
    emailUs: "Rakstiet mums",
    address: "Adrese",
    subscribeTitle: "Piesakieties jaunumiem",
    subscribeText:
      "Saņemiet jaunāko informāciju par mūsu pakalpojumiem un īpašajiem piedāvājumiem.",
    subscribeButton: "Pieteikties",
    emailPlaceholder: "Jūsu e-pasta adrese",
  },
  en: {
    company: "Company",
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    pricing: "Pricing",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    rights: "All rights reserved",
    callUs: "Call us",
    emailUs: "Email us",
    address: "Address",
    subscribeTitle: "Subscribe to our newsletter",
    subscribeText: "Get the latest updates on our services and special offers.",
    subscribeButton: "Subscribe",
    emailPlaceholder: "Your email address",
  },
  ru: {
    company: "Компания",
    home: "Главная",
    services: "Услуги",
    about: "О нас",
    contact: "Контакты",
    pricing: "Цены",
    legal: "Юридическая информация",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    rights: "Все права защищены",
    callUs: "Звоните нам",
    emailUs: "Пишите нам",
    address: "Адрес",
    subscribeTitle: "Подпишитесь на новости",
    subscribeText:
      "Получайте последнюю информацию о наших услугах и специальных предложениях.",
    subscribeButton: "Подписаться",
    emailPlaceholder: "Ваш email адрес",
  },
  de: {
    company: "Unternehmen",
    home: "Startseite",
    services: "Dienstleistungen",
    about: "Über uns",
    contact: "Kontakt",
    pricing: "Preise",
    legal: "Rechtliches",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    rights: "Alle Rechte vorbehalten",
    callUs: "Rufen Sie uns an",
    emailUs: "Schreiben Sie uns",
    address: "Adresse",
    subscribeTitle: "Abonnieren Sie unseren Newsletter",
    subscribeText:
      "Erhalten Sie die neuesten Informationen zu unseren Dienstleistungen und Sonderangeboten.",
    subscribeButton: "Abonnieren",
    emailPlaceholder: "Ihre E-Mail-Adresse",
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Information */}
          <div>
            <h3 className="mb-4 text-lg font-bold font-serif text-gray-900 dark:text-white">
              PiemiņasRūpes
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              {language === "lv" &&
                "Profesionāli kapu kopšanas pakalpojumi ar cieņu un rūpēm."}
              {language === "en" &&
                "Professional grave maintenance services with respect and care."}
              {language === "ru" &&
                "Профессиональные услуги по уходу за могилами с уважением и заботой."}
              {language === "de" &&
                "Professionelle Grabpflegedienste mit Respekt und Sorgfalt."}
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm">{t.callUs}: +371 2X XXX XXX</span>
              </div>
              <div className="flex items-center">
                <EmailIcon className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm">
                  {t.emailUs}: info@pieminasrupes.lv
                </span>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-2 mt-0.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="text-sm">{t.address}: Rīga, Latvija</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold font-serif text-gray-900 dark:text-white">
              {t.company}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
                >
                  {t.contact}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
                >
                  {t.pricing}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-lg font-bold font-serif text-gray-900 dark:text-white">
              {t.legal}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
                >
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
                >
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-bold font-serif text-gray-900 dark:text-white">
              {t.subscribeTitle}
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              {t.subscribeText}
            </p>
            <form className="space-y-2">
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 mt-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors"
                >
                  {t.subscribeButton}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {currentYear} PiemiņasRūpes. {t.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
