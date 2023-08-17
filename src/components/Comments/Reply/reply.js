import React, { Fragment, useState } from "react";
import Card from "../../ui/Card";
import { CommentBody, CommentHeader } from "../index";
import { useSelector } from "react-redux";
import Votes from "../../ui/votes";
import AddComment from "../add-comment";

const Reply = (props) => {
  const user = useSelector(state=>state.post.items)
  const { commentData, commentDatas } = props;
  const { users } = props;
  const [ isReplying, setIsReplying ] = useState(false)
  console.log(commentData.id);
  return (
    <Fragment>
      <Card
      className="flex flex-row space-x-3 mt-3 relative right-0"
      >
        <Votes
        votes={commentData.score}
        /> 
        <div className="flex-1 space-y-3">
          <CommentHeader
          setIsReplying={setIsReplying}
          users={users}
          commentData={commentData}
          />
          <CommentBody
          commentData={ commentData }
          replyingTo={commentData.replyingTo}
          />
        </div>
      </Card> 
      { isReplying && <AddComment
        id={commentDatas.id}
        commentData={commentData}
        mode="REPLY"
        user={user.currentUser}
      />}  
    </Fragment>
  )
};

export default Reply;