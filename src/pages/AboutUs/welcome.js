import { t } from "i18next";
import React from "react";
import "./aboutUs.css"


const Welcome = () => {
    return (
       <>
        <h2 className="welcome-heading">{t("about-us.welcome-heading")}</h2>
        <p className="welcome-text">{t("about-us.welcome-text")}</p>
       </>
    )

}
export default Welcome;