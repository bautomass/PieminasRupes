"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { CheckIcon, InfoIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export default function PricingPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const [billingType, setBillingType] = useState<"subscription" | "oneTime">(
    "subscription"
  );
  const [billingInterval, setBillingInterval] = useState<
    "quarterly" | "yearly"
  >("quarterly");
  const [activeTab, setActiveTab] = useState<number>(0);
  // Define pricing plans based on the translation
  const pricingSizes = t.serviceDetails.pricing.sizes;
  const packageData = t.serviceDetails.packages;

  // Generate size-based plans dynamically from pricing sizes
  const sizePlans = pricingSizes.map((size) => {
    return {
      id: size.title.toLowerCase(),
      name: size.title,
      size: size.size,
      price: size.price,
      interval: t.serviceDetails.pricing.quarterly || "quarterly",
      yearlyPrice: size.yearlyPrice,
      description:
        language === "lv"
          ? "Pilna kapu vietas kopšana visa gada garumā"
          : language === "en"
            ? "Complete grave site care throughout the year"
            : language === "ru"
              ? "Полный уход за могилой в течение всего года"
              : "Komplette Grabpflege das ganze Jahr über",
      featured:
        size.title ===
        (language === "lv"
          ? "Vidēja"
          : language === "en"
            ? "Medium"
            : language === "ru"
              ? "Средняя"
              : "Mittel"),
    };
  });

  // Determine single services by language
  const singleServices = [
    {
      id: "single-basic",
      name:
        language === "lv"
          ? "Pamata tīrīšana"
          : language === "en"
            ? "Basic Cleaning"
            : language === "ru"
              ? "Базовая очистка"
              : "Grundreinigung",
      price: "40",
      description:
        language === "lv"
          ? "Vienreizēja kapu vietas pamata kopšana"
          : language === "en"
            ? "One-time basic grave site maintenance"
            : language === "ru"
              ? "Разовое базовое обслуживание могилы"
              : "Einmalige Grundpflege des Grabes",
      features: [
        language === "lv"
          ? "Zāles pļaušana ap kapu"
          : language === "en"
            ? "Grass cutting around the grave"
            : language === "ru"
              ? "Скашивание травы вокруг могилы"
              : "Rasenmähen um das Grab",

        language === "lv"
          ? "Nezāļu likvidēšana no kapu vietas"
          : language === "en"
            ? "Weed removal from grave site"
            : language === "ru"
              ? "Удаление сорняков с места захоронения"
              : "Unkrautentfernung vom Grab",

        language === "lv"
          ? "Lapu un citu gružu savākšana"
          : language === "en"
            ? "Leaf and debris collection"
            : language === "ru"
              ? "Сбор листьев и мусора"
              : "Sammeln von Laub und Unrat",

        language === "lv"
          ? "Sveču un veco ziedu novākšana"
          : language === "en"
            ? "Removal of candles and old flowers"
            : language === "ru"
              ? "Уборка свечей и старых цветов"
              : "Entfernung von Kerzen und alten Blumen",

        language === "lv"
          ? "Fotoatskaite pirms un pēc darbiem"
          : language === "en"
            ? "Before and after photo report"
            : language === "ru"
              ? "Фотоотчет до и после работ"
              : "Vorher-Nachher-Fotobericht",
      ],
    },
    {
      id: "single-monument",
      name:
        language === "lv"
          ? "Pieminekļa tīrīšana"
          : language === "en"
            ? "Monument Cleaning"
            : language === "ru"
              ? "Очистка памятника"
              : "Denkmalsreinigung",
      price: "55",
      description:
        language === "lv"
          ? "Profesionāla pieminekļa tīrīšana"
          : language === "en"
            ? "Professional monument cleaning"
            : language === "ru"
              ? "Профессиональная очистка памятника"
              : "Professionelle Denkmalsreinigung",
      features: [
        language === "lv"
          ? "Pieminekļa virsmas tīrīšana ar profesionāliem līdzekļiem"
          : language === "en"
            ? "Monument surface cleaning with professional products"
            : language === "ru"
              ? "Очистка поверхности памятника профессиональными средствами"
              : "Reinigung der Denkmaloberfläche mit professionellen Mitteln",

        language === "lv"
          ? "Noņem sūnas, ķērpjus un netīrumus"
          : language === "en"
            ? "Removes moss, lichen and dirt"
            : language === "ru"
              ? "Удаление мха, лишайника и грязи"
              : "Entfernt Moos, Flechten und Schmutz",

        language === "lv"
          ? "Attīra tekstu un gravējumus"
          : language === "en"
            ? "Cleans text and engravings"
            : language === "ru"
              ? "Очистка текста и гравировок"
              : "Reinigt Text und Gravuren",

        language === "lv"
          ? "Aizsargpārklājuma uzklāšana (pēc nepieciešamības)"
          : language === "en"
            ? "Protective coating application (if needed)"
            : language === "ru"
              ? "Нанесение защитного покрытия (при необходимости)"
              : "Auftragen einer Schutzschicht (bei Bedarf)",

        language === "lv"
          ? "Fotoatskaite pirms un pēc darbiem"
          : language === "en"
            ? "Before and after photo report"
            : language === "ru"
              ? "Фотоотчет до и после работ"
              : "Vorher-Nachher-Fotobericht",
      ],
    },
    {
      id: "single-renovation",
      name:
        language === "lv"
          ? "Kapu vietas atjaunošana"
          : language === "en"
            ? "Grave Site Renovation"
            : language === "ru"
              ? "Реновация могилы"
              : "Grabrenovierung",
      price:
        language === "lv"
          ? "no 120"
          : language === "en"
            ? "from 120"
            : language === "ru"
              ? "от 120"
              : "ab 120",
      description:
        language === "lv"
          ? "Visaptveroša kapu vietas atjaunošana"
          : language === "en"
            ? "Comprehensive grave site renovation"
            : language === "ru"
              ? "Комплексная реновация места захоронения"
              : "Umfassende Grabrenovierung",
      features: [
        language === "lv"
          ? "Kapu vietas ģenerāltīrīšana"
          : language === "en"
            ? "General grave site cleaning"
            : language === "ru"
              ? "Генеральная уборка могилы"
              : "Generelle Grabreinigung",

        language === "lv"
          ? "Pieminekļa tīrīšana un atjaunošana"
          : language === "en"
            ? "Monument cleaning and restoration"
            : language === "ru"
              ? "Очистка и реставрация памятника"
              : "Denkmalsreinigung und -restaurierung",

        language === "lv"
          ? "Kapu apmales labošana un atjaunošana"
          : language === "en"
            ? "Grave border repair and restoration"
            : language === "ru"
              ? "Ремонт и восстановление оград"
              : "Reparatur und Restaurierung der Grabeinfassung",

        language === "lv"
          ? "Smilšu pilnīga nomaiņa vai papildināšana"
          : language === "en"
            ? "Complete sand replacement or addition"
            : language === "ru"
              ? "Полная замена или добавление песка"
              : "Vollständiger Sandaustausch oder -ergänzung",

        language === "lv"
          ? "Apzaļumošana un/vai puķu stādīšana"
          : language === "en"
            ? "Landscaping and/or flower planting"
            : language === "ru"
              ? "Озеленение и/или посадка цветов"
              : "Landschaftsgestaltung und/oder Blumenpflanzung",

        language === "lv"
          ? "Fotoatskaite pirms un pēc darbiem"
          : language === "en"
            ? "Before and after photo report"
            : language === "ru"
              ? "Фотоотчет до и после работ"
              : "Vorher-Nachher-Fotobericht",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-gray-800 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              {language === "lv"
                ? "Mūsu cenas"
                : language === "en"
                  ? "Our Pricing"
                  : language === "ru"
                    ? "Наши цены"
                    : "Unsere Preise"}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {language === "lv"
                ? "Caurspīdīgas un godīgas cenas visiem pakalpojumiem"
                : language === "en"
                  ? "Transparent and fair pricing for all services"
                  : language === "ru"
                    ? "Прозрачные и справедливые цены на все услуги"
                    : "Transparente und faire Preise für alle Dienstleistungen"}
            </p>
            <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {language === "lv"
                ? "Mēs piedāvājam dažādus pakalpojumu plānus, lai apmierinātu visas jūsu vajadzības. Visas cenas ir norādītas bez PVN."
                : language === "en"
                  ? "We offer various service plans to meet your needs. All prices are shown without VAT."
                  : language === "ru"
                    ? "Мы предлагаем различные планы обслуживания для удовлетворения ваших потребностей. Все цены указаны без НДС."
                    : "Wir bieten verschiedene Servicepläne an, um alle Ihre Bedürfnisse zu erfüllen. Alle Preise verstehen sich ohne MwSt."}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
        <div className="container mx-auto px-4">
          {/* Payment information - Moved to top and highlighted */}
          <div className="max-w-3xl mx-auto mb-12 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-2 border-amber-300 dark:border-amber-700 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {language === "lv"
                ? "Svarīga informācija par maksājumiem"
                : language === "en"
                  ? "Important payment information"
                  : language === "ru"
                    ? "Важная информация об оплате"
                    : "Wichtige Zahlungsinformationen"}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
              {t.serviceDetails.pricing.paymentNote}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {t.serviceDetails.pricing.additionalNote}
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            {/* Tabs */}
            <div className="flex p-1 bg-gray-100 rounded-lg dark:bg-gray-700">
              <button
                onClick={() => setBillingType("subscription")}
                className={`flex-1 py-2 text-sm font-medium rounded-md ${
                  billingType === "subscription"
                    ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {language === "lv"
                  ? "Abonements"
                  : language === "en"
                    ? "Subscription"
                    : language === "ru"
                      ? "Абонемент"
                      : "Abonnement"}
              </button>
              <button
                onClick={() => setBillingType("oneTime")}
                className={`flex-1 py-2 text-sm font-medium rounded-md ${
                  billingType === "oneTime"
                    ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {language === "lv"
                  ? "Vienreizējs pakalpojums"
                  : language === "en"
                    ? "One-time service"
                    : language === "ru"
                      ? "Разовая услуга"
                      : "Einmalige Dienstleistung"}
              </button>
            </div>

            {/* Subscription Interval Toggle */}
            {billingType === "subscription" && (
              <div className="flex justify-center mt-6">
                <div className="flex p-1 bg-gray-100 rounded-md dark:bg-gray-700">
                  <button
                    onClick={() => setBillingInterval("quarterly")}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      billingInterval === "quarterly"
                        ? "bg-emerald-600 text-white shadow"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  >
                    {language === "lv"
                      ? "Reizi 3 mēnešos"
                      : language === "en"
                        ? "Quarterly"
                        : language === "ru"
                          ? "Ежеквартально"
                          : "Vierteljährlich"}
                  </button>
                  <button
                    onClick={() => setBillingInterval("yearly")}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      billingInterval === "yearly"
                        ? "bg-emerald-600 text-white shadow"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  >
                    {language === "lv"
                      ? "Gadā"
                      : language === "en"
                        ? "Yearly"
                        : language === "ru"
                          ? "Ежегодно"
                          : "Jährlich"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Subscription Plans */}
          {billingType === "subscription" && (
            <div>
              {/* Size-based plans */}
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {t.serviceDetails.pricing.title}
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {sizePlans.map((plan, index) => (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`flex flex-col p-8 bg-white border rounded-lg shadow-sm dark:bg-gray-800 ${
                        plan.featured
                          ? "border-emerald-600 dark:border-emerald-500 ring-1 ring-emerald-600 dark:ring-emerald-500"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {plan.name}
                      </h3>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {plan.size}
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {plan.description}
                      </p>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          €
                          {billingInterval === "quarterly"
                            ? plan.price
                            : plan.yearlyPrice}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          /
                          {billingInterval === "quarterly"
                            ? language === "lv"
                              ? t.serviceDetails.pricing.quarterly
                              : language === "en"
                                ? t.serviceDetails.pricing.quarterly
                                : language === "ru"
                                  ? t.serviceDetails.pricing.quarterly
                                  : t.serviceDetails.pricing.quarterly
                            : language === "lv"
                              ? t.serviceDetails.pricing.yearly
                              : language === "en"
                                ? t.serviceDetails.pricing.yearly
                                : language === "ru"
                                  ? t.serviceDetails.pricing.yearly
                                  : t.serviceDetails.pricing.yearly}
                        </span>
                      </div>

                      <ul className="flex-1 mt-6 space-y-4">
                        <li className="text-sm font-medium text-gray-900 dark:text-white">
                          {language === "lv"
                            ? "Ietver šādus pakalpojumus:"
                            : language === "en"
                              ? "Includes the following services:"
                              : language === "ru"
                                ? "Включает следующие услуги:"
                                : "Beinhaltet die folgenden Dienstleistungen:"}
                        </li>
                        {[...Array(5)].map((_, i) => (
                          <li key={i} className="flex items-start">
                            <CheckIcon className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                            <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                              {language === "lv"
                                ? [
                                    "Regulāra kapu vietas uzturēšana",
                                    "Sezonālie darbi (pavasaris, vasara, rudens)",
                                    "Sveču un veco ziedu novākšana",
                                    "Lapu un citu gružu savākšana",
                                    "Fotoatskaite pēc katras apkopes",
                                  ][i]
                                : language === "en"
                                  ? [
                                      "Regular grave site maintenance",
                                      "Seasonal work (spring, summer, autumn)",
                                      "Removal of candles and old flowers",
                                      "Leaf and debris collection",
                                      "Photo report after each maintenance",
                                    ][i]
                                  : language === "ru"
                                    ? [
                                        "Регулярное обслуживание могилы",
                                        "Сезонные работы (весна, лето, осень)",
                                        "Уборка свечей и старых цветов",
                                        "Сбор листьев и мусора",
                                        "Фотоотчет после каждого обслуживания",
                                      ][i]
                                    : [
                                        "Regelmäßige Grabpflege",
                                        "Saisonale Arbeiten (Frühling, Sommer, Herbst)",
                                        "Entfernung von Kerzen und alten Blumen",
                                        "Sammeln von Laub und Unrat",
                                        "Fotobericht nach jeder Pflege",
                                      ][i]}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className={`block w-full px-4 py-2 text-sm font-medium text-center rounded-md ${
                            plan.featured
                              ? "text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                              : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100 dark:text-emerald-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                          }`}
                        >
                          {language === "lv"
                            ? "Sazināties ar mums"
                            : language === "en"
                              ? "Contact Us"
                              : language === "ru"
                                ? "Связаться с нами"
                                : "Kontaktieren Sie uns"}
                        </Link>
                      </div>

                      <div className="mt-4 flex items-center">
                        <InfoIcon className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-1" />
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {t.serviceDetails.pricing.note}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Single Services */}
          {billingType === "oneTime" && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {singleServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      €{service.price}
                    </span>
                  </div>

                  <ul className="flex-1 mt-6 space-y-4">
                    <li className="text-sm font-medium text-gray-900 dark:text-white">
                      {language === "lv"
                        ? "Ietver šādus pakalpojumus:"
                        : language === "en"
                          ? "Includes the following services:"
                          : language === "ru"
                            ? "Включает следующие услуги:"
                            : "Beinhaltet die folgenden Dienstleistungen:"}
                    </li>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="block w-full px-4 py-2 text-sm font-medium text-center text-white bg-emerald-600 rounded-md hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                    >
                      {language === "lv"
                        ? "Sazināties ar mums"
                        : language === "en"
                          ? "Contact Us"
                          : language === "ru"
                            ? "Связаться с нами"
                            : "Kontaktieren Sie uns"}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

////////////////////////////////////////////////////////////
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useLanguage } from "@/context/LanguageContext";
// import { translations } from "@/lib/translations";
// import { CheckIcon, InfoIcon } from "@/components/Icons";
// import { motion } from "framer-motion";

// export default function PricingPage() {
//   const { language } = useLanguage();
//   const t = translations[language as keyof typeof translations];

//   const [billingType, setBillingType] = useState<"subscription" | "oneTime">(
//     "subscription"
//   );
//   const [billingInterval, setBillingInterval] = useState<
//     "quarterly" | "yearly"
//   >("quarterly");
//   const [activeTab, setActiveTab] = useState<number>(0);
//   // Define pricing plans based on the translation
//   const pricingSizes = t.serviceDetails.pricing.sizes;
//   const packageData = t.serviceDetails.packages;

//   // Generate size-based plans dynamically from pricing sizes
//   const sizePlans = pricingSizes.map((size) => {
//     return {
//       id: size.title.toLowerCase(),
//       name: size.title,
//       size: size.size,
//       price: size.price,
//       interval: t.serviceDetails.pricing.quarterly || "quarterly",
//       yearlyPrice: size.yearlyPrice,
//       description:
//         language === "lv"
//           ? "Pilna kapu vietas kopšana visa gada garumā"
//           : language === "en"
//             ? "Complete grave site care throughout the year"
//             : language === "ru"
//               ? "Полный уход за могилой в течение всего года"
//               : "Komplette Grabpflege das ganze Jahr über",
//       featured:
//         size.title ===
//         (language === "lv"
//           ? "Vidēja"
//           : language === "en"
//             ? "Medium"
//             : language === "ru"
//               ? "Средняя"
//               : "Mittel"),
//     };
//   });

//   // Generate service package plans
//   const packagePlans = [
//     {
//       id: "standard",
//       name: packageData.standard.title,
//       price: packageData.standard.price,
//       yearlyPrice: packageData.standard.yearlyPrice,
//       description: packageData.standard.description,
//       dressing: packageData.standard.dressing,
//       features: packageData.standard.features,
//       featured: false,
//     },
//     {
//       id: "plus",
//       name: packageData.plus.title,
//       price: packageData.plus.price,
//       yearlyPrice: packageData.plus.yearlyPrice,
//       description: packageData.plus.description,
//       dressing: packageData.plus.dressing,
//       features: packageData.plus.features,
//       featured: true,
//     },
//     {
//       id: "premium",
//       name: packageData.premium.title,
//       price: packageData.premium.price,
//       yearlyPrice: packageData.premium.yearlyPrice,
//       description: packageData.premium.description,
//       dressing: packageData.premium.dressing,
//       features: packageData.premium.features,
//       featured: false,
//     },
//   ];

//   // Determine single services by language
//   const singleServices = [
//     {
//       id: "single-basic",
//       name:
//         language === "lv"
//           ? "Pamata tīrīšana"
//           : language === "en"
//             ? "Basic Cleaning"
//             : language === "ru"
//               ? "Базовая очистка"
//               : "Grundreinigung",
//       price: "40",
//       description:
//         language === "lv"
//           ? "Vienreizēja kapu vietas pamata kopšana"
//           : language === "en"
//             ? "One-time basic grave site maintenance"
//             : language === "ru"
//               ? "Разовое базовое обслуживание могилы"
//               : "Einmalige Grundpflege des Grabes",
//       features: [
//         language === "lv"
//           ? "Zāles pļaušana ap kapu"
//           : language === "en"
//             ? "Grass cutting around the grave"
//             : language === "ru"
//               ? "Скашивание травы вокруг могилы"
//               : "Rasenmähen um das Grab",

//         language === "lv"
//           ? "Nezāļu likvidēšana no kapu vietas"
//           : language === "en"
//             ? "Weed removal from grave site"
//             : language === "ru"
//               ? "Удаление сорняков с места захоронения"
//               : "Unkrautentfernung vom Grab",

//         language === "lv"
//           ? "Lapu un citu gružu savākšana"
//           : language === "en"
//             ? "Leaf and debris collection"
//             : language === "ru"
//               ? "Сбор листьев и мусора"
//               : "Sammeln von Laub und Unrat",

//         language === "lv"
//           ? "Sveču un veco ziedu novākšana"
//           : language === "en"
//             ? "Removal of candles and old flowers"
//             : language === "ru"
//               ? "Уборка свечей и старых цветов"
//               : "Entfernung von Kerzen und alten Blumen",

//         language === "lv"
//           ? "Fotoatskaite pirms un pēc darbiem"
//           : language === "en"
//             ? "Before and after photo report"
//             : language === "ru"
//               ? "Фотоотчет до и после работ"
//               : "Vorher-Nachher-Fotobericht",
//       ],
//     },
//     {
//       id: "single-monument",
//       name:
//         language === "lv"
//           ? "Pieminekļa tīrīšana"
//           : language === "en"
//             ? "Monument Cleaning"
//             : language === "ru"
//               ? "Очистка памятника"
//               : "Denkmalsreinigung",
//       price: "55",
//       description:
//         language === "lv"
//           ? "Profesionāla pieminekļa tīrīšana"
//           : language === "en"
//             ? "Professional monument cleaning"
//             : language === "ru"
//               ? "Профессиональная очистка памятника"
//               : "Professionelle Denkmalsreinigung",
//       features: [
//         language === "lv"
//           ? "Pieminekļa virsmas tīrīšana ar profesionāliem līdzekļiem"
//           : language === "en"
//             ? "Monument surface cleaning with professional products"
//             : language === "ru"
//               ? "Очистка поверхности памятника профессиональными средствами"
//               : "Reinigung der Denkmaloberfläche mit professionellen Mitteln",

//         language === "lv"
//           ? "Noņem sūnas, ķērpjus un netīrumus"
//           : language === "en"
//             ? "Removes moss, lichen and dirt"
//             : language === "ru"
//               ? "Удаление мха, лишайника и грязи"
//               : "Entfernt Moos, Flechten und Schmutz",

//         language === "lv"
//           ? "Attīra tekstu un gravējumus"
//           : language === "en"
//             ? "Cleans text and engravings"
//             : language === "ru"
//               ? "Очистка текста и гравировок"
//               : "Reinigt Text und Gravuren",

//         language === "lv"
//           ? "Aizsargpārklājuma uzklāšana (pēc nepieciešamības)"
//           : language === "en"
//             ? "Protective coating application (if needed)"
//             : language === "ru"
//               ? "Нанесение защитного покрытия (при необходимости)"
//               : "Auftragen einer Schutzschicht (bei Bedarf)",

//         language === "lv"
//           ? "Fotoatskaite pirms un pēc darbiem"
//           : language === "en"
//             ? "Before and after photo report"
//             : language === "ru"
//               ? "Фотоотчет до и после работ"
//               : "Vorher-Nachher-Fotobericht",
//       ],
//     },
//     {
//       id: "single-renovation",
//       name:
//         language === "lv"
//           ? "Kapu vietas atjaunošana"
//           : language === "en"
//             ? "Grave Site Renovation"
//             : language === "ru"
//               ? "Реновация могилы"
//               : "Grabrenovierung",
//       price:
//         language === "lv"
//           ? "no 120"
//           : language === "en"
//             ? "from 120"
//             : language === "ru"
//               ? "от 120"
//               : "ab 120",
//       description:
//         language === "lv"
//           ? "Visaptveroša kapu vietas atjaunošana"
//           : language === "en"
//             ? "Comprehensive grave site renovation"
//             : language === "ru"
//               ? "Комплексная реновация места захоронения"
//               : "Umfassende Grabrenovierung",
//       features: [
//         language === "lv"
//           ? "Kapu vietas ģenerāltīrīšana"
//           : language === "en"
//             ? "General grave site cleaning"
//             : language === "ru"
//               ? "Генеральная уборка могилы"
//               : "Generelle Grabreinigung",

//         language === "lv"
//           ? "Pieminekļa tīrīšana un atjaunošana"
//           : language === "en"
//             ? "Monument cleaning and restoration"
//             : language === "ru"
//               ? "Очистка и реставрация памятника"
//               : "Denkmalsreinigung und -restaurierung",

//         language === "lv"
//           ? "Kapu apmales labošana un atjaunošana"
//           : language === "en"
//             ? "Grave border repair and restoration"
//             : language === "ru"
//               ? "Ремонт и восстановление оград"
//               : "Reparatur und Restaurierung der Grabeinfassung",

//         language === "lv"
//           ? "Smilšu pilnīga nomaiņa vai papildināšana"
//           : language === "en"
//             ? "Complete sand replacement or addition"
//             : language === "ru"
//               ? "Полная замена или добавление песка"
//               : "Vollständiger Sandaustausch oder -ergänzung",

//         language === "lv"
//           ? "Apzaļumošana un/vai puķu stādīšana"
//           : language === "en"
//             ? "Landscaping and/or flower planting"
//             : language === "ru"
//               ? "Озеленение и/или посадка цветов"
//               : "Landschaftsgestaltung und/oder Blumenpflanzung",

//         language === "lv"
//           ? "Fotoatskaite pirms un pēc darbiem"
//           : language === "en"
//             ? "Before and after photo report"
//             : language === "ru"
//               ? "Фотоотчет до и после работ"
//               : "Vorher-Nachher-Fotobericht",
//       ],
//     },
//   ];

//   // FAQ items
//   const faqItems = [
//     {
//       question:
//         language === "lv"
//           ? "Cik bieži tiek veikta kapu vietas kopšana?"
//           : language === "en"
//             ? "How often is grave site maintenance performed?"
//             : language === "ru"
//               ? "Как часто производится обслуживание могилы?"
//               : "Wie oft wird die Grabpflege durchgeführt?",
//       answer:
//         language === "lv"
//           ? "Atkarībā no izvēlētā plāna, kapu vietas kopšana tiek veikta no vienas reizes mēnesī (Pamata plāns) līdz pat iknedēļas apkopei (Premium plāns). Varat izvēlēties sev piemērotāko intensitāti atbilstoši jūsu vēlmēm un budžetam."
//           : language === "en"
//             ? "Depending on the chosen plan, grave site maintenance is performed from once a month (Basic plan) to weekly maintenance (Premium plan). You can choose the most suitable intensity according to your wishes and budget."
//             : language === "ru"
//               ? "В зависимости от выбранного плана, обслуживание могилы производится от одного раза в месяц (Базовый план) до еженедельного обслуживания (Премиум план). Вы можете выбрать наиболее подходящую интенсивность в соответствии с вашими пожеланиями и бюджетом."
//               : "Je nach gewähltem Plan wird die Grabpflege von einmal im Monat (Basic-Plan) bis hin zur wöchentlichen Pflege (Premium-Plan) durchgeführt. Sie können die für Sie passende Intensität entsprechend Ihren Wünschen und Ihrem Budget wählen.",
//     },
//     {
//       question:
//         language === "lv"
//           ? "Vai varu pasūtīt kapu kopšanu vienreizēji, piemēram, pirms svētkiem?"
//           : language === "en"
//             ? "Can I order grave maintenance as a one-time service, for example before holidays?"
//             : language === "ru"
//               ? "Могу ли я заказать уход за могилой как разовую услугу, например, перед праздниками?"
//               : "Kann ich die Grabpflege als einmaligen Service bestellen, zum Beispiel vor Feiertagen?",
//       answer:
//         language === "lv"
//           ? "Jā, mēs piedāvājam arī vienreizējus kapu kopšanas pakalpojumus. Varat izvēlēties no mūsu standarta vienreizējiem pakalpojumiem vai pieprasīt individuālu piedāvājumu atbilstoši jūsu vajadzībām."
//           : language === "en"
//             ? "Yes, we also offer one-time grave maintenance services. You can choose from our standard one-time services or request an individual offer according to your needs."
//             : language === "ru"
//               ? "Да, мы также предлагаем разовые услуги по уходу за могилой. Вы можете выбрать из наших стандартных разовых услуг или запросить индивидуальное предложение в соответствии с вашими потребностями."
//               : "Ja, wir bieten auch einmalige Grabpflegedienste an. Sie können aus unseren Standard-Einzelleistungen wählen oder ein individuelles Angebot entsprechend Ihren Bedürfnissen anfordern.",
//     },
//     {
//       question:
//         language === "lv"
//           ? "Vai pakalpojums ir pieejams visos reģionos?"
//           : language === "en"
//             ? "Is the service available in all regions?"
//             : language === "ru"
//               ? "Доступна ли услуга во всех регионах?"
//               : "Ist der Service in allen Regionen verfügbar?",
//       answer:
//         language === "lv"
//           ? "Mūsu pakalpojumi ir pieejami visā Dienvidkurzemes novadā un Liepājā. Par citiem reģioniem, lūdzu, sazinieties ar mums individuāli - atkarībā no attāluma var tikt piemērota papildu maksa par transportu."
//           : language === "en"
//             ? "Our services are available throughout the Dienvidkurzeme region and in Liepāja. For other regions, please contact us individually - depending on the distance, an additional fee for transport may be applied."
//             : language === "ru"
//               ? "Наши услуги доступны по всему Южнокурземскому краю и в Лиепае. По другим регионам, пожалуйста, свяжитесь с нами индивидуально - в зависимости от расстояния может взиматься дополнительная плата за транспорт."
//               : "Unsere Dienstleistungen sind in der gesamten Region Dienvidkurzeme und in Liepāja verfügbar. Für andere Regionen kontaktieren Sie uns bitte individuell - je nach Entfernung kann eine zusätzliche Gebühr für den Transport anfallen.",
//     },
//     {
//       question:
//         language === "lv"
//           ? "Kā es varu redzēt, ka darbs ir paveikts kvalitatīvi?"
//           : language === "en"
//             ? "How can I see that the work has been done with quality?"
//             : language === "ru"
//               ? "Как я могу увидеть, что работа выполнена качественно?"
//               : "Wie kann ich sehen, dass die Arbeit qualitativ hochwertig ausgeführt wurde?",
//       answer:
//         language === "lv"
//           ? "Pēc katra apmeklējuma mēs nosūtām jums fotoatskaiti, kurā redzams kapu vietas stāvoklis pirms un pēc mūsu darba. Tā jūs varat būt pārliecināti par darba kvalitāti, pat ja nevarat personīgi apmeklēt kapu vietu."
//           : language === "en"
//             ? "After each visit, we send you a photo report showing the condition of the grave site before and after our work. This way you can be confident about the quality of work, even if you cannot personally visit the grave site."
//             : language === "ru"
//               ? "После каждого посещения мы отправляем вам фотоотчет, показывающий состояние могилы до и после нашей работы. Таким образом, вы можете быть уверены в качестве работы, даже если не можете лично посетить могилу."
//               : "Nach jedem Besuch senden wir Ihnen einen Fotobericht, der den Zustand des Grabes vor und nach unserer Arbeit zeigt. So können Sie von der Qualität der Arbeit überzeugt sein, auch wenn Sie das Grab nicht persönlich besuchen können.",
//     },
//     {
//       question:
//         language === "lv"
//           ? "Vai piedāvājat atlaides ilgtermiņa līgumiem?"
//           : language === "en"
//             ? "Do you offer discounts for long-term contracts?"
//             : language === "ru"
//               ? "Предлагаете ли вы скидки на долгосрочные контракты?"
//               : "Bieten Sie Rabatte für langfristige Verträge an?",
//       answer:
//         language === "lv"
//           ? "Jā, gada abonementam tiek piemērota 10% atlaide salīdzinājumā ar ikmēneša maksājumu summu. Ilgtermiņa klientiem mēs piedāvājam arī papildu priekšrocības un īpašus nosacījumus."
//           : language === "en"
//             ? "Yes, an annual subscription gets a 10% discount compared to the sum of monthly payments. For long-term clients, we also offer additional benefits and special conditions."
//             : language === "ru"
//               ? "Да, годовая подписка получает скидку 10% по сравнению с суммой ежемесячных платежей. Для долгосрочных клиентов мы также предлагаем дополнительные преимущества и особые условия."
//               : "Ja, ein Jahresabonnement erhält einen Rabatt von 10% im Vergleich zur Summe der monatlichen Zahlungen. Für Langzeitkunden bieten wir auch zusätzliche Vorteile und besondere Konditionen an.",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900">
//       {/* Hero Section */}
//       <section className="py-16 bg-white dark:bg-gray-800 md:py-20 lg:py-24">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
//               {language === "lv"
//                 ? "Mūsu cenas"
//                 : language === "en"
//                   ? "Our Pricing"
//                   : language === "ru"
//                     ? "Наши цены"
//                     : "Unsere Preise"}
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
//               {language === "lv"
//                 ? "Caurspīdīgas un godīgas cenas visiem pakalpojumiem"
//                 : language === "en"
//                   ? "Transparent and fair pricing for all services"
//                   : language === "ru"
//                     ? "Прозрачные и справедливые цены на все услуги"
//                     : "Transparente und faire Preise für alle Dienstleistungen"}
//             </p>
//             <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
//             <p className="mt-4 text-gray-600 dark:text-gray-300">
//               {language === "lv"
//                 ? "Mēs piedāvājam dažādus pakalpojumu plānus, lai apmierinātu visas jūsu vajadzības. Visas cenas ir norādītas bez PVN."
//                 : language === "en"
//                   ? "We offer various service plans to meet your needs. All prices are shown without VAT."
//                   : language === "ru"
//                     ? "Мы предлагаем различные планы обслуживания для удовлетворения ваших потребностей. Все цены указаны без НДС."
//                     : "Wir bieten verschiedene Servicepläne an, um alle Ihre Bedürfnisse zu erfüllen. Alle Preise verstehen sich ohne MwSt."}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Tabs */}
//       <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto mb-12">
//             {/* Tabs */}
//             <div className="flex p-1 bg-gray-100 rounded-lg dark:bg-gray-700">
//               <button
//                 onClick={() => setBillingType("subscription")}
//                 className={`flex-1 py-2 text-sm font-medium rounded-md ${
//                   billingType === "subscription"
//                     ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
//                     : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
//                 }`}
//               >
//                 {language === "lv"
//                   ? "Abonements"
//                   : language === "en"
//                     ? "Subscription"
//                     : language === "ru"
//                       ? "Абонемент"
//                       : "Abonnement"}
//               </button>
//               <button
//                 onClick={() => setBillingType("oneTime")}
//                 className={`flex-1 py-2 text-sm font-medium rounded-md ${
//                   billingType === "oneTime"
//                     ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
//                     : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
//                 }`}
//               >
//                 {language === "lv"
//                   ? "Vienreizējs pakalpojums"
//                   : language === "en"
//                     ? "One-time service"
//                     : language === "ru"
//                       ? "Разовая услуга"
//                       : "Einmalige Dienstleistung"}
//               </button>
//             </div>

//             {/* Subscription Interval Toggle */}
//             {billingType === "subscription" && (
//               <div className="flex justify-center mt-6">
//                 <div className="flex p-1 bg-gray-100 rounded-md dark:bg-gray-700">
//                   <button
//                     onClick={() => setBillingInterval("quarterly")}
//                     className={`px-4 py-2 text-sm font-medium rounded-md ${
//                       billingInterval === "quarterly"
//                         ? "bg-emerald-600 text-white shadow"
//                         : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
//                     }`}
//                   >
//                     {language === "lv"
//                       ? "Reizi 3 mēnešos"
//                       : language === "en"
//                         ? "Quarterly"
//                         : language === "ru"
//                           ? "Ежеквартально"
//                           : "Vierteljährlich"}
//                   </button>
//                   <button
//                     onClick={() => setBillingInterval("yearly")}
//                     className={`px-4 py-2 text-sm font-medium rounded-md ${
//                       billingInterval === "yearly"
//                         ? "bg-emerald-600 text-white shadow"
//                         : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
//                     }`}
//                   >
//                     {language === "lv"
//                       ? "Gadā"
//                       : language === "en"
//                         ? "Yearly"
//                         : language === "ru"
//                           ? "Ежегодно"
//                           : "Jährlich"}
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Subscription Plans */}
//           {billingType === "subscription" && (
//             <div>
//               {/* Size-based plans */}
//               <div className="mb-6">
//                 <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8 text-center">
//                   {t.serviceDetails.pricing.title}
//                 </h2>
//                 <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//                   {sizePlans.map((plan, index) => (
//                     <motion.div
//                       key={plan.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: index * 0.1 }}
//                       className={`flex flex-col p-8 bg-white border rounded-lg shadow-sm dark:bg-gray-800 ${
//                         plan.featured
//                           ? "border-emerald-600 dark:border-emerald-500 ring-1 ring-emerald-600 dark:ring-emerald-500"
//                           : "border-gray-200 dark:border-gray-700"
//                       }`}
//                     >
//                       <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                         {plan.name}
//                       </h3>
//                       <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                         {plan.size}
//                       </div>
//                       <p className="mt-2 text-gray-600 dark:text-gray-300">
//                         {plan.description}
//                       </p>
//                       <div className="mt-4">
//                         <span className="text-4xl font-bold text-gray-900 dark:text-white">
//                           €
//                           {billingInterval === "quarterly"
//                             ? plan.price
//                             : plan.yearlyPrice}
//                         </span>
//                         <span className="text-gray-600 dark:text-gray-300">
//                           /
//                           {billingInterval === "quarterly"
//                             ? language === "lv"
//                               ? t.serviceDetails.pricing.quarterly
//                               : language === "en"
//                                 ? t.serviceDetails.pricing.quarterly
//                                 : language === "ru"
//                                   ? t.serviceDetails.pricing.quarterly
//                                   : t.serviceDetails.pricing.quarterly
//                             : language === "lv"
//                               ? t.serviceDetails.pricing.yearly
//                               : language === "en"
//                                 ? t.serviceDetails.pricing.yearly
//                                 : language === "ru"
//                                   ? t.serviceDetails.pricing.yearly
//                                   : t.serviceDetails.pricing.yearly}
//                         </span>
//                       </div>

//                       <ul className="flex-1 mt-6 space-y-4">
//                         <li className="text-sm font-medium text-gray-900 dark:text-white">
//                           {language === "lv"
//                             ? "Ietver šādus pakalpojumus:"
//                             : language === "en"
//                               ? "Includes the following services:"
//                               : language === "ru"
//                                 ? "Включает следующие услуги:"
//                                 : "Beinhaltet die folgenden Dienstleistungen:"}
//                         </li>
//                         {[...Array(5)].map((_, i) => (
//                           <li key={i} className="flex items-start">
//                             <CheckIcon className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400" />
//                             <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
//                               {language === "lv"
//                                 ? [
//                                     "Regulāra kapu vietas uzturēšana",
//                                     "Sezonālie darbi (pavasaris, vasara, rudens)",
//                                     "Sveču un veco ziedu novākšana",
//                                     "Lapu un citu gružu savākšana",
//                                     "Fotoatskaite pēc katras apkopes",
//                                   ][i]
//                                 : language === "en"
//                                   ? [
//                                       "Regular grave site maintenance",
//                                       "Seasonal work (spring, summer, autumn)",
//                                       "Removal of candles and old flowers",
//                                       "Leaf and debris collection",
//                                       "Photo report after each maintenance",
//                                     ][i]
//                                   : language === "ru"
//                                     ? [
//                                         "Регулярное обслуживание могилы",
//                                         "Сезонные работы (весна, лето, осень)",
//                                         "Уборка свечей и старых цветов",
//                                         "Сбор листьев и мусора",
//                                         "Фотоотчет после каждого обслуживания",
//                                       ][i]
//                                     : [
//                                         "Regelmäßige Grabpflege",
//                                         "Saisonale Arbeiten (Frühling, Sommer, Herbst)",
//                                         "Entfernung von Kerzen und alten Blumen",
//                                         "Sammeln von Laub und Unrat",
//                                         "Fotobericht nach jeder Pflege",
//                                       ][i]}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>

//                       <div className="mt-8">
//                         <Link
//                           href="/contact"
//                           className={`block w-full px-4 py-2 text-sm font-medium text-center rounded-md ${
//                             plan.featured
//                               ? "text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
//                               : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100 dark:text-emerald-400 dark:bg-gray-700 dark:hover:bg-gray-600"
//                           }`}
//                         >
//                           {language === "lv"
//                             ? "Sazināties ar mums"
//                             : language === "en"
//                               ? "Contact Us"
//                               : language === "ru"
//                                 ? "Связаться с нами"
//                                 : "Kontaktieren Sie uns"}
//                         </Link>
//                       </div>

//                       <div className="mt-4 flex items-center">
//                         <InfoIcon className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-1" />
//                         <p className="text-xs text-gray-500 dark:text-gray-400">
//                           {t.serviceDetails.pricing.note}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Service packages */}
//               <div className="mt-20">
//                 <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4 text-center">
//                   {t.serviceDetails.packages.title}
//                 </h2>
//                 <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
//                   {t.serviceDetails.packages.subtitle}
//                 </p>

//                 <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//                   {packagePlans.map((plan, index) => (
//                     <motion.div
//                       key={plan.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: index * 0.1 }}
//                       className={`flex flex-col p-8 bg-white border rounded-lg shadow-sm dark:bg-gray-800 ${
//                         plan.featured
//                           ? "border-emerald-600 dark:border-emerald-500 ring-1 ring-emerald-600 dark:ring-emerald-500"
//                           : "border-gray-200 dark:border-gray-700"
//                       }`}
//                     >
//                       <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                         {plan.name}
//                       </h3>
//                       <p className="mt-2 text-gray-600 dark:text-gray-300">
//                         {plan.description}
//                       </p>
//                       <div className="mt-4">
//                         <span className="text-4xl font-bold text-gray-900 dark:text-white">
//                           €
//                           {billingInterval === "quarterly"
//                             ? plan.price
//                             : plan.yearlyPrice}
//                         </span>
//                         <span className="text-gray-600 dark:text-gray-300">
//                           /
//                           {billingInterval === "quarterly"
//                             ? language === "lv"
//                               ? t.serviceDetails.pricing.quarterly
//                               : language === "en"
//                                 ? t.serviceDetails.pricing.quarterly
//                                 : language === "ru"
//                                   ? t.serviceDetails.pricing.quarterly
//                                   : t.serviceDetails.pricing.quarterly
//                             : language === "lv"
//                               ? t.serviceDetails.pricing.yearly
//                               : language === "en"
//                                 ? t.serviceDetails.pricing.yearly
//                                 : language === "ru"
//                                   ? t.serviceDetails.pricing.yearly
//                                   : t.serviceDetails.pricing.yearly}
//                         </span>
//                       </div>

//                       <ul className="flex-1 mt-6 space-y-4">
//                         <li className="text-sm font-medium text-gray-900 dark:text-white">
//                           {plan.dressing}
//                         </li>
//                         {plan.features.map((feature, i) => (
//                           <li key={i} className="flex items-start">
//                             <CheckIcon className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400" />
//                             <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
//                               {feature}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>

//                       <div className="mt-8">
//                         <Link
//                           href="/contact"
//                           className={`block w-full px-4 py-2 text-sm font-medium text-center rounded-md ${
//                             plan.featured
//                               ? "text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
//                               : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100 dark:text-emerald-400 dark:bg-gray-700 dark:hover:bg-gray-600"
//                           }`}
//                         >
//                           {language === "lv"
//                             ? "Sazināties ar mums"
//                             : language === "en"
//                               ? "Contact Us"
//                               : language === "ru"
//                                 ? "Связаться с нами"
//                                 : "Kontaktieren Sie uns"}
//                         </Link>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Payment information */}
//               <div className="mt-12 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
//                 <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//                   {language === "lv"
//                     ? "Svarīga informācija par maksājumiem"
//                     : language === "en"
//                       ? "Important payment information"
//                       : language === "ru"
//                         ? "Важная информация об оплате"
//                         : "Wichtige Zahlungsinformationen"}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-2">
//                   {t.serviceDetails.pricing.paymentNote}
//                 </p>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   {t.serviceDetails.pricing.additionalNote}
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Single Services */}
//           {billingType === "oneTime" && (
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//               {singleServices.map((service, index) => (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   className="flex flex-col p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
//                 >
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                     {service.name}
//                   </h3>
//                   <p className="mt-2 text-gray-600 dark:text-gray-300">
//                     {service.description}
//                   </p>
//                   <div className="mt-4">
//                     <span className="text-4xl font-bold text-gray-900 dark:text-white">
//                       €{service.price}
//                     </span>
//                   </div>

//                   <ul className="flex-1 mt-6 space-y-4">
//                     <li className="text-sm font-medium text-gray-900 dark:text-white">
//                       {language === "lv"
//                         ? "Ietver šādus pakalpojumus:"
//                         : language === "en"
//                           ? "Includes the following services:"
//                           : language === "ru"
//                             ? "Включает следующие услуги:"
//                             : "Beinhaltet die folgenden Dienstleistungen:"}
//                     </li>
//                     {service.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start">
//                         <CheckIcon className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400" />
//                         <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="mt-8">
//                     <Link
//                       href="/contact"
//                       className="block w-full px-4 py-2 text-sm font-medium text-center text-white bg-emerald-600 rounded-md hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
//                     >
//                       {language === "lv"
//                         ? "Sazināties ar mums"
//                         : language === "en"
//                           ? "Contact Us"
//                           : language === "ru"
//                             ? "Связаться с нами"
//                             : "Kontaktieren Sie uns"}
//                     </Link>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Custom Plan */}
//           <div className="max-w-3xl p-8 mx-auto mt-16 bg-gray-50 rounded-lg dark:bg-gray-900">
//             <div className="text-center">
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
//                 {language === "lv"
//                   ? "Individuāls plāns"
//                   : language === "en"
//                     ? "Custom Plan"
//                     : language === "ru"
//                       ? "Индивидуальный план"
//                       : "Individueller Plan"}
//               </h3>
//               <p className="mt-2 text-gray-600 dark:text-gray-300">
//                 {language === "lv"
//                   ? "Individuāli pielāgots risinājums atbilstoši jūsu vajadzībām"
//                   : language === "en"
//                     ? "Custom tailored solution according to your needs"
//                     : language === "ru"
//                       ? "Индивидуальное решение в соответствии с вашими потребностями"
//                       : "Maßgeschneiderte Lösung nach Ihren Bedürfnissen"}
//               </p>
//               <div className="mt-6">
//                 <Link
//                   href="/contact"
//                   className="inline-block px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
//                 >
//                   {language === "lv"
//                     ? "Pieprasīt piedāvājumu"
//                     : language === "en"
//                       ? "Request a quote"
//                       : language === "ru"
//                         ? "Запросить предложение"
//                         : "Angebot anfordern"}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 bg-gray-50 dark:bg-gray-900 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-2xl font-serif font-bold text-center text-gray-900 dark:text-white sm:text-3xl mb-12">
//               {language === "lv"
//                 ? "Biežāk uzdotie jautājumi"
//                 : language === "en"
//                   ? "Frequently Asked Questions"
//                   : language === "ru"
//                     ? "Часто задаваемые вопросы"
//                     : "Häufig gestellte Fragen"}
//             </h2>

//             <div className="mt-8 space-y-6">
//               {faqItems.map((faq, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
//                 >
//                   <button
//                     onClick={() =>
//                       setActiveTab(activeTab === index ? -1 : index)
//                     }
//                     className="flex items-start justify-between w-full text-left"
//                   >
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                       {faq.question}
//                     </h3>
//                     <span className="ml-4">
//                       {activeTab === index ? (
//                         <svg
//                           className="w-5 h-5 text-gray-500 dark:text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 15l7-7 7 7"
//                           />
//                         </svg>
//                       ) : (
//                         <svg
//                           className="w-5 h-5 text-gray-500 dark:text-gray-400"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       )}
//                     </span>
//                   </button>
//                   {activeTab === index && (
//                     <div className="mt-4 text-gray-600 dark:text-gray-300">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="px-6 py-10 text-center bg-emerald-600 rounded-lg dark:bg-emerald-700 md:py-16 md:px-12">
//             <h2 className="text-2xl font-serif font-bold tracking-tight text-white sm:text-3xl">
//               {language === "lv" && "Gatavi sākt?"}
//               {language === "en" && "Ready to get started?"}
//               {language === "ru" && "Готовы начать?"}
//               {language === "de" && "Bereit anzufangen?"}
//             </h2>
//             <p className="max-w-2xl mx-auto mt-4 text-lg text-emerald-50">
//               {language === "lv" &&
//                 "Sazinieties ar mums, lai uzzinātu vairāk par mūsu pakalpojumiem un kā mēs varam palīdzēt."}
//               {language === "en" &&
//                 "Contact us to learn more about our services and how we can help you."}
//               {language === "ru" &&
//                 "Свяжитесь с нами, чтобы узнать больше о наших услугах и о том, как мы можем вам помочь."}
//               {language === "de" &&
//                 "Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren und wie wir Ihnen helfen können."}
//             </p>
//             <div className="mt-8">
//               <Link
//                 href="/contact"
//                 className="inline-block px-6 py-3 text-base font-medium text-emerald-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
//               >
//                 {language === "lv"
//                   ? "Sazināties ar mums"
//                   : language === "en"
//                     ? "Contact Us"
//                     : language === "ru"
//                       ? "Связаться с нами"
//                       : "Kontaktieren Sie uns"}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
