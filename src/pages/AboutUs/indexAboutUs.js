import React from "react";
import { t } from "i18next";

import HeroSection from "../../components/hero";
import Navbar from "../../components/Nav";

import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

import plantImgDesktop from "../../assets/images/plantImg.jpg";
import plantImgMobile from "../../assets/images/plantImg-mobile.jpg";

const IndexAboutUs = () => {
  return (
    <>
      <HeroSection page="about-us">
        <Navbar />
      </HeroSection>

      <div className="pageContent">
        <Sidebar page="about-us" />

        <main id="main">
          {/* Welcom Section */}
          <section className="welcome about-us-section0">
            <h2 className="welcome__heading">
              {t("about-us.welcome-heading")}
            </h2>
            <p className="welcome__text">{t("about-us.welcome-text")}</p>
          </section>

          {/* Unser Mission Section */}
          <section className="mission about-us-section1">
            <img
              src={plantImgDesktop}
              alt="Planze wird eingepflanzt"
              className="mission__img desktop"
            />
            <img
              src={plantImgMobile}
              alt="Planze wird eingepflanzt"
              className="mission__img mobile"
            />

            <div className="mission__textContainer">
              <h2>{t("about-us.mission-heading")}</h2>
              <p>{t("about-us.mission-text")}</p>
            </div>
          </section>

          {/* Unsere Werte Section */}
          <section className="value about-us-section2">
            <h2 className="value__heading">{t("about-us.values-heading")}</h2>
            <div className="value__grid">
              <div className="value__card">
                <h4>{t("about-us.values1-heading")}</h4>
                <p>{t("about-us.values1-text")}</p>
              </div>
              <div className="value__card">
                <h4>{t("about-us.values2-heading")}</h4>
                <p>{t("about-us.values2-text")}</p>
              </div>
              <div className="value__card">
                <h4>{t("about-us.values3-heading")}</h4>
                <p>{t("about-us.values3-text")}</p>
              </div>
              <div className="value__card">
                <h4>{t("about-us.values4-heading")}</h4>
                <p>{t("about-us.values4-text")}</p>
              </div>
            </div>
          </section>

          {/* Kontakt Section */}
          <section className="contact about-us-section3">
            <Contact />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default IndexAboutUs;
