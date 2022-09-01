import React, { useContext } from "react";
import Surah from "./Surah";
import { surahContext } from "../../contexts/surahContext";

const QuranSearch = () => {
  const {
    dataLoaded,
    surahs,
    searchHandler,
  } = useContext(surahContext);

  return (
    <div className="search">
      <h1>السُوَر</h1>
      <div className="serach-inp">
        <form onSubmit={searchHandler}>
          <input
            placeholder="البحث عن سورة"
            list="surahs-names"
            id="surah-name"
            name="surah-name"
          />
          <button>إختيار</button>
        </form>

        <datalist id="surahs-names">
          {dataLoaded &&
            surahs.map((sur) => {
              const name = sur.name
                .split("")
                .filter((char) => {
                  return (
                    char.charCodeAt(0) < 1612 || char.charCodeAt(0) === 1649
                  );
                })
                .join("");
              return (
                <option
                  num={sur.number}
                  key={sur.number}
                  value={sur.number + "-" + name}
                />
              );
            })}
        </datalist>
      </div>

      <div className="surhas-selection">
        {dataLoaded ? (
          surahs.map((sur) => {
            return (
              <Surah
                num={sur.number}
                key={sur.number}
                name={sur.name}
                type={sur.revelationType}
                ayahs={sur.numberOfAyahs}
              />
            );
          })
        ) : (
          <center>
            <h3>إنتظر حتى تحميل البيانات</h3>
          </center>
        )}
      </div>
    </div>
  );
};

export default QuranSearch;
