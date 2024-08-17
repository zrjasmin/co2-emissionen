import React from "react";
import Navbar from "../../components/Nav";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import HeroSection from "../../components/hero";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

import { t } from "i18next";

import treeImgMobile from "../../assets/images/tree-img-mobile.jpg";
import treeImgDesktop from "../../assets/images/tree-img-desktop.jpg";
import treeImgTablet from "../../assets/images/tree-img-tablet.jpg";
import tableMockupMobile from "../../assets/images/Table-Mockup-mobile.png";
import tableMockup from "../../assets/images/Table-Mockup-mobile1.png";

const IndexHome = () => {
  return (
    <div className="home">
      <HeroSection page="home">
        <Navbar />
      </HeroSection>

      <div className="pageContent">
        <Sidebar page="home" />

        <main id="main">
          <section className="home-welcome home-section0">
            <h1>{t("home.quote")}</h1>
            <p>{t("home.quote-subtext")}</p>
          </section>

          <section className="mission-snippet home-section1">
            <img
              src={treeImgDesktop}
              className="desktop"
              alt="picture of a tree"
            />
            <img
              src={treeImgMobile}
              className="mobile"
              alt="picture of a tree"
            />

            <img
              src={treeImgTablet}
              className="tablet"
              alt="picture of a tree"
            />
            <div className="mission-snippet__container">
              <h2>{t("home.motivation-heading")}</h2>
              <p>{t("home.motivation-text")}</p>
              <button>
                <Link to="/contact">{t("home.motivation-btn")}</Link>
              </button>
            </div>
          </section>

          <section className="solution solution__grid home-section2">
            <div className="solution__text">
              <h2>{t("home.solution-heading")}</h2>
              <p>{t("home.solution-text")}</p>
              <a href="/emissionen">
                <button>{t("home.solution-btn")}</button>
              </a>
            </div>

            <img src={tableMockup} className="mobile" alt="picture of leaves" />

            <img
              src={tableMockupMobile}
              className="desktop tablet"
              alt="picture of leaves"
            />
          </section>

          <section className="contact home-section3">
            <Contact />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default IndexHome;
