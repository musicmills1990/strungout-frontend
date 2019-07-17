import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'



const Signup = ({signupForm, signup, updateSignupForm }) => {


  const handleInputChange = event => {
    const { name, value } = event.target
    const updateFormInfo = {
      ...signupForm,
      [name]: value
    }
    updateSignupForm(updateFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name" value={signupForm.name} name="name" type="text" onChange={handleInputChange}/>
      <input placeholder="email" value={signupForm.email} name="email" type="text" onChange={handleInputChange}/>
      <input placeholder="address" value={signupForm.address} name="address" type="text" onChange={handleInputChange}/>
      <input placeholder="password" value={signupForm.password} name="password" type="text" onChange={handleInputChange}/>
      <br/>
      <label>How would you describe your playing?</label>
      <select placeholder="player_type" value={signupForm.player_type} name="player_type" type="text" onChange={handleInputChange}>
        <option value="practicer">At Home Practicer</option>
        <option value="open_mic_player">Occasional coffeehouse and Open Mic Player</option>
        <option value="indoor_gig_performer">Weekly Indoor Gig Performer</option>
        <option value="outdoor_festival_performer">Weekly Outdoor Festival Performer</option>
        <option value="touring_professional">Touring Professional</option>
      </select>
      <br/>
      <label>Please choose your plan(this will affect what quality of strings you can choose)</label>
      <select placeholder="plan" value={signupForm.plan} name="plan" type="text" onChange={handleInputChange}>
        <option value="basic">Basic Plan: $5.99/month</option>
        <option value="premium">Premium Plan: $7.99/month</option>
        <option value="professional">Professional Plan: $11.99/month</option>
      </select>
      <br/>
      <label>Please choose your payment schedule.</label>
      <select placeholder="pay_schedule" value={signupForm.pay_schedule} name="pay_schedule" type="text" onChange={handleInputChange}>
        <option value="monthly">Pay Month to Month</option>
        <option value="quarterly">Pay Quarterly (5% off!)</option>
        <option value="practicer">Bi-Annual Payments (10% off!)</option>
        <option value="practicer">Annual Payment(20% off!)</option>
      </select>
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapstateToProps = state => {
  return {
    signupForm: state.signupForm
  }
}


export default connect(mapstateToProps, { updateSignupForm, signup })(Signup)
