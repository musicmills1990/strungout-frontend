import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'



const Signup = ({signupForm, signup, updateSignupForm }) => {


  const handleInputChange = event => {
    const { name, value } = event.target
    const updateFormInfo = {
      ...signupForm,
      [name]: value
    }
    updateSignupForm(updateFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name" value={signupForm.name} name="name" type="text" onChange={handleInputChange}/>
      <input placeholder="email" value={signupForm.email} name="email" type="text" onChange={handleInputChange}/>
      <input placeholder="address" value={signupForm.address} name="address" type="text" onChange={handleInputChange}/>
      <input placeholder="password" value={signupForm.password} name="password" type="text" onChange={handleInputChange}/>
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapstateToProps = state => {
  return {
    signupForm: state.signupForm
  }
}


export default connect(mapstateToProps, { updateSignupForm, signup })(Signup)
