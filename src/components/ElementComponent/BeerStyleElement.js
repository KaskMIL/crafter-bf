import React from 'react';
import PropTypes from 'prop-types';
import styles from './BeerStylesElement.module.scss';

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
    alcTolerance,
  } = props;

  return (
    <li className={styles.container}>
      {type === 'beer' ? <div className={styles.beerImg} /> : null}
      {type === 'hop' ? <div className={styles.hopImg} /> : null}
      {type === 'yeast' ? <div className={styles.yeastImg} /> : null}
      <div className={styles.dataContainer}>
        <h2>
          {name}
          {country ? <span className={styles.country}>{country}</span> : null}
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
        <div className={type === 'yeast' ? styles.yeast : null}>
          {show ? (
            <h3>
              <span className={styles.ibu}>{firstTitle}</span>
              {firstMin}
              <span> to </span>
              {firstMax}
            </h3>
          ) : null}
          {show ? (
            <h3>
              <span className={styles.ibu}>{secondTitle}</span>
              {secondMin}
              <span> to </span>
              {secondMax}
            </h3>
          ) : null}
          {porpose !== [] && show ? (
            <h3>
              <span className={styles.ibu}>Purpose: </span>
              {porpose[0]}
            </h3>
          ) : null}
          {alcTolerance !== 0 && show ? (
            <h3>
              <span className={styles.ibu}>Alcohol Tolerance: </span>
              {alcTolerance}
            </h3>
          ) : null}
          {show ? <p>{description}</p> : null}
        </div>
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
  alcTolerance: PropTypes.number,
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
  porpose: [],
  alcTolerance: 0,
};

export default BeerStyleElement;
