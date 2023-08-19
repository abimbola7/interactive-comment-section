import React from "react"


const Card = (props) => {
  const classes = `${props.className} rounded-lg px-2 xs:px-6 py-2 xs:py-3 bg-white text-grayishBlue`
  return (
    <div className={classes}>
      { props.children }
    </div>
  )
};

export default Card;