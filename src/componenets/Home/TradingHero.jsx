import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

function TradingHero() {
  return (
    <ComponentWrapper
      style={`bg-[url('Hero.png')] bg-center bg-cover bg-no-repeat text-center text-white`}>
      <div className="w-full h-[calc(100vh-128px)] flex flex-col gap-8 justify-center items-end text-center md:text-left">
        <p className="w-full lg:w-1/2 text-3xl font-bold">
          GET STARTED WITH ASSETX PRO TRADING ACCOUNT TODAY!
        </p>
        <p className="w-full lg:w-1/2 text-2xl">
          Our account packages offer private and institutional clients the
          privilege to trade in the global Forex market using the most advanced
          trading platform from any PC, notebook and mobile/tablet device.
        </p>
      </div>
    </ComponentWrapper>
  );
}

export default TradingHero;
