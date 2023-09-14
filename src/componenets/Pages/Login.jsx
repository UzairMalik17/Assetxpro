import React from "react";
import FormsWrapper from "../Shared/Wrappers/FormsWrapper";

function Login() {
  return (
    <FormsWrapper>
      <div className="w-full text-white flex flex-col justify-stary items-start gap-8 px-12 mx-auto">
        <div className="w-full flex flex-row justify-center items-center">
          <img
            className="w-[80px] md:w-[119px] h-[75px] md:h-[100px]"
            src="logo.png"
            alt="ASSETXPRO logo"></img>
          <p className="text-3xl font-semibold md:font-bold md:text-5xl">
            ASSETXPRO
          </p>
        </div>
        <div className="w-full md:w-8/12 flex flex-col justify-start items-start gap-4">
          <p className="text-3xl font-semibold md:text-5xl">Hello!</p>
          <p className="text-3xl font-semibold md:text-5xl">Welcome</p>
          <p>Please login to your account by filling this form:</p>
          <form className="w-full flex flex-col gap-8 justify start items-start">
            <input
              className="w-full bg-green-600 placeholder-white px-4 py-2 required"
              type="email"
              placeholder="Email:"
              required></input>
            <input
              className="w-full bg-green-600 placeholder-white px-4 py-2 required"
              type="password"
              placeholder="Password:"
              required></input>
          </form>
        </div>
      </div>
    </FormsWrapper>
  );
}

export default Login;
