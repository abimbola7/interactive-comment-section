import { createSlice } from "@reduxjs/toolkit"

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
        pickedItem.replies.unshift(postData);
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
  },
  editComment(state, action){
    let mode = action.payload.mode;
    let postData = action.payload.postData
    let ids = action.payload.id
    if (mode === "SEND") {
      let pickedIndex  = state.items.comments.findIndex((elem)=>elem.id === postData.id)
      if (pickedIndex) {
        state.items.comments[pickedIndex] = postData
      }
    } else if (mode === "REPLY") {
      let pickedIndex  = state.items.comments[action.payload.ids].replies.findIndex((elem)=>elem.id === ids)
      if (typeof pickedIndex == "number") {
        state.items.comments[action.payload.ids].replies[pickedIndex] = postData
      }
    }
  },
  increaseVote(state, action){
    let mode = action.payload.mode;
    let id = action.payload.id;
    if (mode === "SEND") {
      let pickedItem  = state.items.comments.find((elem)=>elem.id === id);
      if (pickedItem.userVote !== "upvote") {
        pickedItem.score += 1
        pickedItem.userVote = "upvote"
      }
      console.log(pickedItem);
    }
  },
  decreaseVote(state,action){
    let mode = action.payload.mode;
    let id = action.payload.id;
    if (mode === "SEND") {
      let pickedItem  = state.items.comments.find((elem)=>elem.id === id);
      console.log(pickedItem);
      if (pickedItem.score <= 0) {
        return;
      }
      if (pickedItem.userVote !== "downvote") {
        pickedItem.score -= 1
        pickedItem.userVote = "downvote"
      }

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
