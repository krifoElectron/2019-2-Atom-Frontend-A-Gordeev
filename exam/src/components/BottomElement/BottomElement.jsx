import React from 'react';

import './bottomElement.scss';

export function BottomElement({ humidity, windDirection, windSpeed, minTemperature, maxTemperature }) {
  return (
    <div className="bottom-element">
      <div>{`Humidity ${humidity}% | ${windDirection} | ${windSpeed} m/s`}</div>
      <div>{`${maxTemperature} / ${minTemperature}`}&deg;C</div>
    </div>
  );
}
