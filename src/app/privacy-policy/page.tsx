"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Multilingual content
  const translations = {
    lv: {
      title: "Privātuma politika",
      lastUpdated: "Pēdējie atjauninājumi:",
      sections: [
        {
          title: "1. Ievads",
          content:
            "SkyGarden apņemas aizsargāt Jūsu privātumu un nodrošināt jūsu personas datu drošību. Šī privātuma politika skaidro, kā mēs vācam, izmantojam un aizsargājam jūsu personisko informāciju.",
        },
        {
          title: "2. Informācijas vākšana",
          content:
            "Mēs vācam informāciju, ko jūs brīvprātīgi sniedzat, izmantojot mūsu kontaktformas, e-pastus vai tālruņa zvanus. Šī informācija var ietvert jūsu vārdu, kontaktinformāciju un detaļas par pakalpojumiem, kurus vēlaties saņemt. Mēs automātiski vācam arī noteiktus tehniskus datus, kad Jūs apmeklējat mūsu vietni, piemēram, IP adresi un pārlūkprogrammas informāciju.",
        },
        {
          title: "3. Informācijas izmantošana",
          content:
            "Jūsu sniegto informāciju mēs izmantojam, lai: sniegtu un uzlabotu mūsu pakalpojumus; atbildētu uz Jūsu jautājumiem un pieprasījumiem; nosūtītu Jums informāciju par mūsu pakalpojumiem; administrētu mūsu vietni un uzņēmējdarbību. Mēs nekad nepārdosim vai neiznomāsim jūsu personisko informāciju trešajām pusēm mārketinga nolūkos.",
        },
        {
          title: "4. Datu aizsardzība",
          content:
            "Mēs īstenojam atbilstošus tehniskos un organizatoriskos pasākumus, lai aizsargātu Jūsu personisko informāciju pret neatļautu piekļuvi, zudumu vai bojājumiem. Tomēr neviena elektroniskās datu pārraides metode nevar būt pilnīgi droša, un mēs nevaram garantēt absolūtu jūsu informācijas drošību.",
        },
        {
          title: "5. Informācijas izpaušana trešajām pusēm",
          content:
            "Mēs varam kopīgot Jūsu personisko informāciju ar pakalpojumu sniedzējiem, kas palīdz mūsu uzņēmējdarbībā (piemēram, maksājumu apstrādātājiem vai IT pakalpojumu sniedzējiem). Mēs nodrošinām, ka šādi pakalpojumu sniedzēji ievēro mūsu privātuma standartus. Mēs varam arī izpaust Jūsu informāciju, ja to pieprasa likums vai ja uzskatām, ka šāda izpaušana ir nepieciešama, lai aizsargātu mūsu tiesības vai novērstu iespējamas ļaunprātīgas darbības.",
        },
        {
          title: "6. Sīkdatnes",
          content:
            "Mūsu vietne var izmantot sīkdatnes, kas ir mazi teksta faili, ko Jūsu ierīce saglabā, kad apmeklējat mūsu vietni. Sīkdatnes palīdz mums nodrošināt labāku lietotāju pieredzi. Jūs varat konfigurēt savu pārlūkprogrammu, lai noraidītu sīkdatnes, taču tas var ietekmēt dažas mūsu vietnes funkcijas.",
        },
        {
          title: "7. Jūsu tiesības",
          content:
            "Saskaņā ar piemērojamiem datu aizsardzības likumiem, Jums var būt tiesības piekļūt savai personiskajai informācijai, labot to, dzēst vai ierobežot tās apstrādi. Jums var būt arī tiesības iebilst pret jūsu personiskās informācijas apstrādi un tiesības uz datu pārnesamību. Lai izmantotu šīs tiesības, lūdzu, sazinieties ar mums, izmantojot tālāk norādīto kontaktinformāciju.",
        },
        {
          title: "8. Izmaiņas privātuma politikā",
          content:
            "Mēs paturam tiesības periodiski atjaunināt šo privātuma politiku. Jebkuras izmaiņas tiks publicētas šajā lapā. Mēs iesakām regulāri pārskatīt šo privātuma politiku, lai būtu informēti par to, kā mēs aizsargājam jūsu informāciju.",
        },
        {
          title: "9. Kontaktinformācija",
          content:
            "Ja Jums ir jautājumi vai bažas par šo privātuma politiku vai par to, kā mēs apstrādājam Jūsu personisko informāciju, lūdzu, sazinieties ar mums, izmantojot mūsu kontaktlapā norādīto informāciju.",
        },
      ],
      copyright: `© ${currentYear} SkyGarden. Visas tiesības aizsargātas saskaņā ar Latvijas Republikas likumiem.`,
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated:",
      sections: [
        {
          title: "1. Introduction",
          content:
            "SkyGarden is committed to protecting your privacy and ensuring the security of your personal data. This privacy policy explains how we collect, use, and protect your personal information.",
        },
        {
          title: "2. Information Collection",
          content:
            "We collect information that you voluntarily provide through our contact forms, emails, or phone calls. This information may include your name, contact information, and details about services you wish to receive. We also automatically collect certain technical data when you visit our site, such as IP address and browser information.",
        },
        {
          title: "3. Use of Information",
          content:
            "We use the information you provide to: provide and improve our services; respond to your questions and requests; send you information about our services; administer our website and business. We will never sell or rent your personal information to third parties for marketing purposes.",
        },
        {
          title: "4. Data Protection",
          content:
            "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or damage. However, no method of electronic data transmission can be completely secure, and we cannot guarantee the absolute security of your information.",
        },
        {
          title: "5. Third-Party Disclosure",
          content:
            "We may share your personal information with service providers who assist in our business operations (such as payment processors or IT service providers). We ensure that such service providers adhere to our privacy standards. We may also disclose your information if required by law or if we believe such disclosure is necessary to protect our rights or prevent potential malicious activities.",
        },
        {
          title: "6. Cookies",
          content:
            "Our website may use cookies, which are small text files that your device stores when you visit our site. Cookies help us provide a better user experience. You can configure your browser to reject cookies, but this may affect some features of our site.",
        },
        {
          title: "7. Your Rights",
          content:
            "Under applicable data protection laws, you may have the right to access, correct, delete, or restrict the processing of your personal information. You may also have the right to object to the processing of your personal information and the right to data portability. To exercise these rights, please contact us using the contact information provided below.",
        },
        {
          title: "8. Changes to Privacy Policy",
          content:
            "We reserve the right to update this privacy policy periodically. Any changes will be posted on this page. We recommend that you regularly review this privacy policy to stay informed about how we are protecting your information.",
        },
        {
          title: "9. Contact Information",
          content:
            "If you have any questions or concerns about this privacy policy or how we process your personal information, please contact us using the information provided on our contact page.",
        },
      ],
      copyright: `© ${currentYear} SkyGarden. All rights reserved according to the laws of the Republic of Latvia.`,
    },
    ru: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление:",
      sections: [
        {
          title: "1. Введение",
          content:
            "SkyGarden обязуется защищать вашу конфиденциальность и обеспечивать безопасность ваших персональных данных. Эта политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу личную информацию.",
        },
        {
          title: "2. Сбор информации",
          content:
            "Мы собираем информацию, которую вы добровольно предоставляете через наши контактные формы, электронные письма или телефонные звонки. Эта информация может включать ваше имя, контактную информацию и детали об услугах, которые вы хотите получить. Мы также автоматически собираем определенные технические данные, когда вы посещаете наш сайт, такие как IP-адрес и информацию о браузере.",
        },
        {
          title: "3. Использование информации",
          content:
            "Мы используем предоставленную вами информацию, чтобы: предоставлять и улучшать наши услуги; отвечать на ваши вопросы и запросы; отправлять вам информацию о наших услугах; администрировать наш веб-сайт и бизнес. Мы никогда не будем продавать или сдавать в аренду вашу личную информацию третьим лицам в маркетинговых целях.",
        },
        {
          title: "4. Защита данных",
          content:
            "Мы внедряем соответствующие технические и организационные меры для защиты вашей личной информации от несанкционированного доступа, потери или повреждения. Однако ни один метод электронной передачи данных не может быть полностью безопасным, и мы не можем гарантировать абсолютную безопасность вашей информации.",
        },
        {
          title: "5. Раскрытие информации третьим лицам",
          content:
            "Мы можем делиться вашей личной информацией с поставщиками услуг, которые помогают в наших бизнес-операциях (например, обработчиками платежей или поставщиками ИТ-услуг). Мы обеспечиваем, чтобы такие поставщики услуг придерживались наших стандартов конфиденциальности. Мы также можем раскрывать вашу информацию, если это требуется по закону или если мы считаем, что такое раскрытие необходимо для защиты наших прав или предотвращения потенциальных злонамеренных действий.",
        },
        {
          title: "6. Файлы cookie",
          content:
            "Наш веб-сайт может использовать файлы cookie, которые представляют собой небольшие текстовые файлы, сохраняемые вашим устройством при посещении нашего сайта. Файлы cookie помогают нам обеспечить лучший пользовательский опыт. Вы можете настроить свой браузер на отклонение файлов cookie, но это может повлиять на некоторые функции нашего сайта.",
        },
        {
          title: "7. Ваши права",
          content:
            "В соответствии с применимыми законами о защите данных, вы можете иметь право на доступ, исправление, удаление или ограничение обработки вашей личной информации. Вы также можете иметь право возражать против обработки вашей личной информации и право на перенос данных. Для реализации этих прав, пожалуйста, свяжитесь с нами, используя контактную информацию, указанную ниже.",
        },
        {
          title: "8. Изменения в политике конфиденциальности",
          content:
            "Мы оставляем за собой право периодически обновлять эту политику конфиденциальности. Любые изменения будут опубликованы на этой странице. Мы рекомендуем регулярно просматривать эту политику конфиденциальности, чтобы быть в курсе того, как мы защищаем вашу информацию.",
        },
        {
          title: "9. Контактная информация",
          content:
            "Если у вас есть какие-либо вопросы или опасения относительно этой политики конфиденциальности или того, как мы обрабатываем вашу личную информацию, пожалуйста, свяжитесь с нами, используя информацию, указанную на нашей контактной странице.",
        },
      ],
      copyright: `© ${currentYear} SkyGarden. Все права защищены в соответствии с законами Латвийской Республики.`,
    },
    de: {
      title: "Datenschutzrichtlinie",
      lastUpdated: "Letzte Aktualisierung:",
      sections: [
        {
          title: "1. Einführung",
          content:
            "SkyGarden verpflichtet sich, Ihre Privatsphäre zu schützen und die Sicherheit Ihrer persönlichen Daten zu gewährleisten. Diese Datenschutzrichtlinie erläutert, wie wir Ihre persönlichen Informationen sammeln, verwenden und schützen.",
        },
        {
          title: "2. Sammlung von Informationen",
          content:
            "Wir sammeln Informationen, die Sie freiwillig über unsere Kontaktformulare, E-Mails oder Telefonanrufe bereitstellen. Diese Informationen können Ihren Namen, Kontaktdaten und Details zu den gewünschten Dienstleistungen umfassen. Wir sammeln auch automatisch bestimmte technische Daten, wenn Sie unsere Website besuchen, wie IP-Adresse und Browser-Informationen.",
        },
        {
          title: "3. Verwendung von Informationen",
          content:
            "Wir verwenden die von Ihnen bereitgestellten Informationen, um: unsere Dienstleistungen anzubieten und zu verbessern; auf Ihre Fragen und Anfragen zu antworten; Ihnen Informationen über unsere Dienstleistungen zu senden; unsere Website und unser Geschäft zu verwalten. Wir werden Ihre persönlichen Daten niemals zu Marketingzwecken an Dritte verkaufen oder vermieten.",
        },
        {
          title: "4. Datenschutz",
          content:
            "Wir implementieren angemessene technische und organisatorische Maßnahmen, um Ihre persönlichen Informationen vor unbefugtem Zugriff, Verlust oder Beschädigung zu schützen. Jedoch kann keine Methode der elektronischen Datenübertragung vollständig sicher sein, und wir können die absolute Sicherheit Ihrer Informationen nicht garantieren.",
        },
        {
          title: "5. Offenlegung an Dritte",
          content:
            "Wir können Ihre persönlichen Informationen mit Dienstleistern teilen, die bei unseren Geschäftsabläufen helfen (wie Zahlungsabwickler oder IT-Dienstleister). Wir stellen sicher, dass diese Dienstleister unsere Datenschutzstandards einhalten. Wir können Ihre Informationen auch offenlegen, wenn dies gesetzlich vorgeschrieben ist oder wenn wir der Meinung sind, dass eine solche Offenlegung notwendig ist, um unsere Rechte zu schützen oder potenzielle bösartige Aktivitäten zu verhindern.",
        },
        {
          title: "6. Cookies",
          content:
            "Unsere Website kann Cookies verwenden, bei denen es sich um kleine Textdateien handelt, die Ihr Gerät speichert, wenn Sie unsere Website besuchen. Cookies helfen uns, eine bessere Benutzererfahrung zu bieten. Sie können Ihren Browser so konfigurieren, dass er Cookies ablehnt, aber dies kann einige Funktionen unserer Website beeinträchtigen.",
        },
        {
          title: "7. Ihre Rechte",
          content:
            "Gemäß den geltenden Datenschutzgesetzen haben Sie möglicherweise das Recht auf Zugang, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer persönlichen Daten. Sie haben möglicherweise auch das Recht, der Verarbeitung Ihrer persönlichen Daten zu widersprechen und das Recht auf Datenübertragbarkeit. Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter den unten angegebenen Kontaktinformationen.",
        },
        {
          title: "8. Änderungen der Datenschutzrichtlinie",
          content:
            "Wir behalten uns das Recht vor, diese Datenschutzrichtlinie regelmäßig zu aktualisieren. Alle Änderungen werden auf dieser Seite veröffentlicht. Wir empfehlen Ihnen, diese Datenschutzrichtlinie regelmäßig zu überprüfen, um darüber informiert zu bleiben, wie wir Ihre Informationen schützen.",
        },
        {
          title: "9. Kontaktinformationen",
          content:
            "Wenn Sie Fragen oder Bedenken zu dieser Datenschutzrichtlinie oder zur Verarbeitung Ihrer persönlichen Daten haben, kontaktieren Sie uns bitte über die Informationen auf unserer Kontaktseite.",
        },
      ],
      copyright: `© ${currentYear} SkyGarden. Alle Rechte gemäß den Gesetzen der Republik Lettland vorbehalten.`,
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

          {/* Privacy Policy Content */}
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
