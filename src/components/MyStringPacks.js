import React from 'react'
import {connect} from 'react-redux'
import StringPackCard from './StringPackCard.js'
import NewStringPack from './NewStringPack.js'


const MyStringPacks = (props) => {
  const stringPackCard = props.stringPacks.map(str => <StringPackCard stringPack={str} key={str.id}/>)
  return (
    stringPackCard.length > 0 ? stringPackCard : <NewStringPack/>
  )
}



const mapStateToProps = state => {
  return {
    stringPacks: state.myStringPacks
  }
}

export default connect(mapStateToProps)(MyStringPacks)
