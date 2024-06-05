import React from "react";
import {Link} from 'react-router-dom';
import "./css/hero.css"
import "../../App.css"
import Navbar from "../../components/Nav";
import { t } from "i18next";
import { type } from "@testing-library/user-event/dist/type";




const HeroSectionHome = ({children, page}) => {
    return(
        <div className="hero-section" id={page} >
          {children}
          <div class="hero-overlay"></div>
          <div className="wrapper">
            <h1 className="hero-heading">emissionen natur</h1>
            <p className="hero-text">Wir sind eine Klimaorganisation, die sich leidenschaftlich für die Reduzierung von Emissionen von Unternehmen einsetzt.</p>


            {/* ändern damit es innerhalb der Seite scrollt*/}
             <Link to="/contact">  
               <button className="hero-button">Erfahre mehr</button>
              </Link>
            </div>
            
        
        </div>

    )
}

export default HeroSectionHome;