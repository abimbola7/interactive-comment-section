import React from "react";
import { FaReply } from "react-icons/fa"
import Image from "../ui/Image";
import Button from "../ui/button";


const CommentHeader = (props) => {
  const {
    user,
    createdAt,
    id,
  } = props.commentData
  const { users } = props 
  const { setIsReplying } = props
  console.log(props.users);
  const replyHandler = () => {
    setIsReplying(prevState=>!prevState)
  };
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
                   className="px-2 pb-1 rounded-sm text-center bg-moderateBlue text-white"
                   >
                    you
                    </div>
                }
                <p className="">{createdAt}</p>
              </div>
              {
                user.username !== users.username ? (
                  <Button
                  className="text-moderateBlue"
                  content="REPLY"
                  onClick={replyHandler}
                  />
                ) : 
                (
                  <div className="flex space-x-4 justify-between items-center">
                    <Button 
                    content="Delete"
                    className="text-softRed hover:text-paleRed"
                    />
                    <Button 
                    content="Edit"
                    className="text-moderateBlue"
                    />
          
                  </div>
                )
                
              }
    </div>
  )
}

export default CommentHeader;