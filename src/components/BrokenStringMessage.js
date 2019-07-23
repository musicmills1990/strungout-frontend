import React from 'react'
import BrokenStringMessageGraphic from '../brokenStringMessageGraphic.png'
import { connect } from 'react-redux'


const isCurrentUserEmpty = (obj) => {
  for(let key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
    }
    return true;
}

const BrokenStringMessage = ({ currentUser, myStringPacks }) => {

//this function is purely placeholder to see if mulitple mapStateToProps would work. I really need a method that can assess which
//string counter just increase from it's previous state, and should have anything to do with the values of the other string_counters
  // function stringName(){
  //     if (myStringPacks[0].attributes.low_e_string_counter > myStringPacks[0].attributes.a_string_counter) {
  //       return "Low E"
  //     } else if (myStringPacks[0].attributes.a_string_counter > myStringPacks[0].attributes.d_string_counter) {
  //       return "A"
  //     } else if (myStringPacks[0].attributes.d_string_counter > myStringPacks[0].attributes.g_string_counter) {
  //       return "D"
  //     } else if (myStringPacks[0].attributes.g_string_counter > myStringPacks[0].attributes.b_string_counter) {
  //       return "G"
  //     } else if (myStringPacks[0].attributes.b_string_counter > myStringPacks[0].attributes.high_e_string_counter) {
  //       return "B"
  //     } else if (myStringPacks[0].attributes.high_e_string_counter > myStringPacks[0].attributes.low_e_string_counter) {
  //       return "High E"
  //     } else {
  //       return "NO"
  //     }
  //   }


  return (
    <div className="brokenStringMessage">
      <h3>Ach! Sorry your string broke, but we've got you covered!</h3>
      <img src={BrokenStringMessageGraphic} alt="Sorry your string broke!" width="600" height="240"/>
      <p>We're sending a new string to:</p>
      <h2>{!isCurrentUserEmpty(currentUser) ? currentUser.attributes.address : null}</h2>
      <p> and it should arrive in 2 business days! In the meantime,
     use one of your two backup strings and keep rockin!"</p>
     </div>
  )
}


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    myStringPacks: state.myStringPacks
  }
}




export default connect(mapStateToProps)(BrokenStringMessage)
