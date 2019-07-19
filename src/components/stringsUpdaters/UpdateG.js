import React from 'react'
import { connect } from 'react-redux'
import { updateStrings } from '../../actions/myStringPacks.js'

const UpdateG = ({ updateStrings }) => {

  return (
    <form onSubmit={updateStrings}>
    <input type="submit" value="G"/>
    </form>
  )
}

export default connect(null, { updateStrings })(UpdateG)
