import { useEffect } from "react";
import company from "../data/company";

const SCRIPT_ID = "rahat-solar-structured-data";

// Injects Organization JSON-LD once, using only verified company facts.
// Deliberately omits geo coordinates, opening hours, ratings, reviews,
// and price ranges — none of that information has been supplied, and
// none of it should be invented.
export default function useStructuredData() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: company.nameEn,
      alternateName: company.namePs,
      url: `https://${company.domain}`,
      foundingDate: String(company.foundedYear),
      email: company.email,
      telephone: `+93${company.phones[0].replace(/^0/, "")}`,
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: company.addresses.headOffice.en,
          addressCountry: "AF",
        },
        {
          "@type": "PostalAddress",
          streetAddress: company.addresses.kandahar.en,
          addressCountry: "AF",
        },
      ],
    };

    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }, []);
}
