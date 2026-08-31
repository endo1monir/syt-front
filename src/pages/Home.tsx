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
    <div
      className="light-theme"
      ref={mainRef}
    >

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
          paddingBlock: "20px"
        }}
      >
        <Footer />
      </div>


    </div>
  );
}
