import React from "react";
import { t } from "i18next";
import "./css/unsereWerte.css"


import transparenzIMG from "../../assets/images/magnifying-glass.png"
import integritätIMG from "../../assets/images/jigsaw.png"
import innovationIMG from "../../assets/images/innovation.png"

const UnsereWerte = () => {
    return (
        <div className="werte">
            <h2 className="werte-heading">{t("Unser Werte")}</h2>
            <div className="grid">
                 <div className="grid-item">
                    <div className="wert-header">
                        <img src={transparenzIMG} alt="" />
                        <h3>{t("home.Transparenz")}</h3>
                     </div>
                     <p>{t("home.Transparenz-Beschr")}</p>
                </div>
                <div className="grid-item">
                    <div className="wert-header">
                        <img src={integritätIMG} alt="" />
                        <h3>{t("home.Integrität")}</h3>
                     </div>
                     <p>{t("home.Integrität-Beschr")}</p>
                </div>
                <div className="grid-item">
                    <div className="wert-header">
                        <img src={innovationIMG} alt="" />
                        <h3>{t("home.Innovation")}</h3>
                     </div>
                     <p>{t("home.Innovation-Beschr")}</p>
                </div>
            </div>
        </div>
    )
}

export default UnsereWerte;