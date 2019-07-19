import React from 'react'
import { connect } from 'react-redux'
import { updateStrings } from '../../actions/myStringPacks.js'

const UpdateD = ({ updateStrings }) => {

  return (
    <form onSubmit={updateStrings}>
    <input type="submit" value="D"/>
    </form>
  )
}

export default connect(null, { updateStrings })(UpdateD)
