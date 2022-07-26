import { v4 as uuidv4 } from 'uuid';

// Base URL
const hopsURL = 'https://rustybeer.herokuapp.com/hops';

// Action
const GETHOPS = 'crafter-bf/redux/GET_HOPS';

// Action creators
export const getHops = () => async (dispatch) => {
  const response = await fetch(hopsURL, {
    method: 'GET'
  });

  const hopsData = await response.json();
  const dataArr = hopsData.map((hop) => {
    const newHop = {
      name: hop.name,
      id: uuidv4(),
      alpha_acid_min: hop.alpha_acid_min,
      alpha_acid_max: hop.alpha_acid_max,
      beta_acid_min: hop.beta_acid_min,
      beta_acid_max: hop.beta_acid_max,
      porpose: hop.porpose,
      country: hop.country,
      description: hop.description,
    }
    return newHop;
  });

  dispatch({
    type: GETHOPS,
    payload: dataArr,
  });
}

// Reducer
const hopsReducer = (state = [], action) => {
  switch (action.type) {
    case GETHOPS:
      return action.payload;
    default:
      return state;
  };
}

export default hopsReducer;