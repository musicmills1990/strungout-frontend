import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'



const Login = (props) => {
  const handleInputChange = event => {
    const { name, value } = event.target
    const updateFormInfo = {
      ...props.loginForm,
      [name]: value
    }
    props.updateLoginForm(updateFormInfo)
  }
  return (
    <form onSubmit={undefined}>
      <input placeholder="email" value={props.email} name="email" type="text" onChange={handleInputChange}/>
      <input placeholder="password" value={props.password} name="password" type="password" onChange={handleInputChange}/>
      <input type="submit" value="Log In"/>
    </form>
  )
}

const mapstateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}


export default connect(mapstateToProps, { updateLoginForm })(Login)
