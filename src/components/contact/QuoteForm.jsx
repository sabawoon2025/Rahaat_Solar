import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import provinces from "../../data/provinces";
import company from "../../data/company";
import { buildWhatsAppUrl } from "../../utils/whatsapp";

// STRICT: exactly three user-input fields — Name, Province, Need Type.
// Do not add phone, email, address, budget, or message fields here.
const initialState = { name: "", province: "", needType: "" };

export default function QuoteForm() {
  const { t, language } = useLanguage();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const provinceList = provinces[language];
  const needTypeOptions = t.form.needTypeOptions;

  const handleChange = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = t.form.requiredError;
    if (!values.province) nextErrors.province = t.form.requiredError;
    if (!values.needType) nextErrors.needType = t.form.requiredError;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const message = [
      t.form.whatsappMessageHeader,
      `${t.form.whatsappMessageName}: ${values.name}`,
      `${t.form.whatsappMessageProvince}: ${values.province}`,
      `${t.form.whatsappMessageNeedType}: ${values.needType}`,
    ].join("\n");

    // No backend and no storage — the only side effect is opening WhatsApp
    // with a pre-filled message to the configured primary number.
    window.open(buildWhatsAppUrl(company.primaryWhatsAppNumber, message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setValues(initialState);
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label htmlFor="quote-name" className="form-label">
          {t.form.nameLabel}
        </label>
        <input
          id="quote-name"
          type="text"
          className={`form-control${errors.name ? " is-invalid" : ""}`}
          placeholder={t.form.namePlaceholder}
          value={values.name}
          onChange={handleChange("name")}
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="quote-province" className="form-label">
          {t.form.provinceLabel}
        </label>
        <select
          id="quote-province"
          className={`form-select${errors.province ? " is-invalid" : ""}`}
          value={values.province}
          onChange={handleChange("province")}
          aria-required="true"
          aria-invalid={Boolean(errors.province)}
        >
          <option value="" disabled>
            {t.form.provincePlaceholder}
          </option>
          {provinceList.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.province && <div className="invalid-feedback">{errors.province}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="quote-need" className="form-label">
          {t.form.needTypeLabel}
        </label>
        <select
          id="quote-need"
          className={`form-select${errors.needType ? " is-invalid" : ""}`}
          value={values.needType}
          onChange={handleChange("needType")}
          aria-required="true"
          aria-invalid={Boolean(errors.needType)}
        >
          <option value="" disabled>
            {t.form.needTypePlaceholder}
          </option>
          {needTypeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.needType && <div className="invalid-feedback">{errors.needType}</div>}
      </div>

      {submitted && (
        <div className="alert alert-success d-flex align-items-center gap-2" role="status">
          <i className="bi bi-check-circle" aria-hidden="true"></i>
          <div>
            <strong>{t.form.successTitle}</strong>
            <div>{t.form.successText}</div>
          </div>
        </div>
      )}

      <button type="submit" className="btn-rahat btn-rahat--primary btn-rahat--full">
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
        <span>{t.form.submit}</span>
      </button>
    </form>
  );
}
