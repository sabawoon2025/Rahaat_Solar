import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import company from "../data/company";

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Applies unique title + meta description + OG tags + canonical for the
// current page, in the current language. Called once per page component.
export default function useSeo(pageKey, path = "/") {
  const { t, language } = useLanguage();

  useEffect(() => {
    const seo = t.seo[pageKey];
    if (!seo) return;

    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:locale", t.htmlLang);
    setLink("canonical", `https://${company.domain}${path}`);
  }, [pageKey, path, t, language]);
}
