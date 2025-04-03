"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function TermsOfService() {
  const { language } = useLanguage();

  // Multilingual content
  const translations = {
    lv: {
      title: "Lietošanas noteikumi",
      lastUpdated: "Pēdējie atjauninājumi:",
      sections: [
        {
          title: "1. Vispārīgie noteikumi",
          content:
            "Šie lietošanas noteikumi attiecas uz visu SkyGarden tīmekļa vietnes saturu un sniegtajiem pakalpojumiem. Izmantojot mūsu vietni, jūs piekrītat šiem noteikumiem. Lūdzam rūpīgi iepazīties ar tiem.",
        },
        {
          title: "2. Intelektuālais īpašums",
          content:
            "Viss SkyGarden tīmekļa vietnes saturs, ieskaitot, bet neaprobežojoties ar tekstiem, attēliem, logotipiem, zīmoliem, dizainu un programmatūru, ir aizsargāts ar Latvijas Republikas autortiesību un intelektuālā īpašuma likumiem. Nekāda satura daļa nedrīkst tikt kopēta, reproducēta, izplatīta vai izmantota bez iepriekšējas rakstiskas atļaujas no SkyGarden.",
        },
        {
          title: "3. Informācijas precizitāte",
          content:
            "SkyGarden rūpējas par vietnē publicētās informācijas kvalitāti un aktualitāti. Tomēr informācija par pakalpojumiem un cenām var mainīties, un dažkārt tehnisku vai cilvēcisku iemeslu dēļ vietnē var parādīties neprecizitātes. Mūsu vietnē pieejamā informācija ir paredzēta vispārīgai iepazīšanai ar pakalpojumiem. Konkrēti pakalpojumu nosacījumi un cenas tiek precizētas individuālās sarunās ar klientiem.",
        },
        {
          title: "4. Pakalpojuma noteikumi",
          content:
            "SkyGarden piedāvā kapavietu kopšanas pakalpojumus saskaņā ar mājas lapā norādīto informāciju. Konkrēti pakalpojumu nosacījumi tiek saskaņoti individuāli ar katru klientu. Mēs paturam tiesības atteikt pakalpojumu sniegšanu bez paskaidrojumiem.",
        },
        {
          title: "5. Lietotāju pienākumi",
          content:
            "Lietotāji apņemas sniegt precīzu un patiesu informāciju, izmantojot mūsu pakalpojumus. Jebkāda nepatiesu ziņu sniegšana vai krāpnieciska rīcība ir aizliegta un var būt par pamatu sadarbības pārtraukšanai bez jebkādas kompensācijas.",
        },
        {
          title: "6. Piemērojamie likumi",
          content:
            "Šie noteikumi ir sastādīti un interpretējami saskaņā ar Latvijas Republikas likumiem. Jebkuri strīdi, kas izriet no šiem noteikumiem, tiek risināti Latvijas Republikas tiesās.",
        },
        {
          title: "7. Izmaiņas noteikumos",
          content:
            "SkyGarden patur tiesības jebkurā laikā bez iepriekšēja brīdinājuma veikt izmaiņas šajos noteikumos. Izmaiņas stājas spēkā uzreiz pēc to publicēšanas. Lietotāju pienākums ir regulāri pārbaudīt šos noteikumus.",
        },
        {
          title: "8. Maksājumi un atmaksas politika",
          content:
            "Informācija par pakalpojumu cenām ir pieejama mājas lapā vai pēc pieprasījuma. Maksājumi tiek veikti saskaņā ar individuāli saskaņotiem nosacījumiem. Atmaksas tiek izskatītas individuāli, ņemot vērā pakalpojuma statusu un citus apstākļus. SkyGarden patur tiesības noteikt darījumu un atmaksas nosacījumus.",
        },
        {
          title: "9. Nepārvarama vara",
          content:
            "SkyGarden neuzņemas atbildību par saistību neizpildi vai kavējumiem, kas radušies nepārvaramas varas apstākļu dēļ, ieskaitot, bet neaprobežojoties ar dabas katastrofām, epidēmijām, valdības rīkojumiem, karadarbību, terorismu, streikiem vai citiem apstākļiem, kas ir ārpus mūsu kontroles.",
        },
      ],
      copyright:
        "Visas tiesības aizsargātas saskaņā ar Latvijas Republikas likumiem.",
    },
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated:",
      sections: [
        {
          title: "1. General Terms",
          content:
            "These terms of service apply to all content and services provided by SkyGarden website. By using our site, you agree to these terms. Please read them carefully.",
        },
        {
          title: "2. Intellectual Property",
          content:
            "All content on the SkyGarden website, including but not limited to text, images, logos, brands, design, and software, is protected by copyright and intellectual property laws of the Republic of Latvia. No part of the content may be copied, reproduced, distributed, or used without prior written permission from SkyGarden.",
        },
        {
          title: "3. Information Accuracy",
          content:
            "SkyGarden cares about the quality and relevance of information published on the website. However, information about services and prices may change, and occasionally inaccuracies may appear on the site due to technical or human factors. The information available on our website is intended for general familiarization with services. Specific service conditions and prices are clarified in individual discussions with clients.",
        },
        {
          title: "4. Service Terms",
          content:
            "SkyGarden offers grave maintenance services according to the information provided on the website. Specific service conditions are agreed individually with each client. We reserve the right to refuse service without explanation.",
        },
        {
          title: "5. User Obligations",
          content:
            "Users agree to provide accurate and truthful information when using our services. Any provision of false information or fraudulent behavior is prohibited and may result in termination of cooperation without any compensation.",
        },
        {
          title: "6. Applicable Law",
          content:
            "These terms are drawn up and interpreted in accordance with the laws of the Republic of Latvia. Any disputes arising from these terms will be resolved in the courts of the Republic of Latvia.",
        },
        {
          title: "7. Changes to Terms",
          content:
            "SkyGarden reserves the right to make changes to these terms at any time without prior notice. Changes take effect immediately upon publication. It is the user's responsibility to regularly check these terms.",
        },
        {
          title: "8. Payments and Refund Policy",
          content:
            "Information about service prices is available on the website or upon request. Payments are made according to individually agreed terms. Refunds are considered on a case-by-case basis, taking into account the status of the service and other circumstances. SkyGarden reserves the right to determine transaction and refund conditions.",
        },
        {
          title: "9. Force Majeure",
          content:
            "SkyGarden is not responsible for failure to perform or delay in performance due to force majeure circumstances, including but not limited to natural disasters, epidemics, government orders, warfare, terrorism, strikes or other circumstances beyond our control.",
        },
      ],
      copyright:
        "All rights reserved according to the laws of the Republic of Latvia.",
    },
    ru: {
      title: "Условия использования",
      lastUpdated: "Последнее обновление:",
      sections: [
        {
          title: "1. Общие положения",
          content:
            "Настоящие условия использования распространяются на все содержание и услуги, предоставляемые веб-сайтом SkyGarden. Используя наш сайт, вы соглашаетесь с этими условиями. Пожалуйста, внимательно ознакомьтесь с ними.",
        },
        {
          title: "2. Интеллектуальная собственность",
          content:
            "Весь контент на веб-сайте SkyGarden, включая, но не ограничиваясь текстами, изображениями, логотипами, брендами, дизайном и программным обеспечением, защищен законами об авторском праве и интеллектуальной собственности Латвийской Республики. Никакая часть контента не может быть скопирована, воспроизведена, распространена или использована без предварительного письменного разрешения SkyGarden.",
        },
        {
          title: "3. Точность информации",
          content:
            "SkyGarden заботится о качестве и актуальности информации, публикуемой на сайте. Однако информация об услугах и ценах может меняться, и иногда на сайте могут появляться неточности по техническим или человеческим причинам. Информация, доступная на нашем сайте, предназначена для общего ознакомления с услугами. Конкретные условия обслуживания и цены уточняются в индивидуальных беседах с клиентами.",
        },
        {
          title: "4. Условия обслуживания",
          content:
            "SkyGarden предлагает услуги по уходу за могилами в соответствии с информацией, представленной на сайте. Конкретные условия обслуживания согласовываются индивидуально с каждым клиентом. Мы оставляем за собой право отказать в обслуживании без объяснения причин.",
        },
        {
          title: "5. Обязанности пользователей",
          content:
            "Пользователи обязуются предоставлять точную и правдивую информацию при использовании наших услуг. Любое предоставление ложной информации или мошенническое поведение запрещено и может привести к прекращению сотрудничества без какой-либо компенсации.",
        },
        {
          title: "6. Применимое право",
          content:
            "Настоящие условия составлены и толкуются в соответствии с законами Латвийской Республики. Любые споры, возникающие из этих условий, будут разрешаться в судах Латвийской Республики.",
        },
        {
          title: "7. Изменения в условиях",
          content:
            "SkyGarden оставляет за собой право вносить изменения в настоящие условия в любое время без предварительного уведомления. Изменения вступают в силу сразу после их публикации. Пользователь обязан регулярно проверять эти условия.",
        },
        {
          title: "8. Платежи и политика возврата",
          content:
            "Информация о ценах на услуги доступна на сайте или по запросу. Платежи осуществляются согласно индивидуально согласованным условиям. Возвраты рассматриваются в индивидуальном порядке с учетом статуса услуги и других обстоятельств. SkyGarden оставляет за собой право определять условия транзакций и возврата.",
        },
        {
          title: "9. Форс-мажор",
          content:
            "SkyGarden не несет ответственности за неисполнение или задержку исполнения обязательств в связи с обстоятельствами непреодолимой силы, включая, но не ограничиваясь, стихийные бедствия, эпидемии, правительственные распоряжения, военные действия, терроризм, забастовки или другие обстоятельства, находящиеся вне нашего контроля.",
        },
      ],
      copyright:
        "Все права защищены в соответствии с законами Латвийской Республики.",
    },
    de: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Letzte Aktualisierung:",
      sections: [
        {
          title: "1. Allgemeine Bedingungen",
          content:
            "Diese Nutzungsbedingungen gelten für alle Inhalte und Dienstleistungen der SkyGarden-Website. Durch die Nutzung unserer Website stimmen Sie diesen Bedingungen zu. Bitte lesen Sie sie sorgfältig durch.",
        },
        {
          title: "2. Geistiges Eigentum",
          content:
            "Alle Inhalte der SkyGarden-Website, einschließlich, aber nicht beschränkt auf Texte, Bilder, Logos, Marken, Design und Software, sind durch Urheberrechts- und Geistige Eigentumsgesetze der Republik Lettland geschützt. Kein Teil des Inhalts darf ohne vorherige schriftliche Genehmigung von SkyGarden kopiert, reproduziert, verbreitet oder verwendet werden.",
        },
        {
          title: "3. Informationsgenauigkeit",
          content:
            "SkyGarden legt Wert auf die Qualität und Aktualität der auf der Website veröffentlichten Informationen. Allerdings können sich Informationen zu Dienstleistungen und Preisen ändern, und gelegentlich können aus technischen oder menschlichen Gründen Ungenauigkeiten auf der Website erscheinen. Die auf unserer Website verfügbaren Informationen dienen der allgemeinen Orientierung über unsere Dienstleistungen. Spezifische Servicebedingungen und Preise werden in individuellen Gesprächen mit Kunden geklärt.",
        },
        {
          title: "4. Servicebedingungen",
          content:
            "SkyGarden bietet Grabpflegedienste gemäß den auf der Website bereitgestellten Informationen an. Spezifische Servicebedingungen werden individuell mit jedem Kunden vereinbart. Wir behalten uns das Recht vor, Dienstleistungen ohne Erklärung zu verweigern.",
        },
        {
          title: "5. Benutzerpflichten",
          content:
            "Benutzer verpflichten sich, bei der Nutzung unserer Dienste genaue und wahrheitsgemäße Informationen zu liefern. Jegliche Angabe falscher Informationen oder betrügerisches Verhalten ist untersagt und kann zur Beendigung der Zusammenarbeit ohne jegliche Entschädigung führen.",
        },
        {
          title: "6. Anwendbares Recht",
          content:
            "Diese Bedingungen werden gemäß den Gesetzen der Republik Lettland erstellt und ausgelegt. Alle Streitigkeiten, die aus diesen Bedingungen entstehen, werden vor den Gerichten der Republik Lettland beigelegt.",
        },
        {
          title: "7. Änderungen der Bedingungen",
          content:
            "SkyGarden behält sich das Recht vor, diese Bedingungen jederzeit ohne vorherige Ankündigung zu ändern. Änderungen treten unmittelbar nach ihrer Veröffentlichung in Kraft. Es liegt in der Verantwortung des Benutzers, diese Bedingungen regelmäßig zu überprüfen.",
        },
        {
          title: "8. Zahlungen und Rückerstattungspolitik",
          content:
            "Informationen zu Servicepreisen sind auf der Website oder auf Anfrage erhältlich. Zahlungen erfolgen gemäß individuell vereinbarten Bedingungen. Rückerstattungen werden im Einzelfall unter Berücksichtigung des Status der Dienstleistung und anderer Umstände geprüft. SkyGarden behält sich das Recht vor, Transaktions- und Rückerstattungsbedingungen festzulegen.",
        },
        {
          title: "9. Höhere Gewalt",
          content:
            "SkyGarden haftet nicht für Nichterfüllung oder Verzögerung bei der Erfüllung aufgrund von Umständen höherer Gewalt, einschließlich, aber nicht beschränkt auf Naturkatastrophen, Epidemien, behördliche Anordnungen, Kriegshandlungen, Terrorismus, Streiks oder andere Umstände außerhalb unserer Kontrolle.",
        },
      ],
      copyright:
        "Alle Rechte gemäß den Gesetzen der Republik Lettland vorbehalten.",
    },
  };

  const t = translations[language as keyof typeof translations];
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}.${(currentDate.getMonth() + 1).toString().padStart(2, "0")}.${currentDate.getFullYear()}`;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 relative overflow-hidden min-h-screen">
      {/* Custom background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#555 0.5px, transparent 0.5px)",
            backgroundSize: "28px 28px",
          }}
        ></div>
      </div>

      {/* Elegant top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70"></div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white">
              {t.title}
            </h1>
            <div className="mt-6 mx-auto w-32 h-[2px] bg-gradient-to-r from-emerald-300 via-emerald-600 to-emerald-300 dark:from-emerald-700 dark:via-emerald-500 dark:to-emerald-700"></div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              {t.lastUpdated} {formattedDate}
            </p>
          </div>

          {/* Terms of Service Content */}
          <div className="space-y-10 text-gray-700 dark:text-gray-300">
            {t.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <p className="leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Elegant bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70"></div>
    </div>
  );
}
