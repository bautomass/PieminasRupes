"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import {
  SparklesIcon,
  FlowerIcon,
  ToolsIcon,
  HeartIcon,
  CheckIcon,
  CalendarIcon,
  SearchIcon,
  InfoIcon,
} from "@/components/Icons";
import ServiceDetail from "@/components/ServiceDetail";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

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
      <section className="py-10 bg-white dark:bg-gray-800 md:py-10 lg:py-12">
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

      {/* Pricing Section - Moved to top as requested */}
      <section className="py-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium text-sm uppercase px-5 py-2 rounded-full tracking-wider border border-emerald-100 dark:border-emerald-800/20 shadow-sm mb-4">
                {language === "lv"
                  ? "Kapu kopšanas pakalpojumu cenas"
                  : "Grave Care Service Pricing"}
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                {language === "lv"
                  ? "Cenas atkarīgas no kapavietas izmēra"
                  : t.serviceDetails.pricing.title}
              </h2>
              <div className="mx-auto w-32 h-[2px] bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700 mb-8"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {language === "lv"
                  ? "Mūsu pakalpojumu cenas ir pielāgotas dažāda izmēra kapavietām, nodrošinot taisnīgu un atbilstošu aprūpi"
                  : "Our service prices are adapted to different sized grave sites, ensuring fair and appropriate care"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.serviceDetails.pricing.sizes.map((size, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-800/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-800 border-b border-gray-100 dark:border-gray-700 p-4">
                    <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">
                      {size.title}
                    </h3>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                      {size.size}
                    </p>
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-6 py-4 rounded-lg border border-emerald-100 dark:border-emerald-800/20 mx-auto inline-block shadow-sm">
                      {size.price}€
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-base italic bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-w-2xl mx-auto">
                {language === "lv"
                  ? "* Transports NAV iekļauts cenā"
                  : t.serviceDetails.pricing.note}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Services Cards Section */}
      <section
        className="py-16 md:py-20 bg-white dark:bg-gray-800"
        id="services-cards"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium text-sm uppercase px-5 py-2 rounded-full tracking-wider border border-emerald-100 dark:border-emerald-800/20 shadow-sm mb-4">
              {language === "lv"
                ? "Mūsu piedāvātie pakalpojumi"
                : "Our Services"}
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              {language === "lv"
                ? "Profesionāla kapu kopšana"
                : "Professional Grave Care"}
            </h2>
            <div className="mx-auto w-32 h-[2px] bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700 mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "lv"
                ? "Izvēlieties pakalpojumus, kas vislabāk atbilst jūsu vajadzībām un vēlmēm"
                : "Choose services that best match your needs and wishes"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${
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

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="ml-2.5 text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative pb-10 mt-6">
                    <button
                      onClick={() =>
                        setActiveService(
                          activeService === service.id ? null : service.id
                        )
                      }
                      className="w-full px-4 py-3 text-center text-sm font-medium border rounded-md 
                      transition-all duration-300
                      bg-emerald-50 text-emerald-600 border-emerald-200 
                      hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-md
                      dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800
                      dark:hover:bg-emerald-900/30 dark:hover:border-emerald-700
                      focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                      <span className="relative z-10">
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
                      </span>
                    </button>

                    {/* Enhanced arrow indicators for better visibility and position */}
                    {activeService !== service.id ? (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-emerald-600 dark:text-emerald-400 opacity-80 group-hover:opacity-100 transition-all duration-300 animate-bounce pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-emerald-600 dark:text-emerald-400 opacity-80 group-hover:opacity-100 transition-all duration-300 animate-bounce pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section with Enhanced Transitions */}
      {activeService && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12 bg-gray-50 dark:bg-gray-850 border-t border-b border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-10">
              <div className="w-24 h-1 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
            </div>
            <ServiceDetail
              serviceId={
                activeService as
                  | "regular"
                  | "seasonal"
                  | "restoration"
                  | "custom"
              }
            />
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setActiveService(null)}
                className="px-6 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors duration-300 shadow-sm hover:shadow group"
              >
                <span className="flex items-center">
                  <span className="mr-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </span>
                  {language === "lv" ? "Aizvērt" : "Close"}
                </span>
              </button>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}
