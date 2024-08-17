import React from "react";
import Navbar from "../../components/Nav";
import HeroSectionHome from "../Home/hero";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

import { t } from "i18next";

import treeImgMobile from "../../assets/images/tree-img-mobile.jpg";
import treeImgDesktop from "../../assets/images/tree-img-desktop.jpg";
import treeImgTablet from "../../assets/images/tree-img-tablet.jpg";
import tableMockupMobile from "../../assets/images/Table-Mockup-mobile.png";
import tableMockup from "../../assets/images/Table-Mockup-mobile1.png";

import leafImg from "../../assets/images//leaves-img.jpg";

const IndexHome = () => {
  return (
    <div className="home">
      <HeroSectionHome page="home">
        <Navbar />
      </HeroSectionHome>

      <div className="pageContent">
        <aside className="sidebar">
          <h4 className="sidebar__heading">Auf dieser Seite</h4>
          <ul className="sidebar__list">
            <ScrollLink to="home-welcome" smooth>
              <li className="sidebar__item">{t("home.local-nav.0")}</li>
            </ScrollLink>
            <ScrollLink to="mission-snippet" smooth>
              <li className="sidebar__item">{t("home.local-nav.1")}</li>
            </ScrollLink>
            <ScrollLink to="solution" smooth>
              <li className="sidebar__item">{t("home.local-nav.2")}</li>
            </ScrollLink>
            <ScrollLink to="contact" smooth>
              <li className="sidebar__item">{t("home.local-nav.3")}</li>
            </ScrollLink>
          </ul>
        </aside>

        <main id="main">
          <section className="home-welcome">
            <h1>{t("home.quote")}</h1>
            <p>{t("home.quote-subtext")}</p>

            <div className="gallery">
              {/* <img src={gallery1} alt="Wald" />
             <img src={gallery2} alt="Wald" />
             <img src={gallery3} alt="Wald" />
            <img src={gallery4} alt="Wald" /> */}
            </div>
          </section>

          <section className="mission-snippet">
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

          <section className="solution solution__grid">
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

          <section className="contact">
            <Contact />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default IndexHome;
