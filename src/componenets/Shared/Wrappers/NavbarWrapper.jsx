import React from "react";

const NavbarWrapper = ({ style, children }) => {
  return (
    <div className={`w-full ${style}`}>
      <div className="w-full max-w-[1300px] mx-auto px-2">{children}</div>
    </div>
  );
};

export default NavbarWrapper;
