import React from "react";
import Navbar from "../../components/Nav";
import HeroSectionEmissionen from "./hero";
import WelcomeSection from "./welcome";

import StackTable from "./tabelle/TanStackTable";
import { Link as ScrollLink } from "react-scroll";
import { t } from "i18next";

import oceanImg from "../../assets/images/emissionen-text-desktop.jpg";
import oceanImgMobile from "../../assets/images/emissionen-text-mobile.jpg";
import Footer from "../../components/footer";

const IndexEmissionen = () => {
  return (
    <>
      <HeroSectionEmissionen page="emissionen">
        <Navbar />
      </HeroSectionEmissionen>

      <div className="pageContent">
        <aside className="sidebar">
          <h4 className="sidebar__heading">Auf dieser Seite</h4>
          <ul className="sidebar__list">
            <ScrollLink to="welcome" smooth>
              <li className="sidebar__item">{t("emissionen.local-nav.0")}</li>
            </ScrollLink>
            <ScrollLink to="information" smooth>
              <li className="sidebar__item">{t("emissionen.local-nav.1")}</li>
            </ScrollLink>
            <ScrollLink to="table" smooth>
              <li className="sidebar__item">{t("emissionen.local-nav.2")}</li>
            </ScrollLink>
          </ul>
        </aside>

        <main id="main">
          <section className="welcome">
            <h2 className="welcome__heading">
              {t("emissionen.intro-heading")}
            </h2>
            <p className="welcome__heading">{t("emissionen.intro-text")}</p>
          </section>

          <section className="information">
            <div className="info__flex">
              <img src={oceanImg} className="desktop" alt="picture of ocean" />
              <img
                src={oceanImgMobile}
                className="mobile"
                alt="picture of ocean"
              />
            </div>
            <div className="info__aspects">
              <h4 className="info__heading">{t("emissionen.info1-heading")}</h4>
              <p className="info__text">{t("emissionen.info1-text")}</p>
            </div>
            <div className="info__aspects">
              <h4 className="info__heading">{t("emissionen.info2-heading")}</h4>
              <p className="info__text">{t("emissionen.info2-text")}</p>
            </div>
          </section>

          <section className="table">
            <StackTable />
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default IndexEmissionen;
