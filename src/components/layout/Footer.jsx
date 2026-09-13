import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import company from "../../data/company";
import { buildWhatsAppUrl } from "../../utils/whatsapp";

export default function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/products", label: t.nav.products },
    { to: "/services", label: t.nav.services },
    // { to: "/projects", label: t.nav.projects }, // Commented out - projects page hidden
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="site-footer">
      <div className="container-rahat site-footer__grid">
        <div>
          <div className="site-header__logo-text site-footer__brand">
            Rahat Solar
            <small>سولر راحت</small>
          </div>
          <p className="site-footer__slogan">راحت سولر شرکت — د باور وړ سولري انرژۍ ملګری</p>
          <p>{t.footer.about}</p>
        </div>

        <div>
          <h3>{t.footer.quickLinksTitle}</h3>
          <ul className="site-footer__links">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{t.footer.contactTitle}</h3>
          <ul className="site-footer__links">
            <li className="d-flex gap-2">
              <i className="bi bi-geo-alt" aria-hidden="true"></i>
              <span>{company.addresses.headOffice[language]}</span>
            </li>
            <li className="d-flex gap-2">
              <i className="bi bi-geo-alt" aria-hidden="true"></i>
              <span>{company.addresses.kandahar[language]}</span>
            </li>
            {company.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone}`} dir="ltr" className="d-inline-flex gap-2">
                  <i className="bi bi-telephone" aria-hidden="true"></i>
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${company.email}`} className="d-inline-flex gap-2">
                <i className="bi bi-envelope" aria-hidden="true"></i>
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl(company.primaryWhatsAppNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex gap-2"
              >
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
                {t.common.whatsappUs}
              </a>
            </li>
          </ul>

          <div className="site-footer__social">
            {company.social.facebookUrl ? (
              <a href={company.social.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook" aria-hidden="true"></i> {company.social.facebookName}
              </a>
            ) : (
              <span className="text-muted-custom">
                <i className="bi bi-facebook" aria-hidden="true"></i> {company.social.facebookName}
              </span>
            )}
            {company.social.tiktokUrl ? (
              <a href={company.social.tiktokUrl} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="bi bi-tiktok" aria-hidden="true"></i> {company.social.tiktokName}
              </a>
            ) : (
              <span className="text-muted-custom">
                <i className="bi bi-tiktok" aria-hidden="true"></i> {company.social.tiktokName}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container-rahat">
          <span>
            © {year} Rahat Solar Company — {t.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
