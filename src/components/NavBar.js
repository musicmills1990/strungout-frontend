import React from 'react'
import { connect } from 'react-redux'
import Logout from "./Logout.js"
import { NavLink } from 'react-router-dom';


const isCurrentUserEmpty = (obj) => {
  for(let key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
    }
    return true;
}

const Navbar = ({ currentUser }) => {
  return (

    <div className="NavBar">
      <h1>Welcome To StrungOut</h1>
      {isCurrentUserEmpty(currentUser) ? '' : <Logout/> }
      {isCurrentUserEmpty(currentUser) ? "" : <h1>Welcome, {currentUser.attributes.name}!</h1>}
      {isCurrentUserEmpty(currentUser) ?
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <h2>
           <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/login">Log In</NavLink>
           or
           <NavLink className="Nav-Link" style={{ marginLeft: '10px' }} to="/signup">Sign Up</NavLink>
         </h2>
      </div>
      :
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <h2>
          <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/">Broken String</NavLink>
          <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/guitars">My Guitars</NavLink>
          <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/stringpacks">My String Pack</NavLink>
          <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/account">My Account</NavLink>
          <NavLink className="Nav-Link" style={{ marginRight: '10px' }} to="/guitarsLiveCode">My Guitar (Live Code)</NavLink>

        </h2>
      </div>}

    </div>  )
}


const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)
