import React from "react";
import Navbar from "../components/Nav";
import HeroSection from "../components/hero";
import { t } from "i18next";
import Footer from "../components/footer";

const DataSecurity = () => {
  return (
    <>
      <HeroSection page="data-security">
        <Navbar />
      </HeroSection>

      <div className="wrapper impressum-text">
        <div>
          <h4>{t("data-security.introduction-heading")}</h4>
          <p>{t("data-security.introduction")}</p>
        </div>

        <div>
          <h4>{t("data-security.responsibility-heading")}</h4>
          <p>{t("data-security.responsibility-info")}</p>
          <p>{t("company-info.company")}</p>
          <p>{t("company-info.adress")}</p>
          <p>{t("company-info.city")}</p>
          <p>{t("company-info.email")}</p>
        </div>

        <div>
          <h4>{t("data-security.persona-heading")}</h4>
          <p>{t("data-security.persona-info")}</p>
          <ul>
            <li>{t("data-security.persona-list.0")}</li>
            <li>{t("data-security.persona-list.1")}</li>
            <li>{t("data-security.persona-list.2")}</li>
            <li>{t("data-security.persona-list.3")}</li>
          </ul>
          <p>{t("data-security.persona-info2")}</p>
        </div>

        <div>
          <h4>{t("data-security.data-security-heading")}</h4>
          <p>{t("data-security.data-security-info")}</p>
          <ul>
            <li>{t("data-security.data-security-list.0")}</li>
            <li>{t("data-security.data-security-list.1")}</li>
            <li>{t("data-security.data-security-list.2")}</li>
          </ul>
        </div>

        <div>
          <h4>{t("data-security.data-publishment-heading")}</h4>
          <p>{t("data-security.data-publishment-info")}</p>
        </div>

        <div>
          <h4>{t("data-security.cookies-heading")}</h4>
          <p>{t("data-security.cookies-info")}</p>
        </div>

        <div>
          <h4>{t("data-security.yourRights-heading")}</h4>
          <p>{t("data-security.yourRights-info")}</p>
          <ul>
            <li>{t("data-security.yourRights-list.0")}</li>
            <li>{t("data-security.yourRights-list.1")}</li>
            <li>{t("data-security.yourRights-list.2")}</li>
            <li>{t("data-security.yourRights-list.3")}</li>
            <li>{t("data-security.yourRights-list.4")}</li>
          </ul>
        </div>

        <div>
          <h4>{t("data-security.changes-heading")}</h4>
          <p>{t("data-security.changes-info")}</p>
        </div>
        <div>
          <h4>{t("data-security.kontakt-heading")}</h4>
          <p>{t("data-security.kontakt-info")}</p>
          <p>{t("company-info.email")}</p>
          <p>{t("company-info.phone")}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DataSecurity;
