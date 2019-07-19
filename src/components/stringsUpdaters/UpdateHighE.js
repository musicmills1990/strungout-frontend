import React from 'react'
import { connect } from 'react-redux'
import { updateStrings } from '../../actions/myStringPacks.js'

const UpdateHighE = ({ updateStrings }) => {

  return (
    <form onSubmit={updateStrings}>
    <input type="submit" value="High E"/>
    </form>
  )
}

export default connect(null, { updateStrings })(UpdateHighE)
