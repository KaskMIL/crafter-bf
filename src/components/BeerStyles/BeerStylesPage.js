import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from '@mui/material/Slider';
import { getStylesList } from '../../Redux/StylesReducer/stylesReducer';
import BeerStylesHeader from './BeerStylesHeader/BeerStylesHeader';
import BeerStyleElement from './BeerStyleElement/BeerStyleElement';
import styles from './BeerStylesPage.module.scss';

function BeerStylesPage() {
  // Set state to manipul ABV data
  const [abvValue, setAbvValue] = useState({
    value: [1, 10],
    active: false,
  });
  // Set state to manipul IBU data
  const beerList = useSelector((state) => state.styles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!beerList.length) {
      dispatch(getStylesList());
    }
  }, [dispatch, beerList]);

  const handleAbvChange = (newValue) => {
    setAbvValue({ ...abvValue, value: newValue });
    console.log(abvValue);
  };

  const handleAbvButton = () => {
    if (!abvValue.active) {
      setAbvValue({ ...abvValue, active: !abvValue.active });
    } else {
      setAbvValue({
        ...abvValue,
        value: [1, 10],
        active: !abvValue.active,
      });
    }
    console.log(abvValue);
  };

  return (
    <main className={styles.container}>
      <BeerStylesHeader />
      <div>
        <button onClick={handleAbvButton} type="submit">
          ABV Filter
        </button>
        <button type="submit">IBU Filter</button>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          onChange={(e) => handleAbvChange(e.target.value)}
          getAriaLabel={() => 'ABV'}
          valueLabelDisplay="auto"
          value={abvValue.value}
          step={1}
          marks
          min={1}
          max={10}
          sx={{
            width: 150,
            color: 'pink',
          }}
        />
      </div>
      <ul>
        {beerList.map((beer) => {
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
