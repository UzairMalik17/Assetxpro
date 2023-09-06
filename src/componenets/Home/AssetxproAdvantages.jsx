import React from "react";
import AdvantageCard from "./AdvantageCard";
import ComponentWrapper from "../Shared/ComponentWrapper";

function AssetxproAdvantages() {
  const advantages = [
    {
      bgimg: "aboutus1.png",
      heading: "SET UP",
      content:
        "Setting up your AssetxPro account only takes a few seconds simply sign up, verify your details and you are ready to go! At AssetxPro, we like to keep things simple.",
    },
    {
      bgimg: "aboutus2.png",
      heading: "TRADE",
      content:
        "Trading at AssetxPro allows you to benefit from tight spreads and low commission. AssetxPro offers a slew of tools for traders to take advantage of, including stop-loss, take profit, entry limit, and entry stop orders.",
    },
    {
      bgimg: "aboutus3.png",
      heading: "SET UP",
      content:
        "With AssetxPro you can fully manage your accountover mobile or web.Both platforms support immediate deposits, fast withdrawals and uploading of documents.",
    },
  ];
  return (
    <div>
      <div className="w-full bg-green-800 text-white text-[40px] font-extrabold text-center p-4">
        PRODUCTS FOREX
      </div>
      <div className="w-full grid lg:grid-cols-3 gap-4 py-4">
        {advantages.map((item, index) => {
          return (
            <AdvantageCard
              key={index}
              bgimg={item.bgimg}
              heading={item.heading}
              content={item.content}
            />
          );
        })}
      </div>
      <ComponentWrapper>
        <div className="w-full flex flex-col justify-start items-center gap-6 text-white text-center py-8">
          <p className="w-full md:w-10/12 text-3xl">
            With ASSETXPRO you can fully manage your account over mobile or web.
            Both platforms support immediate deposits, fast withdrawals and
            uploading of documents. Our values are professionalism, integrity,
            and sincerity in working with our clients. ASSETXPRO mission is to
            help each and every one of our clients have a great trading
            experience!
          </p>
          <button className="w-11/12 sm:w-80 h-16 border-blue-900 bg-blue-900 text-2xl font-bold">
            CONTACT US
          </button>
        </div>
      </ComponentWrapper>
    </div>
  );
}

export default AssetxproAdvantages;
