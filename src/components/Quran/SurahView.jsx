import React, { useContext, useState } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import tasmyaImg from "../../assets/imgs/tasmya.png";
import tasdeeqImg from "../../assets/imgs/tasdeeq.png";
import { surahContext } from "../../contexts/surahContext";

const SurahView = () => {
  const { surahs, surahNumber, surah, arrowHandler, surahLoaded } =
    useContext(surahContext);

  return (
    <div className="surah-view">
      <div className="reading">
        {surah ? (
          <>
            <div className="name">
              <BsArrowLeftSquareFill
                className={`arrow left ${
                  surahNumber === surahs.length && "disable"
                }`}
                onClick={() => arrowHandler("next")}
              />
              <BsArrowRightSquareFill
                className={`arrow right ${surahNumber === 1 && "disable"}`}
                onClick={() => arrowHandler("prev")}
              />
              <h1>{surahLoaded ? surah.name_ar : <div>جاري التحميل</div>}</h1>
              <h2>{surahLoaded ? surah.name_en : "جاري التحميل"}</h2>
            </div>
            <div className="ayahs-container">
              <div className="tasmya">
                {surahLoaded ? (
                  <img src={tasmyaImg} alt="بسم الله الرحمن الرحيم" />
                ) : (
                  <div className="loaded-lg">........</div>
                )}
              </div>
              <div className="ayahs">
                {surahLoaded ? (
                  surah.ayahs.map((ayah) => {
                    return (
                      <React.Fragment key={ayah.number}>
                        <span className="ayah-text">{ayah.text}</span>
                        <span className="ayah-num">
                          &#40;{ayah.numberInSurah}&#41;
                        </span>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <div className="loaded">........</div>
                )}
              </div>
              <div className="tasmya">
                {surahLoaded ? (
                  <img src={tasdeeqImg} alt="صدق الله العظيم" />
                ) : (
                  <div className="loaded-lg">........</div>
                )}
              </div>
            </div>
          </>
        ) : (
          <center>
            <h2>برجاء إختيار سورة</h2>
          </center>
        )}
      </div>
    </div>
  );
};

export default SurahView;
