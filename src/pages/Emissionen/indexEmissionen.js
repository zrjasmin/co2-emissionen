import React from "react";
import Navbar from "../../components/Nav";
import HeroSectionEmissionen from "./hero";
import Tabelle from "./Tabelle";

function IndexEmissionen() {
    return (
        <>
            <HeroSectionEmissionen page="emissionen">
                <Navbar/>
            </HeroSectionEmissionen>

            <Tabelle/>
        </>
    )
}

export default IndexEmissionen;