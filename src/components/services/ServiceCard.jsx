import { useLanguage } from "../../context/LanguageContext";

export default function ServiceCard({ service }) {
  const { language } = useLanguage();

  return (
    <div className="card-rahat h-100">
      <div className="card-rahat__icon">
        <i className={`bi ${service.icon}`} aria-hidden="true"></i>
      </div>
      <h3>{service.name[language]}</h3>
      <p className="text-muted-custom mb-0">{service.description[language]}</p>
    </div>
  );
}
