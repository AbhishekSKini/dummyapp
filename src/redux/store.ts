import { configureStore } from "@reduxjs/toolkit";
import covidDataReducer from "./covidDataSlice";

const store = configureStore({
  reducer: {
    covidDataStore: covidDataReducer, 
  },
});

// Define RootState type 
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Export the store
export default store;
