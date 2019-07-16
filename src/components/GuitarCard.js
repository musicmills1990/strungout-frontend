import React from 'react'

const GuitarCard = (props) => {
  return (
    <div>
    <h3>My Guitar:</h3>
    <i>{props.guitar.attributes.guitar_type}</i>
    <p>Brand: {props.guitar.attributes.brand}</p>
    <p>Model: {props.guitar.attributes.model}</p>
    <p>Color: {props.guitar.attributes.color}</p>
    </div>
  )
}

export default GuitarCard
