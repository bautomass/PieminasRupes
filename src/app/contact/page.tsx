"use client";

import { useState, useCallback, memo } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import {
  PhoneIcon,
  EmailIcon,
  MapPinIcon,
  CalendarIcon,
  CheckIcon,
} from "@/components/Icons";
import { motion } from "framer-motion";

// Define proper TypeScript interfaces
interface TranslationsType {
  memorial: {
    serviceAreas: string[];
    [key: string]: any;
  };
  [key: string]: any;
}

interface ContactInfoProps {
  t: TranslationsType;
  language: string;
}

interface SuccessMessageProps {
  language: string;
  resetForm: () => void;
}

// Animation presets
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

// Memoized contact info component for better performance
const ContactInfo = memo(({ t, language }: ContactInfoProps) => (
  <motion.div
    className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    initial="hidden"
    animate="visible"
    variants={fadeInRight}
  >
    <h2 className="mb-6 text-xl font-serif font-bold text-gray-900 dark:text-white">
      {language === "lv"
        ? "Kontaktinformācija"
        : language === "en"
          ? "Contact Information"
          : language === "ru"
            ? "Контактная информация"
            : "Kontaktinformationen"}
    </h2>

    <div className="space-y-6">
      {/* Schedule */}
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          <div
            className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30"
            aria-hidden="true"
          >
            <CalendarIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
            {language === "lv"
              ? "Darba laiks"
              : language === "en"
                ? "Working Hours"
                : language === "ru"
                  ? "Часы работы"
                  : "Öffnungszeiten"}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {language === "lv"
              ? "Pirmdiena - Piektdiena: 9:00 - 18:00"
              : language === "en"
                ? "Monday - Friday: 9:00 - 18:00"
                : language === "ru"
                  ? "Понедельник - Пятница: 9:00 - 18:00"
                  : "Montag - Freitag: 9:00 - 18:00"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {language === "lv"
              ? "Sestdiena: 10:00 - 15:00"
              : language === "en"
                ? "Saturday: 10:00 - 15:00"
                : language === "ru"
                  ? "Суббота: 10:00 - 15:00"
                  : "Samstag: 10:00 - 15:00"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {language === "lv"
              ? "Svētdiena: Slēgts"
              : language === "en"
                ? "Sunday: Closed"
                : language === "ru"
                  ? "Воскресенье: Закрыто"
                  : "Sonntag: Geschlossen"}
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          <div
            className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30"
            aria-hidden="true"
          >
            <PhoneIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
            {language === "lv"
              ? "Tālrunis"
              : language === "en"
                ? "Phone"
                : language === "ru"
                  ? "Телефон"
                  : "Telefon"}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <a
              href="tel:+37121234567"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              aria-label={
                language === "lv"
                  ? "Zvanīt uz tālruni"
                  : language === "en"
                    ? "Call phone number"
                    : language === "ru"
                      ? "Позвонить"
                      : "Telefonieren"
              }
            >
              +371 29183370
            </a>
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          <div
            className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30"
            aria-hidden="true"
          >
            <EmailIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
            {language === "lv"
              ? "E-pasts"
              : language === "en"
                ? "Email"
                : language === "ru"
                  ? "Email"
                  : "E-Mail"}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <a
              href="mailto:skygarden.lv@gmail.com"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              aria-label={
                language === "lv"
                  ? "Sūtīt e-pastu"
                  : language === "en"
                    ? "Send email"
                    : language === "ru"
                      ? "Отправить email"
                      : "E-Mail senden"
              }
            >
              skygarden.lv@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Service Areas */}
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          <div
            className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30"
            aria-hidden="true"
          >
            <MapPinIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
            {language === "lv"
              ? "Apkalpojamās teritorijas"
              : language === "en"
                ? "Service Areas"
                : language === "ru"
                  ? "Зоны обслуживания"
                  : "Servicegebiete"}
          </h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            {t.memorial.serviceAreas.map((area: string, index: number) => (
              <li key={index} className="flex items-center">
                <CheckIcon
                  className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mr-2"
                  aria-hidden="true"
                />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Map of service areas */}
    <div className="mt-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="relative h-48 w-full">
        <Image
          src="https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743267561/dienvidkurzemes-nodavads_ety6zn.jpg"
          alt={
            language === "lv"
              ? "Karte ar SkyGarden apkalpojamām teritorijām Latvijā"
              : language === "en"
                ? "Map of SkyGarden service areas in Latvia"
                : language === "ru"
                  ? "Карта зон обслуживания SkyGarden в Латвии"
                  : "Karte der SkyGarden Servicegebiete in Lettland"
          }
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </motion.div>
));

ContactInfo.displayName = "ContactInfo";

// Success message component
const SuccessMessage = memo(({ language, resetForm }: SuccessMessageProps) => (
  <div className="p-6 text-center">
    <div
      className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full dark:bg-green-900"
      aria-hidden="true"
    >
      <CheckIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
      {language === "lv"
        ? "Paldies! Jūsu ziņojums ir nosūtīts."
        : language === "en"
          ? "Thank you! Your message has been sent."
          : language === "ru"
            ? "Спасибо! Ваше сообщение отправлено."
            : "Vielen Dank! Ihre Nachricht wurde gesendet."}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      {language === "lv"
        ? "Mēs ar jums sazināsimies pēc iespējas ātrāk."
        : language === "en"
          ? "We will contact you as soon as possible."
          : language === "ru"
            ? "Мы свяжемся с вами как можно скорее."
            : "Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen."}
    </p>
    <button
      onClick={resetForm}
      className="mt-4 text-emerald-600 underline hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
    >
      {language === "lv" && "Nosūtīt vēl vienu ziņojumu"}
      {language === "en" && "Send another message"}
      {language === "ru" && "Отправить еще одно сообщение"}
      {language === "de" && "Eine weitere Nachricht senden"}
    </button>
  </div>
));

SuccessMessage.displayName = "SuccessMessage";

// Define form data interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  deceasedName: string;
  cemeteryName: string;
  deathDate: string;
  additionalInfo: string;
  message: string;
}

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[
    language as keyof typeof translations
  ] as TranslationsType;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    deceasedName: "",
    cemeteryName: "",
    deathDate: "",
    additionalInfo: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "submitted" | "error"
  >("idle");

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  // Optimize form handling with useCallback
  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear validation error when user types
      if (validationErrors[name]) {
        setValidationErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    },
    [validationErrors]
  );

  const validateForm = useCallback(() => {
    const errors: Record<string, string> = {};

    // Required fields validation
    if (!formData.name.trim()) {
      errors.name =
        language === "lv"
          ? "Lūdzu, ievadiet savu vārdu"
          : language === "en"
            ? "Please enter your name"
            : language === "ru"
              ? "Пожалуйста, введите ваше имя"
              : "Bitte geben Sie Ihren Namen ein";
    }

    if (!formData.email.trim()) {
      errors.email =
        language === "lv"
          ? "Lūdzu, ievadiet e-pastu"
          : language === "en"
            ? "Please enter your email"
            : language === "ru"
              ? "Пожалуйста, введите вашу электронную почту"
              : "Bitte geben Sie Ihre E-Mail-Adresse ein";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email =
        language === "lv"
          ? "Lūdzu, ievadiet derīgu e-pasta adresi"
          : language === "en"
            ? "Please enter a valid email address"
            : language === "ru"
              ? "Пожалуйста, введите действительный адрес электронной почты"
              : "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }

    if (!formData.message.trim()) {
      errors.message =
        language === "lv"
          ? "Lūdzu, ievadiet ziņojumu"
          : language === "en"
            ? "Please enter your message"
            : language === "ru"
              ? "Пожалуйста, введите ваше сообщение"
              : "Bitte geben Sie Ihre Nachricht ein";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData, language]);

  const resetForm = useCallback(() => {
    setFormStatus("idle");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      deceasedName: "",
      cemeteryName: "",
      deathDate: "",
      additionalInfo: "",
      message: "",
    });
    setValidationErrors({});
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setFormStatus("submitting");

      try {
        // Call our API endpoint
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language,
            formData,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setFormStatus("submitted");
        } else {
          console.error("Form submission error:", result.error);
          setFormStatus("error");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setFormStatus("error");
      }
    },
    [formData, validateForm, language]
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-16 md:py-24 px-4">
        <motion.div
          className="max-w-3xl mx-auto mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <motion.h1
            className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white"
            variants={fadeInUp}
          >
            {t.cta.title}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            variants={fadeInUp}
          >
            {t.cta.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <motion.div
            className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 lg:col-span-2"
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
          >
            {formStatus === "submitted" ? (
              <SuccessMessage language={language} resetForm={resetForm} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                    {language === "lv"
                      ? "Sazināties ar mums"
                      : language === "en"
                        ? "Contact us"
                        : language === "ru"
                          ? "Связаться с нами"
                          : "Kontaktieren Sie uns"}
                  </h2>
                  <p className="mb-6 text-gray-600 dark:text-gray-300">
                    {language === "lv"
                      ? "Aizpildiet šo formu, lai sazinātos ar mums par mūsu pakalpojumiem."
                      : language === "en"
                        ? "Fill out this form to contact us regarding our services."
                        : language === "ru"
                          ? "Заполните эту форму, чтобы связаться с нами по поводу наших услуг."
                          : "Füllen Sie dieses Formular aus, um uns bezüglich unserer Dienstleistungen zu kontaktieren."}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {language === "lv"
                        ? "Jūsu vārds"
                        : language === "en"
                          ? "Your name"
                          : language === "ru"
                            ? "Ваше имя"
                            : "Ihr Name"}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!validationErrors.name}
                      aria-describedby={
                        validationErrors.name ? "name-error" : undefined
                      }
                      className={`w-full px-4 py-3 text-gray-900 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 ${
                        validationErrors.name
                          ? "border-red-500 dark:border-red-400"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                    />
                    {validationErrors.name && (
                      <p
                        id="name-error"
                        className="mt-1 text-sm text-red-600 dark:text-red-400"
                      >
                        {validationErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {language === "lv"
                        ? "E-pasts"
                        : language === "en"
                          ? "Email"
                          : language === "ru"
                            ? "Электронная почта"
                            : "E-Mail"}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!validationErrors.email}
                      aria-describedby={
                        validationErrors.email ? "email-error" : undefined
                      }
                      className={`w-full px-4 py-3 text-gray-900 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 ${
                        validationErrors.email
                          ? "border-red-500 dark:border-red-400"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                    />
                    {validationErrors.email && (
                      <p
                        id="email-error"
                        className="mt-1 text-sm text-red-600 dark:text-red-400"
                      >
                        {validationErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Rest of the form remains the same */}
                {/* ... */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {language === "lv"
                        ? "Tālrunis"
                        : language === "en"
                          ? "Phone"
                          : language === "ru"
                            ? "Телефон"
                            : "Telefon"}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {language === "lv"
                        ? "Pakalpojums"
                        : language === "en"
                          ? "Service"
                          : language === "ru"
                            ? "Услуга"
                            : "Dienstleistung"}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    >
                      <option value="">
                        {language === "lv"
                          ? "Izvēlieties pakalpojumu"
                          : language === "en"
                            ? "Select a service"
                            : language === "ru"
                              ? "Выберите услугу"
                              : "Wählen Sie einen Dienst"}
                      </option>
                      <option value="regular">
                        {language === "lv"
                          ? "Regulāra kopšana"
                          : language === "en"
                            ? "Regular Maintenance"
                            : language === "ru"
                              ? "Регулярный уход"
                              : "Regelmäßige Pflege"}
                      </option>
                      <option value="seasonal">
                        {language === "lv"
                          ? "Sezonālie darbi"
                          : language === "en"
                            ? "Seasonal Work"
                            : language === "ru"
                              ? "Сезонные работы"
                              : "Saisonale Arbeiten"}
                      </option>
                      <option value="restoration">
                        {language === "lv"
                          ? "Pieminekļu atjaunošana"
                          : language === "en"
                            ? "Monument Restoration"
                            : language === "ru"
                              ? "Реставрация памятников"
                              : "Denkmalrestaurierung"}
                      </option>
                      <option value="custom">
                        {language === "lv"
                          ? "Individuāli risinājumi"
                          : language === "en"
                            ? "Custom Solutions"
                            : language === "ru"
                              ? "Индивидуальные решения"
                              : "Individuelle Lösungen"}
                      </option>
                      <option value="graveSearch">
                        {language === "lv"
                          ? "Kapavietas meklēšana"
                          : language === "en"
                            ? "Grave Site Location"
                            : language === "ru"
                              ? "Поиск могилы"
                              : "Grabstellenortung"}
                      </option>
                    </select>
                  </div>
                </div>

                <fieldset className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <legend className="text-lg font-medium text-gray-900 dark:text-white px-2">
                    {language === "lv"
                      ? "Informācija par kapavietu"
                      : language === "en"
                        ? "Grave site information"
                        : language === "ru"
                          ? "Информация о месте захоронения"
                          : "Informationen zur Grabstätte"}
                  </legend>

                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="deceasedName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {language === "lv"
                          ? "Apbedītās personas vārds un uzvārds"
                          : language === "en"
                            ? "Deceased person's full name"
                            : language === "ru"
                              ? "Полное имя усопшего"
                              : "Vollständiger Name des Verstorbenen"}
                      </label>
                      <input
                        type="text"
                        id="deceasedName"
                        name="deceasedName"
                        value={formData.deceasedName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                    <div>
                      <label
                        htmlFor="cemeteryName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {language === "lv"
                          ? "Kapsētas nosaukums"
                          : language === "en"
                            ? "Cemetery name"
                            : language === "ru"
                              ? "Название кладбища"
                              : "Name des Friedhofs"}
                      </label>
                      <input
                        type="text"
                        id="cemeteryName"
                        name="cemeteryName"
                        value={formData.cemeteryName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="deathDate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {language === "lv"
                          ? "Miršanas datums"
                          : language === "en"
                            ? "Date of death"
                            : language === "ru"
                              ? "Дата смерти"
                              : "Sterbedatum"}
                      </label>
                      <input
                        type="text"
                        id="deathDate"
                        name="deathDate"
                        value={formData.deathDate}
                        onChange={handleChange}
                        placeholder={
                          language === "lv"
                            ? "gads/datums"
                            : language === "en"
                              ? "year/date"
                              : language === "ru"
                                ? "год/дата"
                                : "Jahr/Datum"
                        }
                        className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="additionalInfo"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {language === "lv"
                        ? "Papildu informācija (ja zināma)"
                        : language === "en"
                          ? "Additional information (if known)"
                          : language === "ru"
                            ? "Дополнительная информация (если известно)"
                            : "Zusätzliche Informationen (falls bekannt)"}
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder={
                        language === "lv"
                          ? "Vietas/rindas numurs, pieminekļa apraksts, utt."
                          : language === "en"
                            ? "Plot/row number, monument description, etc."
                            : language === "ru"
                              ? "Номер участка/ряда, описание памятника и т.д."
                              : "Parzellen-/Reihennummer, Denkmalsbeschreibung usw."
                      }
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    ></textarea>
                  </div>
                </fieldset>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {language === "lv"
                      ? "Jūsu ziņojums"
                      : language === "en"
                        ? "Your message"
                        : language === "ru"
                          ? "Ваше сообщение"
                          : "Ihre Nachricht"}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={!!validationErrors.message}
                    aria-describedby={
                      validationErrors.message ? "message-error" : undefined
                    }
                    className={`w-full px-4 py-3 text-gray-900 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 ${
                      validationErrors.message
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  ></textarea>
                  {validationErrors.message && (
                    <p
                      id="message-error"
                      className="mt-1 text-sm text-red-600 dark:text-red-400"
                    >
                      {validationErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 dark:hover:bg-emerald-600 disabled:opacity-70 transition-colors"
                  aria-busy={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? (
                    <span className="inline-flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {language === "lv"
                        ? "Nosūta..."
                        : language === "en"
                          ? "Sending..."
                          : language === "ru"
                            ? "Отправка..."
                            : "Senden..."}
                    </span>
                  ) : language === "lv" ? (
                    "Nosūtīt ziņojumu"
                  ) : language === "en" ? (
                    "Send message"
                  ) : language === "ru" ? (
                    "Отправить сообщение"
                  ) : (
                    "Nachricht senden"
                  )}
                </button>

                {formStatus === "error" && (
                  <div
                    className="p-3 mt-4 text-sm text-red-700 bg-red-100 rounded-md dark:bg-red-900/30 dark:text-red-400"
                    role="alert"
                  >
                    {language === "lv"
                      ? "Diemžēl notika kļūda. Lūdzu, mēģiniet vēlreiz."
                      : language === "en"
                        ? "Sorry, there was an error. Please try again."
                        : language === "ru"
                          ? "Извините, произошла ошибка. Пожалуйста, попробуйте еще раз."
                          : "Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."}
                  </div>
                )}
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <ContactInfo t={t} language={language} />
        </div>
      </div>
    </div>
  );
}
