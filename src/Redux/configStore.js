import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const initialStore = [];

const store = configureStore({
  initialStore,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;