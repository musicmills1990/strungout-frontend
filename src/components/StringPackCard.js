import React from 'react'

const StringPackCard = (props) => {

  return (
    <div>
      <h3>My Strings:</h3>
      <p>{props.stringPack.attributes.brand}</p>
      <p>{props.stringPack.attributes.model}</p>
      <p>{props.stringPack.attributes.guage}</p>
      <p>${props.stringPack.attributes.price}</p>
      <h3>Broken Strings Counter:</h3>
      <p>Low E String(s): {props.stringPack.attributes.low_e_string_counter}</p>
      <p>A String(s): {props.stringPack.attributes.a_string_counter}</p>
      <p>D String(s): {props.stringPack.attributes.d_string_counter}</p>
      <p>G String(s): {props.stringPack.attributes.g_string_counter}</p>
      <p>B String(s): {props.stringPack.attributes.b_string_counter}</p>
      <p>E String(s): {props.stringPack.attributes.high_e_string_counter}</p>
    </div>
  )
}

export default StringPackCard
