import React, { Component } from 'react'

export default class Props2 extends Component {
   
  render() {
    const {name,cgpa} = this.props;
    return (
      
        <h1>{name} got {cgpa}</h1>
    
    )
  }
}
