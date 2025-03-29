"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  memo,
  Dispatch,
  SetStateAction,
} from "react";
import Head from "next/head";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { CheckIcon } from "@/components/Icons";
import ServiceDetail from "@/components/ServiceDetail";
import { motion } from "framer-motion";

// Type definitions
type Language = "lv" | "en" | "ru" | "de";

interface Service {
  id: "regular" | "seasonal" | "restoration" | "custom";
  title: string;
  description: string;
  features: string[];
  imageAlt: string;
}

interface PricingSize {
  title: string;
  size: string;
  price: string;
  yearlyPrice?: string;
}

interface OneTimePrices {
  [key: string]: number;
}

interface ServiceCardProps {
  service: Service;
  activeService: string | null;
  setActiveService: Dispatch<SetStateAction<string | null>>;
  index: number;
  language: Language;
}

interface PricingCardProps {
  size: PricingSize;
  index: number;
  showSubscription: boolean;
  oneTimePrices: OneTimePrices;
  t: any; // Using any for translations, but ideally this should be typed properly
}

// Motion animation variants for reuse and optimization
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Memoized ServiceCard component for better performance
const ServiceCard = memo(
  ({
    service,
    activeService,
    setActiveService,
    index,
    language,
  }: ServiceCardProps) => {
    const isActive = activeService === service.id;

    return (
      <motion.div
        key={service.id}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUpVariant}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className={`bg-white dark:bg-gray-800 border rounded-xl shadow-md dark:shadow-emerald-900/10 overflow-hidden hover:shadow-lg dark:hover:shadow-emerald-800/20 transition-all duration-300 group ${
          isActive
            ? "ring-2 ring-emerald-500 dark:ring-emerald-400"
            : "border-gray-200 dark:border-gray-700"
        }`}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-5">
            {service.description}
          </p>

          <ul
            className="space-y-2 mb-8"
            aria-label={`${service.title} features`}
          >
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <CheckIcon
                  className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                  aria-hidden="true"
                />
                <span className="ml-2.5 text-sm text-gray-600 dark:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="relative pb-10 mt-6">
            <button
              onClick={() => setActiveService(isActive ? null : service.id)}
              className="w-full px-4 py-3 text-center text-sm font-medium border rounded-md
            transition-all duration-300
            bg-emerald-50 text-emerald-600 border-emerald-200
            hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-md
            dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800
            dark:hover:bg-emerald-900/30 dark:hover:border-emerald-700
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 dark:focus:ring-emerald-400"
              aria-expanded={isActive ? "true" : "false"}
              aria-controls={`service-detail-${service.id}`}
            >
              <span className="relative z-10">
                {isActive
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

            {/* Arrow indicators */}
            <div
              className={`absolute -bottom-${isActive ? 6 : 4} left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center justify-center w-full`}
              aria-hidden="true"
            >
              <div className="bg-emerald-100 dark:bg-emerald-800/60 rounded-full p-2 shadow-md dark:shadow-emerald-900/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-emerald-600 dark:text-emerald-400 animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isActive ? (
                    <>
                      <line x1="12" y1="19" x2="12" y2="5"></line>
                      <polyline points="5 12 12 5 19 12"></polyline>
                    </>
                  ) : (
                    <>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

// PricingCard component
const PricingCard = memo(
  ({ size, index, showSubscription, oneTimePrices, t }: PricingCardProps) => {
    return (
      <motion.div
        key={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUpVariant}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-emerald-900/10 overflow-hidden hover:shadow-xl dark:hover:shadow-emerald-800/20 hover:border-emerald-200 dark:hover:border-emerald-800/30 transition-all duration-300 transform hover:-translate-y-1"
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
            {showSubscription
              ? `${size.price}€`
              : `${oneTimePrices[size.title] || (parseInt(size.price) * 1.2).toFixed(0)}€`}
          </div>

          {/* Price type label */}
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            {showSubscription
              ? t.serviceDetails.pricing.subscriptionNote
              : t.serviceDetails.pricing.oneTimeNote}
          </div>
        </div>
      </motion.div>
    );
  }
);

PricingCard.displayName = "PricingCard";

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = useMemo(
    () => translations[language as keyof typeof translations],
    [language]
  );

  const [activeService, setActiveService] = useState<string | null>(null);
  const [showSubscription, setShowSubscription] = useState(true);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activePricingIndex, setActivePricingIndex] = useState(0);

  // Refs for scrollable containers
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const pricingScrollRef = useRef<HTMLDivElement>(null);

  // Get pricing sizes from translations
  const pricingSizes = t.serviceDetails.pricing.sizes;

  // Memoize services data to prevent recreation on each render
  const services = useMemo<Service[]>(
    () => [
      {
        id: "regular",
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
    ],
    [t, language]
  );

  // Define one-time prices based on pricing page
  const oneTimePrices = useMemo<OneTimePrices>(
    () => ({
      Maza: 40, // Small
      Small: 40,
      Маленькая: 40,
      Klein: 40,

      Vidēja: 55, // Medium
      Medium: 55,
      Средняя: 55,
      Mittel: 55,

      Liela: 65, // Large
      Large: 65,
      Большая: 65,
      Groß: 65,

      "Ļoti liela": 80, // Very Large
      "Very large": 80,
      "Очень большая": 80,
      "Sehr groß": 80,
    }),
    []
  );

  // Page title and meta description for SEO
  const pageTitle = useMemo(() => {
    return language === "lv"
      ? "Mūsu pakalpojumi | SkyGarden - Profesionāla kapu kopšana"
      : language === "en"
        ? "Our Services | SkyGarden - Professional Grave Care"
        : language === "ru"
          ? "Наши услуги | SkyGarden - Профессиональный уход за могилами"
          : "Unsere Dienstleistungen | SkyGarden - Professionelle Grabpflege";
  }, [language]);

  const pageDescription = useMemo(() => {
    return language === "lv"
      ? "Profesionāli kapu kopšanas pakalpojumi - regulāra kopšana, sezonālie darbi, pieminekļu atjaunošana un individuāli risinājumi. Piedāvājam cienīgu piemiņas vietas uzturēšanu."
      : language === "en"
        ? "Professional grave maintenance services - regular care, seasonal work, monument restoration and custom solutions. We offer dignified memorial site maintenance."
        : language === "ru"
          ? "Профессиональные услуги по уходу за могилами - регулярный уход, сезонные работы, реставрация памятников и индивидуальные решения. Мы предлагаем достойное содержание мест памяти."
          : "Professionelle Grabpflegedienste - regelmäßige Pflege, saisonale Arbeiten, Denkmalrestaurierung und individuelle Lösungen. Wir bieten würdevolle Gedenkstättenpflege.";
  }, [language]);

  // Generate structured data for SEO
  const structuredData = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name:
        language === "lv"
          ? "SkyGarden Kapu Kopšanas Pakalpojumi"
          : "SkyGarden Grave Care Services",
      description: pageDescription,
      provider: {
        "@type": "Organization",
        name: "SkyGarden",
        url: "https://skygarden.lv/",
      },
      areaServed: {
        "@type": "Place",
        name:
          language === "lv"
            ? "Dienvidkurzemes novads un Liepāja"
            : "Dienvidkurzeme region and Liepāja, Latvia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name:
          language === "lv"
            ? "Kapu kopšanas pakalpojumi"
            : "Grave care services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
          position: index + 1,
        })),
      },
    };
  }, [language, pageDescription, services]);

  // Function to handle scroll events and update active index
  const handleServiceScroll = useCallback(() => {
    if (!servicesScrollRef.current) return;

    const scrollContainer = servicesScrollRef.current;
    const scrollPosition = scrollContainer.scrollLeft;
    const itemWidth = scrollContainer.scrollWidth / services.length;
    const newActiveIndex = Math.round(scrollPosition / itemWidth);

    if (newActiveIndex !== activeServiceIndex) {
      setActiveServiceIndex(newActiveIndex);
    }
  }, [services.length, activeServiceIndex]);

  const handlePricingScroll = useCallback(() => {
    if (!pricingScrollRef.current) return;

    const scrollContainer = pricingScrollRef.current;
    const scrollPosition = scrollContainer.scrollLeft;
    const itemWidth = scrollContainer.scrollWidth / pricingSizes.length;
    const newActiveIndex = Math.round(scrollPosition / itemWidth);

    if (newActiveIndex !== activePricingIndex) {
      setActivePricingIndex(newActiveIndex);
    }
  }, [pricingSizes.length, activePricingIndex]);

  // Add scroll event listeners
  useEffect(() => {
    const servicesEl = servicesScrollRef.current;
    const pricingEl = pricingScrollRef.current;

    if (servicesEl) {
      servicesEl.addEventListener("scroll", handleServiceScroll);
    }

    if (pricingEl) {
      pricingEl.addEventListener("scroll", handlePricingScroll);
    }

    return () => {
      if (servicesEl) {
        servicesEl.removeEventListener("scroll", handleServiceScroll);
      }
      if (pricingEl) {
        pricingEl.removeEventListener("scroll", handlePricingScroll);
      }
    };
  }, [handleServiceScroll, handlePricingScroll]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        {/* Open Graph tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://skygarden.lv/${language === "lv" ? "" : language + "/"}services`}
        />
        <meta
          property="og:image"
          content="https://skygarden.lv/images/og-services.jpg"
        />
        <meta
          property="og:locale"
          content={
            language === "lv"
              ? "lv_LV"
              : language === "en"
                ? "en_US"
                : language === "ru"
                  ? "ru_RU"
                  : "de_DE"
          }
        />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href={`https://skygarden.lv/${language === "lv" ? "" : language + "/"}services`}
        />

        {/* Hreflang tags for language versions */}
        <link
          rel="alternate"
          hrefLang="lv"
          href="https://skygarden.lv/services"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://skygarden.lv/en/services"
        />
        <link
          rel="alternate"
          hrefLang="ru"
          href="https://skygarden.lv/ru/services"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://skygarden.lv/de/services"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://skygarden.lv/services"
        />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="bg-gray-50 dark:bg-gray-900">
        {/* Simple Header Section */}
        <section
          className="py-10 bg-white dark:bg-gray-800 md:py-12 lg:py-14"
          aria-labelledby="services-title"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                id="services-title"
                className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
              >
                {t.services.title}
              </h1>
              <div
                className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </section>

        {/* SERVICES CARDS SECTION */}
        <section
          className="py-4 md:py-8 bg-white dark:bg-gray-800"
          id="services-cards"
          aria-labelledby="services-subtitle"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div
                className="inline-block bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium text-sm uppercase px-5 py-2 rounded-full tracking-wider border border-emerald-100 dark:border-emerald-800/20 shadow-sm mb-4"
                aria-hidden="true"
              >
                {language === "lv"
                  ? "Mūsu piedāvātie pakalpojumi"
                  : "Our Services"}
              </div>
              <h2
                id="services-subtitle"
                className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6"
              >
                {language === "lv"
                  ? "Profesionāla kapu kopšana"
                  : "Professional Grave Care"}
              </h2>
              <div
                className="mx-auto w-32 h-[2px] bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700 mb-8"
                aria-hidden="true"
              ></div>
            </div>

            {/* Desktop grid view */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  activeService={activeService}
                  setActiveService={setActiveService}
                  index={index}
                  language={language as Language}
                />
              ))}
            </div>

            {/* Mobile horizontal scroll with snap */}
            <div
              className="md:hidden overflow-x-auto pb-8 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              ref={servicesScrollRef}
              onScroll={handleServiceScroll}
              aria-label="Services carousel"
            >
              <div className="flex space-x-4 w-max snap-x snap-mandatory">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className="flex-shrink-0 w-[calc(83.333vw)] snap-center"
                  >
                    <ServiceCard
                      service={service}
                      activeService={activeService}
                      setActiveService={setActiveService}
                      index={index}
                      language={language as Language}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll indicators for mobile */}
            <div
              className="md:hidden flex justify-center mt-6 space-x-3"
              aria-label="Service navigation dots"
              role="tablist"
            >
              {services.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 transition-all duration-300 ${
                    i === activeServiceIndex
                      ? "rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-md transform scale-110"
                      : "rounded-full bg-gray-300 dark:bg-gray-600 opacity-70"
                  }`}
                  onClick={() => {
                    if (servicesScrollRef.current) {
                      const cardWidth =
                        servicesScrollRef.current.scrollWidth / services.length;
                      servicesScrollRef.current.scrollTo({
                        left: i * cardWidth,
                        behavior: "smooth",
                      });
                      setActiveServiceIndex(i);
                    }
                  }}
                  aria-label={`Go to service ${i + 1}: ${services[i].title}`}
                  aria-selected={i === activeServiceIndex}
                  role="tab"
                />
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
            id={`service-detail-${activeService}`}
            aria-labelledby={`service-detail-title-${activeService}`}
          >
            <div className="container mx-auto px-4">
              <div
                className="flex items-center justify-center mb-10"
                aria-hidden="true"
              >
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
                  className="px-6 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors duration-300 shadow-sm hover:shadow group focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  aria-controls={`service-detail-${activeService}`}
                >
                  <span className="flex items-center">
                    <span
                      className="mr-2 transform group-hover:-translate-y-1 transition-transform duration-300"
                      aria-hidden="true"
                    >
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

        {/* Additional Information Section - No selling, just info */}
        <section
          className="py-16 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          aria-labelledby="special-occasions-title"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-10">
              <h2
                id="special-occasions-title"
                className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4"
              >
                {language === "lv"
                  ? "Kapu vietas dekorēšana īpašās dienās"
                  : language === "en"
                    ? "Special Occasions Grave Decoration"
                    : language === "ru"
                      ? "Украшение могилы в особые дни"
                      : "Grabdekoration zu besonderen Anlässen"}
              </h2>
              <div
                className="mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700 mb-6"
                aria-hidden="true"
              ></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === "lv"
                  ? "Mēs saprotam, cik svarīgi ir pieminēt aizgājušos mīļos nozīmīgās dienās. Tāpēc piedāvājam kapu vietas sakopšanu un dekorēšanu dažādos svētkos un piemiņas dienās."
                  : language === "en"
                    ? "We understand the importance of remembering your departed loved ones on significant days. That's why we offer grave site maintenance and decoration for various holidays and memorial days."
                    : language === "ru"
                      ? "Мы понимаем, как важно вспоминать ушедших близких в значимые дни. Поэтому мы предлагаем уход и украшение могил в различные праздники и дни памяти."
                      : "Wir verstehen, wie wichtig es ist, an besonderen Tagen an verstorbene Angehörige zu erinnern. Deshalb bieten wir Grabpflege und -dekoration für verschiedene Feiertage und Gedenktage an."}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 mb-10">
              <div className="prose prose-lg max-w-none dark:prose-invert prose-emerald">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {language === "lv"
                    ? "Mūsu pakalpojumi ietver sakopšanu un dekorēšanu šādās nozīmīgās dienās:"
                    : language === "en"
                      ? "Our services include maintenance and decoration on these important occasions:"
                      : language === "ru"
                        ? "Наши услуги включают уход и украшение в следующие важные дни:"
                        : "Unsere Dienstleistungen umfassen Pflege und Dekoration zu diesen wichtigen Anlässen:"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {language === "lv"
                      ? "Gadskārtu svētki"
                      : language === "en"
                        ? "Annual Holidays"
                        : language === "ru"
                          ? "Ежегодные праздники"
                          : "Jährliche Feiertage"}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Ziemassvētki"
                          : language === "en"
                            ? "Christmas"
                            : language === "ru"
                              ? "Рождество"
                              : "Weihnachten"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Lieldienas"
                          : language === "en"
                            ? "Easter"
                            : language === "ru"
                              ? "Пасха"
                              : "Ostern"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Kapu svētki"
                          : language === "en"
                            ? "Cemetery Mass"
                            : language === "ru"
                              ? "Кладбищенская месса"
                              : "Friedhofsmesse"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Visu dvēseļu diena"
                          : language === "en"
                            ? "All Souls Day"
                            : language === "ru"
                              ? "День всех душ"
                              : "Allerseelen"}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {language === "lv"
                      ? "Ģimenes svētki"
                      : language === "en"
                        ? "Family Occasions"
                        : language === "ru"
                          ? "Семейные события"
                          : "Familienanlässe"}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Mātes diena"
                          : language === "en"
                            ? "Mother's Day"
                            : language === "ru"
                              ? "День матери"
                              : "Muttertag"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Tēva diena"
                          : language === "en"
                            ? "Father's Day"
                            : language === "ru"
                              ? "День отца"
                              : "Vatertag"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Dzimšanas dienas"
                          : language === "en"
                            ? "Birthdays"
                            : language === "ru"
                              ? "Дни рождения"
                              : "Geburtstage"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Kāzu gadadienas"
                          : language === "en"
                            ? "Wedding Anniversary"
                            : language === "ru"
                              ? "Годовщина свадьбы"
                              : "Hochzeitstag"}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {language === "lv"
                      ? "Piemiņas dienas"
                      : language === "en"
                        ? "Memorial Days"
                        : language === "ru"
                          ? "Дни памяти"
                          : "Gedenktage"}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Nāves gadadienas"
                          : language === "en"
                            ? "Death Anniversaries"
                            : language === "ru"
                              ? "Годовщины смерти"
                              : "Todestage"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Valentīndiena"
                          : language === "en"
                            ? "Valentine's Day"
                            : language === "ru"
                              ? "День Святого Валентина"
                              : "Valentinstag"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Īpašas piemiņas dienas"
                          : language === "en"
                            ? "Special Remembrance Days"
                            : language === "ru"
                              ? "Особые дни памяти"
                              : "Besondere Gedenktage"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 mb-10">
              <h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                id="how-we-help-title"
              >
                {language === "lv"
                  ? "Kā mēs varam palīdzēt"
                  : language === "en"
                    ? "How We Can Help"
                    : language === "ru"
                      ? "Как мы можем помочь"
                      : "Wie wir helfen können"}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {language === "lv"
                  ? "Mūsu mērķis ir nodrošināt, lai jūsu tuvinieku atdusas vieta vienmēr būtu skaista un cienīgi kopta, neatkarīgi no gadalaika vai attāluma. Mēs piedāvājam:"
                  : language === "en"
                    ? "Our goal is to ensure that your loved ones' resting place is always beautiful and respectfully maintained, regardless of season or distance. We offer:"
                    : language === "ru"
                      ? "Наша цель - обеспечить, чтобы место упокоения ваших близких всегда было красивым и ухоженным, независимо от сезона или расстояния. Мы предлагаем:"
                      : "Unser Ziel ist es, sicherzustellen, dass die Ruhestätte Ihrer Lieben unabhängig von Jahreszeit oder Entfernung immer schön und respektvoll gepflegt ist. Wir bieten:"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {language === "lv"
                      ? "Regulāra kapu kopšana"
                      : language === "en"
                        ? "Regular grave maintenance"
                        : language === "ru"
                          ? "Регулярный уход за могилой"
                          : "Regelmäßige Grabpflege"}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Zāles pļaušana un nezāļu likvidēšana"
                          : language === "en"
                            ? "Grass cutting and weed removal"
                            : language === "ru"
                              ? "Стрижка травы и удаление сорняков"
                              : "Grassschnitt und Unkrautentfernung"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Smilšu uzturēšana un atjaunošana"
                          : language === "en"
                            ? "Sand maintenance and renewal"
                            : language === "ru"
                              ? "Обслуживание и обновление песка"
                              : "Sandpflege und -erneuerung"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Pieminekļu un kapu plākšņu tīrīšana"
                          : language === "en"
                            ? "Monument and grave plate cleaning"
                            : language === "ru"
                              ? "Чистка памятников и надгробных плит"
                              : "Reinigung von Denkmälern und Grabplatten"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Lapu un gružu savākšana"
                          : language === "en"
                            ? "Leaf and debris collection"
                            : language === "ru"
                              ? "Сбор листьев и мусора"
                              : "Sammeln von Laub und Unrat"}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {language === "lv"
                      ? "Sezonāla dekorēšana"
                      : language === "en"
                        ? "Seasonal decoration"
                        : language === "ru"
                          ? "Сезонное украшение"
                          : "Saisonale Dekoration"}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Sveču un lampiņu iedegšana svētkos"
                          : language === "en"
                            ? "Candle and light placement for holidays"
                            : language === "ru"
                              ? "Размещение свечей и лампад в праздники"
                              : "Kerzen und Lichter für Feiertage"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Sezonālo puķu stādīšana un kopšana"
                          : language === "en"
                            ? "Seasonal flower planting and care"
                            : language === "ru"
                              ? "Посадка и уход за сезонными цветами"
                              : "Pflanzung und Pflege saisonaler Blumen"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Svētku dekorāciju novietošana un uzturēšana"
                          : language === "en"
                            ? "Holiday decoration placement and maintenance"
                            : language === "ru"
                              ? "Размещение и поддержание праздничных украшений"
                              : "Platzierung und Pflege von Feiertagsdekorationen"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2.5 text-gray-600 dark:text-gray-300">
                        {language === "lv"
                          ? "Personalizēti piemiņas elementi"
                          : language === "en"
                            ? "Personalized memorial elements"
                            : language === "ru"
                              ? "Персонализированные элементы памяти"
                              : "Personalisierte Gedenkelemente"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-200 dark:border-emerald-800/50">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div
                  className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4 mb-4 md:mb-0"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {language === "lv"
                      ? "Mūsu pakalpojumi ir īpaši noderīgi, ja dzīvojat tālu no tuvinieku atdusas vietas, bet vēlaties nodrošināt, ka tā tiek pienācīgi kopta un atcerēta nozīmīgās dienās. Pēc katras apmeklējuma reizes, mēs nosūtīsim jums fotoatskaiti, lai jūs varētu redzēt kapavietas stāvokli."
                      : language === "en"
                        ? "Our services are particularly valuable if you live far from your loved ones' resting place but want to ensure it is properly maintained and remembered on significant days. After each visit, we will send you a photo report so you can see the condition of the grave site."
                        : language === "ru"
                          ? "Наши услуги особенно ценны, если вы живете далеко от места упокоения ваших близких, но хотите убедиться, что за ним должным образом ухаживают и помнят в значимые дни. После каждого посещения мы отправим вам фотоотчет, чтобы вы могли видеть состояние могилы."
                          : "Unsere Dienstleistungen sind besonders wertvoll, wenn Sie weit von der Ruhestätte Ihrer Lieben entfernt leben, aber sicherstellen möchten, dass sie an bedeutenden Tagen angemessen gepflegt und in Erinnerung behalten wird. Nach jedem Besuch senden wir Ihnen einen Fotobericht, damit Sie den Zustand der Grabstätte sehen können."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section
          className="py-12 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"
          aria-labelledby="pricing-title"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div
                  className="inline-block bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium text-sm uppercase px-5 py-2 rounded-full tracking-wider border border-emerald-100 dark:border-emerald-800/20 shadow-sm mb-4"
                  aria-hidden="true"
                >
                  {language === "lv"
                    ? "Kapu kopšanas pakalpojumu cenas"
                    : "Grave Care Service Pricing"}
                </div>
                <h2
                  id="pricing-title"
                  className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6"
                >
                  {language === "lv"
                    ? "Cenas atkarīgas no kapavietas izmēra"
                    : t.serviceDetails.pricing.title}
                </h2>
                <div
                  className="mx-auto w-32 h-[2px] bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700 mb-8"
                  aria-hidden="true"
                ></div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {language === "lv"
                    ? "Mūsu pakalpojumu cenas ir pielāgotas dažāda izmēra kapavietām, nodrošinot taisnīgu un atbilstošu aprūpi"
                    : "Our service prices are adapted to different sized grave sites, ensuring fair and appropriate care"}
                </p>

                {/* Pricing type toggle */}
                <div
                  className="mt-6 inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg"
                  role="radiogroup"
                  aria-label="Pricing type selection"
                >
                  <button
                    onClick={() => setShowSubscription(true)}
                    className={`py-2 px-4 text-sm font-medium rounded-md ${
                      showSubscription
                        ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                    role="radio"
                    aria-checked={showSubscription}
                  >
                    {t.serviceDetails.pricing.subscriptionBadge}
                  </button>
                  <button
                    onClick={() => setShowSubscription(false)}
                    className={`py-2 px-4 text-sm font-medium rounded-md ${
                      !showSubscription
                        ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                    role="radio"
                    aria-checked={!showSubscription}
                  >
                    {t.serviceDetails.pricing.oneTimeBadge}
                  </button>
                </div>
              </div>

              {/* Desktop grid view */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingSizes.map((size, index) => (
                  <PricingCard
                    key={index}
                    size={size}
                    index={index}
                    showSubscription={showSubscription}
                    oneTimePrices={oneTimePrices}
                    t={t}
                  />
                ))}
              </div>

              {/* Mobile horizontal scroll with snap */}
              <div
                className="md:hidden overflow-x-auto pb-8 scrollbar-hide"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                ref={pricingScrollRef}
                onScroll={handlePricingScroll}
                aria-label="Pricing carousel"
              >
                <div className="flex space-x-4 w-max snap-x snap-mandatory">
                  {pricingSizes.map((size, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[calc(83.333vw)] snap-center"
                    >
                      <PricingCard
                        size={size}
                        index={index}
                        showSubscription={showSubscription}
                        oneTimePrices={oneTimePrices}
                        t={t}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Scroll indicators for mobile */}
              <div
                className="md:hidden flex justify-center mt-6 space-x-3"
                aria-label="Pricing navigation dots"
                role="tablist"
              >
                {pricingSizes.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 transition-all duration-300 ${
                      i === activePricingIndex
                        ? "rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-md transform scale-110"
                        : "rounded-full bg-gray-300 dark:bg-gray-600 opacity-70"
                    }`}
                    onClick={() => {
                      if (pricingScrollRef.current) {
                        const cardWidth =
                          pricingScrollRef.current.scrollWidth /
                          pricingSizes.length;
                        pricingScrollRef.current.scrollTo({
                          left: i * cardWidth,
                          behavior: "smooth",
                        });
                        setActivePricingIndex(i);
                      }
                    }}
                    aria-label={`Go to pricing option ${i + 1}: ${pricingSizes[i].title}`}
                    aria-selected={i === activePricingIndex}
                    role="tab"
                  />
                ))}
              </div>

              {/* View all prices button */}
              <div className="mt-10 text-center">
                <Link
                  href="/pricing"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-md shadow-md hover:bg-emerald-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  aria-label={t.services.viewPricing}
                >
                  {t.services.viewPricing}
                </Link>
              </div>

              {/* More prominently highlighted transport note */}
              <div
                className="mt-10 text-center"
                aria-label="Important transportation note"
              >
                <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 p-5 rounded-lg shadow-lg max-w-2xl mx-auto relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-300 dark:from-amber-700 dark:to-amber-600"
                    aria-hidden="true"
                  ></div>
                  <p className="text-amber-800 dark:text-amber-300 text-lg font-semibold flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {language === "lv"
                      ? "* Transports NAV iekļauts cenā"
                      : "* Transportation is NOT included in the price"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to order section */}
        <section
          className="py-16 bg-gray-50 dark:bg-gray-900"
          aria-labelledby="how-to-order-title"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="border-b border-gray-200 dark:border-gray-700 px-8 py-6">
                  <h2
                    id="how-to-order-title"
                    className="text-2xl font-serif font-medium text-gray-900 dark:text-white"
                  >
                    {language === "lv"
                      ? "Kā pasūtīt mūsu pakalpojumus"
                      : t.memorial.orderTitle}
                  </h2>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4" aria-hidden="true">
                        <div className="h-8 w-8 rounded bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            1
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {language === "lv"
                            ? "Pakalpojuma pasūtīšanai, lūdzam norādīt aizgājēja informāciju - pilnu vārdu un uzvārdu, miršanas datumu un gadu, kā arī kapsētas nosaukumu. Ja zināt kapuvietas numuru vai rindu, tas ievērojami atvieglos kapavietas atrašanu."
                            : t.memorial.orderText}
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4" aria-hidden="true">
                        <div className="h-8 w-8 rounded bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            2
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 italic">
                          {language === "lv"
                            ? "Ja iespējams, lūdzam pievienot fotogrāfiju vai aprakstu par pieminekli vai citām atpazīšanas zīmēm, kas atrodas kapavietā. Tas palīdzēs mums precīzāk identificēt konkrēto vietu."
                            : t.memorial.orderExtra}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Grave Search Section */}
                  <div
                    className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-700"
                    aria-labelledby="grave-search-title"
                  >
                    <h3
                      id="grave-search-title"
                      className="text-xl font-medium text-gray-900 dark:text-white mb-4"
                    >
                      {language === "lv"
                        ? "Kapavietas atrašanas pakalpojums"
                        : t.memorial.graveSearchTitle}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {language === "lv"
                        ? "Ja ilgāku laiku neesat apmeklējuši tuvinieka kapavietu un zināt tikai vārdu, miršanas datumu un kapsētu, mēs varam palīdzēt ar kapavietas atrašanas un stāvokļa novērtēšanas pakalpojumu. Mūsu speciālisti apzinīgi meklēs un dokumentēs situāciju."
                        : t.memorial.graveSearchText}
                    </p>

                    <div className="dark:bg-gray-850 border border-gray-200 dark:border-gray-700 p-4 rounded-md">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-3" aria-hidden="true">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400 dark:text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {language === "lv"
                            ? "Lūdzu, ņemiet vērā, ka kapavietas meklēšana ar ierobežotu informāciju ir specializēts pakalpojums. Tā cena tiek noteikta individuāli, atkarībā no nepieciešamās izpētes apjoma, lai atrastu meklēto kapavietu."
                            : t.memorial.graveSearchNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="dark:bg-gray-850 border-t border-gray-200 dark:border-gray-700 p-6 flex justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-5 py-2 text-sm font-medium bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    aria-label={
                      language === "lv" ? "Sazināties ar mums" : "Contact Us"
                    }
                  >
                    {language === "lv" ? "Sazināties ar mums" : "Contact Us"}
                    <svg
                      className="ml-2 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
///////////////////////////////////////////
// "use client";

// import {
//   useState,
//   useRef,
//   useEffect,
//   useCallback,
//   useMemo,
//   memo,
//   Dispatch,
//   SetStateAction,
// } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import { useLanguage } from "@/context/LanguageContext";
// import { translations } from "@/lib/translations";
// import { CheckIcon } from "@/components/Icons";
// import ServiceDetail from "@/components/ServiceDetail";
// import { motion } from "framer-motion";

// // Type definitions
// type Language = "lv" | "en" | "ru" | "de";

// interface Service {
//   id: "regular" | "seasonal" | "restoration" | "custom";
//   title: string;
//   description: string;
//   features: string[];
//   imageAlt: string;
// }

// interface PricingSize {
//   title: string;
//   size: string;
//   price: string;
//   yearlyPrice?: string;
// }

// interface OneTimePrices {
//   [key: string]: number;
// }

// interface ServiceCardProps {
//   service: Service;
//   activeService: string | null;
//   setActiveService: Dispatch<SetStateAction<string | null>>;
//   index: number;
//   language: Language;
// }

// interface PricingCardProps {
//   size: PricingSize;
//   index: number;
//   showSubscription: boolean;
//   oneTimePrices: OneTimePrices;
//   language: Language;
//   t: any; // Using any for translations, but ideally this should be typed properly
// }

// // Motion animation variants for reuse and optimization
// const fadeInUpVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// // Memoized ServiceCard component for better performance
// const ServiceCard = memo(
//   ({
//     service,
//     activeService,
//     setActiveService,
//     index,
//     language,
//   }: ServiceCardProps) => {
//     const isActive = activeService === service.id;

//     return (
//       <motion.div
//         key={service.id}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//         variants={fadeInUpVariant}
//         transition={{ duration: 0.4, delay: index * 0.1 }}
//         className={`bg-white dark:bg-gray-800 border rounded-xl shadow-md dark:shadow-emerald-900/10 overflow-hidden hover:shadow-lg dark:hover:shadow-emerald-800/20 transition-all duration-300 group ${
//           isActive
//             ? "ring-2 ring-emerald-500 dark:ring-emerald-400"
//             : "border-gray-200 dark:border-gray-700"
//         }`}
//       >
//         <div className="p-6">
//           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//             {service.title}
//           </h3>
//           <p className="text-gray-600 dark:text-gray-300 mb-5">
//             {service.description}
//           </p>

//           <ul
//             className="space-y-2 mb-8"
//             aria-label={`${service.title} features`}
//           >
//             {service.features.map((feature, featureIndex) => (
//               <li key={featureIndex} className="flex items-start">
//                 <CheckIcon
//                   className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                   aria-hidden="true"
//                 />
//                 <span className="ml-2.5 text-sm text-gray-600 dark:text-gray-300">
//                   {feature}
//                 </span>
//               </li>
//             ))}
//           </ul>

//           <div className="relative pb-10 mt-6">
//             <button
//               onClick={() => setActiveService(isActive ? null : service.id)}
//               className="w-full px-4 py-3 text-center text-sm font-medium border rounded-md
//             transition-all duration-300
//             bg-emerald-50 text-emerald-600 border-emerald-200
//             hover:bg-emerald-100 hover:border-emerald-300 hover:shadow-md
//             dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800
//             dark:hover:bg-emerald-900/30 dark:hover:border-emerald-700
//             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 dark:focus:ring-emerald-400"
//               aria-expanded={isActive ? "true" : "false"}
//               aria-controls={`service-detail-${service.id}`}
//             >
//               <span className="relative z-10">
//                 {isActive
//                   ? language === "lv"
//                     ? "Mazāk informācijas"
//                     : language === "en"
//                       ? "Less information"
//                       : language === "ru"
//                         ? "Меньше информации"
//                         : "Weniger Informationen"
//                   : language === "lv"
//                     ? "Vairāk informācijas"
//                     : language === "en"
//                       ? "More information"
//                       : language === "ru"
//                         ? "Больше информации"
//                         : "Mehr Informationen"}
//               </span>
//             </button>

//             {/* Arrow indicators */}
//             <div
//               className={`absolute -bottom-${isActive ? 6 : 4} left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-center justify-center w-full`}
//               aria-hidden="true"
//             >
//               <div className="bg-emerald-100 dark:bg-emerald-800/60 rounded-full p-2 shadow-md dark:shadow-emerald-900/30">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-emerald-600 dark:text-emerald-400 animate-pulse"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   {isActive ? (
//                     <>
//                       <line x1="12" y1="19" x2="12" y2="5"></line>
//                       <polyline points="5 12 12 5 19 12"></polyline>
//                     </>
//                   ) : (
//                     <>
//                       <line x1="12" y1="5" x2="12" y2="19"></line>
//                       <polyline points="19 12 12 19 5 12"></polyline>
//                     </>
//                   )}
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   }
// );

// ServiceCard.displayName = "ServiceCard";

// // PricingCard component
// const PricingCard = memo(
//   ({
//     size,
//     index,
//     showSubscription,
//     oneTimePrices,
//     language,
//     t,
//   }: PricingCardProps) => {
//     return (
//       <motion.div
//         key={index}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//         variants={fadeInUpVariant}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-emerald-900/10 overflow-hidden hover:shadow-xl dark:hover:shadow-emerald-800/20 hover:border-emerald-200 dark:hover:border-emerald-800/30 transition-all duration-300 transform hover:-translate-y-1"
//       >
//         <div className="bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-900/20 dark:to-gray-800 border-b border-gray-100 dark:border-gray-700 p-4">
//           <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">
//             {size.title}
//           </h3>
//         </div>
//         <div className="p-6 text-center">
//           <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
//             {size.size}
//           </p>
//           <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-6 py-4 rounded-lg border border-emerald-100 dark:border-emerald-800/20 mx-auto inline-block shadow-sm">
//             {showSubscription
//               ? `${size.price}€`
//               : `${oneTimePrices[size.title] || (parseInt(size.price) * 1.2).toFixed(0)}€`}
//           </div>

//           {/* Price type label */}
//           <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
//             {showSubscription
//               ? t.serviceDetails.pricing.subscriptionNote
//               : t.serviceDetails.pricing.oneTimeNote}
//           </div>
//         </div>
//       </motion.div>
//     );
//   }
// );

// PricingCard.displayName = "PricingCard";

// export default function ServicesPage() {
//   const { language } = useLanguage();
//   const t = translations[language as keyof typeof translations];

//   const [activeService, setActiveService] = useState<string | null>(null);
//   const [showSubscription, setShowSubscription] = useState(true);
//   const [activeServiceIndex, setActiveServiceIndex] = useState(0);
//   const [activePricingIndex, setActivePricingIndex] = useState(0);

//   // Refs for scrollable containers
//   const servicesScrollRef = useRef<HTMLDivElement>(null);
//   const pricingScrollRef = useRef<HTMLDivElement>(null);

//   // Get pricing sizes from translations
//   const pricingSizes = t.serviceDetails.pricing.sizes;

//   // Memoize services data to prevent recreation on each render
//   const services = useMemo<Service[]>(
//     () => [
//       {
//         id: "regular",
//         title: t.services.regular.title,
//         description: t.services.regular.description,
//         features: [
//           language === "lv"
//             ? "Regulāra zāles pļaušana ap kapu"
//             : language === "en"
//               ? "Regular grass cutting around the grave"
//               : language === "ru"
//                 ? "Регулярное скашивание травы вокруг могилы"
//                 : "Regelmäßiges Rasenmähen um das Grab",
//           language === "lv"
//             ? "Nezāļu likvidēšana no kapu vietas"
//             : language === "en"
//               ? "Weed removal from grave site"
//               : language === "ru"
//                 ? "Удаление сорняков с места захоронения"
//                 : "Unkrautentfernung vom Grab",
//           language === "lv"
//             ? "Lapu un citu gružu savākšana"
//             : language === "en"
//               ? "Leaf and debris collection"
//               : language === "ru"
//                 ? "Сбор листьев и мусора"
//                 : "Sammeln von Laub und Unrat",
//           language === "lv"
//             ? "Smilšu atjaunošana un izlīdzināšana"
//             : language === "en"
//               ? "Sand restoration and leveling"
//               : language === "ru"
//                 ? "Восстановление и выравнивание песка"
//                 : "Sandwiederherstellung und Nivellierung",
//           language === "lv"
//             ? "Sveču un veco ziedu novākšana"
//             : language === "en"
//               ? "Removal of candles and old flowers"
//               : language === "ru"
//                 ? "Уборка свечей и старых цветов"
//                 : "Entfernung von Kerzen und alten Blumen",
//         ],
//         imageAlt:
//           language === "lv"
//             ? "Regulāra kapu kopšana"
//             : language === "en"
//               ? "Regular grave maintenance"
//               : language === "ru"
//                 ? "Регулярный уход за могилой"
//                 : "Regelmäßige Grabpflege",
//       },
//       {
//         id: "seasonal",
//         title: t.services.seasonal.title,
//         description: t.services.seasonal.description,
//         features: [
//           language === "lv"
//             ? "Sezonālo puķu stādīšana un kopšana"
//             : language === "en"
//               ? "Planting and care of seasonal flowers"
//               : language === "ru"
//                 ? "Посадка и уход за сезонными цветами"
//                 : "Pflanzung und Pflege von Saisonblumen",
//           language === "lv"
//             ? "Kapu vietas sagatavošana svētkiem"
//             : language === "en"
//               ? "Grave site preparation for holidays"
//               : language === "ru"
//                 ? "Подготовка могилы к праздникам"
//                 : "Vorbereitung des Grabes für Feiertage",
//           language === "lv"
//             ? "Ziemas apsaimniekošana un sniega tīrīšana"
//             : language === "en"
//               ? "Winter maintenance and snow removal"
//               : language === "ru"
//                 ? "Зимнее обслуживание и уборка снега"
//                 : "Winterwartung und Schneeräumung",
//           language === "lv"
//             ? "Pavasara ģenerāltīrīšana pēc ziemas sezonas"
//             : language === "en"
//               ? "Spring general cleaning after winter season"
//               : language === "ru"
//                 ? "Весенняя генеральная уборка после зимнего сезона"
//                 : "Frühjahrsreinigung nach der Wintersaison",
//           language === "lv"
//             ? "Dekoratīvo elementu uzturēšana un nomaiņa"
//             : language === "en"
//               ? "Maintenance and replacement of decorative elements"
//               : language === "ru"
//                 ? "Обслуживание и замена декоративных элементов"
//                 : "Pflege und Austausch von Dekoelementen",
//         ],
//         imageAlt:
//           language === "lv"
//             ? "Sezonālie kapu kopšanas darbi"
//             : language === "en"
//               ? "Seasonal grave maintenance"
//               : language === "ru"
//                 ? "Сезонные работы по уходу за могилой"
//                 : "Saisonale Grabpflege",
//       },
//       {
//         id: "restoration",
//         title: t.services.restoration.title,
//         description: t.services.restoration.description,
//         features: [
//           language === "lv"
//             ? "Pieminekļu tīrīšana ar speciāliem līdzekļiem"
//             : language === "en"
//               ? "Monument cleaning with special products"
//               : language === "ru"
//                 ? "Чистка памятников специальными средствами"
//                 : "Denkmalsreinigung mit Spezialmitteln",
//           language === "lv"
//             ? "Pieminekļu un kapu plākšņu atjaunošana"
//             : language === "en"
//               ? "Monument and grave plate restoration"
//               : language === "ru"
//                 ? "Реставрация памятников и надгробных плит"
//                 : "Restaurierung von Denkmälern und Grabplatten",
//           language === "lv"
//             ? "Kapu apmales labošana un atjaunošana"
//             : language === "en"
//               ? "Grave border repair and restoration"
//               : language === "ru"
//                 ? "Ремонт и восстановление оград"
//                 : "Reparatur und Restaurierung der Grabeinfassung",
//           language === "lv"
//             ? "Kapu vietas infrastruktūras labiekārtošana"
//             : language === "en"
//               ? "Grave site infrastructure improvement"
//               : language === "ru"
//                 ? "Улучшение инфраструктуры места захоронения"
//                 : "Verbesserung der Grabinfrastruktur",
//         ],
//         imageAlt:
//           language === "lv"
//             ? "Pieminekļu atjaunošana un tīrīšana"
//             : language === "en"
//               ? "Monument restoration and cleaning"
//               : language === "ru"
//                 ? "Реставрация и чистка памятников"
//                 : "Denkmalrestaurierung und -reinigung",
//       },
//       {
//         id: "custom",
//         title: t.services.custom.title,
//         description: t.services.custom.description,
//         features: [
//           language === "lv"
//             ? "Īpaši pieprasījumi kapu kopšanā"
//             : language === "en"
//               ? "Special requests in grave care"
//               : language === "ru"
//                 ? "Особые запросы по уходу за могилой"
//                 : "Spezielle Anfragen bei der Grabpflege",
//           language === "lv"
//             ? "Konsultācijas par kapu vietas labiekārtošanu"
//             : language === "en"
//               ? "Consultations on grave site improvement"
//               : language === "ru"
//                 ? "Консультации по благоустройству места захоронения"
//                 : "Beratung zur Grabverbesserung",
//           language === "lv"
//             ? "Kapavietas meklēšana un situācijas novērtējums"
//             : language === "en"
//               ? "Grave site location and situation assessment"
//               : language === "ru"
//                 ? "Поиск могилы и оценка ситуации"
//                 : "Grabstellenortung und Situationsbewertung",
//           language === "lv"
//             ? "Individuāli kopšanas grafiki un risinājumi"
//             : language === "en"
//               ? "Individual maintenance schedules and solutions"
//               : language === "ru"
//                 ? "Индивидуальные графики обслуживания и решения"
//                 : "Individuelle Wartungspläne und Lösungen",
//           language === "lv"
//             ? "Personalizēts serviss atbilstoši jūsu vēlmēm"
//             : language === "en"
//               ? "Personalized service according to your wishes"
//               : language === "ru"
//                 ? "Персонализированный сервис в соответствии с вашими пожеланиями"
//                 : "Personalisierter Service nach Ihren Wünschen",
//         ],
//         imageAlt:
//           language === "lv"
//             ? "Individuāla kapu kopšana"
//             : language === "en"
//               ? "Custom grave care"
//               : language === "ru"
//                 ? "Индивидуальный уход за могилой"
//                 : "Individuelle Grabpflege",
//       },
//     ],
//     [t, language]
//   );

//   // Define one-time prices based on pricing page
//   const oneTimePrices = useMemo<OneTimePrices>(
//     () => ({
//       Maza: 40, // Small
//       Small: 40,
//       Маленькая: 40,
//       Klein: 40,

//       Vidēja: 55, // Medium
//       Medium: 55,
//       Средняя: 55,
//       Mittel: 55,

//       Liela: 65, // Large
//       Large: 65,
//       Большая: 65,
//       Groß: 65,

//       "Ļoti liela": 80, // Very Large
//       "Very large": 80,
//       "Очень большая": 80,
//       "Sehr groß": 80,
//     }),
//     []
//   );

//   // Page title and meta description for SEO
//   const pageTitle = useMemo(() => {
//     return language === "lv"
//       ? "Mūsu pakalpojumi | SkyGarden - Profesionāla kapu kopšana"
//       : language === "en"
//         ? "Our Services | SkyGarden - Professional Grave Care"
//         : language === "ru"
//           ? "Наши услуги | SkyGarden - Профессиональный уход за могилами"
//           : "Unsere Dienstleistungen | SkyGarden - Professionelle Grabpflege";
//   }, [language]);

//   const pageDescription = useMemo(() => {
//     return language === "lv"
//       ? "Profesionāli kapu kopšanas pakalpojumi - regulāra kopšana, sezonālie darbi, pieminekļu atjaunošana un individuāli risinājumi. Piedāvājam cienīgu piemiņas vietas uzturēšanu."
//       : language === "en"
//         ? "Professional grave maintenance services - regular care, seasonal work, monument restoration and custom solutions. We offer dignified memorial site maintenance."
//         : language === "ru"
//           ? "Профессиональные услуги по уходу за могилами - регулярный уход, сезонные работы, реставрация памятников и индивидуальные решения. Мы предлагаем достойное содержание мест памяти."
//           : "Professionelle Grabpflegedienste - regelmäßige Pflege, saisonale Arbeiten, Denkmalrestaurierung und individuelle Lösungen. Wir bieten würdevolle Gedenkstättenpflege.";
//   }, [language]);

//   // Generate structured data for SEO
//   const structuredData = useMemo(() => {
//     return {
//       "@context": "https://schema.org",
//       "@type": "Service",
//       name:
//         language === "lv"
//           ? "SkyGarden Kapu Kopšanas Pakalpojumi"
//           : "SkyGarden Grave Care Services",
//       description: pageDescription,
//       provider: {
//         "@type": "Organization",
//         name: "SkyGarden",
//         url: "https://skygarden.lv/",
//       },
//       areaServed: {
//         "@type": "Place",
//         name:
//           language === "lv"
//             ? "Dienvidkurzemes novads un Liepāja"
//             : "Dienvidkurzeme region and Liepāja, Latvia",
//       },
//       hasOfferCatalog: {
//         "@type": "OfferCatalog",
//         name:
//           language === "lv"
//             ? "Kapu kopšanas pakalpojumi"
//             : "Grave care services",
//         itemListElement: services.map((service, index) => ({
//           "@type": "Offer",
//           itemOffered: {
//             "@type": "Service",
//             name: service.title,
//             description: service.description,
//           },
//           position: index + 1,
//         })),
//       },
//     };
//   }, [language, pageDescription, services]);

//   // Function to handle scroll events and update active index
//   const handleServiceScroll = useCallback(() => {
//     if (!servicesScrollRef.current) return;

//     const scrollContainer = servicesScrollRef.current;
//     const scrollPosition = scrollContainer.scrollLeft;
//     const itemWidth = scrollContainer.scrollWidth / services.length;
//     const newActiveIndex = Math.round(scrollPosition / itemWidth);

//     if (newActiveIndex !== activeServiceIndex) {
//       setActiveServiceIndex(newActiveIndex);
//     }
//   }, [services.length, activeServiceIndex]);

//   const handlePricingScroll = useCallback(() => {
//     if (!pricingScrollRef.current) return;

//     const scrollContainer = pricingScrollRef.current;
//     const scrollPosition = scrollContainer.scrollLeft;
//     const itemWidth = scrollContainer.scrollWidth / pricingSizes.length;
//     const newActiveIndex = Math.round(scrollPosition / itemWidth);

//     if (newActiveIndex !== activePricingIndex) {
//       setActivePricingIndex(newActiveIndex);
//     }
//   }, [pricingSizes.length, activePricingIndex]);

//   // Add scroll event listeners
//   useEffect(() => {
//     const servicesEl = servicesScrollRef.current;
//     const pricingEl = pricingScrollRef.current;

//     if (servicesEl) {
//       servicesEl.addEventListener("scroll", handleServiceScroll);
//     }

//     if (pricingEl) {
//       pricingEl.addEventListener("scroll", handlePricingScroll);
//     }

//     return () => {
//       if (servicesEl) {
//         servicesEl.removeEventListener("scroll", handleServiceScroll);
//       }
//       if (pricingEl) {
//         pricingEl.removeEventListener("scroll", handlePricingScroll);
//       }
//     };
//   }, [handleServiceScroll, handlePricingScroll]);

//   return (
//     <>
//       <Head>
//         <title>{pageTitle}</title>
//         <meta name="description" content={pageDescription} />

//         {/* Open Graph tags */}
//         <meta property="og:title" content={pageTitle} />
//         <meta property="og:description" content={pageDescription} />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:url"
//           content={`https://skygarden.lv/${language === "lv" ? "" : language + "/"}services`}
//         />
//         <meta
//           property="og:image"
//           content="https://skygarden.lv/images/og-services.jpg"
//         />
//         <meta
//           property="og:locale"
//           content={
//             language === "lv"
//               ? "lv_LV"
//               : language === "en"
//                 ? "en_US"
//                 : language === "ru"
//                   ? "ru_RU"
//                   : "de_DE"
//           }
//         />

//         {/* Twitter tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={pageTitle} />
//         <meta name="twitter:description" content={pageDescription} />

//         {/* Canonical URL */}
//         <link
//           rel="canonical"
//           href={`https://skygarden.lv/${language === "lv" ? "" : language + "/"}services`}
//         />

//         {/* Hreflang tags for language versions */}
//         <link
//           rel="alternate"
//           hrefLang="lv"
//           href="https://skygarden.lv/services"
//         />
//         <link
//           rel="alternate"
//           hrefLang="en"
//           href="https://skygarden.lv/en/services"
//         />
//         <link
//           rel="alternate"
//           hrefLang="ru"
//           href="https://skygarden.lv/ru/services"
//         />
//         <link
//           rel="alternate"
//           hrefLang="de"
//           href="https://skygarden.lv/de/services"
//         />
//         <link
//           rel="alternate"
//           hrefLang="x-default"
//           href="https://skygarden.lv/services"
//         />

//         {/* Structured data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
//       </Head>

//       <main className="bg-gray-50 dark:bg-gray-900">
//         {/* Simple Header Section */}
//         <section
//           className="py-10 bg-white dark:bg-gray-800 md:py-12 lg:py-14"
//           aria-labelledby="services-title"
//         >
//           <div className="container mx-auto px-4">
//             <div className="max-w-3xl mx-auto text-center">
//               <h1
//                 id="services-title"
//                 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
//               >
//                 {t.services.title}
//               </h1>
//               <div
//                 className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"
//                 aria-hidden="true"
//               ></div>
//             </div>
//           </div>
//         </section>

//         {/* SERVICES CARDS SECTION */}
//         <section
//           className="py-4 md:py-8 bg-white dark:bg-gray-800"
//           id="services-cards"
//           aria-labelledby="services-subtitle"
//         >
//           <div className="container mx-auto px-4">
//             <div className="text-center max-w-3xl mx-auto mb-8">
//               <div
//                 className="inline-block bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium text-sm uppercase px-5 py-2 rounded-full tracking-wider border border-emerald-100 dark:border-emerald-800/20 shadow-sm mb-4"
//                 aria-hidden="true"
//               >
//                 {language === "lv"
//                   ? "Mūsu piedāvātie pakalpojumi"
//                   : "Our Services"}
//               </div>
//               <h2
//                 id="services-subtitle"
//                 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6"
//               >
//                 {language === "lv"
//                   ? "Profesionāla kapu kopšana"
//                   : "Professional Grave Care"}
//               </h2>
//               <div
//                 className="mx-auto w-32 h-[2px] bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700 mb-8"
//                 aria-hidden="true"
//               ></div>
//             </div>

//             {/* Desktop grid view */}
//             <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {services.map((service, index) => (
//                 <ServiceCard
//                   key={service.id}
//                   service={service}
//                   activeService={activeService}
//                   setActiveService={setActiveService}
//                   index={index}
//                   language={language as Language}
//                 />
//               ))}
//             </div>

//             {/* Mobile horizontal scroll with snap */}
//             <div
//               className="md:hidden overflow-x-auto pb-8 scrollbar-hide"
//               style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//               ref={servicesScrollRef}
//               onScroll={handleServiceScroll}
//               aria-label="Services carousel"
//             >
//               <div className="flex space-x-4 w-max snap-x snap-mandatory">
//                 {services.map((service, index) => (
//                   <div
//                     key={service.id}
//                     className="flex-shrink-0 w-[calc(83.333vw)] snap-center"
//                   >
//                     <ServiceCard
//                       service={service}
//                       activeService={activeService}
//                       setActiveService={setActiveService}
//                       index={index}
//                       language={language as Language}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Scroll indicators for mobile */}
//             <div
//               className="md:hidden flex justify-center mt-6 space-x-3"
//               aria-label="Service navigation dots"
//               role="tablist"
//             >
//               {services.map((_, i) => (
//                 <button
//                   key={i}
//                   className={`w-3 h-3 transition-all duration-300 ${
//                     i === activeServiceIndex
//                       ? "rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-md transform scale-110"
//                       : "rounded-full bg-gray-300 dark:bg-gray-600 opacity-70"
//                   }`}
//                   onClick={() => {
//                     if (servicesScrollRef.current) {
//                       const cardWidth =
//                         servicesScrollRef.current.scrollWidth / services.length;
//                       servicesScrollRef.current.scrollTo({
//                         left: i * cardWidth,
//                         behavior: "smooth",
//                       });
//                       setActiveServiceIndex(i);
//                     }
//                   }}
//                   aria-label={`Go to service ${i + 1}: ${services[i].title}`}
//                   aria-selected={i === activeServiceIndex}
//                   role="tab"
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Service Details Section with Enhanced Transitions */}
//         {activeService && (
//           <motion.section
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.5 }}
//             className="py-12 bg-gray-50 dark:bg-gray-850 border-t border-b border-gray-200 dark:border-gray-700 overflow-hidden"
//             id={`service-detail-${activeService}`}
//             aria-labelledby={`service-detail-title-${activeService}`}
//           >
//             <div className="container mx-auto px-4">
//               <div
//                 className="flex items-center justify-center mb-10"
//                 aria-hidden="true"
//               >
//                 <div className="w-24 h-1 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
//               </div>
//               <ServiceDetail
//                 serviceId={
//                   activeService as
//                     | "regular"
//                     | "seasonal"
//                     | "restoration"
//                     | "custom"
//                 }
//               />
//               <div className="flex justify-center mt-10">
//                 <button
//                   onClick={() => setActiveService(null)}
//                   className="px-6 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors duration-300 shadow-sm hover:shadow group focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
//                   aria-controls={`service-detail-${activeService}`}
//                 >
//                   <span className="flex items-center">
//                     <span
//                       className="mr-2 transform group-hover:-translate-y-1 transition-transform duration-300"
//                       aria-hidden="true"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 15l7-7 7 7"
//                         />
//                       </svg>
//                     </span>
//                     {language === "lv" ? "Aizvērt" : "Close"}
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </motion.section>
//         )}

//         {/* Additional Information Section - No selling, just info */}
//         <section
//           className="py-16 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
//           aria-labelledby="special-occasions-title"
//         >
//           <div className="container mx-auto px-4 max-w-7xl">
//             <div className="text-center mb-10">
//               <h2
//                 id="special-occasions-title"
//                 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4"
//               >
//                 {language === "lv"
//                   ? "Kapu vietas dekorēšana īpašās dienās"
//                   : language === "en"
//                     ? "Special Occasions Grave Decoration"
//                     : language === "ru"
//                       ? "Украшение могилы в особые дни"
//                       : "Grabdekoration zu besonderen Anlässen"}
//               </h2>
//               <div
//                 className="mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700 mb-6"
//                 aria-hidden="true"
//               ></div>
//               <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//                 {language === "lv"
//                   ? "Mēs saprotam, cik svarīgi ir pieminēt aizgājušos mīļos nozīmīgās dienās. Tāpēc piedāvājam kapu vietas sakopšanu un dekorēšanu dažādos svētkos un piemiņas dienās."
//                   : language === "en"
//                     ? "We understand the importance of remembering your departed loved ones on significant days. That's why we offer grave site maintenance and decoration for various holidays and memorial days."
//                     : language === "ru"
//                       ? "Мы понимаем, как важно вспоминать ушедших близких в значимые дни. Поэтому мы предлагаем уход и украшение могил в различные праздники и дни памяти."
//                       : "Wir verstehen, wie wichtig es ist, an besonderen Tagen an verstorbene Angehörige zu erinnern. Deshalb bieten wir Grabpflege und -dekoration für verschiedene Feiertage und Gedenktage an."}
//               </p>
//             </div>

//             <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 mb-10">
//               <div className="prose prose-lg max-w-none dark:prose-invert prose-emerald">
//                 <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                   {language === "lv"
//                     ? "Mūsu pakalpojumi ietver sakopšanu un dekorēšanu šādās nozīmīgās dienās:"
//                     : language === "en"
//                       ? "Our services include maintenance and decoration on these important occasions:"
//                       : language === "ru"
//                         ? "Наши услуги включают уход и украшение в следующие важные дни:"
//                         : "Unsere Dienstleistungen umfassen Pflege und Dekoration zu diesen wichtigen Anlässen:"}
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mt-6">
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//                     {language === "lv"
//                       ? "Gadskārtu svētki"
//                       : language === "en"
//                         ? "Annual Holidays"
//                         : language === "ru"
//                           ? "Ежегодные праздники"
//                           : "Jährliche Feiertage"}
//                   </h3>
//                   <ul className="space-y-2">
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Ziemassvētki"
//                           : language === "en"
//                             ? "Christmas"
//                             : language === "ru"
//                               ? "Рождество"
//                               : "Weihnachten"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Lieldienas"
//                           : language === "en"
//                             ? "Easter"
//                             : language === "ru"
//                               ? "Пасха"
//                               : "Ostern"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Kapu svētki"
//                           : language === "en"
//                             ? "Cemetery Mass"
//                             : language === "ru"
//                               ? "Кладбищенская месса"
//                               : "Friedhofsmesse"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Visu dvēseļu diena"
//                           : language === "en"
//                             ? "All Souls Day"
//                             : language === "ru"
//                               ? "День всех душ"
//                               : "Allerseelen"}
//                       </span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//                     {language === "lv"
//                       ? "Ģimenes svētki"
//                       : language === "en"
//                         ? "Family Occasions"
//                         : language === "ru"
//                           ? "Семейные события"
//                           : "Familienanlässe"}
//                   </h3>
//                   <ul className="space-y-2">
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Mātes diena"
//                           : language === "en"
//                             ? "Mother's Day"
//                             : language === "ru"
//                               ? "День матери"
//                               : "Muttertag"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Tēva diena"
//                           : language === "en"
//                             ? "Father's Day"
//                             : language === "ru"
//                               ? "День отца"
//                               : "Vatertag"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Dzimšanas dienas"
//                           : language === "en"
//                             ? "Birthdays"
//                             : language === "ru"
//                               ? "Дни рождения"
//                               : "Geburtstage"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Kāzu gadadienas"
//                           : language === "en"
//                             ? "Wedding Anniversary"
//                             : language === "ru"
//                               ? "Годовщина свадьбы"
//                               : "Hochzeitstag"}
//                       </span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//                     {language === "lv"
//                       ? "Piemiņas dienas"
//                       : language === "en"
//                         ? "Memorial Days"
//                         : language === "ru"
//                           ? "Дни памяти"
//                           : "Gedenktage"}
//                   </h3>
//                   <ul className="space-y-2">
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Nāves gadadienas"
//                           : language === "en"
//                             ? "Death Anniversaries"
//                             : language === "ru"
//                               ? "Годовщины смерти"
//                               : "Todestage"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Valentīndiena"
//                           : language === "en"
//                             ? "Valentine's Day"
//                             : language === "ru"
//                               ? "День Святого Валентина"
//                               : "Valentinstag"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Īpašas piemiņas dienas"
//                           : language === "en"
//                             ? "Special Remembrance Days"
//                             : language === "ru"
//                               ? "Особые дни памяти"
//                               : "Besondere Gedenktage"}
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 mb-10">
//               <h3
//                 className="text-xl font-bold text-gray-900 dark:text-white mb-4"
//                 id="how-we-help-title"
//               >
//                 {language === "lv"
//                   ? "Kā mēs varam palīdzēt"
//                   : language === "en"
//                     ? "How We Can Help"
//                     : language === "ru"
//                       ? "Как мы можем помочь"
//                       : "Wie wir helfen können"}
//               </h3>

//               <p className="text-gray-700 dark:text-gray-300 mb-6">
//                 {language === "lv"
//                   ? "Mūsu mērķis ir nodrošināt, lai jūsu tuvinieku atdusas vieta vienmēr būtu skaista un cienīgi kopta, neatkarīgi no gadalaika vai attāluma. Mēs piedāvājam:"
//                   : language === "en"
//                     ? "Our goal is to ensure that your loved ones' resting place is always beautiful and respectfully maintained, regardless of season or distance. We offer:"
//                     : language === "ru"
//                       ? "Наша цель - обеспечить, чтобы место упокоения ваших близких всегда было красивым и ухоженным, независимо от сезона или расстояния. Мы предлагаем:"
//                       : "Unser Ziel ist es, sicherzustellen, dass die Ruhestätte Ihrer Lieben unabhängig von Jahreszeit oder Entfernung immer schön und respektvoll gepflegt ist. Wir bieten:"}
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//                     {language === "lv"
//                       ? "Regulāra kapu kopšana"
//                       : language === "en"
//                         ? "Regular grave maintenance"
//                         : language === "ru"
//                           ? "Регулярный уход за могилой"
//                           : "Regelmäßige Grabpflege"}
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Zāles pļaušana un nezāļu likvidēšana"
//                           : language === "en"
//                             ? "Grass cutting and weed removal"
//                             : language === "ru"
//                               ? "Стрижка травы и удаление сорняков"
//                               : "Grassschnitt und Unkrautentfernung"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Smilšu uzturēšana un atjaunošana"
//                           : language === "en"
//                             ? "Sand maintenance and renewal"
//                             : language === "ru"
//                               ? "Обслуживание и обновление песка"
//                               : "Sandpflege und -erneuerung"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Pieminekļu un kapu plākšņu tīrīšana"
//                           : language === "en"
//                             ? "Monument and grave plate cleaning"
//                             : language === "ru"
//                               ? "Чистка памятников и надгробных плит"
//                               : "Reinigung von Denkmälern und Grabplatten"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Lapu un gružu savākšana"
//                           : language === "en"
//                             ? "Leaf and debris collection"
//                             : language === "ru"
//                               ? "Сбор листьев и мусора"
//                               : "Sammeln von Laub und Unrat"}
//                       </span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//                     {language === "lv"
//                       ? "Sezonāla dekorēšana"
//                       : language === "en"
//                         ? "Seasonal decoration"
//                         : language === "ru"
//                           ? "Сезонное украшение"
//                           : "Saisonale Dekoration"}
//                   </h4>
//                   <ul className="space-y-2">
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Sveču un lampiņu iedegšana svētkos"
//                           : language === "en"
//                             ? "Candle and light placement for holidays"
//                             : language === "ru"
//                               ? "Размещение свечей и лампад в праздники"
//                               : "Kerzen und Lichter für Feiertage"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Sezonālo puķu stādīšana un kopšana"
//                           : language === "en"
//                             ? "Seasonal flower planting and care"
//                             : language === "ru"
//                               ? "Посадка и уход за сезонными цветами"
//                               : "Pflanzung und Pflege saisonaler Blumen"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Svētku dekorāciju novietošana un uzturēšana"
//                           : language === "en"
//                             ? "Holiday decoration placement and maintenance"
//                             : language === "ru"
//                               ? "Размещение и поддержание праздничных украшений"
//                               : "Platzierung und Pflege von Feiertagsdekorationen"}
//                       </span>
//                     </li>
//                     <li className="flex items-start">
//                       <CheckIcon
//                         className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-500 dark:text-emerald-400"
//                         aria-hidden="true"
//                       />
//                       <span className="ml-2.5 text-gray-600 dark:text-gray-300">
//                         {language === "lv"
//                           ? "Personalizēti piemiņas elementi"
//                           : language === "en"
//                             ? "Personalized memorial elements"
//                             : language === "ru"
//                               ? "Персонализированные элементы памяти"
//                               : "Personalisierte Gedenkelemente"}
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-200 dark:border-emerald-800/50">
//               <div className="flex flex-col md:flex-row items-start md:items-center">
//                 <div
//                   className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-800 p-3 rounded-full mr-4 mb-4 md:mb-0"
//                   aria-hidden="true"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-700 dark:text-gray-300">
//                     {language === "lv"
//                       ? "Mūsu pakalpojumi ir īpaši noderīgi, ja dzīvojat tālu no tuvinieku atdusas vietas, bet vēlaties nodrošināt, ka tā tiek pienācīgi kopta un atcerēta nozīmīgās dienās. Pēc katras apmeklējuma reizes, mēs nosūtīsim jums fotoatskaiti, lai jūs varētu redzēt kapavietas stāvokli."
//                       : language === "en"
//                         ? "Our services are particularly valuable if you live far from your loved ones' resting place but want to ensure it is properly maintained and remembered on significant days. After each visit, we will send you a photo report so you can see the condition of the grave site."
//                         : language === "ru"
//                           ? "Наши услуги особенно ценны, если вы живете далеко от места упокоения ваших близких, но хотите убедиться, что за ним должным образом ухаживают и помнят в значимые дни. После каждого посещения мы отправим вам фотоотчет, чтобы вы могли видеть состояние могилы."
//                           : "Unsere Dienstleistungen sind besonders wertvoll, wenn Sie weit von der Ruhestätte Ihrer Lieben entfernt leben, aber sicherstellen möchten, dass sie an bedeutenden Tagen angemessen gepflegt und in Erinnerung behalten wird. Nach jedem Besuch senden wir Ihnen einen Fotobericht, damit Sie den Zustand der Grabstätte sehen können."}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* PRICING SECTION */}
//         <section
//           className="py-12 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"
//           aria-labelledby="pricing-title"
//         >
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <div className="text-center mb-12">
//                 <div
//                   className="inline-block bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium text-sm uppercase px-5 py-2 rounded-full tracking-wider border border-emerald-100 dark:border-emerald-800/20 shadow-sm mb-4"
//                   aria-hidden="true"
//                 >
//                   {language === "lv"
//                     ? "Kapu kopšanas pakalpojumu cenas"
//                     : "Grave Care Service Pricing"}
//                 </div>
//                 <h2
//                   id="pricing-title"
//                   className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6"
//                 >
//                   {language === "lv"
//                     ? "Cenas atkarīgas no kapavietas izmēra"
//                     : t.serviceDetails.pricing.title}
//                 </h2>
//                 <div
//                   className="mx-auto w-32 h-[2px] bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700 mb-8"
//                   aria-hidden="true"
//                 ></div>
//                 <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//                   {language === "lv"
//                     ? "Mūsu pakalpojumu cenas ir pielāgotas dažāda izmēra kapavietām, nodrošinot taisnīgu un atbilstošu aprūpi"
//                     : "Our service prices are adapted to different sized grave sites, ensuring fair and appropriate care"}
//                 </p>

//                 {/* Pricing type toggle */}
//                 <div
//                   className="mt-6 inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg"
//                   role="radiogroup"
//                   aria-label="Pricing type selection"
//                 >
//                   <button
//                     onClick={() => setShowSubscription(true)}
//                     className={`py-2 px-4 text-sm font-medium rounded-md ${
//                       showSubscription
//                         ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
//                         : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
//                     }`}
//                     role="radio"
//                     aria-checked={showSubscription}
//                   >
//                     {t.serviceDetails.pricing.subscriptionBadge}
//                   </button>
//                   <button
//                     onClick={() => setShowSubscription(false)}
//                     className={`py-2 px-4 text-sm font-medium rounded-md ${
//                       !showSubscription
//                         ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
//                         : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
//                     }`}
//                     role="radio"
//                     aria-checked={!showSubscription}
//                   >
//                     {t.serviceDetails.pricing.oneTimeBadge}
//                   </button>
//                 </div>
//               </div>

//               {/* Desktop grid view */}
//               <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {pricingSizes.map((size, index) => (
//                   <PricingCard
//                     key={index}
//                     size={size}
//                     index={index}
//                     showSubscription={showSubscription}
//                     oneTimePrices={oneTimePrices}
//                     language={language as Language}
//                     t={t}
//                   />
//                 ))}
//               </div>

//               {/* Mobile horizontal scroll with snap */}
//               <div
//                 className="md:hidden overflow-x-auto pb-8 scrollbar-hide"
//                 style={{
//                   scrollbarWidth: "none",
//                   msOverflowStyle: "none",
//                 }}
//                 ref={pricingScrollRef}
//                 onScroll={handlePricingScroll}
//                 aria-label="Pricing carousel"
//               >
//                 <div className="flex space-x-4 w-max snap-x snap-mandatory">
//                   {pricingSizes.map((size, index) => (
//                     <div
//                       key={index}
//                       className="flex-shrink-0 w-[calc(83.333vw)] snap-center"
//                     >
//                       <PricingCard
//                         size={size}
//                         index={index}
//                         showSubscription={showSubscription}
//                         oneTimePrices={oneTimePrices}
//                         language={language as Language}
//                         t={t}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Scroll indicators for mobile */}
//               <div
//                 className="md:hidden flex justify-center mt-6 space-x-3"
//                 aria-label="Pricing navigation dots"
//                 role="tablist"
//               >
//                 {pricingSizes.map((_, i) => (
//                   <button
//                     key={i}
//                     className={`w-3 h-3 transition-all duration-300 ${
//                       i === activePricingIndex
//                         ? "rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-md transform scale-110"
//                         : "rounded-full bg-gray-300 dark:bg-gray-600 opacity-70"
//                     }`}
//                     onClick={() => {
//                       if (pricingScrollRef.current) {
//                         const cardWidth =
//                           pricingScrollRef.current.scrollWidth /
//                           pricingSizes.length;
//                         pricingScrollRef.current.scrollTo({
//                           left: i * cardWidth,
//                           behavior: "smooth",
//                         });
//                         setActivePricingIndex(i);
//                       }
//                     }}
//                     aria-label={`Go to pricing option ${i + 1}: ${pricingSizes[i].title}`}
//                     aria-selected={i === activePricingIndex}
//                     role="tab"
//                   />
//                 ))}
//               </div>

//               {/* View all prices button */}
//               <div className="mt-10 text-center">
//                 <Link
//                   href="/pricing"
//                   className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-md shadow-md hover:bg-emerald-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
//                   aria-label={t.services.viewPricing}
//                 >
//                   {t.services.viewPricing}
//                 </Link>
//               </div>

//               {/* More prominently highlighted transport note */}
//               <div
//                 className="mt-10 text-center"
//                 aria-label="Important transportation note"
//               >
//                 <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-400 dark:border-amber-700 p-5 rounded-lg shadow-lg max-w-2xl mx-auto relative overflow-hidden">
//                   <div
//                     className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-300 dark:from-amber-700 dark:to-amber-600"
//                     aria-hidden="true"
//                   ></div>
//                   <p className="text-amber-800 dark:text-amber-300 text-lg font-semibold flex items-center justify-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 mr-2 flex-shrink-0"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                     {language === "lv"
//                       ? "* Transports NAV iekļauts cenā"
//                       : "* Transportation is NOT included in the price"}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How to order section */}
//         <section
//           className="py-16 bg-gray-50 dark:bg-gray-900"
//           aria-labelledby="how-to-order-title"
//         >
//           <div className="container mx-auto px-4">
//             <div className="max-w-7xl mx-auto">
//               <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
//                 {/* Header */}
//                 <div className="border-b border-gray-200 dark:border-gray-700 px-8 py-6">
//                   <h2
//                     id="how-to-order-title"
//                     className="text-2xl font-serif font-medium text-gray-900 dark:text-white"
//                   >
//                     {language === "lv"
//                       ? "Kā pasūtīt mūsu pakalpojumus"
//                       : t.memorial.orderTitle}
//                   </h2>
//                 </div>

//                 {/* Content */}
//                 <div className="p-8">
//                   <div className="space-y-8">
//                     {/* Step 1 */}
//                     <div className="flex">
//                       <div className="flex-shrink-0 mr-4" aria-hidden="true">
//                         <div className="h-8 w-8 rounded bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
//                           <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
//                             1
//                           </span>
//                         </div>
//                       </div>
//                       <div>
//                         <p className="text-gray-700 dark:text-gray-300">
//                           {language === "lv"
//                             ? "Pakalpojuma pasūtīšanai, lūdzam norādīt aizgājēja informāciju - pilnu vārdu un uzvārdu, miršanas datumu un gadu, kā arī kapsētas nosaukumu. Ja zināt kapuvietas numuru vai rindu, tas ievērojami atvieglos kapavietas atrašanu."
//                             : t.memorial.orderText}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Step 2 */}
//                     <div className="flex">
//                       <div className="flex-shrink-0 mr-4" aria-hidden="true">
//                         <div className="h-8 w-8 rounded bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
//                           <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
//                             2
//                           </span>
//                         </div>
//                       </div>
//                       <div>
//                         <p className="text-gray-600 dark:text-gray-400 italic">
//                           {language === "lv"
//                             ? "Ja iespējams, lūdzam pievienot fotogrāfiju vai aprakstu par pieminekli vai citām atpazīšanas zīmēm, kas atrodas kapavietā. Tas palīdzēs mums precīzāk identificēt konkrēto vietu."
//                             : t.memorial.orderExtra}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Grave Search Section */}
//                   <div
//                     className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-700"
//                     aria-labelledby="grave-search-title"
//                   >
//                     <h3
//                       id="grave-search-title"
//                       className="text-xl font-medium text-gray-900 dark:text-white mb-4"
//                     >
//                       {language === "lv"
//                         ? "Kapavietas atrašanas pakalpojums"
//                         : t.memorial.graveSearchTitle}
//                     </h3>

//                     <p className="text-gray-700 dark:text-gray-300 mb-6">
//                       {language === "lv"
//                         ? "Ja ilgāku laiku neesat apmeklējuši tuvinieka kapavietu un zināt tikai vārdu, miršanas datumu un kapsētu, mēs varam palīdzēt ar kapavietas atrašanas un stāvokļa novērtēšanas pakalpojumu. Mūsu speciālisti apzinīgi meklēs un dokumentēs situāciju."
//                         : t.memorial.graveSearchText}
//                     </p>

//                     <div className="dark:bg-gray-850 border border-gray-200 dark:border-gray-700 p-4 rounded-md">
//                       <div className="flex">
//                         <div className="flex-shrink-0 mr-3" aria-hidden="true">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5 text-gray-400 dark:text-gray-500"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                             />
//                           </svg>
//                         </div>
//                         <p className="text-sm text-gray-600 dark:text-gray-400">
//                           {language === "lv"
//                             ? "Lūdzu, ņemiet vērā, ka kapavietas meklēšana ar ierobežotu informāciju ir specializēts pakalpojums. Tā cena tiek noteikta individuāli, atkarībā no nepieciešamās izpētes apjoma, lai atrastu meklēto kapavietu."
//                             : t.memorial.graveSearchNote}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="dark:bg-gray-850 border-t border-gray-200 dark:border-gray-700 p-6 flex justify-end">
//                   <Link
//                     href="/contact"
//                     className="inline-flex items-center px-5 py-2 text-sm font-medium bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
//                     aria-label={
//                       language === "lv" ? "Sazināties ar mums" : "Contact Us"
//                     }
//                   >
//                     {language === "lv" ? "Sazināties ar mums" : "Contact Us"}
//                     <svg
//                       className="ml-2 w-4 h-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M14 5l7 7m0 0l-7 7m7-7H3"
//                       />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
