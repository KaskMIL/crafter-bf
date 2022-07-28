import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getYeasts } from '../../Redux/YeastReducer/YeastReducer';
import YeastElement from './YeastElement/YeastElement';
import BeerStylesHeader from '../ElementHeader/BeerStylesHeader';
import ButtonsContainer from '../ButtonsContainer/ButtonsContanier';

function BeerYeastsPage() {
  // Set dispatch and useSelector
  const yeastList = useSelector((state) => state.yeasts);
  const dispatch = useDispatch();

  // Set state to manipulate Fahrenheit temperature data
  const [fahrenheit, setFahrenheit] = useState({
    value: [60, 80],
    active: false,
  });

  // Set state to manipulate Celsius temperature data
  const [celsius, setCelsius] = useState({
    value: [0, 30],
    active: false,
  });

  // useEffect to get data from the API
  useEffect(() => {
    if (!yeastList.length) {
      dispatch(getYeasts());
    }
  }, [dispatch, yeastList]);

  // Function to invert Fahrenheit active value and set default values
  const handleFarBtn = () => {
    if (!fahrenheit.active && !celsius.active) {
      setFahrenheit({ ...fahrenheit, active: !fahrenheit.active });
    } else if (!fahrenheit.active && celsius.active) {
      setFahrenheit({ ...fahrenheit, active: !fahrenheit.active });
      setCelsius({ ...celsius, active: !celsius.active });
    } else {
      setFahrenheit({
        ...fahrenheit,
        value: [60, 80],
        active: false,
      });
    }
  };

  // Function to invert Celsius active value and set default values
  const handleCelBtn = () => {
    if (!celsius.active && !fahrenheit.active) {
      setCelsius({ ...celsius, active: !celsius.active });
    } else if (!celsius.active && fahrenheit.active) {
      setCelsius({ ...celsius, active: !celsius.active });
      setFahrenheit({ ...fahrenheit, active: !fahrenheit.active });
    } else {
      setCelsius({
        ...celsius,
        value: [0, 30],
        active: false,
      });
    }
  };

  return (
    <main>
      <BeerStylesHeader title="Beer Yeasts" />
      <ButtonsContainer
        handleAbvButton={handleFarBtn}
        handleIbuButton={handleCelBtn}
        firstBtnTitle="Fahrenheit Filter"
        secondBtnTitle="Celsius Filter"
      />
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
