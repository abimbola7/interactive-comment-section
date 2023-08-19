import React, { Fragment } from "react"
import Reply from "./reply";

const ReplyContainer = (props) => {
  const { users, index } = props
  const { replies, commentData } = props;
  return (
    <div
    className="space-y-4 pl-[6%] relative after:absolute after:w-[2px] after:h-full after:bg-lightGray after:top-0 after:left-[3%] after:z-[100]"
    >
      {
      replies.map((replyData, ind)=>(
        <Reply
        ind={ind}
        index={index}
        commentDatas={commentData}
        id={commentData.id}
        key={replyData.id}
        commentData={replyData}
        users={users}
        />
      ))
    }
    </div>     
  )
}

export default ReplyContainer;