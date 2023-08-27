import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

function Disclaimer() {
  return (
    <ComponentWrapper style={`bg-black`}>
      <div className="w-full flex flex-col justify-between items-center gap-32 py-12">
        <div className="w-full flex flex-col justify-between items-center gap-8 text-justify text-white text-3xl">
          <p className="font-extrabold">Risk Disclaimer :</p>
          <p>
            CFD & Forex trading involves significant risk. We strongly advise
            that you read our Terms & Conditions. Although the risk when trading
            assets & Commodities is fixed for each individual trade, the trades
            are live and it is possible to lose an initial investment,
            particularly if a trader chooses to place his entire investment to a
            single live trade. It is highly recommended that traders choose a
            proper money management strategy which limits the total consecutive
            trades or total outstanding investment. Registration no. 35671 BC
            2020, 374 Beachmont Business Centre, Kingstown, Saint Vincent and
            the Grenadines.
          </p>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-8 text-center opacity-50 text-white text-3xl">
          <p className="font-extrabold">
            Important information for U.S. Persons (citizens and residents)
          </p>
          <p>
            The offering, sale and/or distribution of many of the products or
            services described on this website is not intended in any
            jurisdiction to any person to whom it is unlawful to make such an
            offer, sale and/or distribution, including the United States.
          </p>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Disclaimer;
