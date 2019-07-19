import { resetStringPackForm } from './newStringPackForm.js'

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

export const updateStrings = (credentials) => {
  debugger
  return(console.log(credentials))
}


export const newStringPack = (credentials) => {
  const stringPackInfo = {
    stringpacks: credentials
  }
  return(dispatch) => {
  fetch("http://localhost:3001/api/v1/string_packs", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "appication/json"
    },
    body: JSON.stringify(stringPackInfo)
  })
    .then(r => r.json())
    .then(stringPackResp => {
      if (stringPackResp.errors) {
        alert(stringPackResp.errors)
      } else {
        dispatch(setMyStringPacks(stringPackResp.data))
        dispatch(resetStringPackForm())
      }
    })
    .catch(console.log)
  }
}
