import { configureStore } from "@reduxjs/toolkit";
import covidDataReducer from "./covidDataSlice";

const store = configureStore({
  reducer: {
    covidDataStore: covidDataReducer, // Register the COVID data reducer
  },
});

// Define RootState type (used to infer the state of the entire store)
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type (used for dispatching actions)
export type AppDispatch = typeof store.dispatch;

// Export the store
export default store;
