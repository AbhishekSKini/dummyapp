import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CovidDataItem } from "../types/type";


// Define the type for the initial state
interface CovidDataState {
  data: CovidDataItem[]; // Array of COVID data items
}

// Initial state with proper type
const initialState: CovidDataState = {
  data: [], // Empty array initially
};

// Create the slice with type-safe reducers
export const covidDataSlice = createSlice({
  name: "covidDataStore",
  initialState,
  reducers: {
    // Reducer to set COVID data with type safety
    setCovidDataAction: (state, action: PayloadAction<CovidDataItem[]>) => {
      state.data = action.payload; // Save the fetched COVID data
    },
  },
});

// Export the actions
export const { setCovidDataAction } = covidDataSlice.actions;

// Export the reducer
export default covidDataSlice.reducer;
