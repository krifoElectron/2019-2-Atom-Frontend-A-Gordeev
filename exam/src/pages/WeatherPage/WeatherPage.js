import React, { useState, useEffect } from 'react';

import { Hat } from '../../components/Hat/Hat';
import { WeatherElement } from '../../components/WeatherElement/WeatherElement';
import { NewCityButton } from '../../buttons/NewCityButton/NewCityButton';
import { SearchForm } from '../../components/SearchForm/SearchForm';

import './weatherPage.css';

export const API_KEY = 'aae465fc2af15dcf4b7a36033aae951f';

export function WeatherPage() {
  const [geolocation, setGeolocation] = useState({ latitude: '', longitude: '' });
  const [cityList, setCityList] = useState([]);
  const [mainWeather, setMainWeather] = useState({});
  const [visibleForm, setVisibleForm] = useState(false);
  const [cities, setCities] = useState('524901,1486209,6541934,550280,2643743');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeolocation({
        latitude: position.coords.latitude.toFixed(2),
        longitude: position.coords.longitude.toFixed(2),
      });
    });
  }, []);

  useEffect(() => {
    if (geolocation.latitude) {
      // fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&units=metric&appid=${API_KEY}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setMainWeather(data);
        })
        .catch((err) => console.log(err));
    }

    console.log('cities', cities);
    fetch(`http://api.openweathermap.org/data/2.5/group?id=${cities}&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setCityList(data.list);
      });
  }, [geolocation, cities]);

  return (
    <>
      <div className="weather-page">
        <Hat />
        {mainWeather.name && <WeatherElement weatherData={mainWeather} />}
        {cityList.map((elem) => (
          <WeatherElement weatherData={elem} />
        ))}
        {visibleForm ? (
          <SearchForm
            onCityAdd={(newCity) => {
              setCities(cities + `,${newCity}`);
              setVisibleForm(!visibleForm);
            }}
          />
        ) : (
          <NewCityButton
            onClick={() => {
              setVisibleForm(!visibleForm);
              console.log(visibleForm);
            }}
          />
        )}
      </div>
    </>
  );
}
