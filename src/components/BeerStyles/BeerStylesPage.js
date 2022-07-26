import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Slider from '@mui/material/Slider';
import { getStylesList } from '../../Redux/StylesReducer/stylesReducer';
import BeerStyleElement from './BeerStyleElement/BeerStyleElement';
import styles from './BeerStylesPage.module.scss';

function BeerStylesPage() {
  const beerList = useSelector((state) => state.styles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!beerList.length) {
      dispatch(getStylesList());
    }
  }, [dispatch, beerList]);

  return (
    <main className={styles.container}>
      <div className={styles.headerContainer}>
        <Link to="/"><IoIosArrowBack /></Link>
        <h1>Beer styles</h1>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          sx={{
            width: 150,
          }}
        />
      </div>
      <ul>
        {
          beerList.map((beer) => (
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
          ))
        }
      </ul>
    </main>
  );
}

export default BeerStylesPage;
