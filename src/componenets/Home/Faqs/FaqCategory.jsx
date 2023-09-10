import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";

function FaqCategory({ categoryName, categorySelector }) {
  return (
    <button
      className="w-full text-left bg-[#AAAAAAB0]"
      onClick={categorySelector}>
      <p className="text-lg md:text-2xl p-2 md:p-4 text-white font-semibold md:font-extrabold">
        {categoryName}
      </p>
    </button>
  );
}

export default FaqCategory;
