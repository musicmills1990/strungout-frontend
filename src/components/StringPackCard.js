import React from 'react'

const StringPackCard = (props) => {
  return (
    <div>
    <h3>My Strings:</h3>
    <p>{props.stringPack.attributes.brand}</p>
    <p>{props.stringPack.attributes.model}</p>
    <p>{props.stringPack.attributes.guage}</p>
    <p>${props.stringPack.attributes.price}</p>

    </div>
  )
}

export default StringPackCard
