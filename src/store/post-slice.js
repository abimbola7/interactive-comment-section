import { createSlice } from "@reduxjs/toolkit"
// import { postActions } from "../../../interactive-comments-section/src/store/post-slice"

const postInitialState = {
  items : {},
  postState : false,
  pickedItem : []
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
      console.log(ids);
      if (mode === "SEND") {
        state.items.comments.push(postData)
      } else if(mode === "REPLY"){
        let pickedItem = state.items.comments.find((elem)=>elem.id === ids)
        pickedItem.replies.push(postData);
      }
    }
  }
})

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
      console.log(postData);
      dispatch(postActions.fetchPost(postData))
    } catch (error) {
      console.log(error.message);
    }
    }
  }


export default postSlice.reducer;
export const postActions = postSlice.actions
