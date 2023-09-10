import React from "react";
import ReuseHero from "../Shared/ReuseHero";
import AssetxproAdvantages from "../Home/AboutUs/AssetxproAdvantages";
import WhyAssetxpro from "../Home/AboutUs/WhyAssetxpro";

function AboutUs() {
  const heading = "ASSETXPRO IS AN INDUSTRY LEADER IN THE FOREX & CFD MARKETS.";
  const paragraph =
    "On this platform, clients can trade the most popular assets - currencies, commodities, and indices. ASSETXPRO clients benefit from intensive training, dedicated service, and 24/7 professional customer support and assistance.";

  return (
    <div>
      <ReuseHero style={`items-end`} paragraph={paragraph} heading={heading} />
      <AssetxproAdvantages />
      <WhyAssetxpro />
    </div>
  );
}

export default AboutUs;
