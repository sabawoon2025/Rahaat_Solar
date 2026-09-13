import { useLanguage } from "../context/LanguageContext";
import useSeo from "../hooks/useSeo";
import company from "../data/company";
import SectionTitle from "../components/common/SectionTitle";
import introImage from "../assets/images/FB_IMG_1789237506547.jpg";
import coverageImage from "../assets/images/FB_IMG_1789283542046.jpg";
import teamImage from "../assets/images/FB_IMG_1789237503956 copy.jpg";

export default function About() {
  useSeo("about", "/about");
  const { t } = useLanguage();

  return (
    <>
      <section className="page-header panel-grid">
        <div className="container-rahat">
          <h1>{t.about.title}</h1>
          <p>{t.about.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-rahat intro-block">
          <div>
            <SectionTitle title={t.about.introTitle} />
            <p>{t.about.introText}</p>
          </div>
          <img 
            src={introImage} 
            alt={t.about.introTitle} 
            className="intro-block__image"
            style={{ minHeight: "220px", width: "100%", objectFit: "cover" }}
            onError={(e) => {
              e.target.src = introImage;
            }}
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container-rahat intro-block intro-block--reverse">
          <img 
            src={coverageImage} 
            alt={t.about.coverageTitle} 
            className="intro-block__image"
            style={{ minHeight: "220px", width: "100%", objectFit: "cover" }}
            onError={(e) => {
              e.target.src = coverageImage;
            }}
          />
          <div>
            <SectionTitle title={t.about.coverageTitle} />
            <p>{t.about.coverageText}</p>
            <ul className="list-unstyled coverage-list">
              <li>
                <i className="bi bi-geo-alt" aria-hidden="true"></i> {company.addresses.headOffice[t.htmlLang]}
              </li>
              <li>
                <i className="bi bi-geo-alt" aria-hidden="true"></i> {company.addresses.kandahar[t.htmlLang]}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-rahat intro-block">
          <div>
            <SectionTitle title={t.about.teamTitle} />
            <p>{t.about.teamText}</p>
          </div>
          <img 
            src={teamImage} 
            alt={t.about.teamTitle} 
            className="intro-block__image"
            style={{ minHeight: "220px", width: "100%", objectFit: "cover" }}
            onError={(e) => {
              e.target.src = teamImage;
            }}
          />
        </div>
      </section>

      <section className="section section--dark">
        <div className="container-rahat">
          <SectionTitle title={t.about.strengthsTitle} />
          <div className="row g-4">
            {t.about.strengths.map((item) => (
              <div className="col-12 col-sm-6 col-lg-3" key={item.title}>
                <div className="why-item">
                  <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container-rahat mission-block">
          <h2>{t.about.missionTitle}</h2>
          <p>{t.about.missionText}</p>
        </div>
      </section>
    </>
  );
}
