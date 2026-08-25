import "./index.css";

import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import StatsCounter from "./components/StatsCounter/StatsCounter";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Faq from "./components/Faq/Faq";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Services from "./components/Services/Services";


function App() {

  return (
    <>

      <div className="layout">

        <NavBar />

        <Hero />

        <StatsCounter />

        <div className="about-services-wrapper">

          <AboutUs />

          <Services />

        </div>
        <CaseStudies />


        <div
          style={{
            backgroundColor: "var(--primary-color)",
            padding: "30px 15px"
          }}
        >

          <Faq />

          <Footer />

        </div>


      </div>

    </>
  );
}


export default App;