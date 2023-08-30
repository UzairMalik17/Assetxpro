import React, { useState } from "react";
import NavbarWrapper from "../Shared/NavbarWrapper";
import { AiOutlineStock, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  const menu = [
    { name: "HOME", route: "/" },
    { name: "TRADING", route: "/trading" },
    { name: "PRODUCTS", route: "/" },
    { name: "ABOUT US", route: "/" },
    { name: "FAQ", route: "/" },
    { name: "COMPLIANCE", route: "/" },
    { name: "CONTACT US", route: "/" },
  ];
  return (
    <NavbarWrapper style={`relative`}>
      <div className="w-full text-white flex flex-col items-center relative">
        <div className="w-full h-32 flex flex-row justify-end pt-4">
          <button className="w-36 h-12 border border-solid border-white rounded-3xl bg-blue-800">
            Login
          </button>
        </div>
        <div className="w-[96%] h-24 flex flex-row justify-between items-center px-2 bg-green-700 absolute top-20">
          <div className="h-full flex flex-row justify-start items-center">
            <img
              className="w-[80px] md:w-[119px] h-[75px] md:h-[100px]"
              src="logo.png"
              alt="ASSETXPRO logo"></img>
            <p className="text-3xl md:text-5xl">ASSETXPRO</p>
          </div>
          {menu.map((item, index) => {
            return (
              <Link className="hidden lg:inline" key={index} to={item.route}>
                {item.name}
              </Link>
            );
          })}
          <AiOutlineStock
            className={`h-16 w-16 inline lg:hidden text-white hover:text-blue-900 ${
              toggle && "text-blue-900"
            }`}
            onClick={toggleHandler}
          />
        </div>
      </div>
      {toggle && (
        <div className="w-1/2 sm:w-1/3 h-screen flex flex-col gap-4 justify-between items-center absolute right-0 top-0 py-4 bg-black">
          <div>
            <AiOutlineClose
              className="w-12 h-8 text-white hover:text-blue-900"
              onClick={toggleHandler}
            />
          </div>
          {menu.map((item, index) => {
            return (
              <a
                className="hover:text-green-700 text-white"
                key={index}
                href={item.route}>
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </NavbarWrapper>
  );
}

export default Navbar;
