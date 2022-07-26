import { v4 as uuidv4 } from 'uuid';

// Base URL
const yeastsURL = 'https://secure-springs-90851.herokuapp.com/https://rustybeer.herokuapp.com/yeasts';

// Action
const GETYEASTS = 'crafter-bf/redux/GET_YEASTS';

// Action creators
export const getYeasts = () => async (dispatch) => {
  const response = await fetch(yeastsURL, {
    method: 'GET',
  });

  const yeastData = await response.json();
  const dataArr = yeastData.map((yeast) => {
    const newYeast = {
      name: yeast.name,
      id: uuidv4(),
      min_attenuation: yeast.min_attenuation,
      max_attenuation: yeast.max_attenuation,
      min_fahrenheit: yeast.min_temp.fahrenheit,
      max_fahrenheit: yeast.max_temp.fahrenheit,
      min_celsius: yeast.min_temp.celsius,
      max_celsius: yeast.max_temp.celsius,
      alc_tolerance: yeast.alc_tolerance,
    };
    return newYeast;
  });

  dispatch({
    type: GETYEASTS,
    payload: dataArr,
  });
};

// Reducer
const yeastReducer = (state = [], action) => {
  switch (action.type) {
    case GETYEASTS:
      return action.payload;
    default:
      return state;
  }
};

export default yeastReducer;
