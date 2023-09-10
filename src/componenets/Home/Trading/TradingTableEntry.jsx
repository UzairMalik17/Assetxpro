import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function TadingTableEntry({ status }) {
  return (
    <BsCheckCircleFill
      className={`text-blue-500 ${status ? "inline-block" : "hidden"}`}
    />
  );
}

export default TadingTableEntry;
