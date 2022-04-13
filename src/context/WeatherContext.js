import { createContext, useState } from "react";
import CitiesData from './weatherData.json';

const weatherContext = createContext();

export const WeatherProvider = ({ data }) => {
  const [city, setCity] = useState(CitiesData[5]);
  const [weatherData, setWeatherData] = useState([]);
  const values = {
    city,
    setCity,
    CitiesData,
    weatherData,
    setWeatherData
  };
  return <weatherContext.Provider value={values}>{data}</weatherContext.Provider>
};

export default weatherContext;