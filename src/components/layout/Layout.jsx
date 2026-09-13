import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";
import ScrollToTop from "../common/ScrollToTop";
import useBootstrapDirection from "../../hooks/useBootstrapDirection";
import useStructuredData from "../../hooks/useStructuredData";

export default function Layout() {
  useBootstrapDirection();
  useStructuredData();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
