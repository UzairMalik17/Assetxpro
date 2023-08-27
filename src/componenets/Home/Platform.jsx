import React from "react";

function Platform() {
  const awards = [
    {
      img: "award1.png",
    },
    {
      img: "award2.png",
    },
    {
      img: "award3.png",
    },
    {
      img: "award4.png",
    },
    {
      img: "award5.png",
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[1300px] mx-auto text-black py-4 p-4 md:p-8">
        <div className="w-full grid lg:grid-cols-2 gap-2">
          <div className="w-full flex items-center justify-center lg:justify-end">
            <div className="w-11/12 md:w-9/12 h-full flex flex-col gap-8 items-center lg:items-start justify-center py-8">
              <p className="text-4xl font-extrabold text-center lg:text-start">
                TRADING PLATFORM
              </p>
              <p className="text-2xl text-center lg:text-start">
                Experience The Latest Technology In Forex Trading
              </p>
              <ul className="w-full list-disc pl-8 text-2xl text-justify gap-4">
                <li>Trading directly online, no download required</li>
                <li>Interactive, user-friendly interface</li>
                <li>Over 300 tradable assets.</li>
                <li>Variety of trading orders.</li>
                <li>sollicitudin uspend</li>
                <li>Quick execution.</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-start items-center">
            <img
              className="w-[390] sm:w-[590px] h-[220px] sm:h-[421px]"
              src="desktop 1.png"
              alt="laptop"></img>
          </div>
          <div className="w-full h-[330px] bg-[url('trade.png')] bg-center bg-cover bg-no-repeat text-white text-3xl font-extrabold flex flex-row justify-center items-center">
            TRADE CANNABIS
          </div>
          <div className="w-full h-[330px] bg-[url('blockchain.png')] bg-center bg-cover bg-no-repeat text-white text-3xl font-extrabold flex flex-row justify-center items-center">
            BLOCKCHAIN TECH
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 items-center text-center justify-between py-8 px-2 mx-auto">
          <p className="text-4xl font-extrabold">
            TRADE WITH AWARD-WINNING BROKER
          </p>
          <div className="w-full border border-solid border-black bg-gray-300 grid md:grid-cols-5 gap-4 items-center justify-center px-4 py-2 mx-auto">
            {awards.map((items, index) => {
              return (
                <img src={items.img} key={index} alt="Award Winning"></img>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platform;
