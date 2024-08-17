import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.scss";
import Navbar from "../../components/Nav";
import { t } from "i18next";
import { type } from "@testing-library/user-event/dist/type";

// Link innerhalb einer Seite /co2Info#WhatDoesCo2Do'

const HeroSectionEmissionen = ({ children, page }) => {
  return (
    <div className="hero" id={page}>
      {children}
      <div class="hero__overlay"></div>
      <div className="hero__wrapper">
        <h1 className="hero__heading">{t("emissionen.hero-heading")}</h1>

        {/* ändern damit es innerhalb der Seite scrollt*/}
        <Link to="/information">
          <button className="hero__button">Erfahre mehr</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSectionEmissionen;
