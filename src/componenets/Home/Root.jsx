import React from "react";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Root() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Navigation />
      <Disclaimer />
      <Footer />
    </div>
  );
}

export default Root;
