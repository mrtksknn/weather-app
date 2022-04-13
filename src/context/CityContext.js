import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import axios from "axios";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const userId = "d7631044ba4bf4bb3aa5844cecf97978";
  const [city, setCity] = useState(localStorage.getItem("city") || "Ankara");
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    localStorage.setItem("city", city);
    (async () => {
      const { data: cityInput } = await axios(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${userId}`
      );
      let lat = await cityInput[0].lat;
      let lon = await cityInput[0].lon;
      const { data: weather } = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${userId}`
      );
      setForecast(weather.daily);
    })();
  }, [city]);

  const values = {
    city,
    setCity,
    forecast,
  };
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);