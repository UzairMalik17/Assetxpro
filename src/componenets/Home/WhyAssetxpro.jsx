import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

function WhyAssetxpro() {
  return (
    <div>
      <div className="w-full bg-green-800 text-white text-[40px] font-extrabold text-center p-4">
        WHY ASSETXPRO
      </div>
      <ComponentWrapper>
        <div className="w-full grid lg:grid-cols-2 gap-4 py-8">
          <div className="w-full flex flex-col gap-8 text-white text-2xl text-center md:text-left">
            <p>
              The senior management of ASSETXPRO has over a quarter century of
              experience in the field of foreign exchange trading. Our team is
              comprised of industry experts who are driven to consistently
              refine and improve the trading experience through innovation.
            </p>
            <p>
              With dedication and professionalism, the team shares a passion for
              online trading that fuels their dynamic approach to the market
              allowing them to adapt to any changes and remain at the very
              forefront of the industry.
            </p>
            <p>
              Every business decision we make is 100% client focused, aimed to
              promote excellence and maximize our clients trading profit
              potential.
            </p>
          </div>
          <div className="w-full h-[400px] md:w-11/12 mx-auto bg-[url('whyassetxpro.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </ComponentWrapper>
    </div>
  );
}

export default WhyAssetxpro;
