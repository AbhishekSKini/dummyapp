import { createSlice } from "@reduxjs/toolkit";

export const covidDataSlice = createSlice({
  name: "covidDataStore",
  initialState: {
    data: [], // To store the API data
    loading: false, // To manage the loading state
    error: null, // To manage errors
  },
  reducers: {
    setCovidDataAction: (state, action) => {
      state.data = action.payload; // Save the fetched COVID data
    },
    // setLoading: (state, action) => {
    //   state.loading = action.payload; // Update loading state
    // },
    // setError: (state, action) => {
    //   state.error = action.payload; // Save any errors
    // },
  },
});

// Export the actions
export const { setCovidDataAction } = covidDataSlice.actions;

// Export the reducer
export default covidDataSlice.reducer;
