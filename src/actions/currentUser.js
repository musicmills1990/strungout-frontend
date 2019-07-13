import { resetLoginForm } from './loginForm.js'
import { getMyGuitars } from './myGuitars.js'

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}
export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER",
  }

}

export const login = (credentials) => {
  return(dispatch) => {
      return fetch('http://localhost:3001/api/v1/login', {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(r => r.json())
        .then(userResponse => {
          if (userResponse.errors){
            alert(userResponse.errors)
          } else {
            dispatch(setCurrentUser(userResponse.data))
            dispatch(getMyGuitars())
            dispatch(resetLoginForm())
          }
        })
        .catch(console.log)
  }
}
export const logout = (credentials) => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
       method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/get_current_user", {
        credientials: 'include',
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        }
      })
        .then(r => r.json())
        .then(userResponse => {
          if (userResponse.errors){
            alert(userResponse.errors)
          } else {
            dispatch(setCurrentUser(userResponse.data))
          }
        })
        .catch(console.log)
  }
}