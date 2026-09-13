import { useLanguage } from "../context/LanguageContext";
import useSeo from "../hooks/useSeo";
import company from "../data/company";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import QuoteForm from "../components/contact/QuoteForm";
import SectionTitle from "../components/common/SectionTitle";

export default function Contact() {
  useSeo("contact", "/contact");
  const { t, language } = useLanguage();

  return (
    <>
      <section className="page-header panel-grid">
        <div className="container-rahat">
          <h1>{t.contact.title}</h1>
          <p>{t.contact.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-rahat contact-grid">
          <div className="contact-info">
            <div className="card-rahat mb-4">
              <h3>
                <i className="bi bi-geo-alt" aria-hidden="true"></i> {t.contact.headOfficeTitle}
              </h3>
              <p className="mb-0">{company.addresses.headOffice[language]}</p>
            </div>

            <div className="card-rahat mb-4">
              <h3>
                <i className="bi bi-geo-alt" aria-hidden="true"></i> {t.contact.kandaharTitle}
              </h3>
              <p className="mb-0">{company.addresses.kandahar[language]}</p>
            </div>

            <div className="card-rahat mb-4">
              <h3>
                <i className="bi bi-telephone" aria-hidden="true"></i> {t.contact.phoneTitle}
              </h3>
              <ul className="list-unstyled mb-0 contact-list">
                {company.phones.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:${phone}`} dir="ltr">
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-rahat mb-4">
              <h3>
                <i className="bi bi-whatsapp" aria-hidden="true"></i> {t.contact.whatsappTitle}
              </h3>
              <ul className="list-unstyled mb-0 contact-list">
                {company.whatsappNumbers.map((num) => (
                  <li key={num}>
                    <a href={buildWhatsAppUrl(num)} target="_blank" rel="noopener noreferrer" dir="ltr">
                      {num}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-rahat mb-4">
              <h3>
                <i className="bi bi-envelope" aria-hidden="true"></i> {t.contact.emailTitle}
              </h3>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>

            <div className="card-rahat">
              <h3>
                <i className="bi bi-share" aria-hidden="true"></i> {t.contact.socialTitle}
              </h3>
              <ul className="list-unstyled mb-0 contact-list">
                <li>
                  {company.social.facebookUrl ? (
                    <a href={company.social.facebookUrl} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-facebook" aria-hidden="true"></i> {company.social.facebookName}
                    </a>
                  ) : (
                    <span>
                      <i className="bi bi-facebook" aria-hidden="true"></i> {company.social.facebookName}{" "}
                      <small className="text-muted-custom">({t.contact.facebookNotAvailable})</small>
                    </span>
                  )}
                </li>
                <li>
                  {company.social.tiktokUrl ? (
                    <a href={company.social.tiktokUrl} target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-tiktok" aria-hidden="true"></i> {company.social.tiktokName}
                    </a>
                  ) : (
                    <span>
                      <i className="bi bi-tiktok" aria-hidden="true"></i> {company.social.tiktokName}{" "}
                      <small className="text-muted-custom">({t.contact.tiktokNotAvailable})</small>
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="card-rahat">
              <h3 className="mb-1">{t.contact.formTitle}</h3>
              <p className="text-muted-custom">{t.contact.formSubtitle}</p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container-rahat">
          <SectionTitle title={t.contact.mapTitle} />
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
                alt={t.contact.mapPlaceholderHead} 
                className="map-placeholder"
                style={{ minHeight: "220px", width: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="map-placeholder" style={{ display: 'none' }}>
                <i className="bi bi-map" aria-hidden="true"></i>
                <p>{t.contact.mapPlaceholderHead}</p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80" 
                alt={t.contact.mapPlaceholderKandahar} 
                className="map-placeholder"
                style={{ minHeight: "220px", width: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="map-placeholder" style={{ display: 'none' }}>
                <i className="bi bi-map" aria-hidden="true"></i>
                <p>{t.contact.mapPlaceholderKandahar}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
