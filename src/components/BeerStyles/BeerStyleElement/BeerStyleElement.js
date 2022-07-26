import React from 'react';

function BeerStyleElement(props) {

  const { name, abv_max, abv_min, ibu_min, ibu_max, description } = props;

  return(
    <li>
      <img src="" alt="Beer" />
      <div>
        <h2>{name}</h2>
        <h3>{abv_min} to {abv_max}</h3>
        <h3>{ibu_min} to {ibu_max}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default BeerStyleElement;