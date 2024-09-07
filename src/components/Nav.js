import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

import logo from "../assets/images/ECO.png";
import hamburgermenu from "../assets/images/menu.png";
import closeImg from "../assets/images/close.png";
import { t } from "i18next";

const Navbar = () => {
  let [showNav, setShowNav] = useState("hidden");

  // wechselt zwischen offenen und geschlossenen Menu
  function toggleNavItems() {
    if (showNav === "hidden") {
      setShowNav("visible");
    } else {
      setShowNav("hidden");
    }
  }

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="logo" />
        <p className="logo__name">EcoTransparency</p>
      </div>

      <img
        onClick={toggleNavItems}
        src={hamburgermenu}
        alt="menu"
        className="nav__hamburger"
      />

      <div className={showNav} id="menu">
        <div className="nav__links">
          <img
            src={closeImg}
            onClick={toggleNavItems}
            className="nav__closeImg "
            alt="close"
          />
          <Link to="/" onClick={toggleNavItems}>
            {t("pagenames.home")}
          </Link>
          <Link to="/Emissionen" onClick={toggleNavItems}>
            {t("pagenames.emissions")}
          </Link>
          <Link to="/AboutUs" onClick={toggleNavItems}>
            {t("pagenames.aboutus")}
          </Link>
          <Link to="/Kontakt" onClick={toggleNavItems}>
            {t("pagenames.contact")}
          </Link>
        </div>

        <div className="language-selection-mobile">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="language-selection-desktop">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
