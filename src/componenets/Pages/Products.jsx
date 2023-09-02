import React from "react";
import ReuseHero from "../Shared/ReuseHero";

const heading = "ASSETXPRO IS AN INDUSTRY LEADER IN THE FOREX & CFD MARKETS.";
const paragraph =
  "On this platform, clients can trade the most popular assets - currencies, commodities, and indices. ASSETXPRO clients benefit from intensive training, dedicated service, and 24/7 professional customer support and assistance.";

function Products() {
  return <ReuseHero paragraph={paragraph} heading={heading} />;
}

export default Products;
