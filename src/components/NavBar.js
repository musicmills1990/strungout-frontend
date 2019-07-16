import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"


const Navbar = ({ currentUser }) => {

  return (
    <div className="NavBar">
      <h1>Welcome To StrungOut</h1>
      {currentUser ? <Logout/> : <Login/>}
      {currentUser ? <h1>Welcome, {currentUser.attributes.name}!</h1> : ""}
      <button> Log In </button>
       or 
      <button> Sign Up </button>

    </div>  )
}


const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)
