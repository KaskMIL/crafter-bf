import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import stylesReducer from './StylesReducer/stylesReducer';

const store = configureStore({
  reducer: {
    styles: stylesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;