import { createSlice } from "@reduxjs/toolkit"
import { uiActions } from "./ui-slice"
import { useDispatch } from "react-redux"
// import { produce } from "immer"
// import { postActions } from "../../../interactive-comments-section/src/store/post-slice"

const postInitialState = {
  items : {},
  postState : false,
  pickedItem : [],
  tempData : {}
}

const postSlice = createSlice({
  name: 'post',
  initialState : postInitialState,
  reducers: {
    fetchPost(state, action){
      state.items = {...action.payload}
    },
    addComment(state, action){
      let mode = action.payload.mode;
      let postData = action.payload.postData
      let ids = action.payload.id
      if (mode === "SEND") {
        state.items.comments.push(postData)
      } else if(mode === "REPLY"){
        let pickedItem = state.items.comments.find((elem)=>elem.id === ids)
        pickedItem.replies.push(postData);
      }
    },
    captureData(state, action){
      state.tempData = {...action.payload}
    },
    deleteComment(state, action){
      if (state.tempData.mode === "SEND") {
        state.items.comments = state.items.comments.filter(elem=>elem.id !== state.tempData.id);
      } 
      else if (state.tempData.mode === "REPLY") {
       const innerIndex = state.tempData.ind;
       const outerIndex = state.tempData.index
      state.items.comments[outerIndex].replies.splice(innerIndex,1)
    }
  }
}})

export const fetchPostData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const data = await response.json();
      return data;
    }
    try {
      const postData = await fetchData();
      dispatch(postActions.fetchPost(postData))
    } catch (error) {
      console.log(error.message);
    }
    }
  }


export default postSlice.reducer;
export const postActions = postSlice.actions
