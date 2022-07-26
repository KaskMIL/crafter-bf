import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { showInfo } from '../../../Redux/StylesReducer/stylesReducer';
import styles from './BeerStylesElement.module.scss';
import beer from '../../../assets/pint-beer.jpeg';

function BeerStyleElement(props) {
  const dispatch = useDispatch();
  const {
    name, id, abvMax, abvMin, ibuMin, ibuMax, description, show,
  } = props;

  return (
    <li className={styles.container}>
      <img src={beer} alt="Beer" />
      <div className={styles.dataContainer}>
        <h2>{name}</h2>
        <div className={styles.button}>
          {show ? (
            <button type="submit" onClick={() => dispatch(showInfo(id))}>
              Less Info
            </button>
          ) : (
            <button type="submit" onClick={() => dispatch(showInfo(id))}>
              More Info
            </button>
          )}
        </div>
        {show ? (
          <h3>
            <span className={styles.ibu}>ABV: </span>
            {abvMin}
            <span> to </span>
            {abvMax}
          </h3>
        ) : null}
        {show ? (
          <h3>
            <span className={styles.ibu}>IBU: </span>
            {ibuMin}
            <span> to </span>
            {ibuMax}
          </h3>
        ) : null}
        {show ? <p>{description}</p> : null}
      </div>
    </li>
  );
}

BeerStyleElement.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  abvMin: PropTypes.number,
  abvMax: PropTypes.number,
  ibuMin: PropTypes.number,
  ibuMax: PropTypes.number,
  description: PropTypes.string,
  show: PropTypes.bool,
};

BeerStyleElement.defaultProps = {
  name: '',
  id: '',
  abvMin: 0,
  abvMax: 0,
  ibuMin: 0,
  ibuMax: 0,
  description: '',
  show: false,
};

export default BeerStyleElement;
