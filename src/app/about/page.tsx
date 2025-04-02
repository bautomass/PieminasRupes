"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import Head from "next/head";

// Animation presets with performance optimizations
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutPage() {
  const { language } = useLanguage();

  // Page content based on language
  const content = {
    lv: {
      metaTitle:
        "Par mums | SkyGarden - Profesionālie kapu kopšanas pakalpojumi",
      metaDescription:
        "SkyGarden profesionāli kapu kopšanas pakalpojumi. Uzziniet par mūsu vēsturi, misiju un vērtībām, kas ir mūsu pakalpojumu pamatā.",
      title: "Par mums",
      subtitle:
        "Mēs esam SkyGarden - profesionāli piemiņas vietu kopšanas speciālisti.",
      missionTitle: "Mūsu misija",
      missionText:
        "Mūsu misija ir nodrošināt augstākās kvalitātes kapu kopšanas pakalpojumus ar cieņu un profesionalitāti. Mēs apvienojam rūpīgu darbu ar personalizētu pieeju, lai katrs kapa piemineklis un tā apkārtne būtu pastāvīgi sakopti. Mūsu mērķis ir sniegt klientiem drošības sajūtu, zinot, ka viņu tuvinieku piemiņas vietas tiek uzturētas cienīgā stāvoklī.",
      historyTitle: "Mūsu vēsture",
      historyText:
        "SkyGarden aizsākās kā ģimenes uzņēmums, kad sapratām, ka daudziem cilvēkiem, kuri dzīvo tālu no savu tuvinieku apbedījuma vietām, nepieciešams uzticams pakalpojums. Mūsu pieredze kapu kopšanā ļauj mums piedāvāt profesionālu un cieņpilnu servisu, kas atbilst katra klienta individuālajām vajadzībām. Mēs lepojamies ar iespēju palīdzēt cilvēkiem saglabāt piemiņas vietas kārtībā neatkarīgi no attāluma.",
      valuesTitle: "Mūsu vērtības",
      imageAlt: "SkyGarden komanda kapu kopšanas darbā",
      values: [
        {
          title: "Cieņa",
          description:
            "Katrai piemiņas vietai pieejam ar dziļu cieņu un iejūtību. Mēs saprotam šo vietu emocionālo nozīmi un strādājam ar atbilstošu atbildības sajūtu.",
          icon: "heart", // For use with the new design
        },
        {
          title: "Kvalitāte",
          description:
            "Mēs nesamierināmies ar viduvējību. Izmantojam kvalitatīvus materiālus un pievēršam uzmanību sīkākajām detaļām, lai nodrošinātu izcilus rezultātus.",
          icon: "star",
        },
        {
          title: "Uzticamība",
          description:
            "Jūs varat uz mums paļauties. Mēs vienmēr pildām solījumus, ievērojam termiņus un veicam darbu ar konsekvenci, uz ko var paļauties visa gada garumā.",
          icon: "shield",
        },
        {
          title: "Caurskatāmība",
          description:
            "Mūsu darba process ir pilnībā caurskatāms. Piedāvājam detalizētus fotoattēlus pirms un pēc apkopes, skaidru cenu politiku un atklātu komunikāciju.",
          icon: "camera",
        },
      ],
    },
    en: {
      metaTitle:
        "About Us | SkyGarden - Professional Grave Maintenance Services",
      metaDescription:
        "SkyGarden professional grave care services. Learn about our history, mission and values that form the foundation of our services.",
      title: "About Us",
      subtitle:
        "We are SkyGarden - professional memorial site care specialists",
      missionTitle: "Our Mission",
      missionText:
        "Our mission is to provide superior grave maintenance services with respect and professionalism. We combine meticulous work with a personalized approach to ensure each memorial and its surroundings are consistently well-maintained. Our goal is to give clients peace of mind knowing their loved ones' resting places are kept in dignified condition.",
      historyTitle: "Our History",
      historyText:
        "SkyGarden began as a family business when we recognized that many people living far from their loved ones' burial sites need a reliable care service. Our experience in grave maintenance allows us to offer professional and respectful service tailored to each client's individual needs. We take pride in helping people maintain memorial sites in good condition regardless of distance.",
      valuesTitle: "Our Values",
      imageAlt: "SkyGarden team performing grave maintenance work",
      values: [
        {
          title: "Respect",
          description:
            "We approach each memorial site with deep respect and sensitivity. We understand the emotional significance of these places and work with appropriate reverence.",
          icon: "heart",
        },
        {
          title: "Quality",
          description:
            "We don't settle for mediocrity. We use quality materials and pay attention to the smallest details to ensure exceptional results in every aspect of our work.",
          icon: "star",
        },
        {
          title: "Reliability",
          description:
            "You can count on us. We always keep our promises, adhere to deadlines, and perform work with the consistency you can depend on throughout the year.",
          icon: "shield",
        },
        {
          title: "Transparency",
          description:
            "Our work process is fully transparent. We provide detailed before and after photos, clear pricing policies, and open communication at every step.",
          icon: "camera",
        },
      ],
    },
    ru: {
      metaTitle:
        "О нас | SkyGarden - Профессиональные услуги по уходу за могилами",
      metaDescription:
        "SkyGarden профессиональные услуги по уходу за могилами. Узнайте о нашей истории, миссии и ценностях, которые лежат в основе наших услуг.",
      title: "О нас",
      subtitle:
        "Мы SkyGarden - профессиональные специалисты по уходу за местами памяти",
      missionTitle: "Наша миссия",
      missionText:
        "Наша миссия – предоставлять услуги по уходу за могилами высочайшего качества с уважением и профессионализмом. Мы сочетаем тщательную работу с персонализированным подходом, чтобы каждый памятник и его окружение были постоянно ухоженными. Наша цель – обеспечить клиентам спокойствие, зная, что места упокоения их близких поддерживаются в достойном состоянии.",
      historyTitle: "Наша история",
      historyText:
        "SkyGarden возник как семейный бизнес, когда мы осознали, что многим людям, живущим вдали от мест захоронения своих близких, необходим надежный сервис по уходу. Наш опыт в обслуживании могил позволяет нам предлагать профессиональный и уважительный сервис, адаптированный к индивидуальным потребностям каждого клиента. Мы гордимся тем, что помогаем людям поддерживать места памяти в хорошем состоянии независимо от расстояния.",
      valuesTitle: "Наши ценности",
      imageAlt: "Команда SkyGarden выполняет работы по уходу за могилами",
      values: [
        {
          title: "Уважение",
          description:
            "Мы подходим к каждому месту захоронения с глубоким уважением. Мы понимаем эмоциональную значимость этих мест и работаем с соответствующим почтением.",
          icon: "heart",
        },
        {
          title: "Качество",
          description:
            "Мы не приемлем посредственности. Используем качественные материалы и уделяем внимание мельчайшим деталям, чтобы обеспечить исключительные результаты.",
          icon: "star",
        },
        {
          title: "Надежность",
          description:
            "Вы можете на нас положиться. Мы всегда выполняем свои обещания, соблюдаем сроки и выполняем работу с последовательностью, на которую можно рассчитывать.",
          icon: "shield",
        },
        {
          title: "Прозрачность",
          description:
            "Наш рабочий процесс полностью прозрачен. Мы предоставляем подробные фотографии до и после ухода, прозрачную ценовую политику и открытое общение.",
          icon: "camera",
        },
      ],
    },
    de: {
      metaTitle: "Über uns | SkyGarden - Professionelle Grabpflegedienste",
      metaDescription:
        "SkyGarden professionelle Grabpflegedienste. Erfahren Sie mehr über unsere Geschichte, Mission und Werte, die die Grundlage unserer Dienstleistungen bilden.",
      title: "Über uns",
      subtitle:
        "Wir sind SkyGarden - professionelle Gedenkstättenpflege-Spezialisten",
      missionTitle: "Unsere Mission",
      missionText:
        "Unsere Mission ist es, erstklassige Grabpflegedienste mit Respekt und Professionalität anzubieten. Wir verbinden sorgfältige Arbeit mit einem personalisierten Ansatz, um sicherzustellen, dass jedes Grabmal und seine Umgebung stets gepflegt sind. Unser Ziel ist es, Kunden die Gewissheit zu geben, dass die Ruhestätten ihrer Angehörigen in würdigem Zustand erhalten werden.",
      historyTitle: "Unsere Geschichte",
      historyText:
        "SkyGarden entstand als Familienunternehmen, als wir erkannten, dass viele Menschen, die weit entfernt von den Grabstätten ihrer Angehörigen leben, einen zuverlässigen Pflegedienst benötigen. Unsere Erfahrung in der Grabpflege ermöglicht es uns, einen professionellen und respektvollen Service anzubieten, der auf die individuellen Bedürfnisse jedes Kunden zugeschnitten ist. Wir sind stolz darauf, Menschen dabei zu helfen, Gedenkstätten unabhängig von der Entfernung in gutem Zustand zu erhalten.",
      valuesTitle: "Unsere Werte",
      imageAlt: "SkyGarden-Team bei der Grabpflege",
      values: [
        {
          title: "Respekt",
          description:
            "Wir gehen mit tiefem Respekt und Sensibilität an jede Gedenkstätte heran. Wir verstehen die emotionale Bedeutung dieser Orte und arbeiten mit angemessener Ehrfurcht.",
          icon: "heart",
        },
        {
          title: "Qualität",
          description:
            "Wir geben uns nicht mit Mittelmäßigkeit zufrieden. Wir verwenden hochwertige Materialien und achten auf kleinste Details, um außergewöhnliche Ergebnisse zu erzielen.",
          icon: "star",
        },
        {
          title: "Zuverlässigkeit",
          description:
            "Sie können sich auf uns verlassen. Wir halten stets unsere Versprechen, halten Fristen ein und führen Arbeiten mit einer Beständigkeit aus, auf die Sie sich verlassen können.",
          icon: "shield",
        },
        {
          title: "Transparenz",
          description:
            "Unser Arbeitsprozess ist vollkommen transparent. Wir bieten detaillierte Vorher-Nachher-Fotos, klare Preispolitik und offene Kommunikation bei jedem Schritt.",
          icon: "camera",
        },
      ],
    },
  };

  // Select content based on current language
  const t = content[language as keyof typeof content];

  // Update page metadata
  useEffect(() => {
    // Update the document title
    document.title = t.metaTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t.metaDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = t.metaDescription;
      document.head.appendChild(meta);
    }
  }, [t.metaTitle, t.metaDescription]);

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <link rel="canonical" href="https://yourdomain.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SkyGarden",
            url: "https://yourdomain.com",
            logo: "https://yourdomain.com/logo.png",
            description: t.metaDescription,
            foundingDate: "2019",
            areaServed: ["Latvia", "Baltic States"],
          })}
        </script>
      </Head>

      <main className="bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <Section bgColor="white" spacing="large">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl font-serif font-bold text-gray-900 dark:text-white md:text-5xl"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              {t.title}
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-600 dark:text-gray-300"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
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
                initial="hidden"
                animate="visible"
                variants={fadeInLeft}
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
              className="relative rounded-lg overflow-hidden shadow-xl h-[600px]"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                willChange: "transform, opacity",
                translateZ: 0,
              }}
            >
              <Image
                src="https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743620349/aboutus_hueusc.jpg"
                alt={t.imageAlt}
                width={600}
                height={600}
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-full object-cover"
                priority={true}
                quality={85}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                aria-hidden="true"
              ></div>
            </motion.div>
          </div>
        </Section>

        {/* Values Section */}
        <Section bgColor="white" spacing="large">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl font-serif font-bold text-gray-900 dark:text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t.valuesTitle}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              {language === "lv"
                ? "Principi, kas vada mūsu komandu un veido mūsu pakalpojumu kvalitāti"
                : language === "en"
                  ? "Principles that guide our team and shape the quality of our service"
                  : language === "ru"
                    ? "Принципы, которые направляют нашу команду и формируют качество нашего сервиса"
                    : "Grundsätze, die unser Team leiten und die Qualität unseres Service prägen"}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {t.values.map((value, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6 shadow-md relative overflow-hidden group">
                  <div
                    className="absolute inset-0 bg-emerald-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full opacity-0 group-hover:opacity-20"
                    aria-hidden="true"
                  ></div>
                  {value.icon === "heart" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  )}
                  {value.icon === "star" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  )}
                  {value.icon === "shield" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  )}
                  {value.icon === "camera" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>

                <div className="w-12 h-1 bg-emerald-500 mx-auto mb-4 rounded-full"></div>

                <p className="text-gray-700 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
