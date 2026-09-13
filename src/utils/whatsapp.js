import company from "../data/company";

// Normalizes an Afghan local number (07xxxxxxxx) into international format
// for wa.me links. Adjust here only if the numbering format ever changes.
export function toWhatsAppDigits(localNumber) {
  const digits = localNumber.replace(/\D/g, "");
  const withoutLeadingZero = digits.startsWith("0") ? digits.slice(1) : digits;
  return `93${withoutLeadingZero}`;
}

export function buildWhatsAppUrl(number = company.primaryWhatsAppNumber, message = "") {
  const base = `https://wa.me/${toWhatsAppDigits(number)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function openWhatsApp(number, message) {
  const url = buildWhatsAppUrl(number, message);
  window.open(url, "_blank", "noopener,noreferrer");
}
