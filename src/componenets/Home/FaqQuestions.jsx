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
      <div className="w-full">
        <div className="W-9/12 bg-[#757575] font-bold text-base text-white">
          <div
            className={`w-full p-2 ${toggle && "bg-green-800 text-2xl"} `}
            onClick={toggleHandler}>
            {question}
          </div>
          {toggle && (
            <div className="w-full  p-4" onClick={toggleHandler}>
              {answer}
            </div>
          )}
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default FaqQuestions;
