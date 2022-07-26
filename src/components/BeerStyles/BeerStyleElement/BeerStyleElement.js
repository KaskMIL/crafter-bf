import React from 'react';
import styles from './BeerStylesElement.module.scss'
import beer from '../../../assets/pint-beer.jpeg';

function BeerStyleElement(props) {

  const { name, abv_max, abv_min, ibu_min, ibu_max, description } = props;

  return(
    <li className={styles.container}>
      <img src={beer} alt="Beer" />
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