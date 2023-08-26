import React from "react";
import Navbar from "../Home/Navbar";
import Hero from "../Home/Hero";
import Qualities from "../Home/Qualities";
import Platform from "../Home/Platform";
import Navigation from "../Home/Navigation";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Qualities />
      <Platform />
      <Navigation />
    </div>
  );
}

export default Home;
