import React from 'react'

const GuitarCardLiveCode = (props) => {
  return (
    <div>
    <h3>My Guitar:</h3>
    <i>{props.guitar_type}</i>
    <p>Brand: {props.brand}</p>
    <p>Model: {props.model}</p>
    <p>Color: {props.color}</p>
    </div>
  )
}

export default GuitarCardLiveCode
