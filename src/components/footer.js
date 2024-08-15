import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer grid">
      <div className="footer__grid1">
        <h4>EcoTransparency</h4>
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
      </div>
      <div className="footer__grid2">
        <a href="/">Home</a>
        <a href="/emissionen">Emissionen</a>
        <a href="/aboutUs">Über uns</a>
        <a href="/contact">Kontakt</a>
      </div>
      <div className="footer__grid3">
        <h4>Anschrift</h4>
        <p>EcoTransparency GmbH</p>
        <p>Musterstraße 21</p>
        <p>10178 Berlin</p>
      </div>
    </div>
  );
};

export default Footer;
