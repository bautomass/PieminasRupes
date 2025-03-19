// app/pricing/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CheckIcon } from "@/components/Icons";

// Language strings for the pricing page
const translations = {
  lv: {
    title: "Mūsu cenas",
    subtitle: "Caurspīdīgas un godīgas cenas visiem pakalpojumiem",
    description:
      "Mēs piedāvājam dažādus pakalpojumu plānus, lai apmierinātu jūsu vajadzības. Visas cenas ir norādītas bez PVN.",
    subscription: "Abonements",
    oneTime: "Vienreizējs pakalpojums",
    monthly: "mēnesī",
    yearly: "gadā",
    includesNote: "Ietver šādus pakalpojumus:",
    inquiry: "Konsultācijai",
    planNote:
      "Cenā iekļauti pamata pakalpojumi. Papildu izmaksas var rasties atkarībā no situācijas un vajadzībām.",
    contactUs: "Sazinieties ar mums",
    customPlan: {
      title: "Individuāls plāns",
      description:
        "Individuāli pielāgots risinājums atbilstoši jūsu vajadzībām",
      button: "Pieprasīt piedāvājumu",
    },
    plans: [
      {
        id: "basic",
        name: "Pamata",
        price: "25",
        interval: "mēnesī",
        yearlyPrice: "250",
        description: "Regulāra kapu vietas pamata kopšana",
        features: [
          "Regulāra zāles pļaušana ap kapu (1x mēnesī)",
          "Nezāļu likvidēšana no kapu vietas",
          "Lapu un citu gružu savākšana",
          "Sveču un veco ziedu novākšana",
          "Fotoatskaite pēc katras apkopes",
        ],
      },
      {
        id: "standard",
        name: "Standarta",
        price: "45",
        interval: "mēnesī",
        yearlyPrice: "480",
        description: "Pilna apkope ar sezonālajiem darbiem",
        featured: true,
        features: [
          "Visi Pamata plāna pakalpojumi",
          "Biežāka zāles pļaušana (2x mēnesī)",
          "Sezonālo puķu stādīšana (pavasaris/vasara)",
          "Smilšu atjaunošana un izlīdzināšana",
          "Pieminekļa virsmas tīrīšana",
          "Svētku dekorāciju uzlikšana/noņemšana",
        ],
      },
      {
        id: "premium",
        name: "Premium",
        price: "75",
        interval: "mēnesī",
        yearlyPrice: "800",
        description: "Visaptverošs serviss ar paaugstinātu uzmanību",
        features: [
          "Visi Standarta plāna pakalpojumi",
          "Iknedēļas kapu vietas apkope",
          "Regulāra pieminekļa tīrīšana ar speciāliem līdzekļiem",
          "Pieminekļa teksta atjaunošana (1x gadā)",
          "Pastāvīga kapu vietas labiekārtošana",
          "Prioritāra apkalpošana pirms svētkiem",
          "VIP statuss un papildu konsultācijas",
        ],
      },
    ],
    singleServices: [
      {
        id: "single-basic",
        name: "Pamata tīrīšana",
        price: "40",
        description: "Vienreizēja kapu vietas pamata kopšana",
        features: [
          "Zāles pļaušana ap kapu",
          "Nezāļu likvidēšana no kapu vietas",
          "Lapu un citu gružu savākšana",
          "Sveču un veco ziedu novākšana",
          "Fotoatskaite pirms un pēc darbiem",
        ],
      },
      {
        id: "single-monument",
        name: "Pieminekļa tīrīšana",
        price: "55",
        description: "Profesionāla pieminekļa tīrīšana",
        features: [
          "Pieminekļa virsmas tīrīšana ar profesionāliem līdzekļiem",
          "Noņem sūnas, ķērpjus un netīrumus",
          "Attīra tekstu un gravējumus",
          "Aizsargpārklājuma uzklāšana (pēc nepieciešamības)",
          "Fotoatskaite pirms un pēc darbiem",
        ],
      },
      {
        id: "single-renovation",
        name: "Kapu vietas atjaunošana",
        price: "no 120",
        description: "Visaptveroša kapu vietas atjaunošana",
        features: [
          "Kapu vietas ģenerāltīrīšana",
          "Pieminekļa tīrīšana un atjaunošana",
          "Kapu apmales labošana un atjaunošana",
          "Smilšu pilnīga nomaiņa vai papildināšana",
          "Apzaļumošana un/vai puķu stādīšana",
          "Fotoatskaite pirms un pēc darbiem",
        ],
      },
    ],
    faq: {
      title: "Biežāk uzdotie jautājumi",
      questions: [
        {
          question: "Cik bieži tiek veikta kapu vietas kopšana?",
          answer:
            "Atkarībā no izvēlētā plāna, kapu vietas kopšana tiek veikta no vienas reizes mēnesī (Pamata plāns) līdz pat iknedēļas apkopei (Premium plāns). Varat izvēlēties sev piemērotāko intensitāti atbilstoši jūsu vēlmēm un budžetam.",
        },
        {
          question:
            "Vai varu pasūtīt kapu kopšanu vienreizēji, piemēram, pirms svētkiem?",
          answer:
            "Jā, mēs piedāvājam arī vienreizējus kapu kopšanas pakalpojumus. Varat izvēlēties no mūsu standarta vienreizējiem pakalpojumiem vai pieprasīt individuālu piedāvājumu atbilstoši jūsu vajadzībām.",
        },
        {
          question: "Vai pakalpojums ir pieejams visos Latvijas reģionos?",
          answer:
            "Mūsu pakalpojumi ir pieejami Rīgā un tās apkārtnē. Par citiem reģioniem, lūdzu, sazinieties ar mums individuāli - atkarībā no attāluma var tikt piemērota papildu maksa par transportu.",
        },
        {
          question: "Kā es varu redzēt, ka darbs ir paveikts kvalitatīvi?",
          answer:
            "Pēc katra apmeklējuma mēs nosūtām jums fotoatskaiti, kurā redzams kapu vietas stāvoklis pirms un pēc mūsu darba. Tā jūs varat būt pārliecināti par darba kvalitāti, pat ja nevarat personīgi apmeklēt kapu vietu.",
        },
        {
          question: "Vai piedāvājat atlaides ilgtermiņa līgumiem?",
          answer:
            "Jā, kā redzams mūsu cenu plānos, gada abonementam tiek piemērota atlaide salīdzinājumā ar ikmēneša maksājumu summu. Ilgtermiņa klientiem mēs piedāvājam arī papildu priekšrocības un īpašus nosacījumus.",
        },
      ],
    },
  },
  en: {
    title: "Our Pricing",
    subtitle: "Transparent and fair pricing for all services",
    description:
      "We offer various service plans to meet your needs. All prices are shown without VAT.",
    subscription: "Subscription",
    oneTime: "One-time service",
    monthly: "monthly",
    yearly: "yearly",
    includesNote: "Includes the following services:",
    inquiry: "For consultation",
    planNote:
      "Price includes basic services. Additional costs may arise depending on the situation and needs.",
    contactUs: "Contact Us",
    customPlan: {
      title: "Custom Plan",
      description: "Custom tailored solution according to your needs",
      button: "Request a quote",
    },
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: "25",
        interval: "monthly",
        yearlyPrice: "250",
        description: "Regular basic grave site maintenance",
        features: [
          "Regular grass cutting around the grave (1x month)",
          "Weed removal from grave site",
          "Leaf and debris collection",
          "Removal of candles and old flowers",
          "Photo report after each maintenance",
        ],
      },
      {
        id: "standard",
        name: "Standard",
        price: "45",
        interval: "monthly",
        yearlyPrice: "480",
        description: "Full maintenance with seasonal work",
        featured: true,
        features: [
          "All services of the Basic plan",
          "More frequent grass cutting (2x month)",
          "Planting seasonal flowers (spring/summer)",
          "Sand restoration and leveling",
          "Monument surface cleaning",
          "Holiday decoration placement/removal",
        ],
      },
      {
        id: "premium",
        name: "Premium",
        price: "75",
        interval: "monthly",
        yearlyPrice: "800",
        description: "Comprehensive service with increased attention",
        features: [
          "All services of the Standard plan",
          "Weekly grave site maintenance",
          "Regular monument cleaning with special products",
          "Monument text restoration (1x year)",
          "Continuous grave site improvement",
          "Priority service before holidays",
          "VIP status and additional consultations",
        ],
      },
    ],
    singleServices: [
      {
        id: "single-basic",
        name: "Basic Cleaning",
        price: "40",
        description: "One-time basic grave site maintenance",
        features: [
          "Grass cutting around the grave",
          "Weed removal from grave site",
          "Leaf and debris collection",
          "Removal of candles and old flowers",
          "Before and after photo report",
        ],
      },
      {
        id: "single-monument",
        name: "Monument Cleaning",
        price: "55",
        description: "Professional monument cleaning",
        features: [
          "Monument surface cleaning with professional products",
          "Removes moss, lichen and dirt",
          "Cleans text and engravings",
          "Protective coating application (if needed)",
          "Before and after photo report",
        ],
      },
      {
        id: "single-renovation",
        name: "Grave Site Renovation",
        price: "from 120",
        description: "Comprehensive grave site renovation",
        features: [
          "General grave site cleaning",
          "Monument cleaning and restoration",
          "Grave border repair and restoration",
          "Complete sand replacement or addition",
          "Landscaping and/or flower planting",
          "Before and after photo report",
        ],
      },
    ],
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "How often is grave site maintenance performed?",
          answer:
            "Depending on the chosen plan, grave site maintenance is performed from once a month (Basic plan) to weekly maintenance (Premium plan). You can choose the most suitable intensity according to your wishes and budget.",
        },
        {
          question:
            "Can I order grave maintenance as a one-time service, for example before holidays?",
          answer:
            "Yes, we also offer one-time grave maintenance services. You can choose from our standard one-time services or request an individual offer according to your needs.",
        },
        {
          question: "Is the service available in all regions of Latvia?",
          answer:
            "Our services are available in Riga and its surroundings. For other regions, please contact us individually - depending on the distance, an additional fee for transport may be applied.",
        },
        {
          question: "How can I see that the work has been done with quality?",
          answer:
            "After each visit, we send you a photo report showing the condition of the grave site before and after our work. This way you can be confident about the quality of work, even if you cannot personally visit the grave site.",
        },
        {
          question: "Do you offer discounts for long-term contracts?",
          answer:
            "Yes, as you can see in our pricing plans, an annual subscription gets a discount compared to the sum of monthly payments. For long-term clients, we also offer additional benefits and special conditions.",
        },
      ],
    },
  },
  ru: {
    title: "Наши цены",
    subtitle: "Прозрачные и справедливые цены на все услуги",
    description:
      "Мы предлагаем различные планы обслуживания для удовлетворения ваших потребностей. Все цены указаны без НДС.",
    subscription: "Абонемент",
    oneTime: "Разовая услуга",
    monthly: "в месяц",
    yearly: "в год",
    includesNote: "Включает следующие услуги:",
    inquiry: "Для консультации",
    planNote:
      "Цена включает базовые услуги. Дополнительные расходы могут возникнуть в зависимости от ситуации и потребностей.",
    contactUs: "Связаться с нами",
    customPlan: {
      title: "Индивидуальный план",
      description:
        "Индивидуальное решение в соответствии с вашими потребностями",
      button: "Запросить предложение",
    },
    plans: [
      {
        id: "basic",
        name: "Базовый",
        price: "25",
        interval: "в месяц",
        yearlyPrice: "250",
        description: "Регулярное базовое обслуживание могилы",
        features: [
          "Регулярное скашивание травы вокруг могилы (1 раз в месяц)",
          "Удаление сорняков с места захоронения",
          "Сбор листьев и мусора",
          "Уборка свечей и старых цветов",
          "Фотоотчет после каждого обслуживания",
        ],
      },
      {
        id: "standard",
        name: "Стандартный",
        price: "45",
        interval: "в месяц",
        yearlyPrice: "480",
        description: "Полное обслуживание с сезонными работами",
        featured: true,
        features: [
          "Все услуги Базового плана",
          "Более частое скашивание травы (2 раза в месяц)",
          "Посадка сезонных цветов (весна/лето)",
          "Восстановление и выравнивание песка",
          "Очистка поверхности памятника",
          "Размещение/удаление праздничных украшений",
        ],
      },
      {
        id: "premium",
        name: "Премиум",
        price: "75",
        interval: "в месяц",
        yearlyPrice: "800",
        description: "Комплексное обслуживание с повышенным вниманием",
        features: [
          "Все услуги Стандартного плана",
          "Еженедельное обслуживание могилы",
          "Регулярная чистка памятника специальными средствами",
          "Восстановление текста на памятнике (1 раз в год)",
          "Постоянное благоустройство могилы",
          "Приоритетное обслуживание перед праздниками",
          "VIP-статус и дополнительные консультации",
        ],
      },
    ],
    singleServices: [
      {
        id: "single-basic",
        name: "Базовая очистка",
        price: "40",
        description: "Разовое базовое обслуживание могилы",
        features: [
          "Скашивание травы вокруг могилы",
          "Удаление сорняков с места захоронения",
          "Сбор листьев и мусора",
          "Уборка свечей и старых цветов",
          "Фотоотчет до и после работ",
        ],
      },
      {
        id: "single-monument",
        name: "Очистка памятника",
        price: "55",
        description: "Профессиональная очистка памятника",
        features: [
          "Очистка поверхности памятника профессиональными средствами",
          "Удаление мха, лишайника и грязи",
          "Очистка текста и гравировок",
          "Нанесение защитного покрытия (при необходимости)",
          "Фотоотчет до и после работ",
        ],
      },
      {
        id: "single-renovation",
        name: "Реновация могилы",
        price: "от 120",
        description: "Комплексная реновация места захоронения",
        features: [
          "Генеральная уборка могилы",
          "Очистка и реставрация памятника",
          "Ремонт и восстановление оград",
          "Полная замена или добавление песка",
          "Озеленение и/или посадка цветов",
          "Фотоотчет до и после работ",
        ],
      },
    ],
    faq: {
      title: "Часто задаваемые вопросы",
      questions: [
        {
          question: "Как часто производится обслуживание могилы?",
          answer:
            "В зависимости от выбранного плана, обслуживание могилы производится от одного раза в месяц (Базовый план) до еженедельного обслуживания (Премиум план). Вы можете выбрать наиболее подходящую интенсивность в соответствии с вашими пожеланиями и бюджетом.",
        },
        {
          question:
            "Могу ли я заказать уход за могилой как разовую услугу, например, перед праздниками?",
          answer:
            "Да, мы также предлагаем разовые услуги по уходу за могилой. Вы можете выбрать из наших стандартных разовых услуг или запросить индивидуальное предложение в соответствии с вашими потребностями.",
        },
        {
          question: "Доступна ли услуга во всех регионах Латвии?",
          answer:
            "Наши услуги доступны в Риге и ее окрестностях. По другим регионам, пожалуйста, свяжитесь с нами индивидуально - в зависимости от расстояния может взиматься дополнительная плата за транспорт.",
        },
        {
          question: "Как я могу увидеть, что работа выполнена качественно?",
          answer:
            "После каждого посещения мы отправляем вам фотоотчет, показывающий состояние могилы до и после нашей работы. Таким образом, вы можете быть уверены в качестве работы, даже если не можете лично посетить могилу.",
        },
        {
          question: "Предлагаете ли вы скидки на долгосрочные контракты?",
          answer:
            "Да, как видно из наших тарифных планов, годовая подписка получает скидку по сравнению с суммой ежемесячных платежей. Для долгосрочных клиентов мы также предлагаем дополнительные преимущества и особые условия.",
        },
      ],
    },
  },
  de: {
    title: "Unsere Preise",
    subtitle: "Transparente und faire Preise für alle Dienstleistungen",
    description:
      "Wir bieten verschiedene Servicepläne an, um Ihre Bedürfnisse zu erfüllen. Alle Preise verstehen sich ohne MwSt.",
    subscription: "Abonnement",
    oneTime: "Einmalige Dienstleistung",
    monthly: "monatlich",
    yearly: "jährlich",
    includesNote: "Beinhaltet die folgenden Dienstleistungen:",
    inquiry: "Für Beratung",
    planNote:
      "Der Preis beinhaltet grundlegende Dienstleistungen. Zusätzliche Kosten können je nach Situation und Bedarf entstehen.",
    contactUs: "Kontaktieren Sie uns",
    customPlan: {
      title: "Individueller Plan",
      description: "Maßgeschneiderte Lösung nach Ihren Bedürfnissen",
      button: "Angebot anfordern",
    },
    plans: [
      {
        id: "basic",
        name: "Basic",
        price: "25",
        interval: "monatlich",
        yearlyPrice: "250",
        description: "Regelmäßige Grundpflege des Grabes",
        features: [
          "Regelmäßiges Rasenmähen um das Grab (1x Monat)",
          "Unkrautentfernung vom Grab",
          "Sammeln von Laub und Unrat",
          "Entfernung von Kerzen und alten Blumen",
          "Fotobericht nach jeder Pflege",
        ],
      },
      {
        id: "standard",
        name: "Standard",
        price: "45",
        interval: "monatlich",
        yearlyPrice: "480",
        description: "Vollständige Pflege mit saisonalen Arbeiten",
        featured: true,
        features: [
          "Alle Leistungen des Basic-Plans",
          "Häufigeres Rasenmähen (2x Monat)",
          "Pflanzung von Saisonblumen (Frühling/Sommer)",
          "Sandwiederherstellung und Nivellierung",
          "Reinigung der Denkmaloberfläche",
          "Platzierung/Entfernung von Feiertagsdekorationen",
        ],
      },
      {
        id: "premium",
        name: "Premium",
        price: "75",
        interval: "monatlich",
        yearlyPrice: "800",
        description: "Umfassender Service mit erhöhter Aufmerksamkeit",
        features: [
          "Alle Leistungen des Standard-Plans",
          "Wöchentliche Grabpflege",
          "Regelmäßige Denkmalsreinigung mit Spezialmitteln",
          "Denkmaltextrestaurierung (1x Jahr)",
          "Kontinuierliche Grabverbesserung",
          "Prioritätsservice vor Feiertagen",
          "VIP-Status und zusätzliche Beratungen",
        ],
      },
    ],
    singleServices: [
      {
        id: "single-basic",
        name: "Grundreinigung",
        price: "40",
        description: "Einmalige Grundpflege des Grabes",
        features: [
          "Rasenmähen um das Grab",
          "Unkrautentfernung vom Grab",
          "Sammeln von Laub und Unrat",
          "Entfernung von Kerzen und alten Blumen",
          "Vorher-Nachher-Fotobericht",
        ],
      },
      {
        id: "single-monument",
        name: "Denkmalsreinigung",
        price: "55",
        description: "Professionelle Denkmalsreinigung",
        features: [
          "Reinigung der Denkmaloberfläche mit professionellen Mitteln",
          "Entfernt Moos, Flechten und Schmutz",
          "Reinigt Text und Gravuren",
          "Auftragen einer Schutzschicht (bei Bedarf)",
          "Vorher-Nachher-Fotobericht",
        ],
      },
      {
        id: "single-renovation",
        name: "Grabrenovierung",
        price: "ab 120",
        description: "Umfassende Grabrenovierung",
        features: [
          "Generelle Grabreinigung",
          "Denkmalsreinigung und -restaurierung",
          "Reparatur und Restaurierung der Grabeinfassung",
          "Vollständiger Sandaustausch oder -ergänzung",
          "Landschaftsgestaltung und/oder Blumenpflanzung",
          "Vorher-Nachher-Fotobericht",
        ],
      },
    ],
    faq: {
      title: "Häufig gestellte Fragen",
      questions: [
        {
          question: "Wie oft wird die Grabpflege durchgeführt?",
          answer:
            "Je nach gewähltem Plan wird die Grabpflege von einmal im Monat (Basic-Plan) bis hin zur wöchentlichen Pflege (Premium-Plan) durchgeführt. Sie können die für Sie passende Intensität entsprechend Ihren Wünschen und Ihrem Budget wählen.",
        },
        {
          question:
            "Kann ich die Grabpflege als einmaligen Service bestellen, zum Beispiel vor Feiertagen?",
          answer:
            "Ja, wir bieten auch einmalige Grabpflegedienste an. Sie können aus unseren Standard-Einzelleistungen wählen oder ein individuelles Angebot entsprechend Ihren Bedürfnissen anfordern.",
        },
        {
          question: "Ist der Service in allen Regionen Lettlands verfügbar?",
          answer:
            "Unsere Dienstleistungen sind in Riga und Umgebung verfügbar. Für andere Regionen kontaktieren Sie uns bitte individuell - je nach Entfernung kann eine zusätzliche Gebühr für den Transport anfallen.",
        },
        {
          question:
            "Wie kann ich sehen, dass die Arbeit qualitativ hochwertig ausgeführt wurde?",
          answer:
            "Nach jedem Besuch senden wir Ihnen einen Fotobericht, der den Zustand des Grabes vor und nach unserer Arbeit zeigt. So können Sie von der Qualität der Arbeit überzeugt sein, auch wenn Sie das Grab nicht persönlich besuchen können.",
        },
        {
          question: "Bieten Sie Rabatte für langfristige Verträge an?",
          answer:
            "Ja, wie Sie in unseren Preisplänen sehen können, erhält ein Jahresabonnement einen Rabatt im Vergleich zur Summe der monatlichen Zahlungen. Für Langzeitkunden bieten wir auch zusätzliche Vorteile und besondere Konditionen an.",
        },
      ],
    },
  },
};

export default function PricingPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const [billingType, setBillingType] = useState<"subscription" | "oneTime">(
    "subscription"
  );
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [activeTab, setActiveTab] = useState<number>(0);

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
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {t.description}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
        <div className="container">
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
                {t.subscription}
              </button>
              <button
                onClick={() => setBillingType("oneTime")}
                className={`flex-1 py-2 text-sm font-medium rounded-md ${
                  billingType === "oneTime"
                    ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {t.oneTime}
              </button>
            </div>

            {/* Subscription Interval Toggle */}
            {billingType === "subscription" && (
              <div className="flex justify-center mt-6">
                <div className="flex p-1 bg-gray-100 rounded-md dark:bg-gray-700">
                  <button
                    onClick={() => setBillingInterval("monthly")}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      billingInterval === "monthly"
                        ? "bg-emerald-600 text-white shadow"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  >
                    {t.monthly}
                  </button>
                  <button
                    onClick={() => setBillingInterval("yearly")}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      billingInterval === "yearly"
                        ? "bg-emerald-600 text-white shadow"
                        : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  >
                    {t.yearly}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Subscription Plans */}
          {billingType === "subscription" && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {t.plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`flex flex-col p-8 bg-white border rounded-lg shadow-sm dark:bg-gray-800 ${
                    plan.featured
                      ? "border-emerald-600 dark:border-emerald-500 ring-1 ring-emerald-600 dark:ring-emerald-500"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      €
                      {billingInterval === "monthly"
                        ? plan.price
                        : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      /{billingInterval === "monthly" ? t.monthly : t.yearly}
                    </span>
                  </div>

                  <ul className="flex-1 mt-6 space-y-4">
                    <li className="text-sm font-medium text-gray-900 dark:text-white">
                      {t.includesNote}
                    </li>
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
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
                      className={`block w-full px-4 py-2 text-sm font-medium text-center rounded-md ${
                        plan.featured
                          ? "text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                          : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100 dark:text-emerald-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                      }`}
                    >
                      {t.contactUs}
                    </Link>
                  </div>

                  <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    {t.planNote}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Single Services */}
          {billingType === "oneTime" && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {t.singleServices.map((service) => (
                <div
                  key={service.id}
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
                      {t.includesNote}
                    </li>
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
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
                      {t.contactUs}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Custom Plan */}
          <div className="max-w-3xl p-8 mx-auto mt-16 bg-gray-50 rounded-lg dark:bg-gray-900">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.customPlan.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t.customPlan.description}
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                >
                  {t.customPlan.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white sm:text-3xl">
              {t.faq.title}
            </h2>

            <div className="mt-12 space-y-6">
              {t.faq.questions.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                  <button
                    onClick={() =>
                      setActiveTab(activeTab === index ? -1 : index)
                    }
                    className="flex items-start justify-between w-full text-left"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <span className="ml-4">
                      {activeTab === index ? (
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                      ) : (
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  {activeTab === index && (
                    <div className="mt-4 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
        <div className="container">
          <div className="px-6 py-10 text-center bg-emerald-600 rounded-lg dark:bg-emerald-700 md:py-16 md:px-12">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {language === "lv" && "Gatavi sākt?"}
              {language === "en" && "Ready to get started?"}
              {language === "ru" && "Готовы начать?"}
              {language === "de" && "Bereit anzufangen?"}
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-emerald-50">
              {language === "lv" &&
                "Sazinieties ar mums, lai uzzinātu vairāk par mūsu pakalpojumiem un kā mēs varam palīdzēt."}
              {language === "en" &&
                "Contact us to learn more about our services and how we can help you."}
              {language === "ru" &&
                "Свяжитесь с нами, чтобы узнать больше о наших услугах и о том, как мы можем вам помочь."}
              {language === "de" &&
                "Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren und wie wir Ihnen helfen können."}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 text-base font-medium text-emerald-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
              >
                {t.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
