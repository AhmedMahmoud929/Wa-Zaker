import React, { useState, useEffect } from "react";
import azkarApi from "../assets/jsons/azkar.json";

const azkarContext = React.createContext();

const AzkarState = (props) => {
  // States
  const [zekr, setZekr] = useState(null);
  const [zekrItem, setZekrItem] = useState(null);
  const [zekrNum, seZekrNum] = useState(0);

  // Functions
  const zekrClickHandler = (id) => {
    const data = azkarApi.find((ele) => ele.id === id);
    setZekr(data);
    seZekrNum(0);
    setZekrItem(data.data[0]);
  };
  const arrowHandler = (dir = "") => {
    setZekrItem(zekr.data[dir === "next" ? zekrNum + 1 : zekrNum - 1]);
    seZekrNum((prev) => (dir === "next" ? prev + 1 : prev - 1));
  };

  return (
    <azkarContext.Provider
      value={{ zekrNum, zekr, zekrItem, zekrClickHandler, arrowHandler }}
    >
      {props.children}
    </azkarContext.Provider>
  );
};

export { azkarContext, AzkarState };
