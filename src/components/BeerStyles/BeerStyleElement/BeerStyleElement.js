import React from 'react';
import PropTypes from 'prop-types';
import styles from './BeerStylesElement.module.scss';
import beer from '../../../assets/pint-beer.jpeg';

function BeerStyleElement(props) {
  const {
    name, abvMax, abvMin, ibuMin, ibuMax, description,
  } = props;

  return (
    <li className={styles.container}>
      <img src={beer} alt="Beer" />
      <div className={styles.dataContainer}>
        <h2>{name}</h2>
        <h3>
          <span className={styles.ibu}> ABV: </span>
          {abvMin}
          <span> to </span>
          {abvMax}
        </h3>
        <h3>
          <span className={styles.ibu}> IBU: </span>
          {ibuMin}
          <span> to </span>
          {ibuMax}
        </h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

BeerStyleElement.propTypes = {
  name: PropTypes.string,
  abvMin: PropTypes.number,
  abvMax: PropTypes.number,
  ibuMin: PropTypes.number,
  ibuMax: PropTypes.number,
  description: PropTypes.string,
};

BeerStyleElement.defaultProps = {
  name: '',
  abvMin: 0,
  abvMax: 0,
  ibuMin: 0,
  ibuMax: 0,
  description: '',
};

export default BeerStyleElement;
