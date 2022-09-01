import React, { useContext, useEffect, useState } from "react";
import { azanContext } from "../../contexts/azanContext";

const NextAzan = () => {
  const { azan } = useContext(azanContext);
  const [nextAzan, setNextAzan] = useState(null);

  // Functions
  const h = (date = "") => {
    return +date.slice(0, 2);
  };
  const m = (date = "") => {
    return +date.slice(3, 5);
  };
  const checkNext = (nHours) => {
    if (h(azan.fajr) <= 12-nHours && h(azan.asr) > nHours) {
      setNextAzan({
        name: "آذان الظهر",
        hour: h(azan.dhuhr),
        minutes: m(azan.dhuhr),
        pm: false,
      });
    } else if (h(azan.dhuhr) <= nHours && h(azan.maghrib) > nHours) {
      setNextAzan({
        name: "آذان العصر",
        hour: h(azan.asr),
        minutes: m(azan.asr),
        pm: true,
      });
    } else if (h(azan.asr) <= nHours && h(azan.isha) > nHours) {
      setNextAzan({
        name: "آذان المغرب",
        hour: h(azan.maghrib),
        minutes: m(azan.maghrib),
        pm: true,
      });
    } else if (h(azan.maghrib) <= nHours && h(azan.fajr) > nHours) {
      setNextAzan({
        name: "آذان العشاء",
        hour: h(azan.isha),
        minutes: m(azan.isha),
        pm: true,
      });
    } else if (h(azan.isha) - 12 <= nHours + 12 && h(azan.fajr) > nHours) {
      setNextAzan({
        name: "آذان الفجر",
        hour: h(azan.fajr),
        minutes: m(azan.fajr),
        pm: false,
      });
    }
  };

  // Effects
  useEffect(() => {
    const date = new Date();
    let nHours = date.getHours();
    checkNext(nHours);
  }, []);

  return (
    nextAzan && (
      <div className="azanDate next">
        <div className="right">
          <h1>
            الآذان <br />
            القادم :{" "}
          </h1>
        </div>
        <div className="left">
          <h1>{nextAzan.name}</h1>
          <h2>
            {nextAzan.minutes < 10 ? "0" + nextAzan.minutes : nextAzan.minutes}{" "}
            :{" "}
            {nextAzan.hour < 10
              ? "0" + nextAzan.hour
              : nextAzan.hour > 12
              ? "0" + (nextAzan.hour - 12)
              : nextAzan.hour}{" "}
            {nextAzan.pm ? "م" : "ص"}
          </h2>
        </div>
      </div>
    )
  );
};

export default NextAzan;
