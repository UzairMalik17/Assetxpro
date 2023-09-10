import React from "react";

function TradersRow({ value1, value2, value3, value4, style }) {
  return (
    <tr>
      <td className={`${style}`}>{value1}</td>
      <td className={`${style}`}>{value2}</td>
      <td className={`${style}`}>{value3}</td>
      <td className={`${style}`}>{value4}</td>
    </tr>
  );
}

export default TradersRow;
