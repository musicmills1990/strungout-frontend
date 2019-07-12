import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"


const Navbar = ({ currentUser }) => {

  return (
    <div className="NavBar">
      <h1>Welcome To StrungOut</h1>
      {currentUser ? `Welcome ${currentUser.name}` : ""}
      {currentUser ? <Logout/> : <Login/>}
    </div>  )
}


const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)
