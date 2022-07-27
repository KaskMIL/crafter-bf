import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@mui/material/Slider';
import { getStylesList } from '../../Redux/StylesReducer/stylesReducer';
import BeerStylesHeader from './BeerStylesHeader/BeerStylesHeader';
import ButtonsContainer from './ButtonsContainer/ButtonsContanier';
import BeerStyleElement from './BeerStyleElement/BeerStyleElement';
import styles from './BeerStylesPage.module.scss';

function BeerStylesPage() {
  // Set state to manipulate ABV data
  const [abvValue, setAbvValue] = useState({
    value: [1, 10],
    active: false,
  });

  // Set state to manipulate IBU data
  const [ibuValue, setIbuValue] = useState({
    value: [0, 200],
    active: false,
  });

  // Set dispatch and useSelector
  const beerList = useSelector((state) => state.styles);
  const dispatch = useDispatch();

  // useEffect to get data from the API
  useEffect(() => {
    if (!beerList.length) {
      dispatch(getStylesList());
    }
  }, [dispatch, beerList]);

  // Function to change the value of ABV state
  const handleAbvChange = (newValue) => {
    setAbvValue({ ...abvValue, value: newValue });
  };

  // Function to invert ABV active value and set value to default
  const handleAbvButton = () => {
    if (!abvValue.active && !ibuValue.active) {
      setAbvValue({ ...abvValue, active: !abvValue.active });
    } else if (!abvValue.active && ibuValue.active) {
      setAbvValue({ ...abvValue, active: !abvValue.active });
      setIbuValue({ ...ibuValue, active: !ibuValue.active });
    } else {
      setAbvValue({
        ...abvValue,
        value: [1, 10],
        active: false,
      });
    }
  };

  // Function to change value of IBU state
  const handleIbuChange = (newValue) => {
    setIbuValue({ ...ibuValue, value: newValue });
  };

  // Function to invert IBU active value  and set value to default
  const handleIbuButton = () => {
    if (!ibuValue.active && !abvValue.active) {
      setIbuValue({ ...ibuValue, active: !ibuValue.active });
    } else if (!ibuValue.active && abvValue.active) {
      setIbuValue({ ...ibuValue, active: !ibuValue.active });
      setAbvValue({ ...abvValue, active: !abvValue.active });
    } else {
      setIbuValue({
        ...ibuValue,
        value: [0, 200],
        active: !ibuValue.active,
      });
    }
  };
  const getText = (value, string) => `${value} ${string}`;

  return (
    <main className={styles.container}>
      <BeerStylesHeader />
      <ButtonsContainer
        handleAbvButton={handleAbvButton}
        handleIbuButton={handleIbuButton}
      />
      <div className={styles.sliderContainer}>
        {
          abvValue.active ? (
            <h2>ABV Filter</h2>
          ) : null
        }
        {
          ibuValue.active ? (
            <h2>IBU Filter</h2>
          ) : null
        }
        {
          // ABV //
          abvValue.active ? (
            <Slider
              onChange={(e) => handleAbvChange(e.target.value)}
              getAriaLabel={() => 'ABV'}
              valueLabelDisplay="auto"
              getAriaValueText={() => getText(abvValue.value, 'ABV')}
              value={abvValue.value}
              step={1}
              marks
              min={1}
              max={10}
              sx={{
                width: 300,
                color: 'white',
              }}
            />
          ) : null
        }
        {
          // IBU //
          ibuValue.active ? (
            <Slider
              onChange={(e) => handleIbuChange(e.target.value)}
              getAriaLabel={() => 'IBU'}
              valueLabelDisplay="auto"
              getAriaValueText={() => getText(ibuValue.value, 'IBU')}
              value={ibuValue.value}
              step={1}
              marks
              min={0}
              max={200}
              sx={{
                width: 300,
                color: 'white',
              }}
            />
          ) : null
        }
      </div>
      <ul>
        {beerList.map((beer) => {
          // ABV Filter
          if (abvValue.active) {
            if (
              abvValue.value[0] <= beer.abv_min
              && abvValue.value[1] >= beer.abv_max
            ) {
              return (
                <BeerStyleElement
                  key={beer.id}
                  name={beer.name}
                  id={beer.id}
                  abvMax={beer.abv_max}
                  abvMin={beer.abv_min}
                  ibuMax={beer.ibu_max}
                  ibuMin={beer.ibu_min}
                  description={beer.description}
                  show={beer.show}
                />
              );
            }
            return null;
          }
          // IBU Filter
          if (ibuValue.active) {
            if (
              beer.ibu_min >= ibuValue.value[0]
              && beer.ibu_max <= ibuValue.value[1]
            ) {
              return (
                <BeerStyleElement
                  key={beer.id}
                  name={beer.name}
                  id={beer.id}
                  abvMax={beer.abv_max}
                  abvMin={beer.abv_min}
                  ibuMax={beer.ibu_max}
                  ibuMin={beer.ibu_min}
                  description={beer.description}
                  show={beer.show}
                />
              );
            }
            return null;
          }
          return (
            <BeerStyleElement
              key={beer.id}
              name={beer.name}
              id={beer.id}
              abvMax={beer.abv_max}
              abvMin={beer.abv_min}
              ibuMax={beer.ibu_max}
              ibuMin={beer.ibu_min}
              description={beer.description}
              show={beer.show}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default BeerStylesPage;
