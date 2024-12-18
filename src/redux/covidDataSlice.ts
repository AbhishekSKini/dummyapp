import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CovidDataItem } from "../types/type";


//type for the initial state
interface CovidDataState {
  data: CovidDataItem[]; 
}

// Initial state with proper type
const initialState: CovidDataState = {
  data: [], 
};

// Create the slice with type-safe reducers
export const covidDataSlice = createSlice({
  name: "covidDataStore",
  initialState,
  reducers: {
    setCovidDataAction: (state, action: PayloadAction<CovidDataItem[]>) => {
      state.data = action.payload; 
    },
  },
});

// Export the actions
export const { setCovidDataAction } = covidDataSlice.actions;

// Export the reducer
export default covidDataSlice.reducer;
