import React from 'react';

import './topElement.scss';

export function TopElement({ location, temperature }) {
  const { city, region } = location;

  return (
    <div className="top-element">
      <div>
        <div className="region">{region}</div>
        <div className="city">{`${region}, ${city}`}</div>
      </div>
      <div className="weather">{temperature}&deg;</div>
    </div>
  );
}
