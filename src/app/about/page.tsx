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
      subtitle: "Mēs esam SkyGarden - profesionālā kapu kopšanas komanda",
      missionTitle: "Mūsu misija",
      missionText:
        "Mūsu misija ir nodrošināt augstākās kvalitātes kapu kopšanas pakalpojumus, saglabājot jūsu tuvinieku piemiņas vietas cieņpilnā stāvoklī. Mēs saprotam, cik svarīga ir tuvinieku piemiņas godināšana, un mūsu mērķis ir sniegt jums mierinājumu un atbalstu šajā procesā.",
      historyTitle: "Mūsu vēsture",
      historyText:
        "SkyGarden aizsākās 2019. gadā kā neliela ģimenes uzņēmuma iniciatīva, kad dibinātāji saprata, ka daudziem cilvēkiem, kuri dzīvo tālu no savu tuvinieku apbedījuma vietām, ir nepieciešams uzticams pakalpojums, kas par tām rūpētos. Gadu gaitā mēs esam paplašinājuši savu pakalpojumu klāstu un ieguvuši pieredzi, kas ļauj mums nodrošināt visaptverošu un profesionālu kapu kopšanu.",
      valuesTitle: "Mūsu vērtības",
      imageAlt: "SkyGarden komanda kapu kopšanas darbā",
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
      metaTitle:
        "About Us | SkyGarden - Professional Grave Maintenance Services",
      metaDescription:
        "SkyGarden professional grave care services. Learn about our history, mission and values that form the foundation of our services.",
      title: "About Us",
      subtitle: "We are SkyGarden - a professional grave maintenance team",
      missionTitle: "Our Mission",
      missionText:
        "Our mission is to provide the highest quality grave care services, maintaining your loved ones' memorial sites in a dignified condition. We understand how important it is to honor the memory of loved ones, and our goal is to provide you with comfort and support in this process.",
      historyTitle: "Our History",
      historyText:
        "SkyGarden started in 2019 as a small family business initiative, when the founders realized that many people who live far from their loved ones' burial sites need a reliable service to care for them. Over the years, we have expanded our range of services and gained experience that allows us to provide comprehensive and professional grave care.",
      valuesTitle: "Our Values",
      imageAlt: "SkyGarden team performing grave maintenance work",
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
      metaTitle:
        "О нас | SkyGarden - Профессиональные услуги по уходу за могилами",
      metaDescription:
        "SkyGarden профессиональные услуги по уходу за могилами. Узнайте о нашей истории, миссии и ценностях, которые лежат в основе наших услуг.",
      title: "О нас",
      subtitle: "Мы SkyGarden - профессиональная команда по уходу за могилами",
      missionTitle: "Наша миссия",
      missionText:
        "Наша миссия - предоставлять услуги по уходу за могилами высочайшего качества, поддерживая места памяти ваших близких в достойном состоянии. Мы понимаем, насколько важно чтить память близких, и наша цель - обеспечить вам утешение и поддержку в этом процессе.",
      historyTitle: "Наша история",
      historyText:
        "SkyGarden начался в 2019 году как инициатива небольшого семейного бизнеса, когда основатели поняли, что многим людям, живущим далеко от мест захоронения своих близких, нужна надежная служба, которая бы о них заботилась. За эти годы мы расширили спектр наших услуг и приобрели опыт, который позволяет нам обеспечивать комплексный и профессиональный уход за могилами.",
      valuesTitle: "Наши ценности",
      imageAlt: "Команда SkyGarden выполняет работы по уходу за могилами",
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
      metaTitle: "Über uns | SkyGarden - Professionelle Grabpflegedienste",
      metaDescription:
        "SkyGarden professionelle Grabpflegedienste. Erfahren Sie mehr über unsere Geschichte, Mission und Werte, die die Grundlage unserer Dienstleistungen bilden.",
      title: "Über uns",
      subtitle: "Wir sind SkyGarden - ein professionelles Team für Grabpflege",
      missionTitle: "Unsere Mission",
      missionText:
        "Unsere Mission ist es, Grabpflegedienste von höchster Qualität anzubieten und die Gedenkstätten Ihrer Lieben in einem würdigen Zustand zu erhalten. Wir verstehen, wie wichtig es ist, das Andenken an Ihre Lieben zu ehren, und unser Ziel ist es, Ihnen Trost und Unterstützung in diesem Prozess zu bieten.",
      historyTitle: "Unsere Geschichte",
      historyText:
        "SkyGarden begann 2019 als Initiative eines kleinen Familienunternehmens, als die Gründer erkannten, dass viele Menschen, die weit entfernt von den Grabstätten ihrer Lieben leben, einen zuverlässigen Service benötigen, der sich um sie kümmert. Im Laufe der Jahre haben wir unser Dienstleistungsangebot erweitert und Erfahrungen gesammelt, die es uns ermöglichen, umfassende und professionelle Grabpflege anzubieten.",
      valuesTitle: "Unsere Werte",
      imageAlt: "SkyGarden-Team bei der Grabpflege",
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
                src="https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743266639/pieminas-vietu-uzturesana-tirisana-pakalpojumi-latvija-profesionali-rezultati_ighcwd.jpg"
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
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              {t.valuesTitle}
            </h2>
            <div
              className="w-20 h-1 mx-auto bg-emerald-500 mb-10"
              aria-hidden="true"
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-100 dark:border-emerald-800/30"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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
      </main>
    </>
  );
}
