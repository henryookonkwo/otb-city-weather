import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import WeatherCard from "../components/ui/WeatherCard";
import MainNavigation from "../components/layout/MainNavigation";
import "bootstrap/dist/css/bootstrap.min.css";

const cities = ["OTTAWA", "ALBERTA", "LAGOS"];

const Home = () => {
  const [currentCity, setCurrentCity] = useState("Ottawa");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData(currentCity);
  }, [currentCity]);

  const fetchWeatherData = async (city) => {
    setIsLoading(true);
    setError(null);

    try {
      const apiKey = "WILL_BE_PROVIDED_IN_EMAIL";
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`
      );

      setWeatherData(response.data.current);
      setForecastData(response.data.forecast.forecastday); // Get forecast for the next three days
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      console.error("Error fetching weather data:", error);
    }
  };

  const handleCurrentCity = (city) => {
    setCurrentCity(city);
  };

  return (
    <div className={styles.container}>
      <MainNavigation
        cities={cities}
        currentCity={currentCity}
        handleCurrentCity={handleCurrentCity}
      />

      {isLoading ? (
        <p>Loading weather data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        weatherData &&
        forecastData && (
          <div className={styles.weatherContainer}>
            <WeatherCard
              city={currentCity}
              current={Math.round(weatherData.temp_c)}
              tempType={weatherData.condition.text}
              icon={weatherData.condition.icon}
              forecast={forecastData}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Home;
