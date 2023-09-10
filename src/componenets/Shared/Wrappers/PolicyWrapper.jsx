import React from "react";
const PolicyWrapper = ({ style, children }) => {
  return (
    <div className="w-full flex flex-col gap-8 justify-start item-center md:items-star">
      {children}
    </div>
  );
};

export default PolicyWrapper;
