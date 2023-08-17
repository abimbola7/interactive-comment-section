import React, { useState } from "react";
import Card from "../ui/Card";
import Image from "../ui/Image";
import { useDispatch } from "react-redux";
import { postActions } from "../../store/post-slice";
import { v4 as uuid } from "uuid"

const AddComment = (props) => {
  const dispatch  = useDispatch();
  const { commentData } = props
  console.log(commentData);
  const [ comment, setComment ] = useState("")
  // console.log(props.user.image);
  const { mode, user } = props;
  const onFormHandler = (e) => {
    setComment(e.target.value)
  }
  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(comment);
    if (comment.trim() === "") return
    let postData;
    if (mode === "REPLY") {
      if (commentData) {
        postData = {
          id : uuid().slice(0,8),
          content : comment,
          createdAt : "not yet",
          score : 0,
          user : user,
          // replies : [],
          replyingTo: commentData.user.username
        }
      } 
    } else{
      postData = {
        id : uuid().slice(0,8),
        content : comment,
        createdAt : "not yet",
        score : 0,
        user : user,
        replies : []
      }
    }
    dispatch(postActions.addComment({postData:postData, mode:mode, id:props.id}))
    setComment("")
  };
  
  return (
    <Card>
      <form
      className="flex justify-between flex-row space-x-3"
      onSubmit={onFormSubmit}
      >
        <div className="h-8 cursor-pointer rounded-full">
          <div className="overflow-hidden rounded-full h-full w-8 hover:border hover:border-red-500">
          <Image
          src={user.image.png}
          />
          </div>
        </div> 
        <textarea
        value={comment}
        onChange={onFormHandler}
        rows="3" 
        className="flex-1 border focus:outline-none border-lightBlue focus:border-moderateBlue rounded-lg focus:border-[3px] px-3 py-3"
        placeholder="Type something"
        ></textarea>
        <button
        className="px-5 py-3 rounded-lg bg-moderateBlue hover:bg-opacity-50 text-white font-semibold h-12 flex items-center justify-center outline-none focus:outline-none"
        >
          { mode }
        </button>
      </form>
    </Card>
  )
}

export default AddComment;