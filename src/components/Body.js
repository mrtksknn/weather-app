import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import { useCity } from "../context/CityContext";

const Body = () => {

  const { forecast } = useCity();
  const weekday = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        {forecast.map((day, index) => (
          <Grid item md={1.2} sm={3} xs={3}
            className={ index === 0 ? "first__day" : "" }
            style={{ width: "12rem", padding: '20px', textAlign: 'center' }}
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
            <div>
              <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <Typography sx={{color: '#959393', fontSize: '20px'}}>{Math.round(day.temp.day - 273)}°</Typography>
                <Typography sx={{fontSize: '20px'}}>{Math.round(day.temp.night - 273)}°</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Body