import React from 'react'
import '../index.css'

function Button(props) {
  return (
   <button classname="buttonParent" onClick={props.action}>
      {props.name}
   </button>
  )
}
export default Button