import { configureStore } from '@reduxjs/toolkit'
import searchReducer from  "./slicereducer"

export default configureStore({
  reducer: {
    searchedWordStore: searchReducer
  }
})