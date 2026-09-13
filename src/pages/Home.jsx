import { useLanguage } from "../context/LanguageContext";
import useSeo from "../hooks/useSeo";
import company from "../data/company";
import products from "../data/products";
import services from "../data/services";
import team from "../data/team";
// import projects from "../data/projects"; // Commented out - projects page hidden
import ProductCard from "../components/products/ProductCard";
import ServiceCard from "../components/services/ServiceCard";
// import ProjectCard from "../components/projects/ProjectCard"; // Commented out - projects page hidden
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import heroImage from "../assets/images/FB_IMG_1789237426019.jpg";
import introImage from "../assets/images/FB_IMG_1789237506547.jpg";

const TEAM_ROLE_KEY = {
  engineer: { ps: "انجینر", fa: "انجینر", en: "Engineer" },
  installer: { ps: "د نصب تخنیکر", fa: "تخنیک‌کار نصب", en: "Installation Technician" },
  technician: { ps: "تخنیکر", fa: "تخنیک‌کار", en: "Technician" },
};

export default function Home() {
  useSeo("home", "/");
  const { t, language } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="hero panel-grid">
        <div className="container-rahat hero__inner">
          <div className="hero__content">
            <span className="badge-rahat badge-rahat--on-dark">{t.home.heroEyebrow}</span>
            <h1>{t.home.heroTitle}</h1>
            <p className="hero__slogan">{t.home.heroSlogan}</p>
            <p className="hero__intro">{t.home.heroIntro}</p>
            <div className="hero__ctas">
              <Button to="/contact" variant="primary" icon="bi-chat-dots">
                {t.home.heroCtaPrimary}
              </Button>
              <Button to="/services" variant="outline" icon="bi-arrow-left">
                {t.home.heroCtaSecondary}
              </Button>
            </div>
          </div>
          <div className="hero__media">
            <img 
              src={heroImage} 
              alt={t.home.heroTitle} 
              className="hero__image"
              style={{ minHeight: "280px", width: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.src = heroImage;
              }}
            />
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="section section--alt">
        <div className="container-rahat intro-block">
          <div>
            <SectionTitle title={t.home.introTitle} />
            <p>{t.home.introText}</p>
            <p className="text-muted-custom">
              {t.common.since} {company.foundedYear}
            </p>
          </div>
          <img 
            src={introImage} 
            alt={t.home.introTitle} 
            className="intro-block__image"
            style={{ minHeight: "220px", width: "100%", objectFit: "cover" }}
            onError={(e) => {
              e.target.src = introImage;
            }}
          />
        </div>
      </section>

      {/* Products overview */}
      <section className="section">
        <div className="container-rahat">
          <SectionTitle title={t.home.productsTitle} subtitle={t.home.productsSubtitle} />
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section section--alt">
        <div className="container-rahat">
          <SectionTitle title={t.home.servicesTitle} subtitle={t.home.servicesSubtitle} />
          <div className="row g-4">
            {services.map((service) => (
              <div className="col-12 col-sm-6 col-lg-4" key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rahat Solar */}
      <section className="section section--dark">
        <div className="container-rahat">
          <SectionTitle title={t.home.whyTitle} />
          <div className="row g-4">
            {t.home.whyItems.map((item) => (
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

      {/* Team */}
      <section className="section">
        <div className="container-rahat">
          <SectionTitle title={t.home.teamTitle} subtitle={t.home.teamSubtitle} />
          <div className="row g-4">
            {team.map((member) => (
              <div className="col-12 col-sm-6 col-lg-4" key={member.id}>
                <div className="card-rahat text-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={TEAM_ROLE_KEY[member.roleKey][language]} 
                      className="card-rahat__image mb-3"
                      style={{ minHeight: "180px", width: "100%", objectFit: "cover" }}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'grid';
                      }}
                    />
                  ) : null}
                  <div className="card-rahat__placeholder mb-3" style={{ minHeight: "180px", display: member.image ? 'none' : 'grid' }}>
                    <i className="bi bi-person" aria-hidden="true"></i>
                  </div>
                  <h3 className="mb-0">{TEAM_ROLE_KEY[member.roleKey][language]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview - Commented out - projects page hidden */}
      {/* <section className="section section--alt">
        <div className="container-rahat">
          <SectionTitle title={t.home.projectsTitle} subtitle={t.home.projectsSubtitle} />
          <div className="row g-4">
            {projects.slice(0, 3).map((project) => (
              <div className="col-12 col-sm-6 col-lg-4" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button to="/projects" variant="outline-dark" icon="bi-arrow-left">
              {t.common.viewAllProjects}
            </Button>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="section cta-block">
        <div className="container-rahat cta-block__inner">
          <div>
            <h2>{t.home.ctaTitle}</h2>
            <p>{t.home.ctaText}</p>
          </div>
          <div className="cta-block__actions">
            <Button to="/contact" variant="primary" icon="bi-chat-dots">
              {t.home.ctaButton}
            </Button>
            <Button href={buildWhatsAppUrl(company.primaryWhatsAppNumber)} variant="outline-dark" icon="bi-whatsapp" target="_blank" rel="noopener noreferrer">
              {t.common.whatsappUs}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
