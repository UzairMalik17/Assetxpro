import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";

function Footer() {
  return (
    <ComponentWrapper style={`bg-black`}>
      <div className="w-full flex justify-center items-center text-white opacity-50 text-xl text-center py-4">
        COPYRIGHT © ASSETXPRO 2020. ALL RIGHTS RESERVED
      </div>
    </ComponentWrapper>
  );
}

export default Footer;
