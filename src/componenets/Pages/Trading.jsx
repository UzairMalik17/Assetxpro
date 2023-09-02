import React from "react";
import StartTrading from "../Home/StartTrading";
import ReuseHero from "../Shared/ReuseHero";

const heading = "GET STARTED WITH ASSETX PRO TRADING ACCOUNT TODAY!";
const paragraph =
  "Our account packages offer private and institutional clients the privilege to trade in the global Forex market using the most advanced trading platform from any PC, notebook and mobile/tablet device.";

function Trading() {
  return (
    <div>
      <ReuseHero paragraph={paragraph} heading={heading} />
      <StartTrading />
    </div>
  );
}

export default Trading;
