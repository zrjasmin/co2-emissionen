import React from "react";
import Navbar from "../../components/Nav";
import HeroSectionEmissionen from "./hero";
import Tabelle from "./Tabelle";
import Table from "./tabelle/TabelleNeu";
import StackTable from "./tabelle/TanStackTable";


function IndexEmissionen() {
    return (
        <>
            <HeroSectionEmissionen page="emissionen">
                <Navbar/>
            </HeroSectionEmissionen>

            <StackTable/>
        </>
    )
}

export default IndexEmissionen;