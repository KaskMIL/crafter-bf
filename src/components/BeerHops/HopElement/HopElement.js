import React from 'react';
import PropTypes from 'prop-types';

function HopElement(props) {
  const {
    name,
    alphaAcidMin,
    alphaAcidMax,
    betaAcidMin,
    betaAcidMax,
    porpose,
    country,
    description,
  } = props;

  return (
    <li>
      <img src="" alt="Hop" />
      <div>
        <h2>
          {name}
          <span>{country}</span>
        </h2>
        <h3>
          Alpha Acid:
          {alphaAcidMin}
          to
          {alphaAcidMax}
        </h3>
        <h3>
          Beta Acid:
          {betaAcidMin}
          to
          {betaAcidMax}
        </h3>
        <h3>{porpose}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

HopElement.propTypes = {
  name: PropTypes.string,
  alphaAcidMin: PropTypes.number,
  alphaAcidMax: PropTypes.number,
  betaAcidMin: PropTypes.number,
  betaAcidMax: PropTypes.number,
  porpose: PropTypes.string,
  country: PropTypes.string,
  description: PropTypes.string,
};

HopElement.defaultProps = {
  name: '',
  alphaAcidMin: 0,
  alphaAcidMax: 0,
  betaAcidMin: 0,
  betaAcidMax: 0,
  porpose: '',
  country: '',
  description: '',
};

export default HopElement;
