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

// "use client";

// import Link from "next/link";
// import { PhoneIcon, EmailIcon, MapPinIcon } from "./Icons";
// import { useLanguage } from "@/context/LanguageContext";

// // Language strings for the footer
// const translations = {
//   lv: {
//     company: "Uzņēmums",
//     home: "Sākums",
//     services: "Pakalpojumi",
//     about: "Par mums",
//     contact: "Kontakti",
//     pricing: "Cenas",
//     legal: "Juridiskā informācija",
//     privacy: "Privātuma politika",
//     terms: "Lietošanas noteikumi",
//     rights: "Visas tiesības aizsargātas",
//     callUs: "Zvaniet mums",
//     emailUs: "Rakstiet mums",
//     address: "Adrese",
//     subscribeTitle: "Piesakieties jaunumiem",
//     subscribeText:
//       "Saņemiet jaunāko informāciju par mūsu pakalpojumiem un īpašajiem piedāvājumiem.",
//     subscribeButton: "Pieteikties",
//     emailPlaceholder: "Jūsu e-pasta adrese",
//   },
//   en: {
//     company: "Company",
//     home: "Home",
//     services: "Services",
//     about: "About",
//     contact: "Contact",
//     pricing: "Pricing",
//     legal: "Legal",
//     privacy: "Privacy Policy",
//     terms: "Terms of Service",
//     rights: "All rights reserved",
//     callUs: "Call us",
//     emailUs: "Email us",
//     address: "Address",
//     subscribeTitle: "Subscribe to our newsletter",
//     subscribeText: "Get the latest updates on our services and special offers.",
//     subscribeButton: "Subscribe",
//     emailPlaceholder: "Your email address",
//   },
//   ru: {
//     company: "Компания",
//     home: "Главная",
//     services: "Услуги",
//     about: "О нас",
//     contact: "Контакты",
//     pricing: "Цены",
//     legal: "Юридическая информация",
//     privacy: "Политика конфиденциальности",
//     terms: "Условия использования",
//     rights: "Все права защищены",
//     callUs: "Звоните нам",
//     emailUs: "Пишите нам",
//     address: "Адрес",
//     subscribeTitle: "Подпишитесь на новости",
//     subscribeText:
//       "Получайте последнюю информацию о наших услугах и специальных предложениях.",
//     subscribeButton: "Подписаться",
//     emailPlaceholder: "Ваш email адрес",
//   },
//   de: {
//     company: "Unternehmen",
//     home: "Startseite",
//     services: "Dienstleistungen",
//     about: "Über uns",
//     contact: "Kontakt",
//     pricing: "Preise",
//     legal: "Rechtliches",
//     privacy: "Datenschutzrichtlinie",
//     terms: "Nutzungsbedingungen",
//     rights: "Alle Rechte vorbehalten",
//     callUs: "Rufen Sie uns an",
//     emailUs: "Schreiben Sie uns",
//     address: "Adresse",
//     subscribeTitle: "Abonnieren Sie unseren Newsletter",
//     subscribeText:
//       "Erhalten Sie die neuesten Informationen zu unseren Dienstleistungen und Sonderangeboten.",
//     subscribeButton: "Abonnieren",
//     emailPlaceholder: "Ihre E-Mail-Adresse",
//   },
// };

// const Footer = () => {
//   const { language } = useLanguage();
//   const t = translations[language as keyof typeof translations];

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
//       <div className="container py-12">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {/* Company Information */}
//           <div>
//             <h3 className="mb-4 text-lg font-bold font-serif text-gray-900 dark:text-white">
//               PiemiņasRūpes
//             </h3>
//             <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
//               {language === "lv" &&
//                 "Profesionāli kapu kopšanas pakalpojumi ar cieņu un rūpēm."}
//               {language === "en" &&
//                 "Professional grave maintenance services with respect and care."}
//               {language === "ru" &&
//                 "Профессиональные услуги по уходу за могилами с уважением и заботой."}
//               {language === "de" &&
//                 "Professionelle Grabpflegedienste mit Respekt und Sorgfalt."}
//             </p>
//             <div className="space-y-2">
//               <div className="flex items-center">
//                 <PhoneIcon className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
//                 <span className="text-sm">{t.callUs}: +371 2X XXX XXX</span>
//               </div>
//               <div className="flex items-center">
//                 <EmailIcon className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
//                 <span className="text-sm">
//                   {t.emailUs}: info@pieminasrupes.lv
//                 </span>
//               </div>
//               <div className="flex items-start">
//                 <MapPinIcon className="w-5 h-5 mr-2 mt-0.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
//                 <span className="text-sm">{t.address}: Rīga, Latvija</span>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="mb-4 text-lg font-bold font-serif text-gray-900 dark:text-white">
//               {t.company}
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/"
//                   className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
//                 >
//                   {t.home}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/services"
//                   className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
//                 >
//                   {t.services}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/about"
//                   className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
//                 >
//                   {t.about}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact"
//                   className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
//                 >
//                   {t.contact}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/pricing"
//                   className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
//                 >
//                   {t.pricing}
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h3 className="mb-4 text-lg font-bold font-serif text-gray-900 dark:text-white">
//               {t.legal}
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/privacy"
//                   className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
//                 >
//                   {t.privacy}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/terms"
//                   className="text-sm text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors"
//                 >
//                   {t.terms}
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="mb-4 text-lg font-bold font-serif text-gray-900 dark:text-white">
//               {t.subscribeTitle}
//             </h3>
//             <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
//               {t.subscribeText}
//             </p>
//             <form className="space-y-2">
//               <div className="flex flex-col">
//                 <input
//                   type="email"
//                   placeholder={t.emailPlaceholder}
//                   className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="px-4 py-2 mt-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors"
//                 >
//                   {t.subscribeButton}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
//           <p className="text-sm text-center text-gray-600 dark:text-gray-400">
//             © {currentYear} PiemiņasRūpes. {t.rights}.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
