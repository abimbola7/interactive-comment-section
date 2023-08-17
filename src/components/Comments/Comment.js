import React, { useState } from "react"
import Card  from "../ui/Card"
import Votes from "../ui/votes";
import { CommentHeader, CommentBody } from "./index"
import ReplyContainer from "./Reply/reply-container";
import AddComment from "./add-comment";
import { useSelector } from "react-redux";

const Comment = (props) => {
  const users = useSelector(state=>state.post.items)
  const { commentData } = props;
  const { user } = props;
  const [isReplying, setIsReplying] = useState(false)
  console.log(commentData.user.username);
  return (
    <div className="space-y-3">
      <Card
      className="flex flex-row space-x-3 mt-3 relative right-0"
      >
        <Votes
        votes={commentData.score}
        /> 
        <div className="flex-1 space-y-3">
          <CommentHeader
          setIsReplying={setIsReplying}
          users={user}
          commentData={commentData}
          />
          <CommentBody
          commentData={ commentData }
          />
        </div>
      </Card>
      { isReplying && <AddComment
        id={commentData.id}
        commentData={commentData}
        mode="REPLY"
        user={users.currentUser}
      />}
      <ReplyContainer
      commentData={commentData}
      users={user}
      replies={commentData.replies}
      />
    </div>
  )
};

export default Comment;