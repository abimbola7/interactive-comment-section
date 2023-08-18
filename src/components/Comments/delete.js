import React, { Fragment } from "react"
import Button from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { postActions } from "../../store/post-slice";


const DeleteComment = () => {
  const dispatch = useDispatch()
  const modal = useSelector(state=>state.ui.isModalToggled)
  console.log(modal);
  return (
    <Fragment>
      {
        modal && <div className="w-full h-screen fixed bg-black bg-opacity-40 z-[200]">
        <div className="border px-4 py-7 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute  w-[23rem] max-w-[95%] rounded-xl bg-white space-y-4 text-grayishBlue">
          <h1 className="text-xl font-bold text-darkBlue">Delete Comment</h1>
          <p className="font-medium">Are you sure you want to delete this comment? This will remove the comment and can't be undone</p>
          <div className="flex space-x-3 text-white justify-center">
            <Button
            onClick={()=>dispatch(uiActions.modalIsToggled())}
            content="NO, CANCEL"
            className="bg-softRed px-8 py-3 rounded-lg"
            ></Button>
            <Button
            content="YES, DELETE"
            className="bg-grayishBlue px-8 py-3 rounded-lg"
            onClick={()=>{
              dispatch(postActions.deleteComment());
              dispatch(uiActions.modalIsToggled())
            }}
            ></Button>
          </div>
        </div>
      </div>
      }
    </Fragment>
  )
};

export default DeleteComment;