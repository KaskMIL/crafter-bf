import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <Link to="/">Back</Link>
      <ul>
        {
          beerList.map((beer) => (
            <BeerStyleElement
              key={beer.id}
              name={beer.name}
              abvMax={beer.abv_max}
              abvMin={beer.abv_min}
              ibuMax={beer.ibu_max}
              ibuMin={beer.ibu_min}
              description={beer.description}
            />
          ))
        }
      </ul>
    </main>
  );
}

export default BeerStylesPage;
