export default function SectionTitle({ title, subtitle, align = "start", className = "" }) {
  return (
    <div className={`section-heading text-${align} ${align === "center" ? "mx-auto" : ""} ${className}`}>
      <div className={`section-heading__bar ${align === "center" ? "mx-auto" : ""}`}></div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
