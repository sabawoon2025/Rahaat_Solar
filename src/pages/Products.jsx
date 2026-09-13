import { useLanguage } from "../context/LanguageContext";
import useSeo from "../hooks/useSeo";
import products from "../data/products";
import ProductCard from "../components/products/ProductCard";

export default function Products() {
  useSeo("products", "/products");
  const { t } = useLanguage();

  return (
    <>
      <section className="page-header panel-grid">
        <div className="container-rahat">
          <h1>{t.products.title}</h1>
          <p>{t.products.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-rahat">
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <p className="text-center text-muted-custom mt-5 mb-0">{t.products.noPrice}</p>
        </div>
      </section>
    </>
  );
}
