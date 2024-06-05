import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css"

import globe from "../assets/images/globe.png"

import germanFlag from "../assets/images/german.png";
import englandFlag from "../assets/images/united-kingdom.png";
import arabicFlag from "../assets/images/united-arab-emirates.png";

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const [language, setLanguage] = useState("DE");
    const [visibility, setVisibility] = useState("langHidden");
    let changingVisiblity = {visibility}; 
    



    //wechselt die Sprache 
    const handleLanguageChange = (newLanguage) => {
        i18n.changeLanguage(newLanguage);

        // zeigt aktuelle Sprache an
        switch (newLanguage) {
            case "de":
                setLanguage("DE");
              break;
            case "en": 
                setLanguage("EN");
            break;
            case "ar": 
                setLanguage("AR");
            break;
            default:
                setLanguage("Deutsch");

        }
    };

    const toggleLanguageMenu = () => {
        const selectedLang = document.getElementsByClassName("selected-language");

        if(visibility === "langHidden") {
            setVisibility("langVisible");
            changingVisiblity = {visibility}; 
        } else {
            setVisibility("langHidden");
            changingVisiblity = {visibility}; 

        }
        
    }


    
    return(
        <div className="LanguageSwitcher">

            {/* zeigt aktuelle Sprache */}
            <div className="selected-language" onClick={toggleLanguageMenu}>
                <img className="globe-icon" src={globe} alt="Welt icon"/>
                <p className="current-language">{language}</p>

            </div>

            {/* zeigt alle Sprachoptionen */}
            <div className={visibility} id="options">
                <div className="language" onClick={() => handleLanguageChange("de")}>
                    <img  src={germanFlag} className="flag" alt="deutsche Flagge"/>
                    <p>DE Deutsch</p>
                </div>
                <div className="language" onClick={() => handleLanguageChange("en")}>
                    <img  value="en" src={englandFlag} className="flag" alt="united Kingdom Flagge"></img>
                    <p value="en">EN english</p>
                </div>
                <div className="language" onClick={() => handleLanguageChange("ar")}>
                    <img src={arabicFlag} className="flag" alt="Arabische Flagge"></img>
                     <p>AR arabic</p>
                 </div>
                
            </div>
            

            
        </div>
    )
}

export default LanguageSwitcher;