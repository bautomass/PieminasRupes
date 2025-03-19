// app/services/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  SparklesIcon,
  FlowerIcon,
  ToolsIcon,
  HeartIcon,
  CheckIcon,
} from "@/components/Icons";

// Language strings for the services page
const translations = {
  lv: {
    title: "Mūsu pakalpojumi",
    subtitle: "Pilns serviss kapu kopšanā ar cieņu un rūpēm",
    cta: "Sazinieties ar mums",
    services: [
      {
        id: "regular",
        icon: SparklesIcon,
        title: "Regulāra kopšana",
        description:
          "Visaptveroša kapu vietas uzturēšana, lai tā vienmēr būtu tīra un kārtīga.",
        features: [
          "Regulāra zāles pļaušana ap kapu",
          "Nezāļu likvidēšana no kapu vietas",
          "Lapu un citu gružu savākšana",
          "Smilšu atjaunošana un izlīdzināšana",
          "Sveču un veco ziedu novākšana",
        ],
        imageAlt: "Regulāra kapu kopšana",
      },
      {
        id: "seasonal",
        icon: FlowerIcon,
        title: "Sezonālie darbi",
        description:
          "Kapu vietas sakopšana un dekorēšana atbilstoši sezonai un svētkiem.",
        features: [
          "Sezonālo puķu stādīšana un kopšana",
          "Kapu vietas sagatavošana svētkiem",
          "Ziemas apsaimniekošana un sniega tīrīšana",
          "Pavasara ģenerāltīrīšana pēc ziemas sezonas",
          "Dekoratīvo elementu uzturēšana un nomaiņa",
        ],
        imageAlt: "Sezonālie kapu kopšanas darbi",
      },
      {
        id: "restoration",
        icon: ToolsIcon,
        title: "Pieminekļu atjaunošana",
        description:
          "Profesionāla kapu pieminekļu un infrastruktūras atjaunošana.",
        features: [
          "Pieminekļu tīrīšana ar speciāliem līdzekļiem",
          "Pieminekļu un kapu plākšņu atjaunošana",
          "Teksta atjaunošana uz pieminekļa",
          "Kapu apmales labošana un atjaunošana",
          "Kapu vietas infrastruktūras labiekārtošana",
        ],
        imageAlt: "Pieminekļu atjaunošana un tīrīšana",
      },
      {
        id: "custom",
        icon: HeartIcon,
        title: "Individuāli risinājumi",
        description:
          "Pielāgoti pakalpojumi atbilstoši jūsu vēlmēm un vajadzībām.",
        features: [
          "Īpaši pieprasījumi kapu kopšanā",
          "Konsultācijas par kapu vietas labiekārtošanu",
          "Īpašu dizaina elementu izstrāde un ieviešana",
          "Individuāli kopšanas grafiki un risinājumi",
          "Personalizēts serviss atbilstoši jūsu vēlmēm",
        ],
        imageAlt: "Individuāla kapu kopšana",
      },
    ],
    pricing: {
      title: "Cenu plāni",
      description:
        "Mēs piedāvājam dažādus pakalpojumu plānus, lai apmierinātu visas jūsu vajadzības.",
      moreDetails: "Vairāk informācijas par cenām",
    },
  },
  en: {
    title: "Our Services",
    subtitle: "Full grave maintenance service with respect and care",
    cta: "Contact Us",
    services: [
      {
        id: "regular",
        icon: SparklesIcon,
        title: "Regular Maintenance",
        description:
          "Comprehensive grave site maintenance to keep it clean and tidy at all times.",
        features: [
          "Regular grass cutting around the grave",
          "Weed removal from grave site",
          "Leaf and debris collection",
          "Sand restoration and leveling",
          "Removal of candles and old flowers",
        ],
        imageAlt: "Regular grave maintenance",
      },
      {
        id: "seasonal",
        icon: FlowerIcon,
        title: "Seasonal Work",
        description:
          "Grave site cleaning and decoration according to the season and holidays.",
        features: [
          "Planting and care of seasonal flowers",
          "Grave site preparation for holidays",
          "Winter maintenance and snow removal",
          "Spring general cleaning after winter season",
          "Maintenance and replacement of decorative elements",
        ],
        imageAlt: "Seasonal grave maintenance",
      },
      {
        id: "restoration",
        icon: ToolsIcon,
        title: "Monument Restoration",
        description:
          "Professional restoration of grave monuments and infrastructure.",
        features: [
          "Monument cleaning with special products",
          "Monument and grave plate restoration",
          "Text restoration on the monument",
          "Grave border repair and restoration",
          "Grave site infrastructure improvement",
        ],
        imageAlt: "Monument restoration and cleaning",
      },
      {
        id: "custom",
        icon: HeartIcon,
        title: "Custom Solutions",
        description: "Tailored services according to your wishes and needs.",
        features: [
          "Special requests in grave care",
          "Consultations on grave site improvement",
          "Development and implementation of special design elements",
          "Individual maintenance schedules and solutions",
          "Personalized service according to your wishes",
        ],
        imageAlt: "Custom grave care",
      },
    ],
    pricing: {
      title: "Pricing Plans",
      description: "We offer various service plans to meet all your needs.",
      moreDetails: "More details on pricing",
    },
  },
  ru: {
    title: "Наши услуги",
    subtitle:
      "Полный комплекс услуг по уходу за могилами с уважением и заботой",
    cta: "Связаться с нами",
    services: [
      {
        id: "regular",
        icon: SparklesIcon,
        title: "Регулярный уход",
        description:
          "Комплексное обслуживание могилы для поддержания её в чистоте и порядке.",
        features: [
          "Регулярное скашивание травы вокруг могилы",
          "Удаление сорняков с места захоронения",
          "Сбор листьев и мусора",
          "Восстановление и выравнивание песка",
          "Уборка свечей и старых цветов",
        ],
        imageAlt: "Регулярный уход за могилой",
      },
      {
        id: "seasonal",
        icon: FlowerIcon,
        title: "Сезонные работы",
        description:
          "Уборка и украшение могилы в соответствии с сезоном и праздниками.",
        features: [
          "Посадка и уход за сезонными цветами",
          "Подготовка могилы к праздникам",
          "Зимнее обслуживание и уборка снега",
          "Весенняя генеральная уборка после зимнего сезона",
          "Обслуживание и замена декоративных элементов",
        ],
        imageAlt: "Сезонные работы по уходу за могилой",
      },
      {
        id: "restoration",
        icon: ToolsIcon,
        title: "Реставрация памятников",
        description:
          "Профессиональная реставрация надгробных памятников и инфраструктуры.",
        features: [
          "Чистка памятников специальными средствами",
          "Реставрация памятников и надгробных плит",
          "Восстановление текста на памятнике",
          "Ремонт и восстановление оград",
          "Улучшение инфраструктуры места захоронения",
        ],
        imageAlt: "Реставрация и чистка памятников",
      },
      {
        id: "custom",
        icon: HeartIcon,
        title: "Индивидуальные решения",
        description:
          "Индивидуальные услуги в соответствии с вашими пожеланиями и потребностями.",
        features: [
          "Особые запросы по уходу за могилой",
          "Консультации по благоустройству места захоронения",
          "Разработка и внедрение специальных элементов дизайна",
          "Индивидуальные графики обслуживания и решения",
          "Персонализированный сервис в соответствии с вашими пожеланиями",
        ],
        imageAlt: "Индивидуальный уход за могилой",
      },
    ],
    pricing: {
      title: "Тарифные планы",
      description:
        "Мы предлагаем различные планы обслуживания для удовлетворения всех ваших потребностей.",
      moreDetails: "Подробнее о ценах",
    },
  },
  de: {
    title: "Unsere Dienstleistungen",
    subtitle: "Vollständiger Grabpflegeservice mit Respekt und Sorgfalt",
    cta: "Kontaktieren Sie uns",
    services: [
      {
        id: "regular",
        icon: SparklesIcon,
        title: "Regelmäßige Pflege",
        description:
          "Umfassende Grabpflege, um es jederzeit sauber und ordentlich zu halten.",
        features: [
          "Regelmäßiges Rasenmähen um das Grab",
          "Unkrautentfernung vom Grab",
          "Sammeln von Laub und Unrat",
          "Sandwiederherstellung und Nivellierung",
          "Entfernung von Kerzen und alten Blumen",
        ],
        imageAlt: "Regelmäßige Grabpflege",
      },
      {
        id: "seasonal",
        icon: FlowerIcon,
        title: "Saisonale Arbeiten",
        description:
          "Grabreinigung und -dekoration entsprechend der Jahreszeit und den Feiertagen.",
        features: [
          "Pflanzung und Pflege von Saisonblumen",
          "Vorbereitung des Grabes für Feiertage",
          "Winterwartung und Schneeräumung",
          "Frühjahrsreinigung nach der Wintersaison",
          "Pflege und Austausch von Dekoelementen",
        ],
        imageAlt: "Saisonale Grabpflege",
      },
      {
        id: "restoration",
        icon: ToolsIcon,
        title: "Denkmalrestaurierung",
        description:
          "Professionelle Restaurierung von Grabdenkmälern und Infrastruktur.",
        features: [
          "Denkmalsreinigung mit Spezialmitteln",
          "Restaurierung von Denkmälern und Grabplatten",
          "Textrestaurierung auf dem Denkmal",
          "Reparatur und Restaurierung der Grabeinfassung",
          "Verbesserung der Grabinfrastruktur",
        ],
        imageAlt: "Denkmalrestaurierung und -reinigung",
      },
      {
        id: "custom",
        icon: HeartIcon,
        title: "Individuelle Lösungen",
        description:
          "Maßgeschneiderte Dienstleistungen nach Ihren Wünschen und Bedürfnissen.",
        features: [
          "Spezielle Anfragen bei der Grabpflege",
          "Beratung zur Grabverbesserung",
          "Entwicklung und Implementierung spezieller Designelemente",
          "Individuelle Wartungspläne und Lösungen",
          "Personalisierter Service nach Ihren Wünschen",
        ],
        imageAlt: "Individuelle Grabpflege",
      },
    ],
    pricing: {
      title: "Preispläne",
      description:
        "Wir bieten verschiedene Servicepläne an, um allen Ihren Bedürfnissen gerecht zu werden.",
      moreDetails: "Weitere Details zu den Preisen",
    },
  },
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 md:py-20 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          {t.services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`relative py-12 ${
                index % 2 === 0
                  ? "bg-white dark:bg-gray-800"
                  : "bg-gray-50 dark:bg-gray-900"
              }`}
            >
              <div className="container">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                  {/* Service Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 w-fit">
                      <service.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>

                    <ul className="mt-8 space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex">
                          <CheckIcon className="flex-shrink-0 w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                          <span className="ml-3 text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image - Using a placeholder since we don't have actual images */}
                  <div
                    className={`relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-96 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700">
                      <div className="flex items-center justify-center w-full h-full text-gray-500 dark:text-gray-400">
                        {service.imageAlt}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-16 bg-emerald-600 dark:bg-emerald-700 md:py-20 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              {t.pricing.title}
            </h2>
            <p className="mt-4 text-xl text-emerald-50">
              {t.pricing.description}
            </p>
            <div className="mt-10">
              <Link
                href="/pricing"
                className="inline-block px-6 py-3 text-base font-medium text-emerald-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
              >
                {t.pricing.moreDetails}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
        <div className="container">
          <div className="px-6 py-10 text-center bg-gray-50 rounded-lg dark:bg-gray-900 md:py-16 md:px-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
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
              <Link href="/contact" className="btn btn-primary">
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
