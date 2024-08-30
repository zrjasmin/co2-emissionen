import React from "react";
import HeroSection from "../components/hero";
import Navbar from "../components/Nav";
import Footer from "../components/footer";
import { t } from "i18next";
import teamImg from "../assets/images/teamImg.jpg";

function Contact() {
  return (
    <div className="contactPage">
      <HeroSection page="contact">
        <Navbar />
      </HeroSection>

      <div className="contactPage__grid wrapper">
        <div className="contactInfo">
          <p>{t("contact.info")}</p>
          <h4>{t("contact.ourData")}</h4>
          <ul>
            <li>{t("company-info.company")}</li>
            <li>{t("company-info.adress")}</li>
            <li>{t("company-info.city")}</li>
            <li>{t("company-info.phone")}</li>
            <li>{t("company-info.email")}</li>
          </ul>
        </div>
        <img
          src={teamImg}
          className="desktop"
          alt="mehere Händer die auf einen Baumstamm liegen"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
