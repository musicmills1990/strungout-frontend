import React from 'react'
import { connect } from 'react-redux'
import { updateGuitarForm } from '../actions/newGuitarForm.js'
import { newGuitar } from '../actions/myGuitars.js'



const NewGuitar = ({myGuitarForm, newGuitar, updateGuitarForm, currentUser }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updateFormInfo = {
      ...myGuitarForm,
      [name]: value
    }
    updateGuitarForm(updateFormInfo)
  }

  const myUserId = {
    ...myGuitarForm,
    user_id: currentUser.id
  }

  const handleSubmit = event => {
    event.preventDefault()
    newGuitar(myUserId)
  }

  return (
    <div className="guitar-form-parent">
      <label><h2>Register Your Guitar!</h2></label>
        <div className="guitar-form-child">
        <form onSubmit={handleSubmit}>
          <label>Accoustic or Electric?</label><br/>
          <select placeholder="guitar_type" value={myGuitarForm.guitar_type} name="guitar_type" type="text" onChange={handleInputChange}>
            <option value="accoustic">Accoustic Guitar</option>
            <option value="electric">Electric Guitar</option>
          </select><br/>
            <input placeholder="brand" value={myGuitarForm.brand} name="brand" type="text" onChange={handleInputChange}/><br/>
            <input placeholder="model" value={myGuitarForm.model} name="model" type="text" onChange={handleInputChange}/><br/>
            <input placeholder="color" value={myGuitarForm.color} name="color" type="text" onChange={handleInputChange}/>
          <br/>
            <input type="submit" value="Register Your Guitar"/>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myGuitarForm: state.newGuitarForm,
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps, { updateGuitarForm, newGuitar })(NewGuitar)
