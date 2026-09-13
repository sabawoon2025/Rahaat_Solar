import { useLanguage } from "../../context/LanguageContext";
import company from "../../data/company";
import { buildWhatsAppUrl } from "../../utils/whatsapp";

// Floating WhatsApp entry point shown across the site. Reads its number
// from company.primaryWhatsAppNumber — never hard-code a number here.
export default function WhatsAppButton() {
  const { t } = useLanguage();
  const href = buildWhatsAppUrl(company.primaryWhatsAppNumber);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label={t.common.whatsappUs}
      title={t.common.whatsappUs}
    >
      <i className="bi bi-whatsapp" aria-hidden="true"></i>
    </a>
  );
}
