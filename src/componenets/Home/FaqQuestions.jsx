import { useState } from "react";
import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

function FaqQuestions({ question, answer }) {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <ComponentWrapper>
      <button className="w-full text-left">
        <div className="W-9/12 bg-[#757575] font-normal md:font-bold text-base text-white">
          <div
            className={`w-full p-2 ${
              toggle && "bg-green-800 text:lg md:text-2xl"
            } `}
            onClick={toggleHandler}>
            {question}
          </div>
          {toggle && (
            <div className="w-full p-2 md:p-4" onClick={toggleHandler}>
              {answer}
            </div>
          )}
        </div>
      </button>
    </ComponentWrapper>
  );
}

export default FaqQuestions;
