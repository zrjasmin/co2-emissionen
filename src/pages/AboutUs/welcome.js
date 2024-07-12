import { t } from "i18next";
import React from "react";

const Welcome = () => {
    return (
       <>
        <h1>{t("about-us.welcome-heading")}</h1>
        <p>{t("about-us.welcome-text")}</p>
       </>
    )

}
export default Welcome;