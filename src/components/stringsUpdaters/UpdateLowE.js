import React from 'react'
import { connect } from 'react-redux'
import { updateStrings } from '../../actions/myStringPacks.js'

const UpdateLowE = ({ updateStrings }) => {

  return (
    <form onSubmit={updateStrings}>
    <input type="submit" value="Low E"/>
    </form>
  )
}

export default connect(null, { updateStrings })(UpdateLowE)
