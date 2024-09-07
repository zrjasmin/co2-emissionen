import React from "react";
import { t } from "i18next";
import { Link as ScrollLink, Element, scroller } from "react-scroll";
import lang from "../data/languages/german.json";

const Sidebar = ({ page }) => {
  // laden der verschiedenen Inhalte
  let homeLinks = lang.home["local-nav"];
  let aboutUsLinks = lang["about-us"]["local-nav"];
  let emissionenLinks = lang.emissionen["local-nav"];

  return (
    <div className="sidebar">
      <h4 className="sidebar__heading">{t("on-this-page")}</h4>
      <ul className="sidebar__list">
        {/* laden der verschieden Inhalte abhängig von der Seite */}
        {page === "emissionen"
          ? emissionenLinks.map((item) => {
              return (
                <ScrollLink
                  to={page + "-section" + emissionenLinks.indexOf(item)}
                  smooth
                >
                  <li className="sidebar__item">
                    {t(page + ".local-nav." + emissionenLinks.indexOf(item))}
                  </li>
                </ScrollLink>
              );
            })
          : null}
        {page === "home"
          ? homeLinks.map((item) => {
              return (
                <ScrollLink
                  to={page + "-section" + homeLinks.indexOf(item)}
                  smooth
                >
                  <li className="sidebar__item">
                    {t(page + ".local-nav." + homeLinks.indexOf(item))}
                  </li>
                </ScrollLink>
              );
            })
          : null}
        {page === "about-us"
          ? aboutUsLinks.map((item) => {
              return (
                <ScrollLink
                  to={page + "-section" + aboutUsLinks.indexOf(item)}
                  smooth
                >
                  <li className="sidebar__item">
                    {t(page + ".local-nav." + aboutUsLinks.indexOf(item))}
                  </li>
                </ScrollLink>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Sidebar;
