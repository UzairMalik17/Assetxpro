import React from "react";
import ReuseHero from "../Shared/ReuseHero";
import { Outlet } from "react-router";
const heading = "INITIATE YOUR INVESTMENT WITH PEACE OF MIND";

function Compliance() {
  return (
    <div>
      <ReuseHero style={`items-start`} heading={heading} />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Compliance;
