import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import { Link } from "react-router-dom";

function Navigation() {
  const navigation = [
    {
      menu: "TRADING",
      options: [
        { name: "Assets Index", route: "/" },
        { name: "Trading Platform", route: "/" },
        { name: "Account Types" },
      ],
    },
    {
      menu: "PRODUCTS",
      options: [
        { name: "CFD", route: "/" },
        { name: "Forex", route: "/" },
        { name: "Residents", route: "/" },
        { name: "SAVING ACCOUNT" },
      ],
    },
    {
      menu: "ASSETXPRO",
      options: [
        { name: "About us", route: "/aboutus" },
        { name: "FAQ", route: "faq" },
        { name: "Contact us", route: "/" },
      ],
    },
    {
      menu: "LEGAL",
      options: [
        {
          name: "TERMS AND CONDITIONS",
          route: "/compliance/termsandconditions",
        },
        { name: "LEVEREGE / BONUS POLICY", route: "/compliance/bonus" },
        { name: "KYC POLICY", route: "/compliance/kycpolicy" },
        { name: "PRIVACY POLICY", route: "/compliance/privacypolicy" },
        {
          name: "ANTI-MONEY LAUNDERING POLICY",
          route: "/compliance/amlpolicy",
        },
        {
          name: "Withdrawal of funds name",
          route: "/compliance/withdrawaloffunds",
        },
      ],
    },
  ];
  return (
    <ComponentWrapper style={`bg-black py-8`}>
      <div className="w-full bg-green-800 text-black p-8">
        <div className="w-full grid sm:grid-cols-2 gap-8 lg:grid-cols-4 justify-center">
          {navigation.map((item, index) => {
            return (
              <div
                className="w-full flex flex-col gap-6 text-3xl font-extrabold"
                key={index}>
                <p>{item.menu}</p>
                <div className="w-full flex flex-col gap-2 justify-start items-start">
                  {item.options.map((items, id) => {
                    return (
                      <Link className="text-base" key={id} to={items.route}>
                        {items.name}
                      </Link>
                    );
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
