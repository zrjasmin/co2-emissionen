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
