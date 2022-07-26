import React from 'react';
import PropTypes from 'prop-types';

function YeastElement(props) {
  const {
    name,
    minAttenuation,
    maxAttenuation,
    minFahrenheit,
    maxFahrenheit,
    minCelsiius,
    maxCelsius,
    alcTolerance,
  } = props;

  return (
    <li>
      <img src="" alt="Yeast" />
      <div>
        <h2>{name}</h2>
        <h3>
          attenuation:
          {minAttenuation}
          to
          {maxAttenuation}
        </h3>
        <h3>Temperature</h3>
        <ul>
          <li>
            Fahrenheit:
            {minFahrenheit}
            to
            {maxFahrenheit}
          </li>
          <li>
            Celsius:
            {minCelsiius}
            to
            {maxCelsius}
          </li>
        </ul>
        <h3>
          Alcohol Tolerance:
          {alcTolerance}
        </h3>
      </div>
    </li>
  );
}

YeastElement.propTypes = {
  name: PropTypes.string,
  minAttenuation: PropTypes.number,
  maxAttenuation: PropTypes.number,
  minFahrenheit: PropTypes.number,
  maxFahrenheit: PropTypes.number,
  minCelsiius: PropTypes.number,
  maxCelsius: PropTypes.number,
  alcTolerance: PropTypes.number,
};

YeastElement.defaultProps = {
  name: '',
  minAttenuation: 0,
  maxAttenuation: 0,
  minFahrenheit: 0,
  maxFahrenheit: 0,
  minCelsiius: 0,
  maxCelsius: 0,
  alcTolerance: 0,
};

export default YeastElement;
