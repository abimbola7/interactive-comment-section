import { createSlice } from "@reduxjs/toolkit";


const initialUiState = {
  isModalToggled : false
}

const uiSlice = createSlice({
  name : "ui",
  initialState : initialUiState,
  reducers : {
    modalIsToggled(state){
      state.isModalToggled = !state.isModalToggled
    }
  }
})

export default uiSlice.reducer
export const uiActions = uiSlice.actions;