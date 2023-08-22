import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

function Hero() {
  return (
    <ComponentWrapper
      style={`bg-[url('Hero.png')] bg-center bg-cover bg-no-repeat`}>
      <div className="w-full h-[calc(100vh-128px)] flex flex-col gap-8 justify-center items-center">
        <p className="w-1/2 text-white text-5xl font-bold text-center">
          JOIN 472,900 TRADERS WHO HAVE MADE MONEY TRADING WITH ASSETXPRO TEAM
        </p>
      </div>
    </ComponentWrapper>
  );
}

export default Hero;
