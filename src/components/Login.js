import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'



const Login = ({loginForm, login, updateLoginForm }) => {


  const handleInputChange = event => {
    const { name, value } = event.target
    const updateFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updateFormInfo)
  }


  const handleSubmit = event => {
    event.preventDefault()
    login(loginForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" value={loginForm.email} name="email" type="text" onChange={handleInputChange}/>
      <input placeholder="password" value={loginForm.password} name="password" type="password" onChange={handleInputChange}/>
      <input type="submit" value="Log In"/>
    </form>
  )
}

const mapstateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}


export default connect(mapstateToProps, { updateLoginForm, login })(Login)
