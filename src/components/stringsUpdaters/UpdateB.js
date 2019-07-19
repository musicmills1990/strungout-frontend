import React from 'react'
import { connect } from 'react-redux'
import { updateStrings } from '../../actions/myStringPacks.js'

const UpdateB = ({ updateStrings }) => {

  return (
    <form onSubmit={updateStrings}>
    <input type="submit" value="B"/>
    </form>
  )
}

export default connect(null, { updateStrings })(UpdateB)
