import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'searchedWordStore',
  initialState: {
    value: ""
  },
  reducers: {
   
    searchedWord: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {  searchedWord } = searchSlice.actions

export default searchSlice.reducer