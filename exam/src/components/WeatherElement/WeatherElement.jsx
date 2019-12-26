import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { TopElement } from '../TopElement/TopElement';
import { BottomElement } from '../BottomElement/BottomElement';

import './weatherElement.scss';

const degToDirection = (deg) => {
  const index = Math.round(deg / 45);
  const directions = ['South', 'Southwest', 'West', 'Northwest', 'North', 'Northeast', 'East', 'Southeast'];

  return directions[index];
};

export function WeatherElement({ weatherData }) {
  const { name, main, wind, sys, weather } = weatherData;
  // const minTemperature = main.temp_min > 100 ? Math.round(main.temp_min) - 273 : Math.round(main.temp_min);
  // const maxTemperature = main.temp_max > 100 ? Math.round(main.temp_max) - 273 : Math.round(main.temp_max);
  const minTemperature = Math.round(main.temp_min);
  const maxTemperature = Math.round(main.temp_max);
  const temperature = Math.round((minTemperature + maxTemperature) / 2);
  const humidity = main.humidity;
  const windSpeed = wind.speed.toFixed(1);
  const icon = weather[0].icon;
  const country = sys.country;
  const windDirection = degToDirection(wind.deg);

  return (
    <Link style={{ textDecoration: 'none' }} className="weather-element" to={`details/${weatherData.id}`}>
      {/* <div className="weather-element"> */}
      <TopElement location={{ city: name, country }} temperature={temperature} icon={icon} />
      <BottomElement
        humidity={humidity}
        windDirection={windDirection}
        windSpeed={windSpeed}
        minTemperature={minTemperature}
        maxTemperature={maxTemperature}
      />
      {/* </div> */}
    </Link>
  );
}

WeatherElement.defaultProps = {
  weatherData: { name: '' },
};

WeatherElement.propTypes = {
  weatherData: PropTypes.object,
};
