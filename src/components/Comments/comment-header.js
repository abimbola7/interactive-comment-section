import React, { useEffect, useState } from "react";
import { FaReply } from "react-icons/fa"
import Image from "../ui/Image";
import Button from "../ui/button";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { postActions } from "../../store/post-slice";

const CommentHeader = (props) => {
  const [date, setDate] = useState('seconds ago')
  const dispatch = useDispatch()
  const {
    user,
    createdAt,
    id,
  } = props.commentData
  const { users, mode, ids, index, ind } = props 
  const { setIsReplying, setIsEditing } = props;


  useEffect(() => {
    function getTime(){
    const timeDiff = new Date().getTime() - new Date(createdAt).getTime();
    if (timeDiff > 100) {
      let initDate = Math.floor(timeDiff / 1000);
      setDate(`${initDate} ${initDate > 1 ? 'seconds' : 'seconds'} ago`)
    }
    if (timeDiff > 60000) {
      let initDate = Math.floor(timeDiff / 60000);
      setDate(`${initDate} ${initDate > 1 ? 'minutes' : 'minute'} ago`)
    }
    if (timeDiff > 3600000) {
      let initDate = Math.floor(timeDiff / 3600000);
      setDate(`${initDate} ${initDate > 1 ? 'hours' : 'hour'} ago`)
    }
    if (timeDiff > 86400000) {
      let initDate = Math.floor(timeDiff / 86400000);
      setDate(`${initDate} ${initDate > 1 ? 'days' : 'day'} ago`)
    }
      }
      const interval = setInterval(getTime,1000);
      return () => {
        clearInterval(interval)
      }
    
  }, [createdAt])
  
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
    <div className="flex flex-row justify-between items-center">
              <div className="flex space-x-2 items-center">
                <div className="h-9 cursor-pointer rounded-full">
                  <div className="overflow-hidden rounded-full h-full w-9 hover:border hover:border-red-500">
                    <Image
                    src={user.image.png}
                    />
                  </div>
                </div>
                <p
                className="text-darkBlue font-semibold"
                >{user.username}
                </p>
                {
                  user.username === users.username &&
                   <div 
                   className="px-1 pb-1 rounded-sm text-sm text-center bg-moderateBlue text-white"
                   >
                    you
                    </div>
                }
                <p className="">{date}</p>
              </div>
              {
                user.username !== users.username ? (
                  <Button
                  className="text-moderateBlue hidden xs:flex hover:text-lightBlue"
                  content="REPLY"
                  onClick={replyHandler}
                  />
                ) : 
                (
                  <div className="space-x-4 justify-between items-center hidden xs:flex">
                    <Button 
                    content="Delete"
                    className="text-softRed hover:text-paleRed"
                    onClick={deleteComment}
                    />
                    <Button 
                    onClick={editHandler}
                    content="Edit"
                    className="text-moderateBlue hover:text-lightBlue"
                    />
          
                  </div>
                )
                
              }
    </div>
  )
}

export default CommentHeader;