import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.scss";
import Navbar from "../../components/Nav";
import { t } from "i18next";
import { type } from "@testing-library/user-event/dist/type";

const HeroSectionAboutUs = ({ children, page }) => {
  return (
    <div className="hero-section" id={page}>
      {children}
      <div class="hero-overlay"></div>
      <div className="wrapper">
        <h1 className="hero-heading">{t("about-us.hero-heading")}</h1>

        {/* ändern damit es innerhalb der Seite scrollt*/}
        <Link to="/contact">
          <button className="hero-button">Erfahre mehr</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSectionAboutUs;
