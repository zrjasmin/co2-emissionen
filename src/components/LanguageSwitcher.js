import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import globeMobile from "../assets/images/globe-mobile.png";
import globeDesktop from "../assets/images/globe-desktop.png";

import germanFlag from "../assets/images/german.png";
import englandFlag from "../assets/images/united-kingdom.png";
import arabicFlag from "../assets/images/united-arab-emirates.png";
import i18next, { dir } from "i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("DE");
  const [isVisible, setVisibility] = useState(false);

  //wechselt die Sprache
  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);

    //wechselt Ausrichtung LTR oder RTL
    document.body.dir = i18next.dir();

    // zeigt aktuelle Sprache an
    switch (newLanguage) {
      case "de":
        setLanguage("DE");
        break;
      case "en":
        setLanguage("EN");
        break;
      case "ar":
        setLanguage("AR");

        break;
      default:
        setLanguage("Deutsch");
    }
  };

  const toggleLanguageMenu = () => {
    setVisibility(!isVisible);
  };

  return (
    <div className="languageSwitcher">
      {/* zeigt aktuelle Sprache */}
      <div className="activeLanguage" onClick={toggleLanguageMenu}>
        <img
          className="activeLanguage__globeImg mobile"
          src={globeMobile}
          alt="Welt icon"
        />
        <img
          className="activeLanguage__globeImg desktop"
          src={globeDesktop}
          alt="Welt icon"
        />

        <p className="activeLanguage__text">{language}</p>
      </div>

      {/* zeigt alle Sprachoptionen */}

      {isVisible && (
        <div className="options">
          <div
            className="options__language"
            onClick={() => handleLanguageChange("de")}
          >
            <img
              src={germanFlag}
              className="options__flag"
              alt="deutsche Flagge"
            />
            <p>DE Deutsch</p>
          </div>
          <div
            className="options__language"
            onClick={() => handleLanguageChange("en")}
          >
            <img
              value="en"
              src={englandFlag}
              className="options__flag"
              alt="united Kingdom Flagge"
            ></img>
            <p value="en">EN english</p>
          </div>
          <div
            className="options__language"
            onClick={() => handleLanguageChange("ar")}
          >
            <img
              src={arabicFlag}
              className="options__flag"
              alt="Arabische Flagge"
            ></img>
            <p>AR arabic</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
