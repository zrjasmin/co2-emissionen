import React from "react";
import { t } from "i18next";

const Footer = () => {
  return (
    <div className="footer grid">
      <div className="footer__grid1">
        <h4>EcoTransparency</h4>
        <a href="#">{t("footer.impressum")}</a>
        <a href="#">{t("footer.data-security")}</a>
      </div>
      <div className="footer__grid2">
        <a href="/">{t("nav.home")}</a>
        <a href="/emissionen">{t("nav.emissions")}</a>
        <a href="/aboutUs">{t("nav.aboutUs")}</a>
        <a href="/contact">{t("nav.contact")}</a>
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
