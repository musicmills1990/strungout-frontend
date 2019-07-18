import { resetGuitarForm } from './newGuitarForm.js'

export const setMyGuitars = guitars => {
  return {
    type: "SET_MY_GUITARS",
    guitars
  }
}


export const getMyGuitars = () => {
  return(dispatch) => {
  fetch("http://localhost:3001/api/v1/guitars",{
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "appication/json"
    }
  })
    .then(r=> r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setMyGuitars(response.data))
      }
    })
    .catch(console.log)
  }
}

export const newGuitar = (credentials) => {
  const guitarInfo = {
    guitars: credentials
  }
  return(dispatch) => {
  fetch("http://localhost:3001/api/v1/guitars", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "appication/json"
    },
    body: JSON.stringify(guitarInfo)
  })
    .then(r => r.json())
    .then(guitarResponse => {
      if (guitarResponse.errors) {
        alert(guitarResponse.errors)
      } else {
        dispatch(setMyGuitars(guitarResponse.data))
        dispatch(resetGuitarForm())
      }
    })
    .catch(console.log)
  }
}
