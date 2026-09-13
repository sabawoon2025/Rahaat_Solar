import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function ProductCard({ product }) {
  const { t, language } = useLanguage();

  return (
    <div className="card-rahat h-100 d-flex flex-column">
      {product.image ? (
        <img 
          src={product.image} 
          alt={product.name[language]} 
          className="card-rahat__image mb-3"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'grid';
          }}
        />
      ) : null}
      <div className="card-rahat__icon mb-3" style={{ display: product.image ? 'none' : 'grid' }}>
        <i className={`bi ${product.icon}`} aria-hidden="true"></i>
      </div>
      <h3>{product.name[language]}</h3>
      <p className="text-muted-custom flex-grow-1">{product.description[language]}</p>
      <Link to="/contact" className="btn-rahat btn-rahat--outline-dark mt-2">
        <i className="bi bi-chat-dots" aria-hidden="true"></i>
        <span>{t.common.contactForPrice}</span>
      </Link>
    </div>
  );
}
