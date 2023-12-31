import React from "react";
import Navbar from "../Home/Navbar";
import Hero from "../Home/Hero";
import Qualities from "../Home/Qualities";
import Platform from "../Home/Platform";
import Navigation from "../Home/Navigation";
import Disclaimer from "../Home/Disclaimer";
import Footer from "../Home/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Qualities />
      <Platform />
    </div>
  );
}

export default Home;
