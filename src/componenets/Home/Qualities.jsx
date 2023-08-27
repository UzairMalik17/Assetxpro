import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import TradersRow from "./TradersRow";

function Qualities() {
  const qualities = [
    {
      name: "EXPERTS BY YOUR SIDE",
      img: "box1.png",
    },
    {
      name: "COMMITED TO OUR CLIENTS",
      img: "box2.png",
    },
    {
      name: "EASY ACCOUNTS OPENING",
      img: "box3.png",
    },
    {
      name: "SUPPORTS",
      img: "box4.png",
    },
    {
      name: "BONUS",
      img: "box5.png",
    },
    {
      name: "RISK MANAGEMENT",
      img: "box6.png",
    },
  ];
  const toptrades = [
    {
      User: "User",
      Assets: "Assets",
      Profit: "Profit",
      Direction: "Direction",
    },
    {
      User: 1,
      Assets: "AUD/JPY",
      Profit: "$ 231",
      Direction: "Call",
    },
    {
      User: 2,
      Assets: "AUD/JPY",
      Profit: "$ 231",
      Direction: "Call",
    },
    {
      User: 3,
      Assets: "AUD/JPY",
      Profit: "$ 231",
      Direction: "Call",
    },
    {
      User: 4,
      Assets: "AUD/JPY",
      Profit: "$ 231",
      Direction: "Call",
    },
  ];
  const toptrends = [
    {
      Asset: "Asset",
      Call: "% Call",
      Percentage: "Asset Percentage",
      put: "% Put",
    },
    {
      Asset: "AUD/USD",
      Call: "52%",
      Percentage: "Asset Percentage",
      put: "52%",
    },
    {
      Asset: "AUD/USD",
      Call: "52%",
      Percentage: "Asset Percentage",
      put: "52%",
    },
    {
      Asset: "AUD/USD",
      Call: "52%",
      Percentage: "Asset Percentage",
      put: "52%",
    },
    {
      Asset: "AUD/USD",
      Call: "52%",
      Percentage: "Asset Percentage",
      put: "52%",
    },
  ];
  return (
    <div className="w-full mx-auto grid lg:grid-cols-3 gap-2 text-center bg-black text-white text-2xl font-extrabold pb-1">
      {qualities.map((item, index) => {
        return (
          <div
            className={`h-[350px] bg-cover bg-no-repeat bg-center flex items-center justify-center`}
            style={{ backgroundImage: `url(${item.img})` }}
            key={index}>
            {item.name}
          </div>
        );
      })}
      <div className="w-full">
        <div className="w-full h-[65px] bg-green-700 flex justify-center items-center">
          TOP TRADES
        </div>
        <div className="w-full text-black text-base font-semibold bg-white py-8">
          <table className="w-full">
            <tbody>
              {toptrades.map((item, index) => {
                return (
                  <TradersRow
                    style={`py-4 ${index === 0 ? "font-bold" : "font-normal"}`}
                    key={index}
                    value1={item.User}
                    value2={item.Assets}
                    value3={item.Profit}
                    value4={item.Direction}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[65px] bg-green-700 flex justify-center items-center">
          POPULAR TRENDS
        </div>
        <div className="w-full text-black text-base font-semibold bg-white py-8">
          <table className="w-full">
            <tbody>
              {toptrends.map((item, index) => {
                return (
                  <TradersRow
                    style={`py-4 ${index === 0 ? "font-bold" : "font-normal"}`}
                    key={index}
                    value1={item.Asset}
                    value2={item.Call}
                    value3={item.Percentage}
                    value4={item.put}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-[65px] bg-green-700 flex justify-center items-center">
          FINANCIAL NEWS
        </div>
        <div className="w-full h-[350px] lg:h-[calc(100%-65px)] text-black text-base font-semibold bg-white py-8"></div>
      </div>
    </div>
  );
}

export default Qualities;
