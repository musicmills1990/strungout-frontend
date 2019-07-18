import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm.js'
import myGuitars from './reducers/myGuitars.js'
import myStringPacks from './reducers/myStringPacks.js'
import newGuitarForm from './reducers/newGuitarForm.js'
import newStringPackForm from './reducers/newStringPackForm.js'





const reducer = combineReducers({
  currentUser,
  loginForm,
  myGuitars,
  myStringPacks,
  signupForm,
  newGuitarForm,
  newStringPackForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


export default store
