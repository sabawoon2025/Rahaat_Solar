import { useLanguage } from "../../context/LanguageContext";

const ICONS = {
  panel: "bi-grid-3x3-gap",
  inverter: "bi-cpu",
  battery: "bi-battery-full",
  cable: "bi-plug",
  accessory: "bi-tools",
  team: "bi-person",
  office: "bi-building",
  project: "bi-sun",
  hero: "bi-sun",
};

// Attractive, labelled stand-ins for real photography. Once real images
// are supplied, replace usages of this component with <img> tags pointing
// at files under src/assets/images/.
export default function ImagePlaceholder({ type = "project", label, className = "", minHeight }) {
  const { t } = useLanguage();
  const icon = ICONS[type] || ICONS.project;

  return (
    <div
      className={`img-placeholder ${className}`}
      style={minHeight ? { minHeight } : undefined}
      role="img"
      aria-label={label || t.common.imagePlaceholder}
    >
      <i className={`bi ${icon}`} aria-hidden="true"></i>
      <span>{label || t.common.imagePlaceholder}</span>
    </div>
  );
}
