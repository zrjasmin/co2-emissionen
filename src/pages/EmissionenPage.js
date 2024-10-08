import React from "react";
import Navbar from "../components/Nav";
import HeroSection from "../components/hero";
import StackTable from "./tabelle/TanStackTable";
import { t } from "i18next";
import i18next from "i18next";

import oceanImg from "../assets/images/emissionen-text-desktop.jpg";
import oceanImgMobile from "../assets/images/emissionen-text-mobile.jpg";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

const EmissionenPage = () => {
  return (
    <>
      <HeroSection page="emissionen">
        <Navbar />
      </HeroSection>

      <div className="pageContent">
        <Sidebar page="emissionen" />

        <main id="main">
          {/* Wilkommen Section */}
          <section className="welcome emissionen-section0">
            <h2 className="welcome__heading">
              {t("emissionen.intro-heading")}
            </h2>
            <p className="welcome__heading">{t("emissionen.intro-text")}</p>
          </section>

          {/* Informationen Section */}
          <section className="information info info__flex emissionen-section1">
            <div className="info__imgContainer">
              <img src={oceanImg} className="desktop" alt="picture of ocean" />
              <img
                src={oceanImgMobile}
                className="mobile tablet"
                alt="picture of ocean"
              />
            </div>
            <div className="info__textContainer">
              <div className="info__aspects emissionen-section2">
                <h4 className="info__heading">
                  {t("emissionen.info1-heading")}
                </h4>
                <p className="info__text">{t("emissionen.info1-text")}</p>
              </div>
              <div className="info__aspects">
                <h4 className="info__heading">
                  {t("emissionen.info2-heading")}
                </h4>
                <p className="info__text">{t("emissionen.info2-text")}</p>
              </div>
            </div>
          </section>

          {/* Tabelle */}
          <section className="table" id="emissionen-section3">
            <StackTable />
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default EmissionenPage;
