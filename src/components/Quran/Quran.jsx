import React from "react";
import QuranSearch from "./QuranSearch";
import SurahView from "./SurahView";

const Quran = () => {
  return (
    <div className="quran route-h">
      <QuranSearch />
      <SurahView />
    </div>
  );
};

export default Quran;
