const initialState = {
  guage: "custom-light",
  brand: "",
  model: "",
  price: "",
  user_id: ""
}

export default (state = initialState, action) => {
  switch(action.type){
    case "UPDATE_STRINGPACK_FORM":
      return action.formData
    case "RESET_STRINGPACK_FORM":
      return initialState
    default:
      return state
  }
}
