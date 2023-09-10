import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";

function Hero() {
  return (
    <ComponentWrapper
      style={`bg-[url('Hero.png')] bg-center bg-cover bg-no-repeat text-center text-white`}>
      <div className="w-full h-[calc(100vh-128px)] flex flex-col gap-8 justify-center items-center">
        <p className="w-11/12 sm:w-2/3 lg:w-1/2 text-4xl md:text-5xl font-bold ">
          JOIN 472,900 TRADERS WHO HAVE MADE MONEY TRADING WITH ASSETXPRO TEAM
        </p>
        <button className="w-11/12 sm:w-80 h-16 border border-solid border-blue-900 bg-blue-900">
          START TRADING
        </button>
      </div>
    </ComponentWrapper>
  );
}

export default Hero;
