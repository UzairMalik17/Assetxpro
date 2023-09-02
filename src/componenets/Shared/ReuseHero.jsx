import React from "react";
import ComponentWrapper from "./ComponentWrapper";

function ReuseHero({ heading, paragraph }) {
  return (
    <ComponentWrapper
      style={`bg-[url('Hero.png')] bg-center bg-cover bg-no-repeat text-center text-white`}>
      <div className="w-full h-[calc(100vh-128px)] flex flex-col gap-8 justify-center items-end text-center md:text-left">
        <p className="w-full lg:w-1/2 text-3xl font-bold">{heading}</p>
        <p className="w-full lg:w-1/2 text-2xl">{paragraph}</p>
      </div>
    </ComponentWrapper>
  );
}

export default ReuseHero;
