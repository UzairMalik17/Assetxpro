import React, { useState } from "react";
import FormsWrapper from "../Shared/Wrappers/FormsWrapper";
import FormInput from "../Shared/FormInput";

function Registration() {
  const [matchPassword, setMatchPassword] = useState(true);
  const [formData, setFormData] = useState({
    fname: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    matchPassword &&
      setFormData({
        fname: "",
        surname: "",
        phone: "",
        email: "",
        password: "",
        repeatPassword: "",
      });
  };
  const changeHandler = (event, formData) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setMatchPassword(formData.password === formData.repeatPassword);
  };
  return (
    <FormsWrapper>
      <div className="w-full h-5/6 text-white flex flex-col justify-start items-start gap-4 px-12 m-auto">
        <div className="w-full flex flex-row justify-center items-center">
          <img
            className="w-[80px] md:w-[119px] h-[75px] md:h-[100px]"
            src="logo.png"
            alt="ASSETXPRO logo"></img>
          <p className="text-2xl font-semibold md:font-bold md:text-4xl">
            ASSETXPRO
          </p>
        </div>
        <p className="text-2xl font-semibold md:font-bold md:text-4xl">
          Registration
        </p>
        <div className="w-full flex flex-col-reverse md:flex-row justify-start items-start">
          <form
            onSubmit={submitHandler}
            className="w-full md:w-1/2 flex flex-col gap-4 justify-start items-start">
            <FormInput
              type="text"
              placeholder="Your Name:"
              name="fname"
              value={formData.fname}
              onChange={changeHandler}
            />
            <FormInput
              type="text"
              placeholder="Your Surname"
              name="surname"
              value={formData.surname}
              onChange={changeHandler}
            />
            <FormInput
              type="number"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={changeHandler}
            />
            <FormInput
              type="email"
              placeholder="Your Email:"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
            <FormInput
              type="password"
              placeholder="Your Password:"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
            <FormInput
              type="password"
              placeholder="Repeat Password:"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={changeHandler}
            />
            {!matchPassword && (
              <div className="w-full bg-red-700">Passwords do not match</div>
            )}
            <div className="w-full flex flex-row justify-start items-center gap-2">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                value={true}
                required></input>
              <label>I agree to the Terms and Condition</label>
            </div>
            <input
              className="text-white font-bold bg-black px-16 py-2"
              type="submit"
              value={"SEND"}></input>
          </form>
        </div>
      </div>
    </FormsWrapper>
  );
}

export default Registration;
