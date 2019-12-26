import React, { useState, useEffect } from 'react';

import { WeatherDay } from '../../components/WeatherDay/WeatherDay';

import './detailedInformation.css';

import { API_KEY } from '../WeatherPage/WeatherPage';

const getDayOfWeek = (str) => {
  const date = new Date(Date.parse(str));
  return numToDayOfWeek[date.getDay()];
};

const numToDayOfWeek = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tues',
  3: 'Wed',
  4: 'Thrs',
  5: 'Fri',
  6: 'Sat',
};

const makeFiveDays = (list) => {
  let days = [list[0]];
  let index = 1;
  const nextDay = (new Date().getDay() + 1) % 7;
  let z = 0;
  while (nextDay !== new Date(Date.parse(list[index].dt_txt)).getDay()) {
    index += 1;
    z++;
    if (z >= 20) {
      break;
    }
  }
  console.log(index);
  const rest = list.slice(index).filter((element) => element.dt_txt.slice(11, 13) === '15');
  days = [...days, ...rest];
  return days;
};

export function DetailedInformation({ match }) {
  const [weatherData, setWeatherData] = useState({});
  const [therrDays, setThreeDays] = useState([]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${match.params.cityId}&units=metric&appid=${API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const list = makeFiveDays(data.list);
        data.list = list;
        console.log(data.list, 'lissss');
        setWeatherData(data);

        console.log('dayNames');

        const dayNames = ['Today', 'Tomorrow', getDayOfWeek(data.list[2].dt_txt)];
        console.log({ dayNames });

        setThreeDays(
          data.list.slice(0, 3).map((el, index) => {
            console.log('asdfasdfasdfa');
            return {
              description: el.weather[0].description,
              minTemp: Math.round(el.main.temp_min),
              maxTemp: Math.round(el.main.temp_max),
              day: dayNames[index],
              icon: el.weather[0].icon,
            };
          }),
        );
      })
      .catch((err) => console.log(err));
  }, [match.params.cityId]);

  const city = weatherData.city ? weatherData.city.name : '';
  const { main, weather } = weatherData.list ? weatherData.list[0] : false;
  // const { weather } = weatherData.list ? weatherData.list[0] : false;
  const minTemperature = main ? Math.round(main.temp_min) : 0;
  const maxTemperature = main ? Math.round(main.temp_max) : 0;
  const temperature = Math.round((minTemperature + maxTemperature) / 2);
  console.log('w', weather);
  const description = main ? weather[0].description : '';

  // const todayWeather = main ? weather[0].description : '';

  return (
    <div className="detail-page">
      <div className="title">{city}</div>
      <div className="detail-weather">
        <div className="temperature">
          {temperature}
          <div className="celsius">&deg;C</div>
        </div>
        <div className="description">{description}</div>
      </div>
      <div className="three-days">
        {therrDays.map(({ day, description, minTemp, maxTemp, icon }) => (
          <WeatherDay day={day} description={description} minTemp={minTemp} maxTemp={maxTemp} icon={icon} />
        ))}
      </div>
    </div>
  );
}
