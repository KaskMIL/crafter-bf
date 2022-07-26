import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import stylesReducer from './StylesReducer/stylesReducer';
import hopsReducer from './HopsReducer/HopsReducer';
import yeastReducer from './YeastReducer/YeastReducer';

const store = configureStore({
  reducer: {
    styles: stylesReducer,
    hops: hopsReducer,
    yeasts: yeastReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;