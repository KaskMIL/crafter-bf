import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHops } from '../../Redux/HopsReducer/HopsReducer';
import HopElement from './HopElement/HopElement';
import BeerStylesHeader from '../ElementHeader/BeerStylesHeader';
import ButtonsContainer from '../ButtonsContainer/ButtonsContanier';
import SliderComponent from '../Slider/SliderComponent';

function BeerHopsPage() {
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

  useEffect(() => {
    if (!hopsList.length) {
      dispatch(getHops());
    }
  }, [dispatch, hopsList]);

  const handleAlphaChange = (newValue) => {
    setAlphaState({ ...alphaState, value: newValue });
  };

  const handleBetaChange = (newValue) => {
    setBetaState({ ...betaState, value: newValue });
  };

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

  return (
    <main>
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
            <HopElement
              key={hop.id}
              name={hop.name}
              country={hop.country}
              alpha_acid_min={hop.alpha_acid_min}
              alpha_acid_max={hop.alpha_acid_max}
              beta_acid_min={hop.beta_acid_min}
              beta_acid_max={hop.beta_acid_max}
              porpose={hop.porpose}
              description={hop.descrition}
            />
          ))
        }
      </ul>
    </main>
  );
}

export default BeerHopsPage;
