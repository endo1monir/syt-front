import { useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";

import SeoService from "./pages/Services/SeoService";
import SocialService from "./pages/Services/SocialService";
import CroService from "./pages/Services/CroServices";
import InfluencerServices from "./pages/InfluencerServices/InfluencerServices";
import UiUxServices from "./pages/Services/UiUxServices";
import Portfolio from "./pages/Portfolio/Portfolio";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/blog" element={<Blog />} />

      <Route path="/about" element={<About />} />

      <Route path="/portfolio" element={<Portfolio />} />

      <Route
        path="/influencer-services"
        element={<InfluencerServices />}
      />

      {/* Services */}
      <Route
        path="/services/seo"
        element={<SeoService />}
      />

      <Route
        path="/services/social-media"
        element={<SocialService />}
      />

      <Route
        path="/services/cro"
        element={<CroService />}
      />

      <Route
        path="/services/ads"
        element={<CroService />}
      />
      <Route
        path="/services/ui-ux"
        element={<UiUxServices />}
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;