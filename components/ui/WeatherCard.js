import React from "react";
import styles from "../ui/WeatherCard.module.css";

const WeatherCard = ({ city, current, tempType, icon, forecast }) => {
  const getDayLabel = (index) => {
    if (index === 0) return "TOMORROW";
    const date = new Date();
    date.setDate(date.getDate() + index + 1);
    return date.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
  };

  return (
    <div className={`row ${styles.twoColumnLayout}`}>
      <div className={`col-12 col-sm-12 col-md-8 col-lg-8 ${styles.column1}`}>
        <div>
          <div className={styles.city}>
            <h1>{city.toUpperCase()}</h1>
          </div>
          <div className={styles.twoColumnTempInfo}>
            <div className={styles.tempInfoCol1}>
              <p>
                <span className={styles.bigText}>{current}°</span> <br />
                <span className={styles.smallText}>CURRENT</span>
              </p>
            </div>
            <div className={styles.tempInfoCol2}>
              <img src={icon} alt={tempType} className={styles.weatherIcon} />
              <p className={styles.smallText}>{tempType.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`col-12 col-sm-12 col-md-3 col-lg-3 ${styles.column2}`}>
        {forecast.slice(0, 4).map(
          (
            day,
            index // Ensure only 3 days are mapped
          ) => (
            <div key={index} className={styles.row}>
              <div className={styles.cell}>
                {getDayLabel(index)} <br />
                <span className={styles.forcastText}>
                  {Math.round(day.day.avgtemp_c)}°C
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
