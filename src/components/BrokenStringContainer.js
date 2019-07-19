import React from 'react'
import { connect } from 'react-redux'
// import { broken } from '../actions/myStringPacks.js'
import BrokenStringGraphic from '../brokenStringGuitarGraphic.png'
import LoggedOutGuitarGraphic from '../loggedOutGuitarGraphic.png'
import { NavLink } from 'react-router-dom';
import UpdateLowE from './stringsUpdaters/UpdateLowE'
import UpdateA from './stringsUpdaters/UpdateA'
import UpdateD from './stringsUpdaters/UpdateD'
import UpdateG from './stringsUpdaters/UpdateG'
import UpdateB from './stringsUpdaters/UpdateB'
import UpdateHighE from './stringsUpdaters/UpdateHighE'


const BrokenStringContainer = ({ currentUser }) => {
  return (
    <div className="BrokenStringHome">
    { currentUser ?
      <div className="LoggedInHome">
      <h2>
        <NavLink style={{ position: 'absolute', left: '216px', bottom: '237px' }} to="/brokenStringMessage">___</NavLink>
        <NavLink style={{ position: 'absolute', left: '237px', bottom: '204px' }} to="/brokenStringMessage">___</NavLink>
        <NavLink style={{position: 'absolute', left: '258px', bottom: '171px'}} to="/brokenStringMessage">___</NavLink>
        <NavLink style={{position: 'absolute', left: '281px', bottom: '140px'}} to="/brokenStringMessage">___</NavLink>
        <NavLink style={{position: 'absolute', left: '302px', bottom: '107px'}} to="/brokenStringMessage">___</NavLink>
        <NavLink style={{position: 'absolute', left: '323px', bottom: '74px'}} to="/brokenStringMessage">___</NavLink>
      </h2>
        <img src={BrokenStringGraphic} alt="Choose your broken guitar string" width="600" height="600"/>
        <h5>Under Development:</h5>
        <UpdateLowE/>
        <UpdateA/>
        <UpdateD/>
        <UpdateG/>
        <UpdateB/>
        <UpdateHighE/>
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

//these Navlinks should be buttons that first send a PATCH request to some stringPacks controller that increases
//the cooresponding string's stringcount, THEN it calls a redirect or navlink to brokenstringmessage component
