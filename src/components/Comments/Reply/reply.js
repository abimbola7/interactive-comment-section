import React, { Fragment, useState } from "react";
import Card from "../../ui/Card";
import { CommentBody, CommentHeader, CommentFooter } from "../index";
import { useSelector } from "react-redux";
import Votes from "../../ui/votes";
import AddComment from "../add-comment";

const Reply = (props) => {
  const user = useSelector(state=>state.post.items)
  const { commentData, commentDatas, id, index, ind } = props;
  const { users } = props;
  const [ isReplying, setIsReplying ] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  return (
    <Fragment>
      <Card
      className="flex flex-row space-x-3 mt-3 relative right-0"
      >
        <Votes
        className="hidden xs:flex"
        index={index}
        mode="REPLY"
        commentData={commentData}
        votes={commentData.score}
        /> 
        <div className="flex-1 space-y-3">
          <CommentHeader
          ind={ind}
          index={index}
          mode="REPLY"
          ids={id}
          setIsEditing={setIsEditing}
          setIsReplying={setIsReplying}
          users={users}
          commentData={commentData}
          />
          <CommentBody
          ids={index}
          mode="REPLY"
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          commentData={ commentData }
          replyingTo={commentData.replyingTo}
          />
          <CommentFooter
          ind={ind}
          index={index}
          mode="REPLY"
          ids={id}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setIsReplying={setIsReplying}
          users={users}
          commentData={commentData}
          />
        </div>
      </Card> 
      { isReplying && <AddComment
        id={commentDatas.id}
        setIsReplying={setIsReplying}
        commentData={commentData}
        mode="REPLY"
        user={user.currentUser}
      />}  
    </Fragment>
  )
};

export default Reply;