import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
// import Projects from "./pages/Projects"; // Commented out - projects page hidden
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Six main pages per the SRS, plus a 404 fallback that is not counted
// as a seventh main page. All routes share the persistent Header/Footer/
// WhatsApp button via the Layout route.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/projects" element={<Projects />} /> Commented out - projects page hidden */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
