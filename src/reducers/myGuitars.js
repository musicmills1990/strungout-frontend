export default (state = [], action) => {
  switch (action.type){
    case "SET_MY_GUITARS":
    return action.guitars
    default:
     return state
  }
}
