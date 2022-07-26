import { v4 as uuidv4 } from 'uuid';

// URLs
const stylesURL = 'https://rustybeer.herokuapp.com/styles';
// const hopsURL = 'https://rustybeer.herokuapp.com/hops';
// const yeastsURL = 'https://rustybeer.herokuapp.com/yeasts';

// Actions
const GETSTYLES = 'crafter-bf/redux/GET_STYLES';
// const HOPS = 'crafter-bf/redux/GET_HOPS';
// const YEASTS = 'crafter-bf/redux/GET_YEASTS';

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
    };
    return newBeer;
  });

  dispatch({
    type: GETSTYLES,
    payload: dataArr,
  });
};

// Reducer

const stylesReducer = (state = [], action) => {
  switch (action.type) {
    case GETSTYLES:
      return action.payload;
    default:
      return state;
  }
}

export default stylesReducer;