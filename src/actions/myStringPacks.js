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
      "Content-Type": "application/json"
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

export const updateBrokenString = (credentials) => {
  const stringPackInfo = {
    stringpacks: credentials
  }
  return(dispatch) => {
  fetch("http://localhost:3001/api/v1/string_packs/1", {
    credentials: "include",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
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


export const newStringPack = (credentials) => {

  const newstringPackInfo = {
    stringpack: credentials
  }

  return(dispatch) => {
  fetch("http://localhost:3001/api/v1/string_packs", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newstringPackInfo)
  })
    .then(r => r.json())
    .then(stringPackResp => {
      if (stringPackResp.errors) {
        alert(stringPackResp.errors)
      } else {
        dispatch(getMyStringPacks(stringPackResp.data))
        dispatch(resetStringPackForm())
      }
    })
    .catch(console.log)
  }
}
