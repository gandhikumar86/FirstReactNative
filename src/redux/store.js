// store.js
import {configureStore} from '@reduxjs/toolkit';
import togglerReducer from './togglerSlice';

export const store = configureStore({
  reducer: {
    toggler: togglerReducer,
  },
});
