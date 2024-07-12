import { t } from "i18next";
import React from "react";
import plantImg from "../../assets/images/plantImg.jpg"

const OurMission = () => {
    return (
        <>
        <img src={plantImg} alt="Planze wird eingepflanzt" />
        <div className="text-container">
            <h1>{t("about-us.mission-heading")}</h1>
            <p>{t("about-us.mission-text")}</p>
        </div>

        </>
    )

}
export default OurMission;