import React from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";

import serviceMobile from "../assets/images/service-mobile.jpg";
import serviceDesktop from "../assets/images/service-desktop.jpg";

const Contact = () => {
  return (
    <div className="contactForm">
      <div className="contactForm__container">
        <h1>{t("home.contact-heading")}</h1>
        <p>{t("home.contact-text")}</p>
        <button>
          <Link to="/contact">{t("home.contact-btn")}</Link>
        </button>
      </div>

      <img
        src={serviceDesktop}
        className="contactForm__img desktop"
        alt="Bild von einer Frau vor ihren Computer"
      />
    </div>
  );
};

export default Contact;
