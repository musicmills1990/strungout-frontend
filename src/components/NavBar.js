import React from 'react'
import { connect } from 'react-redux'
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
        <h2>
        <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/">Broken String</NavLink>
        <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/guitars">My Guitars</NavLink>
        <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/stringpacks">My String Pack</NavLink>
        <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/account">My Account</NavLink>
        </h2>
        </div>
         :
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <h2>
       <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/login">Log In</NavLink>
       or
       <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/signup">Sign Up</NavLink></h2>
      </div>}

    </div>  )
}


const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)
