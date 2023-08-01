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
    const{count}=this.state
    return (
      <div>
        <div>Count : {count}</div>
        <button onClick={()=> this.increment()}>Click</button>
      </div>
    )
  }
}

export default State
