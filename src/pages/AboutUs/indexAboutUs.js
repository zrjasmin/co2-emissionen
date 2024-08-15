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

const IndexAboutUs = () => {
  return (
    <>
      <HeroSectionAboutUs page="aboutUs">
        <Navbar />
      </HeroSectionAboutUs>

      <div className="pageContent">
        <aside className="sidebar">
          <h4 className="sidebar__heading">Auf dieser Seite</h4>
          <ul className="sidebar__list">
            <ScrollLink to="Welcome-Section" smooth duration={500}>
              <li className="sidebar__item">{t("about-us.local-nav.0")}</li>
            </ScrollLink>
            <ScrollLink to="OurMission" smooth duration={500}>
              <li className="sidebar__item">{t("about-us.local-nav.1")}</li>
            </ScrollLink>
            <ScrollLink to="OurValues" smooth duration={500}>
              <li className="sidebar__item">{t("about-us.local-nav.2")}</li>
            </ScrollLink>
            <ScrollLink to="Contact" smooth duration={500}>
              <li className="sidebar__item">{t("about-us.local-nav.3")}</li>
            </ScrollLink>
          </ul>
        </aside>

        <main id="main">
          <section className="Welcome-Section">
            <Welcome />
          </section>
          <section className="OurMission">
            <OurMission />
          </section>
          <section className="OurValues">
            <OurValues />
          </section>
          <section className="Contact">
            <Contact />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default IndexAboutUs;
