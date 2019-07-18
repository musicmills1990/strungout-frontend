const initialState = {
  guitar_type: "",
  brand: "",
  model: "",
  color: "",
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
