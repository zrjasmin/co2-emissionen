import React from "react";
import Navbar from "../../components/Nav";

import StackTable from "./tabelle/TanStackTable";
import { Link as ScrollLink, Element } from "react-scroll";
import { t } from "i18next";
import { Link } from "react-router-dom";

import oceanImg from "../../assets/images/emissionen-text-desktop.jpg";
import oceanImgMobile from "../../assets/images/emissionen-text-mobile.jpg";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

const IndexEmissionen = () => {
  return (
    <>
      <div className="hero" id="emissionen">
        <Navbar />
        <div class="hero__overlay"></div>
        <div className="hero__wrapper">
          <h1 className="hero__heading">{t("emissionen.hero-heading")}</h1>

          {/* ändern damit es innerhalb der Seite scrollt*/}
          <Link to="/information">
            <button className="hero__button">Erfahre mehr</button>
          </Link>
        </div>
      </div>

      <div className="pageContent">
        <Sidebar page="emissionen" />

        <main id="main">
          <section className="welcome emissionen-section0">
            <h2 className="welcome__heading">
              {t("emissionen.intro-heading")}
            </h2>
            <p className="welcome__heading">{t("emissionen.intro-text")}</p>
          </section>

          <section className="information info emissionen-section1">
            <div className="info__flex">
              <img src={oceanImg} className="desktop" alt="picture of ocean" />
              <img
                src={oceanImgMobile}
                className="mobile tablet"
                alt="picture of ocean"
              />
            </div>
            <div className="info__aspects emissionen-section2">
              <h4 className="info__heading">{t("emissionen.info1-heading")}</h4>
              <p className="info__text">{t("emissionen.info1-text")}</p>
            </div>
            <div className="info__aspects">
              <h4 className="info__heading">{t("emissionen.info2-heading")}</h4>
              <p className="info__text">{t("emissionen.info2-text")}</p>
            </div>
          </section>

          <section className="table" id="emissionen-section3">
            <StackTable />
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default IndexEmissionen;
