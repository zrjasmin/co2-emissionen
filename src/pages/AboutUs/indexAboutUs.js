import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { t } from "i18next";

import HeroSectionAboutUs from "./hero";
import Navbar from "../../components/Nav";
import Welcome from "./welcome";
import OurMission from "./mission";
import OurValues from "./value";

import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

const IndexAboutUs = () => {
  return (
    <>
      <HeroSectionAboutUs page="aboutUs">
        <Navbar />
      </HeroSectionAboutUs>

      <div className="pageContent">
        <Sidebar page="aboutUs" />

        <main id="main">
          <section className="Welcome-Section aboutUs-section0">
            <Welcome />
          </section>
          <section className="OurMission aboutUs-section1">
            <OurMission />
          </section>
          <section className="OurValues aboutUs-section2">
            <OurValues />
          </section>
          <section className="Contact aboutUs-section3">
            <Contact />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default IndexAboutUs;
