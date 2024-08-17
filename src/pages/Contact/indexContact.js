import React from "react";
import HeroSection from "../../components/hero";
import Navbar from "../../components/Nav";
import Footer from "../../components/footer";

function IndexContact() {
  return (
    <>
      <HeroSection page="contact">
        <Navbar />
      </HeroSection>

      <Footer />
    </>
  );
}

export default IndexContact;
