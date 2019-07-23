const initialState = {
  low_e_string_counter: 0,
  a_string_counter: 0,
  d_string_counter: 0,
  g_string_counter: 0,
  b_string_counter: 0,
  high_e_string_counter: 0,
  guage: "",
  brand: "",
  model: "",
  price: ""
}

export default (state = initialState, action) => {
  switch (action.type){
    case "SET_MY_STRINGPACKS":
    return action.stringPacks
    default:
     return state
  }
}
