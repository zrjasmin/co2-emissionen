import React from "react";
import { Link } from "react-router-dom";
import contactImg from "../assets/images/aboutUs-image.jpg"
import { t } from "i18next";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-text">
                <h1>{t("home.contact-heading")}</h1>
                <p>{t("home.contact-text")}</p>
                <button>
                    <Link  to="/contact">{t("home.contact-btn")}</Link>
                </button>
            </div>
            <img src={contactImg} alt="Bild von einer Frau vor ihren Computer" />
        </div>
    )
}

export default Contact;