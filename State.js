import React, { Component } from 'react'

class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment() {
        this.setState({
            count: this.state.count+1
        })
    }
    
  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick={()=> this.increment()}>Click</button>
      </div>
    )
  }
}

export default State
