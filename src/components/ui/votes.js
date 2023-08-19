import React, { Fragment } from "react";
import { ReactComponent as Plus } from "../../images/icon-plus.svg"
import { ReactComponent as Minus } from "../../images/icon-minus.svg"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { postActions } from "../../store/post-slice";
import "./vote.css"
const Votes = (props) => {
  const dispatch = useDispatch()
  const { votes, commentData, mode, index } = props
  const increase = () => {
    dispatch(postActions.increaseVote({ id:commentData.id, mode:mode, index:index }))
    console.log(commentData.id);
  }
  const decrease = () => {
    dispatch(postActions.decreaseVote({ id:commentData.id, mode:mode, index:index }))
  }
  console.log(votes);
  return (
    <Fragment>
      <div className={"xs:w-10 xs:h-24 w-24 h-8 rounded-lg flex flex-row xs:flex-col justify-center mt-1 bg-veryLightGray " + props.className}>
        <button
        className="flex items-center justify-center w-full py-1 text-red-500 fill-[#C5C6EF] hover:fill-grayishBlue"
        onClick={increase}
        >
          <Plus/>
        </button>
        <input 
        type="number" 
        className="w-full h-8 bg-transparent outline-none focus:outline-none text-center custom-number-input font-semibold" 
        disabled
        value={votes}
        />
        <button
        onClick={decrease}
        className="flex items-center justify-center w-full py-1 text-red-500 fill-[#C5C6EF] hover:fill-grayishBlue"
        >
          <Minus/>
        </button>
      </div>
    </Fragment>
  )
};

export default Votes;