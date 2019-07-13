import React from 'react'

const GuitarCard = (props) => {
  return (
    <div>
    <p>My Guitar: {props.guitar.attributes.guitar_type}</p>
    <p>Brand: {props.guitar.attributes.brand}</p>
    <p>Model: {props.guitar.attributes.model}</p>
    <p>Color: {props.guitar.attributes.color}</p>
    </div>
  )
}

export default GuitarCard
