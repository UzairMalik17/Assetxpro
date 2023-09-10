import React from "react";
import ComponentWrapper from "./Wrappers/ComponentWrapper";
import AntiMoneyLaundering from "../Pages/Policies/AntiMoneyLaundering";
import KycPolicy from "../Pages/Policies/KycPolicy";
import PrivacyPolicy from "../Pages/Policies/PrivacyPolicy";
import { Link } from "react-router-dom";

const policies = [
  {
    policy: "COMPLIANCE",
    route: "/compliance",
  },
  {
    policy: "TERMS AND CONDITIONS",
    route: "/compliance/termsandconditions",
  },
  { policy: "LEVEREGE / BONUS POLICY", route: "/compliance/bonus" },
  { policy: "KYC POLICY", route: "/compliance/kycpolicy" },
  { policy: "PRIVACY POLICY", route: "/compliance/privacypolicy" },
  {
    policy: "ANTI-MONEY LAUNDERING POLICY",
    route: "/compliance/amlpolicy",
  },
];
const ComplianceBody = ({ children }) => {
  return (
    <div>
      <div className="w-full bg-green-800 text-white text-[40px] font-extrabold text-center p-4">
        <span>ASSETXPRO </span>
        <span className="font-normal"> COMPLIANCE</span>
      </div>
      <ComponentWrapper>
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-white text-2xl py-12">
          <div className="w-full md:w-5/12 flex flex-col justify-start items-start gap-6">
            {policies.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.route}
                  className={`font-extrabold text-left ${
                    index === 0 && "border-b-2 border-white pb-4 pr-4"
                  }`}>
                  {item.policy}
                </Link>
              );
            })}
          </div>
          <div className="w-full md:w-7/12 text-center text-white text-xl font-normal md:text-left">
            {children}
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default ComplianceBody;
