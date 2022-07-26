import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getYeasts } from '../../Redux/YeastReducer/YeastReducer';
import YeastElement from './YeastElement/YeastElement';

function BeerYeastsPage() {
  const yeastList = useSelector((state) => state.yeasts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!yeastList.length) {
      dispatch(getYeasts());
    }
  }, [dispatch, yeastList]);

  return (
    <main>
      <Link to="/">Back</Link>
      <ul>
        {
          yeastList.map((yeast) => (
            <YeastElement
              name={yeast.name}
              key={yeast.id}
              minAttenuation={yeast.min_attenuation}
              maxAttenuation={yeast.max_attenuation}
              minFahrenheit={yeast.min_fahrenheit}
              maxFahrenheit={yeast.max_fahrenheit}
              minCelsius={yeast.min_celsius}
              maxCelsius={yeast.max_celsius}
              alcTolerance={yeast.alc_tolerance}
            />
          ))
        }
      </ul>
    </main>
  );
}

export default BeerYeastsPage;
