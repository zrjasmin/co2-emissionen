import React, { useEffect } from "react";
import { t } from "i18next";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer grid">
      <div className="footer__grid1">
        <h4>EcoTransparency</h4>
        <Link to="/Impressum">{t("footer.impressum")}</Link>
        <Link to="/Datenschutz" scrollTo="top">
          {t("footer.data-security")}
        </Link>
      </div>
      <div className="footer__grid2">
        <Link to="/" scroll="top">
          {t("nav.home")}
        </Link>
        <Link to="/Emissionen">{t("nav.emissions")}</Link>
        <Link to="/AboutUs">{t("nav.aboutUs")}</Link>
        <Link to="/Kontakt">{t("nav.contact")}</Link>
      </div>
      <div className="footer__grid3">
        <h4>{t("footer.adress-heading")}</h4>
        <p>{t("company-info.company")}</p>
        <p>{t("company-info.street")} 21</p>
        <p>{t("company-info.city")}</p>
        <p>{t("company-info.phone")}</p>
      </div>
    </div>
  );
};

export default Footer;
