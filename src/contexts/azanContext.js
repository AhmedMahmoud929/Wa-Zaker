import React, { useState, useEffect } from "react";

const azanContext = React.createContext();

const AzanState = (props) => {
  // States
  const [azan, setAzan] = useState(null);
  const [date, setDate] = useState(null);

  // Effects
  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/calendarByCity?city=Cairo&country=Egypt&month=${
        new Date().getMonth() + 1
      }&year=${new Date().getFullYear()}`
    ).then((res) => {
      res.json().then((result) => {
        const data = result.data[new Date().getDate() - 1];
        setAzan({
          fajr: data.timings.Fajr.slice(0, 5),
          dhuhr: data.timings.Dhuhr.slice(0, 5),
          asr: data.timings.Asr.slice(0, 5),
          maghrib: data.timings.Maghrib.slice(0, 5),
          isha: data.timings.Isha.slice(0, 5),
        });
        setDate({
          weekDay: data.date.hijri.weekday.ar,
          date: data.date.gregorian.date,
          timeZone: data.meta.timezone,
        });
      });
    });
  }, []);

  return (
    <azanContext.Provider value={{ azan, date }}>
      {props.children}
    </azanContext.Provider>
  );
};

export { azanContext, AzanState };
