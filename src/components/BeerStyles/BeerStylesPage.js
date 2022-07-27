import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Slider from '@mui/material/Slider';
import { getStylesList } from '../../Redux/StylesReducer/stylesReducer';
import BeerStyleElement from './BeerStyleElement/BeerStyleElement';
import styles from './BeerStylesPage.module.scss';

function BeerStylesPage() {
  const [sliderValue, setSliderValue] = useState({
    value: [1, 10],
    active: false,
  });
  const beerList = useSelector((state) => state.styles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!beerList.length) {
      dispatch(getStylesList());
    }
  }, [dispatch, beerList]);

  const handleChange = (newValue) => {
    setSliderValue({ ...sliderValue, value: newValue });
    console.log(sliderValue);
  };

  const handleButton = () => {
    if (!sliderValue.active) {
      setSliderValue({ ...sliderValue, active: !sliderValue.active });
    } else {
      setSliderValue({
        ...sliderValue,
        value: [1, 10],
        active: !sliderValue.active,
      });
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <IoIosArrowBack />
        </Link>
        <h1>Beer styles</h1>
      </div>
      <div>
        <button onClick={handleButton} type="submit">
          IBV Filter
        </button>
        <button type="submit">IBU Filter</button>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          onChange={(e) => handleChange(e.target.value)}
          getAriaLabel={() => 'ABV'}
          valueLabelDisplay="auto"
          value={sliderValue.value}
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
          if (sliderValue.active) {
            if (
              sliderValue.value[0] <= beer.abv_min
              && sliderValue.value[1] >= beer.abv_max
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
