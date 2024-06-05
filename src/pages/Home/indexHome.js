import React, {useRef} from "react";
import Navbar from "../../components/Nav";
import HeroSectionHome from "../Home/hero";
import WilkommenSection from "./willkommen";
import UnsereWerte from "./unsereWerte";
import {Link, animateScroll as scroll} from "react-scroll";


import "../../pages/sidebar.css"
import "../../pages/layout.css"

import { t } from "i18next";

const IndexHome = () => {

    return (
        
        <div className="home">
            
            <HeroSectionHome page="home">
                <Navbar/>
            </HeroSectionHome>
            
            <div className="page-content">
            <aside>
                <p className="sidebar-heading">Auf dieser Seite</p>
                <ul className="sidebar">
                    <Link to="section1">
                        <li className="sidebar-item" >{t("home.local-nav.0")}</li>
                    </Link>
                    <Link to="section2">
                        <li className="sidebar-item">{t("home.local-nav.1")}</li>
                    </Link>
                    <Link to="section3">
                        <li className="sidebar-item">{t("home.local-nav.2")}</li>
                    </Link>
                    <Link to="section2">
                        <li className="sidebar-item">{t("home.local-nav.3")}</li>

                    </Link>

                </ul>
            </aside>

            <main id="main">

                <section id="section1">
                    <WilkommenSection />
                </section>
                <section id="section2">
                    <UnsereWerte/>
                </section>
                <h1 id="section3">sedf</h1>
            </main>
            </div>


        </div>
        
    );
};
 
export default IndexHome;