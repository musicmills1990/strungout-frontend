import React from 'react'
import {connect} from 'react-redux'
import GuitarCard from './GuitarCard.js'
import NewGuitar from './NewGuitar'

const MyGuitars = (props) => {

  const guitarCard = props.guitars.map(g => <GuitarCard guitar={g} key={g.id}/>)

  return (
    guitarCard.length > 0 ? guitarCard : <NewGuitar/>
  )
}


const mapStateToProps = state => {
  return {
    guitars: state.myGuitars
  }
}

export default connect(mapStateToProps)(MyGuitars)
