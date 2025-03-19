// app/about/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { HeartIcon, CheckIcon, SparklesIcon } from "@/components/Icons";

// Language strings for the about page
const translations = {
  lv: {
    title: "Par mums",
    subtitle: "Profesionāli kapu kopšanas pakalpojumi ar cieņu un rūpēm",
    ourStory: {
      title: "Mūsu stāsts",
      content: [
        "PiemiņasRūpes ir radies no personīgās pieredzes un vēlmes palīdzēt citiem saglabāt cienīgu piemiņu saviem aizgājušajiem tuviniekiem. Mēs saprotam, cik grūti var būt rūpēties par kapa vietu, īpaši ja dzīvojat tālu vai jums ir ierobežots laiks.",
        "Mūsu mērķis ir nodrošināt profesionālus kapu kopšanas pakalpojumus, kas atvieglo šo emocionālo nastu un ļauj jums būt drošiem, ka jūsu tuvinieku atdusas vietas tiek pienācīgi koptas.",
        "Kopš darbības uzsākšanas mēs esam palīdzējuši daudzām ģimenēm visā Latvijā, nodrošinot individuālu pieeju katram klientam un katrai kapa vietai. Mēs lepojamies ar mūsu darbu un mūsu spēju sniegt sirdsmieru mūsu klientiem.",
      ],
    },
    mission: {
      title: "Mūsu misija",
      content:
        "Mūsu misija ir nodrošināt visaugstākās kvalitātes kapu kopšanas pakalpojumus, kas palīdz saglabāt cieņu un godu jūsu aizgājušo tuvinieku piemiņai. Mēs strādājam ar dziļu cieņu, rūpību un uzmanību pret detaļām, lai nodrošinātu, ka katra kapa vieta tiek kopta tā, it kā tā būtu mūsu pašu ģimenes locekļa atdusas vieta.",
    },
    values: {
      title: "Mūsu vērtības",
      values: [
        {
          title: "Cieņa",
          description:
            "Mēs strādājam ar dziļu cieņu pret aizgājušajiem un viņu tuviniekiem.",
        },
        {
          title: "Kvalitāte",
          description:
            "Mēs neaprobežojamies tikai ar pamatuzdevumu izpildi, bet cenšamies pārsniegt klientu gaidas.",
        },
        {
          title: "Uzticamība",
          description:
            "Mūsu klienti var paļauties, ka darbs tiks paveikts rūpīgi un laikā.",
        },
        {
          title: "Empātija",
          description:
            "Mēs saprotam, cik svarīga ir piemiņa, un izturamies ar sirsnību un sapratni.",
        },
      ],
    },
    team: {
      title: "Mūsu komanda",
      content:
        "Mūsu komandu veido pieredzējuši profesionāļi, kas specializējas kapu kopšanā un labiekārtošanā. Katrs komandas loceklis ir apmācīts strādāt ar cieņu un rūpību, lai nodrošinātu visaugstāko pakalpojumu kvalitāti.",
      members: [
        {
          name: "Jānis Bērziņš",
          role: "Dibinātājs un vadītājs",
          bio: "Jānim ir vairāk nekā 10 gadu pieredze ainavu arhitektūrā un dārzkopībā. Viņa aizraušanās ar detaļām un kvalitāti ir PiemiņasRūpes pamatā.",
        },
        {
          name: "Anna Kļaviņa",
          role: "Klientu apkalpošanas vadītāja",
          bio: "Anna ir atbildīga par visu klientu pieprasījumu koordinēšanu un nodrošina, ka katra klienta vajadzības tiek uzklausītas un īstenotas.",
        },
        {
          name: "Mārtiņš Ozols",
          role: "Galvenais speciālists",
          bio: "Mārtiņam ir padziļinātas zināšanas par pieminekļu atjaunošanu un kopšanu. Viņš vada mūsu specializēto darbu komandu.",
        },
      ],
    },
    whyChooseUs: {
      title: "Kāpēc izvēlēties mūs",
      reasons: [
        {
          title: "Profesionalitāte",
          description:
            "Mūsu komanda sastāv no pieredzējušiem speciālistiem ar padziļinātām zināšanām.",
        },
        {
          title: "Individuāla pieeja",
          description:
            "Mēs piedāvājam personalizētus risinājumus, kas atbilst jūsu vajadzībām un vēlmēm.",
        },
        {
          title: "Caurspīdīgums",
          description:
            "Mēs nodrošinām detalizētas atskaites un fotogrāfijas pirms un pēc mūsu darba.",
        },
        {
          title: "Uzticamība",
          description:
            "Mūsu klienti var paļauties, ka darbs tiks paveikts laikā un ar augstu kvalitāti.",
        },
        {
          title: "Pieejamība",
          description:
            "Mēs esam pieejami, lai atbildētu uz jūsu jautājumiem un risinātu jūsu bažas.",
        },
        {
          title: "Vides apziņa",
          description:
            "Mēs izmantojam videi draudzīgus produktus un metodes mūsu darbā.",
        },
      ],
    },
    cta: {
      title: "Gatavi sākt?",
      description:
        "Sazinieties ar mums, lai uzzinātu vairāk par mūsu pakalpojumiem un kā mēs varam palīdzēt.",
      button: "Sazinieties ar mums",
    },
  },
  en: {
    title: "About Us",
    subtitle: "Professional grave maintenance services with respect and care",
    ourStory: {
      title: "Our Story",
      content: [
        "PiemiņasRūpes was born from personal experience and a desire to help others maintain a dignified memory of their departed loved ones. We understand how difficult it can be to care for a grave site, especially if you live far away or have limited time.",
        "Our goal is to provide professional grave maintenance services that ease this emotional burden and allow you to be confident that your loved ones' resting places are properly cared for.",
        "Since our inception, we have helped many families throughout Latvia, providing an individual approach to each client and each grave site. We take pride in our work and our ability to provide peace of mind to our clients.",
      ],
    },
    mission: {
      title: "Our Mission",
      content:
        "Our mission is to provide the highest quality grave maintenance services that help preserve dignity and honor for the memory of your departed loved ones. We work with deep respect, care, and attention to detail to ensure that each grave site is maintained as if it were the resting place of our own family member.",
    },
    values: {
      title: "Our Values",
      values: [
        {
          title: "Respect",
          description:
            "We work with deep respect for the departed and their loved ones.",
        },
        {
          title: "Quality",
          description:
            "We don't just fulfill the basic tasks, but strive to exceed client expectations.",
        },
        {
          title: "Reliability",
          description:
            "Our clients can rely on the work being done thoroughly and on time.",
        },
        {
          title: "Empathy",
          description:
            "We understand the importance of remembrance and treat each case with warmth and understanding.",
        },
      ],
    },
    team: {
      title: "Our Team",
      content:
        "Our team consists of experienced professionals who specialize in grave maintenance and improvement. Each team member is trained to work with respect and care to ensure the highest quality of service.",
      members: [
        {
          name: "Jānis Bērziņš",
          role: "Founder and Director",
          bio: "Jānis has more than 10 years of experience in landscape architecture and gardening. His passion for detail and quality is the foundation of PiemiņasRūpes.",
        },
        {
          name: "Anna Kļaviņa",
          role: "Customer Service Manager",
          bio: "Anna is responsible for coordinating all client requests and ensures that each client's needs are heard and implemented.",
        },
        {
          name: "Mārtiņš Ozols",
          role: "Chief Specialist",
          bio: "Mārtiņš has in-depth knowledge of monument restoration and maintenance. He leads our specialized work team.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us",
      reasons: [
        {
          title: "Professionalism",
          description:
            "Our team consists of experienced specialists with in-depth knowledge.",
        },
        {
          title: "Individual Approach",
          description:
            "We offer personalized solutions that meet your needs and wishes.",
        },
        {
          title: "Transparency",
          description:
            "We provide detailed reports and before/after photographs of our work.",
        },
        {
          title: "Reliability",
          description:
            "Our clients can rely on the work being done on time and with high quality.",
        },
        {
          title: "Accessibility",
          description:
            "We are available to answer your questions and address your concerns.",
        },
        {
          title: "Environmental Awareness",
          description:
            "We use environmentally friendly products and methods in our work.",
        },
      ],
    },
    cta: {
      title: "Ready to get started?",
      description:
        "Contact us to learn more about our services and how we can help.",
      button: "Contact Us",
    },
  },
  ru: {
    title: "О нас",
    subtitle:
      "Профессиональные услуги по уходу за могилами с уважением и заботой",
    ourStory: {
      title: "Наша история",
      content: [
        "PiemiņasRūpes родился из личного опыта и желания помочь другим сохранить достойную память о своих ушедших близких. Мы понимаем, насколько трудно может быть ухаживать за могилой, особенно если вы живете далеко или у вас ограниченное время.",
        "Наша цель - предоставлять профессиональные услуги по уходу за могилами, которые облегчают это эмоциональное бремя и позволяют вам быть уверенными, что места упокоения ваших близких должным образом ухожены.",
        "С момента нашего основания мы помогли многим семьям по всей Латвии, обеспечивая индивидуальный подход к каждому клиенту и каждой могиле. Мы гордимся нашей работой и нашей способностью обеспечить душевное спокойствие нашим клиентам.",
      ],
    },
    mission: {
      title: "Наша миссия",
      content:
        "Наша миссия - предоставлять услуги по уходу за могилами высочайшего качества, которые помогают сохранить достоинство и честь памяти ваших ушедших близких. Мы работаем с глубоким уважением, заботой и вниманием к деталям, чтобы гарантировать, что каждая могила поддерживается так, как если бы это было место упокоения члена нашей собственной семьи.",
    },
    values: {
      title: "Наши ценности",
      values: [
        {
          title: "Уважение",
          description:
            "Мы работаем с глубоким уважением к усопшим и их близким.",
        },
        {
          title: "Качество",
          description:
            "Мы не просто выполняем основные задачи, но стремимся превзойти ожидания клиентов.",
        },
        {
          title: "Надежность",
          description:
            "Наши клиенты могут рассчитывать на то, что работа будет выполнена тщательно и вовремя.",
        },
        {
          title: "Эмпатия",
          description:
            "Мы понимаем важность памяти и относимся к каждому случаю с теплотой и пониманием.",
        },
      ],
    },
    team: {
      title: "Наша команда",
      content:
        "Наша команда состоит из опытных профессионалов, специализирующихся на уходе за могилами и их улучшении. Каждый член команды обучен работать с уважением и заботой, чтобы обеспечить высочайшее качество обслуживания.",
      members: [
        {
          name: "Янис Берзиньш",
          role: "Основатель и директор",
          bio: "У Яниса более 10 лет опыта в ландшафтной архитектуре и садоводстве. Его страсть к деталям и качеству является основой PiemiņasRūpes.",
        },
        {
          name: "Анна Клявиня",
          role: "Менеджер по обслуживанию клиентов",
          bio: "Анна отвечает за координацию всех запросов клиентов и обеспечивает учет и реализацию потребностей каждого клиента.",
        },
        {
          name: "Мартиньш Озолс",
          role: "Главный специалист",
          bio: "Мартиньш обладает глубокими знаниями в области реставрации и ухода за памятниками. Он руководит нашей специализированной рабочей командой.",
        },
      ],
    },
    whyChooseUs: {
      title: "Почему выбирают нас",
      reasons: [
        {
          title: "Профессионализм",
          description:
            "Наша команда состоит из опытных специалистов с глубокими знаниями.",
        },
        {
          title: "Индивидуальный подход",
          description:
            "Мы предлагаем персонализированные решения, отвечающие вашим потребностям и пожеланиям.",
        },
        {
          title: "Прозрачность",
          description:
            "Мы предоставляем подробные отчеты и фотографии до и после нашей работы.",
        },
        {
          title: "Надежность",
          description:
            "Наши клиенты могут рассчитывать на то, что работа будет выполнена вовремя и с высоким качеством.",
        },
        {
          title: "Доступность",
          description:
            "Мы доступны для ответов на ваши вопросы и решения ваших проблем.",
        },
        {
          title: "Экологическая осознанность",
          description:
            "Мы используем экологически чистые продукты и методы в нашей работе.",
        },
      ],
    },
    cta: {
      title: "Готовы начать?",
      description:
        "Свяжитесь с нами, чтобы узнать больше о наших услугах и о том, как мы можем вам помочь.",
      button: "Связаться с нами",
    },
  },
  de: {
    title: "Über uns",
    subtitle: "Professionelle Grabpflegedienste mit Respekt und Sorgfalt",
    ourStory: {
      title: "Unsere Geschichte",
      content: [
        "PiemiņasRūpes entstand aus persönlicher Erfahrung und dem Wunsch, anderen zu helfen, ein würdiges Andenken an ihre verstorbenen Angehörigen zu bewahren. Wir verstehen, wie schwierig es sein kann, eine Grabstätte zu pflegen, besonders wenn Sie weit weg leben oder wenig Zeit haben.",
        "Unser Ziel ist es, professionelle Grabpflegedienste anzubieten, die diese emotionale Belastung erleichtern und Ihnen die Gewissheit geben, dass die Ruhestätten Ihrer Lieben angemessen gepflegt werden.",
        "Seit unserer Gründung haben wir vielen Familien in ganz Lettland geholfen und dabei jeden Kunden und jede Grabstätte individuell betreut. Wir sind stolz auf unsere Arbeit und unsere Fähigkeit, unseren Kunden Seelenfrieden zu geben.",
      ],
    },
    mission: {
      title: "Unsere Mission",
      content:
        "Unsere Mission ist es, Grabpflegedienste von höchster Qualität anzubieten, die dazu beitragen, die Würde und Ehre im Andenken an Ihre verstorbenen Angehörigen zu bewahren. Wir arbeiten mit tiefem Respekt, Sorgfalt und Aufmerksamkeit für Details, um sicherzustellen, dass jede Grabstätte so gepflegt wird, als wäre es die Ruhestätte eines eigenen Familienmitglieds.",
    },
    values: {
      title: "Unsere Werte",
      values: [
        {
          title: "Respekt",
          description:
            "Wir arbeiten mit tiefem Respekt für die Verstorbenen und ihre Angehörigen.",
        },
        {
          title: "Qualität",
          description:
            "Wir erfüllen nicht nur die grundlegenden Aufgaben, sondern bemühen uns, die Erwartungen der Kunden zu übertreffen.",
        },
        {
          title: "Zuverlässigkeit",
          description:
            "Unsere Kunden können sich darauf verlassen, dass die Arbeit gründlich und pünktlich erledigt wird.",
        },
        {
          title: "Empathie",
          description:
            "Wir verstehen die Bedeutung des Gedenkens und behandeln jeden Fall mit Wärme und Verständnis.",
        },
      ],
    },
    team: {
      title: "Unser Team",
      content:
        "Unser Team besteht aus erfahrenen Fachleuten, die sich auf Grabpflege und -verbesserung spezialisiert haben. Jedes Teammitglied ist darauf geschult, mit Respekt und Sorgfalt zu arbeiten, um die höchste Servicequalität zu gewährleisten.",
      members: [
        {
          name: "Jānis Bērziņš",
          role: "Gründer und Direktor",
          bio: "Jānis hat mehr als 10 Jahre Erfahrung in Landschaftsarchitektur und Gartenbau. Seine Leidenschaft für Details und Qualität ist die Grundlage von PiemiņasRūpes.",
        },
        {
          name: "Anna Kļaviņa",
          role: "Kundendienstleiterin",
          bio: "Anna ist für die Koordination aller Kundenanfragen zuständig und stellt sicher, dass die Bedürfnisse jedes Kunden gehört und umgesetzt werden.",
        },
        {
          name: "Mārtiņš Ozols",
          role: "Chefexperte",
          bio: "Mārtiņš verfügt über fundierte Kenntnisse in der Denkmalrestaurierung und -pflege. Er leitet unser spezialisiertes Arbeitsteam.",
        },
      ],
    },
    whyChooseUs: {
      title: "Warum uns wählen",
      reasons: [
        {
          title: "Professionalität",
          description:
            "Unser Team besteht aus erfahrenen Spezialisten mit fundiertem Wissen.",
        },
        {
          title: "Individueller Ansatz",
          description:
            "Wir bieten personalisierte Lösungen, die Ihren Bedürfnissen und Wünschen entsprechen.",
        },
        {
          title: "Transparenz",
          description:
            "Wir erstellen detaillierte Berichte und Vorher/Nachher-Fotos unserer Arbeit.",
        },
        {
          title: "Zuverlässigkeit",
          description:
            "Unsere Kunden können sich darauf verlassen, dass die Arbeit pünktlich und in hoher Qualität erledigt wird.",
        },
        {
          title: "Erreichbarkeit",
          description:
            "Wir stehen zur Verfügung, um Ihre Fragen zu beantworten und auf Ihre Anliegen einzugehen.",
        },
        {
          title: "Umweltbewusstsein",
          description:
            "Wir verwenden umweltfreundliche Produkte und Methoden in unserer Arbeit.",
        },
      ],
    },
    cta: {
      title: "Bereit anzufangen?",
      description:
        "Kontaktieren Sie uns, um mehr über unsere Dienstleistungen zu erfahren und wie wir Ihnen helfen können.",
      button: "Kontaktieren Sie uns",
    },
  },
};

export default function AboutPage() {
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

      {/* Our Story Section */}
      <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                {t.ourStory.title}
              </h2>
              <div className="mt-6 space-y-6">
                {t.ourStory.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700">
                <div className="flex items-center justify-center w-full h-full text-gray-500 dark:text-gray-400">
                  {language === "lv" && "Mūsu stāsta attēls"}
                  {language === "en" && "Our story image"}
                  {language === "ru" && "Изображение нашей истории"}
                  {language === "de" && "Bild unserer Geschichte"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-emerald-600 dark:bg-emerald-700 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {t.mission.title}
            </h2>
            <p className="mt-6 text-lg text-emerald-50">{t.mission.content}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              {t.values.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 md:grid-cols-4">
            {t.values.values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="p-3 mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 w-fit">
                  <HeartIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              {t.team.title}
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              {t.team.content}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {t.team.members.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700"
              >
                {/* Member image placeholder */}
                <div className="relative w-24 h-24 mx-auto overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700">
                  <div className="flex items-center justify-center w-full h-full text-gray-500 dark:text-gray-400">
                    {member.name.split(" ")[0].charAt(0)}
                    {member.name.split(" ")[1].charAt(0)}
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-bold text-center text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-center text-emerald-600 dark:text-emerald-400">
                  {member.role}
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              {t.whyChooseUs.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {t.whyChooseUs.reasons.map((reason, index) => (
              <div
                key={index}
                className="flex p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <CheckIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800 md:py-20">
        <div className="container">
          <div className="px-6 py-10 text-center bg-emerald-600 rounded-lg dark:bg-emerald-700 md:py-16 md:px-12">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {t.cta.title}
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-emerald-50">
              {t.cta.description}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 text-base font-medium text-emerald-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
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
