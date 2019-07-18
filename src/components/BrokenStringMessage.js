import React from 'react'
import BrokenStringMessageGraphic from '../brokenStringMessageGraphic.png'
import { connect } from 'react-redux'


const BrokenStringMessage = ({ currentUser }) => {
  return (
    <div className="brokenStringMessage">
      <h3>Ach! Sorry your string broke, but we've got you covered!</h3>
      <img src={BrokenStringMessageGraphic} alt="Sorry your string broke!" width="600" height="240"/>
      <p>We're sending a new string to:</p>
      <h2>{currentUser ? currentUser.attributes.address : null}</h2>
      <p> and it should arrive in 2 business days! In the meantime,
     use one of your two backup strings and keep rockin!"</p>
     </div>
  )
}


const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser
  }
}


export default connect(mapStateToProps)(BrokenStringMessage)
