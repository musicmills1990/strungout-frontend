import React from "react"
import { connect } from "react-redux"

 const UserAccount = ({ currentUser }) => {
   return (
     <div className="userAccountParent">
     {currentUser ?
       <div className="userAccountChild">
         <h1>{currentUser.attributes.name}</h1>
         <p>{currentUser.attributes.email}</p>
         <p>{currentUser.attributes.address}</p>
         <p>{currentUser.attributes.player_type}</p>
         <h5>StrungOut Plan:</h5><p>{currentUser.attributes.plan ? currentUser.attributes.plan : "No Plan Chosen"}</p>
         <h5>Payment Plan:</h5><p>{currentUser.attributes.pay_schedule ? currentUser.attributes.pay_schedule : "No Payment Schedule Chosen"}</p>
        </div>
       : ""}
     </div>
   )

}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(UserAccount)
