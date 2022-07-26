import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getYeasts } from '../../Redux/YeastReducer/YeastReducer';
import YeastElement from './YeastElement/YeastElement';

function BeerYeastsPage() {
  const yeastList = useSelector((state) => state.yeasts);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!yeastList.length) {
      dispatch(getYeasts())
    };
  }, [dispatch, yeastList]);

  return(
    <main>
      <Link to='/'>Back</Link>
      <ul>
        {
          yeastList.map((yeast) => (
            <YeastElement
              name={yeast.name}
              key={yeast.id}
              min_attenuation={yeast.min_attenuation}
              max_attenuation={yeast.max_attenuation}
              min_fahrenheit={yeast.min_fahrenheit}
              max_fahrenheit={yeast.max_fahrenheit}
              min_celsius={yeast.min_celsius}
              max_celsius={yeast.max_celsius}
              alc_tolerance={yeast.alc_tolerance}
            />
          ))
        }
      </ul>
    </main>
  )
}

export default BeerYeastsPage;