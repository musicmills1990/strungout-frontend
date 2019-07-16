import React from 'react'

const StringPackCard = (props) => {
  return (
    <div>
    <h3>My Strings:</h3>
    <i>{props.stringPack.attributes.model}</i>
    </div>
  )
}

export default StringPackCard
