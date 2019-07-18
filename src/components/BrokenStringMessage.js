import React from 'react'


const BrokenStringMessage = () => {
  return (
    <div className="brokenStringMessage">
    <h3>Ach! Sorry your string broke, but we've got you covered!</h3>
    <p>We're sending a new
    ~stringpack.chosenString~ string to:

     ~current_user.address~

     and it should arrive in 2 business days! In the meantime,
     use one of your two backup strings and keep rockin!"</p>
     </div>
  )
}

export default BrokenStringMessage
