import React, { createContext, useEffect, useState } from "react";

const surahContext = createContext();

const SurahState = (props) => {
  // States
  const [dataLoaded, setDataLoad] = useState(false);
  const [surahs, setSurahs] = useState([]);
  const [surah, setSurah] = useState(null);
  const [surahNumber, setSurahNumber] = useState(NaN);
  const [surahLoaded, setSurahLoad] = useState(null);

  // Functions
  const surahClickHandler = (num) => {
    setSurahLoad(false);
    setSurahNumber(num);
    fetch(`http://api.alquran.cloud/v1/surah/${num}`).then((res) => {
      res.json().then((result) => {
        const data = result.data;
        const surah = {
          name_ar: data.name,
          name_en: data.englishName,
          ayahs: data.ayahs,
        };
        setSurah(surah);
        setSurahLoad(true);
      });
    });
  };

  const arrowHandler = (dir = "") => {
    setSurahLoad(false);
    fetch(
      `http://api.alquran.cloud/v1/surah/${
        dir === "next" ? surahNumber + 1 : surahNumber - 1
      }`
    ).then((res) => {
      res.json().then((result) => {
        const data = result.data;
        const surah = {
          name_ar: data.name,
          name_en: data.englishName,
          ayahs: data.ayahs,
        };
        setSurahNumber((prev) => (dir === "next" ? prev + 1 : prev - 1));
        setSurah(surah);
        setSurahLoad(true);
      });
    });
  };

  function searchHandler(e) {
    e.preventDefault();
    const number = Number(e.target.children[0].value.split("-")[0]);
    if (number !== NaN) {
      surahClickHandler(number);
    }
  }

  // Effects
  useEffect(() => {
    // Fetch meta data [name-type-ayahsCount]
    fetch("http://api.alquran.cloud/v1/meta").then((res) =>
      res.json().then((result) => {
        setSurahs(result.data.surahs.references);
        setDataLoad(true);
      })
    );
  }, []);
  return (
    <surahContext.Provider
      value={{
        dataLoaded,
        surahs,
        surah,
        surahNumber,
        surahLoaded,
        surahClickHandler,
        arrowHandler,
        searchHandler,
      }}
    >
      {props.children}
    </surahContext.Provider>
  );
};

export { surahContext, SurahState };
