import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHops } from '../../Redux/HopsReducer/HopsReducer';
import HopElement from './HopElement/HopElement';
import BeerStylesHeader from '../ElementHeader/BeerStylesHeader';
import ButtonsContainer from '../ButtonsContainer/ButtonsContanier';

function BeerHopsPage() {
  const hopsList = useSelector((state) => state.hops);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hopsList.length) {
      dispatch(getHops());
    }
  }, [dispatch, hopsList]);

  return (
    <main>
      <BeerStylesHeader title="Beer Hops" />
      <ButtonsContainer
        firstBtnTitle="Alpha Acid"
        secondBtnTitle="Beta Acid"
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
