import React, {useState} from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import {Link} from 'react-router-dom';



import logo from "../assets/images/leaf.png";
import hamburgermenu from "../assets/images/menu.png";
import close from "../assets/images/close.png";


import "./Nav.css" 

const Navbar = () => {
    
    let [showNav, setShowNav] = useState("hidden");

    function toggleNavItems (){
       if (showNav === "hidden") {
            setShowNav("visible");
       } else {
            setShowNav("hidden")
       }
    }


    return (
        <div className="Nav">



            <div className="logo">
                <img src={logo} alt="logo"/>
                <p className="name">EcoTransparency</p>
            </div>
            
            <img onClick={toggleNavItems} src={hamburgermenu} alt="menu" className="hamburger"/>
            <div  className={showNav}>
                <div className="Navlinks">
                    <img src={close} onClick={toggleNavItems} className="close" alt="close"/>
                    <Link to="/" onClick={toggleNavItems}>Home</Link>
                    <Link to="/emissionen" onClick={toggleNavItems}>Emissionen</Link>
                    <Link to="/aboutUs" onClick={toggleNavItems}>Über uns</Link>
                    <Link to="/contact" onClick={toggleNavItems}>Kontakt</Link>
                    
                </div>
                
                <div className="language-selection mobile">
                    <LanguageSwitcher/>
                </div>   
            </div>

            <div className="language-selection desktop">
                    <LanguageSwitcher/>

                </div>
        </div>
    );
};
 
export default Navbar;