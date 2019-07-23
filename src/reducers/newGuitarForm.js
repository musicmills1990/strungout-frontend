const initialState = {
  guitar_type: "accoustic",
  brand: "",
  model: "",
  color: "",
  user_id: ""
}

export default (state = initialState, action) => {
  switch(action.type){
    case "UPDATE_GUITAR_FORM":
      return action.formData
    case "RESET_GUITAR_FORM":
      return initialState
    default:
      return state
  }
}
