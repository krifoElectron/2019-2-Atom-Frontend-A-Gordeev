import React from 'react';
import PropTypes from 'prop-types';

import { TopElement } from '../TopElement/TopElement';
import { BottomElement } from '../BottomElement/BottomElement';

import './weatherElement.scss';

export function WeatherElement({ weatherData }) {
  const { name, main } = weatherData;
  const minTemperature = main.temp_min;
  const maxTemperature = main.temp_max;
  return (
    <div className="weather-element">
      <TopElement location={{ city: 'Moscow', region: name }} temperature={7} />
      <BottomElement
        humidity={77}
        windDirection={'southwest'}
        windSpeed={2.5}
        minTemperature={minTemperature}
        maxTemperature={maxTemperature}
      />
    </div>
  );
}

WeatherElement.defaultProps = {
  weatherData: { name: '' },
};

WeatherElement.propTypes = {
  weatherData: PropTypes.object,
};
