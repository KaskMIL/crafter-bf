import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import styles from '../BeerStyles/BeerStylesPage.module.scss';

function SliderComponent(props) {
  const {
    firstTitle,
    secondTitle,
    firstHandleChange,
    firstStateValue,
    firstStateActive,
    secondHandleChange,
    secondStateValue,
    secondStateActive,
    firstMax,
    firstMin,
    secondMax,
    secondMin,
    firstStep,
    secondStep,
  } = props;

  const getText = (value, string) => `${value} ${string}`;

  return (
    <div className={styles.sliderContainer}>
      { firstStateActive ? <h2>{firstTitle}</h2> : null}
      { secondStateActive ? <h2>{secondTitle}</h2> : null}
      {
        // ABV //
        firstStateActive ? (
          <Slider
            onChange={(e) => firstHandleChange(e.target.value)}
            getAriaLabel={() => 'ABV'}
            valueLabelDisplay="auto"
            getAriaValueText={() => getText(firstStateValue, 'ABV')}
            value={firstStateValue}
            step={firstStep}
            marks
            min={firstMin}
            max={firstMax}
            sx={{
              width: 300,
              color: 'white',
            }}
          />
        ) : null
      }
      {
        // IBU //
        secondStateActive ? (
          <Slider
            onChange={(e) => secondHandleChange(e.target.value)}
            getAriaLabel={() => 'IBU'}
            valueLabelDisplay="auto"
            getAriaValueText={() => getText(secondStateValue, 'IBU')}
            value={secondStateValue}
            step={secondStep}
            marks
            min={secondMin}
            max={secondMax}
            sx={{
              width: 300,
              color: 'white',
            }}
          />
        ) : null
      }
    </div>
  );
}

SliderComponent.propTypes = {
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  firstHandleChange: PropTypes.func.isRequired,
  secondHandleChange: PropTypes.func.isRequired,
  firstStateValue: PropTypes.arrayOf(PropTypes.number).isRequired,
  firstStateActive: PropTypes.bool,
  secondStateValue: PropTypes.arrayOf(PropTypes.number).isRequired,
  secondStateActive: PropTypes.bool,
  firstMax: PropTypes.number.isRequired,
  firstMin: PropTypes.number.isRequired,
  secondMax: PropTypes.number.isRequired,
  secondMin: PropTypes.number.isRequired,
  firstStep: PropTypes.number.isRequired,
  secondStep: PropTypes.number.isRequired,
};

SliderComponent.defaultProps = {
  firstTitle: '',
  secondTitle: '',
  firstStateActive: false,
  secondStateActive: false,
};

export default SliderComponent;
