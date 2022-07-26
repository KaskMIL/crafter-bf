import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import stylesReducer from './StylesReducer/stylesReducer';
import hopsReducer from './HopsReducer/HopsReducer';

const store = configureStore({
  reducer: {
    styles: stylesReducer,
    hops: hopsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;