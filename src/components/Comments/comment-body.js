import React, { Fragment, useState } from "react"
import Button from "../ui/button";
import { v4 as uuid } from "uuid"
import { postActions } from "../../store/post-slice";
import { useDispatch } from "react-redux";

const CommentBody = (props) => {
  const date = new Date();
  const dispatch = useDispatch();
  const { content, user, createdAt, id, score } = props.commentData;
  const [cont1, setCont1] = useState(content);
  const { replyingTo, isEditing, setIsEditing, users,mode, ids } = props;
  let content1 = content
  if (replyingTo) {
    let str1 = content.split(",")
    str1.unshift(" ")
    content1 = str1.join("")
  }
  const replyHandler = (e)=>{
    setCont1(e.target.value)
  }
  const updateHandler = (e) => {
    e.preventDefault()
    let postData;
    if (mode === "REPLY") {
      if (props.commentData) {
        postData = {
          id : id,
          content : cont1,
          createdAt : date.toISOString(),
          score : score,
          user : user,
          replyingTo: replyingTo
        }
      } 
    } else{
      postData = {
        id : id,
        content : cont1,
        createdAt : new Date().toISOString(),
        score : score,
        user : user,
        replies : []
      }
    }
    setIsEditing(prevState=>!prevState) 
    dispatch(postActions.editComment({postData:postData, mode:mode, id:id, ids:ids}))
  }
  return (
    <Fragment>
      {
        !isEditing ? (
          <p className="">
            {
            replyingTo && <span className="text-moderateBlue font-semibold">@{replyingTo}</span> 
            }
            {content1}
          </p>
        ) : (
          <div className="">
            <textarea
            onChange={replyHandler}
            rows="3" 
            defaultValue={content}
            className="w-full border focus:outline-none border-lightBlue focus:border-moderateBlue rounded-lg focus:border-[3px] px-3 py-3"
            placeholder="Type something"
            />
            {
              isEditing && <Button
              className="bg-moderateBlue font-bold text-white px-2 py-1 xs:px-4 xs:py-2 rounded-lg float-right"
              content="UPDATE"
              onClick={updateHandler}
              />
             }
          </div>
        )
      }
    </Fragment>
  )
}

export default CommentBody;