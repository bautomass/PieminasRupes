"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { StarIcon } from "@/components/Icons";
import { motion } from "framer-motion";

// Define testimonial structure
interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export default function Testimonials() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Define testimonials based on language
  useEffect(() => {
    if (language === "lv") {
      setTestimonials([
        {
          id: 1,
          name: "Anita K.",
          location: "Liepāja",
          rating: 5,
          text: "Esmu ļoti apmierināta ar SkyGarden pakalpojumiem. Manas mammas kapa vieta vienmēr ir nevainojamā stāvoklī, un man ir mierīgs prāts, zinot, ka par to tiek rūpīgi gādāts. Īpaši novērtēju fotoatskaites, kas ļauj man redzēt paveikto darbu, jo dzīvoju citā pilsētā.",
          date: "2024. gada marts",
        },
        {
          id: 2,
          name: "Jānis P.",
          location: "Dienvidkurzemes novads",
          rating: 5,
          text: "SkyGarden komanda ir profesionāla un rūpīga. Mans tēva kaps pirms viņu pakalpojumiem bija sliktā stāvoklī, bet tagad tas vienmēr izskatās cienīgi. Viņi palīdzēja arī atjaunot pieminekli, kas bija stipri aizaudzis ar sūnām. Iesaku visiem, kas vēlas nodrošināt pienācīgu rūpi par tuvinieku atdusas vietām.",
          date: "2024. gada februāris",
        },
        {
          id: 3,
          name: "Inese B.",
          location: "Rīga",
          rating: 4,
          text: "Dzīvoju Rīgā, bet mani vecvecāki ir apglabāti Dienvidkurzemē. SkyGarden nodrošina man iespēju uzturēt viņu piemiņas vietu kārtībā, neskatoties uz attālumu. Regulāri saņemu atskaites un esmu ļoti apmierināta ar darba kvalitāti. Četras zvaigznes tikai tāpēc, ka dažreiz komunikācija varētu būt ātrāka.",
          date: "2023. gada oktobris",
        },
      ]);
    } else if (language === "en") {
      setTestimonials([
        {
          id: 1,
          name: "Anita K.",
          location: "Liepāja",
          rating: 5,
          text: "I am very satisfied with SkyGarden services. My mother's grave is always in impeccable condition, and I have peace of mind knowing that it is being carefully cared for. I especially appreciate the photo reports that allow me to see the work done, as I live in another city.",
          date: "March 2024",
        },
        {
          id: 2,
          name: "Jānis P.",
          location: "Dienvidkurzeme Municipality",
          rating: 5,
          text: "The SkyGarden team is professional and thorough. My father's grave was in poor condition before their services, but now it always looks dignified. They also helped restore the monument, which was heavily overgrown with moss. I recommend them to anyone who wants to ensure proper care for their loved ones' resting places.",
          date: "February 2024",
        },
        {
          id: 3,
          name: "Inese B.",
          location: "Riga",
          rating: 4,
          text: "I live in Riga, but my grandparents are buried in Dienvidkurzeme. SkyGarden provides me with the opportunity to maintain their memorial site in good condition, despite the distance. I regularly receive reports and am very satisfied with the quality of work. Four stars only because sometimes communication could be faster.",
          date: "October 2023",
        },
      ]);
    } else if (language === "ru") {
      setTestimonials([
        {
          id: 1,
          name: "Анита К.",
          location: "Лиепая",
          rating: 5,
          text: "Я очень довольна услугами SkyGarden. Могила моей мамы всегда в безупречном состоянии, и я спокойна, зная, что о ней тщательно заботятся. Особенно ценю фотоотчеты, которые позволяют мне видеть проделанную работу, так как я живу в другом городе.",
          date: "Март 2024",
        },
        {
          id: 2,
          name: "Янис П.",
          location: "Южнокурземский край",
          rating: 5,
          text: "Команда SkyGarden профессиональна и тщательна. Могила моего отца была в плохом состоянии до их услуг, но теперь она всегда выглядит достойно. Они также помогли восстановить памятник, который был сильно зарос мхом. Рекомендую всем, кто хочет обеспечить надлежащий уход за местами упокоения своих близких.",
          date: "Февраль 2024",
        },
        {
          id: 3,
          name: "Инесе Б.",
          location: "Рига",
          rating: 4,
          text: "Я живу в Риге, а мои бабушка и дедушка похоронены в Южнокурземском крае. SkyGarden предоставляет мне возможность поддерживать их место памяти в хорошем состоянии, несмотря на расстояние. Я регулярно получаю отчеты и очень довольна качеством работы. Четыре звезды только потому, что иногда общение могло бы быть быстрее.",
          date: "Октябрь 2023",
        },
      ]);
    } else if (language === "de") {
      setTestimonials([
        {
          id: 1,
          name: "Anita K.",
          location: "Liepāja",
          rating: 5,
          text: "Ich bin mit den Dienstleistungen von SkyGarden sehr zufrieden. Das Grab meiner Mutter ist immer in einwandfreiem Zustand, und ich bin beruhigt zu wissen, dass es sorgfältig gepflegt wird. Ich schätze besonders die Fotoberichte, die mir ermöglichen, die geleistete Arbeit zu sehen, da ich in einer anderen Stadt lebe.",
          date: "März 2024",
        },
        {
          id: 2,
          name: "Jānis P.",
          location: "Dienvidkurzeme Gemeinde",
          rating: 5,
          text: "Das SkyGarden-Team ist professionell und gründlich. Das Grab meines Vaters war vor ihren Dienstleistungen in einem schlechten Zustand, aber jetzt sieht es immer würdevoll aus. Sie haben auch geholfen, das Denkmal zu restaurieren, das stark mit Moos überwachsen war. Ich empfehle sie jedem, der eine angemessene Pflege für die Ruhestätten seiner Lieben sicherstellen möchte.",
          date: "Februar 2024",
        },
        {
          id: 3,
          name: "Inese B.",
          location: "Riga",
          rating: 4,
          text: "Ich lebe in Riga, aber meine Großeltern sind in Dienvidkurzeme begraben. SkyGarden bietet mir die Möglichkeit, ihre Gedenkstätte trotz der Entfernung in gutem Zustand zu halten. Ich erhalte regelmäßig Berichte und bin mit der Qualität der Arbeit sehr zufrieden. Vier Sterne nur, weil die Kommunikation manchmal schneller sein könnte.",
          date: "Oktober 2023",
        },
      ]);
    }
  }, [language]);

  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Early return if no testimonials
  if (testimonials.length === 0) return null;

  // Caption text based on language
  const caption =
    language === "lv"
      ? "Ko saka mūsu klienti"
      : language === "en"
        ? "What our clients say"
        : language === "ru"
          ? "Что говорят наши клиенты"
          : "Was unsere Kunden sagen";

  // Return stars component
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {caption}
          </h2>
          <div className="w-20 h-1 mx-auto bg-emerald-500"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-10"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    x: index === activeIndex ? 0 : 100,
                    zIndex: index === activeIndex ? 10 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: index === activeIndex ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  {/* Quote icon */}
                  <div className="text-emerald-500 dark:text-emerald-400 mb-6">
                    <svg
                      className="w-10 h-10 opacity-20"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8v6c0 4.4-3.6 8-8 8v-2c3.3 0 6-2.7 6-6v-6h-6v-6h8zm20 0v6c0 4.4-3.6 8-8 8v-2c3.3 0 6-2.7 6-6v-6h-6v-6h8z" />
                    </svg>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">{renderStars(testimonial.rating)}</div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author info */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonial.location}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {testimonial.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === activeIndex
                    ? "bg-emerald-500 dark:bg-emerald-400"
                    : "bg-gray-300 dark:bg-gray-700 hover:bg-emerald-300 dark:hover:bg-emerald-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
