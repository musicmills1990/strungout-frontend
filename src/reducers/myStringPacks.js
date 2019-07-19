const initialState = {
}

export default (state = [], action) => {
  switch (action.type){
    case "SET_MY_STRINGPACKS":
    return action.stringPacks
    default:
     return state
  }
}
