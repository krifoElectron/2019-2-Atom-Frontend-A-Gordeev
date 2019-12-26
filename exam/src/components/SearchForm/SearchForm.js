import React, { useState, useEffect } from 'react';

import { API_KEY } from '../../pages/WeatherPage/WeatherPage';

import './searchForm.css';

export function SearchForm({ onCityAdd }) {
  const [value, setValue] = useState('');
  const [city, setCities] = useState({});

  useEffect(() => {
    console.log('val', value);
    if (value) {
      console.log('z');
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCities(data);
        });
    }
  }, [value]);

  console.log(city);
  return (
    <div className="search-form">
      <input placeholder="city" onChange={(event) => setValue(event.target.value)} value={value} />
      {city.name && (
        <div className="search-click" onClick={() => onCityAdd(city.id)}>
          <div className="search-city">{city.name}</div>
          <div className="low-text">click me to add</div>
        </div>
      )}
    </div>
  );
}
