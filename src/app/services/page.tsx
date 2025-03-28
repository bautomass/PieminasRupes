"use client";

import { useState } from "react";
import Link from "next/link";
// Removed unused Image import
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import {
  SparklesIcon,
  FlowerIcon,
  ToolsIcon,
  HeartIcon,
  CheckIcon,
} from "@/components/Icons";
import ServiceDetail from "@/components/ServiceDetail";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: "regular",
      icon: SparklesIcon,
      title: t.services.regular.title,
      description: t.services.regular.description,
      features: [
        language === "lv"
          ? "Regulāra zāles pļaušana ap kapu"
          : language === "en"
            ? "Regular grass cutting around the grave"
            : language === "ru"
              ? "Регулярное скашивание травы вокруг могилы"
              : "Regelmäßiges Rasenmähen um das Grab",
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
          ? "Smilšu atjaunošana un izlīdzināšana"
          : language === "en"
            ? "Sand restoration and leveling"
            : language === "ru"
              ? "Восстановление и выравнивание песка"
              : "Sandwiederherstellung und Nivellierung",
        language === "lv"
          ? "Sveču un veco ziedu novākšana"
          : language === "en"
            ? "Removal of candles and old flowers"
            : language === "ru"
              ? "Уборка свечей и старых цветов"
              : "Entfernung von Kerzen und alten Blumen",
      ],
      imageAlt:
        language === "lv"
          ? "Regulāra kapu kopšana"
          : language === "en"
            ? "Regular grave maintenance"
            : language === "ru"
              ? "Регулярный уход за могилой"
              : "Regelmäßige Grabpflege",
    },
    {
      id: "seasonal",
      icon: FlowerIcon,
      title: t.services.seasonal.title,
      description: t.services.seasonal.description,
      features: [
        language === "lv"
          ? "Sezonālo puķu stādīšana un kopšana"
          : language === "en"
            ? "Planting and care of seasonal flowers"
            : language === "ru"
              ? "Посадка и уход за сезонными цветами"
              : "Pflanzung und Pflege von Saisonblumen",
        language === "lv"
          ? "Kapu vietas sagatavošana svētkiem"
          : language === "en"
            ? "Grave site preparation for holidays"
            : language === "ru"
              ? "Подготовка могилы к праздникам"
              : "Vorbereitung des Grabes für Feiertage",
        language === "lv"
          ? "Ziemas apsaimniekošana un sniega tīrīšana"
          : language === "en"
            ? "Winter maintenance and snow removal"
            : language === "ru"
              ? "Зимнее обслуживание и уборка снега"
              : "Winterwartung und Schneeräumung",
        language === "lv"
          ? "Pavasara ģenerāltīrīšana pēc ziemas sezonas"
          : language === "en"
            ? "Spring general cleaning after winter season"
            : language === "ru"
              ? "Весенняя генеральная уборка после зимнего сезона"
              : "Frühjahrsreinigung nach der Wintersaison",
        language === "lv"
          ? "Dekoratīvo elementu uzturēšana un nomaiņa"
          : language === "en"
            ? "Maintenance and replacement of decorative elements"
            : language === "ru"
              ? "Обслуживание и замена декоративных элементов"
              : "Pflege und Austausch von Dekoelementen",
      ],
      imageAlt:
        language === "lv"
          ? "Sezonālie kapu kopšanas darbi"
          : language === "en"
            ? "Seasonal grave maintenance"
            : language === "ru"
              ? "Сезонные работы по уходу за могилой"
              : "Saisonale Grabpflege",
    },
    {
      id: "restoration",
      icon: ToolsIcon,
      title: t.services.restoration.title,
      description: t.services.restoration.description,
      features: [
        language === "lv"
          ? "Pieminekļu tīrīšana ar speciāliem līdzekļiem"
          : language === "en"
            ? "Monument cleaning with special products"
            : language === "ru"
              ? "Чистка памятников специальными средствами"
              : "Denkmalsreinigung mit Spezialmitteln",
        language === "lv"
          ? "Pieminekļu un kapu plākšņu atjaunošana"
          : language === "en"
            ? "Monument and grave plate restoration"
            : language === "ru"
              ? "Реставрация памятников и надгробных плит"
              : "Restaurierung von Denkmälern und Grabplatten",
        language === "lv"
          ? "Kapu apmales labošana un atjaunošana"
          : language === "en"
            ? "Grave border repair and restoration"
            : language === "ru"
              ? "Ремонт и восстановление оград"
              : "Reparatur und Restaurierung der Grabeinfassung",
        language === "lv"
          ? "Kapu vietas infrastruktūras labiekārtošana"
          : language === "en"
            ? "Grave site infrastructure improvement"
            : language === "ru"
              ? "Улучшение инфраструктуры места захоронения"
              : "Verbesserung der Grabinfrastruktur",
      ],
      imageAlt:
        language === "lv"
          ? "Pieminekļu atjaunošana un tīrīšana"
          : language === "en"
            ? "Monument restoration and cleaning"
            : language === "ru"
              ? "Реставрация и чистка памятников"
              : "Denkmalrestaurierung und -reinigung",
    },
    {
      id: "custom",
      icon: HeartIcon,
      title: t.services.custom.title,
      description: t.services.custom.description,
      features: [
        language === "lv"
          ? "Īpaši pieprasījumi kapu kopšanā"
          : language === "en"
            ? "Special requests in grave care"
            : language === "ru"
              ? "Особые запросы по уходу за могилой"
              : "Spezielle Anfragen bei der Grabpflege",
        language === "lv"
          ? "Konsultācijas par kapu vietas labiekārtošanu"
          : language === "en"
            ? "Consultations on grave site improvement"
            : language === "ru"
              ? "Консультации по благоустройству места захоронения"
              : "Beratung zur Grabverbesserung",
        language === "lv"
          ? "Kapavietas meklēšana un situācijas novērtējums"
          : language === "en"
            ? "Grave site location and situation assessment"
            : language === "ru"
              ? "Поиск могилы и оценка ситуации"
              : "Grabstellenortung und Situationsbewertung",
        language === "lv"
          ? "Individuāli kopšanas grafiki un risinājumi"
          : language === "en"
            ? "Individual maintenance schedules and solutions"
            : language === "ru"
              ? "Индивидуальные графики обслуживания и решения"
              : "Individuelle Wartungspläne und Lösungen",
        language === "lv"
          ? "Personalizēts serviss atbilstoši jūsu vēlmēm"
          : language === "en"
            ? "Personalized service according to your wishes"
            : language === "ru"
              ? "Персонализированный сервис в соответствии с вашими пожеланиями"
              : "Personalisierter Service nach Ihren Wünschen",
      ],
      imageAlt:
        language === "lv"
          ? "Individuāla kapu kopšana"
          : language === "en"
            ? "Custom grave care"
            : language === "ru"
              ? "Индивидуальный уход за могилой"
              : "Individuelle Grabpflege",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-gray-800 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              {t.services.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t.services.subtitle}
            </p>
            <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                  activeService === service.id
                    ? "ring-2 ring-emerald-500 dark:ring-emerald-400"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className="p-6">
                  <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 w-fit mb-4">
                    <service.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="ml-2.5 text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() =>
                      setActiveService(
                        activeService === service.id ? null : service.id
                      )
                    }
                    className="w-full px-4 py-2 text-center text-sm font-medium border rounded-md 
                    transition-colors duration-200
                    bg-emerald-50 text-emerald-600 border-emerald-200 
                    hover:bg-emerald-100 hover:border-emerald-300
                    dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800
                    dark:hover:bg-emerald-900/30 dark:hover:border-emerald-700"
                  >
                    {activeService === service.id
                      ? language === "lv"
                        ? "Mazāk informācijas"
                        : language === "en"
                          ? "Less information"
                          : language === "ru"
                            ? "Меньше информации"
                            : "Weniger Informationen"
                      : language === "lv"
                        ? "Vairāk informācijas"
                        : language === "en"
                          ? "More information"
                          : language === "ru"
                            ? "Больше информации"
                            : "Mehr Informationen"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      {activeService && (
        <section className="py-16 bg-white dark:bg-gray-800 border-t border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <ServiceDetail
              serviceId={
                activeService as
                  | "regular"
                  | "seasonal"
                  | "restoration"
                  | "custom"
              }
            />
          </div>
        </section>
      )}

      {/* Service Area Section */}
      <section className="py-16 md:py-20 bg-emerald-600 dark:bg-emerald-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl font-serif font-bold mb-6 md:text-3xl">
              {t.memorial.serviceArea}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              {t.memorial.serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg shadow-inner"
                >
                  <span className="text-lg">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium bg-white text-emerald-700 rounded-md hover:bg-gray-100 transition-colors"
              >
                {t.memorial.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
        <div className="container mx-auto px-4">
          <div className="px-6 py-10 text-center bg-gray-50 rounded-lg dark:bg-gray-900 md:py-16 md:px-12">
            <h2 className="text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              {language === "lv" && "Vai esat gatavi sākt?"}
              {language === "en" && "Ready to get started?"}
              {language === "ru" && "Готовы начать?"}
              {language === "de" && "Bereit anzufangen?"}
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
              {language === "lv" &&
                "Sazinieties ar mums, lai uzzinātu vairāk par mūsu pakalpojumiem un kā mēs varam palīdzēt jums nodrošināt cienīgu piemiņu jūsu tuviniekiem."}
              {language === "en" &&
                "Contact us to learn more about our services and how we can help you ensure a dignified memory for your loved ones."}
              {language === "ru" &&
                "Свяжитесь с нами, чтобы узнать больше о наших услугах и о том, как мы можем помочь вам обеспечить достойную память о ваших близких."}
              {language === "de" &&
                "Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren und wie wir Ihnen helfen können, ein würdiges Andenken an Ihre Lieben zu gewährleisten."}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
              >
                {t.cta.button}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useLanguage } from "@/context/LanguageContext";
// import { translations } from "@/lib/translations";
// import {
//   SparklesIcon,
//   FlowerIcon,
//   ToolsIcon,
//   HeartIcon,
//   CheckIcon,
// } from "@/components/Icons";
// import ServiceDetail from "@/components/ServiceDetail";
// import { motion } from "framer-motion";

// export default function ServicesPage() {
//   const { language } = useLanguage();
//   const t = translations[language as keyof typeof translations];
//   const [activeService, setActiveService] = useState<string | null>(null);

//   const services = [
//     {
//       id: "regular",
//       icon: SparklesIcon,
//       title: t.services.regular.title,
//       description: t.services.regular.description,
//       features: [
//         language === "lv"
//           ? "Regulāra zāles pļaušana ap kapu"
//           : language === "en"
//             ? "Regular grass cutting around the grave"
//             : language === "ru"
//               ? "Регулярное скашивание травы вокруг могилы"
//               : "Regelmäßiges Rasenmähen um das Grab",
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
//           ? "Smilšu atjaunošana un izlīdzināšana"
//           : language === "en"
//             ? "Sand restoration and leveling"
//             : language === "ru"
//               ? "Восстановление и выравнивание песка"
//               : "Sandwiederherstellung und Nivellierung",
//         language === "lv"
//           ? "Sveču un veco ziedu novākšana"
//           : language === "en"
//             ? "Removal of candles and old flowers"
//             : language === "ru"
//               ? "Уборка свечей и старых цветов"
//               : "Entfernung von Kerzen und alten Blumen",
//       ],
//       imageAlt:
//         language === "lv"
//           ? "Regulāra kapu kopšana"
//           : language === "en"
//             ? "Regular grave maintenance"
//             : language === "ru"
//               ? "Регулярный уход за могилой"
//               : "Regelmäßige Grabpflege",
//     },
//     {
//       id: "seasonal",
//       icon: FlowerIcon,
//       title: t.services.seasonal.title,
//       description: t.services.seasonal.description,
//       features: [
//         language === "lv"
//           ? "Sezonālo puķu stādīšana un kopšana"
//           : language === "en"
//             ? "Planting and care of seasonal flowers"
//             : language === "ru"
//               ? "Посадка и уход за сезонными цветами"
//               : "Pflanzung und Pflege von Saisonblumen",
//         language === "lv"
//           ? "Kapu vietas sagatavošana svētkiem"
//           : language === "en"
//             ? "Grave site preparation for holidays"
//             : language === "ru"
//               ? "Подготовка могилы к праздникам"
//               : "Vorbereitung des Grabes für Feiertage",
//         language === "lv"
//           ? "Ziemas apsaimniekošana un sniega tīrīšana"
//           : language === "en"
//             ? "Winter maintenance and snow removal"
//             : language === "ru"
//               ? "Зимнее обслуживание и уборка снега"
//               : "Winterwartung und Schneeräumung",
//         language === "lv"
//           ? "Pavasara ģenerāltīrīšana pēc ziemas sezonas"
//           : language === "en"
//             ? "Spring general cleaning after winter season"
//             : language === "ru"
//               ? "Весенняя генеральная уборка после зимнего сезона"
//               : "Frühjahrsreinigung nach der Wintersaison",
//         language === "lv"
//           ? "Dekoratīvo elementu uzturēšana un nomaiņa"
//           : language === "en"
//             ? "Maintenance and replacement of decorative elements"
//             : language === "ru"
//               ? "Обслуживание и замена декоративных элементов"
//               : "Pflege und Austausch von Dekoelementen",
//       ],
//       imageAlt:
//         language === "lv"
//           ? "Sezonālie kapu kopšanas darbi"
//           : language === "en"
//             ? "Seasonal grave maintenance"
//             : language === "ru"
//               ? "Сезонные работы по уходу за могилой"
//               : "Saisonale Grabpflege",
//     },
//     {
//       id: "restoration",
//       icon: ToolsIcon,
//       title: t.services.restoration.title,
//       description: t.services.restoration.description,
//       features: [
//         language === "lv"
//           ? "Pieminekļu tīrīšana ar speciāliem līdzekļiem"
//           : language === "en"
//             ? "Monument cleaning with special products"
//             : language === "ru"
//               ? "Чистка памятников специальными средствами"
//               : "Denkmalsreinigung mit Spezialmitteln",
//         language === "lv"
//           ? "Pieminekļu un kapu plākšņu atjaunošana"
//           : language === "en"
//             ? "Monument and grave plate restoration"
//             : language === "ru"
//               ? "Реставрация памятников и надгробных плит"
//               : "Restaurierung von Denkmälern und Grabplatten",
//         language === "lv"
//           ? "Kapu apmales labošana un atjaunošana"
//           : language === "en"
//             ? "Grave border repair and restoration"
//             : language === "ru"
//               ? "Ремонт и восстановление оград"
//               : "Reparatur und Restaurierung der Grabeinfassung",
//         language === "lv"
//           ? "Kapu vietas infrastruktūras labiekārtošana"
//           : language === "en"
//             ? "Grave site infrastructure improvement"
//             : language === "ru"
//               ? "Улучшение инфраструктуры места захоронения"
//               : "Verbesserung der Grabinfrastruktur",
//       ],
//       imageAlt:
//         language === "lv"
//           ? "Pieminekļu atjaunošana un tīrīšana"
//           : language === "en"
//             ? "Monument restoration and cleaning"
//             : language === "ru"
//               ? "Реставрация и чистка памятников"
//               : "Denkmalrestaurierung und -reinigung",
//     },
//     {
//       id: "custom",
//       icon: HeartIcon,
//       title: t.services.custom.title,
//       description: t.services.custom.description,
//       features: [
//         language === "lv"
//           ? "Īpaši pieprasījumi kapu kopšanā"
//           : language === "en"
//             ? "Special requests in grave care"
//             : language === "ru"
//               ? "Особые запросы по уходу за могилой"
//               : "Spezielle Anfragen bei der Grabpflege",
//         language === "lv"
//           ? "Konsultācijas par kapu vietas labiekārtošanu"
//           : language === "en"
//             ? "Consultations on grave site improvement"
//             : language === "ru"
//               ? "Консультации по благоустройству места захоронения"
//               : "Beratung zur Grabverbesserung",
//         language === "lv"
//           ? "Kapavietas meklēšana un situācijas novērtējums"
//           : language === "en"
//             ? "Grave site location and situation assessment"
//             : language === "ru"
//               ? "Поиск могилы и оценка ситуации"
//               : "Grabstellenortung und Situationsbewertung",
//         language === "lv"
//           ? "Individuāli kopšanas grafiki un risinājumi"
//           : language === "en"
//             ? "Individual maintenance schedules and solutions"
//             : language === "ru"
//               ? "Индивидуальные графики обслуживания и решения"
//               : "Individuelle Wartungspläne und Lösungen",
//         language === "lv"
//           ? "Personalizēts serviss atbilstoši jūsu vēlmēm"
//           : language === "en"
//             ? "Personalized service according to your wishes"
//             : language === "ru"
//               ? "Персонализированный сервис в соответствии с вашими пожеланиями"
//               : "Personalisierter Service nach Ihren Wünschen",
//       ],
//       imageAlt:
//         language === "lv"
//           ? "Individuāla kapu kopšana"
//           : language === "en"
//             ? "Custom grave care"
//             : language === "ru"
//               ? "Индивидуальный уход за могилой"
//               : "Individuelle Grabpflege",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900">
//       {/* Hero Section */}
//       <section className="py-16 bg-white dark:bg-gray-800 md:py-20 lg:py-24">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
//               {t.services.title}
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
//               {t.services.subtitle}
//             </p>
//             <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
//           </div>
//         </div>
//       </section>

//       {/* Services Cards Section */}
//       <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className={`bg-white dark:bg-gray-800 border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
//                   activeService === service.id
//                     ? "ring-2 ring-emerald-500 dark:ring-emerald-400"
//                     : "border-gray-200 dark:border-gray-700"
//                 }`}
//               >
//                 <div className="p-6">
//                   <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 w-fit mb-4">
//                     <service.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-300 mb-5">
//                     {service.description}
//                   </p>

//                   <ul className="space-y-2 mb-6">
//                     {service.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start">
//                         <CheckIcon className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400" />
//                         <span className="ml-2.5 text-sm text-gray-600 dark:text-gray-300">
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>

//                   <button
//                     onClick={() =>
//                       setActiveService(
//                         activeService === service.id ? null : service.id
//                       )
//                     }
//                     className="w-full px-4 py-2 text-center text-sm font-medium border rounded-md
//                     transition-colors duration-200
//                     bg-emerald-50 text-emerald-600 border-emerald-200
//                     hover:bg-emerald-100 hover:border-emerald-300
//                     dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800
//                     dark:hover:bg-emerald-900/30 dark:hover:border-emerald-700"
//                   >
//                     {activeService === service.id
//                       ? language === "lv"
//                         ? "Mazāk informācijas"
//                         : language === "en"
//                           ? "Less information"
//                           : language === "ru"
//                             ? "Меньше информации"
//                             : "Weniger Informationen"
//                       : language === "lv"
//                         ? "Vairāk informācijas"
//                         : language === "en"
//                           ? "More information"
//                           : language === "ru"
//                             ? "Больше информации"
//                             : "Mehr Informationen"}
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Details Section */}
//       {activeService && (
//         <section className="py-16 bg-white dark:bg-gray-800 border-t border-b border-gray-200 dark:border-gray-700">
//           <div className="container mx-auto px-4">
//             <ServiceDetail
//               serviceId={
//                 activeService as
//                   | "regular"
//                   | "seasonal"
//                   | "restoration"
//                   | "custom"
//               }
//             />
//           </div>
//         </section>
//       )}

//       {/* Service Area Section */}
//       <section className="py-16 md:py-20 bg-emerald-600 dark:bg-emerald-700">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center text-white">
//             <h2 className="text-2xl font-serif font-bold mb-6 md:text-3xl">
//               {t.memorial.serviceArea}
//             </h2>
//             <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
//               {t.memorial.serviceAreas.map((area, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg shadow-inner"
//                 >
//                   <span className="text-lg">{area}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-10">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center px-6 py-3 text-base font-medium bg-white text-emerald-700 rounded-md hover:bg-gray-100 transition-colors"
//               >
//                 {t.memorial.ctaButton}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="px-6 py-10 text-center bg-gray-50 rounded-lg dark:bg-gray-900 md:py-16 md:px-12">
//             <h2 className="text-2xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
//               {language === "lv" && "Vai esat gatavi sākt?"}
//               {language === "en" && "Ready to get started?"}
//               {language === "ru" && "Готовы начать?"}
//               {language === "de" && "Bereit anzufangen?"}
//             </h2>
//             <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
//               {language === "lv" &&
//                 "Sazinieties ar mums, lai uzzinātu vairāk par mūsu pakalpojumiem un kā mēs varam palīdzēt jums nodrošināt cienīgu piemiņu jūsu tuviniekiem."}
//               {language === "en" &&
//                 "Contact us to learn more about our services and how we can help you ensure a dignified memory for your loved ones."}
//               {language === "ru" &&
//                 "Свяжитесь с нами, чтобы узнать больше о наших услугах и о том, как мы можем помочь вам обеспечить достойную память о ваших близких."}
//               {language === "de" &&
//                 "Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren und wie wir Ihnen helfen können, ein würdiges Andenken an Ihre Lieben zu gewährleisten."}
//             </p>
//             <div className="mt-8">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
//               >
//                 {t.cta.button}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
