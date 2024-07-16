import { t } from "i18next";
import React from "react";

const OurValues = () => {
    return (
        <div className="value-section">
            <h2>{t("about-us.values-heading")}</h2>
            <div className="v-grid values">
                <div className="card">
                    <h4>{t("about-us.values1-heading")}</h4>
                    <p>{t("about-us.values1-text")}</p>
                </div>
                <div className="card">
                    <h4>{t("about-us.values2-heading")}</h4>
                    <p>{t("about-us.values2-text")}</p>
                </div>
                <div className="card">
                    <h4>{t("about-us.values3-heading")}</h4>
                    <p>{t("about-us.values3-text")}</p>
                </div>
                <div className="card">
                    <h4>{t("about-us.values4-heading")}</h4>
                    <p>{t("about-us.values4-text")}</p>
                </div>
            </div>
        </div>
    )

}
export default OurValues;