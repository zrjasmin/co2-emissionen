import React from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";

const HeroSection = ({ children, page }) => {
  return (
    <div className="hero" id={page}>
      {children}

      <div class="hero__overlay"></div>
      <div className="hero__wrapper">
        <h1 className="hero__heading">{t(page + ".hero-heading")}</h1>

        {/* ändern damit es innerhalb der Seite scrollt*/}
        <Link to="/contact">
          <button className="hero__button">Erfahre mehr</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
