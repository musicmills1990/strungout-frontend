import React from 'react'
import { connect } from 'react-redux'
// import { broken } from '../actions/myStringPacks.js'
import BrokenStringGraphic from '../brokenStringGuitarGraphic.png'
import LoggedOutGuitarGraphic from '../loggedOutGuitarGraphic.png'
import { NavLink } from 'react-router-dom';


const BrokenStringContainer = ({ currentUser }) => {
  return (
    <div className="BrokenStringHome">
    { currentUser ?
      <div className="LoggedInHome">
        <button><NavLink style={{ marginTop: '10px' }} to="/brokenStringMessage">E</NavLink></button>
        <button><NavLink style={{ marginTop: '10px' }} to="/brokenStringMessage">A</NavLink></button>
        <button><NavLink style={{ marginTop: '10px' }} to="/brokenStringMessage">D</NavLink></button>
        <button><NavLink style={{ marginTop: '10px' }} to="/brokenStringMessage">G</NavLink></button>
        <button><NavLink style={{ marginTop: '10px' }} to="/brokenStringMessage">G</NavLink></button>
        <button><NavLink style={{ marginTop: '10px' }} to="/brokenStringMessage">E</NavLink></button>
        <img src={BrokenStringGraphic} alt="Choose your broken guitar string" width="600" height="600"/>
      </div>
      :
      <div className="LoggedOutHome">
      <img src={LoggedOutGuitarGraphic} alt="Welcoming guitar" width="600" height="220"/>
        <p><strong>Open any guitarist's case in the world.</strong> Whether they gig regularly or jam in their basement,
        the scene is usually the same: there’s 8 extra low E strings, 5 A strings, 1 D string, and they’re
        all out of B strings. Why? Simple - strings come cheapest in full packs of 6, but certain strings break
        way more than others due to various factors: tensile strength, thickness, temperature and humidity, etc.
        Add swapping strings with other musicians to survive a gig before you have time to run to the store,
        and now you have different brands, different coatings, and different gauged strings on your guitar,
        which can affect your guitar's neck over the longterm.</p>

        <p><strong>Introducing Strung Out - </strong>a monthly membership service for the amateur to professional guitarist.
        Every time a string breaks, just open the app and click the cooresponding string and we'll mail you a new one.
        All for less than the price of one pack of strings! You’ll never have to worry about running out of strings again!</p>
      </div>}

  </div>
)}

const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(BrokenStringContainer)
