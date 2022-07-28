import { v4 as uuidv4 } from 'uuid';

// Base URL
const hopsURL = 'https://secure-springs-90851.herokuapp.com/https://rustybeer.herokuapp.com/hops';

// Action
const GETHOPS = 'crafter-bf/redux/GET_HOPS';
const SHOWINFO = 'crafter-bf/redux/SHOW_INFO';

// Action creators
export const getHops = () => async (dispatch) => {
  const response = await fetch(hopsURL, {
    method: 'GET',
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
      show: false,
    };
    return newHop;
  });

  dispatch({
    type: GETHOPS,
    payload: dataArr,
  });
};

export const showHopsInfo = (id) => ({
  type: SHOWINFO,
  payload: id,
});

// Reducer
const hopsReducer = (state = [], action) => {
  switch (action.type) {
    case GETHOPS:
      return action.payload;
    case SHOWINFO:
      return [...state.map((hop) => {
        if (action.payload === hop.id) {
          return { ...hop, show: !hop.show };
        }
        return hop;
      })];
    default:
      return state;
  }
};

export default hopsReducer;
