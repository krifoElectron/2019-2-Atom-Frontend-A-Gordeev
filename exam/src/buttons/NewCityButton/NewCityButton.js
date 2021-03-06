import React from 'react';

import { ReactComponent as NewCity } from './newCity.svg';

import './newCityButton.css';

export function NewCityButton({ onClick }) {
  return (
    <div className="add-button" onClick={onClick}>
      <NewCity />
    </div>
  );
}
