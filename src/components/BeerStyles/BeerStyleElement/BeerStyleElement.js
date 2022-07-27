import React from 'react';
import PropTypes from 'prop-types';
import styles from './BeerStylesElement.module.scss';
import beer from '../../../assets/pint-beer.jpeg';

function BeerStyleElement(props) {
  const {
    name,
    id,
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
      <img src={beer} alt="Beer" />
      <div className={styles.dataContainer}>
        <h2>
          {name}
          {
            country ? (
              <span>{country}</span>
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
              <span className={styles.ibu}>Porpose: </span>
              {porpose}
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
  porpose: PropTypes.string,
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
