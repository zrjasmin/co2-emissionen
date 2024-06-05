import { t } from "i18next";
import React from "react";
import "./css/willkommen.css"

const WilkommenSection = () => {
    return(
        <div className="willkommenSection">
            <h2 className="willkommen-heading">{t("home.Wilkommen Heading")}</h2>
            <p className="willkommen-text">{t("home.Wilkommen text")}</p>
        </div>
    )
}

export default WilkommenSection;