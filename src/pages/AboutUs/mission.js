import { t } from "i18next";
import React from "react";
import plantImgDesktop from "../../assets/images/plantImg.jpg"
import plantImgMobile from "../../assets/images/plantImg-mobile.jpg"


const OurMission = () => {
    return (
        <div className="mission">
        <img src={plantImgDesktop} alt="Planze wird eingepflanzt" className="mission-img desktop"/>
        <img src={plantImgMobile} alt="Planze wird eingepflanzt" className="mission-img mobile"/>

        <div className="text-container">
            <h2>{t("about-us.mission-heading")}</h2>
            <p>{t("about-us.mission-text")}</p>
        </div>

        </div>
    )

}
export default OurMission;