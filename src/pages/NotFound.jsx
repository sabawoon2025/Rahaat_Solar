import { useLanguage } from "../context/LanguageContext";
import Button from "../components/common/Button";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="section not-found">
      <div className="container-rahat text-center">
        <i className="bi bi-signpost-split" aria-hidden="true"></i>
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.text}</p>
        <Button to="/" variant="primary" icon="bi-house">
          {t.notFound.backHome}
        </Button>
      </div>
    </section>
  );
}
