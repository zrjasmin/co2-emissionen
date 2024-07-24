import React from "react";
import Navbar from "../../components/Nav";
import HeroSectionHome from "../Home/hero";
import Quote from "./quote";
import { Link, animateScroll as scroll } from "react-scroll";
import { t } from "i18next";

const IndexHome = () => {
  return (
    <div className="home">
      <HeroSectionHome page="home">
        <Navbar />
      </HeroSectionHome>

      <div className="page-content">
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
          <Quote></Quote>
        </main>
      </div>
    </div>
  );
};

export default IndexHome;
