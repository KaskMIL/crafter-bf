import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getYeasts, showYeast } from '../../Redux/YeastReducer/YeastReducer';
import BeerStylesHeader from '../ElementHeader/BeerStylesHeader';
import ButtonsContainer from '../ButtonsContainer/ButtonsContanier';
import SliderComponent from '../Slider/SliderComponent';
import BeerStyleElement from '../ElementComponent/BeerStyleElement';
import styles from '../BeerStyles/BeerStylesPage.module.scss';

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

  // Function to change value on Fahrenheit state
  const handleFarChange = (newValue) => {
    setFahrenheit({ ...fahrenheit, value: newValue });
  };

  // Function to change value on Celsius state
  const handleCelChange = (newValue) => {
    setCelsius({ ...celsius, value: newValue });
  };

  // Function to use reducer
  const useShowYeast = (id) => {
    dispatch(showYeast(id));
  };

  // function to convert num to 2 decimals
  const convertTwoDecimals = (num) => parseFloat(num.toFixed(2));

  return (
    <main className={styles.container}>
      <BeerStylesHeader title="Beer Yeasts" />
      <ButtonsContainer
        handleAbvButton={handleFarBtn}
        handleIbuButton={handleCelBtn}
        firstBtnTitle="Fahrenheit Filter"
        secondBtnTitle="Celsius Filter"
      />
      <SliderComponent
        firstTitle="Fahrenheit Filter"
        secondTitle="Celsius Filter"
        firstHandleChange={handleFarChange}
        secondHandleChange={handleCelChange}
        firstStateValue={fahrenheit.value}
        secondStateValue={celsius.value}
        firstStateActive={fahrenheit.active}
        secondStateActive={celsius.active}
        firstMin={60}
        firstMax={80}
        firstStep={0.1}
        secondMin={10}
        secondMax={30}
        secondStep={0.1}
      />
      <ul>
        {yeastList.map((yeast) => {
          // Fahrenheit Filter
          if (fahrenheit.active) {
            if (
              fahrenheit.value[0] <= yeast.max_fahrenheit
              && fahrenheit.value[1] >= yeast.max_fahrenheit
            ) {
              return (
                <BeerStyleElement
                  name={yeast.name}
                  key={yeast.id}
                  id={yeast.id}
                  type="yeast"
                  firstTitle="Farenheit "
                  secondTitle="Celsius "
                  firstMin={convertTwoDecimals(yeast.min_fahrenheit)}
                  firstMax={convertTwoDecimals(yeast.max_fahrenheit)}
                  secondMin={convertTwoDecimals(yeast.min_celsius)}
                  secondMax={convertTwoDecimals(yeast.max_celsius)}
                  alcTolerance={yeast.alc_tolerance}
                  reducer={useShowYeast}
                  show={yeast.show}
                />
              );
            }
            return null;
          }
          if (celsius.active) {
            if (
              celsius.value[0] <= yeast.max_celsius
              && celsius.value[1] >= yeast.max_celsius
            ) {
              return (
                <BeerStyleElement
                  name={yeast.name}
                  key={yeast.id}
                  id={yeast.id}
                  type="yeast"
                  firstTitle="Farenheit "
                  secondTitle="Celsius"
                  firstMin={convertTwoDecimals(yeast.min_fahrenheit)}
                  firstMax={convertTwoDecimals(yeast.max_fahrenheit)}
                  secondMin={convertTwoDecimals(yeast.min_celsius)}
                  secondMax={convertTwoDecimals(yeast.max_celsius)}
                  alcTolerance={yeast.alc_tolerance}
                  reducer={useShowYeast}
                  show={yeast.show}
                />
              );
            }
            return null;
          }
          return (
            <BeerStyleElement
              name={yeast.name}
              key={yeast.id}
              id={yeast.id}
              type="yeast"
              firstTitle="Farenheit "
              secondTitle="Celsius"
              firstMin={convertTwoDecimals(yeast.min_fahrenheit)}
              firstMax={convertTwoDecimals(yeast.max_fahrenheit)}
              secondMin={convertTwoDecimals(yeast.min_celsius)}
              secondMax={convertTwoDecimals(yeast.max_celsius)}
              alcTolerance={yeast.alc_tolerance}
              reducer={useShowYeast}
              show={yeast.show}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default BeerYeastsPage;
