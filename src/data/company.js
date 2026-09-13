// ─────────────────────────────────────────────────────────────────────────
// CENTRAL COMPANY CONFIGURATION
// Change phone numbers, WhatsApp numbers, email, addresses, domain, and
// social links HERE ONLY. Nothing else in the codebase should hard-code
// these values — components read them from this file.
// ─────────────────────────────────────────────────────────────────────────

const company = {
  nameEn: "Rahat Solar Company",
  namePs: "شرکت سولر راحت",
  domain: "rahatsolar.com",
  foundedYear: 2015,

  phones: ["0700228625", "0706663907", "0784341200"],

  // The number the floating button and the quote form send messages to.
  // Update this single value to change the WhatsApp destination everywhere.
  primaryWhatsAppNumber: "0700228625",
  whatsappNumbers: ["0700228625", "0784341200"],

  email: "rahatsolarcompany@gmail.com",

  addresses: {
    headOffice: {
      ps: "د هلمند ولایت، لښکرګاه ښار، لیسه زکور څلورلاره، د کار او ټولنیزو چارو ریاست مقابل",
      fa: "ولایت هلمند، شهر لشکرگاه، چهارراهی لیسه زکور، مقابل ریاست کار و امور اجتماعی",
      en: "Helmand Province, Lashkar Gah city, Laisa-e-Zukoor Square, opposite the Department of Labor and Social Affairs",
    },
    kandahar: {
      ps: "عینو مینه، کندهار",
      fa: "عینو مینه، قندهار",
      en: "Aino Mina, Kandahar",
    },
  },

  // Map coordinates are intentionally left empty — do not invent them.
  // Once verified, add { lat, lng } or an embed URL here and Contact.jsx
  // will render an interactive map instead of the placeholder.
  maps: {
    headOffice: { embedUrl: "" },
    kandahar: { embedUrl: "" },
  },

  social: {
    facebookName: "راحت سولر شرکت",
    // Verified page URL not yet supplied — leave empty until confirmed.
    facebookUrl: "",
    tiktokName: "ارشاد خان",
    // Verified profile URL not yet supplied — leave empty until confirmed.
    tiktokUrl: "",
  },
};

export default company;
