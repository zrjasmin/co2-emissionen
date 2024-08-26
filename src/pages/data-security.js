import React from "react";
import Navbar from "../components/Nav";
import HeroSection from "../components/hero";
import { t } from "i18next";
import Footer from "../components/footer";

const DataSecurity = () => {
  return (
    <>
      <HeroSection page="impressum">
        <Navbar />
      </HeroSection>

      <div className="wrapper impressum-text">
        <div>
          <h4>{t("impressum.company-heading")}</h4>
          <p>{t("impressum.straße")}</p>
          <p>{t("impressum.stadt")}</p>
        </div>

        <div>
          <h4>{t("impressum.ceo-heading")}</h4>
          <p>{t("impressum.ceo-1")}</p>
          <p>{t("impressum.ceo-2")}</p>
        </div>

        <div>
          <h4>{t("impressum.contact-heading")}</h4>
          <p>{t("impressum.phone")}</p>
          <p>{t("impressum.e-mail")}</p>
        </div>

        <div>
          <h4>{t("impressum.register-heading")}</h4>
          <p>{t("impressum.register-info")}</p>
        </div>

        <div>
          <h4>{t("impressum.ID-heading")}</h4>
          <p>{t("impressum.ID-info")}</p>
        </div>

        <div>
          <h4>{t("impressum.disclaimer-heading")}</h4>
          <p>{t("impressum.disclaimer")}</p>
        </div>

        <div>
          <h4>{t("impressum.copyright-heading")}</h4>
          <p>{t("impressum.copyright")}</p>
        </div>

        <div>
          <h4>{t("impressum.data-security-heading")}</h4>
          <p>{t("impressum.data-security")}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DataSecurity;
