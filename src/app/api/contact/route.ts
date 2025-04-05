import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email template function
function createEmailTemplate(data: any, language: string) {
  // Format date for email
  const formattedDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Get service name based on value and language
  const getServiceName = (serviceValue: string, lang: string) => {
    const services: Record<string, Record<string, string>> = {
      regular: {
        lv: "Regulāra kopšana",
        en: "Regular Maintenance",
        ru: "Регулярный уход",
        de: "Regelmäßige Pflege",
      },
      seasonal: {
        lv: "Sezonālie darbi",
        en: "Seasonal Work",
        ru: "Сезонные работы",
        de: "Saisonale Arbeiten",
      },
      restoration: {
        lv: "Pieminekļu atjaunošana",
        en: "Monument Restoration",
        ru: "Реставрация памятников",
        de: "Denkmalrestaurierung",
      },
      custom: {
        lv: "Individuāli risinājumi",
        en: "Custom Solutions",
        ru: "Индивидуальные решения",
        de: "Individuelle Lösungen",
      },
      graveSearch: {
        lv: "Kapavietas meklēšana",
        en: "Grave Site Location",
        ru: "Поиск могилы",
        de: "Grabstellenortung",
      },
    };

    return serviceValue && services[serviceValue]
      ? services[serviceValue][lang] || serviceValue
      : "-";
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .header {
          background-color: #10b981;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          padding: 20px;
          border: 1px solid #ddd;
          border-top: none;
          border-radius: 0 0 5px 5px;
        }
        .section {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        .section-title {
          font-weight: bold;
          margin-bottom: 8px;
          color: #10b981;
        }
        .footer {
          font-size: 12px;
          color: #777;
          text-align: center;
          margin-top: 20px;
        }
        .field {
          margin-bottom: 10px;
        }
        .field-label {
          font-weight: bold;
        }
        .timestamp {
          color: #777;
          font-size: 14px;
          font-style: italic;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>SkyGarden</h1>
        <p>${language === "lv" ? "Jauns pieprasījums" : language === "ru" ? "Новый запрос" : language === "de" ? "Neue Anfrage" : "New Inquiry"}</p>
      </div>
      <div class="content">
        <p class="timestamp">${formattedDate}</p>
        
        <div class="section">
          <div class="section-title">${language === "lv" ? "Kontaktinformācija" : language === "ru" ? "Контактная информация" : language === "de" ? "Kontaktinformationen" : "Contact Information"}</div>
          <div class="field">
            <span class="field-label">${language === "lv" ? "Vārds" : language === "ru" ? "Имя" : language === "de" ? "Name" : "Name"}:</span> ${data.name}
          </div>
          <div class="field">
            <span class="field-label">Email:</span> ${data.email}
          </div>
          <div class="field">
            <span class="field-label">${language === "lv" ? "Tālrunis" : language === "ru" ? "Телефон" : language === "de" ? "Telefon" : "Phone"}:</span> ${data.phone || "-"}
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">${language === "lv" ? "Pieprasījuma informācija" : language === "ru" ? "Информация о запросе" : language === "de" ? "Anfrageinformationen" : "Request Information"}</div>
          <div class="field">
            <span class="field-label">${language === "lv" ? "Pakalpojums" : language === "ru" ? "Услуга" : language === "de" ? "Dienstleistung" : "Service"}:</span> ${getServiceName(data.service, language)}
          </div>
          <div class="field">
            <span class="field-label">${language === "lv" ? "Ziņojums" : language === "ru" ? "Сообщение" : language === "de" ? "Nachricht" : "Message"}:</span> 
            <p>${data.message}</p>
          </div>
        </div>
        
        ${
          data.deceasedName ||
          data.cemeteryName ||
          data.deathDate ||
          data.additionalInfo
            ? `
        <div class="section">
          <div class="section-title">${language === "lv" ? "Informācija par kapavietu" : language === "ru" ? "Информация о месте захоронения" : language === "de" ? "Informationen zur Grabstätte" : "Grave Site Information"}</div>
          ${
            data.deceasedName
              ? `
          <div class="field">
            <span class="field-label">${language === "lv" ? "Apbedītās personas vārds" : language === "ru" ? "Имя усопшего" : language === "de" ? "Name des Verstorbenen" : "Deceased Name"}:</span> ${data.deceasedName}
          </div>`
              : ""
          }
          ${
            data.cemeteryName
              ? `
          <div class="field">
            <span class="field-label">${language === "lv" ? "Kapsētas nosaukums" : language === "ru" ? "Название кладбища" : language === "de" ? "Name des Friedhofs" : "Cemetery Name"}:</span> ${data.cemeteryName}
          </div>`
              : ""
          }
          ${
            data.deathDate
              ? `
          <div class="field">
            <span class="field-label">${language === "lv" ? "Miršanas datums" : language === "ru" ? "Дата смерти" : language === "de" ? "Sterbedatum" : "Date of Death"}:</span> ${data.deathDate}
          </div>`
              : ""
          }
          ${
            data.additionalInfo
              ? `
          <div class="field">
            <span class="field-label">${language === "lv" ? "Papildu informācija" : language === "ru" ? "Дополнительная информация" : language === "de" ? "Zusätzliche Informationen" : "Additional Information"}:</span>
            <p>${data.additionalInfo}</p>
          </div>`
              : ""
          }
        </div>`
            : ""
        }
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} SkyGarden</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    // Parse JSON from the request body
    const data = await request.json();

    // Extract language and form data
    const { language, formData } = data;

    // Configure Nodemailer SMTP transporter with sandbox credentials
    const transporter = nodemailer.createTransport({
      host: "smtp.mailgun.org",
      port: 587, // Recommended by Mailgun
      secure: false, // true for 465, false for other ports
      auth: {
        user: "postmaster@sandbox606d133528724a13b4d3fe51f66cb13a.mailgun.org",
        pass: process.env.MAILGUN_SMTP_PASSWORD, // You'll set this in .env.local
      },
    });

    // Set up email options
    const mailOptions = {
      from: `"SkyGarden" <postmaster@sandbox606d133528724a13b4d3fe51f66cb13a.mailgun.org>`,
      to: "skygarden.lv@gmail.com",
      subject:
        language === "lv"
          ? "Jauns pieprasījums no SkyGarden kontaktformas"
          : language === "ru"
            ? "Новый запрос с контактной формы SkyGarden"
            : language === "de"
              ? "Neue Anfrage vom SkyGarden Kontaktformular"
              : "New inquiry from SkyGarden contact form",
      html: createEmailTemplate(formData, language),
      replyTo: formData.email,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
