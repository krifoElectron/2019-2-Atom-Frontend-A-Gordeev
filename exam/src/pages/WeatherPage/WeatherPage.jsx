import React, { useState, useEffect, useRef } from 'react';

import { Hat } from '../../components/Hat/Hat';
import { WeatherElement } from '../../components/WeatherElement/WeatherElement';

import './weatherPage.scss';

const API_KEY = 'aae465fc2af15dcf4b7a36033aae951f';

export function WeatherPage() {
  const [geolocation, setGeolocation] = useState({ latitude: '', longitude: '' });
  const [cityList, setCityList] = useState([]);
  const [mainWeather, setMainWeather] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      console.log(position.coords.latitude, position.coords.longitude);
      setGeolocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
    });
    console.log(geolocation.latitude, 'adas');
  }, []);

  useEffect(() => {
    if (geolocation.latitude) {
      // fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=${API_KEY}`,
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data, 'dattta');
          setMainWeather(data);
        })
        .catch((err) => console.log(err));
    }
  }, [geolocation]);

  console.log(geolocation);
  return (
    <div className="weather-page">
      <Hat />
      <div>{geolocation.latitude ? geolocation.latitude : 'no'}</div>
      <WeatherElement weatherData={mainWeather} />
    </div>
  );
}
