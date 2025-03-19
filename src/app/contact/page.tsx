// app/contact/page.tsx
"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  PhoneIcon,
  EmailIcon,
  MapPinIcon,
  CalendarIcon,
  CheckIcon,
} from "@/components/Icons";

// Language strings for the contact page
const translations = {
  lv: {
    title: "Sazinieties ar mums",
    subtitle: "Esam gatavi atbildēt uz jūsu jautājumiem",
    form: {
      name: "Jūsu vārds",
      email: "E-pasta adrese",
      phone: "Tālrunis",
      service: "Pakalpojums",
      services: {
        regular: "Regulāra kopšana",
        seasonal: "Sezonālie darbi",
        restoration: "Pieminekļu atjaunošana",
        custom: "Individuāls risinājums",
      },
      message: "Jūsu ziņojums",
      send: "Nosūtīt ziņojumu",
      submitted: "Paldies! Jūsu ziņojums ir nosūtīts.",
      error: "Diemžēl notika kļūda. Lūdzu, mēģiniet vēlreiz.",
    },
    contact: {
      title: "Kontaktinformācija",
      schedule: "Darba laiks",
      weekdays: "Pirmdiena - Piektdiena: 9:00 - 18:00",
      weekends: "Sestdiena: 10:00 - 15:00",
      closed: "Svētdiena: Slēgts",
      phone: "Tālrunis",
      email: "E-pasts",
      address: "Adrese",
    },
  },
  en: {
    title: "Contact Us",
    subtitle: "We're ready to answer your questions",
    form: {
      name: "Your name",
      email: "Email address",
      phone: "Phone number",
      service: "Service",
      services: {
        regular: "Regular Maintenance",
        seasonal: "Seasonal Work",
        restoration: "Monument Restoration",
        custom: "Custom Solution",
      },
      message: "Your message",
      send: "Send message",
      submitted: "Thank you! Your message has been sent.",
      error: "Sorry, there was an error. Please try again.",
    },
    contact: {
      title: "Contact Information",
      schedule: "Working Hours",
      weekdays: "Monday - Friday: 9:00 - 18:00",
      weekends: "Saturday: 10:00 - 15:00",
      closed: "Sunday: Closed",
      phone: "Phone",
      email: "Email",
      address: "Address",
    },
  },
  ru: {
    title: "Связаться с нами",
    subtitle: "Мы готовы ответить на ваши вопросы",
    form: {
      name: "Ваше имя",
      email: "Электронная почта",
      phone: "Телефон",
      service: "Услуга",
      services: {
        regular: "Регулярный уход",
        seasonal: "Сезонные работы",
        restoration: "Реставрация памятников",
        custom: "Индивидуальное решение",
      },
      message: "Ваше сообщение",
      send: "Отправить сообщение",
      submitted: "Спасибо! Ваше сообщение отправлено.",
      error: "Извините, произошла ошибка. Пожалуйста, попробуйте еще раз.",
    },
    contact: {
      title: "Контактная информация",
      schedule: "Часы работы",
      weekdays: "Понедельник - Пятница: 9:00 - 18:00",
      weekends: "Суббота: 10:00 - 15:00",
      closed: "Воскресенье: Закрыто",
      phone: "Телефон",
      email: "Email",
      address: "Адрес",
    },
  },
  de: {
    title: "Kontaktieren Sie uns",
    subtitle: "Wir sind bereit, Ihre Fragen zu beantworten",
    form: {
      name: "Ihr Name",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
      service: "Dienstleistung",
      services: {
        regular: "Regelmäßige Pflege",
        seasonal: "Saisonale Arbeiten",
        restoration: "Denkmalrestaurierung",
        custom: "Individuelle Lösung",
      },
      message: "Ihre Nachricht",
      send: "Nachricht senden",
      submitted: "Vielen Dank! Ihre Nachricht wurde gesendet.",
      error:
        "Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    },
    contact: {
      title: "Kontaktinformationen",
      schedule: "Öffnungszeiten",
      weekdays: "Montag - Freitag: 9:00 - 18:00",
      weekends: "Samstag: 10:00 - 15:00",
      closed: "Sonntag: Geschlossen",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
    },
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "submitted" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send this data to your server
      console.log("Form submitted:", formData);
      setFormStatus("submitted");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 lg:col-span-2">
            {formStatus === "submitted" ? (
              <div className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full dark:bg-green-900">
                  <CheckIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {t.form.submitted}
                </h3>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 text-emerald-600 underline hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  {language === "lv" && "Nosūtīt vēl vienu ziņojumu"}
                  {language === "en" && "Send another message"}
                  {language === "ru" && "Отправить еще одно сообщение"}
                  {language === "de" && "Eine weitere Nachricht senden"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {t.form.phone}
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
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t.form.service}
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
                        : language === "ru"
                        ? "Выберите услугу"
                        : language === "de"
                        ? "Wählen Sie einen Dienst"
                        : "Select a service"}
                    </option>
                    <option value="regular">{t.form.services.regular}</option>
                    <option value="seasonal">{t.form.services.seasonal}</option>
                    <option value="restoration">
                      {t.form.services.restoration}
                    </option>
                    <option value="custom">{t.form.services.custom}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full px-6 py-3 text-base font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 disabled:opacity-70"
                >
                  {formStatus === "submitting"
                    ? language === "lv"
                      ? "Nosūta..."
                      : language === "ru"
                      ? "Отправка..."
                      : language === "de"
                      ? "Senden..."
                      : "Sending..."
                    : t.form.send}
                </button>

                {formStatus === "error" && (
                  <div className="p-3 mt-4 text-sm text-red-700 bg-red-100 rounded-md dark:bg-red-900/30 dark:text-red-400">
                    {t.form.error}
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
              {t.contact.title}
            </h2>

            <div className="space-y-6">
              {/* Schedule */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <CalendarIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
                    {t.contact.schedule}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t.contact.weekdays}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t.contact.weekends}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t.contact.closed}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <PhoneIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
                    {t.contact.phone}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    +371 2X XXX XXX
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <EmailIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
                    {t.contact.email}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    info@pieminasrupes.lv
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <MapPinIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
                    {t.contact.address}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Vērgale, Latvija
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
