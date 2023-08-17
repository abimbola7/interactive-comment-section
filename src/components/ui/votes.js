import React, { Fragment } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import "./vote.css"
const Votes = (props) => {
  const { votes } = props
  return (
    <Fragment>
      <div className="w-10 h-24 rounded-lg flex flex-col justify-center mt-1 bg-veryLightGray">
        <button
        className="flex items-center justify-center w-full py-1"
        >
          <AiOutlinePlus/>
        </button>
        <input 
        type="number" 
        className="w-full h-8 bg-transparent outline-none focus:outline-none text-center custom-number-input" 
        disabled
        defaultValue={votes}
        />
        <button
        className="flex items-center justify-center w-full py-1"
        >
          <AiOutlineMinus/>
        </button>
      </div>
    </Fragment>
  )
};

export default Votes;