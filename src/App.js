import React from 'react';
import './App.css';
import Login from "./components/Login.js"

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Welcome To StrungOut</h1>
        <Login/>
      </div>
    );
  }
}
export default App;
