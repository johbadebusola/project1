import React, { Component } from 'react'

export class EventHandler extends Component {
    clickMe = () => {
        let a =2
        let b = 3
        alert(a*b)
    }
  render() {
    
    return (
      <button onClick={this.clickMe}> click me</button>
    )
  }
}

export default EventHandler