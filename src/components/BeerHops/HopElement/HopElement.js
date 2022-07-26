import React from 'react';

function HopElement (props) {
  const { name, alpha_acid_min, alpha_acid_max, beta_acid_min, beta_acid_max, porpose, country, description, } = props;

  return(
    <li>
      <img src="" alt="Hop" />
      <div>
        <h2>{name} <span>{country}</span></h2>
        <h3>Alpha Acid: {alpha_acid_min} to {alpha_acid_max}</h3>
        <h3>Beta Acid: {beta_acid_min} to {beta_acid_max}</h3>
        <h3>{porpose}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default HopElement;