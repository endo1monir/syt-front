import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Hero from "../components/Hero/Hero";
import StatsCounter from "../components/StatsCounter/StatsCounter";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Faq from "../components/Faq/Faq";
import BlogSection from "../components/Blog/BlogSection";
import Footer from "../components/Footer/Footer";
import LightNavBar from "../components/NavBar/LightNavBar/LightNavBar";
import AboutUsSection from "../components/AboutUs/AboutUsSection";
import ServicesSection from "../components/Services/ServicesSection";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      ScrollTrigger.normalizeScroll(true);

      ScrollTrigger.create({
        trigger: ".about-us",
        start: "top top",
        endTrigger: ".services",
        end: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });

      ScrollTrigger.create({
        trigger: ".case-studies-section",
        start: "top top",
        endTrigger: ".faq",
        end: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);

      return () => {
        window.removeEventListener("load", onLoad);
        ScrollTrigger.normalizeScroll(false); // 👈 undo it when leaving this page
      };
    },
    { scope: mainRef }
  );

  return (
    <div className="light-theme" ref={mainRef}>
      <LightNavBar />
      <Hero />
      <StatsCounter />

      <div className="about-services-wrapper">
        <AboutUsSection />
        <ServicesSection />
      </div>

      <BlogSection />

      <div className="cases-faq-wrapper">
        <CaseStudies />
        <Faq />
      </div>

      <div
        style={{
          backgroundColor: "var(--secondary-color)",
          paddingBlock: "20px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}