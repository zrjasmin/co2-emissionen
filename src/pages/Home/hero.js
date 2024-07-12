import React from "react";
import {Link} from 'react-router-dom';
import "./css/hero.css"
import "../../App.css"
import Navbar from "../../components/Nav";
import { t } from "i18next";
import { type } from "@testing-library/user-event/dist/type";
import Quote from "./quote";




const HeroSectionHome = ({children, page}) => {
    return(
        <div className="hero-section" id={page} >
          {children}
          <div class="hero-overlay"></div>
          <div className="wrapper">
            <h1 className="hero-heading">{t("home.hero-heading")}</h1>


            {/* ändern damit es innerhalb der Seite scrollt*/}
             <Link to="/contact">  
               <button className="hero-button">
                {t("home.hero-btn")}
               
               </button>
              </Link>
            </div>
            
        
        </div>

    )
}

export default HeroSectionHome;