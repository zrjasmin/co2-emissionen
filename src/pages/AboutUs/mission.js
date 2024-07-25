import { t } from "i18next";
import React from "react";
import plantImgDesktop from "../../assets/images/plantImg.jpg";
import plantImgMobile from "../../assets/images/plantImg-mobile.jpg";

const OurMission = () => {
  return (
    <div className="mission">
      <img
        src={plantImgDesktop}
        alt="Planze wird eingepflanzt"
        className="mission__img desktop"
      />
      <img
        src={plantImgMobile}
        alt="Planze wird eingepflanzt"
        className="mission__img mobile"
      />

      <div className="mission__textContainer">
        <h2>{t("about-us.mission-heading")}</h2>
        <p>{t("about-us.mission-text")}</p>
      </div>
    </div>
  );
};
export default OurMission;
