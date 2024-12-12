import { configureStore } from "@reduxjs/toolkit";
import covidDataReducer from "./covidDataSlice";

const store = configureStore({
  reducer: {
    covidDataStore: covidDataReducer, // Register the COVID data reducer
  },
});

export default store;
