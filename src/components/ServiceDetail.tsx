"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface ServiceDetailProps {
  serviceId: "regular" | "seasonal" | "restoration" | "custom";
}

export default function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const serviceDetails = t.serviceDetails;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const renderRegularService = () => (
    <div className="space-y-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700"
      >
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {serviceDetails.regular.title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-700 dark:text-gray-300 mb-8"
        >
          {serviceDetails.regular.description}
        </motion.p>

        <motion.h4
          variants={itemVariants}
          className="text-xl font-bold text-gray-900 dark:text-white mb-6"
        >
          {serviceDetails.regular.includes}
        </motion.h4>

        <div className="space-y-8">
          {serviceDetails.regular.services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6"
            >
              <h5 className="font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h5>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600 dark:text-emerald-400" />
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-700 dark:text-gray-300 italic"
        >
          {serviceDetails.regular.note}
        </motion.p>
      </motion.div>
    </div>
  );

  const renderSeasonalService = () => (
    <div className="space-y-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700"
      >
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {serviceDetails.seasonal.title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-700 dark:text-gray-300 mb-8"
        >
          {serviceDetails.seasonal.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {serviceDetails.seasonal.seasons.map((season, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6"
            >
              <h5 className="font-bold text-gray-900 dark:text-white mb-4">
                {season.title}
              </h5>
              <p className="text-gray-700 dark:text-gray-300">
                {season.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floral delivery service */}
        <motion.div
          variants={itemVariants}
          className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-10"
        >
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {t.serviceDetails.additionalServices.floralDelivery.title}
          </h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
            {t.serviceDetails.additionalServices.floralDelivery.description}
          </p>
        </motion.div>

        {/* Removed: Grave decoration for special occasions */}
      </motion.div>
    </div>
  );

  const renderRestorationService = () => (
    <div className="space-y-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700"
      >
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {t.services.restoration.title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-700 dark:text-gray-300 mb-8"
        >
          {t.services.restoration.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 mb-8"
        >
          <p className="text-gray-700 dark:text-gray-300">
            {language === "lv" ? (
              <>
                Piedāvājam profesionālu pieminekļu un kapavietu elementu
                atjaunošanu un tīrīšanu, lai saglabātu to cieņu un skaistumu.
                <br />
                <br />
                Visi darbi tiek veikti uz vietas, un lielākā daļa projektu var
                tikt pabeigta vienas dienas laikā.
                <br />
                <br />
                <strong>Lūdzu ņemiet vērā:</strong> lai gan mēs cenšamies noņemt
                visus netīrumus un nogulsnes no pieminekļa, daži nolietojumi,
                traipi un bojājumi var palikt, īpaši ja piemineklis ir ļoti
                vecs, tas ir slikti uzturēts vai ir izgatavots no īpaši poraina
                akmens.
              </>
            ) : language === "en" ? (
              <>
                We offer professional restoration and cleaning of monuments and
                grave elements to maintain their dignity and beauty.
                <br />
                <br />
                All work is carried out on site, and most projects can be
                completed in one day.
                <br />
                <br />
                <strong>Please note:</strong> whilst we make every endeavour to
                remove all dirt and grime from the headstone, some wear and
                tear, stains and decay may remain, especially if the memorial is
                very old, has been poorly maintained or is constructed of a
                particularly porous stone.
              </>
            ) : language === "ru" ? (
              <>
                Мы предлагаем профессиональную реставрацию и очистку памятников
                и элементов могилы для поддержания их достоинства и красоты.
                <br />
                <br />
                Все работы выполняются на месте, и большинство проектов можно
                завершить за один день.
                <br />
                <br />
                <strong>Обратите внимание:</strong> несмотря на то, что мы
                делаем все возможное, чтобы удалить всю грязь с надгробия,
                некоторые следы износа, пятна и разрушения могут остаться,
                особенно если памятник очень старый, плохо обслуживался или
                изготовлен из особо пористого камня.
              </>
            ) : (
              <>
                Wir bieten professionelle Restaurierung und Reinigung von
                Denkmälern und Grabelementen an, um ihre Würde und Schönheit zu
                erhalten.
                <br />
                <br />
                Alle Arbeiten werden vor Ort durchgeführt, und die meisten
                Projekte können an einem Tag abgeschlossen werden.
                <br />
                <br />
                <strong>Bitte beachten Sie:</strong> Obwohl wir uns bemühen,
                allen Schmutz vom Grabstein zu entfernen, können einige
                Abnutzungen, Flecken und Verfall bestehen bleiben, insbesondere
                wenn das Denkmal sehr alt ist, schlecht gepflegt wurde oder aus
                einem besonders porösen Stein besteht.
              </>
            )}
          </p>
        </motion.div>

        {/* Removed: Additional restoration services */}
      </motion.div>
    </div>
  );

  const renderCustomService = () => (
    <div className="space-y-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700"
      >
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {t.services.custom.title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-700 dark:text-gray-300 mb-8"
        >
          {t.services.custom.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 border border-emerald-100 dark:border-emerald-800/30 mb-8"
        >
          <h5 className="font-bold text-gray-900 dark:text-white mb-4">
            {language === "lv"
              ? "Individuālie risinājumi ietver:"
              : language === "en"
                ? "Custom solutions include:"
                : language === "ru"
                  ? "Индивидуальные решения включают:"
                  : "Individuelle Lösungen umfassen:"}
          </h5>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600 dark:text-emerald-400" />
              <span className="ml-3 text-gray-700 dark:text-gray-300">
                {language === "lv"
                  ? "Īpašas pieprasījumus kapu kopšanā"
                  : language === "en"
                    ? "Special requests in grave care"
                    : language === "ru"
                      ? "Особые запросы по уходу за могилой"
                      : "Besondere Anfragen bei der Grabpflege"}
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600 dark:text-emerald-400" />
              <span className="ml-3 text-gray-700 dark:text-gray-300">
                {language === "lv"
                  ? "Konsultācijas par kapu vietas labiekārtošanu"
                  : language === "en"
                    ? "Consultations on grave site improvement"
                    : language === "ru"
                      ? "Консультации по благоустройству места захоронения"
                      : "Beratungen zur Grabstellenverbesserung"}
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600 dark:text-emerald-400" />
              <span className="ml-3 text-gray-700 dark:text-gray-300">
                {language === "lv"
                  ? "Kapavietas meklēšana un situācijas novērtējums"
                  : language === "en"
                    ? "Grave site location and situation assessment"
                    : language === "ru"
                      ? "Поиск могилы и оценка ситуации"
                      : "Grabstellenortung und Situationsbewertung"}
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600 dark:text-emerald-400" />
              <span className="ml-3 text-gray-700 dark:text-gray-300">
                {language === "lv"
                  ? "Individuāli kopšanas grafiki un risinājumi"
                  : language === "en"
                    ? "Individual maintenance schedules and solutions"
                    : language === "ru"
                      ? "Индивидуальные графики обслуживания и решения"
                      : "Individuelle Wartungspläne und Lösungen"}
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 w-5 h-5 mt-1 text-emerald-600 dark:text-emerald-400" />
              <span className="ml-3 text-gray-700 dark:text-gray-300">
                {language === "lv"
                  ? "Personalizēts serviss atbilstoši jūsu vēlmēm"
                  : language === "en"
                    ? "Personalized service according to your wishes"
                    : language === "ru"
                      ? "Персонализированный сервис в соответствии с вашими пожеланиями"
                      : "Personalisierter Service nach Ihren Wünschen"}
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Removed: Month's Mind Service section */}

        <motion.div
          variants={itemVariants}
          className="mt-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-700 dark:text-gray-300">
            {language === "lv"
              ? "Lai uzzinātu vairāk par mūsu individuālajiem risinājumiem un to, kā tie var atbilst jūsu specifiskajām vajadzībām, lūdzu, sazinieties ar mums personīgai konsultācijai."
              : language === "en"
                ? "To learn more about our custom solutions and how they can meet your specific needs, please contact us for a personal consultation."
                : language === "ru"
                  ? "Чтобы узнать больше о наших индивидуальных решениях и о том, как они могут соответствовать вашим конкретным потребностям, пожалуйста, свяжитесь с нами для личной консультации."
                  : "Um mehr über unsere individuellen Lösungen zu erfahren und wie sie Ihren spezifischen Bedürfnissen entsprechen können, kontaktieren Sie uns bitte für eine persönliche Beratung."}
          </p>
        </motion.div>

        {/* Removed: Payment information */}
      </motion.div>
    </div>
  );

  // Render the appropriate service detail based on the serviceId
  switch (serviceId) {
    case "regular":
      return renderRegularService();
    case "seasonal":
      return renderSeasonalService();
    case "restoration":
      return renderRestorationService();
    case "custom":
      return renderCustomService();
    default:
      return null;
  }
}
