import React, { useState } from "react";
import { useActionData } from "react-router";

function FormInput({ type, placeholder, value,onChange }) {
  return (
    <input
      className="w-full bg-green-600 placeholder-white px-4 py-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required></input>
  );
}

export default FormInput;
