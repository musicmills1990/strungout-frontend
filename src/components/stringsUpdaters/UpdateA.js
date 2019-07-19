import React from 'react'
import { connect } from 'react-redux'
import { updateStrings } from '../../actions/myStringPacks.js'

const UpdateA = ({ updateStrings, myStringPacks }) => {

const handleSubmit = event => {
  event.preventDefault()
  let currentStringCount = myStringPacks[0].attributes.a_string_counter
    const updateStringInfo = {
      ...myStringPacks[0].attributes,
      a_string_counter: currentStringCount +=1
    }
  updateStrings(updateStringInfo)
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="submit" value="A"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    myStringPacks: state.myStringPacks
  }
}


export default connect(mapStateToProps, { updateStrings })(UpdateA)
