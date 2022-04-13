import React from 'react';
import { useCity } from "../context/CityContext";

const Body = () => {

  const { forecast } = useCity();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="bg-warning p-2 text-white bg-opacity-75 d-flex flex-nowrap">
      {forecast.map((day, index) => (
        <div
          className={
            index === 0
              ? "bg-light text-dark border border-danger border-3  card text-secondary"
              : " card text-secondary"
          }
          style={{ width: "18rem" }}
          key={index}
        >
          <p className="card-text ">
            {weekday[new Date(day.dt * 1000).getDay()]}
          </p>
          <img
            className="card-img-top"
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <div className="card-body">
            <p className="card-text">
              <span>{Math.round(day.temp.day - 273)}°C </span>
              <span>{Math.round(day.temp.night - 273)}°C</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Body