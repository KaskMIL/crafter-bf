import { v4 as uuidv4 } from 'uuid';

// Base URL
const stylesURL = 'https://secure-springs-90851.herokuapp.com/https://rustybeer.herokuapp.com/styles';

// Actions
const GETSTYLES = 'crafter-bf/redux/GET_STYLES';
const SHOWINFO = 'crafter-bf/redux/SHOW_INFO';

// Action creators
export const getStylesList = () => async (dispatch) => {
  const response = await fetch(stylesURL, {
    method: 'GET',
  });

  const styleData = await response.json();
  const dataArr = styleData.map((beer) => {
    const newBeer = {
      name: beer.name,
      id: uuidv4(),
      abv_min: beer.abv_min,
      abv_max: beer.abv_max,
      ibu_min: beer.ibu_min,
      ibu_max: beer.ibu_max,
      description: beer.description,
      show: false,
    };
    return newBeer;
  });

  dispatch({
    type: GETSTYLES,
    payload: dataArr,
  });
};

export const showInfo = (beerId) => ({
  type: SHOWINFO,
  payload: beerId,
});

// Reducer
const stylesReducer = (state = [], action) => {
  switch (action.type) {
    case GETSTYLES:
      return action.payload;
    case SHOWINFO:
      return [...state.map((beer) => {
        if (beer.id === action.payload) {
          return { ...beer, show: !beer.show };
        }
        return beer;
      })];
    default:
      return state;
  }
};

export default stylesReducer;
