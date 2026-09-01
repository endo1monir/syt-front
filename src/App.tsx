import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";

import SeoService from "./pages/Services/SeoService";
import SocialService from "./pages/Services/SocialService";
import CroService from "./pages/Services/CroServices";
import InfluencerServices from "./pages/InfluencerServices/InfluencerServices";
import UiUxServices from "./pages/Services/UiUxServices";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;