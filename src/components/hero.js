import React from "react";
import { t } from "i18next";
import { animateScroll, Link as ScrollLink } from "react-scroll";

const HeroSection = ({ children, page }) => {
  const scrollTo = () => {
    animateScroll.scrollTo(500);
  };

  return (
    <div className="hero" id={page}>
      {children}

      <div class="hero__overlay"></div>
      <div className="hero__wrapper">
        <h1 className="hero__heading">{t(page + ".hero-heading")}</h1>

        {/* ändern damit es innerhalb der Seite scrollt*/}
        <ScrollLink>
          <button className="hero__button" onClick={scrollTo}>
            {t("explore-more")}
          </button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default HeroSection;
