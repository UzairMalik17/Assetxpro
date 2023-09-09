import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

const policyMenu = [
  "COMPLIANCE",
  "TERMS AND CONDITIONS",
  "LEVEREGE / BONUS POLICY",
  "KYC POLICY",
  "PRIVACY POLICY",
  "ANTI-MONEY LAUNDERING POLICY",
];

function ComplianceBody() {
  return (
    <div>
      <div className="w-full bg-green-800 text-white text-[40px] font-extrabold text-center p-4">
        <span>ASSETXPRO </span>
        <span className="font-normal"> COMPLIANCE</span>
      </div>
      <ComponentWrapper>
        <div className="w-full flex flex-row justify-between items-start gap-8 text-white text-2xl py-12">
          <div className="w-5/12 flex flex-col justify-start items-start gap-6">
            {policyMenu.map((item, index) => {
              return (
                <p
                  key={index}
                  className={`font-extrabold ${
                    index === 0 && "border-b-2 border-white pb-4 pr-4"
                  }`}>
                  {item}
                </p>
              );
            })}
          </div>
          <div className="w-7/12"></div>
        </div>
      </ComponentWrapper>
    </div>
  );
}

export default ComplianceBody;
