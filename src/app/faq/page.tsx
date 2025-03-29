"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Head from "next/head";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

// Define types for our data structures
interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: string;
  questions: FAQ[];
}

interface FAQData {
  categories: FAQCategory[];
  translate: (lv: string, en: string, ru: string, de: string) => string;
}

// Extract all FAQ data outside the component to prevent recreation on each render
const createFAQs = (language: string | undefined): FAQData => {
  const lang = language || "en";

  // Translation helper function to reduce repetitive code
  const translate = (
    lv: string,
    en: string,
    ru: string,
    de: string
  ): string => {
    if (lang === "lv") return lv;
    if (lang === "ru") return ru;
    if (lang === "de") return de;
    return en; // Default to English
  };

  // General FAQs
  const generalFAQs = [
    {
      question: translate(
        "Cik bieži tiek veikta kapu vietas kopšana?",
        "How often is grave site maintenance performed?",
        "Как часто производится обслуживание могилы?",
        "Wie oft wird die Grabpflege durchgeführt?"
      ),
      answer: translate(
        "Atkarībā no izvēlētā plāna, kapu vietas kopšana tiek veikta no vienas reizes mēnesī (Pamata plāns) līdz pat iknedēļas apkopei (Premium plāns). Varat izvēlēties sev piemērotāko intensitāti atbilstoši jūsu vēlmēm un budžetam.",
        "Depending on the chosen plan, grave site maintenance is performed from once a month (Basic plan) to weekly maintenance (Premium plan). You can choose the most suitable intensity according to your wishes and budget.",
        "В зависимости от выбранного плана, обслуживание могилы производится от одного раза в месяц (Базовый план) до еженедельного обслуживания (Премиум план). Вы можете выбрать наиболее подходящую интенсивность в соответствии с вашими пожеланиями и бюджетом.",
        "Je nach gewähltem Plan wird die Grabpflege von einmal im Monat (Basic-Plan) bis hin zur wöchentlichen Pflege (Premium-Plan) durchgeführt. Sie können die für Sie passende Intensität entsprechend Ihren Wünschen und Ihrem Budget wählen."
      ),
    },
    {
      question: translate(
        "Vai varu pasūtīt kapu kopšanu vienreizēji, piemēram, pirms svētkiem?",
        "Can I order grave maintenance as a one-time service, for example before holidays?",
        "Могу ли я заказать уход за могилой как разовую услугу, например, перед праздниками?",
        "Kann ich die Grabpflege als einmaligen Service bestellen, zum Beispiel vor Feiertagen?"
      ),
      answer: translate(
        "Jā, mēs piedāvājam arī vienreizējus kapu kopšanas pakalpojumus. Varat izvēlēties no mūsu standarta vienreizējiem pakalpojumiem vai pieprasīt individuālu piedāvājumu atbilstoši jūsu vajadzībām.",
        "Yes, we also offer one-time grave maintenance services. You can choose from our standard one-time services or request an individual offer according to your needs.",
        "Да, мы также предлагаем разовые услуги по уходу за могилой. Вы можете выбрать из наших стандартных разовых услуг или запросить индивидуальное предложение в соответствии с вашими потребностями.",
        "Ja, wir bieten auch einmalige Grabpflegedienste an. Sie können aus unseren Standard-Einzelleistungen wählen oder ein individuelles Angebot entsprechend Ihren Bedürfnissen anfordern."
      ),
    },
    {
      question: translate(
        "Vai pakalpojums ir pieejams visos reģionos?",
        "Is the service available in all regions?",
        "Доступна ли услуга во всех регионах?",
        "Ist der Service in allen Regionen verfügbar?"
      ),
      answer: translate(
        "Mūsu pakalpojumi ir pieejami visā Dienvidkurzemes novadā un Liepājā. Par citiem reģioniem, lūdzu, sazinieties ar mums individuāli - atkarībā no attāluma var tikt piemērota papildu maksa par transportu.",
        "Our services are available throughout the Dienvidkurzeme region and in Liepāja. For other regions, please contact us individually - depending on the distance, an additional fee for transport may be applied.",
        "Наши услуги доступны по всему Южнокурземскому краю и в Лиепае. По другим регионам, пожалуйста, свяжитесь с нами индивидуально - в зависимости от расстояния может взиматься дополнительная плата за транспорт.",
        "Unsere Dienstleistungen sind in der gesamten Region Dienvidkurzeme und in Liepāja verfügbar. Für andere Regionen kontaktieren Sie uns bitte individuell - je nach Entfernung kann eine zusätzliche Gebühr für den Transport anfallen."
      ),
    },
    {
      question: translate(
        "Kā es varu redzēt, ka darbs ir paveikts kvalitatīvi?",
        "How can I see that the work has been done with quality?",
        "Как я могу увидеть, что работа выполнена качественно?",
        "Wie kann ich sehen, dass die Arbeit qualitativ hochwertig ausgeführt wurde?"
      ),
      answer: translate(
        "Pēc katra apmeklējuma mēs nosūtām jums fotoatskaiti, kurā redzams kapu vietas stāvoklis pirms un pēc mūsu darba. Tā jūs varat būt pārliecināti par darba kvalitāti, pat ja nevarat personīgi apmeklēt kapu vietu.",
        "After each visit, we send you a photo report showing the condition of the grave site before and after our work. This way you can be confident about the quality of work, even if you cannot personally visit the grave site.",
        "После каждого посещения мы отправляем вам фотоотчет, показывающий состояние могилы до и после нашей работы. Таким образом, вы можете быть уверены в качестве работы, даже если не можете лично посетить могилу.",
        "Nach jedem Besuch senden wir Ihnen einen Fotobericht, der den Zustand des Grabes vor und nach unserer Arbeit zeigt. So können Sie von der Qualität der Arbeit überzeugt sein, auch wenn Sie das Grab nicht persönlich besuchen können."
      ),
    },
    {
      question: translate(
        "Vai piedāvājat atlaides ilgtermiņa līgumiem?",
        "Do you offer discounts for long-term contracts?",
        "Предлагаете ли вы скидки на долгосрочные контракты?",
        "Bieten Sie Rabatte für langfristige Verträge an?"
      ),
      answer: translate(
        "Jā, gada abonementam tiek piemērota 10% atlaide salīdzinājumā ar ikmēneša maksājumu summu. Ilgtermiņa klientiem mēs piedāvājam arī papildu priekšrocības un īpašus nosacījumus.",
        "Yes, an annual subscription gets a 10% discount compared to the sum of monthly payments. For long-term clients, we also offer additional benefits and special conditions.",
        "Да, годовая подписка получает скидку 10% по сравнению с суммой ежемесячных платежей. Для долгосрочных клиентов мы также предлагаем дополнительные преимущества и особые условия.",
        "Ja, ein Jahresabonnement erhält einen Rabatt von 10% im Vergleich zur Summe der monatlichen Zahlungen. Für Langzeitkunden bieten wir auch zusätzliche Vorteile und besondere Konditionen an."
      ),
    },
  ];

  // Services FAQs
  const serviceFAQs = [
    {
      question: translate(
        "Ko ietver regulārā kapu kopšana?",
        "What does regular grave maintenance include?",
        "Что включает в себя регулярный уход за могилой?",
        "Was beinhaltet die regelmäßige Grabpflege?"
      ),
      answer: translate(
        "Regulārā kapu kopšana ietver zāles pļaušanu, nezāļu likvidēšanu, lapu un citu gružu savākšanu, pieminekļu un kapu plākšņu tīrīšanu, smilšu atjaunošanu un izlīdzināšanu, kā arī sveču un veco ziedu novākšanu. Papildus tiek veikta arī fotofiksācija, lai jūs varētu redzēt paveikto darbu.",
        "Regular grave maintenance includes grass cutting, weed removal, leaf and debris collection, monument and grave plate cleaning, sand restoration and leveling, as well as the removal of candles and old flowers. Additionally, photo documentation is provided so you can see the completed work.",
        "Регулярный уход за могилой включает стрижку травы, удаление сорняков, сбор листьев и мусора, чистку памятников и надгробных плит, восстановление и выравнивание песка, а также уборку свечей и старых цветов. Дополнительно предоставляется фотоотчет, чтобы вы могли видеть выполненную работу.",
        "Die regelmäßige Grabpflege umfasst Rasenmähen, Unkrautentfernung, Sammeln von Laub und Unrat, Reinigung von Denkmälern und Grabplatten, Sandwiederherstellung und Nivellierung sowie die Entfernung von Kerzen und alten Blumen. Zusätzlich wird eine Fotodokumentation bereitgestellt, damit Sie die erledigte Arbeit sehen können."
      ),
    },
    {
      question: translate(
        "Kādus sezonālos darbus jūs piedāvājat?",
        "What seasonal work do you offer?",
        "Какие сезонные работы вы предлагаете?",
        "Welche saisonalen Arbeiten bieten Sie an?"
      ),
      answer: translate(
        "Mēs piedāvājam dažādus sezonālos darbus: pavasarī - kapu vietas sagatavošana pēc ziemas, vasarā - regulāra kopšana un ziedu stādīšana, rudenī - lapu savākšana un kapu vietas sagatavošana ziemai, un ziemā - sniega tīrīšana un piemiņas svecīšu izvietošana. Katrā sezonā mēs pielāgojam mūsu pakalpojumus, lai kapu vieta būtu pienācīgi kopta.",
        "We offer various seasonal works: in spring - grave site preparation after winter, in summer - regular maintenance and flower planting, in autumn - leaf collection and grave site preparation for winter, and in winter - snow removal and memorial candle placement. In each season, we adapt our services to ensure the grave site is properly maintained.",
        "Мы предлагаем различные сезонные работы: весной - подготовка могилы после зимы, летом - регулярный уход и посадка цветов, осенью - сбор листьев и подготовка могилы к зиме, и зимой - уборка снега и размещение поминальных свечей. В каждом сезоне мы адаптируем наши услуги, чтобы могила была должным образом ухожена.",
        "Wir bieten verschiedene saisonale Arbeiten an: im Frühling - Grabvorbereitung nach dem Winter, im Sommer - regelmäßige Pflege und Blumenpflanzung, im Herbst - Laubsammlung und Grabvorbereitung für den Winter, und im Winter - Schneeräumung und Aufstellung von Gedenkkerzen. In jeder Jahreszeit passen wir unsere Dienstleistungen an, um sicherzustellen, dass die Grabstätte ordnungsgemäß gepflegt wird."
      ),
    },
    {
      question: translate(
        "Vai piedāvājat pieminekļu restaurāciju?",
        "Do you offer monument restoration?",
        "Предлагаете ли вы реставрацию памятников?",
        "Bieten Sie Denkmalrestaurierung an?"
      ),
      answer: translate(
        "Jā, mēs piedāvājam pieminekļu un kapu plākšņu restaurāciju. Mūsu pakalpojumos ietilpst pieminekļu tīrīšana ar speciāliem līdzekļiem, uzrakstu atjaunošana, virsmu atjaunošana un aizsargpārklājuma uzklāšana. Mēs varam arī novērst bojājumus, atjaunot pieminekļa stabilitāti un veikt citus nepieciešamos restaurācijas darbus.",
        "Yes, we offer monument and grave plate restoration. Our services include monument cleaning with special products, inscription restoration, surface renewal, and protective coating application. We can also repair damages, restore monument stability, and perform other necessary restoration work.",
        "Да, мы предлагаем реставрацию памятников и надгробных плит. Наши услуги включают чистку памятников специальными средствами, восстановление надписей, обновление поверхностей и нанесение защитного покрытия. Мы также можем устранить повреждения, восстановить стабильность памятника и выполнить другие необходимые реставрационные работы.",
        "Ja, wir bieten Denkmal- und Grabplattenrestaurierung an. Unsere Dienstleistungen umfassen Denkmalsreinigung mit Spezialprodukten, Inschriftenrestaurierung, Oberflächenerneuerung und Schutzanstrichauftrag. Wir können auch Schäden reparieren, die Stabilität des Denkmals wiederherstellen und andere notwendige Restaurierungsarbeiten durchführen."
      ),
    },
  ];

  // Pricing FAQs
  const pricingFAQs = [
    {
      question: translate(
        "Kā tiek aprēķinātas kapu kopšanas pakalpojumu cenas?",
        "How are grave care service prices calculated?",
        "Как рассчитываются цены на услуги по уходу за могилой?",
        "Wie werden die Preise für Grabpflegedienste berechnet?"
      ),
      answer: translate(
        "Kapu kopšanas pakalpojumu cenas ir atkarīgas no kapavietas izmēra un izvēlētā pakalpojuma apjoma. Mēs piedāvājam dažādus plānus: mazām kapavietām (līdz 7,5m²), vidējām (7,5-9m²), lielām (9-15m²) un ļoti lielām (15-30m²). Cenas attiecas uz pakalpojumu bez transporta izmaksām, kas tiek aprēķinātas papildus atkarībā no attāluma.",
        "Grave care service prices depend on the size of the grave site and the scope of services chosen. We offer different plans for small grave sites (up to 7.5m²), medium (7.5-9m²), large (9-15m²), and very large (15-30m²). Prices are for the service without transportation costs, which are calculated additionally depending on the distance.",
        "Цены на услуги по уходу за могилой зависят от размера могилы и объема выбранных услуг. Мы предлагаем различные планы для маленьких могил (до 7,5м²), средних (7,5-9м²), больших (9-15м²) и очень больших (15-30м²). Цены указаны за услугу без транспортных расходов, которые рассчитываются дополнительно в зависимости от расстояния.",
        "Die Preise für Grabpflegedienste hängen von der Größe der Grabstätte und dem Umfang der gewählten Dienstleistungen ab. Wir bieten verschiedene Pläne für kleine Grabstätten (bis zu 7,5m²), mittlere (7,5-9m²), große (9-15m²) und sehr große (15-30m²) an. Die Preise gelten für die Dienstleistung ohne Transportkosten, die je nach Entfernung zusätzlich berechnet werden."
      ),
    },
    {
      question: translate(
        "Kādas ir maksājumu iespējas?",
        "What are the payment options?",
        "Какие существуют варианты оплаты?",
        "Welche Zahlungsmöglichkeiten gibt es?"
      ),
      answer: translate(
        "Mēs piedāvājam dažādas maksājumu iespējas. Parasti nepieciešams veikt 50% priekšapmaksu pirms darbu uzsākšanas, un atlikušo summu pēc darbu pabeigšanas. Pieņemam bankas pārskaitījumus. Papildus varam vienoties par regulāriem maksājumiem abonementam vai izveidot individuālu maksājumu grafiku.",
        "We offer various payment options. Typically, a 50% prepayment is required before work begins, and the remaining amount after completion. We accept bank transfers. In addition, we can arrange regular subscription payments or create an individual payment schedule.",
        "Мы предлагаем различные варианты оплаты. Обычно требуется 50% предоплата перед началом работ и оставшаяся сумма после завершения. Мы принимаем банковские переводы. Кроме того, мы можем организовать регулярные платежи по подписке или создать индивидуальный график платежей.",
        "Wir bieten verschiedene Zahlungsmöglichkeiten an. Typischerweise ist eine 50% Vorauszahlung vor Arbeitsbeginn erforderlich und der Restbetrag nach Fertigstellung. Wir akzeptieren Banküberweisungen. Darüber hinaus können wir regelmäßige Abonnementzahlungen einrichten oder einen individuellen Zahlungsplan erstellen."
      ),
    },
  ];

  // Ordering FAQs
  const orderingFAQs = [
    {
      question: translate(
        "Kā es varu pasūtīt kapu kopšanas pakalpojumu?",
        "How can I order a grave care service?",
        "Как заказать услугу по уходу за могилой?",
        "Wie kann ich einen Grabpflegedienst bestellen?"
      ),
      answer: translate(
        "Jūs varat pasūtīt kapu kopšanas pakalpojumu, sazinoties ar mums pa tālruni, e-pastu vai izmantojot kontaktformu mūsu mājas lapā. Mums būs nepieciešama informācija par aizgājēju (vārds, uzvārds, miršanas datums), kapsētas nosaukums un, ja iespējams, precīza kapavietas atrašanās vieta vai fotogrāfija. Pēc tam mēs sagatavosim piedāvājumu un vienosimies par pakalpojuma detaļām.",
        "You can order a grave care service by contacting us by phone, email, or using the contact form on our website. We will need information about the deceased (name, surname, date of death), cemetery name, and if possible, exact grave location or a photograph. We will then prepare an offer and agree on service details.",
        "Вы можете заказать услугу по уходу за могилой, связавшись с нами по телефону, электронной почте или используя контактную форму на нашем сайте. Нам потребуется информация о умершем (имя, фамилия, дата смерти), название кладбища и, если возможно, точное местоположение могилы или фотография. Затем мы подготовим предложение и согласуем детали услуги.",
        "Sie können einen Grabpflegedienst bestellen, indem Sie uns telefonisch, per E-Mail oder über das Kontaktformular auf unserer Website kontaktieren. Wir benötigen Informationen über den Verstorbenen (Name, Nachname, Sterbedatum), den Namen des Friedhofs und wenn möglich, den genauen Grabstandort oder ein Foto. Wir erstellen dann ein Angebot und vereinbaren Servicedetails."
      ),
    },
    {
      question: translate(
        "Kas notiek, ja nevaru precīzi norādīt kapavietas atrašanās vietu?",
        "What happens if I cannot specify the exact location of the grave?",
        "Что происходит, если я не могу указать точное местоположение могилы?",
        "Was passiert, wenn ich den genauen Standort des Grabes nicht angeben kann?"
      ),
      answer: translate(
        "Ja jums nav precīzas informācijas par kapavietas atrašanās vietu, mēs piedāvājam kapavietas meklēšanas pakalpojumu. Šis pakalpojums ietver kapsētas apmeklējumu un meklēšanu, balstoties uz pieejamo informāciju (vārds, uzvārds, miršanas datums). Kad kapavieta ir atrasta, mēs nosūtīsim jums fotogrāfijas, lai apstiprinātu, ka tā ir pareizā vieta. Kapavietas meklēšanas pakalpojumam ir papildu maksa, kas atkarīga no meklēšanas sarežģītības un laika.",
        "If you do not have precise information about the grave location, we offer a grave search service. This service includes visiting the cemetery and searching based on the available information (name, surname, date of death). Once the grave is found, we will send you photographs to confirm it's the correct location. The grave search service has an additional fee, depending on the complexity and time required for the search.",
        "Если у вас нет точной информации о местонахождении могилы, мы предлагаем услугу поиска могилы. Эта услуга включает посещение кладбища и поиск на основе имеющейся информации (имя, фамилия, дата смерти). Как только могила будет найдена, мы отправим вам фотографии для подтверждения правильности места. Услуга поиска могилы оплачивается дополнительно, в зависимости от сложности и времени, необходимого для поиска.",
        "Wenn Sie keine genauen Informationen über den Grabstandort haben, bieten wir einen Grabsuchdienst an. Dieser Dienst umfasst den Besuch des Friedhofs und die Suche basierend auf den verfügbaren Informationen (Name, Nachname, Sterbedatum). Sobald das Grab gefunden ist, senden wir Ihnen Fotos zur Bestätigung, dass es sich um den richtigen Standort handelt. Der Grabsuchdienst hat eine zusätzliche Gebühr, die von der Komplexität und der für die Suche benötigten Zeit abhängt."
      ),
    },
  ];

  return {
    categories: [
      {
        id: "general",
        name: translate(
          "Vispārīgie jautājumi",
          "General Questions",
          "Общие вопросы",
          "Allgemeine Fragen"
        ),
        questions: generalFAQs,
      },
      {
        id: "services",
        name: translate(
          "Pakalpojumi",
          "Services",
          "Услуги",
          "Dienstleistungen"
        ),
        questions: serviceFAQs,
      },
      {
        id: "pricing",
        name: translate(
          "Cenas un maksājumi",
          "Pricing and Payments",
          "Цены и платежи",
          "Preise und Zahlungen"
        ),
        questions: pricingFAQs,
      },
      {
        id: "ordering",
        name: translate(
          "Pasūtīšana",
          "Ordering",
          "Оформление заказа",
          "Bestellung"
        ),
        questions: orderingFAQs,
      },
    ],
    translate,
  };
};

// Define component props interfaces
interface FAQAccordionProps {
  questions: FAQ[];
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

interface CategoryTabsProps {
  categories: FAQCategory[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

// Split into smaller components for better maintainability
const FAQAccordion = ({
  questions,
  activeTab,
  setActiveTab,
}: FAQAccordionProps) => {
  return (
    <div className="space-y-6">
      {questions.map((faq, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <button
            onClick={() => setActiveTab(activeTab === index ? -1 : index)}
            className="flex items-start justify-between w-full text-left"
            aria-expanded={activeTab === index}
            aria-controls={`faq-answer-${index}`}
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
                  aria-hidden="true"
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
                  aria-hidden="true"
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
            <div
              id={`faq-answer-${index}`}
              className="mt-4 text-gray-600 dark:text-gray-300"
            >
              {faq.answer}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Category tabs component
const CategoryTabs = ({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoryTabsProps) => {
  return (
    <div className="relative">
      <div
        className="overflow-x-auto scrollbar-hide mb-10"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex whitespace-nowrap pb-1 min-w-max md:min-w-0 md:flex-wrap md:justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-emerald-600 text-white shadow-md dark:bg-emerald-500"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
              aria-pressed={activeCategory === category.id}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Subtle scroll indicators (only visible on mobile) */}
      <div className="md:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-800 to-transparent pointer-events-none"></div>
      <div className="md:hidden absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-800 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default function FAQPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(-1);
  const [activeCategory, setActiveCategory] = useState<string>("general");

  // Using useMemo for expensive calculations to prevent recreation on every render
  const { categories, translate } = useMemo(
    () => createFAQs(language),
    [language]
  );

  // Get the current category questions using useMemo to avoid recalculation on every render
  const currentFAQs = useMemo(() => {
    return (
      categories.find((cat) => cat.id === activeCategory)?.questions ||
      categories[0].questions
    );
  }, [activeCategory, categories]);

  // Page title and description for SEO
  const pageTitle = translate(
    "Biežāk uzdotie jautājumi | Kapu kopšanas serviss",
    "Frequently Asked Questions | Grave Care Service",
    "Часто задаваемые вопросы | Услуги по уходу за могилами",
    "Häufig gestellte Fragen | Grabpflegedienst"
  );

  const pageDescription = translate(
    "Atbildes uz biežāk uzdotajiem jautājumiem par mūsu kapu kopšanas pakalpojumiem",
    "Answers to frequently asked questions about our grave care services",
    "Ответы на часто задаваемые вопросы о наших услугах по уходу за могилами",
    "Antworten auf häufig gestellte Fragen zu unseren Grabpflegediensten"
  );

  // Custom CSS to hide scrollbars
  const scrollbarHideStyles = `
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        {/* Add canonical URL based on current language */}
        <link
          rel="canonical"
          href={`https://yourdomain.com/${language === "lv" ? "" : language + "/"}faq`}
        />
        {/* Add alternate language links for SEO */}
        <link rel="alternate" hrefLang="lv" href="https://yourdomain.com/faq" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://yourdomain.com/en/faq"
        />
        <link
          rel="alternate"
          hrefLang="ru"
          href="https://yourdomain.com/ru/faq"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://yourdomain.com/de/faq"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://yourdomain.com/faq"
        />
      </Head>

      <div className="bg-gray-50 dark:bg-gray-900">
        {/* Add the custom scrollbar-hiding CSS */}
        <style dangerouslySetInnerHTML={{ __html: scrollbarHideStyles }} />

        {/* Hero Section */}
        <section className="py-16 bg-white dark:bg-gray-800 md:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
                {translate(
                  "Biežāk uzdotie jautājumi",
                  "Frequently Asked Questions",
                  "Часто задаваемые вопросы",
                  "Häufig gestellte Fragen"
                )}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {pageDescription}
              </p>
              <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
            </div>
          </div>
        </section>

        {/* FAQ Categories Section */}
        <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Category tabs component */}
              <CategoryTabs
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />

              {/* FAQ accordion component */}
              <FAQAccordion
                questions={currentFAQs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                  {translate(
                    "Apskatiet mūsu pakalpojumus",
                    "Check Out Our Services",
                    "Ознакомьтесь с нашими услугами",
                    "Entdecken Sie unsere Dienstleistungen"
                  )}
                </h2>
                <div className="mt-4 mx-auto w-16 h-[2px] bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link
                  href="/services"
                  className="group p-6 dark:bg-gray-850 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {translate(
                      "Mūsu pakalpojumi",
                      "Our Services",
                      "Наши услуги",
                      "Unsere Dienstleistungen"
                    )}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {translate(
                      "Uzziniet vairāk par visiem mūsu piedāvātajiem kapu kopšanas pakalpojumiem.",
                      "Learn more about all our grave care services.",
                      "Узнайте больше обо всех наших услугах по уходу за могилами.",
                      "Erfahren Sie mehr über alle unsere Grabpflegedienste."
                    )}
                  </p>
                </Link>

                <Link
                  href="/pricing"
                  className="group p-6 dark:bg-gray-850 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {translate("Cenas", "Pricing", "Цены", "Preise")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {translate(
                      "Apskatiet mūsu caurspīdīgo un godīgo cenu piedāvājumu.",
                      "View our transparent and fair pricing.",
                      "Ознакомьтесь с нашими прозрачными и справедливыми ценами.",
                      "Sehen Sie unsere transparente und faire Preisgestaltung."
                    )}
                  </p>
                </Link>

                <Link
                  href="/contact"
                  className="group p-6 dark:bg-gray-850 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {translate(
                      "Sazināties ar mums",
                      "Contact Us",
                      "Связаться с нами",
                      "Kontaktieren Sie uns"
                    )}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {translate(
                      "Iegūstiet personalizētu piedāvājumu vai uzdodiet jautājumus.",
                      "Get a personalized offer or ask questions.",
                      "Получите персонализированное предложение или задайте вопросы.",
                      "Erhalten Sie ein personalisiertes Angebot oder stellen Sie Fragen."
                    )}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                    {translate(
                      "Joprojām ir jautājumi?",
                      "Still Have Questions?",
                      "Остались вопросы?",
                      "Noch Fragen?"
                    )}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {translate(
                      "Ja neatradāt atbildi uz savu jautājumu, lūdzu, sazinieties ar mums. Mēs labprāt jums palīdzēsim.",
                      "If you didn't find the answer to your question, please contact us. We'll be happy to help you.",
                      "Если вы не нашли ответ на свой вопрос, пожалуйста, свяжитесь с нами. Мы будем рады вам помочь.",
                      "Wenn Sie die Antwort auf Ihre Frage nicht gefunden haben, kontaktieren Sie uns bitte. Wir helfen Ihnen gerne weiter."
                    )}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {translate(
                      "Sazināties ar mums",
                      "Contact Us",
                      "Связаться с нами",
                      "Kontaktieren Sie uns"
                    )}
                  </Link>

                  <a
                    href="tel:+37120000000"
                    className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {translate(
                      "Zvaniet mums",
                      "Call Us",
                      "Позвоните нам",
                      "Rufen Sie uns an"
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
