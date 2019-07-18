import React from 'react';
import './App.css';
import { connect } from "react-redux"
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from "./components/Login.js"
import Signup from './components/Signup.js'
import  MyGuitars from './components/MyGuitars'
import  MyStringPack from './components/MyStringPacks'
import UserAccount from './components/UserAccount'
import BrokenStringContainer from './components/BrokenStringContainer'
import BrokenStringMessage from './components/BrokenStringMessage'



class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
      <Router>
        <div>
        <NavBar/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/guitars' component={MyGuitars}/>
        <Route exact path='/stringpacks' component={MyStringPack}/>
        <Route exact path='/account' component={UserAccount}/>
        <Route exact path='/brokenStringMessage' component={BrokenStringMessage}/>
        <BrokenStringContainer/>
        </div>
      </Router>
    );
  }
}


export default connect(null, { getCurrentUser })(App);
