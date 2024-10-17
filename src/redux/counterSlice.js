//В даному випадку цей файл повністю замінює reducer.js та selectors.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  step: 1,
};

const slice = createSlice({
  name: "counter",
  initialState,
  selectors: {
    selectCounter: (state) => state.counter,
    selectStep: (state) => state.step,
  },
  reducers: {
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => initialState,
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

console.log(slice);

export const counterReducer = slice.reducer;
export const { increment, decrement, reset, changeStep } = slice.actions;
export const { selectCounter, selectStep } = slice.selectors;
