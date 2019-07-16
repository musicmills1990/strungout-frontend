export const setMyStringPacks = stringPacks => {
  return {
    type: "SET_MY_STRINGPACKS",
    stringPacks
  }
}


export const getMyStringPacks = () => {
  return dispatch => {
  fetch("http://localhost:3001/api/v1/string_packs",{
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "appication/json"
    }
  })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setMyStringPacks(response.data))
      }
    })
    .catch(console.log)
  }
}
