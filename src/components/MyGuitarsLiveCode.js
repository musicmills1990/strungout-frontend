import React from 'react'
import GuitarCardLiveCode from './GuitarCardLiveCode.js'

class MyGuitarsLiveCode extends React.Component {

guitarArray = []

constructor(){
  super()
  this.state = {
    guitar_type: 'accoustic',
    brand: '',
    model: '',
    color: ''
  }

  this.handleOnChange = this.handleOnChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


  handleOnChange(event){
    this.setState({
    [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.sendGuitarInfo(this.state)
    this.setState({
      guitar_type: 'accoustic',
      brand: '',
      model: '',
      color: ''
    })
  }

  sendGuitarInfo(attributes){
    const guitars = [];
    let newGuitarArray = {
      ...guitars,
      attributes,
      id: Math.floor((Math.random() * 100) + 1),
      type: 'guitar'
    }
    this.guitarArray.push(newGuitarArray)
  }


render(){
  const guitarCardLiveCode = this.guitarArray.map(g => <GuitarCardLiveCode guitar={g} key={g.id}/>)
    return (
      <div>
      <h1>Your Guitars:</h1>
        <ul>
        {guitarCardLiveCode.length > 0 ? guitarCardLiveCode : null}
        </ul>
            <form id="guitar-form" onSubmit={this.handleSubmit}>
              <label>Accoustic or Electric?</label><br/>
              <select placeholder="guitar_type" value={this.state.guitar_type} onChange={this.handleOnChange} name="guitar_type" type="text">
                <option value="accoustic">Accoustic Guitar</option>
                <option value="electric">Electric Guitar</option>
              </select><br/>
                <input placeholder="brand" value={this.state.brand} onChange={this.handleOnChange} name="brand" type="text"/><br/>
                <input placeholder="model" value={this.state.model} onChange={this.handleOnChange} name="model" type="text"/><br/>
                <input placeholder="color" value={this.state.color} onChange={this.handleOnChange} name="color" type="text"/>
              <br/>
                <input type="submit" value="Register Your Guitar"/>
            </form>
      </div>
    )
  }
}
export default (MyGuitarsLiveCode)


// const mapStateToProps = state => {
//   return {
//     guitars: state.myGuitars
//   }
// }


// connect(mapStateToProps)

// const guitarCardLiveCode = guitarInfo.map(g => <GuitarCardLiveCode guitar={g}/>)
// {guitarCardLiveCode.length > 0 ? guitarCardLiveCode : ''}
// {JSON.stringify(newGuitar)}

// maybe I need the initial state to just be an empty array....
//think about how the reducer spreads the empty array and adds whatever has come into it for your sendGuitarInfo function
