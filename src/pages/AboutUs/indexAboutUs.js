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
            <Link to="section1">
              <li className="sidebar__item">{t("home.local-nav.0")}</li>
            </Link>
            <Link to="section2">
              <li className="sidebar__item">{t("home.local-nav.1")}</li>
            </Link>
            <Link to="section3">
              <li className="sidebar__item">{t("home.local-nav.2")}</li>
            </Link>
            <Link to="section2">
              <li className="sidebar__item">{t("home.local-nav.3")}</li>
            </Link>
          </ul>
        </aside>

        <main id="main">
          <Welcome />
          <OurMission />
          <OurValues />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default IndexAboutUs;
