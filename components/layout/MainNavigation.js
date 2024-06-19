import React from "react";
import styles from "../layout/MainNavigation.module.css";

const MainNavigation = ({ cities, currentCity, handleCurrentCity }) => {
  return (
    <nav className={styles.nav}>
      {cities.map((city) => (
        <button
          className={currentCity === city ? styles.active : ""}
          key={city}
          onClick={() => handleCurrentCity(city)}
        >
          {city}
        </button>
      ))}
    </nav>
  );
};

export default MainNavigation;
