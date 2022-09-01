import React, { useContext } from "react";
import Zekr from "./Zekr";
import ZekrView from "./ZekrView";
import { azkarContext } from "../../contexts/azkarContext";
import azkarApi from "../../assets/jsons/azkar.json";

const Azkar = () => {
  const { zekr } = useContext(azkarContext);

  return (
    <div className="azkar route-h">
      <div className="parent">
        <div className="top">
          {azkarApi.map((ele, index) => {
            return (
              <Zekr
                key={ele.id}
                name={ele.name}
                count={ele.data.length}
                icon={ele.icon}
                id={ele.id}
              />
            );
          })}
        </div>
        <div className="bottom">
          {zekr ? (
            <ZekrView />
          ) : (
            <h2 className="zekr-msg">من فضلك إختر ذِكر</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Azkar;
