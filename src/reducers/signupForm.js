const initialState = {
  name: "",
  email: "",
  address: "",
  password: "",
  player_type: "",
  plan: "",
  pay_schedule: ""
  
}

export default (state = initialState, action) => {
  switch(action.type){
    case "UPDATE_SIGNUP_FORM":
      return action.formData
    case "RESET_SIGNUP_FORM":
      return initialState
    default:
      return state
  }
}
