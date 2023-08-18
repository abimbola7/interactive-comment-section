import React from "react"

const CommentBody = (props) => {
  const { content } = props.commentData;
  const { replyingTo } = props;
  let content1 = content
  if (replyingTo) {
    let str1 = content.split(",")
    str1.unshift(" ")
    content1 = str1.join("")
  }
  return (
    <p className="">
      {
        replyingTo && <span className="text-moderateBlue font-semibold">@{replyingTo}</span> 
      }
      {content1}
    </p>
  )
}

export default CommentBody;