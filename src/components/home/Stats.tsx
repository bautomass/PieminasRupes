// components/home/Stats.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Counter from "@/components/ui/Counter";
import Section from "@/components/ui/Section";

export default function Stats() {
  const { language } = useLanguage();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: 5,
      label:
        language === "lv"
          ? "Gadu pieredze"
          : language === "en"
          ? "Years Experience"
          : language === "ru"
          ? "Лет опыта"
          : "Jahre Erfahrung",
    },
    {
      value: 200,
      label:
        language === "lv"
          ? "Apmierināti klienti"
          : language === "en"
          ? "Satisfied Clients"
          : language === "ru"
          ? "Довольных клиентов"
          : "Zufriedene Kunden",
    },
    {
      value: 300,
      label:
        language === "lv"
          ? "Koptas vietas"
          : language === "en"
          ? "Graves Maintained"
          : language === "ru"
          ? "Обслуживаемых могил"
          : "Gepflegte Gräber",
    },
    {
      value: 15,
      label:
        language === "lv"
          ? "Profesionāļi komandā"
          : language === "en"
          ? "Professionals"
          : language === "ru"
          ? "Профессионалов"
          : "Fachleute",
    },
  ];

  return (
    <Section ref={sectionRef} bgColor="primary" className="py-16 md:py-20">
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="text-4xl font-bold mb-2">
              {inView ? (
                <>
                  <Counter from={0} to={stat.value} duration={2.5} />
                  <span>+</span>
                </>
              ) : (
                "0+"
              )}
            </div>
            <div className="text-emerald-100 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
