import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import styles from './BeerStylesPage.module.scss';

function SliderComponent(props) {
  const { firstTitle, secondTitle, firstHandleChange, firstState, secondHandleChange, secondState} = props;

  return(
    <div className={styles.sliderContainer}>
        {
          {firstState}.active ? (
            <h2>{firstTitle}</h2>
          ) : null
        }
        {
          {secondState}.active ? (
            <h2>{secondTitle}</h2>
          ) : null
        }
        {
          // ABV //
          {firstState}.active ? (
            <Slider
              onChange={(e) => firstHandleChange(e.target.value)}
              getAriaLabel={() => 'ABV'}
              valueLabelDisplay="auto"
              getAriaValueText={() => getText(abvValue.value, 'ABV')}
              value={firstState.value}
              step={1}
              marks
              min={1}
              max={14}
              sx={{
                width: 300,
                color: 'white',
              }}
            />
          ) : null
        }
        {
          // IBU //
          {secondState}.active ? (
            <Slider
              onChange={(e) => secondHandleChange(e.target.value)}
              getAriaLabel={() => 'IBU'}
              valueLabelDisplay="auto"
              getAriaValueText={() => getText(ibuValue.value, 'IBU')}
              value={secondState.value}
              step={1}
              marks
              min={0}
              max={120}
              sx={{
                width: 300,
                color: 'white',
              }}
            />
          ) : null
        }
      </div>
  )
}

SliderComponent.propTypes = {
  firstTitle: PropTypes.string,
  secondTitle: PropTypes.string,
  firstHandleChange: PropTypes.func.isRequired,
  secondHandleChange: PropTypes.func.isRequired,
  firstState: PropTypes.object,
  secondState: PropTypes.object,
}

export default SliderComponent;