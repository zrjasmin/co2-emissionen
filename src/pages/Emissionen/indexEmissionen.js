import React from "react";
import Navbar from "../../components/Nav";
import HeroSectionEmissionen from "./hero";
import Tabelle from "./Tabelle";
import Table from "./tabelle/TabelleNeu";


function IndexEmissionen() {
    return (
        <>
            <HeroSectionEmissionen page="emissionen">
                <Navbar/>
            </HeroSectionEmissionen>

            <Table/>
        </>
    )
}

export default IndexEmissionen;