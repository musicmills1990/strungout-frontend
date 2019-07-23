import React from 'react'
import { connect } from 'react-redux'
import { updateStringPackForm } from '../actions/newStringPackForm.js'
import { newStringPack } from '../actions/myStringPacks.js'


const isCurrentUserEmpty = (obj) => {
  for(let key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
    }
    return true;
}


const NewStringPack = ({newStringPackForm, newStringPack, updateStringPackForm, currentUser }) => {


  const handleInputChange = event => {
    const { name, value } = event.target
    const updateFormInfo = {
      ...newStringPackForm,
      [name]: value
    }
    updateStringPackForm(updateFormInfo)
  }

  const myUserId = {
    ...newStringPackForm,
    user_id: currentUser.id
  }

  const handleSubmit = event => {
    event.preventDefault()
    newStringPack(myUserId)
  }

  return (
    !isCurrentUserEmpty(currentUser) ?
    <div className="string-packs-form-parent">
      <label><h2>Choose your Strings!</h2></label>
        <div className="string-packs-form-child">
        <form onSubmit={handleSubmit}>
          <label>String gauge (thickness):</label><br/>
          <select placeholder="gauge" value={newStringPackForm.gauge} name="gauge" type="text" onChange={handleInputChange}>
            <option value="custom-light">Custom Light</option>
            <option value="light">Light</option>
            <option value="medium">Medium</option>
          </select><br/>
            <input placeholder="brand" value={newStringPackForm.brand} name="brand" type="text" onChange={handleInputChange}/><br/>
            <input placeholder="model" value={newStringPackForm.model} name="model" type="text" onChange={handleInputChange}/><br/>
            <input placeholder="price" value={newStringPackForm.price} name="price" type="text" onChange={handleInputChange}/>
          <br/>
            <input type="submit" value="Save My String Choice"/>
        </form>
      </div>
    </div>
    :
    <div className="logged-out-message">
    <h3>You must be logged in to add a new string pack. Login or Signup!</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    newStringPackForm: state.newStringPackForm,
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps, { updateStringPackForm, newStringPack })(NewStringPack)
