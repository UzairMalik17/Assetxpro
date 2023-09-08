import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

function FaqCategory({ categoryName, categorySelector }) {
  return (
    <ComponentWrapper style={`bg-[#AAAAAAB0]`}>
      <div className="w-full" onClick={categorySelector}>
        <div className="w-9/12 p-4">
          <p className="text-2xl text-white font-extrabold">{categoryName}</p>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default FaqCategory;
