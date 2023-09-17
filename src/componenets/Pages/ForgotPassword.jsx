import React from "react";
import FormsWrapper from "../Shared/Wrappers/FormsWrapper";
import { Link } from "react-router-dom";
import FormInput from "../Shared/FormInput";

function ForgotPassword() {
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
          <p className="text-3xl font-semibold md:text-5xl">Forgot</p>
          <p className="text-3xl font-semibold md:text-5xl">Password</p>
          <p>
            Please enter your email below and link will be sent to your email
          </p>
          <form className="w-full flex flex-col gap-8 justify start items-start">
            <FormInput type="email" placeholder="Email:" />
            <FormInput type="submit" value={"SEND"} />
          </form>
        </div>
      </div>
    </FormsWrapper>
  );
}

export default ForgotPassword;
