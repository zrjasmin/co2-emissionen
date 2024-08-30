import "./styles/styles.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationDE from "./data/languages/german.json";
import translationEN from "./data/languages/english.json";
import translationAR from "./data/languages/arabic.json";

import IndexHome from "./pages/HomePage";
import IndexContact from "./pages/ContactPage";
import IndexEmissionen from "./pages/EmissionenPage";
import IndexAboutUs from "./pages/AboutUsPage";
import Impressum from "./pages/impressum";
import DataSecurity from "./pages/data-security";

const resources = {
  de: {
    translation: translationDE,
  },
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <I18nextProvider i18n={i18next}>
        <div>
          <Routes>
            <Route exact path="/" element={<IndexHome />} />
            <Route path="/Emissionen" element={<IndexEmissionen />} />
            <Route path="/Kontakt" element={<IndexContact />} />
            <Route path="/AboutUs" element={<IndexAboutUs />} />
            <Route path="/Impressum" element={<Impressum />} />
            <Route path="/Datenschutz" element={<DataSecurity />} />
          </Routes>
        </div>
      </I18nextProvider>
    </div>
  );
}

export default App;
