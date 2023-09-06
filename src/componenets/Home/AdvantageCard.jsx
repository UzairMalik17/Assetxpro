import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

function AdvantageCard({ bgimg, heading, content }) {
  return (
    <div className="w-full flex flex-col justify-start items-center text-black bg-[#D9D9D9]">
      <div
        className="w-full h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgimg})` }}></div>
      <ComponentWrapper>
        <div className="w-full flex flex-col justify-start items-center gap-6 text-3xl py-6">
          <p className="font-extrabold text-center border-b-2 border-white p-4">
            {heading}
          </p>
          <p className="w-full text-center lg:text-justify">{content}</p>
        </div>
      </ComponentWrapper>
    </div>
  );
}

export default AdvantageCard;
