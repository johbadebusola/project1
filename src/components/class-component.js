import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"How are you today?"
      }

      this.change = () => {
        this.setState({
            message:"I am fine"
        })
      }
    }
render() {
    return( 
        <div>
     <h1 onMouseOver={this.change} >{this.state.message} </h1> 
  { this.props.children}
     
        </div>
  
    );
}
}

export default Welcome