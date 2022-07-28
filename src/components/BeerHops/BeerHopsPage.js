import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHops, showHopsInfo } from '../../Redux/HopsReducer/HopsReducer';
import BeerStylesHeader from '../ElementHeader/BeerStylesHeader';
import ButtonsContainer from '../ButtonsContainer/ButtonsContanier';
import SliderComponent from '../Slider/SliderComponent';
import BeerStyleElement from '../ElementComponent/BeerStyleElement';
import styles from '../BeerStyles/BeerStylesPage.module.scss';

function BeerHopsPage() {
  // Set dispatch te action the reducers and use selctore to bring the store
  const hopsList = useSelector((state) => state.hops);
  const dispatch = useDispatch();

  // Set Alpha Acid state
  const [alphaState, setAlphaState] = useState({
    value: [0, 1],
    active: false,
  });

  // Set Beta Acid state
  const [betaState, setBetaState] = useState({
    value: [0, 1],
    active: false,
  });

  // To fetch data from the API
  useEffect(() => {
    if (!hopsList.length) {
      dispatch(getHops());
    }
  }, [dispatch, hopsList]);

  // To set new value to Alpha Acid
  const handleAlphaChange = (newValue) => {
    setAlphaState({ ...alphaState, value: newValue });
  };

  // Tp set new value to Beta Acid
  const handleBetaChange = (newValue) => {
    setBetaState({ ...betaState, value: newValue });
  };

  // To invert Alpha acid active value and set default value
  const handleAlphaBtn = () => {
    if (!alphaState.active && !betaState.active) {
      setAlphaState({ ...alphaState, active: !alphaState.active });
    } else if (!alphaState.active && betaState.active) {
      setAlphaState({ ...alphaState, active: !alphaState.active });
      setBetaState({ ...betaState, active: !betaState.active });
    } else {
      setAlphaState({
        ...alphaState,
        value: [0, 1],
        active: !alphaState.active,
      });
    }
  };

  // To invert Beta acid value and seet defult value
  const hanldeBetaBtn = () => {
    if (!betaState.active && !alphaState.active) {
      setBetaState({ ...betaState, active: !betaState.active });
    } else if (!betaState.active && alphaState.active) {
      setBetaState({ ...betaState, active: !betaState.active });
      setAlphaState({ ...alphaState, active: !alphaState.active });
    } else {
      setBetaState({
        ...betaState,
        value: [0, 1],
        active: !betaState.active,
      });
    }
  };

  // Reducer evoke
  const showHops = (id) => {
    dispatch(showHopsInfo(id));
  };

  return (
    <main className={styles.container}>
      <BeerStylesHeader title="Beer Hops" />
      <ButtonsContainer
        firstBtnTitle="Alpha Acid"
        secondBtnTitle="Beta Acid"
        handleAbvButton={handleAlphaBtn}
        handleIbuButton={hanldeBetaBtn}
      />
      <SliderComponent
        firstTitle="Alpha Acid Filter"
        secondTitle="Beta Acid Filter"
        firstHandleChange={handleAlphaChange}
        secondHandleChange={handleBetaChange}
        firstStateValue={alphaState.value}
        firstStateActive={alphaState.active}
        secondStateValue={betaState.value}
        secondStateActive={betaState.active}
      />
      <ul>
        {
          hopsList.map((hop) => (
            <BeerStyleElement
              name={hop.name}
              key={hop.id}
              id={hop.id}
              type="hop"
              firstTitle="Alpha Acid  "
              firstMin={hop.alpha_acid_min}
              firstMax={hop.alpha_acid_max}
              secondTitle="Beta Acid  "
              secondMin={hop.beta_acid_min}
              secondMax={hop.beta_acid_max}
              description={hop.description}
              show={hop.show}
              country={hop.country}
              porpose={hop.porpose}
              reducer={showHops}
            />
          ))
        }
      </ul>
    </main>
  );
}

export default BeerHopsPage;
