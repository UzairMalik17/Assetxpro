import React from "react";
import NavbarWrapper from "../Shared/NavbarWrapper";
function Navbar() {
  const menu = [
    { name: "HOME", route: "/" },
    { name: "TRADING", route: "/" },
    { name: "PRODUCTS", route: "/" },
    { name: "ABOUT US", route: "/" },
    { name: "FAQ", route: "/" },
    { name: "COMPLIANCE", route: "/" },
    { name: "CONTACT US", route: "/" },
  ];
  return (
    <NavbarWrapper>
      <div className="w-full text-white relative">
        <div className="w-full h-32 flex flex-row justify-end pt-4">
          <button className="w-36 h-12 border border-solid border-white rounded-3xl bg-blue-800">
            Login
          </button>
        </div>
        <div className="w-full h-24 flex flex-row justify-between items-center bg-green-700 px-2 absolute top-20">
          <div className="h-full flex flex-row justify-start items-center">
            <img
              className="w-[119px] h-[100px]"
              src="logo.png"
              alt="ASSETXPRO logo"></img>
            <p className="text-5xl">ASSETXPRO</p>
          </div>
          {menu.map((item, index) => {
            return (
              <a
                className="hidden min-[850px]:inline"
                key={index}
                href={item.route}>
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
