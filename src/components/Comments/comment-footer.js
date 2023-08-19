import { useDispatch } from "react-redux";
import React, { Fragment } from "react"
import Button from "../ui/button";
import { uiActions } from "../../store/ui-slice";
import { postActions } from "../../store/post-slice";
import Votes from "../ui/votes";

const CommentFooter = (props) => {
  const dispatch = useDispatch();
  console.log(props.commentData);
  const {
    user,
    createdAt,
    id,
  } = props.commentData
  const { users, mode, ids, index, ind } = props 
  console.log(ind, ids, id);
  const { setIsReplying, setIsEditing, isEditing } = props;
  const replyHandler = () => {
    setIsReplying(prevState=>!prevState)
  };
  const editHandler = () => {
    setIsEditing(prevState=>!prevState)
  };

  const deleteComment = () => {
    dispatch(uiActions.modalIsToggled())
    dispatch(postActions.captureData({ id:id, mode:mode, outerId:ids, index:index, ind:ind }))
  }
  return (
    <div className={`flex items-center justify-between space-x-3`}>
      <Votes
        className="xs:hidden flex"
        index={index}
        mode={mode}
        commentData={props.commentData}
        votes={props.commentData.score}
        />
      {
        user.username !== users.username ? (
          <Button
          className="text-moderateBlue xs:hidden flex"
          content="REPLY"
          onClick={replyHandler}
          />
          ) : 
          (
            <Fragment>
              {
                !isEditing && (
                  <div className="space-x-4 justify-between items-center xs:hidden flex">
                    <Button 
                    content="Delete"
                    className="text-softRed hover:text-paleRed"
                    onClick={deleteComment}
                    />
                    <Button 
                    onClick={editHandler}
                    content="Edit"
                    className="text-moderateBlue"
                    />
                  </div>
                )
              }
            </Fragment>
            )
        }
    </div>
  )
}

export default CommentFooter;