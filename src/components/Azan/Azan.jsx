import React, { useContext } from "react";
import { azanContext } from "../../contexts/azanContext";
import AzanDate from "./AzanDate";
import NextAzan from "./NextAzan";

const Azan = () => {
  const { azan, date } = useContext(azanContext);

  return (
    azan && (
      <div className="azan route-h">
        <div className="right">
          <div className="top">
            <div className="date">
              <div>{date.date}</div>
              <div>{date.timeZone}</div>
            </div>
            <div className="day">{date.weekDay}</div>
            <div className="next">
              <NextAzan name="آذان العصر" pm={false} time={azan.asr} />
            </div>
          </div>
          <div className="bottom">
            <p>قال رسول الله - صلى الله عليه و سلم :</p>
            <h1>
              <span>(</span> الصَّلَاةُ الخَمْسُ، وَالْجُمْعَةُ إلى الجُمْعَةِ،
              كَفَّارَةٌ لِما بيْنَهُنَّ، ما لَمْ تُغْشَ الكَبَائِرُ{" "}
              <span>)</span>
            </h1>
            <p>صدق رسول الله - صلى الله عليه و سلم</p>
            <h2>صحيح - [رواه مسلم]</h2>
          </div>
        </div>
        <div className="left">
          <AzanDate name="آذان الفجر" pm={false} time={azan.fajr} />
          <AzanDate name="آذان الظهر" pm={false} time={azan.dhuhr} />
          <AzanDate name="آذان العصر" pm={true} time={azan.asr} />
          <AzanDate name="آذان المغرب" pm={true} time={azan.maghrib} />
          <AzanDate name="آذان العشاء" pm={true} time={azan.isha} />
        </div>
      </div>
    )
  );
};

export default Azan;
