export default (state = [], action) => {
  switch (action.type){
    debugger
    case "SET_MY_STRINGPACKS":
    return action.stringPacks
    default:
     return state
  }
}
