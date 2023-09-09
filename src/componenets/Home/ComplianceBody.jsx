import React, { useState } from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import TermsAndCondition from "./TermsAndConditions";
import AntiMoneyLaundering from "./AntiMoneyLaundering";
import KycPolicy from "./KycPolicy";
import BonusPolicy from "./BonusPolicy";
import PrivacyPolicy from "./PrivacyPolicy";

const policies = [
  {
    policy: "COMPLIANCE",
    component: "",
  },
  {
    policy: "TERMS AND CONDITIONS",
    component: <TermsAndCondition />,
  },
  { policy: "LEVEREGE / BONUS POLICY", component: <BonusPolicy /> },
  { policy: "KYC POLICY", component: <KycPolicy /> },
  { policy: "PRIVACY POLICY", component: <PrivacyPolicy /> },
  {
    policy: "ANTI-MONEY LAUNDERING POLICY",
    component: <AntiMoneyLaundering />,
  },
];
function ComplianceBody() {
  const [currentPolicy, setPolicy] = useState("TERMS AND CONDITIONS");
  function policySelector(policy) {
    setPolicy(policy);
  }
  return (
    <div>
      <div className="w-full bg-green-800 text-white text-[40px] font-extrabold text-left p-4">
        <span>ASSETXPRO </span>
        <span className="font-normal"> COMPLIANCE</span>
      </div>
      <ComponentWrapper>
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-white text-2xl py-12">
          <div className="w-full md:w-5/12 flex flex-col justify-start items-start gap-6">
            {policies.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => policySelector(item.policy)}
                  className={`font-extrabold text-left ${
                    index === 0 && "border-b-2 border-white pb-4 pr-4"
                  }`}>
                  {item.policy}
                </button>
              );
            })}
          </div>
          <div className="w-full md:w-7/12 text-center text-white text-xl font-normal md:text-left">
            {policies
              .filter((item) => item.policy === currentPolicy)
              .map((item, index) => {
                return <div key={index}>{item.component}</div>;
              })}
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
}

export default ComplianceBody;
