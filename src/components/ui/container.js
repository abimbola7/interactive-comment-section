import React from "react"

const Container = (props) =>{
  return (
    <div className="max-w-3xl min-h-screen px-3 py-3 mx-auto space-y-5">
      { props.children }
    </div>
  )
}

export default Container