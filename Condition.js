import React, { Component } from 'react'

export class Condition extends Component {
constructor(props) {
  super(props)

  this.state = {
       login : true,
       pass : true
  }
}
    
  render() {
    const {pass,login} = this.state
    if(login&&pass){
    return (
      <div>
       <h1>You are logged in and have pass </h1>
      </div>
    )
    }
    else if(!login&&pass){
        return (
            <div>
             <h1>You are not logged in but have pass</h1>
            </div>
          )
      
    }
    else if(login&&!pass){
      return (
          <div>
           <h1>You are logged in but not have pass</h1>
          </div>
        )
    
  }
  else {
    return (
        <div>
         <h1>You are not logged in and not have pass</h1>
        </div>
      )
  
}
  }
}

export default Condition
