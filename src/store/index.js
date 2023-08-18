import { configureStore } from "@reduxjs/toolkit"
import postSlice from "./post-slice";
import uiSlice from "./ui-slice";


const store = configureStore({
  reducer : {
    post : postSlice,
    ui : uiSlice
  }
})

export default store; 