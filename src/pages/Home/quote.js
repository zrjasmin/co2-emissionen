import { t } from "i18next";
import React from "react";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";

const Quote = () => {
  return (
    <>
      <h1>{t("home.quote")}</h1>
      <p>{t("home.quote-subtext")}</p>

      <div className="gallery">
        <img src={gallery1} alt="Wald" />
        <img src={gallery2} alt="Wald" />
        <img src={gallery3} alt="Wald" />
        <img src={gallery4} alt="Wald" />
      </div>
    </>
  );
};

export default Quote;
