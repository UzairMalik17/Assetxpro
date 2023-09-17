import React from "react";
import ComponentWrapper from "./ComponentWrapper";

function FormsWrapper({ children }) {
  return (
    <ComponentWrapper
      style={`w-[100vw] h-[100vh] bg-[url('./Hero.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center`}>
      <div className="w-11/12 md:w-7/12 mx-auto bg-green-800 py-4">
        {children}
      </div>
    </ComponentWrapper>
  );
}

export default FormsWrapper;
