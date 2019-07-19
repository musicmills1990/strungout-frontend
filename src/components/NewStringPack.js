import React from 'react'
import { connect } from 'react-redux'
import { updateStringPackForm } from '../actions/newStringPackForm.js'
import { newStringPack } from '../actions/myStringPacks.js'



const NewStringPack = ({newStringPackForm, newStringPack, updateStringPackForm }) => {


  const handleInputChange = event => {
    const { name, value } = event.target
    const updateFormInfo = {
      ...newStringPackForm,
      [name]: value
    }
    updateStringPackForm(updateFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    newStringPack(newStringPackForm)
  }

  return (
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
  )
}

const mapStateToProps = (state) => {
  return {
    newStringPackForm: state.newStringPackForm
  }
}


export default connect(mapStateToProps, { updateStringPackForm, newStringPack })(NewStringPack)
