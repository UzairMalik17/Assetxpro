import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

function Navigation() {
  const navigation = [
    {
      menu: "TRADING",
      options: ["Assets Index", "Trading Platform", "Account Types"],
    },
    {
      menu: "PRODUCTS",
      options: ["CFD", "Forex", "Residents", "SAVING ACCOUNT"],
    },
    {
      menu: "ASSETXPRO",
      options: ["About us", "FAQ", "Contact us"],
    },
    {
      menu: "LEGAL",
      options: [
        "Terms and conditions",
        "Leverege / Bonus Policy",
        "KYC policy",
        "Privacy Policy",
        "Anti-Money Laundering Policy",
        "Withdrawal of funds policy",
      ],
    },
  ];
  return (
    <ComponentWrapper style={`bg-black`}>
      <div className="w-full bg-green-700 text-black p-8">
        <div className="w-full grid sm:grid-cols-2 gap-8 lg:grid-cols-4 justify-center">
          {navigation.map((item, index) => {
            return (
              <div
                className="w-full flex flex-col gap-4 text-3xl font-extrabold"
                key={index}>
                <p>{item.menu}</p>
                <div className="w-full text-base">
                  {item.options.map((items, id) => {
                    return <p key={id}>{items}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Navigation;
