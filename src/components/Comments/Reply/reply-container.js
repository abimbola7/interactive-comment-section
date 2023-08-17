import React, { Fragment } from "react"
import Reply from "./reply";

const ReplyContainer = (props) => {
  console.log(props.replies);
  const { users } = props
  const { replies, commentData } = props;
  return (
    <div
    className="space-y-4 pl-12 relative after:absolute after:w-[2px] after:h-full after:bg-lightGray after:top-0 after:left-5 after:z-[100]"
    >
      {
      replies.map(replyData=>(
        <Reply
        commentDatas={commentData}
        key={replyData.key}
        commentData={replyData}
        users={users}
        />
      ))
    }
    </div>     
  )
}

export default ReplyContainer;