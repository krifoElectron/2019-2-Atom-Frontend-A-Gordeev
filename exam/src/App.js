import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { WeatherPage } from './pages/WeatherPage/WeatherPage';
import { DetailedInformation } from './pages/DetailedInformation/DetailedInformation';

import './app.css';

export function App() {
  return (
    <div className="main-container">
      <Router basename="/2019-2-Atom-Frontend-A-Gordeev">
        <Switch>
          <Route path="/" exact>
            <WeatherPage />
          </Route>
          <Route path="/details/:cityId" render={(props) => <DetailedInformation {...props} />}></Route>
        </Switch>
      </Router>
    </div>
  );
}
