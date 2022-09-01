import React from "react";

const AzanDate = ({ name, pm, time }) => {
  const hours = +time.slice(0, 2);
  const minutes = time.slice(3, 5);
  return (
    <div className="azanDate">
      <h1>{name}</h1>
      <h2>
        {minutes} :{" "}
        {hours < 10 ? "0" + hours : hours > 12 ? "0" + (hours - 12) : hours}{" "}
        {pm ? "م" : "ص"}
      </h2>
    </div>
  );
};

export default AzanDate;
