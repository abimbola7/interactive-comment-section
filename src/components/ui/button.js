import React from 'react'
import { FaReply } from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai"
import { MdOutlineModeEdit } from  "react-icons/md"


const Button = (props) => {
  const { content } = props
  return (
    <button 
    className={`${props.className} flex space-x-1  items-center font-semibold`}
    onClick={props.onClick}
    >
      {content === "REPLY" ? <FaReply/> : 
      content === "Delete" ? <AiFillDelete/> :
      content === "Edit" ? <MdOutlineModeEdit/> :
      ""
      }
      { <p className='text capitalize'>{content}</p> }
    </button>
  )
};

export default Button;