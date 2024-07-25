import { t } from "i18next";
import React from "react";

const Welcome = () => {
  return (
    <>
      <h2 className="welcome__heading">{t("about-us.welcome-heading")}</h2>
      <p className="welcome__text">{t("about-us.welcome-text")}</p>
    </>
  );
};
export default Welcome;
