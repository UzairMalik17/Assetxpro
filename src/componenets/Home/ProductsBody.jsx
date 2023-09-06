import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

function ProductsBody() {
  return (
    <div>
      <div className="w-full bg-green-800 text-white text-[40px] font-extrabold text-center p-4">
        PRODUCTS FOREX
      </div>
      <ComponentWrapper>
        <div className="w-full flex flex-col gap-4 md:gap-8 items-center justify-between text-white text-center md:text-left py-12">
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-12 items-start justify-between">
            <div className="w-full md:w-5/12 lg:w-2/6 h-[420px] bg-[url('box2.png')] bg-center bg-cover bg-no-repeat"></div>
            <div className="w-full md:w-7/12 lg:w-4/6 flex flex-col justify-start items-center md:items-start gap-8">
              <div>
                <p className="text-[40px] font-extrabold">TRADING PLATFORM</p>
                <p className="w-full md:w-9/12 text-2xl">
                  Trade on currency markets now. At ASSETPRO you can trade on
                  60+ currency pairs.
                </p>
              </div>
              <ul className="w-full text-2xl text-left list-disc pl-8">
                <li>Trade on 60+ major, minor and exotic pairs</li>
                <li>Instant execution and advanced technical analysis tools</li>
                <li>Tight spreads, low margins</li>
                <li>Up to 200:1 leverage.</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8 justify-between items-center md:items-start text-2xl font-normal py-12 md:py-20">
            <p className="text-[40px] font-extrabold">ABOUT FOREX TRADING</p>
            <p>
              What is forex trading?Forex, foreign exchange, FX or currency
              trading, is a global market where all the world's currencies
              trade. Forex trading involves the simultaneous purchase of one
              currency and selling of another, with the aim of profiting from
              fluctuations in the exchange rate.
            </p>
            <p>What currency pairs can I trade?</p>
            <p>
              You can trade on 60+ forex pairs, including EURUSD, GBPUSD,
              USDJPY, AUDUSD, EURJPY, USDNZD, USDCHF, EURCHF and many more.
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-12 items-center md:items-start justify-between">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                className="w-[390] md:w-[590px] h-[420px]"
                src="desktop1.png"
                alt="laptop"></img>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start gap-8">
              <div>
                <p className="text-[40px] font-extrabold">OUR PLATFORMS</p>
                <p className="w-full md:w-9/12 text-2xl">
                  Trade on currency markets now. At ASSETXPRO you can trade on
                  60+ currency pairs.
                </p>
              </div>
              <ul className="w-full text-2xl text-left list-disc pl-8">
                <li>Trade on 60+ major, minor and exotic pairs</li>
                <li>Instant execution and advanced technical analysis tools</li>
                <li>Tight spreads, low margins</li>
                <li>Up to 200:1 leverage.</li>
              </ul>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
}

export default ProductsBody;
