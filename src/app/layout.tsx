// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

// SEO configurations by language (Latvian is default)
const seoConfig = {
  lv: {
    title:
      "SkyGarden | Profesionāli kapu kopšanas pakalpojumi Liepājā un Dienvidkurzemē",
    description:
      "Profesionāli kapu kopšanas, pieminekļu atjaunošanas un sezonālie pakalpojumi Dienvidkurzemes novadā un Liepājā. Rūpējamies par Jūsu tuvinieku piemiņas vietām ar cieņu un augstu kvalitāti.",
    keywords:
      "kapu kopšana, Liepāja, Dienvidkurzeme, pieminekļu atjaunošana, kapu vietas kopšana, kapu kopšanas pakalpojumi, sezonāla kapu kopšana, profesionāla kapu kopšana, kapu labiekārtošana, kapavietu uzkopšana, kapu pieminekļu tīrīšana, kapu pieminekļu restaurācija, regulāra kapu kopšana, vasaras kapu kopšana, rudens kapu kopšana, pavasara kapu kopšana, kapu uzkopšana pirms svētkiem, BUJ par kapu kopšanu, kapu rūpes, kapavietu apzaļumošana, kapu apmales tīrīšana, kapu vietu uzturēšana",
    ogImage:
      "https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743838368/skygarden-og-lv_ssinbk.jpg",
  },
  en: {
    title:
      "SkyGarden | Professional Grave Care Services in Liepaja and Dienvidkurzeme, Latvia",
    description:
      "Professional grave maintenance, monument restoration, and seasonal care services in Dienvidkurzeme region and Liepaja, Latvia. We care for your loved ones' memorial sites with respect and high quality.",
    keywords:
      "grave care services, Liepaja, Dienvidkurzeme, Latvia, monument restoration, memorial maintenance, grave site care, seasonal grave care, professional grave maintenance, cemetery maintenance, grave cleaning, headstone cleaning, grave stone restoration, regular grave maintenance, summer grave care, autumn grave care, spring grave care, grave cleaning services, monument polishing, memorial site landscaping, FAQ grave care, grave borders cleaning, grave maintenance packages, grave site upkeep",
    ogImage: "/images/skygarden-og-en.jpg",
  },
  ru: {
    title:
      "SkyGarden | Профессиональный уход за могилами в Лиепае и Южнокурземском крае",
    description:
      "Профессиональный уход за могилами, реставрация памятников и сезонные услуги в Южнокурземском крае и Лиепае. Мы заботимся о местах памяти ваших близких с уважением и высоким качеством.",
    keywords:
      "уход за могилами, Лиепая, Южнокурземский край, Латвия, реставрация памятников, обслуживание мест захоронения, уход за местами памяти, сезонный уход за могилами, профессиональный уход, чистка могил, регулярный уход за могилами, озеленение могил, услуги по уходу за кладбищем, чистка памятников, восстановление памятников, весенний уход за могилой, летний уход за могилой, осенний уход за могилой, ЧЗВ по уходу за могилами, уборка могил перед праздниками, оформление могил, регулярное обслуживание могил",
    ogImage:
      "https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743838368/skygarden-og-lv_ssinbk.jpg",
  },
  de: {
    title:
      "SkyGarden | Professionelle Grabpflegedienste in Liepaja und Dienvidkurzeme, Lettland",
    description:
      "Professionelle Grabpflege, Denkmalrestaurierung und saisonale Pflegedienste in der Region Dienvidkurzeme und Liepaja, Lettland. Wir kümmern uns mit Respekt und hoher Qualität um die Gedenkstätten Ihrer Lieben.",
    keywords:
      "Grabpflege, Liepaja, Dienvidkurzeme, Lettland, Denkmalrestaurierung, Gedenkstättenpflege, Grabstättenpflege, saisonale Grabpflege, professionelle Grabpflege, Friedhofspflege, Grabsteinreinigung, Grabsteinsanierung, regelmäßige Grabpflege, Sommergrabpflege, Herbstgrabpflege, Frühlingsgrabpflege, Grabsteinerneuerung, Grabgestaltung, Grabeinfassungsreinigung, Grabbepflanzung, FAQ Grabpflege, Dauergrabpflege, Einzelgrabpflege, Grabumfeldpflege",
    ogImage:
      "https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743838368/skygarden-og-lv_ssinbk.jpg",
  },
};

export const metadata: Metadata = {
  title: seoConfig.lv.title,
  description: seoConfig.lv.description,
  keywords: seoConfig.lv.keywords,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://sky-garden.lv"
  ),
  alternates: {
    canonical: "/",
    languages: {
      lv: "/",
      en: "/en",
      ru: "/ru",
      de: "/de",
    },
  },
  openGraph: {
    type: "website",
    locale: "lv_LV",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://sky-garden.lv",
    title: seoConfig.lv.title,
    description: seoConfig.lv.description,
    siteName: "SkyGarden",
    images: [
      {
        url: seoConfig.lv.ogImage,
        width: 1200,
        height: 630,
        alt: "SkyGarden Kapu Kopšana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.lv.title,
    description: seoConfig.lv.description,
    images: [seoConfig.lv.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  applicationName: "SkyGarden",
  authors: [{ name: "SkyGarden" }],
  category: "Memorial Services",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743839329/favicon_oxabom.png"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/dzbnlhbmg/image/upload/v1743839329/favicon_oxabom.png"
        />
        <meta name="geo.region" content="LV" />
        <meta name="geo.placename" content="Liepāja, Dienvidkurzeme" />
        <meta name="geo.position" content="56.6667;21.0667" />
        <meta name="ICBM" content="56.6667, 21.0667" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
        id="main-content"
      >
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow pt-16">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>

        {/* Schema.org JSON-LD structured data for local business */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SkyGarden",
              image: `${process.env.NEXT_PUBLIC_BASE_URL || "https://sky-garden.lv"}/images/skygarden-logo.jpg`,
              "@id": `${process.env.NEXT_PUBLIC_BASE_URL || "https://sky-garden.lv"}#localbusiness`,
              url: process.env.NEXT_PUBLIC_BASE_URL || "https://sky-garden.lv",
              telephone: "+37129183370",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vērgale",
                addressLocality: "Dienvidkurzemes novads",
                addressRegion: "Kurzeme",
                postalCode: "LV-3463",
                addressCountry: "LV",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 56.6667,
                longitude: 21.0667,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Liepāja",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Dienvidkurzemes novads",
                },
              ],
              serviceArea: [
                {
                  "@type": "City",
                  name: "Liepāja",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Dienvidkurzemes novads",
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              availableLanguage: ["lv", "en", "ru", "de"],
              description:
                "Profesionāli kapu kopšanas pakalpojumi Dienvidkurzemes novadā un Liepājā.",
            }),
          }}
        />
      </body>
    </html>
  );
}
