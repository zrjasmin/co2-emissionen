import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { t } from "i18next";

import HeroSectionAboutUs from "./hero";
import Navbar from "../../components/Nav";
import Welcome from "./welcome";
import OurMission from "./mission";
import OurValues from "./value";

import Contact from "../../components/contact";

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
            <Link to="Welcome-Section" smooth duration={500}>
              <li className="sidebar__item">{t("home.local-nav.0")}</li>
            </Link>
            <Link to="OurMission" smooth duration={500}>
              <li className="sidebar__item">{t("home.local-nav.1")}</li>
            </Link>
            <Link to="OurValues" smooth duration={500}>
              <li className="sidebar__item">{t("home.local-nav.2")}</li>
            </Link>
            <Link to="Contact" smooth duration={500}>
              <li className="sidebar__item">{t("home.local-nav.3")}</li>
            </Link>
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
    </>
  );
};

export default IndexAboutUs;
