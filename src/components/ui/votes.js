import React, { Fragment } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { postActions } from "../../store/post-slice";
import "./vote.css"
const Votes = (props) => {
  const dispatch = useDispatch()
  const { votes, commentData, mode } = props
  const increase = () => {
    dispatch(postActions.increaseVote({ id:commentData.id, mode:mode }))
  }
  const decrease = () => {
    dispatch(postActions.decreaseVote({ id:commentData.id, mode:mode }))
  }
  console.log(votes);
  return (
    <Fragment>
      <div className="w-10 h-24 rounded-lg flex flex-col justify-center mt-1 bg-veryLightGray">
        <button
        className="flex items-center justify-center w-full py-1"
        onClick={increase}
        >
          <AiOutlinePlus/>
        </button>
        <input 
        type="number" 
        className="w-full h-8 bg-transparent outline-none focus:outline-none text-center custom-number-input" 
        disabled
        value={votes}
        />
        <button
        onClick={decrease}
        className="flex items-center justify-center w-full py-1"
        >
          <AiOutlineMinus/>
        </button>
      </div>
    </Fragment>
  )
};

export default Votes;