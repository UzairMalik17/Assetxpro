import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import TradingPackageName from "./TradingPackageName";
import TradingTableRow from "./TradingTableRow";

function StartTrading() {
  const packagesname = [
    {
      color: "#60A1D3",
      name: "BASIC",
      price: "250$",
      bonus: "30% Bonus",
    },
    {
      color: "#CD7F32",
      name: "BRONZE",
      price: "3000$",
      bonus: "50% Bonus",
    },
    {
      color: "#C0C0C0",
      name: "SILVER",
      price: "10000$",
      bonus: "70% Bonus",
    },
    {
      color: "#FFD700",
      name: "GOLD",
      price: "50000$",
      bonus: "90% Bonus",
    },
    {
      color: "#E5E4E2",
      name: "PLATINUM",
      price: "100000$",
      bonus: "120% Bonus",
    },
  ];
  const packsgesinfo = [
    {
      service: "Spreads",
      package: [
        {
          Content: "",
          Status: false,
        },
        {
          Content: "",
          Status: false,
        },
        {
          Content: "Silver Spreads",
          Status: false,
        },
        {
          Content: "Gold Spreads",
          Status: false,
        },
        {
          Content: "Platinum Spreads",
          Status: false,
        },
      ],
    },
    {
      service: "Support Round the Clock 24/6",
      package: [
        {
          Content: "",
          Status: true,
        },
        {
          Content: "",
          Status: true,
        },
        {
          Content: "",
          Status: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
      ],
    },
    {
      service: "Daily Market Overview",
      package: [
        {
          Content: "",
          Status: true,
        },
        {
          Content: "",
          Status: true,
        },
        {
          Content: "",
          Status: true,
        },
        {
          Content: "",
          Status: true,
        },
        {
          Content: "",
          Stauts: true,
        },
      ],
    },

    {
      service: "Education Centre",
      package: [
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
      ],
    },

    {
      service: "Live Trading Webinars",
      package: [
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
      ],
    },

    {
      service: "Daily Analysis Video",
      package: [
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
      ],
    },
    {
      service: "Price Alerts",
      package: [
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
      ],
    },

    {
      service: "Dedicated Account Manager",
      package: [
        {
          Content: "",
          Stauts: false,
        },
        {
          Content: "Junior",
          Stauts: false,
        },
        {
          Content: "Senior",
          Stauts: false,
        },
        {
          Content: "VIP",
          Stauts: false,
        },
        {
          Content: "VIP",
          Stauts: false,
        },
      ],
    },
    {
      service: "Personalized Trading Strategy",
      package: [
        {
          Content: "",
          Stauts: false,
        },
        {
          Content: "",
          Stauts: false,
        },
        {
          Content: "",
          Stauts: false,
        },
        {
          Content: "",
          Stauts: true,
        },
        {
          Content: "",
          Stauts: true,
        },
      ],
    },
    {
      service: "Training One-on-One",
      package: [
        {
          Content: "",
          Stauts: false,
        },
        {
          Content: "",
          Stauts: false,
        },
        {
          Content: "",
          Stauts: false,
        },
        {
          Content: "",
          Stauts: false,
        },
        {
          Content: "",
          Stauts: true,
        },
      ],
    },
    {
      service: "Trading Signals from Trading Central",
      package: [
        {
          Content: "",
          Status: false,
        },
        {
          Content: "",
          Status: false,
        },
        {
          Content: "",
          Status: false,
        },
        {
          Content: "Gold Signals",
          Status: false,
        },
        {
          Content: "Platinum Signals",
          Status: false,
        },
      ],
    },
  ];
  return (
    <section className="w-full">
      <div className="w-full bg-green-700 text-center text-white text-[42px] font-extrabold">
        START TRADING
      </div>
      <ComponentWrapper style={`w-full bg-black`}>
        <div className="w-full flex flex-col justify-start items-center">
          <div className="w-full md:w-11/12 bg-gray-300">
            <table className="w-full bg-white p-2 md:p-8">
              <tr className="bg-gray-300">
                <td></td>
                {packagesname.map((item, index) => {
                  return (
                    <TradingPackageName
                      key={index}
                      bgcolor={item.color}
                      name={item.name}
                      price={item.price}
                      bonus={item.bonus}
                    />
                  );
                })}
              </tr>
              {packsgesinfo.map((item, index) => {
                return (
                  <tr className="divide-x divide-y" key={index}>
                    <td className="text-black p-4 items-center divide-x divide-y justify-center">
                      {item.service}
                    </td>
                    {item.package.map((item, index) => {
                      return (
                        <TradingTableRow
                          key={index}
                          status={item.Status}
                          content={item.Content}
                        />
                      );
                    })}
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </ComponentWrapper>
    </section>
  );
}

export default StartTrading;
