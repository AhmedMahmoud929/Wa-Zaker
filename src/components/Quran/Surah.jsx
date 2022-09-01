import React, { useContext } from "react";
import { surahContext } from "../../contexts/surahContext";

const Surah = ({ active, name, type, ayahs, num }) => {
  const { surahClickHandler } = useContext(surahContext);
  return (
    <div
      className={`surah ${active && "active"} `}
      onClick={() => surahClickHandler(num)}
    >
      <div className="title">{name}</div>
      <div className="disc">
        {type === "Meccan" ? "مكية" : "مدنية"} / {ayahs}{" "}
        {ayahs <= 10 ? "آيات" : "آيه"}
      </div>
    </div>
  );
};

export default Surah;
