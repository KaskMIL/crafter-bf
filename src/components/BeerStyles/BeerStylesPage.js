import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStylesList, showInfo } from '../../Redux/StylesReducer/stylesReducer';
import BeerStylesHeader from '../ElementHeader/BeerStylesHeader';
import ButtonsContainer from '../ButtonsContainer/ButtonsContanier';
import BeerStyleElement from '../ElementComponent/BeerStyleElement';
import SliderComponent from '../Slider/SliderComponent';
import styles from './BeerStylesPage.module.scss';

function BeerStylesPage() {
  // Set state to manipulate ABV data
  const [abvValue, setAbvValue] = useState({
    value: [1, 14],
    active: false,
  });

  // Set state to manipulate IBU data
  const [ibuValue, setIbuValue] = useState({
    value: [0, 120],
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
        value: [1, 14],
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
        value: [0, 120],
        active: !ibuValue.active,
      });
    }
  };

  // Function to send reducer to element
  const handleReducer = (id) => {
    dispatch(showInfo(id));
  };

  return (
    <main className={styles.container}>
      <BeerStylesHeader title="Beer Styles" />
      <ButtonsContainer
        handleAbvButton={handleAbvButton}
        handleIbuButton={handleIbuButton}
        firstBtnTitle="ABV Filter"
        secondBtnTitle="IBU Filter"
      />
      <SliderComponent
        firstTitle="ABV Filter"
        secondTitle="IBU Filter"
        firstHandleChange={handleAbvChange}
        firstStateValue={abvValue.value}
        firstStateActive={abvValue.active}
        secondHandleChange={handleIbuChange}
        secondStateValue={ibuValue.value}
        secondStateActive={ibuValue.active}
        firstMin={1}
        firstMax={14}
        firstStep={1}
        secondMax={120}
        secondMin={0}
      />
      <ul>
        {beerList.map((beer) => {
          // ABV Filter
          if (abvValue.active) {
            if (
              abvValue.value[0] <= beer.abv_max
              && abvValue.value[1] >= beer.abv_max
            ) {
              return (
                <BeerStyleElement
                  key={beer.id}
                  name={beer.name}
                  type="beer"
                  id={beer.id}
                  firstTitle="ABV:   "
                  firstMax={beer.abv_max}
                  firstMin={beer.abv_min}
                  secondTitle="IBU:   "
                  secondMax={beer.ibu_max}
                  secondMin={beer.ibu_min}
                  description={beer.description}
                  show={beer.show}
                  reducer={handleReducer}
                />
              );
            }
            return null;
          }
          // IBU Filter
          if (ibuValue.active) {
            if (
              beer.ibu_max >= ibuValue.value[0]
              && beer.ibu_max <= ibuValue.value[1]
            ) {
              return (
                <BeerStyleElement
                  key={beer.id}
                  id={beer.id}
                  type="beer"
                  name={beer.name}
                  firstTitle="ABV:   "
                  firstMax={beer.abv_max}
                  firstMin={beer.abv_min}
                  secondTitle="IBU:   "
                  secondMax={beer.ibu_max}
                  secondMin={beer.ibu_min}
                  description={beer.description}
                  show={beer.show}
                  reducer={handleReducer}
                />
              );
            }
            return null;
          }
          return (
            <BeerStyleElement
              key={beer.id}
              name={beer.name}
              type="beer"
              id={beer.id}
              firstTitle="ABV   "
              firstMax={beer.abv_max}
              firstMin={beer.abv_min}
              secondTitle="IBU   "
              secondMax={beer.ibu_max}
              secondMin={beer.ibu_min}
              description={beer.description}
              show={beer.show}
              reducer={handleReducer}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default BeerStylesPage;
