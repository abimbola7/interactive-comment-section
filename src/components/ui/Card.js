import React from "react"


const Card = (props) => {
  const classes = `${props.className} rounded-lg px-6 py-3 bg-white text-grayishBlue`
  return (
    <div className={classes}>
      { props.children }
    </div>
  )
};

export default Card;