// URLs
const stylesURL = 'https://rustybeer.herokuapp.com/styles';
const hopsURL = 'https://rustybeer.herokuapp.com/hops';
const yeastsURL = 'https://rustybeer.herokuapp.com/yeasts';

// Actions
const STYLES = 'crafter-bf/redux/GET_STYLES';
const HOPS = 'crafter-bf/redux/GET_HOPS';
const YEASTS = 'crafter-bf/redux/GET_YEASTS';

// Action creators

export const getStylesList = () => async (dispatch) => {
  const response = await fetch(stylesURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const styleData = await response.json();
  const dataArr = styleData.map((beer) => {
    const newBeer = {
      name: beer.name,
      abv_min: beer.abv_min,
      abv_max: beer.abv_max,
      ibu_min: beer.ibu_min,
      ibu_min: beer.ibu_max,
      description: beer.description,
    };
    return newBeer;
  });
  dispatch({
    type: STYLES,
    payload: dataArr,
  })
}