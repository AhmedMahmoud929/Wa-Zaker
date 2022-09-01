import React, { useContext } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { azkarContext } from "../../contexts/azkarContext";

const ZekrView = () => {
  const { zekr, zekrItem, arrowHandler, zekrNum } = useContext(azkarContext);
  return (
    <div className="zekr-view">
      <h1>{zekr.name}</h1>
      <h2>
        {zekrNum + 1}/{zekr.data.length}
      </h2>
      <div className="zekr-container">
        <p>{zekrItem.text}</p>
        <div>{zekrItem.disc}</div>
      </div>
      <div className="arrows">
        <BsArrowRightSquareFill
          className={`arr ${zekrNum === 0 && "disable"}`}
          onClick={() => arrowHandler("prev")}
        />
        <BsArrowLeftSquareFill
          className={`arr ${zekrNum === zekr.data.length-1  && "disable"}`}
          onClick={() => arrowHandler("next")}
        />
      </div>
    </div>
  );
};

export default ZekrView;
