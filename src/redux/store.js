import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slices/count-slice";

const store = configureStore({
  reducer: {
    countReducer: countSlice
  }
})

export default store