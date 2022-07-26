import React from 'react';

function YeastElement (props) {
  const { name, min_attenuation, max_attenuation, min_fahrenheit, max_fahrenheit, min_celsiius, max_celsius, alc_tolerance, } = props;

  return(
    <li>
      <img src="" alt="Yeast" />
      <div>
        <h2>{name}</h2>
        <h3>attenuation: {min_attenuation} to {max_attenuation}</h3>
        <h3>Temperature</h3>
        <ul>
          <li>Fahrenheit: {min_fahrenheit} to {max_fahrenheit}</li>
          <li>Celsius: {min_celsiius} to {max_celsius}</li>
        </ul>
        <h3>Alcohol Tolerance: {alc_tolerance}</h3>
      </div>
    </li>
  )
}

export default YeastElement;