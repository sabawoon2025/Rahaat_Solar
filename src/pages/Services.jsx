import { useLanguage } from "../context/LanguageContext";
import useSeo from "../hooks/useSeo";
import services from "../data/services";
import ServiceCard from "../components/services/ServiceCard";
import Button from "../components/common/Button";

export default function Services() {
  useSeo("services", "/services");
  const { t } = useLanguage();

  return (
    <>
      <section className="page-header panel-grid">
        <div className="container-rahat">
          <h1>{t.services.title}</h1>
          <p>{t.services.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-rahat">
          <div className="row g-4">
            {services.map((service) => (
              <div className="col-12 col-sm-6 col-lg-4" key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Button to="/contact" variant="primary" icon="bi-chat-dots">
              {t.nav.quoteCta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
