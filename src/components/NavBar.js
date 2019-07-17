import React from 'react'
import { connect } from 'react-redux'
import Login from "./Login.js"
import Logout from "./Logout.js"
import { NavLink } from 'react-router-dom';



const Navbar = ({ currentUser }) => {

  return (
    <div className="NavBar">
      <h1>Welcome To StrungOut</h1>
      {currentUser ? <Logout/> : ''}
      {currentUser ? <h1>Welcome, {currentUser.attributes.name}!</h1> : ""}
      {currentUser ?
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <button> <NavLink style={{ marginRight: '10px' }} to="/guitars">My Guitars</NavLink></button>
         or
        <button> <NavLink style={{ marginRight: '10px' }} to="/stringpacks">My String Pack</NavLink></button>
        </div>
         :
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <button> <NavLink style={{ marginRight: '10px' }} to="/login">Log In</NavLink></button>
       or
      <button> <NavLink style={{ marginRight: '10px' }} to="/signup">Sign Up</NavLink></button>
      </div>}

    </div>  )
}


const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)
