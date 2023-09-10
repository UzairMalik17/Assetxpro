import React from "react";
import TradingTableEntry from "./TradingTableEntry";

function TradingTableRow({ content, status }) {
  return (
    <td className="text-black p-4 items-center text-center justify-center">
      <TradingTableEntry status={status} />
      <p>{content}</p>
    </td>
  );
}

export default TradingTableRow;
