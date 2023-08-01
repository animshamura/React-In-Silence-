import React, { Component } from 'react'

class State extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message : "Hello"
    }
  }
  Mess(){
    this.setState({
      message : "GoodBye"
    })
  }
  
    
    
  render() {
    const{message}=this.state
    return (
      <div>
        <div>{message}</div>
        <button onClick={this.Mess.bind(this)}>Say</button>
      </div>
    )
  }
}

export default State
