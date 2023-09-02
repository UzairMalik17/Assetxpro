import React from "react";

function TradingPackageName({ bgcolor, name, price, bonus }) {
  return (
    <td>
      <div
        className={`flex flex-col gap-2 p-4 rounded-lg text-center font-bold`}
        style={{ backgroundColor: ` ${bgcolor}` }}>
        <p className="text-base ">{name}</p>
        <p className="text-sm">{price}</p>
        <p className="text-sm">{bonus}</p>
      </div>
    </td>
  );
}

export default TradingPackageName;
