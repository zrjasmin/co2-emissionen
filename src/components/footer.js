import React from "react";
import { t } from "i18next";

const Footer = () => {
  return (
    <div className="footer grid">
      <div className="footer__grid1">
        <h4>EcoTransparency</h4>
        <a href="/Impressum">{t("footer.impressum")}</a>
        <a href="/Datenschutz">{t("footer.data-security")}</a>
      </div>
      <div className="footer__grid2">
        <a href="/">{t("nav.home")}</a>
        <a href="/Emissionen">{t("nav.emissions")}</a>
        <a href="/AboutUs">{t("nav.aboutUs")}</a>
        <a href="/Kontakt">{t("nav.contact")}</a>
      </div>
      <div className="footer__grid3">
        <h4>{t("footer.adress")}</h4>
        <p>{t("footer.company")}</p>
        <p>{t("footer.street")} 21</p>
        <p>{t("footer.city")}</p>
        <p>{t("footer.phone")}</p>
      </div>
    </div>
  );
};

export default Footer;
