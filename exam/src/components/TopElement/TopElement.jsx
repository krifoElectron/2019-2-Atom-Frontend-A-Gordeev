import React from 'react';

import './topElement.scss';

export function TopElement({ location, temperature, icon }) {
  const { city, country } = location;

  return (
    <div className="top-element">
      <div>
        <div className="region">{city}</div>
        <div className="city">{country}</div>
      </div>
      <div className="weather">
        <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="w" />
        <div className="temperature">{temperature}&deg;</div>
      </div>
    </div>
  );
}
