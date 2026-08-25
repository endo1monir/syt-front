import "./index.css";

import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import StatsCounter from "./components/StatsCounter/StatsCounter";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Faq from "./components/Faq/Faq";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Services from "./components/Services/Services";


import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // 1. AboutUs pinned while Services sweeps above it (high on Left -> low on Right)
      ScrollTrigger.create({
        trigger: ".about-us",
        start: "top top",
        endTrigger: ".services",
        end: "top top",
        pin: true,
        pinSpacing: false,
      });

      // 2. CaseStudies pinned while FAQ sweeps above it (high on Right -> low on Left)
      ScrollTrigger.create({
        trigger: ".case-studies-section",
        start: "top top",
        endTrigger: ".faq",
        end: "top top",
        pin: true,
        pinSpacing: false,
      });
    },
    { scope: mainRef }
  );

  return (
    <>
      <div className="layout" ref={mainRef}>
        <NavBar />
        <Hero />
        <StatsCounter />

        <div className="about-services-wrapper">
          <AboutUs />
          <Services />
        </div>

        <div className="cases-faq-wrapper">
          <CaseStudies />
          <Faq />
        </div>

        <div
          style={{
            backgroundColor: "var(--secondary-color)",
            padding: "0 15px 30px",
          }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}



export default App;