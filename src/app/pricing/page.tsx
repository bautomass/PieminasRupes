"use client";

import React, { useState, useMemo, useCallback, memo } from "react";
import Link from "next/link";
import Head from "next/head";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { CheckIcon, InfoIcon } from "@/components/Icons";
import { motion } from "framer-motion";

// Define types for better type safety
interface SizePlan {
  id: string;
  name: string;
  size: string;
  price: string;
  interval: string;
  yearlyPrice: string;
  description: string;
  featured: boolean;
}

interface SingleService {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface PricingTabsProps {
  billingType: "subscription" | "oneTime";
  setBillingType: (type: "subscription" | "oneTime") => void;
  billingInterval: "quarterly" | "yearly";
  setBillingInterval: (interval: "quarterly" | "yearly") => void;
  language: string;
}

interface SubscriptionPlansProps {
  sizePlans: SizePlan[];
  billingInterval: "quarterly" | "yearly";
  language: string;
  t: any;
}

interface SingleServicesProps {
  services: SingleService[];
  language: string;
}

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Memoized component for pricing tabs
const PricingTabs = memo(
  ({
    billingType,
    setBillingType,
    billingInterval,
    setBillingInterval,
    language,
  }: PricingTabsProps) => {
    const handleBillingTypeChange = useCallback(
      (type: "subscription" | "oneTime") => {
        setBillingType(type);
      },
      [setBillingType]
    );

    const handleIntervalChange = useCallback(
      (interval: "quarterly" | "yearly") => {
        setBillingInterval(interval);
      },
      [setBillingInterval]
    );

    return (
      <div className="max-w-5xl mx-auto mb-12">
        {/* Tabs */}
        <div
          className="flex p-1 bg-gray-100 rounded-lg dark:bg-gray-700"
          role="tablist"
          aria-label="Pricing options"
        >
          <button
            onClick={() => handleBillingTypeChange("subscription")}
            className={`flex-1 py-2 text-sm font-medium rounded-md ${
              billingType === "subscription"
                ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
                : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
            role="tab"
            aria-selected={billingType === "subscription"}
            aria-controls="subscription-panel"
            id="subscription-tab"
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
            onClick={() => handleBillingTypeChange("oneTime")}
            className={`flex-1 py-2 text-sm font-medium rounded-md ${
              billingType === "oneTime"
                ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
                : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
            role="tab"
            aria-selected={billingType === "oneTime"}
            aria-controls="onetime-panel"
            id="onetime-tab"
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
            <div
              className="flex p-1 bg-gray-100 rounded-md dark:bg-gray-700"
              role="radiogroup"
              aria-label="Billing frequency"
            >
              <button
                onClick={() => handleIntervalChange("quarterly")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  billingInterval === "quarterly"
                    ? "bg-emerald-600 text-white shadow"
                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
                role="radio"
                aria-checked={billingInterval === "quarterly"}
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
                onClick={() => handleIntervalChange("yearly")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  billingInterval === "yearly"
                    ? "bg-emerald-600 text-white shadow"
                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
                role="radio"
                aria-checked={billingInterval === "yearly"}
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
    );
  }
);

PricingTabs.displayName = "PricingTabs";

// Memoized component for subscription plans
const SubscriptionPlans = memo(
  ({ sizePlans, billingInterval, language, t }: SubscriptionPlansProps) => {
    return (
      <div
        id="subscription-panel"
        role="tabpanel"
        aria-labelledby="subscription-tab"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.serviceDetails.pricing.title}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sizePlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col p-8 bg-white border rounded-lg shadow-sm dark:bg-gray-800 ${
                  plan.featured
                    ? "border-emerald-600 dark:border-emerald-500 ring-1 ring-emerald-600 dark:ring-emerald-500"
                    : "border-gray-200 dark:border-gray-700"
                }`}
                aria-labelledby={`plan-${plan.id}-title`}
              >
                <h3
                  id={`plan-${plan.id}-title`}
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  {plan.name}
                </h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {plan.size}
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
                <div
                  className="mt-4"
                  aria-label={`Price: ${billingInterval === "quarterly" ? plan.price : plan.yearlyPrice} euros per ${billingInterval}`}
                >
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    €
                    {billingInterval === "quarterly"
                      ? plan.price
                      : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    /
                    {billingInterval === "quarterly"
                      ? t.serviceDetails.pricing.quarterly
                      : t.serviceDetails.pricing.yearly}
                  </span>
                </div>

                <ul
                  className="flex-1 mt-6 space-y-4"
                  aria-label="Plan features"
                >
                  <li className="text-sm font-medium text-gray-900 dark:text-white">
                    {language === "lv"
                      ? "Ietver šādus pakalpojumus:"
                      : language === "en"
                        ? "Includes the following services:"
                        : language === "ru"
                          ? "Включает следующие услуги:"
                          : "Beinhaltet die folgenden Dienstleistungen:"}
                  </li>
                  {getSubscriptionFeatures(language).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className={`block w-full px-4 py-2 text-sm font-medium text-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 ${
                      plan.featured
                        ? "text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                        : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100 dark:text-emerald-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                    }`}
                    aria-label={`Contact us about ${plan.name} plan`}
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
                  <InfoIcon
                    className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-1"
                    aria-hidden="true"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t.serviceDetails.pricing.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

SubscriptionPlans.displayName = "SubscriptionPlans";

// Memoized component for single services
const SingleServices = memo(({ services, language }: SingleServicesProps) => {
  return (
    <div
      id="onetime-panel"
      role="tabpanel"
      aria-labelledby="onetime-tab"
      className="grid grid-cols-1 gap-8 md:grid-cols-3"
    >
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex flex-col p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          aria-labelledby={`service-${service.id}-title`}
        >
          <h3
            id={`service-${service.id}-title`}
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            {service.name}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
          <div className="mt-4" aria-label={`Price: ${service.price} euros`}>
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              €{service.price}
            </span>
          </div>

          <ul className="flex-1 mt-6 space-y-4" aria-label="Service features">
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
                <CheckIcon
                  className="flex-shrink-0 w-5 h-5 mt-0.5 text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              className="block w-full px-4 py-2 text-sm font-medium text-center text-white bg-emerald-600 rounded-md hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              aria-label={`Contact us about ${service.name} service`}
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
  );
});

SingleServices.displayName = "SingleServices";

// Helper function to get subscription features based on language
function getSubscriptionFeatures(language: string): string[] {
  if (language === "lv") {
    return [
      "Regulāra kapu vietas uzturēšana",
      "Sezonālie darbi (pavasaris, vasara, rudens)",
      "Sveču un veco ziedu novākšana",
      "Lapu un citu gružu savākšana",
      "Fotoatskaite pēc katras apkopes",
    ];
  } else if (language === "en") {
    return [
      "Regular grave site maintenance",
      "Seasonal work (spring, summer, autumn)",
      "Removal of candles and old flowers",
      "Leaf and debris collection",
      "Photo report after each maintenance",
    ];
  } else if (language === "ru") {
    return [
      "Регулярное обслуживание могилы",
      "Сезонные работы (весна, лето, осень)",
      "Уборка свечей и старых цветов",
      "Сбор листьев и мусора",
      "Фотоотчет после каждого обслуживания",
    ];
  } else {
    return [
      "Regelmäßige Grabpflege",
      "Saisonale Arbeiten (Frühling, Sommer, Herbst)",
      "Entfernung von Kerzen und alten Blumen",
      "Sammeln von Laub und Unrat",
      "Fotobericht nach jeder Pflege",
    ];
  }
}

// Main component
export default function PricingPage(): React.ReactElement {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || {};

  // State with useCallback for better performance
  const [billingType, setBillingType] = useState<"subscription" | "oneTime">(
    "subscription"
  );
  const [billingInterval, setBillingInterval] = useState<
    "quarterly" | "yearly"
  >("quarterly");

  // Memoize data preparation to prevent recalculation on each render
  const { sizePlans, singleServices, pageTitle, pageDescription } =
    useMemo(() => {
      // Define pricing plans based on the translation
      const pricingSizes = t.serviceDetails?.pricing?.sizes || [];

      // Generate size-based plans dynamically from pricing sizes
      const plans = pricingSizes.map((size: any) => {
        return {
          id: size.title.toLowerCase(),
          name: size.title,
          size: size.size,
          price: size.price,
          interval: t.serviceDetails?.pricing?.quarterly || "quarterly",
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
      const services = [
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

      // Page title and description for SEO
      const title =
        language === "lv"
          ? "Mūsu cenas | SkyGarden - Kapu kopšanas pakalpojumi"
          : language === "en"
            ? "Our Pricing | SkyGarden - Grave Care Services"
            : language === "ru"
              ? "Наши цены | SkyGarden - Услуги по уходу за могилами"
              : "Unsere Preise | SkyGarden - Grabpflegedienste";

      const description =
        language === "lv"
          ? "Caurspīdīgas un godīgas cenas visiem SkyGarden kapu kopšanas pakalpojumiem. Abonements un vienreizēji pakalpojumi."
          : language === "en"
            ? "Transparent and fair pricing for all SkyGarden grave care services. Subscription and one-time services available."
            : language === "ru"
              ? "Прозрачные и справедливые цены на все услуги SkyGarden по уходу за могилами. Абонемент и разовые услуги."
              : "Transparente und faire Preise für alle SkyGarden Grabpflegedienste. Abonnement und einmalige Dienstleistungen.";

      return {
        sizePlans: plans,
        singleServices: services,
        pageTitle: title,
        pageDescription: description,
      };
    }, [language, t]);

  // Create structured data for SEO
  const pricingStructuredData = useMemo(() => {
    return {
      "@context": "https://schema.org/",
      "@type": "PriceSpecification",
      name: pageTitle,
      description: pageDescription,
      price: sizePlans.length > 0 ? sizePlans[0].price : "40",
      priceCurrency: "EUR",
      url: `https://skygarden.lv/${language === "lv" ? "" : language + "/"}pricing`,
    };
  }, [sizePlans, pageTitle, pageDescription, language]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://skygarden.lv/${language === "lv" ? "" : language + "/"}pricing`}
        />
        <link
          rel="canonical"
          href={`https://skygarden.lv/${language === "lv" ? "" : language + "/"}pricing`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pricingStructuredData),
          }}
        />
      </Head>

      <main className="bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section
          className="py-8 bg-white dark:bg-gray-800 md:py-8 lg:py-10"
          aria-labelledby="pricing-title"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1
                id="pricing-title"
                className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
              >
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
              <div
                className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"
                aria-hidden="true"
              ></div>
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

        {/* Pricing Section */}
        <section className="py-8 bg-white dark:bg-gray-800 md:py-6">
          <div className="container mx-auto px-4">
            {/* Payment information - Moved to top and highlighted */}
            <div
              className="max-w-5xl mx-auto mb-12 bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-2 border-amber-300 dark:border-amber-700 shadow-md"
              role="alert"
              aria-label="Important payment information"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6 mr-1.5 md:mr-2 text-emerald-600 dark:text-emerald-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="leading-tight">
                  {language === "lv"
                    ? "Kā Norit Sadarbība ar SkyGarden"
                    : language === "en"
                      ? "How Your SkyGarden Service Works"
                      : language === "ru"
                        ? "Как Происходит Сотрудничество с SkyGarden"
                        : "So Funktioniert Ihr Service mit SkyGarden"}
                </span>
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-2 md:mb-3 font-medium leading-tight md:leading-normal">
                {t.serviceDetails?.pricing?.paymentNote}
              </p>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-tight md:leading-normal">
                {t.serviceDetails?.pricing?.additionalNote}
              </p>
            </div>

            {/* Pricing Tabs Component */}
            <PricingTabs
              billingType={billingType}
              setBillingType={setBillingType}
              billingInterval={billingInterval}
              setBillingInterval={setBillingInterval}
              language={language}
            />

            {/* Subscription Plans or Single Services based on selected tab */}
            {billingType === "subscription" ? (
              <SubscriptionPlans
                sizePlans={sizePlans}
                billingInterval={billingInterval}
                language={language}
                t={t}
              />
            ) : (
              <SingleServices services={singleServices} language={language} />
            )}
          </div>
        </section>
      </main>
    </>
  );
}
