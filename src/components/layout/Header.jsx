import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const LANGUAGE_LABELS = { ps: "پښتو", fa: "دری", en: "English" };

export default function Header() {
  const { t, language, setLanguage, availableLanguages } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: t.nav.home, end: true },
    { to: "/about", label: t.nav.about },
    { to: "/products", label: t.nav.products },
    { to: "/services", label: t.nav.services },
    // { to: "/projects", label: t.nav.projects }, // Commented out - projects page hidden
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="container-rahat site-header__inner">
        <NavLink to="/" className="site-header__logo" onClick={() => setMenuOpen(false)}>
          <span className="site-header__logo-mark" aria-hidden="true">
            <i className="bi bi-sun-fill"></i>
          </span>
          <span className="site-header__logo-text">
            Rahat Solar
            <small>سولر راحت</small>
          </span>
        </NavLink>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} aria-hidden="true"></i>
        </button>

        <nav
          id="primary-navigation"
          className={`site-header__nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="site-header__actions">
            <div className="lang-switch" role="group" aria-label="Language">
              {availableLanguages.map((lng) => (
                <button
                  key={lng}
                  type="button"
                  className={`lang-switch__btn ${language === lng ? "is-active" : ""}`}
                  onClick={() => {
                    setLanguage(lng);
                    setMenuOpen(false);
                  }}
                  aria-pressed={language === lng}
                >
                  {LANGUAGE_LABELS[lng]}
                </button>
              ))}
            </div>
            <NavLink to="/contact" className="btn-rahat btn-rahat--primary" onClick={() => setMenuOpen(false)}>
              <i className="bi bi-chat-dots" aria-hidden="true"></i>
              <span>{t.nav.quoteCta}</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
