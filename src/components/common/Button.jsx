import { Link } from "react-router-dom";

/**
 * Shared button. Renders a <Link> for internal routes ("to"), an <a> for
 * external URLs or anchors ("href"), or a <button> otherwise.
 */
export default function Button({
  to,
  href,
  onClick,
  variant = "primary",
  full = false,
  type = "button",
  children,
  className = "",
  icon,
  ...rest
}) {
  const classes = `btn-rahat btn-rahat--${variant} ${full ? "btn-rahat--full" : ""} ${className}`;
  const content = (
    <>
      {icon && <i className={`bi ${icon}`} aria-hidden="true"></i>}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target={rest.target || "_self"} rel={rest.rel} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
