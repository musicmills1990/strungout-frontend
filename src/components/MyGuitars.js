import React from 'react'
import {connect} from 'react-redux'
import GuitarCard from './GuitarCard.js'

const MyGuitars = (props) => {

  const guitarCard = props.guitars.map(g => <GuitarCard guitar={g} key={g.id}/>)
  return (
    guitarCard.length > 0 ? guitarCard : null
  )
}


const mapStateToProps = state => {
  return {
    guitars: state.myGuitars
  }
}

export default connect(mapStateToProps)(MyGuitars)
