import React from 'react';

import './weatherDay.scss';

export function WeatherDay({ day, description, minTemp, maxTemp, icon }) {
  console.log(icon, 'img');
  return (
    <div className="weather-day">
      <div class="left-block">
        <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
        <div>{`${day}  ${description}`}</div>
      </div>
      <div>{`${minTemp} / ${maxTemp}`}</div>
    </div>
  );
}
