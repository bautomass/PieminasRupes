"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { language } = useLanguage();

  // Page content based on language
  const content = {
    lv: {
      title: "Par mums",
      subtitle: "Mēs esam SkyGarden - profesionālā kapu kopšanas komanda",
      missionTitle: "Mūsu misija",
      missionText:
        "Mūsu misija ir nodrošināt augstākās kvalitātes kapu kopšanas pakalpojumus, saglabājot jūsu tuvinieku piemiņas vietas cieņpilnā stāvoklī. Mēs saprotam, cik svarīga ir tuvinieku piemiņas godināšana, un mūsu mērķis ir sniegt jums mierinājumu un atbalstu šajā procesā.",
      historyTitle: "Mūsu vēsture",
      historyText:
        "SkyGarden aizsākās 2019. gadā kā neliela ģimenes uzņēmuma iniciatīva, kad dibinātāji saprata, ka daudziem cilvēkiem, kuri dzīvo tālu no savu tuvinieku apbedījuma vietām, ir nepieciešams uzticams pakalpojums, kas par tām rūpētos. Gadu gaitā mēs esam paplašinājuši savu pakalpojumu klāstu un ieguvuši pieredzi, kas ļauj mums nodrošināt visaptverošu un profesionālu kapu kopšanu.",
      valuesTitle: "Mūsu vērtības",
      values: [
        {
          title: "Cieņa",
          description:
            "Mēs strādājam ar dziļu cieņu pret jūsu aizgājušajiem tuviniekiem un viņu piemiņas vietām.",
        },
        {
          title: "Kvalitāte",
          description:
            "Mūsu darba pamatā ir augsti kvalitātes standarti un detalizēta pieeja.",
        },
        {
          title: "Uzticamība",
          description:
            "Jūs varat paļauties, ka pakalpojums tiks veikts rūpīgi un savlaicīgi.",
        },
        {
          title: "Transparence",
          description:
            "Mūsu darbā ir svarīga atklāta komunikācija un regulāras atskaites.",
        },
      ],
    },
    en: {
      title: "About Us",
      subtitle: "We are SkyGarden - a professional grave maintenance team",
      missionTitle: "Our Mission",
      missionText:
        "Our mission is to provide the highest quality grave care services, maintaining your loved ones' memorial sites in a dignified condition. We understand how important it is to honor the memory of loved ones, and our goal is to provide you with comfort and support in this process.",
      historyTitle: "Our History",
      historyText:
        "SkyGarden started in 2019 as a small family business initiative, when the founders realized that many people who live far from their loved ones' burial sites need a reliable service to care for them. Over the years, we have expanded our range of services and gained experience that allows us to provide comprehensive and professional grave care.",
      valuesTitle: "Our Values",
      values: [
        {
          title: "Respect",
          description:
            "We work with deep respect for your departed loved ones and their memorial sites.",
        },
        {
          title: "Quality",
          description:
            "Our work is based on high quality standards and a detailed approach.",
        },
        {
          title: "Reliability",
          description:
            "You can rely on our service to be performed carefully and in a timely manner.",
        },
        {
          title: "Transparency",
          description:
            "Open communication and regular reports are important in our work.",
        },
      ],
    },
    ru: {
      title: "О нас",
      subtitle: "Мы SkyGarden - профессиональная команда по уходу за могилами",
      missionTitle: "Наша миссия",
      missionText:
        "Наша миссия - предоставлять услуги по уходу за могилами высочайшего качества, поддерживая места памяти ваших близких в достойном состоянии. Мы понимаем, насколько важно чтить память близких, и наша цель - обеспечить вам утешение и поддержку в этом процессе.",
      historyTitle: "Наша история",
      historyText:
        "SkyGarden начался в 2019 году как инициатива небольшого семейного бизнеса, когда основатели поняли, что многим людям, живущим далеко от мест захоронения своих близких, нужна надежная служба, которая бы о них заботилась. За эти годы мы расширили спектр наших услуг и приобрели опыт, который позволяет нам обеспечивать комплексный и профессиональный уход за могилами.",
      valuesTitle: "Наши ценности",
      values: [
        {
          title: "Уважение",
          description:
            "Мы работаем с глубоким уважением к вашим ушедшим близким и местам их памяти.",
        },
        {
          title: "Качество",
          description:
            "Наша работа основана на высоких стандартах качества и детальном подходе.",
        },
        {
          title: "Надежность",
          description:
            "Вы можете положиться на то, что наши услуги будут выполнены тщательно и своевременно.",
        },
        {
          title: "Прозрачность",
          description:
            "Открытое общение и регулярные отчеты важны в нашей работе.",
        },
      ],
    },
    de: {
      title: "Über uns",
      subtitle: "Wir sind SkyGarden - ein professionelles Team für Grabpflege",
      missionTitle: "Unsere Mission",
      missionText:
        "Unsere Mission ist es, Grabpflegedienste von höchster Qualität anzubieten und die Gedenkstätten Ihrer Lieben in einem würdigen Zustand zu erhalten. Wir verstehen, wie wichtig es ist, das Andenken an Ihre Lieben zu ehren, und unser Ziel ist es, Ihnen Trost und Unterstützung in diesem Prozess zu bieten.",
      historyTitle: "Unsere Geschichte",
      historyText:
        "SkyGarden begann 2019 als Initiative eines kleinen Familienunternehmens, als die Gründer erkannten, dass viele Menschen, die weit entfernt von den Grabstätten ihrer Lieben leben, einen zuverlässigen Service benötigen, der sich um sie kümmert. Im Laufe der Jahre haben wir unser Dienstleistungsangebot erweitert und Erfahrungen gesammelt, die es uns ermöglichen, umfassende und professionelle Grabpflege anzubieten.",
      valuesTitle: "Unsere Werte",
      values: [
        {
          title: "Respekt",
          description:
            "Wir arbeiten mit tiefem Respekt für Ihre verstorbenen Angehörigen und ihre Gedenkstätten.",
        },
        {
          title: "Qualität",
          description:
            "Unsere Arbeit basiert auf hohen Qualitätsstandards und einem detaillierten Ansatz.",
        },
        {
          title: "Zuverlässigkeit",
          description:
            "Sie können sich darauf verlassen, dass unser Service sorgfältig und zeitnah durchgeführt wird.",
        },
        {
          title: "Transparenz",
          description:
            "Offene Kommunikation und regelmäßige Berichte sind in unserer Arbeit wichtig.",
        },
      ],
    },
  };

  // Select content based on current language
  const t = content[language as keyof typeof content];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <Section bgColor="white" spacing="large">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t.title}
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.subtitle}
          </motion.p>
        </div>
      </Section>

      {/* Mission and Story Section */}
      <Section bgColor="light" spacing="large">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                {t.missionTitle}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {t.missionText}
              </p>

              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                {t.historyTitle}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.historyText}
              </p>
            </motion.div>
          </div>

          <motion.div
            className="relative rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/about-us.jpg"
              alt="SkyGarden Team"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section bgColor="white" spacing="large">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {t.valuesTitle}
          </h2>
          <div className="w-20 h-1 mx-auto bg-emerald-500 mb-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-100 dark:border-emerald-800/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="light" spacing="large">
        <CTABanner variant="primary" buttonLink="/contact" />
      </Section>
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import { useLanguage } from "@/context/LanguageContext";
// import Section from "@/components/ui/Section";
// import Stats from "@/components/home/Stats";
// import Testimonials from "@/components/home/Testimonials";
// import CTABanner from "@/components/CTABanner";
// import { motion } from "framer-motion";

// export default function AboutPage() {
//   const { language } = useLanguage();

//   // Page content based on language
//   const content = {
//     lv: {
//       title: "Par mums",
//       subtitle: "Mēs esam SkyGarden - profesionālā kapu kopšanas komanda",
//       missionTitle: "Mūsu misija",
//       missionText:
//         "Mūsu misija ir nodrošināt augstākās kvalitātes kapu kopšanas pakalpojumus, saglabājot jūsu tuvinieku piemiņas vietas cieņpilnā stāvoklī. Mēs saprotam, cik svarīga ir tuvinieku piemiņas godināšana, un mūsu mērķis ir sniegt jums mierinājumu un atbalstu šajā procesā.",
//       historyTitle: "Mūsu vēsture",
//       historyText:
//         "SkyGarden aizsākās 2019. gadā kā neliela ģimenes uzņēmuma iniciatīva, kad dibinātāji saprata, ka daudziem cilvēkiem, kuri dzīvo tālu no savu tuvinieku apbedījuma vietām, ir nepieciešams uzticams pakalpojums, kas par tām rūpētos. Gadu gaitā mēs esam paplašinājuši savu pakalpojumu klāstu un ieguvuši pieredzi, kas ļauj mums nodrošināt visaptverošu un profesionālu kapu kopšanu.",
//       valuesTitle: "Mūsu vērtības",
//       values: [
//         {
//           title: "Cieņa",
//           description:
//             "Mēs strādājam ar dziļu cieņu pret jūsu aizgājušajiem tuviniekiem un viņu piemiņas vietām.",
//         },
//         {
//           title: "Kvalitāte",
//           description:
//             "Mūsu darba pamatā ir augsti kvalitātes standarti un detalizēta pieeja.",
//         },
//         {
//           title: "Uzticamība",
//           description:
//             "Jūs varat paļauties, ka pakalpojums tiks veikts rūpīgi un savlaicīgi.",
//         },
//         {
//           title: "Transparence",
//           description:
//             "Mūsu darbā ir svarīga atklāta komunikācija un regulāras atskaites.",
//         },
//       ],
//       teamTitle: "Mūsu komanda",
//       teamText:
//         "Mūsu komandā strādā pieredzējuši speciālisti, kuri ir apņēmušies nodrošināt augstākās kvalitātes pakalpojumus. Katrs komandas loceklis ir apmācīts un kvalificēts savā jomā, ar izpratni par darba specifiku un nozīmīgumu.",
//       teamMembers: [
//         {
//           name: "Kārlis Bērziņš",
//           role: "Dibinātājs un vadītājs",
//           description:
//             "Kārlis ir uzņēmuma pamatlicējs ar vairāk nekā 10 gadu pieredzi dārzkopībā un ainavu arhitektūrā.",
//         },
//         {
//           name: "Anna Kalniņa",
//           role: "Klientu attiecību vadītāja",
//           description:
//             "Anna rūpējas par to, lai mūsu klienti saņemtu izcilu servisu un personalizētu pieeju.",
//         },
//         {
//           name: "Mārtiņš Zariņš",
//           role: "Darbu vadītājs",
//           description:
//             "Mārtiņš vada mūsu lauka darbus un nodrošina, ka visi pakalpojumi tiek veikti augstākajā kvalitātē.",
//         },
//       ],
//     },
//     en: {
//       title: "About Us",
//       subtitle: "We are SkyGarden - a professional grave maintenance team",
//       missionTitle: "Our Mission",
//       missionText:
//         "Our mission is to provide the highest quality grave care services, maintaining your loved ones' memorial sites in a dignified condition. We understand how important it is to honor the memory of loved ones, and our goal is to provide you with comfort and support in this process.",
//       historyTitle: "Our History",
//       historyText:
//         "SkyGarden started in 2019 as a small family business initiative, when the founders realized that many people who live far from their loved ones' burial sites need a reliable service to care for them. Over the years, we have expanded our range of services and gained experience that allows us to provide comprehensive and professional grave care.",
//       valuesTitle: "Our Values",
//       values: [
//         {
//           title: "Respect",
//           description:
//             "We work with deep respect for your departed loved ones and their memorial sites.",
//         },
//         {
//           title: "Quality",
//           description:
//             "Our work is based on high quality standards and a detailed approach.",
//         },
//         {
//           title: "Reliability",
//           description:
//             "You can rely on our service to be performed carefully and in a timely manner.",
//         },
//         {
//           title: "Transparency",
//           description:
//             "Open communication and regular reports are important in our work.",
//         },
//       ],
//       teamTitle: "Our Team",
//       teamText:
//         "Our team consists of experienced specialists who are committed to providing the highest quality services. Each team member is trained and qualified in their field, with an understanding of the specifics and significance of the work.",
//       teamMembers: [
//         {
//           name: "Kārlis Bērziņš",
//           role: "Founder and Manager",
//           description:
//             "Kārlis is the founder of the company with more than 10 years of experience in gardening and landscape architecture.",
//         },
//         {
//           name: "Anna Kalniņa",
//           role: "Customer Relations Manager",
//           description:
//             "Anna ensures that our clients receive excellent service and a personalized approach.",
//         },
//         {
//           name: "Mārtiņš Zariņš",
//           role: "Work Manager",
//           description:
//             "Mārtiņš manages our field work and ensures that all services are performed at the highest quality.",
//         },
//       ],
//     },
//     ru: {
//       title: "О нас",
//       subtitle: "Мы SkyGarden - профессиональная команда по уходу за могилами",
//       missionTitle: "Наша миссия",
//       missionText:
//         "Наша миссия - предоставлять услуги по уходу за могилами высочайшего качества, поддерживая места памяти ваших близких в достойном состоянии. Мы понимаем, насколько важно чтить память близких, и наша цель - обеспечить вам утешение и поддержку в этом процессе.",
//       historyTitle: "Наша история",
//       historyText:
//         "SkyGarden начался в 2019 году как инициатива небольшого семейного бизнеса, когда основатели поняли, что многим людям, живущим далеко от мест захоронения своих близких, нужна надежная служба, которая бы о них заботилась. За эти годы мы расширили спектр наших услуг и приобрели опыт, который позволяет нам обеспечивать комплексный и профессиональный уход за могилами.",
//       valuesTitle: "Наши ценности",
//       values: [
//         {
//           title: "Уважение",
//           description:
//             "Мы работаем с глубоким уважением к вашим ушедшим близким и местам их памяти.",
//         },
//         {
//           title: "Качество",
//           description:
//             "Наша работа основана на высоких стандартах качества и детальном подходе.",
//         },
//         {
//           title: "Надежность",
//           description:
//             "Вы можете положиться на то, что наши услуги будут выполнены тщательно и своевременно.",
//         },
//         {
//           title: "Прозрачность",
//           description:
//             "Открытое общение и регулярные отчеты важны в нашей работе.",
//         },
//       ],
//       teamTitle: "Наша команда",
//       teamText:
//         "В нашей команде работают опытные специалисты, которые стремятся предоставлять услуги высочайшего качества. Каждый член команды обучен и квалифицирован в своей области, с пониманием специфики и значимости работы.",
//       teamMembers: [
//         {
//           name: "Карлис Берзиньш",
//           role: "Основатель и руководитель",
//           description:
//             "Карлис является основателем компании с более чем 10-летним опытом работы в садоводстве и ландшафтной архитектуре.",
//         },
//         {
//           name: "Анна Калниня",
//           role: "Менеджер по работе с клиентами",
//           description:
//             "Анна заботится о том, чтобы наши клиенты получали отличный сервис и персонализированный подход.",
//         },
//         {
//           name: "Мартиньш Зариньш",
//           role: "Руководитель работ",
//           description:
//             "Мартиньш руководит нашими полевыми работами и обеспечивает выполнение всех услуг на высочайшем уровне качества.",
//         },
//       ],
//     },
//     de: {
//       title: "Über uns",
//       subtitle: "Wir sind SkyGarden - ein professionelles Team für Grabpflege",
//       missionTitle: "Unsere Mission",
//       missionText:
//         "Unsere Mission ist es, Grabpflegedienste von höchster Qualität anzubieten und die Gedenkstätten Ihrer Lieben in einem würdigen Zustand zu erhalten. Wir verstehen, wie wichtig es ist, das Andenken an Ihre Lieben zu ehren, und unser Ziel ist es, Ihnen Trost und Unterstützung in diesem Prozess zu bieten.",
//       historyTitle: "Unsere Geschichte",
//       historyText:
//         "SkyGarden begann 2019 als Initiative eines kleinen Familienunternehmens, als die Gründer erkannten, dass viele Menschen, die weit entfernt von den Grabstätten ihrer Lieben leben, einen zuverlässigen Service benötigen, der sich um sie kümmert. Im Laufe der Jahre haben wir unser Dienstleistungsangebot erweitert und Erfahrungen gesammelt, die es uns ermöglichen, umfassende und professionelle Grabpflege anzubieten.",
//       valuesTitle: "Unsere Werte",
//       values: [
//         {
//           title: "Respekt",
//           description:
//             "Wir arbeiten mit tiefem Respekt für Ihre verstorbenen Angehörigen und ihre Gedenkstätten.",
//         },
//         {
//           title: "Qualität",
//           description:
//             "Unsere Arbeit basiert auf hohen Qualitätsstandards und einem detaillierten Ansatz.",
//         },
//         {
//           title: "Zuverlässigkeit",
//           description:
//             "Sie können sich darauf verlassen, dass unser Service sorgfältig und zeitnah durchgeführt wird.",
//         },
//         {
//           title: "Transparenz",
//           description:
//             "Offene Kommunikation und regelmäßige Berichte sind in unserer Arbeit wichtig.",
//         },
//       ],
//       teamTitle: "Unser Team",
//       teamText:
//         "Unser Team besteht aus erfahrenen Spezialisten, die sich der Bereitstellung von Dienstleistungen höchster Qualität verschrieben haben. Jedes Teammitglied ist in seinem Bereich ausgebildet und qualifiziert und versteht die Besonderheiten und Bedeutung der Arbeit.",
//       teamMembers: [
//         {
//           name: "Kārlis Bērziņš",
//           role: "Gründer und Manager",
//           description:
//             "Kārlis ist der Gründer des Unternehmens mit mehr als 10 Jahren Erfahrung in Gartenbau und Landschaftsarchitektur.",
//         },
//         {
//           name: "Anna Kalniņa",
//           role: "Kundenbeziehungsmanagerin",
//           description:
//             "Anna sorgt dafür, dass unsere Kunden einen ausgezeichneten Service und einen personalisierten Ansatz erhalten.",
//         },
//         {
//           name: "Mārtiņš Zariņš",
//           role: "Arbeitsleiter",
//           description:
//             "Mārtiņš leitet unsere Feldarbeit und stellt sicher, dass alle Dienstleistungen in höchster Qualität ausgeführt werden.",
//         },
//       ],
//     },
//   };

//   // Select content based on current language
//   const t = content[language as keyof typeof content];

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900">
//       {/* Hero Section */}
//       <Section bgColor="white" spacing="large">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h1
//             className="text-4xl font-serif font-bold text-gray-900 dark:text-white md:text-5xl"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {t.title}
//           </motion.h1>
//           <motion.p
//             className="mt-6 text-xl text-gray-600 dark:text-gray-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             {t.subtitle}
//           </motion.p>
//         </div>
//       </Section>

//       {/* Mission and Story Section */}
//       <Section bgColor="light" spacing="large">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
//                 {t.missionTitle}
//               </h2>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
//                 {t.missionText}
//               </p>

//               <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
//                 {t.historyTitle}
//               </h2>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//                 {t.historyText}
//               </p>
//             </motion.div>
//           </div>

//           <motion.div
//             className="relative rounded-lg overflow-hidden shadow-xl"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <Image
//               src="/images/about-us.jpg"
//               alt="SkyGarden Team"
//               width={600}
//               height={400}
//               className="w-full h-auto object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//           </motion.div>
//         </div>
//       </Section>

//       {/* Stats Section */}
//       <Stats />

//       {/* Values Section */}
//       <Section bgColor="white" spacing="large">
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
//             {t.valuesTitle}
//           </h2>
//           <div className="w-20 h-1 mx-auto bg-emerald-500 mb-10"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {t.values.map((value, index) => (
//             <motion.div
//               key={index}
//               className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-100 dark:border-emerald-800/30"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
//                 {value.title}
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300">
//                 {value.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       {/* Team Section */}
//       <Section bgColor="light" spacing="large">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
//               {t.teamTitle}
//             </h2>
//             <div className="w-20 h-1 mx-auto bg-emerald-500 mb-6"></div>
//             <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
//               {t.teamText}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {t.teamMembers.map((member, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
//                   <span className="text-gray-500 dark:text-gray-400">
//                     {member.name}
//                   </span>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
//                     {member.name}
//                   </h3>
//                   <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">
//                     {member.role}
//                   </p>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     {member.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </Section>

//       {/* Testimonials Section */}
//       <Testimonials />

//       {/* CTA Section */}
//       <Section bgColor="white" spacing="large">
//         <CTABanner variant="primary" buttonLink="/contact" />
//       </Section>
//     </div>
//   );
// }
