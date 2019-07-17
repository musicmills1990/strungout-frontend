import React from 'react'
import { connect } from 'react-redux'
import { updateGuitarForm } from '../actions/newGuitarForm.js'
import { newGuitar } from '../actions/myGuitars.js'



const NewGuitar = ({myGuitarForm, newGuitar, updateGuitarForm }) => {


  const handleInputChange = event => {
    const { name, value } = event.target
    const updateFormInfo = {
      ...myGuitarForm,
      [name]: value
    }
    updateGuitarForm(updateFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    newGuitar(myGuitarForm)
  }

  return (
    <div className="guitar-form-parent">
      <label>Register Your Guitar!</label>
        <div className="guitar-form-child">
        <form onSubmit={handleSubmit}>
          <label>Accoustic or Electric?</label>
          <select placeholder="guitar_type" value={myGuitarForm.guitar_type} name="guitar_type" type="text" onChange={handleInputChange}>
            <option value="accoustic">Accoustic Guitar</option>
            <option value="electric">Electric Guitar</option>
          </select>
            <input placeholder="brand" value={myGuitarForm.brand} name="brand" type="text" onChange={handleInputChange}/>
            <input placeholder="model" value={myGuitarForm.model} name="model" type="text" onChange={handleInputChange}/>
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
    myGuitarForm: state.newGuitarForm
  }
}


export default connect(mapStateToProps, { updateGuitarForm, newGuitar })(NewGuitar)
