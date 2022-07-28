import React from 'react';
import PropTypes from 'prop-types';
import styles from './BeerStylesElement.module.scss';
import pint from '../../assets/pint-beer.jpeg';
import hop from '../../assets/hops-2.jpeg';
import yeast from '../../assets/yeast.jpeg';

function BeerStyleElement(props) {
  const {
    name,
    id,
    type,
    firstTitle,
    firstMax,
    firstMin,
    secondTitle,
    secondMin,
    secondMax,
    description,
    show,
    reducer,
    country,
    porpose,
  } = props;

  return (
    <li className={styles.container}>
      {
        type === 'beer' ? (
          <img src={pint} alt="Beer" className={styles.beerImg} />
        ) : null
      }
      {
        type === 'hop' ? (
          <img src={hop} alt="Hop" className={styles.hopImg} />
        ) : null
      }
      {
        type === 'yeast' ? (
          <img src={yeast} alt="Yeast" />
        ) : null
      }
      <div className={styles.dataContainer}>
        <h2>
          {name}
          {
            country ? (
              <span className={styles.country}>{country}</span>
            ) : null
          }
        </h2>
        <div className={styles.button}>
          {show ? (
            <button type="submit" onClick={() => reducer(id)}>
              Less Info
            </button>
          ) : (
            <button type="submit" onClick={() => reducer(id)}>
              More Info
            </button>
          )}
        </div>
        {show ? (
          <h3>
            <span className={styles.ibu}>
              {firstTitle}
            </span>
            {firstMin}
            <span> to </span>
            {firstMax}
          </h3>
        ) : null}
        {show ? (
          <h3>
            <span className={styles.ibu}>
              {secondTitle}
            </span>
            {secondMin}
            <span> to </span>
            {secondMax}
          </h3>
        ) : null}
        {
          porpose !== '' && show ? (
            <h3>
              <span className={styles.ibu}>Purpose: </span>
              {porpose[0]}
            </h3>
          ) : null
        }
        {show ? <p>{description}</p> : null}
      </div>
    </li>
  );
}

BeerStyleElement.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  firstTitle: PropTypes.string,
  firstMin: PropTypes.number,
  firstMax: PropTypes.number,
  secondTitle: PropTypes.string,
  secondMin: PropTypes.number,
  secondMax: PropTypes.number,
  description: PropTypes.string,
  show: PropTypes.bool,
  reducer: PropTypes.func.isRequired,
  country: PropTypes.string,
  porpose: PropTypes.arrayOf(PropTypes.string),
};

BeerStyleElement.defaultProps = {
  name: '',
  firstTitle: '',
  firstMin: 0,
  firstMax: 0,
  secondTitle: '',
  secondMin: 0,
  secondMax: 0,
  description: '',
  show: false,
  country: '',
  porpose: '',
};

export default BeerStyleElement;
