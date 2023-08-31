import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

function StartTrading() {
  return (
    <section className="w-full">
      <div className="w-full bg-green-700 text-center text-white text-[42px] font-extrabold">
        START TRADING
      </div>
      <ComponentWrapper style={`w-full bg-black`}>
        <div className="w-full">
          <div className="w-full md:w-2/3 bg-gray-300">
            <table>
              <tr>
                <td></td>
                <td>
                  <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#60A1D3] text-center font-bold">
                    <p className="text-base ">BASIC</p>
                    <p className="text-sm">250$</p>
                    <p className="text-sm">30% Bonus</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </ComponentWrapper>
    </section>
  );
}

export default StartTrading;
