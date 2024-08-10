import "./styles/styles.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider, useTranslation } from "react-i18next";

import i18next, { changeLanguage, dir } from "i18next";
import { initReactI18next } from "react-i18next";
import translationDE from "./data/languages/german.json";
import translationEN from "./data/languages/english.json";
import translationAR from "./data/languages/arabic.json";

import Navbar from "./components/Nav";
import IndexHome from "./pages/Home/indexHome";
import IndexContact from "./pages/Contact/indexContact";
import IndexEmissionen from "./pages/Emissionen/indexEmissionen";
import IndexAboutUs from "./pages/AboutUs/indexAboutUs";

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
  const [direction, setDirection] = React.useState("");

  return (
    <div className="App">
      <I18nextProvider i18n={i18next}>
        <div>
          <Routes>
            <Route exact path="/" element={<IndexHome />} />
            <Route path="/emissionen" element={<IndexEmissionen />} />
            <Route path="/contact" element={<IndexContact />} />
            <Route path="/aboutUs" element={<IndexAboutUs />} />
          </Routes>
        </div>
      </I18nextProvider>
    </div>
  );
}

export default App;
