"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  PhoneIcon,
  EmailIcon,
  MapPinIcon,
  LogoIcon,
  GlobeIcon,
} from "@/components/Icons";

export default function Footer() {
  const { language, setLanguage } = useLanguage();

  const footerLinks = {
    lv: {
      services: "Pakalpojumi",
      about: "Par mums",
      contact: "Kontakti",
      pricing: "Cenas",
      terms: "Lietošanas noteikumi",
      privacy: "Privātuma politika",
      copyright: "© 2025 SkyGarden. Visas tiesības aizsargātas.",
      serviceAreas: "Apkalpojamās teritorijas",
      contactUs: "Sazināties ar mums",
    },
    en: {
      services: "Services",
      about: "About",
      contact: "Contact",
      pricing: "Pricing",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      copyright: "© 2025 SkyGarden. All rights reserved.",
      serviceAreas: "Service Areas",
      contactUs: "Contact Us",
    },
    ru: {
      services: "Услуги",
      about: "О нас",
      contact: "Контакты",
      pricing: "Цены",
      terms: "Условия использования",
      privacy: "Политика конфиденциальности",
      copyright: "© 2025 SkyGarden. Все права защищены.",
      serviceAreas: "Зоны обслуживания",
      contactUs: "Связаться с нами",
    },
    de: {
      services: "Dienstleistungen",
      about: "Über uns",
      contact: "Kontakt",
      pricing: "Preise",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutzrichtlinie",
      copyright: "© 2025 SkyGarden. Alle Rechte vorbehalten.",
      serviceAreas: "Servicegebiete",
      contactUs: "Kontaktieren Sie uns",
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
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link
              href="/"
              className="flex items-center text-xl font-serif font-bold tracking-tight text-white mb-4"
            >
              <LogoIcon className="w-8 h-8 mr-2 text-emerald-400" />
              SkyGarden
            </Link>
            <p className="text-gray-400 mb-6">
              {language === "lv"
                ? "Profesionāla kapavietu kopšana, kas saglabā un godina Jūsu tuvinieku piemiņu."
                : language === "en"
                  ? "Professional grave care that preserves and honors the memory of your loved ones."
                  : language === "ru"
                    ? "Профессиональный уход за могилами, который сохраняет и чтит память о ваших близких."
                    : "Professionelle Grabpflege, die das Andenken an Ihre Lieben bewahrt und ehrt."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4 text-lg">
              {language === "lv"
                ? "Ātrās saites"
                : language === "en"
                  ? "Quick Links"
                  : language === "ru"
                    ? "Быстрые ссылки"
                    : "Schnelllinks"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {t.pricing}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4 text-lg">
              {t.serviceAreas}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Dienvidkurzemes novads</li>
              <li>Liepāja</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4 text-lg">
              {t.contactUs}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-gray-400">+371 2X XXX XXX</span>
              </li>
              <li className="flex items-center">
                <EmailIcon className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-gray-400">info@skygarden.lv</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-emerald-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  {language === "lv"
                    ? "Vērgale, Dienvidkurzemes novads, Latvija"
                    : language === "en"
                      ? "Vērgale, Dienvidkurzeme Municipality, Latvia"
                      : language === "ru"
                        ? "Вергале, Южнокурземский край, Латвия"
                        : "Vērgale, Dienvidkurzeme Gemeinde, Lettland"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Language Selector and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">{t.copyright}</p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Language selector */}
            <div className="relative flex items-center">
              <GlobeIcon className="w-4 h-4 text-emerald-400 mr-2" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 text-gray-300 py-1 pl-2 pr-8 rounded text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
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

            {/* Legal links */}
            <Link
              href="/terms"
              className="text-gray-500 text-sm hover:text-emerald-400"
            >
              {t.terms}
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 text-sm hover:text-emerald-400"
            >
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
