// toggleSlice.js
import {createSlice} from '@reduxjs/toolkit';

export const togglerSlice = createSlice({
  name: 'toggler',
  initialState: {
    value: true,
  },
  reducers: {
    toggle: state => {
      state.value = !state.value;
    },
  },
});

export const {toggle} = togglerSlice.actions;

export const selectToggle = state => state.toggler.value;

export default togglerSlice.reducer;
