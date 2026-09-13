import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

// Bootstrap ships separate LTR/RTL builds. Swapping the <link href> here
// keeps direction control centralized at the document level, matching the
// rest of the RTL/LTR strategy (see LanguageContext).
export default function useBootstrapDirection() {
  const { dir } = useLanguage();

  useEffect(() => {
    const link = document.getElementById("bootstrap-css");
    if (!link) return;
    const href = dir === "rtl" ? "/vendor/bootstrap.rtl.min.css" : "/vendor/bootstrap.min.css";
    if (!link.href.endsWith(href)) link.href = href;
  }, [dir]);
}
