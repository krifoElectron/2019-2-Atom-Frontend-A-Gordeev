import React from 'react';
// import { BrowserRouter as Router } from 'react-'

import { WeatherPage } from './pages/WeatherPage/WeatherPage';

import './app.scss';

export function App() {
  return (
    <div className="main-container">
      <WeatherPage />
    </div>
  );
}
