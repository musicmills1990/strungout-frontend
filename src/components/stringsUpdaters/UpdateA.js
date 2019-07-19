import React from 'react'
import { connect } from 'react-redux'
import { updateStrings } from '../../actions/myStringPacks.js'

const UpdateA = ({ updateStrings, myStringPacks }) => {

const handleSubmit = event => {
  event.preventDefault()
  const { name, value } = event.target
    const updateStringInfo = {
      ...myStringPacks,
      [name]: value
    }
    debugger
  updateStrings()
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="submit" name="A" value="A"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    myStringPacks: state.myStringPacks
  }
}


export default connect(mapStateToProps, { updateStrings })(UpdateA)
